import React from 'react';
import SectionHeader from './ui/SectionHeader';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  // Group skills by category
  const categories = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Technical Arsenal" subtitle="Operational capabilities and frameworks." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {Object.entries(categories).map(([category, items], idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-emerald-500 font-mono text-xs tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500" />
                // {category.toUpperCase()}
              </h3>
              
              <div className="border-l border-slate-800 pl-4 space-y-1">
                {items.map((skill) => (
                  <div key={skill} className="group flex items-center justify-between py-2 border-b border-slate-800/50 hover:bg-slate-900/30 hover:pl-2 transition-all cursor-default">
                    <span className="text-slate-400 text-sm font-mono group-hover:text-emerald-100">{skill}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-[10px] text-emerald-500 font-mono">::INIT</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorator Line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent w-full" />
      </div>
    </section>
  );
};

export default TechStack;