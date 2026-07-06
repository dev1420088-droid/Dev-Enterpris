/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { Factory, Tag, Layers, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import Container from '../ui/Container';

export default function TrustSection() {
  const badges = [
    {
      icon: Factory,
      title: 'Manufacturer Direct',
      desc: 'Buy directly from our Delhi NCR production lines with no distributors'
    },
    {
      icon: Tag,
      title: 'Affordable Pricing',
      desc: 'Slashed pricing to keep tableware expenses economical'
    },
    {
      icon: Layers,
      title: 'Bulk Orders',
      desc: 'Massive capacity with guaranteed consistent stamping quality'
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Quality',
      desc: 'No sogginess, flat base, and sturdy double-pressed rims'
    },
    {
      icon: Truck,
      title: 'Fast Dispatch',
      desc: 'Express logistics straight from Delhi NCR warehouse to your doorstep'
    },
    {
      icon: Sparkles,
      title: 'Food Serving Quality',
      desc: 'Certified non-toxic, lead-safe, and chemical-safe silver lining'
    }
  ];

  return (
    <section className="py-10 bg-[#F8F9FA] border-t border-b border-gray-150 relative z-20" aria-label="Trust Factors">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-start">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-3.5 bg-white border border-gray-150/80 rounded-2xl shadow-3xs hover:border-[#0F294A]/20 transition-all duration-300 group"
              >
                {/* Minimal Icon Area */}
                <div className="h-9 w-9 bg-gray-50 border border-gray-150/60 rounded-xl flex items-center justify-center text-gray-700 mb-3 group-hover:bg-[#0F294A] group-hover:text-white transition-all duration-300">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                
                {/* Badge Title */}
                <h3 className="font-display text-[10px] font-extrabold uppercase tracking-wider text-[#111111] mb-1.5 leading-tight group-hover:text-[#0F294A] transition-colors">
                  {badge.title}
                </h3>
                
                {/* Badge Desc */}
                <p className="font-sans text-[10px] text-gray-500 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
