import React from 'react';
import { Target, Eye, Heart, Globe, Briefcase, Zap } from 'lucide-react';
import './StrategicSections.css';

const BusinessContext = () => {
    return (
        <section className="strategic-section">
            <div className="section-head-title">
                <h2>Contexto de Negócio & Estratégia</h2>
                <p>Entenda quem somos, para onde vamos e como você faz parte dessa história.</p>
            </div>

            {/* Mission / Vision / Values */}
            <div className="mission-vision-grid">
                <div className="mv-card">
                    <div className="mv-icon"><Target /></div>
                    <h3>Nossa Missão</h3>
                    <p>Ajudar empresas a evoluírem com clareza e direção, conectando estratégia, execução e tecnologia para resolver problemas complexos e transformar decisões em resultados concretos, de forma rápida, consistente e sustentável.</p>
                </div>
                <div className="mv-card">
                    <div className="mv-icon"><Eye /></div>
                    <h3>Nossa Visão</h3>
                    <p>Transformar negócios resolvendo problemas reais, com foco em resultados mensuráveis. Atuamos com agilidade, clareza e disciplina, entregando valor de forma contínua e sustentável. Trabalhamos em parceria com nossos clientes, lado a lado, conectando tecnologia, processos e pessoas para impulsionar decisões melhores, execuções mais rápidas e impacto duradouro no negócio.</p>
                </div>
                <div className="mv-card">
                    <div className="mv-icon"><Heart /></div>
                    <h3>Nossos Princípios</h3>
                    <p>Atuamos com foco em resultados reais, usando agilidade com propósito para reduzir incertezas e acelerar decisões. Trabalhamos em parceria genuína com nossos clientes, compartilhando responsabilidades e assumindo a execução. Valorizamos simplicidade, disciplina e evolução contínua para gerar impacto consistente e sustentável no negócio.</p>
                </div>
            </div>

            {/* Business Model */}
            <div className="business-model-grid">
                <div className="bm-col">
                    <h3><Briefcase color="#00c6ff" /> Como atuamos</h3>
                    <div className="bm-list">
                        <div className="bm-item">
                            <strong>Consultoria Estratégica</strong>
                            <span>Diagnóstico e roadmap digital</span>
                        </div>
                        <div className="bm-item">
                            <strong>Desenvolvimento de Software</strong>
                            <span>SaaS e aplicações sob medida</span>
                        </div>
                        <div className="bm-item">
                            <strong>Outsourcing de TI</strong>
                            <span>Squads de alta performance</span>
                        </div>
                    </div>
                </div>
                <div className="bm-col">
                    <h3><Zap color="#fbbf24" /> Diferenciais</h3>
                    <div className="bm-list">
                        <div className="bm-item">
                            <strong>Metodologia Ágil Proprietária</strong>
                            <span>Entregas mais rápidas e com menos retrabalho</span>
                        </div>
                        <div className="bm-item">
                            <strong>Cultura "Client-First"</strong>
                            <span>Atendimento personalizado e proativo</span>
                        </div>
                        <div className="bm-item">
                            <strong>Talent Density</strong>
                            <span>Apenas os top 5% dos talentos do mercado</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="history-timeline">
                <div className="timeline-track"></div>
                <div className="timeline-events">

                    <div className="t-event">
                        <span className="t-year">1996 - 2003</span>
                        <div className="t-dot"></div>
                        <div className="t-content">
                            <h4>Fundação técnica</h4>
                            <p>Experiências iniciais em tecnologia, engenharia de processos, software e projetos corporativos.</p>
                        </div>
                    </div>

                    <div className="t-event">
                        <span className="t-year">2004 - 2011</span>
                        <div className="t-dot"></div>
                        <div className="t-content">
                            <h4>Consultoria Global</h4>
                            <p>Atuação em grandes programas de transformação em bancos e seguradoras pela Accenture.</p>
                        </div>
                    </div>

                    <div className="t-event">
                        <span className="t-year">2011 - 2017</span>
                        <div className="t-dot"></div>
                        <div className="t-content">
                            <h4>Transformação Digital</h4>
                            <p>Liderança de práticas de consultoria na EY em analytics, automação e CX.</p>
                        </div>
                    </div>

                    <div className="t-event">
                        <span className="t-year">2017 - 2019</span>
                        <div className="t-dot"></div>
                        <div className="t-content">
                            <h4>IA & Experience</h4>
                            <p>Condução de iniciativas de IA e transformação de canais na IBM.</p>
                        </div>
                    </div>

                    <div className="t-event">
                        <span className="t-year">2019 - 2024</span>
                        <div className="t-dot"></div>
                        <div className="t-content">
                            <h4>Liderança Executiva</h4>
                            <p>Posições executivas (Accenture, Minsait, FourD) liderando vendas e delivery.</p>
                        </div>
                    </div>

                    <div className="t-event highlight">
                        <span className="t-year">2025</span>
                        <div className="t-dot"></div>
                        <div className="t-content">
                            <h4>Nascimento da DAVOS</h4>
                            <p>Criação da empresa unindo décadas de experiência para entregar impacto real.</p>
                        </div>
                    </div>

                    <div className="t-event highlight">
                        <span className="t-year">2026</span>
                        <div className="t-dot"></div>
                        <div className="t-content">
                            <h4>Consolidação</h4>
                            <p>Foco em expansão, parcerias estratégicas e consolidação do modelo Davos.</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default BusinessContext;
