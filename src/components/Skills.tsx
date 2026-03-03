import { motion } from 'framer-motion';
import { useInView } from './useInView';

interface Skill {
    name: string;
    level: number;
    color: string;
}

const skillCategories = [
    {
        title: 'Frontend',
        emoji: '🎨',
        skills: [
            { name: 'React / Vue.js', level: 90, color: '#61dafb' },
            { name: 'TypeScript', level: 95, color: '#3178c6' },
            { name: 'CSS / Tailwind', level: 92, color: '#38bdf8' },
        ] as Skill[],
    },
    {
        title: 'Backend',
        emoji: '⚙️',
        skills: [
            { name: 'Golang', level: 88, color: '#68a063' },
            { name: 'SQL', level: 80, color: '#336791' },
            { name: 'REST', level: 87, color: '#e535ab' },
        ] as Skill[],
    },
    {
        title: 'Tools',
        emoji: '🔧',
        skills: [
            { name: 'Git / GitHub', level: 93, color: '#f05032' },
            { name: 'Docker', level: 78, color: '#2496ed' },
            { name: 'Cloud', level: 75, color: '#ff9900' }
        ] as Skill[],
    },
];

const SkillBar = ({ skill, isInView, delay }: { skill: Skill; isInView: boolean; delay: number }) => (
    <div style={{ marginBottom: '18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{skill.name}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{skill.level}%</span>
        </div>
        <div style={{
            height: '8px',
            borderRadius: '4px',
            background: 'rgba(255,255,255,0.06)',
            overflow: 'hidden',
        }}>
            <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay, ease: 'easeOut' }}
                style={{
                    height: '100%',
                    borderRadius: '4px',
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                    boxShadow: `0 0 12px ${skill.color}44`,
                }}
            />
        </div>
    </div>
);

const Skills = () => {
    const { ref, isInView } = useInView(0.15);

    return (
        <section id="skills" className="section" ref={ref} style={{ position: 'relative' }}>
            <div className="glow-orb" style={{ width: 400, height: 400, background: 'var(--color-accent)', top: '20%', right: '-15%' }} />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <h2 className="section-title">My Skills</h2>
                <p className="section-subtitle">Technologies and tools I work with daily</p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                gap: '24px',
            }}>
                {skillCategories.map((cat, catIndex) => (
                    <motion.div
                        key={cat.title}
                        className="glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '24px',
                        }}>
                            <span style={{ fontSize: '1.8rem' }}>{cat.emoji}</span>
                            <h3 style={{
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                fontFamily: 'var(--font-heading)',
                            }}>
                                {cat.title}
                            </h3>
                        </div>
                        {cat.skills.map((skill, i) => (
                            <SkillBar
                                key={skill.name}
                                skill={skill}
                                isInView={isInView}
                                delay={0.3 + catIndex * 0.15 + i * 0.1}
                            />
                        ))}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
