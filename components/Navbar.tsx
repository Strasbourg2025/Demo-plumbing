
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-neutral-200/50 h-16' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-widest uppercase">Matos.</a>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
          <a href="#commitments" className="transition-colors hover:text-neutral-900">Philosophy</a>
          <a href="#services" className="transition-colors hover:text-neutral-900">Services</a>
          <a href="#process" className="transition-colors hover:text-neutral-900">Process</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors group bg-neutral-900 text-neutral-50 hover:bg-neutral-800">
            Start Project
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
          </a>

          <button className="md:hidden p-2 text-neutral-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
