import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_voo68ne';
const EMAILJS_TEMPLATE_ID = 'template_bz3sytq';
const EMAILJS_PUBLIC_KEY = 'JjG4b41_WB_XeFdQF';

const contactInfo = [
    { icon: <Mail size={22} />, label: 'Email', value: 'mukeshreddy985@gmail.com' },
    { icon: <Phone size={22} />, label: 'Phone', value: '+91 9361651106' },
    { icon: <MapPin size={22} />, label: 'Location', value: 'Chennai, Tamil Nadu' },
];

const Contact = () => {
    const { ref, isInView } = useInView(0.15);
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formState.name,
                    from_email: formState.email,
                    subject: formState.subject,
                    message: formState.message,
                    to_email: 'mukeshreddy985@gmail.com',
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus('sent');
            setFormState({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '14px 18px',
        borderRadius: '12px',
        border: '1px solid var(--color-border)',
        background: 'rgba(15, 15, 26, 0.6)',
        color: 'var(--color-text)',
        fontSize: '0.95rem',
        fontFamily: 'var(--font-body)',
        outline: 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
    };

    return (
        <section id="contact" className="section" ref={ref} style={{ position: 'relative' }}>
            <div className="glow-orb" style={{ width: 400, height: 400, background: 'var(--color-accent)', top: '30%', left: '-10%' }} />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <h2 className="section-title">Contact Me</h2>
                <p className="section-subtitle">Let's build something amazing together</p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                gap: '40px',
            }}>
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '16px',
                    }}>
                        Get in Touch
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '32px', fontSize: '0.95rem' }}>
                        I'm always open to discussing new projects, creative ideas, or opportunities to
                        be part of your vision. Feel free to reach out!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'rgba(109, 40, 217, 0.1)',
                                    border: '1px solid rgba(109, 40, 217, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-primary-light)',
                                    flexShrink: 0,
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '2px' }}>
                                        {item.label}
                                    </div>
                                    <div style={{ fontWeight: 500, fontSize: '0.95rem' }}>{item.value}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="glass-card"
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            style={inputStyle}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)';
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            style={inputStyle}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)';
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)';
                        }}
                        onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-border)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    />
                    <textarea
                        placeholder="Your Message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)';
                        }}
                        onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-border)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    />
                    <motion.button
                        type="submit"
                        className="btn-gradient"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === 'sending'}
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            opacity: status === 'sending' ? 0.7 : 1,
                            cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                        }}
                    >
                        {status === 'sending' ? (
                            <>
                                <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                                Sending...
                            </>
                        ) : status === 'sent' ? (
                            '✅ Message Sent!'
                        ) : status === 'error' ? (
                            '❌ Failed to send. Try again.'
                        ) : (
                            <>
                                <Send size={18} />
                                Send Message
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
