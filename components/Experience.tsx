import React from 'react';
import SectionHeader from './ui/SectionHeader';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/5">
      <div className="max-w-4xl mx-auto">
         <SectionHeader title="Execution Log" subtitle="Professional history and key milestones." />

         <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-obsidian" />
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="hidden sm:block text-slate-600">|</span>
                  <span className="text-emerald-400 font-mono text-sm">{exp.company}</span>
                </div>
                
                <div className="text-slate-500 font-mono text-xs mb-6 uppercase tracking-wider">
                  {exp.period}
                </div>

                <ul className="space-y-3">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                      <span className="text-emerald-500/50 mt-1.5 font-mono text-xs">{'>'}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Experience;