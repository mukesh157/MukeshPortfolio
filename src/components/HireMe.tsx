import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Check, Zap, Shield, Clock } from 'lucide-react';

const reasons = [
    {
        icon: <Zap size={28} />,
        title: 'Fast Delivery',
        description: 'I deliver high-quality work on time, every time. No missed deadlines.',
    },
    {
        icon: <Shield size={28} />,
        title: 'Clean Code',
        description: 'Well-structured, maintainable, and documented code that scales.',
    },
    {
        icon: <Clock size={28} />,
        title: 'Dedicated Support',
        description: 'Available for ongoing support and maintenance after project delivery.',
    },
];

const offerings = [
    'Responsive Single Page Applications',
    'Full-Stack Web Development',
    'REST & GraphQL API Design',
    'UI/UX Design & Prototyping',
    'Performance Optimization',
    'Code Reviews & Consulting',
];

const HireMe = () => {
    const { ref, isInView } = useInView(0.15);

    return (
        <section id="hire" className="section" ref={ref} style={{ position: 'relative' }}>
            <div className="glow-orb" style={{ width: 450, height: 450, background: 'var(--color-primary)', bottom: '0', right: '-10%' }} />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <h2 className="section-title">Hire Me</h2>
                <p className="section-subtitle">Why you should work with me</p>
            </motion.div>

            {/* Reasons */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '24px',
                marginBottom: '48px',
            }}>
                {reasons.map((reason, i) => (
                    <motion.div
                        key={i}
                        className="glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 20px',
                            color: '#fff',
                        }}>
                            {reason.icon}
                        </div>
                        <h3 style={{
                            fontSize: '1.15rem',
                            fontWeight: 600,
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '10px',
                        }}>
                            {reason.title}
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                            {reason.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* What I Offer CTA */}
            <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                    gap: '40px',
                    alignItems: 'center',
                    padding: '40px',
                    background: 'linear-gradient(135deg, rgba(109,40,217,0.1), rgba(6,182,212,0.05))',
                }}
            >
                <div>
                    <h3 style={{
                        fontSize: '1.6rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '16px',
                    }}>
                        What I Offer
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {offerings.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.7 + i * 0.08 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                            >
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <Check size={14} color="#fff" />
                                </div>
                                <span style={{ fontSize: '0.95rem' }}>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: '3rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-heading)',
                        background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-accent))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '8px',
                    }}>
                        Available Now
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
                        Let's discuss your project requirements
                    </p>
                    <a href="#contact" className="btn-gradient" style={{ fontSize: '1.05rem' }}>
                        🚀 Start a Project
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default HireMe;
