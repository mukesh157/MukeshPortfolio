import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Rocket } from 'lucide-react';

const stats = [
    // { icon: <Code2 size={24} />, value: '50+', label: 'Projects' },
    // { icon: <Users size={24} />, value: '30+', label: 'Happy Clients' },
    { icon: <Rocket size={24} />, value: '2+', label: 'Years Exp.' },
    // { icon: <Palette size={24} />, value: '20+', label: 'Designs' },
];

const About = () => {
    const { ref, isInView } = useInView(0.2);

    return (
        <section id="about" className="section" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know who I am and what drives me</p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                gap: '48px',
                alignItems: 'center',
            }}>
                {/* Avatar / Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '24px',
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                        padding: '4px',
                        transform: 'rotate(-3deg)',
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '22px',
                            background: 'var(--color-bg-card)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '6rem',
                            transform: 'rotate(3deg)',
                        }}>
                            💻
                        </div>
                    </div>
                    {/* Floating badge */}
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        style={{
                            position: 'absolute',
                            bottom: '-12px',
                            right: 'calc(50% - 150px)',
                            padding: '10px 20px',
                            borderRadius: '12px',
                            background: 'var(--color-bg-card)',
                            border: '1px solid var(--color-border)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: 'var(--color-accent-light)',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                        }}
                    >
                        🚀 Open to Work
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '1.05rem',
                        lineHeight: 1.9,
                        marginBottom: '24px',
                    }}>
                        I'm a passionate full-stack developer with expertise in building modern web applications.
                        I love turning complex problems into simple, beautiful, and intuitive solutions.
                        My journey in tech started with curiosity and has evolved into a deep commitment to
                        crafting exceptional digital experiences.
                    </p>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '1.05rem',
                        lineHeight: 1.9,
                        marginBottom: '32px',
                    }}>
                        When I'm not coding, you can find me exploring new technologies, sharing knowledge with the community. I believe great
                        software is built at the intersection of creativity and technical excellence.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '16px',
                    }}>
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    textAlign: 'center',
                                    padding: '20px 12px',
                                    borderRadius: '12px',
                                    background: 'rgba(109, 40, 217, 0.08)',
                                    border: '1px solid rgba(109, 40, 217, 0.15)',
                                }}
                            >
                                <div style={{ color: 'var(--color-primary-light)', marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
                                    {stat.icon}
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
