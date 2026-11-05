import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUp,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { LiquidGlassCard } from './LiquidGlassCard';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData;
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType((current) => (current === type ? null : current));
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      style={{
        padding: '100px 24px 70px',
        maxWidth: 1280,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Liquid Glass Command Portal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative' }}
      >
        {/* Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            inset: -20,
            borderRadius: 45,
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.25) 0%, rgba(140, 109, 31, 0.1) 45%, transparent 75%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        <LiquidGlassCard
          borderRadius={34}
          style={{
            padding: '60px 48px',
            background: 'linear-gradient(145deg, rgba(28, 26, 32, 0.8) 0%, rgba(16, 15, 18, 0.92) 100%)',
            border: '1.5px solid rgba(212, 175, 55, 0.4)',
            boxShadow: '0 35px 90px -15px rgba(0, 0, 0, 0.95), 0 0 45px rgba(212, 175, 55, 0.2), inset 0 2px 2px rgba(255, 255, 255, 0.45)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px 64px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Heading & Call to Action */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 12,
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#D4AF37',
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                <Sparkles size={14} color="#D4AF37" />
                Initiate Dialogue
              </div>

              <h2
                style={{
                  margin: '0 0 16px 0',
                  fontSize: 'clamp(38px, 5vw, 62px)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  color: '#F3EBDD',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                }}
              >
                {contact.heading}
              </h2>

              <p
                style={{
                  margin: '0 0 32px 0',
                  fontSize: 17.5,
                  lineHeight: 1.65,
                  color: '#BDB4A3',
                  maxWidth: '32em',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {contact.lead}
              </p>

              {/* Magnetic Action Buttons */}
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <MagneticButton href={`mailto:${contact.email}`} variant="gold">
                  <span>Send an email</span>
                  <Send size={16} />
                </MagneticButton>

                <MagneticButton href={contact.phoneHref} variant="glass">
                  <span>Call me</span>
                  <PhoneCall size={16} color="#D4AF37" />
                </MagneticButton>
              </div>
            </div>

            {/* Right Column: Interactive Detail Hub with Copy Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Email Card with 1-Click Copy */}
              <div
                style={{
                  padding: '20px 24px',
                  borderRadius: 20,
                  background: 'rgba(212, 175, 55, 0.06)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(212, 175, 55, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} color="#D4AF37" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 11.5, color: '#8C6D1F', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${contact.email}`}
                      style={{
                        color: '#F3EBDD',
                        fontSize: 'clamp(14px, 1.4vw, 17px)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: 'block',
                      }}
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => handleCopy(contact.email, 'email')}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 999,
                    background: copiedType === 'email' ? '#D4AF37' : 'rgba(21, 20, 22, 0.8)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    color: copiedType === 'email' ? '#0B0B0C' : '#F3EBDD',
                    fontSize: 12,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                >
                  {copiedType === 'email' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedType === 'email' ? 'Copied!' : 'Copy'}</span>
                </motion.button>
              </div>

              {/* Phone Card with 1-Click Copy */}
              <div
                style={{
                  padding: '20px 24px',
                  borderRadius: 20,
                  background: 'rgba(212, 175, 55, 0.06)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(212, 175, 55, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} color="#D4AF37" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11.5, color: '#8C6D1F', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Mobile / WhatsApp
                    </div>
                    <a
                      href={contact.phoneHref}
                      style={{
                        color: '#F3EBDD',
                        fontSize: 17,
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => handleCopy(contact.phone, 'phone')}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 999,
                    background: copiedType === 'phone' ? '#D4AF37' : 'rgba(21, 20, 22, 0.8)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    color: copiedType === 'phone' ? '#0B0B0C' : '#F3EBDD',
                    fontSize: 12,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                >
                  {copiedType === 'phone' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedType === 'phone' ? 'Copied!' : 'Copy'}</span>
                </motion.button>
              </div>

              {/* Location Card */}
              <div
                style={{
                  padding: '20px 24px',
                  borderRadius: 20,
                  background: 'rgba(212, 175, 55, 0.06)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(212, 175, 55, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} color="#D4AF37" />
                </div>
                <div>
                  <div style={{ fontSize: 11.5, color: '#8C6D1F', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    Primary Base
                  </div>
                  <div style={{ color: '#F3EBDD', fontSize: 16, fontWeight: 600 }}>
                    {contact.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </motion.div>

      {/* Footer & Back to Top */}
      <footer
        style={{
          marginTop: 80,
          paddingTop: 32,
          borderTop: '1px solid rgba(212, 175, 55, 0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
          fontSize: 14,
          color: '#8C6D1F',
          fontFamily: 'var(--font-sans)',
        }}
      >
        <div>{contact.copyright}</div>

        <button
          onClick={scrollToTop}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 18px',
            borderRadius: 999,
            background: 'rgba(21, 20, 22, 0.7)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            color: '#F3EBDD',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#D4AF37';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>Return to Top</span>
          <ArrowUp size={15} color="#D4AF37" />
        </button>
      </footer>
    </section>
  );
};
