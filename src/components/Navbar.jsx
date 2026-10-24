import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) cancelAnimationFrame(scrollRef.current);
      scrollRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRef.current) cancelAnimationFrame(scrollRef.current);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Works', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '16px 0' : '24px 0',
        transition: 'padding 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.06)'
          : '1px solid transparent',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand */}
        <a
          href="#hero"
          className="cursor-target"
          data-cursor-label="Azril"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}
        >
          Azril Ahmad
        </a>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link cursor-target"
              data-cursor-label={link.name}
              style={{
                fontSize: '0.88rem',
                fontWeight: 400,
                color: 'var(--text-secondary)',
                transition: 'color 0.25s ease',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div
          className="desktop-cta"
          style={{ display: 'none', alignItems: 'center' }}
        >
          <a
            href="#contact"
            className="cursor-target"
            data-cursor-label="Contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.88rem',
              fontWeight: 500,
              color: 'var(--text-primary)',
              padding: '8px 18px',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              transition: 'var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-hover)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="mobile-toggle cursor-target"
          data-cursor-label="Menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
          }}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'rgba(10, 10, 10, 0.98)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border-subtle)',
              overflow: 'hidden',
            }}
          >
            <div
              className="container"
              style={{
                padding: '24px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    padding: '4px 0',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '16px',
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: '100%', marginTop: '8px' }}
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}
