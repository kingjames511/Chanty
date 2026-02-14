import React from 'react';
import { Command, Instagram, Twitter, Linkedin, Facebook, PlayCircle } from 'lucide-react';
import { DashboardMockup } from './ui/Mockups';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-20 px-6 pb-10 transition-colors">
      
      {/* CTA Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-white dark:bg-slate-900 rounded-none border border-slate-200 dark:border-slate-800 p-8 md:p-12 mb-20 relative overflow-hidden transition-colors"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-4 flex items-center gap-2 font-display">
                    <div className="w-4 h-4 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-[10px]">✕</div>
                    Start In Seconds, Achieve More
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-display tracking-tighter transition-colors">
                    Begin Easily, <br/> Without Any Hassle.
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg font-body transition-colors">
                    Start quickly and effortlessly—our platform guides you every step of the way so you can focus on what matters.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold transition-colors shadow-md hover:shadow-lg">
                        Get Started &rarr;
                    </button>
                    <button className="bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2">
                        <PlayCircle size={18} /> Learn More
                    </button>
                </div>
            </div>
            <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-l from-white dark:from-slate-900 via-transparent to-transparent z-10 md:hidden"></div>
                 <div className="scale-90 origin-right hover:scale-95 transition-transform duration-500">
                     <DashboardMockup />
                 </div>
            </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-12 transition-colors">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-primary-600 rounded-none flex items-center justify-center text-white">
                        <Command size={18} />
                    </div>
                    <span className="text-xl font-bold text-slate-900 dark:text-white font-display tracking-tight transition-colors">CHANTY</span>
                </div>
            </div>
            
            <div className="col-span-1 md:col-span-2 flex flex-wrap gap-8 text-sm font-semibold text-slate-600 dark:text-slate-400">
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Features</a>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Pricing</a>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Solution</a>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Resources</a>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy & Policy</a>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms & Condition</a>
            </div>

            <div className="col-span-1 flex justify-end gap-4 text-slate-400">
                <Twitter size={20} className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
                <Instagram size={20} className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
                <Linkedin size={20} className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
                <Facebook size={20} className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" />
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 dark:text-slate-500 font-medium transition-colors">
            <p>©2025 Lumino. All rights reserved.</p>
            <p>Made by: Tamim Al Arafat</p>
            <p>tamimarafat51@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}