import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Briefcase, Calendar, TrendingUp, DollarSign,
    Gift, ChevronDown, ChevronUp, Star, Activity, Eye, EyeOff, Layout,
    Copy, Check, Mail, Laptop
} from 'lucide-react';
import './DynamicHeader.css';

const DynamicHeader = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showSensitive, setShowSensitive] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);

    // Mock Data
    const employee = {
        name: "Ana Silva",
        role: "Senior Product Designer",
        email: "ana.silva@davosbr.com",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", // Placeholder
        mentor: "Roberto Almeida",
        project: "SaaS Financial Platform",
        startDate: "10/01/2024",
        endDate: "30/12/2025",
        chargeability: 85,
        salary: "R$ 12.500,00",
        benefits: "Plano de Saúde Black, VA R$ 1.800",
        equipment: {
            brand: "Apple",
            model: "MacBook Pro M3",
            name: "Macbook Corp. 01"
        }
    };

    useEffect(() => {
        const handleExpand = () => setIsExpanded(true);
        window.addEventListener('expandHeader', handleExpand);
        return () => window.removeEventListener('expandHeader', handleExpand);
    }, []);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const copyEmail = (e) => {
        e.stopPropagation(); // Prevent toggling expand
        navigator.clipboard.writeText(employee.email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <header className={`dynamic-header ${isExpanded ? 'expanded' : ''}`}>
            {/* 1. Top Bar (Always Visible) */}
            <div className="header-bar">
                {/* Company Logo */}
                <div className="header-logo">
                    <img src="/davos-logo-hero1.png" alt="Davos Consulting" />
                </div>

                <div className="user-identity" onClick={toggleExpand}>
                    <div className="avatar-ring">
                        <img src={employee.avatar} alt={employee.name} className="avatar-img" />
                        <div className={`status-dot ${isExpanded ? 'active' : ''}`}></div>
                    </div>
                    <div className="user-info-basic">
                        <h2 className="user-name">{employee.name}</h2>
                        <div className="user-meta-row">
                            <span className="user-role">{employee.role}</span>
                            <span className="dot-separator">•</span>
                            <button className="email-copy-badge" onClick={copyEmail} title="Copiar E-mail">
                                <Mail size={12} className="mail-icon" />
                                <span className="email-text">{employee.email}</span>
                                {emailCopied ? <Check size={12} className="success-icon" /> : <Copy size={12} className="copy-icon" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Quick Stats (Visible only when collapsed on large screens) */}
                {!isExpanded && (
                    <div className="quick-stats-desktop">
                        <div className="q-stat">
                            <Briefcase size={14} className="icon-subtle" />
                            <span>{employee.project}</span>
                        </div>
                        <div className="q-stat">
                            <Activity size={14} className="icon-subtle" />
                            <span className="charge-value">{employee.chargeability}% Charge</span>
                        </div>
                    </div>
                )}

                <button className="expand-trigger-btn" onClick={toggleExpand}>
                    <span className="btn-label">{isExpanded ? 'Recolher Painel' : 'Expandir Perfil'}</span>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="header-dashboard glass-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <div className="dashboard-scroll-container">
                            <div className="dashboard-grid">

                                {/* Card: Project & Mentor */}
                                <div className="dash-card">
                                    <div className="card-header">
                                        <Layout size={18} className="card-icon blue" />
                                        <h3>Contexto Atual</h3>
                                    </div>
                                    <div className="card-content">
                                        <div className="info-row">
                                            <span className="label">Projeto</span>
                                            <span className="value strong">{employee.project}</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="label">Mentor</span>
                                            <span className="value">{employee.mentor}</span>
                                        </div>
                                        <div className="separator-line"></div>
                                        <div className="info-row equipment-row">
                                            <div className="label-icon"><Laptop size={14} /> Equipamento</div>
                                            <div className="equipment-details">
                                                <span className="eq-name">{employee.equipment.name}</span>
                                                <span className="eq-model">{employee.equipment.brand} - {employee.equipment.model}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card: Timeline */}
                                <div className="dash-card">
                                    <div className="card-header">
                                        <Calendar size={18} className="card-icon purple" />
                                        <h3>Cronograma</h3>
                                    </div>
                                    <div className="card-content">
                                        <div className="timeline-graphic">
                                            <div className="time-point start">
                                                <div className="dot filled"></div>
                                                <span className="date">{employee.startDate}</span>
                                                <span className="legend">Início</span>
                                            </div>
                                            <div className="time-line">
                                                <div className="progress" style={{ width: '60%' }}></div>
                                            </div>
                                            <div className="time-point end">
                                                <div className="dot"></div>
                                                <span className="date">{employee.endDate}</span>
                                                <span className="legend">Previsão</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card: Performance */}
                                <div className="dash-card">
                                    <div className="card-header">
                                        <TrendingUp size={18} className="card-icon green" />
                                        <h3>Performance</h3>
                                    </div>
                                    <div className="card-content center-align">
                                        <div className="circular-chart">
                                            <svg viewBox="0 0 36 36" className="circular-chart-svg">
                                                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                                <path className="circle-fill" strokeDasharray={`${employee.chargeability}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            </svg>
                                            <div className="percentage">
                                                <span className="num">{employee.chargeability}%</span>
                                                <span className="text">Chargeability</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card: Sensitive Data (Salary/Benefits) */}
                                <div className="dash-card sensitive-card">
                                    <div className="card-header">
                                        <div className="flex gap-2">
                                            <DollarSign size={18} className="card-icon gold" />
                                            <h3>Dados Financeiros</h3>
                                        </div>
                                        <button className="toggle-eye" onClick={() => setShowSensitive(!showSensitive)}>
                                            {showSensitive ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                    <div className="card-content">
                                        <div className="info-row">
                                            <span className="label">Salário Base</span>
                                            <span className={`value money - ${showSensitive ? '' : 'blurred'}`}>
                                                {employee.salary}
                                            </span>
                                        </div>
                                        <div className="separator"></div>
                                        <div className="info-row">
                                            <span className="label"><Gift size={12} style={{ display: 'inline', marginRight: 4 }} /> Benefícios</span>
                                            <span className={`value benefits ${showSensitive ? '' : 'blurred'}`}>
                                                {employee.benefits}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default DynamicHeader;
