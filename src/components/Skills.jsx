import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Terminal, Layers, ExternalLink } from 'lucide-react';
import LogoLoop from './LogoLoop';
import {
  PhpIcon,
  HtmlIcon,
  CssIcon,
  JavaIcon,
  JavaScriptIcon,
  LaravelIcon,
  TailwindIcon,
  BootstrapIcon,
  ReactIcon,
} from './TechLogos';
import { programmingLanguagesData, frameworksData } from '../data/portfolioData';

const techIconMap = {
  PHP: PhpIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  Java: JavaIcon,
  JavaScript: JavaScriptIcon,
  Laravel: LaravelIcon,
  'Tailwind CSS': TailwindIcon,
  Bootstrap: BootstrapIcon,
  ReactJS: ReactIcon,
};

// Exactly 9 technologies (5 programming languages and 4 frameworks) for LogoLoop
const loopLogos = [
  // 1. Programming Languages (5)
  {
    node: <PhpIcon size={32} />,
    title: 'PHP',
    href: 'https://www.php.net',
    hoverColor: '#777BB4',
  },
  {
    node: <HtmlIcon size={32} />,
    title: 'HTML',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    hoverColor: '#E34F26',
  },
  {
    node: <CssIcon size={32} />,
    title: 'CSS',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    hoverColor: '#1572B6',
  },
  {
    node: <JavaIcon size={32} />,
    title: 'Java',
    href: 'https://www.java.com',
    hoverColor: '#EA2D2E',
  },
  {
    node: <JavaScriptIcon size={32} />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    hoverColor: '#F7DF1E',
  },
  // 2. Frameworks (4)
  {
    node: <LaravelIcon size={32} />,
    title: 'Laravel',
    href: 'https://laravel.com',
    hoverColor: '#FF2D20',
  },
  {
    node: <TailwindIcon size={32} />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    hoverColor: '#38BDF8',
  },
  {
    node: <BootstrapIcon size={32} />,
    title: 'Bootstrap',
    href: 'https://getbootstrap.com',
    hoverColor: '#7952B3',
  },
  {
    node: <ReactIcon size={32} />,
    title: 'ReactJS',
    href: 'https://react.dev',
    hoverColor: '#61DAFB',
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="skills"
      className="section"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Arsenal</span>
          <h2>Programming Languages & Frameworks</h2>
          <p>
            Core programming languages and specialized frameworks I build with to create
            responsive web applications, solid backend architectures, and polished digital experiences.
          </p>
        </div>

        {/* ========================================================
            1. REACT BITS <LogoLoop /> SHOWCASE
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="card"
          style={{
            padding: '24px 20px',
            marginBottom: '48px',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
          }}
        >
          {/* Loop Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '18px',
              paddingBottom: '14px',
              borderBottom: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 10px #22c55e',
                }}
              />
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Interactive Stream • 9 Core Technologies
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.74rem',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span>5 Languages</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span>4 Frameworks</span>
            </div>
          </div>

          {/* LogoLoop Component */}
          <div style={{ padding: '8px 0' }}>
            <LogoLoop
              logos={loopLogos}
              speed={85}
              direction="left"
              logoHeight={34}
              gap={48}
              hoverSpeed={0}
              scaleOnHover={true}
              labels="hover"
              fadeOut={true}
              fadeOutWidth={0.12}
              draggable={true}
              ariaLabel="Programming Languages and Frameworks"
            />
          </div>
        </motion.div>

        {/* ========================================================
            2. PROGRAMMING LANGUAGES (5)
            ======================================================== */}
        <div style={{ marginBottom: '48px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={16} color="var(--text-muted)" />
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                }}
              >
                Programming Languages
              </span>
            </div>
            <span
              style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                padding: '4px 10px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              5 Languages
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {programmingLanguagesData.map((tech, index) => {
              const IconComponent = techIconMap[tech.name] || Terminal;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card cursor-target"
                  data-cursor-label={tech.name}
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${tech.color}44`;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
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
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        backgroundColor: `${tech.color}14`,
                        border: `1px solid ${tech.color}33`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: tech.color,
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <IconComponent size={24} color={tech.color} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--text-muted)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {tech.badge}
                    </span>
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                        letterSpacing: '-0.02em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{tech.name}</span>
                      <a
                        href={tech.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                        aria-label={`Visit official ${tech.name} website`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </h4>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      {tech.subtitle}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <CheckCircle2 size={13} color="#22c55e" />
                      Verified Skill
                    </span>
                    <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>
                      {tech.level}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ========================================================
            3. FRAMEWORKS (4)
            ======================================================== */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={16} color="var(--text-muted)" />
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                }}
              >
                Frameworks
              </span>
            </div>
            <span
              style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                padding: '4px 10px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              4 Frameworks
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {frameworksData.map((framework, index) => {
              const IconComponent = techIconMap[framework.name] || Layers;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card cursor-target"
                  data-cursor-label={framework.name}
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${framework.color}44`;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
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
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        backgroundColor: `${framework.color}14`,
                        border: `1px solid ${framework.color}33`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: framework.color,
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <IconComponent size={24} color={framework.color} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--text-muted)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {framework.badge}
                    </span>
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '4px',
                        letterSpacing: '-0.02em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{framework.name}</span>
                      <a
                        href={framework.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                        aria-label={`Visit official ${framework.name} website`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </h4>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      {framework.subtitle}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <CheckCircle2 size={13} color="#22c55e" />
                      Verified Skill
                    </span>
                    <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>
                      {framework.level}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
