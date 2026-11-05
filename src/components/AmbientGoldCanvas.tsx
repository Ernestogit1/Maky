import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
  color: string;
}

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
  pulseSpeed: number;
  isRing: boolean;
  ringWidth?: number;
  rotation?: number;
  rotSpeed?: number;
}

export const AmbientGoldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const state = {
      animFrameId: 0,
      width: (canvas.width = window.innerWidth),
      height: (canvas.height = window.innerHeight),
      mouseX: window.innerWidth / 2,
      mouseY: window.innerHeight / 2,
      targetMouseX: window.innerWidth / 2,
      targetMouseY: window.innerHeight / 2,
      lastScrollY: window.scrollY,
      scrollVelocity: 0,
    };

    const width = state.width;
    const height = state.height;

    const handleMouseMove = (e: MouseEvent) => {
      state.targetMouseX = e.clientX;
      state.targetMouseY = e.clientY;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      state.scrollVelocity = (currentScrollY - state.lastScrollY) * 0.15;
      state.lastScrollY = currentScrollY;
    };

    const handleResize = () => {
      state.width = canvas.width = window.innerWidth;
      state.height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Color palette: Obsidian Black, Solid Metallic Gold (#D4AF37), Aged Brass (#8C6D1F), Warm Ivory highlights (#F3EBDD)
    const orbs: Orb[] = [
      // 1. Large molten gold glow orb top-left
      {
        x: width * 0.2,
        y: height * 0.25,
        vx: 0.25,
        vy: 0.15,
        radius: 280,
        baseRadius: 280,
        color: 'rgba(212, 175, 55, 0.22)',
        glowColor: 'rgba(212, 175, 55, 0)',
        pulsePhase: 0,
        pulseSpeed: 0.008,
        isRing: false,
      },
      // 2. Brass core orb center-right
      {
        x: width * 0.8,
        y: height * 0.45,
        vx: -0.2,
        vy: 0.2,
        radius: 340,
        baseRadius: 340,
        color: 'rgba(140, 109, 31, 0.28)',
        glowColor: 'rgba(140, 109, 31, 0)',
        pulsePhase: 2,
        pulseSpeed: 0.006,
        isRing: false,
      },
      // 3. Molten deep gold orb mid-bottom
      {
        x: width * 0.35,
        y: height * 0.8,
        vx: 0.18,
        vy: -0.22,
        radius: 310,
        baseRadius: 310,
        color: 'rgba(212, 175, 55, 0.2)',
        glowColor: 'rgba(212, 175, 55, 0)',
        pulsePhase: 4,
        pulseSpeed: 0.007,
        isRing: false,
      },
      // 4. Warm Ivory soft ambient halo
      {
        x: width * 0.5,
        y: height * 0.15,
        vx: -0.15,
        vy: -0.1,
        radius: 220,
        baseRadius: 220,
        color: 'rgba(243, 235, 221, 0.09)',
        glowColor: 'rgba(243, 235, 221, 0)',
        pulsePhase: 1,
        pulseSpeed: 0.009,
        isRing: false,
      },
      // 5. Geometric Gold Ring 1
      {
        x: width * 0.75,
        y: height * 0.2,
        vx: 0.12,
        vy: 0.14,
        radius: 170,
        baseRadius: 170,
        color: 'rgba(212, 175, 55, 0.28)',
        glowColor: 'rgba(140, 109, 31, 0.08)',
        pulsePhase: 3,
        pulseSpeed: 0.012,
        isRing: true,
        ringWidth: 32,
        rotation: 0.4,
        rotSpeed: 0.003,
      },
      // 6. Geometric Brass Ring 2
      {
        x: width * 0.15,
        y: height * 0.65,
        vx: -0.14,
        vy: -0.12,
        radius: 190,
        baseRadius: 190,
        color: 'rgba(140, 109, 31, 0.32)',
        glowColor: 'rgba(212, 175, 55, 0.06)',
        pulsePhase: 5,
        pulseSpeed: 0.01,
        isRing: true,
        ringWidth: 26,
        rotation: 1.2,
        rotSpeed: -0.0025,
      },
      // 7. Molten Gold Sub-Sphere (mobile & reactive)
      {
        x: width * 0.6,
        y: height * 0.75,
        vx: 0.22,
        vy: 0.16,
        radius: 240,
        baseRadius: 240,
        color: 'rgba(212, 175, 55, 0.18)',
        glowColor: 'rgba(212, 175, 55, 0)',
        pulsePhase: 2.5,
        pulseSpeed: 0.009,
        isRing: false,
      },
      // 8. Geometric Concentric Gold Halo
      {
        x: width * 0.45,
        y: height * 0.5,
        vx: -0.1,
        vy: 0.15,
        radius: 260,
        baseRadius: 260,
        color: 'rgba(212, 175, 55, 0.15)',
        glowColor: 'rgba(140, 109, 31, 0.05)',
        pulsePhase: 0.8,
        pulseSpeed: 0.007,
        isRing: true,
        ringWidth: 16,
        rotation: 2.1,
        rotSpeed: 0.0018,
      },
    ];

    // Gold dust particles
    const particleCount = 45;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.45 - 0.1,
        radius: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.6 + 0.2,
        alphaSpeed: Math.random() * 0.01 + 0.005,
        color: Math.random() > 0.4 ? '#D4AF37' : '#F3EBDD',
      });
    }

    const render = () => {
      // Smooth mouse interpolation
      state.mouseX += (state.targetMouseX - state.mouseX) * 0.04;
      state.mouseY += (state.targetMouseY - state.mouseY) * 0.04;

      // Decay scroll velocity
      state.scrollVelocity *= 0.92;

      const { width, height, mouseX, mouseY, scrollVelocity } = state;

      // Base: Obsidian Black #0B0B0C
      ctx.fillStyle = '#0B0B0C';
      ctx.fillRect(0, 0, width, height);

      // Subtle ambient vignette gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        width * 0.1,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      bgGrad.addColorStop(0, '#121114');
      bgGrad.addColorStop(0.6, '#0E0D0F');
      bgGrad.addColorStop(1, '#070708');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const mouseDeltaX = (mouseX - width / 2) / (width / 2);
      const mouseDeltaY = (mouseY - height / 2) / (height / 2);

      // Render Orbs and Rings with blur & blending
      orbs.forEach((orb, i) => {
        orb.pulsePhase += orb.pulseSpeed;
        const pulse = Math.sin(orb.pulsePhase) * 25;
        const currentRadius = Math.max(20, orb.baseRadius + pulse);

        // Move position
        orb.x += orb.vx + mouseDeltaX * (0.35 + i * 0.05);
        orb.y += orb.vy - scrollVelocity * 0.4 + mouseDeltaY * (0.35 + i * 0.05);

        // Wrap around bounds with soft padding
        const pad = currentRadius;
        if (orb.x < -pad) orb.x = width + pad;
        if (orb.x > width + pad) orb.x = -pad;
        if (orb.y < -pad) orb.y = height + pad;
        if (orb.y > height + pad) orb.y = -pad;

        ctx.save();
        if (orb.isRing) {
          // Render glowing refractive geometric ring
          if (orb.rotation !== undefined && orb.rotSpeed !== undefined) {
            orb.rotation += orb.rotSpeed;
          }
          ctx.translate(orb.x, orb.y);
          if (orb.rotation) ctx.rotate(orb.rotation);

          // Draw ring with soft radial glow
          const ringGrad = ctx.createRadialGradient(0, 0, currentRadius - (orb.ringWidth || 20), 0, 0, currentRadius + (orb.ringWidth || 20));
          ringGrad.addColorStop(0, 'rgba(0,0,0,0)');
          ringGrad.addColorStop(0.4, orb.glowColor);
          ringGrad.addColorStop(0.5, orb.color);
          ringGrad.addColorStop(0.6, orb.glowColor);
          ringGrad.addColorStop(1, 'rgba(0,0,0,0)');

          ctx.fillStyle = ringGrad;
          ctx.beginPath();
          ctx.arc(0, 0, currentRadius + (orb.ringWidth || 20), 0, Math.PI * 2);
          ctx.fill();

          // Delicate specular rim
          ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Render soft molten sphere
          const radial = ctx.createRadialGradient(
            orb.x,
            orb.y,
            currentRadius * 0.05,
            orb.x,
            orb.y,
            currentRadius
          );
          radial.addColorStop(0, orb.color);
          radial.addColorStop(0.4, orb.color);
          radial.addColorStop(0.8, 'rgba(140, 109, 31, 0.06)');
          radial.addColorStop(1, 'rgba(11, 11, 12, 0)');

          ctx.fillStyle = radial;
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      // Render gold dust particles
      particles.forEach((p) => {
        p.x += p.vx + mouseDeltaX * 0.15;
        p.y += p.vy - scrollVelocity * 0.2;
        p.alpha += p.alphaSpeed;

        if (p.alpha > 0.8 || p.alpha < 0.15) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      state.animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(state.animFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ambient-gold-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
};
