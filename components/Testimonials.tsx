import React from 'react';
import { SectionId } from '../types';

export const Testimonials: React.FC = () => {
  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-navy-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Read by visionaries, <br />
              <span className="text-gold-400 italic">loved by creative minds.</span>
            </h2>
            <div className="flex -space-x-4 mb-8">
               <img src="https://picsum.photos/50/50?random=10" alt="Reader" className="w-12 h-12 rounded-full border-2 border-navy-900" />
               <img src="https://picsum.photos/50/50?random=11" alt="Reader" className="w-12 h-12 rounded-full border-2 border-navy-900" />
               <img src="https://picsum.photos/50/50?random=12" alt="Reader" className="w-12 h-12 rounded-full border-2 border-navy-900" />
               <div className="w-12 h-12 rounded-full border-2 border-navy-900 bg-gold-400 flex items-center justify-center text-navy-900 font-bold text-xs">
                 +2k
               </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm relative">
            <span className="text-8xl font-serif text-gold-400/20 absolute -top-8 -left-4">"</span>
            <p className="text-xl font-light italic leading-relaxed mb-6 text-stone-200">
              ASPIRE has completely transformed how I consume culture. It’s not just news; it’s a deep dive into the soul of modern living. The aesthetics are unmatched.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/60/60?random=20" alt="Isabella R." className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold text-sm tracking-wide">Isabella Rossini</p>
                <p className="text-gold-400 text-xs uppercase tracking-widest">Architect, Milan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};