import React from 'react';
import { Shield, Key, ExternalLink } from 'lucide-react';
import './SectionStyles.css'; // Shared styles for sections

const SecuritySection = () => {
    return (
        <section className="section-container" id="security">
            <div className="section-header">
                <Shield size={32} className="section-icon" />
                <h2>Segurança da Conta</h2>
            </div>

            <div className="glass-panel content-panel">
                <h3>Como alterar sua senha Microsoft</h3>
                <p className="subtitle">Mantenha sua conta segura alterando sua senha inicial.</p>

                <div className="steps-container">
                    <div className="step-item">
                        <span className="step-number">1</span>
                        <p>Acesse <a href="https://myaccount.microsoft.com/" target="_blank" rel="noopener noreferrer">myaccount.microsoft.com</a></p>
                    </div>
                    <div className="step-item">
                        <span className="step-number">2</span>
                        <p>Faça login com seu e-mail corporativo e senha provisória.</p>
                    </div>
                    <div className="step-item">
                        <span className="step-number">3</span>
                        <p>No painel "Visão geral", clique em <strong>"Senha"</strong> ou "Alterar Senha".</p>
                    </div>
                    <div className="step-item">
                        <span className="step-number">4</span>
                        <p>Digite a senha antiga, crie uma nova senha forte e salve.</p>
                    </div>
                </div>

                <a href="https://account.activedirectory.windowsazure.com/ChangePassword.aspx" target="_blank" rel="noopener noreferrer" className="action-btn">
                    <Key size={18} />
                    Alterar Senha Agora
                    <ExternalLink size={14} />
                </a>
            </div>
        </section>
    );
};

export default SecuritySection;
