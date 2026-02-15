import React from 'react';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CyberCard: React.FC<CyberCardProps> = ({ children, className = "", onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative group bg-slate-900/20 border border-slate-800/50 hover:border-emerald-500/30 transition-all duration-300 ${className}`}
    >
        {/* Corner Brackets */}
        <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-emerald-500/30 group-hover:border-emerald-500 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
        <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-emerald-500/30 group-hover:border-emerald-500 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
        <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-emerald-500/30 group-hover:border-emerald-500 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
        <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-emerald-500/30 group-hover:border-emerald-500 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
        
        {/* Scanline overlay (optional subtle texture) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 opacity-0 group-hover:opacity-20 pointer-events-none bg-[length:100%_2px,3px_100%] pointer-events-none" />

        <div className="relative z-10 h-full">
            {children}
        </div>
    </div>
  )
}

export default CyberCard;