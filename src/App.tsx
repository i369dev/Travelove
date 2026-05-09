import React, { useState } from 'react';
import { ExploreView } from './components/ExploreView';
import { GlobeComponent } from './components/GlobeComponent';
import { LandingView } from './components/LandingView';

export default function App() {
  const [view, setView] = useState<'landing' | 'explore'>('landing');
  
  // Globe controls state
  const [autoRotate, setAutoRotate] = useState(true);
  const [showRoutes, setShowRoutes] = useState(true);

  return (
    <div className="relative w-full h-screen bg-brand-navy overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none"></div>

      {/* Vignette Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at center, transparent 30%, #080d19 120%)'
      }}></div>

      {/* Main Globe - persists across views */}
      <div 
        className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-0"
        style={{
          transform: view === 'landing' ? 'translateY(55%) scale(1.4)' : 'translateY(0) scale(1)',
        }}
      >
        <GlobeComponent autoRotate={autoRotate} showRoutes={showRoutes} />
      </div>

      {/* Overlay Views */}
      {view === 'landing' ? (
        <LandingView onStart={() => setView('explore')} />
      ) : (
        <ExploreView 
          onBack={() => setView('landing')}
          showRoutes={showRoutes}
          setShowRoutes={setShowRoutes}
          autoRotate={autoRotate}
          setAutoRotate={setAutoRotate}
        />
      )}
    </div>
  );
}



