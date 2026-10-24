import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, ArrowUpRight, RotateCw } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import TiltedCard, { TiltedCardLayer } from './TiltedCard';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="projects-container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>Featured Projects</h2>
          <p style={{ margin: '0 auto' }}>
            Koleksi karya pilihan yang memadukan arsitektur web modern, performa tinggi, 
            dan desain visual interaktif. Klik pada kartu mana pun untuk membalik dan membaca deskripsi ringkas proyek.
          </p>
        </div>

        {/* 3x3 Grid Layout Showcase */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {projectsData.map((project, index) => {
              // Back content for card flip
              const backSideContent = (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                    background: 'linear-gradient(150deg, #15151c 0%, #0d0d12 100%)',
                    borderRadius: '18px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Top Bar on Reverse Side */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 12px',
                        borderRadius: '100px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#a5b4fc',
                        background: 'rgba(99, 102, 241, 0.14)',
                        border: '1px solid rgba(165, 180, 252, 0.25)',
                      }}
                    >
                      <Layers size={12} />
                      <span>{project.category}</span>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <RotateCw size={12} />
                      <span>Balik Kartu</span>
                    </div>
                  </div>

                  {/* Middle: Brief Description */}
                  <div style={{ margin: '14px 0' }}>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '6px',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p
                        style={{
                          fontSize: '0.8rem',
                          color: '#94a3b8',
                          marginBottom: '14px',
                          fontWeight: 500,
                        }}
                      >
                        {project.subtitle}
                      </p>
                    )}

                    <div
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        marginBottom: '14px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.68rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          fontWeight: 700,
                          color: '#64748b',
                          marginBottom: '6px',
                        }}
                      >
                        Deskripsi Proyek
                      </div>
                      <p
                        style={{
                          fontSize: '0.86rem',
                          color: '#e2e8f0',
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Tags */}
                    {project.tags && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: '0.7rem',
                              padding: '3px 8px',
                              borderRadius: '4px',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              color: '#cbd5e1',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Row (Links stopPropagation so card doesn't flip) */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-target"
                        data-cursor-label="Demo"
                        style={{
                          flex: 1,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '9px 14px',
                          borderRadius: '8px',
                          backgroundColor: '#ffffff',
                          color: '#09090b',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                      >
                        <span>Kunjungi Demo</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Source code"
                        className="cursor-target"
                        data-cursor-label="Code"
                        style={{
                          flex: project.demoUrl ? '0 0 auto' : 1,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '9px 14px',
                          borderRadius: '8px',
                          backgroundColor: project.demoUrl ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.09)',
                          border: '1px solid rgba(255, 255, 255, 0.14)',
                          color: '#ffffff',
                          fontSize: '0.82rem',
                          fontWeight: 500,
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = project.demoUrl ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.09)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                        }}
                      >
                        <GithubIcon size={14} />
                        <span>{project.demoUrl ? 'Code' : 'Lihat di GitHub'}</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="projects-grid-item cursor-target"
                  data-cursor-label="Flip Card"
                >
                  <TiltedCard
                    imageSrc={project.image}
                    altText={project.title}
                    captionText={project.title}
                    showTooltip={false}
                    containerWidth="100%"
                    containerHeight="380px"
                    imageWidth="100%"
                    imageHeight="380px"
                    radius={18}
                    rotateAmplitude={12}
                    scaleOnHover={1.03}
                    glare={0.45}
                    shadow={0.55}
                    flipOnClick={true}
                    backContent={backSideContent}
                  >
                    {/* Floating top tags via TiltedCardLayer */}
                    <TiltedCardLayer depth={28}>
                      <div
                        style={{
                          position: 'absolute',
                          top: '16px',
                          left: '16px',
                          right: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          pointerEvents: 'none',
                        }}
                      >
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '5px 12px',
                            borderRadius: '100px',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            color: '#e2e8f0',
                            backgroundColor: 'rgba(15, 15, 22, 0.8)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.35)',
                          }}
                        >
                          <Layers size={12} color="#818cf8" />
                          <span>{project.category}</span>
                        </div>

                        {project.featured && (
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              padding: '5px 12px',
                              borderRadius: '100px',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              color: '#fef08a',
                              backgroundColor: 'rgba(234, 179, 8, 0.16)',
                              backdropFilter: 'blur(8px)',
                              WebkitBackdropFilter: 'blur(8px)',
                              border: '1px solid rgba(250, 204, 21, 0.3)',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                            }}
                          >
                            <Sparkles size={12} color="#fde047" />
                            <span>Featured</span>
                          </div>
                        )}
                      </div>
                    </TiltedCardLayer>

                    {/* Bottom Floating preview bar via TiltedCardLayer */}
                    <TiltedCardLayer depth={36}>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '36px 18px 18px 18px',
                          background: 'linear-gradient(to top, rgba(10, 10, 14, 0.94) 0%, rgba(10, 10, 14, 0.7) 65%, transparent 100%)',
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'space-between',
                          gap: '12px',
                          pointerEvents: 'none',
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <h3
                            style={{
                              fontSize: '1.25rem',
                              fontWeight: 700,
                              color: '#ffffff',
                              letterSpacing: '-0.025em',
                              marginBottom: '3px',
                              textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
                            }}
                          >
                            {project.title}
                          </h3>
                          {project.subtitle && (
                            <p
                              style={{
                                fontSize: '0.8rem',
                                color: '#cbd5e1',
                                margin: 0,
                                textShadow: '0 1px 6px rgba(0, 0, 0, 0.8)',
                              }}
                            >
                              {project.subtitle}
                            </p>
                          )}
                        </div>

                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            color: '#f8fafc',
                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            padding: '6px 12px',
                            borderRadius: '100px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <RotateCw size={11} />
                          <span>Klik untuk detail</span>
                        </div>
                      </div>
                    </TiltedCardLayer>
                  </TiltedCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .projects-section {
          width: 100%;
          padding: 100px 0;
        }
        .projects-container {
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 48px);
          box-sizing: border-box;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          width: 100%;
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .projects-container {
            padding: 0 16px;
          }
        }
      `}</style>
    </section>
  );
}
