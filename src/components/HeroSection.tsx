import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { ExecutivePass } from './ExecutivePass';

export const HeroSection: React.FC = () => {
  const { hero } = portfolioData;

  // Split headline words for word-by-word kinetic 3D blur-and-rise entrance
  const words = [
    { text: 'I', highlight: false, italic: false },
    { text: 'market', highlight: true, italic: true },
    { text: 'properties', highlight: true, italic: true },
    { text: 'and', highlight: false, italic: false },
    { text: 'keep', highlight: false, italic: false },
    { text: 'operations', highlight: true, italic: true },
    { text: 'moving.', highlight: true, italic: true },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(12px)',
      rotateX: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      rotateX: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 },
    },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        padding: '120px 24px 80px',
        maxWidth: 1280,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px 48px',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left Column: Kinetic Typography & CTAs */}
        <div>
          {/* Eyebrow Badge with Pulsing Gold Beacon */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 18px',
              borderRadius: 999,
              background: 'rgba(21, 20, 22, 0.65)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                backgroundColor: '#D4AF37',
                boxShadow: '0 0 10px #D4AF37, 0 0 20px rgba(212, 175, 55, 0.8)',
                display: 'inline-block',
                animation: 'beaconGlow 2.5s infinite ease-in-out',
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#F3EBDD',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Kinetic Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: 'clamp(44px, 5.8vw, 84px)',
              lineHeight: 1.06,
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              color: '#F3EBDD',
              margin: '0 0 28px 0',
              letterSpacing: '-0.025em',
              perspective: 800,
            }}
          >
            {words.map((item, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                style={{
                  display: 'inline-block',
                  marginRight: '0.28em',
                  color: item.highlight ? '#D4AF37' : '#F3EBDD',
                  fontStyle: item.italic ? 'italic' : 'normal',
                  textShadow: item.highlight
                    ? '0 0 35px rgba(212, 175, 55, 0.4), 0 0 10px rgba(212, 175, 55, 0.2)'
                    : 'none',
                }}
              >
                {item.text}
              </motion.span>
            ))}
          </motion.h1>

          {/* Bio text */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontSize: 'clamp(17px, 1.3vw, 20px)',
              lineHeight: 1.65,
              color: '#BDB4A3',
              maxWidth: '36em',
              margin: '0 0 38px 0',
              fontWeight: 400,
              fontFamily: 'var(--font-sans)',
            }}
          >
            {hero.bio}
          </motion.p>

          {/* Magnetic Liquid Glass Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <MagneticButton href="#contact" variant="gold">
              <span>{hero.ctaPrimary}</span>
              <Send size={17} />
            </MagneticButton>

            <MagneticButton href="#experience" variant="glass">
              <span>{hero.ctaSecondary}</span>
              <ArrowUpRight size={18} color="#D4AF37" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: Suspended 3D Interactive Executive Pass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ExecutivePass />
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          color: '#8C6D1F',
          fontSize: 12,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          pointerEvents: 'none',
        }}
      >
        <span>Explore Spatial Portfolio</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} color="#D4AF37" />
        </motion.div>
      </motion.div>
    </section>
  );
};
