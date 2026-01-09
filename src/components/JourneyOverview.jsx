import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Cloud, Smartphone, MessageSquare,
    Palette, Wrench, ArrowRight, Globe, TrendingUp, Target, FileText,
    Compass, Users
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
        id: 'work-methodology-section',
        number: '02',
        title: 'Forma de Trabalhar',
        description: 'Autonomia, processos de decisão e nossos rituais do dia a dia.',
        icon: Compass,
        colorClass: 'color-design'
    },
    {
        id: 'teams-manual-section',
        number: '03',
        title: 'Comunicação & Cultura',
        description: 'Nossos valores praticados e o guia definitivo do Microsoft Teams.',
        icon: MessageSquare,
        colorClass: 'color-teams'
    },
    {
        id: 'role-expectations-section',
        number: '04',
        title: 'Papel & Expectativas',
        description: 'Seu plano de 30/60/90 dias e critérios claros de avaliação.',
        icon: Target,
        colorClass: 'color-teams'
    },
    {
        id: 'career-growth-section',
        number: '05',
        title: 'Carreira & Incentivos',
        description: 'Trilhas de crescimento, mapa de desenvolvimento e benefícios.',
        icon: TrendingUp,
        colorClass: 'color-mobile'
    },
    {
        id: 'people-structure-section',
        number: '06',
        title: 'Pessoas & Estrutura',
        description: 'Quem é quem, lideranças e os pontos de contato de cada área.',
        icon: Users,
        colorClass: 'color-security'
    },
    {
        id: 'security-section',
        number: '07',
        title: 'Acesso & Segurança',
        description: 'Configuração de senha e acesso seguro aos sistemas.',
        icon: ShieldCheck,
        colorClass: 'color-security'
    },
    {
        id: 'microsoft-section',
        number: '08',
        title: 'Ecossistema Microsoft',
        description: 'Outlook, OneDrive, Excel e ferramentas de produtividade.',
        icon: Cloud,
        colorClass: 'color-microsoft'
    },
    {
        id: 'outlook-setup-section',
        number: '09',
        title: 'Conectividade Mobile',
        description: 'Configure seu e-mail e apps corporativos no iOS ou Android.',
        icon: Smartphone,
        colorClass: 'color-mobile'
    },
    {
        id: 'tools-section',
        number: '10',
        title: 'Ferramentas do Dia a Dia',
        description: 'CRM, despesas, pagamentos e suporte TI.',
        icon: Wrench,
        colorClass: 'color-tools'
    },
    {
        id: 'downloads-section',
        number: '11',
        title: 'Identidade Visual',
        description: 'Wallpapers, assinaturas e templates oficiais da marca.',
        icon: Palette,
        colorClass: 'color-design'
    },
    {
        id: 'personal-documents-section',
        number: '12',
        title: 'Documentação Pessoal',
        description: 'Upload seguro de documentos para o RH.',
        icon: FileText,
        colorClass: 'color-security'
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
