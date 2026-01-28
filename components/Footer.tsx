import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif font-bold mb-6">ASPIRE</h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              A forward-thinking lifestyle publication for the modern, global citizen.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-gold-400">Company</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-gold-400">Support</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-gold-400">Stay Inspired</h3>
            <p className="text-stone-400 text-xs mb-4">Join our newsletter for weekly curated content.</p>
            <form className="flex border-b border-white/30 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none text-white placeholder-stone-500 focus:outline-none w-full text-sm"
              />
              <button type="submit" className="text-white hover:text-gold-400 transition-colors">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} ASPIRE Magazine. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for the ambitious.</p>
        </div>
      </div>
    </footer>
  );
};