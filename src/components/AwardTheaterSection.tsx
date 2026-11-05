import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, ZoomIn, CheckCircle2, ShieldCheck } from 'lucide-react';
import { LiquidGlassCard } from './LiquidGlassCard';
import { portfolioData, type CertificateItem } from '../data/portfolioData';
import { awardVideo, awardStagePhoto, hpLifeCertificate } from '../data/mediaAssets';

export const AwardTheaterSection: React.FC = () => {
  const { recognition } = portfolioData;
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; caption: string } | null>(null);

  return (
    <section
      id="award"
      style={{
        padding: '110px 24px 130px',
        maxWidth: 1280,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Top Floating Trophy Badge */}
      <div style={{ textAlign: 'center', marginBottom: 54 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 24px',
            borderRadius: 999,
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(140, 109, 31, 0.1) 100%)',
            border: '1.5px solid rgba(212, 175, 55, 0.5)',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.5)',
            marginBottom: 20,
          }}
        >
          <Trophy size={20} color="#D4AF37" />
          <span
            style={{
              fontSize: 13,
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#F3EBDD',
            }}
          >
            {recognition.awardBadge}
          </span>
        </motion.div>

        <h2
          style={{
            margin: '0 0 14px 0',
            fontSize: 'clamp(34px, 4.6vw, 56px)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            color: '#F3EBDD',
            letterSpacing: '-0.02em',
          }}
        >
          {recognition.awardTitle}
        </h2>

        <div
          style={{
            fontSize: 16,
            color: '#D4AF37',
            fontWeight: 600,
            fontFamily: 'var(--font-sans)',
            marginBottom: 16,
          }}
        >
          {recognition.awardSubtitle}
        </div>

        <p
          style={{
            margin: '0 auto',
            fontSize: 17,
            lineHeight: 1.6,
            color: '#A89F8B',
            maxWidth: '38em',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {recognition.awardDescription}
        </p>
      </div>

      {/* Cinema-Grade Video Theater Stage */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 36,
          alignItems: 'center',
          marginBottom: 80,
        }}
      >
        {/* Left: Liquid Glass Cinema Frame with Ambient Gold Glow */}
        <div style={{ position: 'relative' }}>
          {/* Ambient Gold Backlight Glow */}
          <div
            style={{
              position: 'absolute',
              inset: -15,
              borderRadius: 36,
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, rgba(140, 109, 31, 0.15) 50%, transparent 80%)',
              filter: 'blur(30px)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />

          <LiquidGlassCard
            borderRadius={30}
            style={{
              padding: 16,
              background: 'rgba(15, 14, 16, 0.85)',
              border: '2px solid rgba(212, 175, 55, 0.45)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), inset 0 2px 2px rgba(255, 255, 255, 0.4)',
            }}
          >
            <div
              style={{
                borderRadius: 22,
                overflow: 'hidden',
                background: '#000000',
                position: 'relative',
              }}
            >
              <video
                controls
                preload="metadata"
                playsInline
                aria-label="Winning environmental marketing advertisement"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: 22,
                  outline: 'none',
                }}
              >
                <source src={awardVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 10px 4px',
              }}
            >
              <span
                style={{
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: '#C9BEAF',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {recognition.awardVideoCaption}
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: 'monospace',
                  color: '#D4AF37',
                  padding: '2px 8px',
                  borderRadius: 6,
                  background: 'rgba(212, 175, 55, 0.12)',
                }}
              >
                1st Prize Commercial
              </span>
            </div>
          </LiquidGlassCard>
        </div>

        {/* Right: Stage Photo in Glass Frame */}
        <div>
          <LiquidGlassCard
            borderRadius={30}
            onClick={() =>
              setActiveModalImage({
                src: awardStagePhoto,
                caption: recognition.awardPhotoCaption,
              })
            }
            style={{
              padding: 16,
              cursor: 'pointer',
              background: 'rgba(20, 19, 22, 0.7)',
            }}
          >
            <div
              style={{
                borderRadius: 22,
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '4 / 3',
                background: '#0B0B0C',
              }}
            >
              <img
                src={awardStagePhoto}
                alt={recognition.awardPhotoCaption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              {/* Zoom overlay badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 14,
                  right: 14,
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(11, 11, 12, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ZoomIn size={16} color="#D4AF37" />
              </div>
            </div>

            <div style={{ padding: '14px 10px 4px' }}>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#C9BEAF',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {recognition.awardPhotoCaption}
              </span>
            </div>
          </LiquidGlassCard>
        </div>
      </div>

      {/* Certifications Section */}
      <div style={{ marginTop: 40 }}>
        <div style={{ marginBottom: 32, textAlign: 'left' }}>
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
              marginBottom: 10,
            }}
          >
            <ShieldCheck size={14} color="#D4AF37" />
            Accreditations &amp; Coursework
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: 'clamp(26px, 3.2vw, 38px)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              color: '#F3EBDD',
              letterSpacing: '-0.02em',
            }}
          >
            Certifications &amp; Professional Diplomas
          </h3>
        </div>

        {/* 4 Certification Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
            marginBottom: 44,
          }}
        >
          {recognition.certifications.map((cert: CertificateItem, idx: number) => (
            <LiquidGlassCard
              key={cert.id}
              borderRadius={24}
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: 'monospace',
                      color: '#8C6D1F',
                      padding: '3px 8px',
                      borderRadius: 6,
                      background: 'rgba(140, 109, 31, 0.1)',
                    }}
                  >
                    CERT-0{idx + 1}
                  </span>
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 600,
                      color: '#D4AF37',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {cert.issuer}
                  </span>
                </div>

                <h4
                  style={{
                    margin: '0 0 10px 0',
                    fontSize: 19,
                    fontFamily: 'var(--font-serif)',
                    color: '#F3EBDD',
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {cert.title}
                </h4>

                <p
                  style={{
                    margin: 0,
                    fontSize: 13.5,
                    color: '#A89F8B',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {cert.type} · {cert.date}
                </p>
              </div>

              <div
                style={{
                  marginTop: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#D4AF37',
                  fontSize: 12.5,
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={14} color="#D4AF37" />
                <span>Verified Curriculum</span>
              </div>
            </LiquidGlassCard>
          ))}
        </div>

        {/* Featured Certificate Image: HP LIFE */}
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <LiquidGlassCard
            borderRadius={28}
            onClick={() =>
              setActiveModalImage({
                src: hpLifeCertificate,
                caption: recognition.certImageCaption,
              })
            }
            style={{
              padding: 20,
              cursor: 'pointer',
              background: 'rgba(21, 20, 22, 0.65)',
            }}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                position: 'relative',
                background: '#0B0B0C',
              }}
            >
              <img
                src={hpLifeCertificate}
                alt={recognition.certImageCaption}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 14,
                  right: 14,
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(11, 11, 12, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ZoomIn size={16} color="#D4AF37" />
              </div>
            </div>
            <div style={{ padding: '16px 8px 4px', textAlign: 'center' }}>
              <span style={{ fontSize: 14, color: '#C9BEAF', fontFamily: 'var(--font-sans)' }}>
                {recognition.certImageCaption} (Click to expand)
              </span>
            </div>
          </LiquidGlassCard>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100000,
              background: 'rgba(11, 11, 12, 0.92)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: 960,
                width: '100%',
                background: 'rgba(21, 20, 22, 0.9)',
                borderRadius: 24,
                border: '1.5px solid rgba(212, 175, 55, 0.4)',
                padding: 16,
                boxShadow: '0 30px 80px rgba(0,0,0,0.95), 0 0 50px rgba(212,175,55,0.3)',
              }}
            >
              <button
                onClick={() => setActiveModalImage(null)}
                style={{
                  position: 'absolute',
                  top: -16,
                  right: -16,
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#D4AF37',
                  border: 'none',
                  color: '#0B0B0C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
                }}
              >
                <X size={22} />
              </button>
              <img
                src={activeModalImage.src}
                alt={activeModalImage.caption}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '78vh',
                  objectFit: 'contain',
                  borderRadius: 16,
                  display: 'block',
                }}
              />
              <p
                style={{
                  margin: '14px 0 6px',
                  textAlign: 'center',
                  color: '#F3EBDD',
                  fontSize: 15,
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {activeModalImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
