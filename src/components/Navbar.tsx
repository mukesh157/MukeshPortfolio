import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Hire Me', href: '#hire' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: scrolled ? 'rgba(15, 15, 26, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(45, 45, 80, 0.5)' : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s, border-bottom 0.3s',
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Portfolio
        </motion.a>

        {/* Desktop Links */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2 }}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--color-text-muted)',
                transition: 'color 0.3s',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-mobile-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-text)',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-menu"
            style={{
              position: 'absolute',
              top: '72px',
              left: 0,
              right: 0,
              background: 'rgba(15, 15, 26, 0.95)',
              backdropFilter: 'blur(20px)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'var(--color-text-muted)',
                  padding: '8px 0',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
