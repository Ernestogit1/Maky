import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  tiltEnabled?: boolean;
  intensity?: number;
  borderRadius?: string | number;
  highlightBorder?: boolean;
  glowOnHover?: boolean;
  id?: string;
}

export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  tiltEnabled = true,
  intensity = 1,
  borderRadius = 28,
  highlightBorder = true,
  glowOnHover = true,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values normalized from -1 to 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Absolute pixel positions for specular glare reflection
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);

  // Smooth springs for tilt physics: stiffness: 260, damping: 20
  const springConfig = { stiffness: 260, damping: 20, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Rotate up to ±8deg based on mouse position
  const maxTilt = 8 * intensity;
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Dynamic specular glare opacity
  const glareOpacity = useSpring(isHovered ? 1 : 0, { stiffness: 300, damping: 25 });

  // Unconditionally declared transforms for specular layers
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle 320px at ${x}px ${y}px, rgba(255, 255, 255, 0.18) 0%, rgba(212, 175, 55, 0.12) 28%, rgba(212, 175, 55, 0) 70%)`
  );

  const borderBackground = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle 180px at ${x}px ${y}px, rgba(255, 255, 255, 0.6) 0%, rgba(212, 175, 55, 0.45) 40%, transparent 80%)`
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !tiltEnabled) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set pixel coords for glare
      glareX.set(x);
      glareY.set(y);

      // Normalized coordinates from -0.5 to 0.5
      const normX = (x / rect.width) - 0.5;
      const normY = (y / rect.height) - 0.5;

      mouseX.set(normX);
      mouseY.set(normY);
    },
    [glareX, glareY, mouseX, mouseY, tiltEnabled]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Convert borderRadius to CSS string
  const radiusString = typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;

  return (
    <div
      style={{
        perspective: 1000,
        WebkitPerspective: 1000,
      }}
      className={`liquid-glass-wrapper ${className}`}
      id={id}
    >
      <motion.div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: tiltEnabled ? rotateX : 0,
          rotateY: tiltEnabled ? rotateY : 0,
          transformStyle: 'preserve-3d',
          background: 'rgba(21, 20, 22, 0.46)',
          backdropFilter: 'blur(32px) saturate(190%) brightness(1.08)',
          WebkitBackdropFilter: 'blur(32px) saturate(190%) brightness(1.08)',
          borderRadius: radiusString,
          border: '1px solid rgba(212, 175, 55, 0.22)',
          boxShadow: isHovered && glowOnHover
            ? '0 28px 75px -12px rgba(0, 0, 0, 0.95), 0 0 45px -8px rgba(212, 175, 55, 0.28), inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.45), inset 0 -1.5px 1px 0 rgba(212, 175, 55, 0.35), inset 0 0 32px 0 rgba(212, 175, 55, 0.08)'
            : '0 24px 60px -15px rgba(0, 0, 0, 0.85), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1.5px 1px 0 rgba(212, 175, 55, 0.28), inset 0 0 28px 0 rgba(212, 175, 55, 0.05)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease',
          ...style,
        }}
        className="liquid-glass-card"
      >
        {/* Optical Specular Glare Layer (Follows cursor) */}
        {highlightBorder && (
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              opacity: glareOpacity,
              borderRadius: radiusString,
              zIndex: 1,
              background: glareBackground,
            }}
          />
        )}

        {/* Dynamic Edge Rim Refraction Glow under cursor */}
        {highlightBorder && (
          <motion.div
            style={{
              position: 'absolute',
              inset: '-1px',
              borderRadius: radiusString,
              pointerEvents: 'none',
              opacity: glareOpacity,
              zIndex: 2,
              background: borderBackground,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              padding: '1px',
            }}
          />
        )}

        {/* Content Container */}
        <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};
