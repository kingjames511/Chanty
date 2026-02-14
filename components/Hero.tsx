import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, PlayCircle, MousePointer2 } from 'lucide-react';
import { DashboardMockup } from './ui/Mockups';

const logos = [
  { name: 'doin', letter: '❖' },
  { name: 'driep', letter: '✜' },
  { name: 'quep', letter: '▲' },
  { name: 'jump', letter: '⌘' },
  { name: 'Oasis', letter: '◎' },
  { name: 'aper', letter: '◈' },
  { name: 'lemp', letter: '✶' },
];

const rotatingWords = ["Work Better", "Collaborate", "Innovate", "Succeed"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-200/30 dark:bg-purple-900/20 blur-[120px] rounded-none -z-10 transition-colors duration-500" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-800 rounded-none border border-slate-100 dark:border-slate-700 shadow-sm mb-6 transition-colors">
            <div className="w-10 h-10 bg-slate-900 dark:bg-slate-700 rounded-none flex items-center justify-center text-white">
              <Sparkles size={20} />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 dark:text-white tracking-tighter leading-[1.1] mb-6 transition-colors">
            Helping Your Team <br />
            <div className="h-[1.2em] overflow-hidden flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={index}
                  initial={{ y: 40, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -40, opacity: 0, rotateX: 90 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 inline-block py-1"
                >
                  {rotatingWords[index]}, Together.
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-body transition-colors">
            We provide a secure and easy-to-use platform that brings together messaging, video calling, and task management, helping your team stay connected and organized.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="relative group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold transition-all w-full sm:w-auto text-lg tracking-tight shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-105">
              Try It For Free
              {/* Decorative Cursor similar to reference */}
              <div className="absolute -bottom-3 -right-3 text-white drop-shadow-md hidden group-hover:block transition-all">
                 <MousePointer2 size={32} fill="white" className="text-primary-600" />
              </div>
            </button>
            <button className="px-8 py-4 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg tracking-tight hover:scale-105">
              <PlayCircle size={20} />
              Contact Sales
            </button>
          </div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl relative z-10"
        >
          <DashboardMockup />
        </motion.div>

        {/* Social Proof */}
        <div className="mt-20 w-full border-t border-slate-200 dark:border-slate-800 pt-10 transition-colors">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-8 font-sans">
            Over 75,000 Companies Use Chanty to be More Productive
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300 font-display">
                <span className="text-2xl">{logo.letter}</span>
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}