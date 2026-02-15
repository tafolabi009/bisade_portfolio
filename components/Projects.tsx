import React from 'react';
import SectionHeader from './ui/SectionHeader';
import CyberCard from './ui/CyberCard';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, TerminalSquare, Activity } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative bg-slate-900/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Deployed Systems" subtitle="Autonomous agents and automation pipelines." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
            >
              <CyberCard className="h-full flex flex-col p-0 bg-obsidian">
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/20 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-500 tracking-wider">SYS_ACTIVE</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600">ID: {(idx + 1).toString().padStart(3, '0')}</span>
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-emerald-500 transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed border-l border-slate-800 pl-4">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                     {/* Metric if available */}
                     {project.metric && (
                       <div className="flex items-center gap-3">
                          <Activity className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-mono text-emerald-400">
                             PERFORMANCE: {project.metric}
                          </span>
                       </div>
                     )}

                    {/* Tags as Tech Readout */}
                    <div className="border-t border-slate-800 pt-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <div key={tag} className="flex items-center bg-slate-900 border border-slate-800 px-2 py-1">
                            <span className="w-1 h-1 bg-slate-500 mr-2" />
                            <span className="text-[10px] font-mono text-slate-400 uppercase">{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;