import React, { useState, useEffect } from 'react';
import { Menu, X, Command, Moon, Sun } from 'lucide-react';
import { NavLinkProps } from '../types';

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a 
    href={href} 
    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
  >
    {children}
  </a>
);

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ darkMode, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-600 rounded-none flex items-center justify-center text-white">
            <Command size={18} />
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight font-display">CHANTY</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#solution">Solution</NavLink>
          <NavLink href="#resources">Resources</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* CTA */}
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]">
            Book A Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="text-slate-600 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-6 md:hidden flex flex-col space-y-4 shadow-sm">
          <a href="#features" className="text-slate-600 dark:text-slate-300 font-medium hover:text-primary-600">Features</a>
          <a href="#pricing" className="text-slate-600 dark:text-slate-300 font-medium hover:text-primary-600">Pricing</a>
          <a href="#solution" className="text-slate-600 dark:text-slate-300 font-medium hover:text-primary-600">Solution</a>
          <button className="w-full bg-primary-600 text-white py-3 rounded-full font-bold">
            Book A Demo
          </button>
        </div>
      )}
    </nav>
  );
}