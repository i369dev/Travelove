import { Check, Flame, Map, Settings, Trophy, User } from 'lucide-react';
import React from 'react';
import { Logo } from './Logo';

interface TopNavProps {
  onBack: () => void;
}

export function TopNav({ onBack }: TopNavProps) {
  const navItems = [
    { name: 'EXPLORE', icon: Map, active: true },
    { name: 'ACHIEVEMENTS', icon: Trophy },
    { name: 'TRIVIA', icon: Flame },
    { name: 'VOTE', icon: Check },
    { name: 'SETTINGS', icon: Settings },
    { name: 'MEET SPEED', icon: User },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between border-b border-white/10 bg-brand-navy/80 backdrop-blur-md z-20">
      <div className="flex h-full">
        <button 
          onClick={onBack}
          className="h-full bg-brand-yellow text-brand-navy font-bold text-xs uppercase tracking-widest px-8 flex items-center space-x-2 hover:bg-white transition-colors cursor-pointer"
        >
          <span className="font-bold">&larr;</span> 
          <span>BACK</span>
        </button>
        
        <nav className="hidden md:flex h-full">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className={`h-full flex items-center px-6 border-r border-white/5 cursor-pointer transition-colors hover:bg-white/5 ${item.active ? 'text-brand-yellow font-bold' : 'text-white font-semibold'} text-xs tracking-wider space-x-2`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="pr-6">
        <Logo />
      </div>
    </div>
  );
}
