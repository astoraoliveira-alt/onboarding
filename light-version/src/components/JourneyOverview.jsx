import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Cloud, Smartphone, MessageSquare,
    Palette, Wrench, ArrowRight, Globe, TrendingUp, Target
} from 'lucide-react';
import './JourneyOverview.css';

const journeySteps = [
    {
        id: 'business-context-section',
        number: '01',
        title: 'Contexto de Negócio',
        description: 'Entenda nossa história, missão, modelo de negócio e onde queremos chegar.',
        icon: Globe,
        colorClass: 'color-security'
    },
    {
        id: 'role-expectations-section',
        number: '02',
        title: 'Papel & Expectativas',
        description: 'O que esperamos de você (30/60/90 dias) e como será sua avaliação.',
        icon: Target,
        colorClass: 'color-teams'
    },
    {
        id: 'career-growth-section',
        number: '03',
        title: 'Carreira & Incentivos',
        description: 'Trilhas de crescimento, benefícios e oportunidades de desenvolvimento.',
        icon: TrendingUp,
        colorClass: 'color-mobile'
    },
    {
        id: 'security-section',
        number: '04',
        title: 'Acesso & Segurança',
        description: 'Configure sua senha inicial e garanta o acesso seguro a todos os sistemas corporativos.',
        icon: ShieldCheck,
        colorClass: 'color-security'
    },
    {
        id: 'microsoft-section',
        number: '05',
        title: 'Ecossistema Microsoft',
        description: 'Mergulhe nas ferramentas de produtividade: Outlook, OneDrive, Excel e muito mais.',
        icon: Cloud,
        colorClass: 'color-microsoft'
    },
    {
        id: 'outlook-setup-section',
        number: '06',
        title: 'Conectividade Mobile',
        description: 'Guia passo-a-passo para levar seu escritório no bolso com iOS e Android.',
        icon: Smartphone,
        colorClass: 'color-mobile'
    },
    {
        id: 'teams-manual-section',
        number: '07',
        title: 'Comunicação e Cultura',
        description: 'Domine o Microsoft Teams e conheça nossas boas práticas de comunicação.',
        icon: MessageSquare,
        colorClass: 'color-teams'
    },
    {
        id: 'downloads-section',
        number: '08',
        title: 'Identidade Visual',
        description: 'Baixe wallpapers, fundos de videoconferência e assinaturas oficiais.',
        icon: Palette,
        colorClass: 'color-design'
    },
    {
        id: 'tools-section',
        number: '09',
        title: 'Ferramentas & Suporte',
        description: 'Acesso rápido ao CRM, sistema de despesas, suporte TI e pagamentos.',
        icon: Wrench,
        colorClass: 'color-tools'
    }
];

const JourneyOverview = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // Offset para o header fixo
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section className="journey-section">
            <div className="journey-header">
                <h2>Sua Jornada na Davos</h2>
                <p>Um guia estruturado para você dominar todas as ferramentas e processos do seu onboarding.</p>
            </div>

            <div className="journey-grid">
                {journeySteps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={`journey-card ${step.colorClass}`}
                        onClick={() => scrollToSection(step.id)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <span className="card-number">{step.number}</span>

                        <div className="card-icon-box">
                            <step.icon size={30} />
                        </div>

                        <h3>{step.title}</h3>
                        <p>{step.description}</p>

                        <div className="card-action">
                            <span>Ir para este passo</span>
                            <ArrowRight size={16} className="arrow-icon" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default JourneyOverview;
