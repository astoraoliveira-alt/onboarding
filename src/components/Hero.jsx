import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MousePointer2, Info, ArrowRight } from 'lucide-react';
import './Hero.css';

// --- Configuration Constants ---
const PARTICLE_DENSITY = 0.00015;
const BG_PARTICLE_DENSITY = 0.00005;
const MOUSE_RADIUS = 200;
const RETURN_SPEED = 0.08;
const DAMPING = 0.90;
const REPULSION_STRENGTH = 1.2;

const randomRange = (min, max) => Math.random() * (max - min) + min;

const ParticleCanvas = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [debugInfo, setDebugInfo] = useState({ count: 0, fps: 0 });

    const particlesRef = useRef([]);
    const backgroundParticlesRef = useRef([]);
    const mouseRef = useRef({ x: -1000, y: -1000, isActive: false });
    const frameIdRef = useRef(0);
    const lastTimeRef = useRef(0);

    const initParticles = useCallback((width, height) => {
        // 1. Interactive Particles
        const particleCount = Math.floor(width * height * PARTICLE_DENSITY);
        const newParticles = [];

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;

            newParticles.push({
                x: x,
                y: y,
                originX: x,
                originY: y,
                vx: 0,
                vy: 0,
                size: randomRange(1, 2.5),
                // Use brand colors: Secondary #00c6ff (Cyan), Primary #7000ff (Purple)
                color: Math.random() > 0.9 ? '#00c6ff' : '#ffffff',
                angle: Math.random() * Math.PI * 2,
            });
        }
        particlesRef.current = newParticles;

        // 2. Background Particles
        const bgCount = Math.floor(width * height * BG_PARTICLE_DENSITY);
        const newBgParticles = [];

        for (let i = 0; i < bgCount; i++) {
            newBgParticles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: randomRange(0.5, 1.5),
                alpha: randomRange(0.1, 0.4),
                phase: Math.random() * Math.PI * 2
            });
        }
        backgroundParticlesRef.current = newBgParticles;

        setDebugInfo(prev => ({ ...prev, count: particleCount + bgCount }));
    }, []);

    const animate = useCallback((time) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const delta = time - lastTimeRef.current;
        lastTimeRef.current = time;
        if (delta > 0) {
            setDebugInfo(prev => ({ ...prev, fps: Math.round(1000 / delta) }));
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // --- Background Effects ---
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const pulseSpeed = 0.0008;
        const pulseOpacity = Math.sin(time * pulseSpeed) * 0.035 + 0.085;

        // Radial Glow using brand color #7000ff (Purple)
        const gradient = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, Math.max(canvas.width, canvas.height) * 0.7
        );
        gradient.addColorStop(0, `rgba(112, 0, 255, ${pulseOpacity})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Background Particles
        const bgParticles = backgroundParticlesRef.current;
        ctx.fillStyle = "#ffffff";

        for (let i = 0; i < bgParticles.length; i++) {
            const p = bgParticles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            const twinkle = Math.sin(time * 0.002 + p.phase) * 0.5 + 0.5;
            const currentAlpha = p.alpha * (0.3 + 0.7 * twinkle);

            ctx.globalAlpha = currentAlpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1.0;

        // --- Main Physics ---
        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (mouse.isActive && distance < MOUSE_RADIUS) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;

                const repulsion = force * REPULSION_STRENGTH;
                p.vx -= forceDirectionX * repulsion * 5;
                p.vy -= forceDirectionY * repulsion * 5;
            }

            const springDx = p.originX - p.x;
            const springDy = p.originY - p.y;

            p.vx += springDx * RETURN_SPEED;
            p.vy += springDy * RETURN_SPEED;
        }

        // Collisions
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];

                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const distSq = dx * dx + dy * dy;
                const minDist = p1.size + p2.size;

                if (distSq < minDist * minDist) {
                    const dist = Math.sqrt(distSq);

                    if (dist > 0.01) {
                        const nx = dx / dist;
                        const ny = dy / dist;

                        const overlap = minDist - dist;
                        const pushX = nx * overlap * 0.5;
                        const pushY = ny * overlap * 0.5;

                        p1.x -= pushX;
                        p1.y -= pushY;
                        p2.x += pushX;
                        p2.y += pushY;

                        const dvx = p1.vx - p2.vx;
                        const dvy = p1.vy - p2.vy;
                        const velocityAlongNormal = dvx * nx + dvy * ny;

                        if (velocityAlongNormal > 0) {
                            const m1 = p1.size;
                            const m2 = p2.size;
                            const restitution = 0.85;

                            const impulseMagnitude = (-(1 + restitution) * velocityAlongNormal) / (1 / m1 + 1 / m2);
                            const impulseX = impulseMagnitude * nx;
                            const impulseY = impulseMagnitude * ny;

                            p1.vx += impulseX / m1;
                            p1.vy += impulseY / m1;
                            p2.vx -= impulseX / m2;
                            p2.vy -= impulseY / m2;
                        }
                    }
                }
            }
        }

        // Update & Draw
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.vx *= DAMPING;
            p.vy *= DAMPING;

            p.x += p.vx;
            p.y += p.vy;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

            const velocity = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            const opacity = Math.min(0.3 + velocity * 0.1, 1);

            ctx.fillStyle = p.color === '#ffffff'
                ? `rgba(255, 255, 255, ${opacity})`
                : p.color;

            ctx.fill();
        }

        frameIdRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current && canvasRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;

                canvasRef.current.width = width * dpr;
                canvasRef.current.height = height * dpr;

                canvasRef.current.style.width = `${width}px`;
                canvasRef.current.style.height = `${height}px`;

                const ctx = canvasRef.current.getContext('2d');
                if (ctx) ctx.scale(dpr, dpr);

                initParticles(width, height);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [initParticles]);

    useEffect(() => {
        frameIdRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameIdRef.current);
    }, [animate]);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            isActive: true,
        };
    };

    const handleMouseLeave = () => {
        mouseRef.current.isActive = false;
    };

    return (
        <div
            ref={containerRef}
            className="particle-canvas-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <canvas ref={canvasRef} className="particle-canvas-element" />
        </div>
    );
};

const Hero = ({ employeeName, email }) => {
    return (
        <div className="hero-root">
            <ParticleCanvas />

            <div className="hero-ui-content container">
                <div className="hero-grid">
                    {/* Left Column: Inspiration & Welcome */}
                    <div className="hero-text-column animate-fade-in-up">
                        <div className="hero-badge">
                            <span>Sua Jornada Começa Agora</span>
                        </div>

                        <h1 className="hero-title">
                            Olá, <br />
                            <span className="hero-highlight">{employeeName.split(' ')[0]}</span>.
                        </h1>

                        <p className="hero-description">
                            Você não foi contratado apenas pelo que sabe, mas pelo que podemos construir juntos.
                            Este é o seu centro de controle para dominar nossa cultura, ferramentas e desafios.
                        </p>

                        <div className="hero-actions">
                            <button className="hero-btn-primary group" onClick={() => {
                                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                            }}>
                                <span className="relative z-10">Iniciar Jornada</span>
                                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button className="hero-btn-secondary" onClick={() => {
                                document.getElementById('teams-manual').scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <span>Ver Manuais</span>
                            </button>
                        </div>

                        <div className="hero-stats-row">
                            <div className="stat-item">
                                <span className="stat-val">30</span>
                                <span className="stat-lbl">Dias de Imersão</span>
                            </div>
                            <div className="stat-separator"></div>
                            <div className="stat-item">
                                <span className="stat-val">100%</span>
                                <span className="stat-lbl">Suporte</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Fun Post-it Wall */}
                    <div className="hero-card-column animate-pop-in">
                        <div className="postit-wall">
                            {/* Card 1 - Coffee */}
                            <div className="tech-postit card-1 glass-panel" style={{ '--delay': '0s' }}>
                                <div className="pin-icon">📍</div>
                                <div className="postit-content">
                                    <span className="postit-emoji">☕</span>
                                    <h4>Café com Mentor</h4>
                                    <p>Agende um papo de 15min para se conectar.</p>
                                </div>
                            </div>

                            {/* Card 2 - Tools */}
                            <div className="tech-postit card-2 glass-panel" style={{ '--delay': '1.5s' }}>
                                <div className="pin-icon">🔧</div>
                                <div className="postit-content">
                                    <span className="postit-emoji">💻</span>
                                    <h4>Setup Inicial</h4>
                                    <p>Configure seu Outlook e Teams para começar.</p>
                                </div>
                                <button className="mini-action-btn" onClick={() => document.getElementById('microsoft-section').scrollIntoView({ behavior: 'smooth' })}>
                                    Ver Guia
                                </button>
                            </div>

                            {/* Card 3 - Culture */}
                            <div className="tech-postit card-3 glass-panel" style={{ '--delay': '0.8s' }}>
                                <div className="pin-icon">🚀</div>
                                <div className="postit-content">
                                    <span className="postit-emoji">✨</span>
                                    <h4>Cultura Davos</h4>
                                    <p>Descubra o que nos torna únicos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator-wrapper">
                <span>Explore o Universo Davos</span>
                <MousePointer2 size={16} />
            </div>
        </div>
    );
};
export default Hero;
