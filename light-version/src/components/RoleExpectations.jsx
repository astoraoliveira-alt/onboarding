import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Rocket, Target, Award } from 'lucide-react';
import './StrategicSections.css';

const PHASES = [
    {
        id: '30days',
        label: 'Primeiros 30 Dias',
        title: 'Imersão & Postura Consultiva',
        icon: Rocket,
        description: 'Seu objetivo é absorver a cultura, entender o negócio do cliente e demonstrar organização impecável.',
        checklist: [
            'Absorver a metodologia e cultura de excelência da Davos',
            'Mapear stakeholders, dores e o cenário atual do cliente',
            'Demonstrar disciplina: pontualidade, comunicação clara e escuta ativa',
            'Entender a arquitetura tecnológica e os processos de negócio',
            'Estabelecer conexões de confiança com o time e o cliente'
        ]
    },
    {
        id: '60days',
        label: '30 a 60 Dias',
        title: 'Execução & Geração de Valor',
        icon: Target,
        description: 'Começar a resolver problemas reais, conectando tecnologia e negócio com qualidade superior.',
        checklist: [
            'Realizar entregas consistentes com zero retrabalho',
            'Traduzir necessidades de negócio em requisitos técnicos claros',
            'Documentar processos e decisões para garantir clareza',
            'Participar ativamente de rituais com inputs relevantes',
            'Antecipar riscos operacionais antes que virem problemas'
        ]
    },
    {
        id: '90days',
        label: '90 Dias em diante',
        title: 'Autonomia & Expansão',
        icon: Award,
        description: 'Tornar-se um "Trusted Advisor", liderando frentes e impulsionando a transformação.',
        checklist: [
            'Operar com autonomia total na frente do cliente',
            'Propor melhorias proativas na estratégia ou arquitetura',
            'Liderar reuniões executivas ou técnicas com segurança',
            'Apoiar o desenvolvimento de consultores menos experientes',
            'Identificar novas oportunidades de geração de valor no cliente'
        ]
    }
];

const RoleExpectations = () => {
    const [activeTab, setActiveTab] = useState('30days');
    const activePhase = PHASES.find(p => p.id === activeTab);

    return (
        <section className="strategic-section">
            <div className="section-head-title">
                <h2>Papel, Expectativas & Performance</h2>
                <p>O playbook para o seu sucesso. Saiba exatamente o que é esperado nos seus primeiros 90 dias.</p>
            </div>

            <div className="tabs-container">
                {PHASES.map(phase => (
                    <button
                        key={phase.id}
                        className={`tab-btn ${activeTab === phase.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(phase.id)}
                    >
                        {phase.label}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="onboarding-phase-card"
                >
                    <div className="phase-header">
                        <div className="phase-icon">
                            <activePhase.icon size={32} />
                        </div>
                        <div className="phase-title">
                            <h3>{activePhase.title}</h3>
                            <p>{activePhase.description}</p>
                        </div>
                    </div>

                    <div className="checklist-grid">
                        {activePhase.checklist.map((item, idx) => (
                            <div key={idx} className="check-item">
                                <CheckCircle2 className="check-icon" size={20} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

        </section>
    );
};

export default RoleExpectations;
