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
import { Database, Coffee, Server, GitBranch, Terminal, ArrowRight } from 'lucide-react';
import TechText from './TechText';
import ProfileCard from './ProfileCard';

// ==========================================
// ✏️ CUSTOMIZABLE DATA (Edit your info here)
// ==========================================
const aboutContent = {
  sectionLabel: 'About Me',
  headline: 'Turning ideas into',
  headlineAccent: 'digital reality.',
  paragraphs: [
    `Halo, saya Azril Ahmad.R, seorang siswa kelas XI jurusan Rekayasa Perangkat Lunak (RPL) di SMK PGRI 3 Malang. Saya memiliki ketertarikan besar terhadap dunia teknologi, khususnya Web Development dan Software Quality Assurance (QA).`,
    `Saya memiliki pengalaman dalam mengembangkan website sederhana menggunakan berbagai teknologi web serta melakukan pengujian dasar terhadap fitur-fitur pada website yang saya buat. Melalui pengalaman tersebut, saya mulai tertarik untuk mempelajari bagaimana sebuah aplikasi dapat dikembangkan dengan baik, diuji secara sistematis, dan memiliki kualitas yang optimal.`,
    `Saya ingin terus mengembangkan kemampuan di bidang Web Development sekaligus memperdalam pengetahuan tentang Software Quality Assurance, terutama dalam pengujian perangkat lunak, identifikasi bug, dan peningkatan kualitas aplikasi.`,
    `Saya juga senang mempelajari hal-hal baru, terbuka terhadap masukan, dan mampu bekerja sama dengan orang lain untuk mencapai tujuan bersama. Bagi saya, setiap proyek merupakan kesempatan untuk belajar, berkembang, dan menghasilkan karya yang lebih baik.`,
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
    captionRole: 'Software Quality Assurance Student • Web Developer',
    badge: 'SMK',
  },
  badges: [
    { label: 'Status', value: 'Available for projects' },
    { label: 'Education', value: 'Software Quality Assurance (SMK)' },
    { label: 'Focus', value: 'Web Apps & Testing' },
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
                className="btn-primary cursor-target"
                data-cursor-label="Projects"
                style={{ alignSelf: 'flex-start' }}
              >
                <span>Explore Featured Projects</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: ProfileCard */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              paddingTop: '8px',
            }}
          >
            <ProfileCard
              name="Azril Ahmad Rayyan"
              title="Web Developer"
              handle="PlayAll"
              status="Online"
              contactText="Contact"
              avatarUrl="/public/project/AssetAzril.png"
              iconUrl="/assets/demo/iconpattern.png"
              holo={0.8}
              glare={0.5}
              tiltStrength={12}
              parallax={8}
              radius={16}
              enableTilt={true}
              intro={true}
              showUserInfo={true}
              enableMobileTilt={false}
              theme="dark"
              onContactClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
