import { Mail, MessageSquare, Video, FileText, Cloud, CheckSquare, Presentation } from 'lucide-react';
import './SectionStyles.css';
import './MicrosoftIntro.css';

const products = [
    { name: 'Outlook', icon: Mail, color: '#0078d4', desc: 'E-mail e Calendário' },
    { name: 'Teams', icon: Video, color: '#6264a7', desc: 'Chat e Videoconferências' },
    { name: 'OneDrive', icon: Cloud, color: '#0078d4', desc: 'Armazenamento em Nuvem' },
    { name: 'Word/Excel', icon: FileText, color: '#217346', desc: 'Documentos e Planilhas' },
    { name: 'PowerPoint', icon: Presentation, color: '#d24726', desc: 'Apresentações Visuais' },
];

const MicrosoftIntro = () => {
    return (
        <section className="section-container" id="microsoft">
            <div className="section-header">
                <h2>Universo Microsoft 365</h2>
            </div>

            <div className="microsoft-grid">
                {products.map((p) => (
                    <div className="product-card glass-panel" key={p.name} style={{ borderTop: `4px solid ${p.color}` }}>
                        <div className="product-icon" style={{ background: p.color }}>
                            <p.icon color="white" size={24} />
                        </div>
                        <h4>{p.name}</h4>
                        <p>{p.desc}</p>
                    </div>
                ))}

                {/* Featured OneNote */}
                <div className="onenote-feature glass-panel">
                    <div className="content">
                        <div className="badge-highlight">Dica de Produtividade</div>
                        <h3>Organize-se com OneNote</h3>
                        <p>O OneNote é seu caderno digital. Use-o para:</p>
                        <ul>
                            <li><CheckSquare size={16} /> Anotar pautas de reuniões</li>
                            <li><CheckSquare size={16} /> Criar listas de tarefas diárias</li>
                            <li><CheckSquare size={16} /> Compartilhar rascunhos com a equipe</li>
                        </ul>
                    </div>
                    <div className="onenote-visual">
                        <div className="floating-icon">N</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicrosoftIntro;
