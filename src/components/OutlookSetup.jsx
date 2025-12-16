import React, { useState } from 'react';
import { Smartphone, Mail, CheckCircle, ChevronRight, Apple, Chrome } from 'lucide-react';
import './OutlookSetup.css';

const OutlookSetup = () => {
    const [activeTab, setActiveTab] = useState('ios');

    const iosSteps = [
        {
            title: '1. Baixe o App',
            description: 'Acesse a App Store e busque por "Microsoft Outlook"',
            detail: 'Toque em "Obter" e aguarde a instalação'
        },
        {
            title: '2. Abra o Outlook',
            description: 'Toque no ícone do Outlook na tela inicial',
            detail: 'Permita as notificações quando solicitado'
        },
        {
            title: '3. Adicione sua Conta',
            description: 'Toque em "Adicionar Conta" ou no ícone de +',
            detail: 'Selecione "Adicionar Conta de Email"'
        },
        {
            title: '4. Digite seu E-mail',
            description: 'Insira seu e-mail corporativo @davosbr.com',
            detail: 'Toque em "Continuar"'
        },
        {
            title: '5. Autentique',
            description: 'Será redirecionado para login Microsoft',
            detail: 'Digite sua senha corporativa e autentique com MFA se necessário'
        },
        {
            title: '6. Pronto!',
            description: 'Sua caixa de entrada será sincronizada',
            detail: 'Configure notificações e assinatura nas configurações'
        }
    ];

    const androidSteps = [
        {
            title: '1. Baixe o App',
            description: 'Acesse a Google Play Store e busque "Microsoft Outlook"',
            detail: 'Toque em "Instalar" e aguarde o download'
        },
        {
            title: '2. Abra o Outlook',
            description: 'Toque no ícone do Outlook no menu de apps',
            detail: 'Aceite as permissões solicitadas'
        },
        {
            title: '3. Comece a Configuração',
            description: 'Toque em "Começar" ou "Adicionar Conta"',
            detail: 'Selecione o tipo de conta "Office 365"'
        },
        {
            title: '4. Insira seu E-mail',
            description: 'Digite seu endereço @davosbr.com',
            detail: 'Toque em "Continuar" ou no ícone de seta'
        },
        {
            title: '5. Faça Login',
            description: 'Será redirecionado para autenticação Microsoft',
            detail: 'Insira sua senha e complete a autenticação multifator'
        },
        {
            title: '6. Configuração Completa!',
            description: 'Seus e-mails começarão a sincronizar',
            detail: 'Personalize notificações e assinatura em Configurações > Assinatura'
        }
    ];

    const currentSteps = activeTab === 'ios' ? iosSteps : androidSteps;

    return (
        <section className="section-container outlook-setup-section">
            <div className="section-header">
                <Mail className="section-icon" size={32} />
                <h2>Configure o Outlook Mobile</h2>
                <p className="section-subtitle">Acesse seus e-mails corporativos de qualquer lugar</p>
            </div>

            {/* Tab Navigation */}
            <div className="platform-tabs">
                <button
                    className={`platform-tab ${activeTab === 'ios' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ios')}
                >
                    <Apple size={20} />
                    <span>iOS (iPhone)</span>
                </button>
                <button
                    className={`platform-tab ${activeTab === 'android' ? 'active' : ''}`}
                    onClick={() => setActiveTab('android')}
                >
                    <Chrome size={20} />
                    <span>Android</span>
                </button>
            </div>

            {/* Steps Grid */}
            <div className="setup-steps-grid">
                {currentSteps.map((step, index) => (
                    <div key={index} className="setup-step-card glass-panel">
                        <div className="card-icon-bg-outlook">
                            <Mail size={70} />
                        </div>
                        <div className="step-number">{index + 1}</div>
                        <div className="step-content">
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                            <div className="step-detail">
                                <ChevronRight size={14} className="detail-icon" />
                                <span>{step.detail}</span>
                            </div>
                        </div>
                        {index === currentSteps.length - 1 && (
                            <CheckCircle className="success-icon" size={24} />
                        )}
                    </div>
                ))}
            </div>

            {/* Pro Tips */}
            <div className="pro-tips glass-panel">
                <h3>💡 Dicas Profissionais</h3>
                <ul>
                    <li>
                        <CheckCircle size={16} />
                        <span>Ative as notificações para não perder e-mails importantes</span>
                    </li>
                    <li>
                        <CheckCircle size={16} />
                        <span>Configure sua assinatura de e-mail com nome, cargo e contato</span>
                    </li>
                    <li>
                        <CheckCircle size={16} />
                        <span>Use a caixa "Prioritária" para focar nos e-mails mais relevantes</span>
                    </li>
                    <li>
                        <CheckCircle size={16} />
                        <span>Sincronize seu calendário para ver compromissos no mesmo app</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default OutlookSetup;
