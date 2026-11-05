import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Layers,
  Users,
  Sparkles,
  KeyRound,
  FileSpreadsheet,
  Cpu,
  GraduationCap,
  Building,
} from 'lucide-react';
import { LiquidGlassCard } from './LiquidGlassCard';
import { portfolioData, type PillarItem, type StrengthItem } from '../data/portfolioData';

const pillarIcons: Record<string, React.ReactNode> = {
  Marketing: <TrendingUp size={22} color="#D4AF37" />,
  Operations: <Layers size={22} color="#D4AF37" />,
  'Clients and teams': <Users size={22} color="#D4AF37" />,
};

const strengthIcons: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={20} color="#D4AF37" />,
  KeyRound: <KeyRound size={20} color="#D4AF37" />,
  FileSpreadsheet: <FileSpreadsheet size={20} color="#D4AF37" />,
  Cpu: <Cpu size={20} color="#D4AF37" />,
};

export const AboutBentoSection: React.FC = () => {
  const { about, strengths } = portfolioData;

  return (
    <section
      id="about"
      style={{
        padding: '80px 24px 110px',
        maxWidth: 1280,
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
          <span style={{ width: 16, height: 1, background: '#D4AF37', display: 'inline-block' }} />
          Strategic Profile &amp; Core Strengths
        </div>
        <h2
          style={{
            margin: 0,
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            color: '#F3EBDD',
            letterSpacing: '-0.02em',
          }}
        >
          About &amp; Capabilities
        </h2>
      </div>

      {/* Spatial Bento Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 24,
          width: '100%',
        }}
      >
        {/* Panel 1: Main Profile Glass Panel (Span 7) */}
        <div style={{ gridColumn: 'span 12' }} className="bento-profile-span">
          <LiquidGlassCard
            borderRadius={28}
            style={{
              padding: '40px 36px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Glowing MT Glass Orb Emblem */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
                <div
                  style={{
                    position: 'relative',
                    width: 76,
                    height: 76,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), rgba(212,175,55,0.25) 45%, rgba(14,13,16,0.9) 100%)',
                    border: '1.5px solid rgba(212, 175, 55, 0.45)',
                    boxShadow: '0 0 35px rgba(212, 175, 55, 0.35), inset 0 2px 4px rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: 26,
                    color: '#F3EBDD',
                    letterSpacing: '0.04em',
                  }}
                >
                  <span style={{ textShadow: '0 0 15px #D4AF37' }}>{about.monogram}</span>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontFamily: 'var(--font-sans)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#8C6D1F',
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    Direct Profile
                  </div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 26,
                      fontFamily: 'var(--font-serif)',
                      color: '#F3EBDD',
                      fontWeight: 600,
                    }}
                  >
                    Mcximoz &ldquo;Max&rdquo; Torres
                  </h3>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: '#F3EBDD',
                  margin: '0 0 16px 0',
                  fontWeight: 400,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {about.introP1}
              </p>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: '#A89F8B',
                  margin: 0,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {about.introP2}
              </p>
            </div>

            {/* Bottom Meta Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                marginTop: 32,
                paddingTop: 20,
                borderTop: '1px solid rgba(212, 175, 55, 0.15)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 14px',
                  borderRadius: 999,
                  background: 'rgba(212, 175, 55, 0.08)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  fontSize: 13,
                  color: '#E8DFD0',
                }}
              >
                <GraduationCap size={15} color="#D4AF37" />
                <span>Class of 2026 · Univ. of Makati</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 14px',
                  borderRadius: 999,
                  background: 'rgba(212, 175, 55, 0.08)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  fontSize: 13,
                  color: '#E8DFD0',
                }}
              >
                <Building size={15} color="#D4AF37" />
                <span>Real Estate &amp; Public Sector Track</span>
              </div>
            </div>
          </LiquidGlassCard>
        </div>

        {/* 3 Interactive Pillar Tiles */}
        {about.pillars.map((pillar: PillarItem, idx: number) => (
          <div key={pillar.id} style={{ gridColumn: 'span 12' }} className="bento-pillar-span">
            <LiquidGlassCard
              borderRadius={24}
              style={{
                padding: '30px 26px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {pillarIcons[pillar.title] || <Layers size={22} color="#D4AF37" />}
                </div>
                <h4
                  style={{
                    margin: '0 0 10px 0',
                    fontSize: 21,
                    fontFamily: 'var(--font-serif)',
                    color: '#F3EBDD',
                    fontWeight: 600,
                  }}
                >
                  {pillar.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: '#A89F8B',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {pillar.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: 20,
                  fontSize: 11,
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#8C6D1F',
                  fontWeight: 600,
                }}
              >
                Pillar 0{idx + 1}
              </div>
            </LiquidGlassCard>
          </div>
        ))}

        {/* 4 Strength Bento Cards with Floating Glass Pill Tags */}
        {strengths.map((strength: StrengthItem, idx: number) => (
          <div key={strength.id} style={{ gridColumn: 'span 12' }} className="bento-strength-span">
            <LiquidGlassCard
              borderRadius={26}
              style={{
                padding: '32px 28px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {strengthIcons[strength.iconName] || <Sparkles size={20} color="#D4AF37" />}
                  </div>
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
                    CAP-{idx + 1}
                  </span>
                </div>

                <h4
                  style={{
                    margin: '0 0 12px 0',
                    fontSize: 22,
                    fontFamily: 'var(--font-serif)',
                    color: '#F3EBDD',
                    fontWeight: 600,
                  }}
                >
                  {strength.title}
                </h4>

                <p
                  style={{
                    margin: '0 0 24px 0',
                    fontSize: 14.5,
                    lineHeight: 1.65,
                    color: '#A89F8B',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {strength.description}
                </p>
              </div>

              {/* Floating Glass Pill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {strength.tags.map((tag: string) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 12px',
                      borderRadius: 999,
                      background: 'rgba(212, 175, 55, 0.08)',
                      border: '1px solid rgba(212, 175, 55, 0.28)',
                      color: '#D4AF37',
                      fontSize: 12.5,
                      fontWeight: 500,
                      fontFamily: 'var(--font-sans)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </LiquidGlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

