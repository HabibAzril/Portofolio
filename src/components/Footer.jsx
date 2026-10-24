import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '40px 0',
        position: 'relative',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Brand & Copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
            }}
          >
            Azril Ahmad .R
          </div>
          <p
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
            }}
          >
            © {new Date().getFullYear()} Azril Ahmad .R
          </p>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="cursor-target"
          data-cursor-label="Top"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: '6px',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)',
            fontSize: '0.82rem',
            fontWeight: 500,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.borderColor = 'var(--border-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
          }}
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
