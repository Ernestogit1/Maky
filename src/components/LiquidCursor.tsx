import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const LiquidCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for liquid trailing ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Very snappy spring for the gold core dot
  const dotSpringConfig = { damping: 35, stiffness: 800, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    // Only enable custom cursor if fine pointer (mouse) is used
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering clickable or interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest('a, button, [role="button"], input, textarea, select, .interactive-hover, .liquid-glass-card');
        setIsHoveringClickable(!!clickable);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  const ringSize = isMouseDown ? 30 : isHoveringClickable ? 56 : 36;
  const coreSize = isMouseDown ? 8 : isHoveringClickable ? 4 : 6;

  return (
    <>
      {/* Translucent Liquid Glass Ring */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: smoothX,
          y: smoothY,
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          background: isHoveringClickable
            ? 'rgba(212, 175, 55, 0.15)'
            : 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(8px) saturate(180%)',
          WebkitBackdropFilter: 'blur(8px) saturate(180%)',
          border: isHoveringClickable
            ? '1.5px solid rgba(212, 175, 55, 0.8)'
            : '1px solid rgba(243, 235, 221, 0.35)',
          boxShadow: isHoveringClickable
            ? '0 0 20px rgba(212, 175, 55, 0.4), inset 0 0 10px rgba(212, 175, 55, 0.2)'
            : '0 4px 15px rgba(0, 0, 0, 0.5), inset 0 0 8px rgba(255, 255, 255, 0.15)',
          transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      />

      {/* Solid Metallic Gold Center Dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          width: coreSize,
          height: coreSize,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 10000,
          backgroundColor: '#D4AF37',
          boxShadow: '0 0 8px 1px #D4AF37, 0 0 16px rgba(212, 175, 55, 0.6)',
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      />
    </>
  );
};

