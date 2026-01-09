import React from 'react';
import { Headset, Receipt, Users, ArrowRight, Calendar, Wrench } from 'lucide-react';
import './SectionStyles.css';
import './ToolsAndSupport.css';

const ToolsAndSupport = () => {
    return (
        <section className="section-container tools-support-section" id="tools-support">
            <div className="section-header">
                <Wrench size={32} className="section-icon" />
                <h2>Ferramentas do Dia a Dia</h2>
            </div>

            <div className="tools-grid">
                {/* Support Card */}
                <div className="tool-card glass-panel">
                    <div className="tool-icon support">
                        <Headset size={32} />
                    </div>
                    <h3>Suporte Técnico</h3>
                    <p>Precisa de ajuda? Nossa equipe está pronta para te auxiliar.</p>
                    <div className="tool-info">
                        <span className="label">Empresa:</span>
                        <span className="value">BMTech</span>
                    </div>
                    <div className="tool-info">
                        <span className="label">E-mail:</span>
                        <a href="mailto:suporte@davosbr.com" className="value link">suporte@davosbr.com</a>
                    </div>
                </div>

                {/* Expense Card */}
                <div className="tool-card glass-panel">
                    <div className="tool-icon expense">
                        <Receipt size={32} />
                    </div>
                    <h3>Despesas</h3>
                    <p>Registre suas despesas corporativas de forma rápida e fácil.</p>
                    <a
                        href="https://expense.davosconsulting.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tool-btn"
                    >
                        <span>Acessar Sistema</span>
                        <ArrowRight size={16} />
                    </a>
                </div>

                {/* CRM Card */}
                <div className="tool-card glass-panel">
                    <div className="tool-icon crm">
                        <Users size={32} />
                    </div>
                    <h3>CRM</h3>
                    <p>Gerencie seus contatos e oportunidades de negócio.</p>
                    <a
                        href="https://crm.davosconsulting.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tool-btn"
                    >
                        <span>Abrir CRM</span>
                        <ArrowRight size={16} />
                    </a>
                </div>

                {/* Payment Day Card */}
                <div className="tool-card glass-panel highlight">
                    <div className="tool-icon payment">
                        <Calendar size={32} />
                    </div>
                    <h3>Dia de Pagamento</h3>
                    <p>Seu salário é creditado mensalmente no dia:</p>
                    <div className="payment-day">
                        <span className="day-number">15</span>
                        <span className="day-label">de cada mês</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsAndSupport;
