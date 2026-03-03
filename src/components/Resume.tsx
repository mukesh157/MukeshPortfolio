import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

interface TimelineItem {
    type: 'work' | 'education';
    title: string;
    company: string;
    period: string;
    description: string;
}

const timeline: TimelineItem[] = [
    {
        type: 'work',
        title: 'Associate Product Developer',
        company: 'Lumel Technologies',
        period: 'June 2025 – Feb 2026',
        description: 'Collaborated with the frontend team to build and maintain web applications using React, TypeScript, and modern tooling.',
    },
    {
        type: 'work',
        title: 'Software Developer',
        company: 'Fortune Capital Services',
        period: 'March 2024 – June 2025',
        description: 'Developed and maintained scalable web applications and APIs for clients across trading.',
    },
    {
        type: 'education',
        title: 'B.E. Computer Science Engineering',
        company: 'Saveetha School of Engineering',
        period: '2020 – 2024',
        description: 'Graduated with honors. Focused on algorithms, data structures, and software engineering principles.',
    },
];

const Resume = () => {
    const { ref, isInView } = useInView(0.1);

    return (
        <section id="resume" className="section" ref={ref} style={{ position: 'relative' }}>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <h2 className="section-title">My Resume</h2>
                <p className="section-subtitle">A timeline of my professional journey</p>
            </motion.div>

            {/* Timeline */}
            <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(to bottom, var(--color-primary), var(--color-accent), transparent)',
                }} />

                {timeline.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        style={{
                            position: 'relative',
                            paddingLeft: '56px',
                            marginBottom: '36px',
                        }}
                    >
                        {/* Dot */}
                        <div style={{
                            position: 'absolute',
                            left: '11px',
                            top: '6px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: item.type === 'work'
                                ? 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))'
                                : 'linear-gradient(135deg, var(--color-accent), var(--color-accent-light))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 0 16px ${item.type === 'work' ? 'rgba(109,40,217,0.4)' : 'rgba(6,182,212,0.4)'}`,
                        }}>
                            {item.type === 'work'
                                ? <Briefcase size={10} color="#fff" />
                                : <GraduationCap size={10} color="#fff" />}
                        </div>

                        <div className="glass-card" style={{ padding: '24px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginBottom: '4px',
                                color: item.type === 'work' ? 'var(--color-primary-light)' : 'var(--color-accent-light)',
                                fontSize: '0.8rem',
                                fontWeight: 500,
                            }}>
                                <Calendar size={14} />
                                {item.period}
                            </div>
                            <h3 style={{
                                fontSize: '1.15rem',
                                fontWeight: 600,
                                fontFamily: 'var(--font-heading)',
                                marginBottom: '4px',
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                color: item.type === 'work' ? 'var(--color-primary-light)' : 'var(--color-accent-light)',
                                marginBottom: '10px',
                                fontWeight: 500,
                            }}>
                                {item.company}
                            </p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Download CV */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{ textAlign: 'center', marginTop: '40px' }}
            >
                <a href="/MukeshResume2026.pdf" download="MukeshResume2026.pdf" className="btn-gradient">
                    📄 Download CV
                </a>
            </motion.div>
        </section>
    );
};

export default Resume;
