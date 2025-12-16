import React from 'react';
import { Wrench, CreditCard, DollarSign, Laptop, ExternalLink, CalendarClock } from 'lucide-react';
import './SectionStyles.css';
import './ToolsAndSupport.css';

const ToolsAndSupport = () => {
    return (
        <section className="section-container" id="tools">
            <div className="section-header">
                <Wrench size={32} className="section-icon" />
                <h2>Ferramentas e Suporte</h2>
            </div>

            <div className="tools-grid">
                {/* Contact Support */}
                <div className="tool-card glass-panel support-highlight">
                    <div className="card-top">
                        <Laptop size={28} className="icon-main" />
                        <h3>Suporte Técnico</h3>
                    </div>
                    <p>Problemas com seu notebook?</p>
                    <div className="contact-box">
                        <strong>TechSolutions IT</strong>
                        <span>suporte@techsolutions.com</span>
                        <span>(11) 99999-8888</span>
                    </div>
                </div>

                {/* Finance / Expenses */}
                <a href="https://expense.davosconsulting.com.br" target="_blank" rel="noopener noreferrer" className="tool-card glass-panel link-card">
                    <div className="card-top">
                        <CreditCard size={28} className="icon-main" />
                        <h3>Despesas</h3>
                    </div>
                    <p>Lance seus reembolsos e despesas mensais.</p>
                    <div className="fake-btn">Acessar Portal <ExternalLink size={14} /></div>
                </a>

                {/* CRM */}
                <a href="https://crm.davosconsulting.com.br" target="_blank" rel="noopener noreferrer" className="tool-card glass-panel link-card">
                    <div className="card-top">
                        <div className="crm-icon">CRM</div>
                        <h3>Gestão de Clientes</h3>
                    </div>
                    <p>Acesse o CRM para gerenciar suas contas.</p>
                    <div className="fake-btn">Acessar CRM <ExternalLink size={14} /></div>
                </a>

                {/* Payment Day */}
                <div className="tool-card glass-panel payment-card">
                    <div className="card-top">
                        <CalendarClock size={28} className="icon-main" />
                        <h3>Pagamento</h3>
                    </div>
                    <div className="payment-info">
                        <span className="big-day">05</span>
                        <span className="desc">Dia do pagamento (5º dia útil)</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsAndSupport;
