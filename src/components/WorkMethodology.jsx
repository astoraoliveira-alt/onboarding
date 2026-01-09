import React from 'react';
import { Compass, Zap, Users, Shield, Target, AlertTriangle, CheckCircle2 } from 'lucide-react';
import './SectionStyles.css';
import './WorkMethodology.css'; // Will create this

const PRINCIPLES = [
    {
        icon: Compass,
        title: 'Tomada de Decisão',
        desc: 'Decisões são baseadas em dados e alinhadas aos nossos princípios, não apenas em hierarquia. Encorajamos o "disagree and commit".'
    },
    {
        icon: Shield,
        title: 'Autonomia & Responsabilidade',
        desc: 'Você tem liberdade para agir e resolver problemas. Com grande autonomia vem a responsabilidade de comunicar erros rápido e aprender.'
    },
    {
        icon: Zap,
        title: 'Ritmo & Cadência',
        desc: 'Operamos com agilidade. Entregas iterativas e constantes valem mais que a perfeição demorada. O feito é melhor que o perfeito não publicado.'
    },
    {
        icon: Users,
        title: 'Cliente no Centro',
        desc: 'Toda linha de código, design ou processo deve gerar valor real para o cliente. Se não ajuda o cliente, questione.'
    }
];

const DO_DONT = {
    do: [
        'Comunicação assíncrona e documentada',
        'Proatividade para desbloquear tarefas',
        'Feedback radical e construtivo',
        'Curiosidade para entender o "porquê"'
    ],
    dont: [
        'Reter informação ou erros',
        'Esperar ordens para tudo',
        'Reuniões sem pauta ou objetivo',
        ' "Sempre foi feito assim" como justificativa'
    ]
};

const WorkMethodology = () => {
    return (
        <section className="section-container" id="work-methodology">
            <div className="section-header">
                <Target size={32} className="section-icon" />
                <h2>Forma de Trabalhar</h2>
            </div>

            <div className="glass-panel content-panel">
                <div className="methodology-intro">
                    <p>
                        Não temos apenas regras, temos um <strong>modo de operar</strong>.
                        Entenda o que guia nossas decisões e o comportamento esperado no dia a dia.
                    </p>
                </div>

                <div className="principles-grid">
                    {PRINCIPLES.map((item, idx) => (
                        <div key={idx} className="principle-card">
                            <div className="principle-icon-box">
                                <item.icon size={24} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="culture-alignment-container">
                    <div className="alignment-col do-col">
                        <div className="col-header">
                            <CheckCircle2 size={24} className="icon-success" />
                            <h3>O que Valorizamos</h3>
                        </div>
                        <ul>
                            {DO_DONT.do.map((text, i) => (
                                <li key={i}>{text}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="alignment-divider"></div>

                    <div className="alignment-col dont-col">
                        <div className="col-header">
                            <AlertTriangle size={24} className="icon-danger" />
                            <h3>O que Evitamos</h3>
                        </div>
                        <ul>
                            {DO_DONT.dont.map((text, i) => (
                                <li key={i}>{text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkMethodology;
