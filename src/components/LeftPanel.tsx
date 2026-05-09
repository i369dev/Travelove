import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export function LeftPanel() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute left-6 top-1/2 -translate-y-1/2 w-[340px] z-20 pointer-events-auto"
    >
      <div className="bg-brand-navy/95 border border-white/10 p-8 relative overflow-hidden">
        {/* Diagonal stripes decoration in bottom left */}
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-stripes opacity-30 transform -rotate-45"></div>

        <div className="absolute top-4 right-4 text-brand-yellow">
          <ArrowUpRight className="w-6 h-6 stroke-[3]" />
        </div>

        <h2 className="text-white text-3xl font-sans font-bold leading-none mb-1">
          GO PLACES
        </h2>
        <h2 className="text-brand-yellow text-[28px] font-display font-black italic tracking-tighter mb-8">
          LIKE ISHOWSPEED
        </h2>

        <p className="text-[13px] font-sans text-white/90 leading-relaxed font-medium">
          <a href="#" className="underline hover:text-brand-yellow decoration-white/50">Book a trip today</a> to win a chance to meet Speed. Follow <a href="#" className="text-brand-yellow underline decoration-brand-yellow/50">@Expedia</a> on <a href="#" className="underline hover:text-brand-yellow decoration-white/50">Instagram</a> and <a href="#" className="underline hover:text-brand-yellow decoration-white/50">TikTok</a> for updates.
        </p>
      </div>

      <div className="mt-8 text-[10px] text-white/60 font-sans tracking-tight">
        <p className="mb-3 font-semibold">&copy; 2026 Expedia Group & iShowSpeed. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-3 gap-y-2 uppercase font-bold">
          <a href="#" className="hover:text-white underline underline-offset-[3px] decoration-white/30">ABOUT</a>
          <a href="#" className="hover:text-white underline underline-offset-[3px] decoration-white/30">TERMS AND CONDITIONS</a>
          <a href="#" className="hover:text-white underline underline-offset-[3px] decoration-white/30">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white underline underline-offset-[3px] decoration-white/30">COOKIE SETTINGS</a>
          <a href="#" className="hover:text-white underline underline-offset-[3px] decoration-white/30">CONTACT US</a>
        </div>
      </div>
    </motion.div>
  );
}

