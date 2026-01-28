import React from 'react';
import { Check } from 'lucide-react';
import { SectionId, SubscriptionPlan } from '../types';

const PLANS: SubscriptionPlan[] = [
  {
    id: 'digital',
    name: 'Digital Only',
    price: '$5.00',
    frequency: '/ month',
    features: ['Unlimited web access', 'Weekly newsletter', 'App access', 'No ads'],
    recommended: false
  },
  {
    id: 'all-access',
    name: 'All Access',
    price: '$12.00',
    frequency: '/ month',
    features: ['Print magazine delivered', 'Unlimited web access', 'Exclusive events', 'Digital archive access', 'Tote bag gift'],
    recommended: true
  },
  {
    id: 'print',
    name: 'Print Only',
    price: '$9.00',
    frequency: '/ month',
    features: ['Print magazine delivered', 'Quarterly specials', 'Beautiful coffee table styling'],
    recommended: false
  }
];

export const Subscription: React.FC = () => {
  return (
    <section id={SectionId.SUBSCRIBE} className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">Join the Community</h2>
          <p className="text-stone-600 text-lg font-light">
            Select the plan that fits your lifestyle. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white p-8 md:p-10 transition-transform duration-300 ${
                plan.recommended 
                  ? 'border-2 border-gold-400 shadow-xl md:-translate-y-4 z-10' 
                  : 'border border-stone-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-400 text-white px-4 py-1 text-xs font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-serif text-navy-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-navy-900">{plan.price}</span>
                <span className="text-stone-500 ml-2">{plan.frequency}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-stone-600 text-sm">
                    <Check size={16} className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 text-xs font-bold tracking-widest uppercase transition-colors ${
                  plan.recommended 
                    ? 'bg-navy-900 text-white hover:bg-gold-500' 
                    : 'bg-stone-100 text-navy-900 hover:bg-stone-200'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};