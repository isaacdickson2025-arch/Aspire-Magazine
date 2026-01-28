import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { SectionId } from '../types';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
  }`;

  const linkClass = "text-white/90 hover:text-gold-400 transition-colors font-sans text-sm tracking-widest uppercase cursor-pointer";

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection(SectionId.HERO)} 
          className="text-2xl font-serif font-bold text-white tracking-wider cursor-pointer z-50"
        >
          ASPIRE
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection(SectionId.ABOUT)} className={linkClass}>About</a>
          <a onClick={() => scrollToSection(SectionId.ISSUES)} className={linkClass}>Issues</a>
          <a onClick={() => scrollToSection(SectionId.AI_PREVIEW)} className={linkClass}>Ask ASPIRE</a>
          <a onClick={() => scrollToSection(SectionId.TESTIMONIALS)} className={linkClass}>Reviews</a>
          <button 
            onClick={() => scrollToSection(SectionId.SUBSCRIBE)}
            className="px-6 py-2 bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold tracking-widest uppercase transition-all"
          >
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-navy-900 flex flex-col items-center justify-center space-y-8 z-40">
             <a onClick={() => scrollToSection(SectionId.ABOUT)} className="text-2xl font-serif text-white">About</a>
             <a onClick={() => scrollToSection(SectionId.ISSUES)} className="text-2xl font-serif text-white">Issues</a>
             <a onClick={() => scrollToSection(SectionId.AI_PREVIEW)} className="text-2xl font-serif text-white">Ask ASPIRE</a>
             <a onClick={() => scrollToSection(SectionId.SUBSCRIBE)} className="text-2xl font-serif text-gold-400">Subscribe</a>
          </div>
        )}
      </div>
    </nav>
  );
};