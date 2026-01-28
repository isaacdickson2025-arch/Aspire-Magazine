import React, { useState } from 'react';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { SectionId } from '../types';
import { generateMagazinePreview } from '../services/geminiService';

export const AiPreview: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setContent(null);
    
    const result = await generateMagazinePreview(topic);
    setContent(result);
    setLoading(false);
  };

  return (
    <section id={SectionId.AI_PREVIEW} className="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-800 skew-x-12 translate-x-20 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-gold-400 mb-4">
              <Sparkles size={20} />
              <span className="text-sm font-bold tracking-widest uppercase">ASPIRE Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Curate Your Own <br/> 
              <span className="italic text-stone-300">Inspiration.</span>
            </h2>
            <p className="text-stone-300 mb-8 font-light text-lg leading-relaxed">
              Curious about a topic? Ask our AI editor to draft a sophisticated snippet on the fly. 
              Experience the future of personalized editorial content.
            </p>

            <form onSubmit={handleGenerate} className="relative max-w-md">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Sustainable Architecture, Digital Nomads..." 
                className="w-full bg-white/10 border border-white/20 rounded-none px-6 py-4 pr-14 text-white placeholder-white/40 focus:outline-none focus:border-gold-400 focus:bg-white/15 transition-all font-serif italic text-lg"
              />
              <button 
                type="submit" 
                disabled={loading || !topic}
                className="absolute right-2 top-2 bottom-2 aspect-square bg-gold-500 hover:bg-gold-600 disabled:bg-stone-600 text-white flex items-center justify-center transition-colors"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white text-slate-800 p-8 md:p-12 shadow-2xl relative min-h-[300px] flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-900 via-gold-400 to-navy-900"></div>
              
              {!content && !loading && (
                <div className="text-center text-stone-400 py-10">
                  <span className="block font-serif text-6xl opacity-20 mb-4">"</span>
                  <p className="font-sans text-sm tracking-widest uppercase">Enter a topic to generate a preview</p>
                </div>
              )}

              {loading && (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-stone-200 w-3/4 rounded"></div>
                  <div className="h-4 bg-stone-200 w-full rounded"></div>
                  <div className="h-4 bg-stone-200 w-5/6 rounded"></div>
                  <div className="h-4 bg-stone-200 w-2/3 rounded"></div>
                </div>
              )}

              {content && (
                <div className="animate-fade-in">
                  <h3 className="font-sans text-xs font-bold text-gold-600 tracking-widest uppercase mb-4">
                    Generated Excerpt: {topic}
                  </h3>
                  <p className="font-serif text-xl md:text-2xl leading-relaxed text-slate-800">
                    {content}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                       <img src="https://picsum.photos/100/100?random=99" alt="Editor" />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold uppercase text-navy-900">ASPIRE Bot</p>
                      <p className="text-stone-500">AI Editor-in-Chief</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};