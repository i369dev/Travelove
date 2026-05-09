import { ArrowUpRight } from 'lucide-react';
import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-3 text-white font-display font-bold text-xl tracking-tight">
      <div className="flex items-center">
        <div className="w-6 h-6 bg-brand-yellow rounded-sm flex items-center justify-center mr-2">
          <ArrowUpRight className="text-brand-navy w-4 h-4 stroke-[3]" />
        </div>
        <span className="font-normal">Expedia</span>
      </div>
      <span className="text-brand-yellow font-normal">X</span>
      <div className="flex items-center italic">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2 relative overflow-hidden">
           <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-brand-navy" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2"></path>
          </svg>
        </div>
        <span className="tracking-tighter">ISHOWSPEED</span>
      </div>
    </div>
  );
}
