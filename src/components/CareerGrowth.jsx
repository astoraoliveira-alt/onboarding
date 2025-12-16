import React from 'react';
import { TrendingUp, GraduationCap, Gift, DollarSign, Star, BookOpen } from 'lucide-react';
import './StrategicSections.css';

const CareerGrowth = () => {
    return (
        <section className="strategic-section">
            <div className="section-head-title">
                <h2>Carreira, Desenvolvimento & Incentivos</h2>
                <p>Crescemos juntos. Conheça as oportunidades que a Davos oferece para o seu futuro.</p>
            </div>

            {/* Career Path Steps */}
            <div className="career-path-container">
                <div className="career-step">
                    <div className="step-circle">JR</div>
                    <div className="step-content">
                        <h3>
                            <span>Analista Júnior</span>
                            <span className="step-salary">Entrada</span>
                        </h3>
                        <p className="step-reqs">Foco em execução e aprendizado. Domínio das ferramentas básicas.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle">PL</div>
                    <div className="step-content">
                        <h3>
                            <span>Analista Pleno</span>
                            <span className="step-salary">Crescimento</span>
                        </h3>
                        <p className="step-reqs">Autonomia na execução, resolução de problemas complexos e mentoria de juniores.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle">SR</div>
                    <div className="step-content">
                        <h3>
                            <span>Analista Sênior</span>
                            <span className="step-salary">Liderança</span>
                        </h3>
                        <p className="step-reqs">Referência técnica, arquitetura de soluções e interface direta com clientes estratégicos.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle" style={{ borderColor: '#00c6ff', color: '#00c6ff' }}>ESP</div>
                    <div className="step-content" style={{ borderLeftColor: '#00c6ff' }}>
                        <h3>
                            <span>Especialista / Tech Lead</span>
                            <span className="step-salary" style={{ color: '#00c6ff', background: 'rgba(0,198,255,0.1)' }}>Topo Técnico</span>
                        </h3>
                        <p className="step-reqs">Responsável por decisões técnicas críticas, gestão de squad ou profundidade extrema em uma tecnologia.</p>
                    </div>
                </div>
            </div>

            {/* Incentives Grid */}
            <div className="incentives-grid">
                <div className="incentive-card">
                    <div className="incentive-icon">💰</div>
                    <h3>Bônus & PLR</h3>
                    <p>Participação nos lucros semestral baseada em metas globais e individuais.</p>
                </div>
                <div className="incentive-card">
                    <div className="incentive-icon">📚</div>
                    <h3>Budget de Educação</h3>
                    <p>R$ 2.000,00 anuais para cursos, livros e eventos da área.</p>
                </div>
                <div className="incentive-card">
                    <div className="incentive-icon">🇺🇸</div>
                    <h3>Incentivo Idiomas</h3>
                    <p>Reembolso de 50% em cursos de Inglês ou Espanhol.</p>
                </div>
                <div className="incentive-card">
                    <div className="incentive-icon">🏥</div>
                    <h3>Saúde Premium</h3>
                    <p>Plano de saúde Top Nacional sem coparticipação.</p>
                </div>
                <div className="incentive-card">
                    <div className="incentive-icon">🏅</div>
                    <h3>Certificações</h3>
                    <p>Pagamos 100% das suas certificações oficiais (Microsoft, AWS, etc).</p>
                </div>
                <div className="incentive-card">
                    <div className="incentive-icon">🧘</div>
                    <h3>Bem-estar</h3>
                    <p>Assinatura Gympass e suporte psicológico ilimitado.</p>
                </div>
            </div>

        </section>
    );
};

export default CareerGrowth;
