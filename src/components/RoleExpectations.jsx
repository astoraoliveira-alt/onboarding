import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Rocket, Target, Award } from 'lucide-react';
import './StrategicSections.css';

const PHASES = [
    {
        id: '30days',
        label: 'Primeiros 30 Dias',
        title: 'Imersão & Aprendizado',
        icon: Rocket,
        description: 'Foco total em absorver a cultura, entender as ferramentas e conhecer o time.',
        checklist: [
            'Concluir todo o treinamento de ferramentas',
            'Sessões de 1:1 com todos os membros da squad',
            'Configurar ambiente de desenvolvimento completo',
            'Entender profundamente o produto atual',
            'Participar de todas as cerimônias ágeis como ouvinte ativo'
        ]
    },
    {
        id: '60days',
        label: '30 a 60 Dias',
        title: 'Primeiras Entregas',
        icon: Target,
        description: 'Começar a contribuir ativamente com tarefas de baixa/média complexidade.',
        checklist: [
            'Entregar primeira feature em produção',
            'Documentar um processo que você aprendeu',
            'Realizar Code Reviews com supervisão',
            'Propor uma melhoria pequena no workflow',
            'Dominar o domínio de negócio do cliente'
        ]
    },
    {
        id: '90days',
        label: '90 Dias em diante',
        title: 'Autonomia & Impacto',
        icon: Award,
        description: 'Operar com autonomia total e começar a gerar valor mensurável.',
        checklist: [
            'Liderar uma iniciativa técnica pequena',
            'Ser referência em um módulo do sistema',
            'Ajudar no onboarding de novos colegas',
            'Atingir métricas de performance padrão',
            'Participar ativamente de decisões de arquitetura'
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
