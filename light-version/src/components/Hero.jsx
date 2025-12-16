import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, Star, Target, TrendingUp, Users } from 'lucide-react';
import './Hero.css';

// --- Particle Config Light ---
const PARTICLE_COLOR = '#D4AF37'; // Gold
const LINE_COLOR = 'rgba(200, 200, 200, 0.3)'; // Subtle Grey

const LightParticleCanvas = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const frameIdRef = useRef(0);

    const initParticles = useCallback((width, height) => {
        const count = Math.floor((width * height) / 15000); // Less particles, cleaner look
        const newParticles = [];
        for (let i = 0; i < count; i++) {
            newParticles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                color: PARTICLE_COLOR
            });
        }
        particlesRef.current = newParticles;
    }, []);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Connections
        const particles = particlesRef.current;
        ctx.strokeStyle = LINE_COLOR;
        ctx.lineWidth = 0.5;

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];

            // Move
            p.x += p.vx;
            p.y += p.vy;

            // Bounce
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            // Mouse Interaction (repel slightly)
            const dx = mouseRef.current.x - p.x;
            const dy = mouseRef.current.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
                p.x -= dx * 0.01;
                p.y -= dy * 0.01;
            }

            // Draw Point
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            // Connect
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx2 = p.x - p2.x;
                const dy2 = p.y - p2.y;
                const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                if (dist2 < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        frameIdRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current && canvasRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                canvasRef.current.width = width;
                canvasRef.current.height = height;
                initParticles(width, height);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        frameIdRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameIdRef.current);
        };
    }, [initParticles, animate]);

    return (
        <div ref={containerRef} className="hero-light-canvas-container">
            <canvas ref={canvasRef} onMouseMove={(e) => {
                const rect = e.target.getBoundingClientRect();
                mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
            }} />
        </div>
    );
};

const Hero = ({ employeeName }) => {
    return (
        <section className="hero-light-root">
            <LightParticleCanvas />

            <div className="container hero-light-content">
                <div className="hero-text-col">
                    <div className="welcome-pill">
                        <span className="pill-dot"></span>
                        Bem-vindo ao Time Davos
                    </div>
                    <h1>
                        Olá, <span className="text-gold">{employeeName.split(' ')[0]}</span>.<br />
                        Sua evolução <br />
                        começa aqui.
                    </h1>
                    <p className="hero-subtitle">
                        Você não foi contratado apenas pelo que sabe, mas pelo impacto que pode gerar.
                        Este portal é o seu hub central para imersão, crescimento e sucesso na sua jornada conosco.
                    </p>

                    <div className="hero-actions-row">
                        <button className="btn-gold-primary" onClick={() => window.dispatchEvent(new CustomEvent('expandHeader'))}>
                            Iniciar Onboarding <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="trust-badges">
                        <div className="badge-item">
                            <Users size={16} className="text-gold" />
                            <span>Comunidade Colaborativa</span>
                        </div>
                        <div className="badge-item">
                            <TrendingUp size={16} className="text-gold" />
                            <span>Crescimento Acelerado</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Interactive Cards Composition (Mais Conteúdo Visual) */}
                <div className="hero-visual-col">
                    <div className="floating-card card-main">
                        <div className="card-icon-bg">
                            <Target size={32} color="#fff" />
                        </div>
                        <h3>Sua Missão</h3>
                        <p>Transformar desafios complexos em soluções digitais elegantes.</p>
                        <div className="progress-mini">
                            <div className="prog-bar" style={{ width: '15%' }}></div>
                        </div>
                        <span className="micro-label">Jornada Inicial: 15%</span>
                    </div>

                    <div className="floating-card card-secondary">
                        <div className="icon-row">
                            <Star size={20} fill="#D4AF37" color="#D4AF37" />
                            <Star size={20} fill="#D4AF37" color="#D4AF37" />
                            <Star size={20} fill="#D4AF37" color="#D4AF37" />
                        </div>
                        <h4>Excellence First</h4>
                        <p>Qualidade é nosso DNA.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
