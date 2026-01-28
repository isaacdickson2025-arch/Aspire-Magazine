import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedIssues } from './components/FeaturedIssues';
import { AiPreview } from './components/AiPreview';
import { Subscription } from './components/Subscription';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-stone-50">
      <Navigation />
      <main>
        <Hero />
        <AiPreview />
        <About />
        <FeaturedIssues />
        <Subscription />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;