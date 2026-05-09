import { motion } from 'motion/react';
import React from 'react';

interface RightPanelProps {
  showRoutes: boolean;
  setShowRoutes: (val: boolean) => void;
  autoRotate: boolean;
  setAutoRotate: (val: boolean) => void;
}

export function RightPanel({ showRoutes, setShowRoutes, autoRotate, setAutoRotate }: RightPanelProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute right-8 bottom-12 z-20 flex flex-col items-end"
    >
      <div className="text-right text-xs font-sans mb-12">
        <p className="font-bold text-white mb-1">Questions? Contact us at</p>
        <p className="text-brand-yellow font-bold">ishowspeed@expediagroup.com</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span className="text-xs font-bold tracking-widest text-white">SHOW ROUTES</span>
          <div className="flex items-center space-x-2 text-[10px] font-bold">
            <span className={!showRoutes ? 'text-white' : 'text-gray-500'}>OFF</span>
            <button 
              onClick={() => setShowRoutes(!showRoutes)}
              className={`w-10 h-5 flex items-center bg-transparent border-2 border-brand-yellow rounded-full p-0.5 cursor-pointer transition-colors ${showRoutes ? 'bg-brand-yellow' : ''}`}
            >
              <div className={`w-3 h-3 bg-brand-yellow rounded-full shadow-md transform transition-transform ${showRoutes ? 'translate-x-5 bg-brand-navy' : 'translate-x-0'}`} />
            </button>
            <span className={showRoutes ? 'text-brand-yellow' : 'text-gray-500'}>ON</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-xs font-bold tracking-widest text-white">AUTO ROTATE</span>
          <div className="flex items-center space-x-2 text-[10px] font-bold">
            <span className={!autoRotate ? 'text-white' : 'text-gray-500'}>OFF</span>
            <button 
              onClick={() => setAutoRotate(!autoRotate)}
              className={`w-10 h-5 flex items-center bg-transparent border-2 border-brand-yellow rounded-full p-0.5 cursor-pointer transition-colors ${autoRotate ? 'bg-brand-yellow' : ''}`}
            >
              <div className={`w-3 h-3 bg-brand-yellow rounded-full shadow-md transform transition-transform ${autoRotate ? 'translate-x-5 bg-brand-navy' : 'translate-x-0'}`} />
            </button>
            <span className={autoRotate ? 'text-brand-yellow' : 'text-gray-500'}>ON</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
