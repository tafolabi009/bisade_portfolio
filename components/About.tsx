import React from 'react';
import SectionHeader from './ui/SectionHeader';
import TerminalWindow from './ui/TerminalWindow';
import { Cpu, Network, Zap, Activity, Database, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="System Architecture" subtitle="Merging business logic with artificial intelligence." />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Terminal Area */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TerminalWindow>
                <p className="mb-4">
                  Results-driven <span className="text-emerald-400">AI Automation Specialist</span> with extensive experience architecting intelligent workflows and autonomous agents using n8n, OpenAI, and Python.
                </p>
                <p className="mb-4">
                  Proven track record of transforming complex manual operations into streamlined automated systems, significantly reducing operational costs and improving customer engagement.
                </p>
                <p className="text-slate-500 italic">
                  // Expert in integrating LLMs (GPT-4, Claude) with CRMs and communication platforms to deliver scalable business solutions.
                </p>
              </TerminalWindow>
            </motion.div>
          </div>

          {/* Right Side Stats / Modules */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Stat Block 1 */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-slate-900/30 border-l-2 border-emerald-500 p-4 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-2">
                 <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
                   <Cpu className="w-4 h-4" />
                   <span>AI_ENGINEERING</span>
                 </div>
                 <span className="text-xs text-emerald-500/50 border border-emerald-500/20 px-1">V2.4</span>
              </div>
              <p className="text-slate-400 text-sm pl-6 mb-3">RAG Systems, Vector Databases (Pinecone, ChromaDB), Prompt Engineering.</p>
              
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[92%] relative">
                   <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Stat Block 2 */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-slate-900/30 border-l-2 border-emerald-500 p-4 relative"
            >
              <div className="flex justify-between items-start mb-2">
                 <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
                   <Network className="w-4 h-4" />
                   <span>WORKFLOW_OPS</span>
                 </div>
                 <Activity className="w-4 h-4 text-emerald-500/50" />
              </div>
              <p className="text-slate-400 text-sm pl-6">n8n (Self-hosted), Zapier, Make.com, Async Task Management.</p>
            </motion.div>

            {/* Grid of micro-skills */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { icon: Database, label: 'Vector DBs' },
                { icon: Lock, label: 'API Security' },
                { icon: Zap, label: 'Webhooks' },
                { icon: Activity, label: 'Monitoring' }
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="bg-slate-900/50 border border-slate-800 p-3 flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4 text-slate-500" />
                  <span className="text-xs text-slate-300 font-mono">{item.label}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;