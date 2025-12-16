import React from 'react';
import './StrategicSections.css';

const CareerGrowth = () => {
    return (
        <section className="strategic-section">
            <div className="section-head-title">
                <h2>Carreira, Desenvolvimento & Incentivos</h2>
                <p>Uma trilha clara de evolução, do nível de entrada à diretoria, focada em mérito e impacto.</p>
            </div>

            {/* Career Path Steps */}
            <div className="career-path-container">

                {/* --- FASE 1: EXECUÇÃO & FUNDAÇÃO --- */}
                <div className="career-step">
                    <div className="step-circle">EL</div>
                    <div className="step-content">
                        <h3><span>MC - Entry Level</span></h3>
                        <p className="step-reqs">Foco em aprendizado intensivo, disciplina operacional e apoio à execução de tarefas de projeto.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle">AS</div>
                    <div className="step-content">
                        <h3><span>MC - Associate</span></h3>
                        <p className="step-reqs">Execução consistente de atividades com qualidade e absorção da cultura de consultoria.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle">AC</div>
                    <div className="step-content">
                        <h3><span>MC - Associate Consultant</span></h3>
                        <p className="step-reqs">Início da análise crítica de dados e processos, apoiando diretamente a construção de soluções.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle">SA</div>
                    <div className="step-content">
                        <h3><span>MC - Senior Associate</span></h3>
                        <p className="step-reqs">Autonomia na execução de tarefas complexas e responsabilidade pela qualidade das entregas.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle">EA</div>
                    <div className="step-content">
                        <h3><span>MC - Executive Associate</span></h3>
                        <p className="step-reqs">Referência técnica na execução, ponte entre operação e gestão, garantindo a disciplina do time.</p>
                    </div>
                </div>

                {/* --- FASE 2: CONSULTORIA & SOLUÇÃO --- */}
                <div className="career-step">
                    <div className="step-circle highlight">CO</div>
                    <div className="step-content highlight-border">
                        <h3><span>MC - Consultant</span> <span className="step-salary blue">Consultor</span></h3>
                        <p className="step-reqs">Gestão de módulos do projeto, interação direta com clientes e resolução autônoma de problemas.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle highlight">SC</div>
                    <div className="step-content highlight-border">
                        <h3><span>MC - Senior Consultant</span> <span className="step-salary blue">Líder de Frente</span></h3>
                        <p className="step-reqs">Liderança de frentes de trabalho ("workstreams"), gestão técnica e mentoria de associados.</p>
                    </div>
                </div>

                {/* --- FASE 3: GESTÃO & LIDERANÇA --- */}
                <div className="career-step">
                    <div className="step-circle manager">MG</div>
                    <div className="step-content manager-border">
                        <h3><span>MC - Manager</span> <span className="step-salary purple">Gestão</span></h3>
                        <p className="step-reqs">Gestão integral de projetos (Escopo, Prazo, Custo), liderança de times multidisciplinares.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle manager">SM</div>
                    <div className="step-content manager-border">
                        <h3><span>MC - Senior Manager</span> <span className="step-salary purple">Gestão Sênior</span></h3>
                        <p className="step-reqs">Gestão de múltiplos projetos ou contas complexas, relacionamento tático e expansão de contratos.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle manager">ES</div>
                    <div className="step-content manager-border">
                        <h3><span>MC - Executive Sr Manager</span> <span className="step-salary purple">Executivo</span></h3>
                        <p className="step-reqs">Liderança de programas de transformação, desenvolvimento de novas ofertas e estratégia de delivery.</p>
                    </div>
                </div>

                {/* --- FASE 4: DIREÇÃO & ESTRATÉGIA --- */}
                <div className="career-step">
                    <div className="step-circle director">AD</div>
                    <div className="step-content director-border">
                        <h3><span>MC - Associate Director</span> <span className="step-salary gold">Direção</span></h3>
                        <p className="step-reqs">Desenvolvimento de contas estratégicas, liderança comercial (Sales) e gestão de P&L.</p>
                    </div>
                </div>

                <div className="career-step">
                    <div className="step-circle director">DR</div>
                    <div className="step-content director-border">
                        <h3><span>MC - Director</span> <span className="step-salary gold">Sócio</span></h3>
                        <p className="step-reqs">Definição estratégica da companhia, relacionamento C-Level e condução do futuro da organização.</p>
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
                    <p>Incentivo anual para cursos, especializações e eventos da área.</p>
                </div>
                <div className="incentive-card">
                    <div className="incentive-icon">🇺🇸</div>
                    <h3>Idiomas</h3>
                    <p>Apoio financeiro para cursos de Inglês focado em negócios.</p>
                </div>
                <div className="incentive-card">
                    <div className="incentive-icon">🏥</div>
                    <h3>Saúde Premium</h3>
                    <p>Plano de saúde Top Nacional para você e dependentes.</p>
                </div>
                <div className="incentive-card">
                    <div className="incentive-icon">🏅</div>
                    <h3>Certificações</h3>
                    <p>Reembolso integral de certificações oficiais (Microsoft, AWS, PMP, etc).</p>
                </div>
                <div className="incentive-card">
                    <div className="incentive-icon">🚀</div>
                    <h3>Carreira Acelerada</h3>
                    <p>Ciclos de avaliação curtos que permitem promoções baseadas em mérito real.</p>
                </div>
            </div>

        </section>
    );
};

export default CareerGrowth;
