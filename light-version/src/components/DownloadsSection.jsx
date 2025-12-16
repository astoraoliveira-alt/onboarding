import React, { useState } from 'react';
import { Download, Monitor, Linkedin, Image as ImageIcon, Briefcase } from 'lucide-react';
import './SectionStyles.css';
import './DownloadsSection.css';

// Import Logo Assets
import logoHorizontal from '../assets/logos/davos-horizontal.png';
import logoStacked from '../assets/logos/davos-stacked.png';
import logoIcon from '../assets/logos/davos-icon.png';
import logoWaves from '../assets/logos/davos-waves.png';
import logoTech from '../assets/logos/davos-tech.png';

// New Logos
import logoCircuit from '../assets/logos/davos-logo-circuit-lines.png';
import logo3dMin from '../assets/logos/davos-logo-3d-minimal.png';
import logoNetwork from '../assets/logos/davos-logo-network-nodes.png';
import logo3dGlass from '../assets/logos/davos-logo-3d-glass-black.png';
import logoFlatBlue from '../assets/logos/davos-logo-flat-blue.png';


// Import Wallpaper Assets
import wallBlue from '../assets/wallpapers/davos-bg-blue.png';
import wallDark from '../assets/wallpapers/davos-bg-dark.png';
import wallTech from '../assets/wallpapers/davos-bg-tech.jpg';
import wallHex from '../assets/wallpapers/davos-bg-hex.jpg';

// Import Teams Assets
import teamsWhite from '../assets/teams/davos-teams-white-minimal.jpg';
import teamsOffice from '../assets/teams/davos-teams-office-wall.jpg';
import teamsBlur from '../assets/teams/davos-teams-blur-hall.jpg';
import teamsHome from '../assets/teams/davos-teams-home-office.jpg';

// Import LinkedIn Assets
import linkedInTech from '../assets/linkedin/davos-linkedin-tech-network.jpg';
import linkedInTrans from '../assets/linkedin/davos-linkedin-transformacao.jpg';

const categories = [
    { id: 'desktop', label: 'Wallpapers', icon: Monitor },
    { id: 'teams', label: 'Fundos Teams', icon: ImageIcon },
    { id: 'linkedin', label: 'Capa LinkedIn', icon: Linkedin },
    { id: 'logos', label: 'Identidade Visual', icon: Briefcase },
];

const items = {
    desktop: [
        { title: 'Davos Blue Glass', image: wallBlue },
        { title: 'Davos Dark Minimal', image: wallDark },
        { title: 'Davos Tech Lines', image: wallTech },
        { title: 'Davos Hex Grid', image: wallHex }
    ],
    teams: [
        { title: 'Minimal White', image: teamsWhite },
        { title: 'Office Branding', image: teamsOffice },
        { title: 'Corporate Blur', image: teamsBlur },
        { title: 'Home Office Pro', image: teamsHome }
    ],
    linkedin: [
        { title: 'Rede Conectada', image: linkedInTech },
        { title: 'Transformação & Confiança', image: linkedInTrans }
    ],
    logos: [
        { title: 'Logo Horizontal', image: logoHorizontal, type: 'light' },
        { title: 'Logo Stacked', image: logoStacked, type: 'light' },
        { title: 'Logo Icon', image: logoIcon, type: 'light' },
        { title: 'Davos Waves', image: logoWaves, type: 'dark' },
        { title: 'Davos Tech', image: logoTech, type: 'dark' },
        { title: 'Circuit Lines', image: logoCircuit, type: 'dark' },
        { title: '3D Minimal', image: logo3dMin, type: 'light' },
        { title: 'Network Nodes', image: logoNetwork, type: 'dark' },
        { title: '3D Glass Black', image: logo3dGlass, type: 'dark' },
        { title: 'Flat Blue', image: logoFlatBlue, type: 'light' }
    ]
};

const DownloadsSection = () => {
    const [activeTab, setActiveTab] = useState('desktop');

    const handleDownload = (item) => {
        // In a real scenario, this would trigger a file download.
        // For this demo, we'll just open the image in a new tab if it exists, or alert.
        if (item.image) {
            const link = document.createElement('a');
            link.href = item.image;
            link.download = `Davos-Asset-${item.title.replace(/\s+/g, '-')}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert(`Download iniciado para: ${item.title}`);
        }
    };

    return (
        <section className="section-container" id="downloads">
            <div className="section-header">
                <Download size={32} className="section-icon" />
                <h2>Central de Downloads</h2>
            </div>

            <div className="downloads-container glass-panel">
                <div className="tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            <cat.icon size={18} />
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="assets-grid">
                    {items[activeTab].map((item, idx) => (
                        <div className="asset-card" key={idx}>
                            <div
                                className={`asset-preview ${item.type === 'dark' ? 'dark-bg' : ''}`}
                                style={{
                                    background: item.image ? `url(${item.image}) center/contain no-repeat` : item.color,
                                    backgroundColor: item.image ? (item.type === 'dark' ? '#000' : '#fff') : undefined
                                }}
                            >
                                <div className="overlay">
                                    <Download color="#fff" size={32} />
                                </div>
                            </div>
                            <div className="asset-info">
                                <span>{item.title}</span>
                                <button
                                    className="download-mini-btn"
                                    onClick={() => handleDownload(item)}
                                >
                                    Baixar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DownloadsSection;
