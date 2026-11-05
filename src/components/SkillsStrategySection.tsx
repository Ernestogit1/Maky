import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  BrainCircuit,
  Building2,
  Film,
  Magnet,
  CalendarDays,
  Wrench,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { LiquidGlassCard } from './LiquidGlassCard';
import { portfolioData, type SkillCategory, type StrategyProject } from '../data/portfolioData';

const skillIcons: Record<string, React.ReactNode> = {
  'Digital marketing': <Target size={24} color="#D4AF37" />,
  'AI and tech': <BrainCircuit size={24} color="#D4AF37" />,
  'Operations and sales': <Building2 size={24} color="#D4AF37" />,
};

const strategyIcons: Record<string, React.ReactNode> = {
  'Short-form video and reels': <Film size={26} color="#D4AF37" />,
  'Lead generation funnels': <Magnet size={26} color="#D4AF37" />,
  'Content calendar': <CalendarDays size={26} color="#D4AF37" />,
};

export const SkillsStrategySection: React.FC = () => {
  const { skillsData, tools, strategy } = portfolioData;

  return (
    <section
      id="skills"
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
      {/* Part 1 Header: Skills and Tools */}
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
          Technical &amp; Functional Arsenal
        </div>
        <h2
          style={{
            margin: '0 0 16px 0',
            fontSize: 'clamp(32px, 4.4vw, 52px)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            color: '#F3EBDD',
            letterSpacing: '-0.02em',
          }}
        >
          Skills, Tools &amp; Strategy
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 17,
            lineHeight: 1.6,
            color: '#A89F8B',
            maxWidth: '38em',
            fontFamily: 'var(--font-sans)',
          }}
        >
          A synergy of modern digital growth engines, automated AI workflows, and grounded operational discipline.
        </p>
      </div>

      {/* 3 Interactive 3D-Tilting Glass Chambers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: 24,
          marginBottom: 36,
        }}
      >
        {skillsData.map((chamber: SkillCategory, idx: number) => (
          <LiquidGlassCard
            key={chamber.category}
            borderRadius={26}
            style={{
              padding: '36px 30px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                }}
              >
                {skillIcons[chamber.category] || <Target size={24} color="#D4AF37" />}
              </div>

              <h3
                style={{
                  margin: '0 0 20px 0',
                  fontSize: 24,
                  fontFamily: 'var(--font-serif)',
                  color: '#F3EBDD',
                  fontWeight: 600,
                }}
              >
                {chamber.category}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {chamber.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '10px 14px',
                      borderRadius: 12,
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(212, 175, 55, 0.15)',
                    }}
                  >
                    <CheckCircle size={15} color="#D4AF37" />
                    <span
                      style={{
                        fontSize: 15,
                        color: '#E8DFD0',
                        fontWeight: 500,
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: 28,
                paddingTop: 16,
                borderTop: '1px solid rgba(212, 175, 55, 0.15)',
                fontSize: 12,
                color: '#8C6D1F',
                fontFamily: 'monospace',
              }}
            >
              MODULE · 0{idx + 1}
            </div>
          </LiquidGlassCard>
        ))}
      </div>

      {/* Tools Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: 80 }}
      >
        <LiquidGlassCard
          borderRadius={20}
          style={{
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Wrench size={20} color="#D4AF37" />
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: '#F3EBDD',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Core Creative &amp; Intelligence Stack:
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {tools.map((tool) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.06, y: -2 }}
                style={{
                  padding: '8px 20px',
                  borderRadius: 999,
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(140, 109, 31, 0.1) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  color: '#F3EBDD',
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'var(--font-sans)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </LiquidGlassCard>
      </motion.div>

      {/* Part 2: Projects & Content Strategy */}
      <div id="strategy" style={{ marginBottom: 36, textAlign: 'left' }}>
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
          <Film size={14} color="#D4AF37" />
          Execution Frameworks
        </div>
        <h3
          style={{
            margin: '0 0 12px 0',
            fontSize: 'clamp(28px, 3.6vw, 42px)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            color: '#F3EBDD',
            letterSpacing: '-0.02em',
          }}
        >
          Projects &amp; Content Strategy
        </h3>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: 24,
        }}
      >
        {strategy.map((item: StrategyProject, idx: number) => (
          <LiquidGlassCard
            key={item.id}
            borderRadius={26}
            style={{
              padding: '34px 28px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                {strategyIcons[item.title] || <Film size={24} color="#D4AF37" />}
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontFamily: 'monospace',
                  color: '#8C6D1F',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 6,
                }}
              >
                {item.highlight}
              </div>

              <h4
                style={{
                  margin: '0 0 14px 0',
                  fontSize: 22,
                  fontFamily: 'var(--font-serif)',
                  color: '#F3EBDD',
                  fontWeight: 600,
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: '#A89F8B',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {item.description}
              </p>
            </div>

            <div
              style={{
                marginTop: 24,
                paddingTop: 16,
                borderTop: '1px solid rgba(212, 175, 55, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#D4AF37',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <span>Framework Strategy 0{idx + 1}</span>
            </div>
          </LiquidGlassCard>
        ))}
      </div>
    </section>
  );
};
