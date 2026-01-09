import React, { useState } from 'react';
import { Users, Mail, MessageSquare, ChevronRight, UserCircle } from 'lucide-react';
import './SectionStyles.css';
import './PeopleStructure.css';

const AREAS = [
    {
        id: 'tech',
        name: 'Tecnologia & Operações',
        lead: 'Astor Oliveira',
        role: 'CTO/COO',
        desc: 'Estratégia Tecnológica, Desenvolvimento de Produtos, Infraestrutura e Operações.',
        color: 'var(--primary)'
    },
    {
        id: 'growth',
        name: 'Growth & Vendas',
        lead: 'Glauco Leme',
        role: 'CSO/CCO',
        desc: 'Aquisição, CSM, Marketing e Parcerias.',
        color: '#22c55e'
    },
    {
        id: 'ops',
        name: 'Managing Consulting e Strategy',
        lead: 'Dany Vieira',
        role: 'CEO',
        desc: 'Planejamento Estratégico, Gestão de Portfólio e Excelência em Consultoria.',
        color: '#f59e0b'
    }
];

const CONTACTS = [
    { area: 'Dúvidas de RH / Benefícios', who: 'People Team', email: 'contato@davosbr.com' },
    { area: 'Suporte TI / Acessos', who: 'Tech Support', email: 'contato@davosbr.com' },
    { area: 'Aprovações Financeiras', who: 'Finance Team', email: 'contato@davosbr.com' },
    { area: 'Dúvidas sobre Projetos', who: 'Seu Líder Direto', email: '-' }
];

const PeopleStructure = () => {
    return (
        <section className="section-container" id="people-structure">
            <div className="section-header">
                <Users size={32} className="section-icon" />
                <h2>Pessoas & Estrutura</h2>
            </div>

            <div className="glass-panel content-panel">
                <p className="structure-intro">
                    Conheça quem lidera nossas frentes e saiba exatamente quem procurar quando precisar de ajuda.
                    Nossa estrutura é horizontal para facilitar a comunicação.
                </p>

                <div className="org-areas-grid">
                    {AREAS.map((area) => (
                        <div key={area.id} className="area-card" style={{ borderTop: `4px solid ${area.color}` }}>
                            <div className="area-header">
                                <h3>{area.name}</h3>
                                <p>{area.desc}</p>
                            </div>
                            <div className="area-lead">
                                <UserCircle size={40} className="lead-avatar" style={{ color: area.color }} />
                                <div className="lead-info">
                                    <span className="lead-name">{area.lead}</span>
                                    <span className="lead-role">{area.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="contacts-section">
                    <h3><MessageSquare size={20} /> Quem Procurar?</h3>
                    <div className="contacts-list">
                        {CONTACTS.map((contact, idx) => (
                            <div key={idx} className="contact-row">
                                <div className="contact-area">
                                    <span className="label">Assunto</span>
                                    <span className="value">{contact.area}</span>
                                </div>
                                <div className="contact-arrow">
                                    <ChevronRight size={16} />
                                </div>
                                <div className="contact-who">
                                    <span className="label">Falar com</span>
                                    <div className="who-wrapper">
                                        <span className="value highlight">{contact.who}</span>
                                        {contact.email !== '-' && (
                                            <a href={`mailto:${contact.email}`} className="email-link">
                                                <Mail size={14} /> {contact.email}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleStructure;
