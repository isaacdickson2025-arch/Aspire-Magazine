import React from 'react';
import { Globe, Lightbulb, PenTool } from 'lucide-react';
import { SectionId } from '../types';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 border border-stone-200 hover:border-gold-400 hover:shadow-lg transition-all duration-300 group bg-white">
    <div className="text-navy-900 group-hover:text-gold-500 mb-6 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold text-navy-900 mb-4">{title}</h3>
    <p className="text-stone-600 leading-relaxed font-light">{description}</p>
  </div>
);

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-sans font-bold tracking-[0.2em] text-gold-600 uppercase mb-4">Our Vision</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-navy-900 mb-8">
            Curating the culture of <span className="italic">tomorrow.</span>
          </h3>
          <p className="text-stone-600 text-lg font-light leading-relaxed">
            ASPIRE isn't just a magazine; it's a movement. We bridge the gap between classic elegance and modern innovation, 
            bringing you stories that challenge perspectives and ignite creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Globe size={32} />}
            title="Global Perspective"
            description="From Tokyo to Tulum, we uncover hidden gems and cultural shifts that matter to the global citizen."
          />
          <FeatureCard 
            icon={<Lightbulb size={32} />}
            title="Thought Leadership"
            description="Deep dives into emerging technologies, sustainable living, and the minds shaping our future."
          />
          <FeatureCard 
            icon={<PenTool size={32} />}
            title="Curated Design"
            description="Visual storytelling at its finest. Every page is a work of art designed to inspire."
          />
        </div>
      </div>
    </section>
  );
};