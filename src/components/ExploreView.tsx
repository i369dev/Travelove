import React from 'react';
import { GlobeComponent } from './GlobeComponent';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import { TopNav } from './TopNav';

interface ExploreViewProps {
  onBack: () => void;
  showRoutes: boolean;
  setShowRoutes: (val: boolean) => void;
  autoRotate: boolean;
  setAutoRotate: (val: boolean) => void;
}

export function ExploreView({ onBack, showRoutes, setShowRoutes, autoRotate, setAutoRotate }: ExploreViewProps) {
  return (
    <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
      <div className="pointer-events-auto">
        <TopNav onBack={onBack} />
      </div>
      <LeftPanel />
      <div className="pointer-events-auto">
        <RightPanel 
          showRoutes={showRoutes} 
          setShowRoutes={setShowRoutes}
          autoRotate={autoRotate}
          setAutoRotate={setAutoRotate}
        />
      </div>
    </div>
  );
}

