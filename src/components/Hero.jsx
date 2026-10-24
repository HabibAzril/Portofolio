import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import MicroSlats from './MicroSlats';

export default function Hero({ isReady }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* MicroSlats Ambient Interactive Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <MicroSlats
          preset="swell"
          color="#262626"
          glintColor="#ffffff"
          backgroundColor="#0a0a0a"
          slatWidth={10}
          slatHeight={26}
          gap={3}
          roundness={0.75}
          interactive={true}
          cursorStrength={1.2}
          cursorSize={45}
          swirl={0.3}
          trail={1.5}
          lean={0.2}
          intro={true}
          introDuration={1.8}
        />

        {/* Subtle radial vignette behind hero text for legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 35% 50%, rgba(10, 10, 10, 0.82) 0%, rgba(10, 10, 10, 0.45) 55%, rgba(10, 10, 10, 0.75) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top fade into navbar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '140px',
            background: 'linear-gradient(to bottom, var(--bg-primary) 0%, rgba(10, 10, 10, 0.4) 60%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Bottom fade into next section */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '160px',
            background: 'linear-gradient(to top, var(--bg-primary) 0%, rgba(10, 10, 10, 0.6) 50%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isReady ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            maxWidth: '900px',
            pointerEvents: 'auto',
          }}
        >
          {/* Small label */}
          <motion.div variants={itemVariants}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              {personalInfo.tagline}
            </span>
          </motion.div>

          {/* Main Heading — large, expressive */}
          <motion.div variants={itemVariants}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
              }}
            >
              Building digital
              <br />
              experiences with
              <br />
              <span style={{ color: 'var(--text-secondary)' }}>
                precision & craft
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '520px',
            }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              paddingTop: '8px',
            }}
          >
            <a href="#projects" className="btn-primary cursor-target" data-cursor-label="Projects">
              Lihat Proyek
            </a>
            <a href="#contact" className="btn-secondary cursor-target" data-cursor-label="Contact">
              Hubungi Saya
            </a>
            <a
              href="/project/CV.%20Azril%20Ahmad%20Rayyan.pdf"
              download="CV. Azril Ahmad Rayyan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary cursor-target"
              data-cursor-label="Download CV"
            >
              <Download size={15} />
              <span>Unduh CV</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} color="var(--text-muted)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
