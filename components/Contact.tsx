import React from 'react';
import SpotlightCard from './ui/SpotlightCard';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Ready to automate operations?</h2>
        
        <SpotlightCard className="p-8 md:p-12 bg-slate-900/30">
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            I specialize in building autonomous agents that save time and reduce costs. 
            Available for remote contracts and full-time roles.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:phillipshubdigital@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold rounded hover:bg-slate-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/samuel-phillips"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-white font-bold rounded hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </SpotlightCard>

        <footer className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Samuel Phillips. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="https://github.com/samuel-phillips" className="hover:text-emerald-500 transition-colors">GitHub</a>
             <a href="https://linkedin.com/in/samuel-phillips" className="hover:text-emerald-500 transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;