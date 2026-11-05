import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { TrendingUp, Users, Target, Activity } from 'lucide-react';
import { LiquidGlassCard } from './LiquidGlassCard';
import { portfolioData, type MetricItem } from '../data/portfolioData';

interface SingleMetricProps {
  item: MetricItem;
  index: number;
}

const iconMap = [TrendingUp, Activity, Target, Users];

const SingleMetricCard: React.FC<SingleMetricProps> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, item.value, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, item.value]);

  const IconComponent = iconMap[index % iconMap.length];

  // SVG progress ring calculation
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isInView
    ? circumference - (Math.min(item.value, 100) / 100) * circumference
    : circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <LiquidGlassCard
        borderRadius={24}
        style={{
          padding: '28px 24px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          {/* Circular SVG Progress Ring with Centered Icon */}
          <div style={{ position: 'relative', width: 88, height: 88, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="88" height="88" style={{ transform: 'rotate(-90deg)' }}>
              {/* Background Track */}
              <circle
                cx="44"
                cy="44"
                r={radius}
                fill="none"
                stroke="rgba(212, 175, 55, 0.12)"
                strokeWidth="5"
              />
              {/* Animated Progress Arc */}
              <circle
                cx="44"
                cy="44"
                r={radius}
                fill="none"
                stroke="url(#metric-gold-gradient)"
                strokeWidth="5.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{
                  transition: 'stroke-dashoffset 2.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: 'drop-shadow(0 0 6px rgba(212, 175, 55, 0.5))',
                }}
              />
              <defs>
                <linearGradient id="metric-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2D6" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8C6D1F" />
                </linearGradient>
              </defs>
            </svg>

            {/* Centered Glowing Icon */}
            <div
              style={{
                position: 'absolute',
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: 'rgba(21, 20, 22, 0.7)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
              }}
            >
              <IconComponent size={20} color="#D4AF37" />
            </div>
          </div>

          {/* Metric Sub-badge */}
          <span
            style={{
              fontSize: 11,
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#8C6D1F',
              fontWeight: 600,
              padding: '4px 10px',
              borderRadius: 999,
              border: '1px solid rgba(140, 109, 31, 0.25)',
              background: 'rgba(140, 109, 31, 0.08)',
            }}
          >
            Verified Impact
          </span>
        </div>

        {/* Count-Up Number Display */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(42px, 3.8vw, 54px)',
              fontWeight: 700,
              lineHeight: 1,
              color: '#F3EBDD',
              display: 'flex',
              alignItems: 'baseline',
              gap: 4,
              marginBottom: 10,
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#D4AF37', textShadow: '0 0 25px rgba(212, 175, 55, 0.4)' }}>
              {displayValue}
            </span>
            <span style={{ color: '#F3EBDD', fontSize: '0.65em' }}>{item.suffix}</span>
          </div>

          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: '#F3EBDD',
              fontFamily: 'var(--font-sans)',
              marginBottom: 8,
              letterSpacing: '0.01em',
            }}
          >
            {item.label}
          </div>

          <p
            style={{
              margin: 0,
              fontSize: 13.5,
              lineHeight: 1.55,
              color: '#A89F8B',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {item.description}
          </p>
        </div>
      </LiquidGlassCard>
    </motion.div>
  );
};

export const MetricsSection: React.FC = () => {
  const { metrics } = portfolioData;

  return (
    <section
      id="metrics"
      style={{
        padding: '30px 24px 90px',
        maxWidth: 1280,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
          width: '100%',
        }}
      >
        {metrics.map((item, idx) => (
          <SingleMetricCard key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
};

