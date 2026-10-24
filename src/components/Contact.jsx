import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Send, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const inputStyles = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2>Mari Berkarya Bersama</h2>
          <p>
            Punya ide proyek, peluang kolaborasi, atau sekadar ingin berdiskusi
            tentang pengembangan web dan QA? Mari berkarya bersama.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="card"
            style={{ padding: '32px' }}
          >
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '12px',
                letterSpacing: '-0.02em',
              }}
            >
              Contact Info
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                marginBottom: '28px',
                lineHeight: 1.7,
              }}
            >
              Saya selalu terbuka untuk mendiskusikan proyek website, antarmuka interaktif, dan peluang karir.
            </p>

            {/* Email */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--text-muted)" />
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {personalInfo.socials.email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="cursor-target"
                data-cursor-label="Copy"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: copied ? '#a3a3a3' : 'var(--text-muted)',
                  transition: 'color 0.2s ease',
                }}
                title="Copy email"
              >
                {copied ? (
                  <>
                    <Check size={12} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Location */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'var(--text-secondary)',
                fontSize: '0.88rem',
                marginBottom: '28px',
              }}
            >
              <MapPin size={16} color="var(--text-muted)" />
              <span>{personalInfo.location} — Remote Friendly</span>
            </div>

            {/* Social Links */}
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}
              >
                Social
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { icon: GithubIcon, href: personalInfo.socials.github, label: 'GitHub' },
                  { icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                  { icon: InstagramIcon, href: personalInfo.socials.instagram, label: 'Instagram' },
                ].map((soc, idx) => {
                  const IconComp = soc.icon;
                  return (
                    <a
                      key={idx}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={soc.label}
                      className="cursor-target"
                      data-cursor-label={soc.label}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-hover)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.color = 'var(--text-muted)';
                      }}
                    >
                      <IconComp size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card"
            style={{ padding: '32px' }}
          >
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              Send a Message
            </h3>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  style={{
                    padding: '40px 20px',
                    textAlign: 'center',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid var(--border-hover)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <Check size={18} />
                  </div>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                    }}
                  >
                    Message Sent
                  </h4>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Terimakasih telah menghubungi saya. Saya akan menghubungi Anda segera.
                  </p>
                </motion.div>
              ) : (
                <form
                  key="form"
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                        marginBottom: '6px',
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={inputStyles}
                      onFocus={(e) =>
                        (e.target.style.borderColor = 'var(--border-hover)')
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = 'var(--border-subtle)')
                      }
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                        marginBottom: '6px',
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={inputStyles}
                      onFocus={(e) =>
                        (e.target.style.borderColor = 'var(--border-hover)')
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = 'var(--border-subtle)')
                      }
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'var(--text-muted)',
                        marginBottom: '6px',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      style={{
                        ...inputStyles,
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = 'var(--border-hover)')
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = 'var(--border-subtle)')
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary cursor-target"
                    data-cursor-label="Send"
                    style={{ width: '100%', marginTop: '4px' }}
                  >
                    <span>Send Message</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
