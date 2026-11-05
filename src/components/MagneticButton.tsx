import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'gold' | 'glass';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  style = {},
  variant = 'gold',
}) => {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth magnetic spring
  const springX = useSpring(x, { stiffness: 220, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 220, damping: 15, mass: 0.2 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Pull factor
    x.set((clientX - centerX) * 0.32);
    y.set((clientY - centerY) * 0.32);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isGold = variant === 'gold';

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '16px 32px',
    borderRadius: '9999px',
    fontSize: '16px',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    fontFamily: 'var(--font-sans)',
    letterSpacing: '0.01em',
    ...(isGold
      ? {
          background: 'linear-gradient(135deg, #F3EBDD 0%, #E2C26C 25%, #D4AF37 55%, #AA8320 100%)',
          color: '#0B0B0C',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 8px 30px rgba(212, 175, 55, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.8), inset 0 -2px 4px rgba(140, 109, 31, 0.5)',
        }
      : {
          background: 'rgba(21, 20, 22, 0.55)',
          color: '#F3EBDD',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.3), inset 0 -1px 2px rgba(212, 175, 55, 0.2)',
        }),
    ...style,
  };

  const content = (
    <>
      {/* Liquid shimmer sweep */}
      <motion.span
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '60%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
          transform: 'skewX(-20deg)',
        }}
        whileHover={{
          left: '160%',
          transition: { duration: 0.75, ease: 'easeInOut' },
        }}
      />
      <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '8px' }}>
        {children}
      </span>
    </>
  );

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as any}
      href={href}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
        ...baseStyle,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`magnetic-btn ${className}`}
    >
      {content}
    </Component>
  );
};

