import React from 'react';

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
            <div style={{ marginBottom: '15px' }}>
                <a href="https://davosbr.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'none', margin: '0 10px', fontWeight: 'bold' }}>davosbr.com</a>
                <span style={{ margin: '0 10px' }}>|</span>
                <a href="mailto:contato@davosbr.com" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>contato@davosbr.com</a>
            </div>
            <p>© {new Date().getFullYear()} Davos Consulting. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
