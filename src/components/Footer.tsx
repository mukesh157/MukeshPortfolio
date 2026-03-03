import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{
            borderTop: '1px solid var(--color-border)',
            padding: '48px 24px 32px',
            position: 'relative',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
            }}>
                {/* Logo */}
                <motion.a
                    href="#hero"
                    whileHover={{ scale: 1.05 }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-accent))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Portfolio
                </motion.a>

                {/* Social Links */}
                <div style={{ display: 'flex', gap: '16px' }}>
                    {[
                        { icon: <Github size={18} />, href: 'https://github.com/mukesh157' },
                        { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/mukesh-s-209816203/' },
                    ].map((s, i) => (
                        <motion.a
                            key={i}
                            href={s.href}
                            whileHover={{ y: -3, scale: 1.1 }}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                border: '1px solid var(--color-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-text-muted)',
                                transition: 'all 0.3s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-primary-light)';
                                e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--color-text-muted)';
                                e.currentTarget.style.borderColor = 'var(--color-border)';
                            }}
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Copyright */}
                <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                }}>
                    © 2026 Made with <Heart size={14} color="#ef4444" fill="#ef4444" /> All rights reserved.
                </p>
            </div>

            {/* Back to Top */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    position: 'fixed',
                    bottom: '32px',
                    right: '32px',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(109, 40, 217, 0.4)',
                    zIndex: 50,
                }}
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    );
};

export default Footer;
