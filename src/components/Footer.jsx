import { Linkedin, Globe, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            padding: '40px',
            textAlign: 'center',
            color: 'var(--text-muted)',
            borderTop: '1px solid var(--glass-border)',
            marginTop: '80px',
            background: 'rgba(0,0,0,0.2)'
        }}>
            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <a href="https://davosbr.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <Globe size={18} />
                    <span>davosbr.com</span>
                </a>
                <a href="mailto:contato@davosbr.com" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <Mail size={18} />
                    <span>contato@davosbr.com</span>
                </a>
                <a href="https://www.linkedin.com/company/davosbr/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                </a>
            </div>
            <p>© {new Date().getFullYear()} Davos Consulting. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
