import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Send, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey.includes('your_web3forms')) {
      setIsSubmitting(false);
      setErrorMessage(
        'Kunci akses Web3Forms belum disetel di file .env (VITE_WEB3FORMS_ACCESS_KEY). Silakan dapatkan kunci gratis di web3forms.com atau gunakan tombol kirim langsung via email di bawah.'
      );
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Pesan Baru dari ${formData.name} via Portfolio`,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(
          data.message || 'Gagal mengirim pesan. Silakan periksa kembali data atau coba beberapa saat lagi.'
        );
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        'Terjadi kendala jaringan saat mengirim pesan. Silakan periksa koneksi internet Anda atau gunakan tombol email di bawah.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Message dari ${formData.name || 'Pengunjung'}`);
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    );
    window.open(`mailto:${personalInfo.socials.email}?subject=${subject}&body=${body}`, '_blank');
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
                    padding: '40px 24px',
                    textAlign: 'center',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    background: 'rgba(34, 197, 94, 0.04)',
                    borderRadius: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '1px solid rgba(34, 197, 94, 0.5)',
                      backgroundColor: 'rgba(34, 197, 94, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      color: '#4ade80',
                    }}
                  >
                    <Check size={20} />
                  </div>
                  <h4
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '8px',
                      color: '#f8fafc',
                    }}
                  >
                    Pesan Terkirim!
                  </h4>
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                      maxWidth: '360px',
                      margin: '0 auto 20px',
                    }}
                  >
                    Terima kasih telah menghubungi saya. Pesan Anda telah terkirim langsung ke email saya (<strong>{personalInfo.socials.email}</strong>) dan akan segera saya balas.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="cursor-target"
                    data-cursor-label="Reset"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 18px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-hover)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    }}
                  >
                    Kirim Pesan Lain
                  </button>
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

                  {/* Error Notification with Mailto Fallback */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(239, 68, 68, 0.08)',
                        border: '1px solid rgba(239, 68, 68, 0.28)',
                        color: '#fca5a5',
                        fontSize: '0.82rem',
                        lineHeight: 1.5,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <AlertCircle size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{errorMessage}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="cursor-target"
                        data-cursor-label="Email Direct"
                        style={{
                          alignSelf: 'flex-start',
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.16)',
                          color: '#ffffff',
                          padding: '6px 14px',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
                      >
                        Buka di Aplikasi Email / Gmail ↗
                      </button>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary cursor-target"
                    data-cursor-label={isSubmitting ? 'Sending...' : 'Send'}
                    style={{
                      width: '100%',
                      marginTop: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      opacity: isSubmitting ? 0.75 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} />
                      </>
                    )}
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
