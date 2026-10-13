/**
 * ============================================================================
 * ABOUT ME SECTION — CUSTOMIZATION NOTE
 * ============================================================================
 * You can easily customize this component by modifying the sections below:
 *
 * 1. TECHTEXT WORDMARK (Lines ~50-65):
 *    - `text`: Change the interactive banner wordmark (e.g. "ABOUT ME", "AZRIL AHMAD", "DEV").
 *    - `fontSize`: Largest font size in pixels (default: 120; scales down on smaller screens).
 *    - `reveal`: Reveal mode ('letter' | 'area' | 'off').
 *    - `dashLength` / `dashGap`: Length and spacing of the technical vector dashes.
 *    - `specks`: Number of blinking tech particles around the letters.
 *    - `draggable`: Set to true to let users grab and flick letters off baseline.
 *
 * 2. BIO & HEADING TEXT (Lines ~75-115):
 *    - `aboutData.title`: The main headline ("Turning ideas into digital reality.").
 *    - `aboutData.paragraphs`: The introductory paragraphs about your education, stack, and interests.
 *
 * 3. CORE SKILL HIGHLIGHTS (Lines ~125-155):
 *    - `skillHighlights`: Change the 4 core cards (MYSQL, Java, PHP, Git) with their descriptions and icons.
 *
 * 4. PROFILE PHOTO (Lines ~75-85):
 *    - `aboutContent.photo`: Change `src`, `alt`, caption name, role, and badge for your photo card.
 *
 * 5. QUICK STATS & BADGES (Lines ~88-100):
 *    - Change education status, location, or availability badge.
 * ============================================================================
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Coffee, Server, GitBranch, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import TechText from './TechText';

// ==========================================
// ✏️ CUSTOMIZABLE DATA (Edit your info here)
// ==========================================
const aboutContent = {
  sectionLabel: 'About Me',
  headline: 'Turning ideas into',
  headlineAccent: 'digital reality.',
  paragraphs: [
    `Hi there! I'm Azril Ahmad.R, a Software Engineering student at SMK with a deep passion for web development. I love the process of transforming concepts into clean, functional, and beautiful web applications.`,
    `I have experience building simple to intermediate web applications using HTML, CSS, JavaScript, and Node.js. I'm constantly exploring new technologies and sharpening my skills to become a well-rounded developer.`,
    `When I'm not coding, you'll find me exploring open-source projects, learning new frameworks, or experimenting with UI/UX design patterns to make interfaces more intuitive and delightful.`,
  ],
  skills: [
    {
      name: 'MYSQL',
      subtitle: 'well-organized database',
      icon: Database,
      badge: 'Database',
    },
    {
      name: 'Java',
      subtitle: 'Interactive logic',
      icon: Coffee,
      badge: 'OOP & Logic',
    },
    {
      name: 'PHP',
      subtitle: 'Server-side scripting',
      icon: Server,
      badge: 'Backend',
    },
    {
      name: 'Git',
      subtitle: 'Version control',
      icon: GitBranch,
      badge: 'Workflow',
    },
  ],
  photo: {
    src: '/project/MyFace2.jpg',
    alt: 'Portrait of Azril Ahmad.R',
    captionName: 'Azril Ahmad.R',
    captionRole: 'Software Engineering Student • Web Developer',
    badge: 'SMK',
  },
  badges: [
    { label: 'Status', value: 'Available for projects' },
    { label: 'Education', value: 'Software Engineering (SMK)' },
    { label: 'Focus', value: 'Web Apps & UI Architecture' },
  ],
};

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="about"
      className="section"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* ========================================================
            1. TECHTEXT INTERACTIVE WORDMARK BANNER
            ======================================================== */}
        <div
          style={{
            width: '100%',
            height: '240px',
            marginBottom: '48px',
            position: 'relative',
            borderRadius: '16px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%)',
            border: '1px solid var(--border-subtle)',
            overflow: 'hidden',
          }}
        >
          {/* Subtle grid backdrop for the tech canvas */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              pointerEvents: 'none',
            }}
          />

          <TechText
            text="ABOUT ME"
            fontFamily="Outfit, sans-serif"
            fontWeight={700}
            fontSize={120}
            letterSpacing={-0.03}
            color="#e8e8e8"
            accentColor="#ffffff"
            reveal="letter"
            reach={180}
            softness={0.7}
            dashLength={4}
            dashGap={2}
            strokeWidth={1.5}
            lineStyle="dashed"
            specks={14}
            selection={true}
            labels={true}
            draggable={true}
            sweep={true}
            speed={0.9}
          />

          {/* Interactive Hint Label */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              pointerEvents: 'none',
              background: 'rgba(10, 10, 10, 0.75)',
              padding: '4px 10px',
              borderRadius: '20px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <Sparkles size={12} color="var(--text-muted)" />
            <span>Interactive • Hover & Drag letters</span>
          </div>
        </div>

        {/* ========================================================
            2. MAIN ABOUT CONTENT GRID
            ======================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Bio & Story */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <motion.div variants={itemVariants}>
              <span className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={14} />
                {aboutContent.sectionLabel}
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.15,
                  marginTop: '12px',
                  color: 'var(--text-primary)',
                }}
              >
                {aboutContent.headline}
                <br />
                <span style={{ color: 'var(--text-secondary)' }}>{aboutContent.headlineAccent}</span>
              </h2>
            </motion.div>

            {aboutContent.paragraphs.map((p, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                }}
              >
                {p}
              </motion.p>
            ))}

            {/* Quick Badges / Meta Info */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                paddingTop: '8px',
              }}
            >
              {aboutContent.badges.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.82rem',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>{b.label}:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{b.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Action CTA */}
            <motion.div variants={itemVariants} style={{ paddingTop: '8px' }}>
              <a
                href="#projects"
                className="btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                <span>Explore Featured Projects</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Photo & Skill Focus */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Photo Card — Aligned with "Turning ideas into digital reality" */}
            <motion.div
              variants={itemVariants}
              className="about-image-card"
              data-cursor="true"
            >
              <img
                src={aboutContent.photo.src}
                alt={aboutContent.photo.alt}
                className="about-photo-img"
                loading="lazy"
              />
              <div className="about-image-overlay" aria-hidden="true" />

              {/* Bottom Caption Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: '12px',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      letterSpacing: '-0.01em',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {aboutContent.photo.captionName}
                  </p>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {aboutContent.photo.captionRole}
                  </p>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    background: 'rgba(10, 10, 10, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.72rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#22c55e',
                      boxShadow: '0 0 8px #22c55e',
                    }}
                  />
                  <span>{aboutContent.photo.badge}</span>
                </div>
              </div>
            </motion.div>

            {/* Core Foundations & Tooling Label */}
            <motion.div variants={itemVariants} style={{ marginTop: '8px' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                Core Foundations & Tooling
              </span>
            </motion.div>

            {/* Skill Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px',
              }}
            >
              {aboutContent.skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card"
                    style={{
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {skill.badge}
                      </span>
                    </div>

                    <div>
                      <h4
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          marginBottom: '4px',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {skill.name}
                      </h4>
                      <p
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
                        }}
                      >
                        {skill.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Info Box */}
            <motion.div
              variants={itemVariants}
              className="card"
              style={{
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 10px #22c55e',
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                Always excited to learn modern toolchains, explore scalable architectures, and collaborate on ambitious digital ideas.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
