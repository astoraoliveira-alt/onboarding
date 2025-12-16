import React, { useState } from 'react';
import { Settings, Users, MessageSquareQuote, Bell, UserPlus, Hash, Video } from 'lucide-react';
import './SectionStyles.css';
import './TeamsManual.css';

const TeamsManual = () => {
    const [activeTab, setActiveTab] = useState('config'); // config | practice

    return (
        <section className="section-container" id="teams-manual">
            <div className="section-header">
                <h2>Dominando o Teams</h2>
            </div>

            <div className="manual-container glass-panel">
                <div className="manual-tabs">
                    <button
                        className={`manual-tab ${activeTab === 'config' ? 'active' : ''}`}
                        onClick={() => setActiveTab('config')}
                    >
                        <Settings size={18} /> Configurações Iniciais
                    </button>
                    <button
                        className={`manual-tab ${activeTab === 'practice' ? 'active' : ''}`}
                        onClick={() => setActiveTab('practice')}
                    >
                        <Users size={18} /> Melhores Práticas
                    </button>
                </div>

                <div className="manual-content">
                    {activeTab === 'config' ? (
                        <div className="grid-instructions fade-in-up">
                            <div className="instruction-card">
                                <div className="card-icon-bg">
                                    <Video size={80} />
                                </div>
                                <div className="icon-spot"><UserPlus size={24} /></div>
                                <h4>Foto de Perfil</h4>
                                <p>Adicione uma foto profissional para que seus colegas possam te reconhecer facilmente nas reuniões e chats.</p>
                            </div>
                            <div className="instruction-card">
                                <div className="card-icon-bg">
                                    <Video size={80} />
                                </div>
                                <div className="icon-spot"><Bell size={24} /></div>
                                <h4>Notificações</h4>
                                <p>Ajuste as notificações em Configurações &gt; Notificações para evitar distrações. Recomendamos ativar apenas para @menções e chats diretos.</p>
                            </div>
                            <div className="instruction-card">
                                <div className="card-icon-bg">
                                    <Video size={80} />
                                </div>
                                <div className="icon-spot"><MessageSquareQuote size={24} /></div>
                                <h4>Mensagem de Status</h4>
                                <p>Use o status para informar se está em foco, almoço ou ausente. Você pode definir um tempo de expiração automático.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="practices-list fade-in-up">
                            <div className="practice-item">
                                <div className="practice-header">
                                    <Hash size={20} className="practice-icon" />
                                    <h4>Use Threads (Respostas)</h4>
                                </div>
                                <p>Sempre responda clicando em "Responder" na mensagem original ao invés de criar uma nova conversa. Isso mantém o histórico organizado.</p>
                            </div>

                            <div className="practice-item">
                                <div className="practice-header">
                                    <div className="at-symbol">@</div>
                                    <h4>Use @Menções com Sabedoria</h4>
                                </div>
                                <p>Use @Nome para chamar alguém específico. Evite usar @Equipe ou @Canal para assuntos que não são urgentes para todos.</p>
                            </div>

                            <div className="practice-item">
                                <div className="practice-header">
                                    <MessageSquareQuote size={20} className="practice-icon" />
                                    <h4>Seja Claro e Direto</h4>
                                </div>
                                <p>Em ambientes remotos, a clareza evita mal-entendidos. Se o assunto for complexo, sugira uma rápida chamada de vídeo.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TeamsManual;
