import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExecutivePass: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 18 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const badge = portfolioData.hero.badge;

  return (
    <div
      style={{
        perspective: 1200,
        WebkitPerspective: 1200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      {/* Lanyard Clip / Top Mount */}
      <div
        style={{
          width: 54,
          height: 38,
          background: 'linear-gradient(180deg, #8C6D1F 0%, #D4AF37 50%, #5E460E 100%)',
          borderRadius: '8px 8px 3px 3px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.6)',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: -14,
        }}
      >
        <div
          style={{
            width: 22,
            height: 8,
            background: '#0B0B0C',
            borderRadius: 4,
            border: '1px solid rgba(212, 175, 55, 0.4)',
          }}
        />
      </div>

      {/* Draggable Pass Container */}
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={{ left: -60, right: 60, top: -40, bottom: 40 }}
        dragElastic={0.2}
        whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          cursor: 'grab',
          width: '100%',
          maxWidth: 360,
          background: 'linear-gradient(145deg, rgba(30, 28, 32, 0.65) 0%, rgba(18, 17, 20, 0.85) 100%)',
          backdropFilter: 'blur(36px) saturate(200%) brightness(1.12)',
          WebkitBackdropFilter: 'blur(36px) saturate(200%) brightness(1.12)',
          borderRadius: 28,
          border: '1.5px solid rgba(212, 175, 55, 0.35)',
          boxShadow: isHovered
            ? '0 30px 80px -15px rgba(0, 0, 0, 0.95), 0 0 50px rgba(212, 175, 55, 0.3), inset 0 2px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 2px rgba(140, 109, 31, 0.4)'
            : '0 25px 65px -15px rgba(0, 0, 0, 0.85), 0 0 30px rgba(212, 175, 55, 0.15), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.35), inset 0 -1.5px 1.5px rgba(140, 109, 31, 0.3)',
          padding: '32px 28px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Holographic Iridescent Foil Shift on Hover */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
            opacity: isHovered ? 0.4 : 0.18,
            background: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.4) 0%, rgba(243, 235, 221, 0.2) 35%, transparent 70%)`,
            mixBlendMode: 'screen',
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Diagonal Gold Light Sheen */}
        <motion.div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 50%, rgba(212,175,55,0.2) 53%, transparent 60%)',
            pointerEvents: 'none',
            zIndex: 2,
            transform: 'rotate(-15deg)',
          }}
          animate={{
            x: ['-20%', '20%', '-20%'],
            y: ['-20%', '20%', '-20%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Content Wrapper */}
        <div style={{ position: 'relative', zIndex: 3 }}>
          {/* Top Row: Status Beacon + Monogram Stamp */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            {/* Live Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 999,
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#D4AF37',
                  boxShadow: '0 0 10px #D4AF37, 0 0 18px rgba(212, 175, 55, 0.8)',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#F3EBDD',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {badge.status}
              </span>
            </div>

            {/* Holographic MT Seal */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F3EBDD 0%, #D4AF37 50%, #8C6D1F 100%)',
                padding: 1.5,
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.35)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: '#121114',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#D4AF37',
                  letterSpacing: '0.05em',
                }}
              >
                MT
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontSize: 11,
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#8C6D1F',
                fontWeight: 700,
                marginBottom: 6,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Sparkles size={13} color="#D4AF37" />
              Executive Credentials
            </div>
            <h3
              style={{
                margin: 0,
                fontSize: 32,
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: '#F3EBDD',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              {badge.name}
            </h3>
            <p
              style={{
                margin: '8px 0 0 0',
                fontSize: 16,
                color: '#D4AF37',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.01em',
              }}
            >
              {badge.degree}
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: 'linear-gradient(90deg, rgba(212,175,55,0.5) 0%, rgba(140,109,31,0.2) 100%)',
              margin: '18px 0',
            }}
          />

          {/* Institution & Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Building2 size={15} color="#D4AF37" />
              </div>
              <span style={{ fontSize: 14, color: '#C9BEAF', fontWeight: 500 }}>
                {badge.university}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ShieldCheck size={15} color="#D4AF37" />
              </div>
              <span style={{ fontSize: 13, color: '#9E9484', fontFamily: 'monospace' }}>
                REF: {badge.idCode} · Verified
              </span>
            </div>
          </div>

          {/* Bottom Bar: Drag hint */}
          <div
            style={{
              marginTop: 24,
              paddingTop: 12,
              borderTop: '1px dashed rgba(140, 109, 31, 0.3)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 11, color: '#8C6D1F', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Spatial Pass · Touch &amp; Drag
            </span>
            <div style={{ display: 'flex', gap: 4 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: '#D4AF37',
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
