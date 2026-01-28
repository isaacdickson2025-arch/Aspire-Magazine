import React from 'react';
import { SectionId, Article } from '../types';

const ISSUES: Article[] = [
  {
    id: 1,
    title: "The Renaissance of Digital Art",
    category: "Technology & Culture",
    excerpt: "Exploring how NFTs and AI are reshaping the landscape of modern collection.",
    imageUrl: "https://picsum.photos/600/800?random=1",
    author: "Elena Fisher"
  },
  {
    id: 2,
    title: "Minimalist Living in Chaos",
    category: "Lifestyle",
    excerpt: "Finding serenity in the bustle of the world's most populous cities.",
    imageUrl: "https://picsum.photos/600/800?random=2",
    author: "Marcus Thorne"
  },
  {
    id: 3,
    title: "Sustainable Fashion Forward",
    category: "Fashion",
    excerpt: "Why the biggest luxury brands are finally pivoting to eco-conscious materials.",
    imageUrl: "https://picsum.photos/600/800?random=3",
    author: "Sarah Jenkins"
  }
];

export const FeaturedIssues: React.FC = () => {
  return (
    <section id={SectionId.ISSUES} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-navy-900">Latest Issues</h2>
            <div className="h-1 w-20 bg-gold-400 mt-4"></div>
          </div>
          <a href="#" className="hidden md:block text-sm font-bold tracking-widest uppercase text-navy-900 hover:text-gold-600 transition-colors">
            View Archive &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {ISSUES.map((issue) => (
            <div key={issue.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors z-10 duration-500"></div>
                <img 
                  src={issue.imageUrl} 
                  alt={issue.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-widest uppercase text-navy-900">
                  {issue.category}
                </div>
              </div>
              <h3 className="text-2xl font-serif text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                {issue.title}
              </h3>
              <p className="text-stone-600 font-light mb-4 line-clamp-2">
                {issue.excerpt}
              </p>
              <button className="text-xs font-bold tracking-widest uppercase text-navy-900 border-b border-navy-900 pb-1 group-hover:border-gold-600 group-hover:text-gold-600 transition-all">
                Read More
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-sm font-bold tracking-widest uppercase text-navy-900 hover:text-gold-600 transition-colors">
              View Archive &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};