import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Check, Sparkles } from 'lucide-react';
import { LiquidGlassCard } from './LiquidGlassCard';
import { portfolioData, type ExperienceItem } from '../data/portfolioData';

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        position: 'relative',
        marginBottom: 60,
        alignItems: 'center',
      }}
      className="timeline-item-grid"
    >
      {/* Left Column (on desktop) */}
      <div
        className="timeline-col-left"
        style={{
          gridColumn: isEven ? '1 / 6' : '7 / 13',
          gridRow: 1,
          textAlign: isEven ? 'right' : 'left',
          order: isEven ? 1 : 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <LiquidGlassCard
            borderRadius={26}
            style={{
              padding: '32px 28px',
              textAlign: 'left',
              borderLeft: isEven ? '1px solid rgba(212,175,55,0.22)' : '3px solid #D4AF37',
              borderRight: isEven ? '3px solid #D4AF37' : '1px solid rgba(212,175,55,0.22)',
            }}
          >
            {/* Header: Role & Period */}
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: 'monospace',
                    color: '#D4AF37',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                  }}
                >
                  EXP-0{index + 1}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 13,
                    color: '#8C6D1F',
                    fontWeight: 600,
                  }}
                >
                  <Calendar size={13} color="#D4AF37" />
                  {item.period}
                </span>
              </div>

              <h3
                style={{
                  margin: '0 0 6px 0',
                  fontSize: 'clamp(20px, 2.2vw, 24px)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  color: '#F3EBDD',
                  lineHeight: 1.25,
                }}
              >
                {item.role}
              </h3>

              <div
                style={{
                  fontSize: 14.5,
                  color: '#D4AF37',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  flexWrap: 'wrap',
                }}
              >
                <span>{item.organization}</span>
                <span style={{ color: '#8C6D1F' }}>·</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#A89F8B', fontSize: 13 }}>
                  <MapPin size={13} />
                  {item.location}
                </span>
              </div>
            </div>

            {/* Bullets List */}
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {item.bullets.map((bullet, bIdx) => (
                <li
                  key={bIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: '#C9BEAF',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: 'rgba(212, 175, 55, 0.15)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 3,
                    }}
                  >
                    <Check size={10} color="#D4AF37" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </LiquidGlassCard>
        </motion.div>
      </div>

      {/* Center Laser Node Marker */}
      <div
        className="timeline-node-container"
        style={{
          gridColumn: '6 / 8',
          gridRow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          order: 2,
          zIndex: 5,
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1A191D 0%, #0B0B0C 100%)',
            border: '2px solid #D4AF37',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.6), inset 0 0 10px rgba(212, 175, 55, 0.4)',
            position: 'relative',
          }}
        >
          {/* Pulsating Ring */}
          <motion.div
            style={{
              position: 'absolute',
              inset: -6,
              borderRadius: '50%',
              border: '1.5px solid #D4AF37',
              pointerEvents: 'none',
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.4,
            }}
          />
          <Briefcase size={16} color="#D4AF37" />
        </motion.div>
      </div>
    </div>
  );
};

export const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { experience } = portfolioData;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 75%'],
  });

  const beamScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={containerRef}
      style={{
        padding: '100px 24px 110px',
        maxWidth: 1280,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: 64, textAlign: 'center' }}>
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
          Field Track Record
        </div>
        <h2
          style={{
            margin: '0 0 16px 0',
            fontSize: 'clamp(32px, 4.4vw, 54px)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            color: '#F3EBDD',
            letterSpacing: '-0.02em',
          }}
        >
          Professional Experience
        </h2>
        <p
          style={{
            margin: '0 auto',
            fontSize: 17,
            lineHeight: 1.6,
            color: '#A89F8B',
            maxWidth: '36em',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Demonstrated execution across real estate brokerage marketing, high-volume client negotiations, and municipal budget governance.
        </p>
      </div>

      {/* Timeline Wrapper with Laser Beam */}
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Static Background Beam Guideline */}
        <div
          className="timeline-guide-line"
          style={{
            position: 'absolute',
            top: 20,
            bottom: 20,
            left: '50%',
            width: 2,
            background: 'rgba(212, 175, 55, 0.12)',
            transform: 'translateX(-50%)',
          }}
        />

        {/* Dynamic Laser-Drawn Glowing Solid Gold Beam */}
        <motion.div
          className="timeline-laser-line"
          style={{
            position: 'absolute',
            top: 20,
            bottom: 20,
            left: '50%',
            width: 3,
            background: 'linear-gradient(180deg, #F3EBDD 0%, #D4AF37 50%, #8C6D1F 100%)',
            boxShadow: '0 0 15px 1px #D4AF37, 0 0 30px rgba(212, 175, 55, 0.5)',
            transformOrigin: 'top center',
            scaleY: beamScaleY,
            transform: 'translateX(-50%)',
            zIndex: 2,
          }}
        />

        {/* 5 Experience Items */}
        <div style={{ position: 'relative', zIndex: 4 }}>
          {experience.map((item: ExperienceItem, idx: number) => (
            <TimelineItem key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

