import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '0 24px',
            }}
        >
            {/* Background Orbs */}
            <div className="glow-orb" style={{ width: 500, height: 500, background: 'var(--color-primary)', top: '-10%', left: '-10%' }} />
            <div className="glow-orb" style={{ width: 400, height: 400, background: 'var(--color-accent)', bottom: '-10%', right: '-5%' }} />
            <div className="glow-orb" style={{ width: 300, height: 300, background: '#ec4899', top: '60%', left: '50%' }} />

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'inline-block',
                        padding: '8px 20px',
                        borderRadius: '50px',
                        background: 'rgba(109, 40, 217, 0.15)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        color: 'var(--color-primary-light)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        marginBottom: '24px',
                    }}
                >
                    👋 Welcome to my Portfolio
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '24px',
                        fontFamily: 'var(--font-heading)',
                    }}
                >
                    I'm a{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-accent))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Creative Developer
                    </span>
                    <br />& Designer
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    style={{
                        fontSize: '1.15rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '600px',
                        margin: '0 auto 40px',
                        lineHeight: 1.8,
                    }}
                >
                    I craft beautiful, performant web experiences with modern technologies.
                    Let's turn your ideas into stunning digital products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a href="#hire" className="btn-gradient">
                        Hire Me
                    </a>
                    <a href="#contact" className="btn-outline">
                        Get in Touch
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '48px' }}
                >
                    {[
                        { icon: <Github size={20} />, href: 'https://github.com/mukesh157' },
                        { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/mukesh-s-209816203/' },
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            whileHover={{ y: -4, scale: 1.15 }}
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: '50%',
                                border: '1px solid var(--color-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-text-muted)',
                                transition: 'color 0.3s, border-color 0.3s',
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
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.a
                    href="#about"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{
                        display: 'inline-flex',
                        marginTop: '60px',
                        color: 'var(--color-text-muted)',
                    }}
                >
                    <ArrowDown size={24} />
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
