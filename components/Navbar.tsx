import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Systems', href: '#projects' },
    { name: 'Stack', href: '#skills' },
    { name: 'Log', href: '#experience' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
    >
      <div className={`
        flex items-center gap-6 px-6 py-3 rounded-full 
        backdrop-blur-md border border-slate-800/50 transition-all duration-300
        ${scrolled ? 'bg-obsidian/80 shadow-lg shadow-emerald-900/5' : 'bg-transparent'}
      `}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xs md:text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 transition-all group-hover:w-full" />
          </a>
        ))}
        <div className="w-px h-4 bg-slate-700 hidden sm:block"></div>
        <a 
          href="#contact" 
          className="hidden sm:block text-xs font-bold text-obsidian bg-emerald-500 px-3 py-1.5 rounded-full hover:bg-emerald-400 transition-colors"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;