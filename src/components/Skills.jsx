import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, FileCode, Layout, FileCode2,
  Sparkles, PlayCircle, Smartphone, Palette,
  Zap, GitBranch, Globe, Layers,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code2, FileCode, Layout, FileCode2,
  Sparkles, PlayCircle, Smartphone, Palette,
  Zap, GitBranch, Globe, Layers,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2>Skills & Technologies</h2>
          <p>
            Tools and technologies I use daily to build fast, responsive,
            and visually refined web experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: groupIdx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {group.category}
                </h3>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {group.skills.length} skills
                </span>
              </div>

              {/* Skills List */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {group.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        transition: 'background 0.2s ease',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                        }}
                      >
                        <IconComponent
                          size={16}
                          color="var(--text-muted)"
                        />
                        <span
                          style={{
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: 'var(--text-primary)',
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 400,
                          color: 'var(--text-muted)',
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
