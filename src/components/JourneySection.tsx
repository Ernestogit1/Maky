import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  Quote,
  Award,
  Send,
  CheckCircle2,
  BookmarkCheck,
} from 'lucide-react';
import { LiquidGlassCard } from './LiquidGlassCard';
import { portfolioData, type JourneyChapter } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

interface ChapterCardProps {
  chapter: JourneyChapter;
  index: number;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  // Dynamic scale and dimming as user scrolls further
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <div
      ref={cardRef}
      style={{
        position: 'sticky',
        top: `calc(90px + ${index * 26}px)`,
        marginBottom: 48,
        zIndex: index + 10,
      }}
    >
      <motion.div style={{ scale }}>
        <LiquidGlassCard
          borderRadius={30}
          style={{
            padding: '42px 38px',
            background: 'rgba(23, 22, 25, 0.72)',
            backdropFilter: 'blur(36px) saturate(200%) brightness(1.1)',
            WebkitBackdropFilter: 'blur(36px) saturate(200%) brightness(1.1)',
            border: '1.5px solid rgba(212, 175, 55, 0.28)',
            boxShadow: `0 ${20 + index * 8}px ${50 + index * 10}px -10px rgba(0, 0, 0, 0.9), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.4), inset 0 -1.5px 1px rgba(212, 175, 55, 0.3)`,
          }}
        >
          {/* Header Row: Chapter Tag & Timeline Years */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 12,
              marginBottom: 20,
              paddingBottom: 16,
              borderBottom: '1px solid rgba(212, 175, 55, 0.16)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#D4AF37',
                  padding: '4px 12px',
                  borderRadius: 999,
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                }}
              >
                Chapter 0{index + 1}
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#F3EBDD',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {chapter.yearLabel}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#8C6D1F', fontSize: 13, fontWeight: 600 }}>
              <Calendar size={14} color="#D4AF37" />
              <span>{chapter.period}</span>
            </div>
          </div>

          {/* Chapter Title */}
          <h3
            style={{
              margin: '0 0 18px 0',
              fontSize: 'clamp(26px, 3.2vw, 36px)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              color: '#F3EBDD',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            {chapter.title}
          </h3>

          {/* Story Content */}
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.75,
              color: '#D8D0C3',
              margin: '0 0 20px 0',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {chapter.story}
          </p>

          {/* Bullets if Fourth Year */}
          {chapter.bullets && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
              {chapter.bullets.map((b, bIdx) => (
                <div
                  key={bIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    padding: '16px 20px',
                    borderRadius: 16,
                    background: 'rgba(212, 175, 55, 0.05)',
                    border: '1px solid rgba(212, 175, 55, 0.15)',
                  }}
                >
                  <CheckCircle2 size={18} color="#D4AF37" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div style={{ fontSize: 15, lineHeight: 1.6, color: '#C9BEAF', fontFamily: 'var(--font-sans)' }}>
                    <strong style={{ color: '#F3EBDD', display: 'inline', fontWeight: 600 }}>
                      {b.bold}{' '}
                    </strong>
                    <span>{b.text}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Takeaway Callout */}
          {chapter.takeaway && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 20px',
                borderRadius: 14,
                background: 'rgba(212, 175, 55, 0.08)',
                borderLeft: '4px solid #D4AF37',
              }}
            >
              <BookmarkCheck size={18} color="#D4AF37" style={{ flexShrink: 0 }} />
              <p
                style={{
                  margin: 0,
                  fontSize: 14.5,
                  fontWeight: 500,
                  color: '#D4AF37',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {chapter.takeaway}
              </p>
            </div>
          )}
        </LiquidGlassCard>
      </motion.div>
    </div>
  );
};

export const JourneySection: React.FC = () => {
  const { journey } = portfolioData;

  return (
    <section
      id="journey"
      style={{
        padding: '100px 24px 110px',
        maxWidth: 1100,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: 48, textAlign: 'left' }}>
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
          <Sparkles size={14} color="#D4AF37" />
          The Trajectory
        </div>
        <h2
          style={{
            margin: '0 0 18px 0',
            fontSize: 'clamp(32px, 4.4vw, 56px)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            color: '#F3EBDD',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          {journey.title}
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 18,
            lineHeight: 1.65,
            color: '#A89F8B',
            maxWidth: '42em',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {journey.lead}
        </p>
      </div>

      {/* Floating Glass Quote Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: 60 }}
      >
        <LiquidGlassCard
          borderRadius={24}
          style={{
            padding: '32px 36px',
            borderLeft: '5px solid #D4AF37',
            background: 'linear-gradient(135deg, rgba(28,26,30,0.6) 0%, rgba(18,17,20,0.7) 100%)',
          }}
        >
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <Quote size={32} color="#D4AF37" style={{ flexShrink: 0, opacity: 0.8 }} />
            <div>
              <blockquote
                style={{
                  margin: '0 0 8px 0',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(20px, 2.4vw, 28px)',
                  fontStyle: 'italic',
                  color: '#F3EBDD',
                  lineHeight: 1.35,
                }}
              >
                &ldquo;{journey.quote}&rdquo;
              </blockquote>
              <div
                style={{
                  fontSize: 13,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#D4AF37',
                }}
              >
                — {journey.quoteAuthor}
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </motion.div>

      {/* Sticky Scroll-Stacking Card Deck */}
      <div style={{ position: 'relative', marginBottom: 64 }}>
        {journey.chapters.map((chapter: JourneyChapter, index: number) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            index={index}
          />
        ))}
      </div>

      {/* Floating Glass Achievement Chips */}
      <div style={{ marginBottom: 48 }}>
        <div
          style={{
            fontSize: 12,
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#8C6D1F',
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          Key Milestones &amp; Credentials
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {journey.achievementChips.map((chip: string, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, y: -2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 999,
                background: 'rgba(21, 20, 22, 0.6)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                color: '#F3EBDD',
                fontSize: 14,
                fontWeight: 500,
                fontFamily: 'var(--font-sans)',
              }}
            >
              <Award size={16} color="#D4AF37" />
              <span>{chip}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* "What Comes Next" Glass Callout Portal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <LiquidGlassCard
          borderRadius={28}
          style={{
            padding: '44px 38px',
            background: 'linear-gradient(135deg, rgba(28,26,30,0.7) 0%, rgba(18,17,20,0.85) 100%)',
            border: '1.5px solid rgba(212, 175, 55, 0.35)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.8), 0 0 35px rgba(212,175,55,0.15)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#D4AF37',
              }}
            >
              Next Chapter
            </span>
            <h3
              style={{
                margin: 0,
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                color: '#F3EBDD',
                letterSpacing: '-0.02em',
              }}
            >
              {journey.nextStep.title}
            </h3>
            <p
              style={{
                margin: '0 0 16px 0',
                fontSize: 16.5,
                lineHeight: 1.7,
                color: '#BDB4A3',
                maxWidth: '42em',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {journey.nextStep.description}
            </p>
            <MagneticButton href="#contact" variant="gold">
              <span>{journey.nextStep.cta}</span>
              <Send size={16} />
            </MagneticButton>
          </div>
        </LiquidGlassCard>
      </motion.div>
    </section>
  );
};
