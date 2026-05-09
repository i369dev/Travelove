import { motion } from 'motion/react';
import React from 'react';
import { Logo } from './Logo';

interface LandingViewProps {
  onStart: () => void;
}

export function LandingView({ onStart }: LandingViewProps) {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center flex flex-col items-center select-none"
      >
        <h1 className="text-white text-5xl md:text-7xl font-sans font-medium tracking-tight whitespace-nowrap mb-2">
          GO PLACES LIKE
        </h1>
        <h1 className="text-brand-yellow text-6xl md:text-8xl font-display font-black italic tracking-tighter mb-8" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)'}}>
          ISHOWSPEED
        </h1>
        
        <div className="mb-12">
          <Logo />
        </div>

        <button 
          onClick={onStart}
          className="pointer-events-auto bg-brand-yellow text-brand-navy font-bold font-sans tracking-wide text-sm px-16 py-4 transition-colors duration-300 hover:bg-white active:bg-gray-200 uppercase"
        >
          START NOW
        </button>
      </motion.div>
    </div>
  );
}

