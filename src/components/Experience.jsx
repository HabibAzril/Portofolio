import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Journey</span>
          <h2>Experience</h2>
          <p>
            A continuous dedication to building high-quality web products
            and exploring modern technology trends.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '720px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  padding: '32px 0',
                  borderBottom:
                    index < experienceData.length - 1
                      ? '1px solid var(--border-subtle)'
                      : 'none',
                }}
              >
                {/* Period */}
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {exp.period}
                </div>

                {/* Role & Company */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    marginBottom: '4px',
                  }}
                >
                  {exp.role}
                </h3>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    marginBottom: '12px',
                  }}
                >
                  {exp.company}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    maxWidth: '580px',
                  }}
                >
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
