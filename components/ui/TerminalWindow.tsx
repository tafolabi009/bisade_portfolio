import React from 'react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  children: React.ReactNode;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children }) => {
  return (
    <div className="rounded-lg border border-slate-800 bg-[#0a0a0a] overflow-hidden font-mono text-sm relative shadow-2xl shadow-black/50">
       {/* Title Bar */}
       <div className="bg-slate-900/50 border-b border-slate-800 p-3 flex items-center justify-between">
          <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
             <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
             <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
          </div>
          <div className="text-xs text-slate-500 font-mono">user@samuel-phillips:~</div>
          <div className="w-12" /> {/* Spacer for balance */}
       </div>
       {/* Content */}
       <div className="p-6 text-slate-300 leading-relaxed font-sans">
         <div className="font-mono text-emerald-500 mb-4">$ cat professional-summary.md</div>
         {children}
         <div className="mt-4 flex items-center">
            <span className="text-emerald-500 mr-2">$</span>
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-emerald-500"
            />
         </div>
       </div>
    </div>
  )
}

export default TerminalWindow;