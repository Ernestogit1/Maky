import React from 'react';
import './App.css';
import { AmbientGoldCanvas } from './components/AmbientGoldCanvas';
import { LiquidCursor } from './components/LiquidCursor';
import { LiquidSvgFilter } from './components/LiquidSvgFilter';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { AboutBentoSection } from './components/AboutBentoSection';
import { JourneySection } from './components/JourneySection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsStrategySection } from './components/SkillsStrategySection';
import { ReelsSection } from './components/ReelsSection';
import { AwardTheaterSection } from './components/AwardTheaterSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="app-viewport">
      {/* Core Liquid Glass Engines */}
      <AmbientGoldCanvas />
      <LiquidCursor />
      <LiquidSvgFilter />

      {/* Main Spatial Scroll-Driven Stage - Seamless Experience (No Navbar, No Sidebar) */}
      <main style={{ position: 'relative', zIndex: 1, width: '100%', overflow: 'hidden' }}>
        <HeroSection />
        <MetricsSection />
        <AboutBentoSection />
        <JourneySection />
        <ExperienceTimeline />
        <SkillsStrategySection />
        <ReelsSection />
        <AwardTheaterSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
