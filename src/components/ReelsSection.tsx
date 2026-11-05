import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, ChevronLeft, ChevronRight, Video } from 'lucide-react';
import { LiquidGlassCard } from './LiquidGlassCard';
import { portfolioData, type ReelItem } from '../data/portfolioData';

export const ReelsSection: React.FC = () => {
  const { reels } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReel = () => {
    setActiveIndex((prev) => (prev + 1) % reels.length);
  };

  const prevReel = () => {
    setActiveIndex((prev) => (prev - 1 + reels.length) % reels.length);
  };

  return (
    <section
      id="work"
      style={{
        padding: '100px 24px 120px',
        maxWidth: 1280,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 48,
        }}
      >
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
              marginBottom: 12,
            }}
          >
            <Video size={14} color="#D4AF37" />
            Media &amp; Campaigns
          </div>
          <h2
            style={{
              margin: '0 0 10px 0',
              fontSize: 'clamp(32px, 4.4vw, 54px)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              color: '#F3EBDD',
              letterSpacing: '-0.02em',
            }}
          >
            Videos &amp; Reels
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              color: '#A89F8B',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Organic property tours, marketing video brochures, and viral short-form assets hosted on Facebook.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button
            onClick={prevReel}
            aria-label="Previous reel"
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'rgba(21, 20, 22, 0.65)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              backdropFilter: 'blur(20px)',
              color: '#F3EBDD',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#D4AF37';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ChevronLeft size={22} color="#D4AF37" />
          </button>

          <span style={{ fontSize: 13, fontFamily: 'monospace', color: '#D4AF37', minWidth: 45, textAlign: 'center' }}>
            0{activeIndex + 1} / 0{reels.length}
          </span>

          <button
            onClick={nextReel}
            aria-label="Next reel"
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'rgba(21, 20, 22, 0.65)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              backdropFilter: 'blur(20px)',
              color: '#F3EBDD',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#D4AF37';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.35)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ChevronRight size={22} color="#D4AF37" />
          </button>
        </div>
      </div>

      {/* 3D Glass Coverflow Carousel Showcase */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '30px 0 50px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
          }}
        >
          {reels.map((reel: ReelItem, idx: number) => {
            const isFeatured = idx === activeIndex;

            return (
              <motion.div
                key={reel.id}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <LiquidGlassCard
                  borderRadius={28}
                  style={{
                    padding: '28px 24px',
                    aspectRatio: '4 / 5',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: isFeatured
                      ? '1.5px solid rgba(212, 175, 55, 0.65)'
                      : '1px solid rgba(212, 175, 55, 0.2)',
                    boxShadow: isFeatured
                      ? '0 25px 65px -10px rgba(0, 0, 0, 0.95), 0 0 35px rgba(212, 175, 55, 0.25)'
                      : '0 15px 40px -10px rgba(0, 0, 0, 0.7)',
                    background: isFeatured
                      ? 'linear-gradient(160deg, rgba(32, 30, 36, 0.65) 0%, rgba(18, 17, 20, 0.85) 100%)'
                      : 'rgba(21, 20, 22, 0.45)',
                  }}
                >
                  {/* Top Tag & Media Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: 999,
                        background: isFeatured ? 'rgba(212, 175, 55, 0.2)' : 'rgba(140, 109, 31, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        fontSize: 11.5,
                        fontWeight: 600,
                        color: '#D4AF37',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {reel.tag}
                    </span>

                    <span style={{ fontSize: 12, fontFamily: 'monospace', color: '#8C6D1F' }}>
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Center Glowing Play Orb */}
                  <div
                    style={{
                      alignSelf: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 12,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: 68,
                        height: 68,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), rgba(212,175,55,0.4) 50%, rgba(14,13,16,0.9) 100%)',
                        border: '1.5px solid rgba(212, 175, 55, 0.6)',
                        boxShadow: '0 0 25px rgba(212, 175, 55, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#F3EBDD',
                      }}
                    >
                      <Play size={24} fill="#D4AF37" color="#D4AF37" style={{ marginLeft: 3 }} />
                    </motion.div>
                  </div>

                  {/* Bottom Info & Magnetic Link */}
                  <div>
                    <h3
                      style={{
                        margin: '0 0 4px 0',
                        fontSize: 22,
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 600,
                        color: '#F3EBDD',
                      }}
                    >
                      {reel.title}
                    </h3>
                    <p
                      style={{
                        margin: '0 0 16px 0',
                        fontSize: 13.5,
                        color: '#A89F8B',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {reel.subtitle}
                    </p>

                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '10px 18px',
                        borderRadius: 999,
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.35)',
                        color: '#F3EBDD',
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#D4AF37';
                        e.currentTarget.style.color = '#0B0B0C';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)';
                        e.currentTarget.style.color = '#F3EBDD';
                      }}
                    >
                      <span>Watch on Facebook</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
