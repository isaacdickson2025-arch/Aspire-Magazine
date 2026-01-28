import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-sans tracking-[0.2em] uppercase mb-6 animate-fade-in-up">
          The New Standard
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 leading-tight tracking-tight">
          Inspiring Ideas. <br />
          <span className="italic font-normal text-gold-400">Exceptional Stories.</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Your definitive source for lifestyle, culture, and innovation. 
          Discover the narratives shaping our future.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => scrollTo(SectionId.SUBSCRIBE)}
            className="px-8 py-4 bg-white text-navy-900 hover:bg-gold-400 hover:text-white transition-colors duration-300 font-sans font-bold text-sm tracking-widest uppercase min-w-[180px]"
          >
            Subscribe Now
          </button>
          <button 
            onClick={() => scrollTo(SectionId.ISSUES)}
            className="group px-8 py-4 border border-white text-white hover:bg-white/10 transition-all duration-300 font-sans font-bold text-sm tracking-widest uppercase min-w-[180px] flex items-center justify-center gap-2"
          >
            Explore Issues <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};