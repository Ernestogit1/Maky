import React from 'react';

export const LiquidSvgFilter: React.FC = () => {
  return (
    <svg
      style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <defs>
        <filter id="liquid-glass-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <linearGradient id="gold-metallic-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D77F" />
          <stop offset="45%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#AA821C" />
          <stop offset="100%" stopColor="#8C6D1F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

