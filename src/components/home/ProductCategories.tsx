/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Circle, Layers, Award, Sparkles } from 'lucide-react';
import Container from '../ui/Container';

export default function ProductCategories() {
  const categories = [
    {
      id: 'paper-plates',
      title: 'Paper Plates',
      desc: 'All-purpose lightweight and mediumweight snack plates designed for street food, quick service, and home parties.',
      icon: Circle,
      imageUrl: 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'dinner-plates',
      title: 'Dinner Plates',
      desc: 'Heavy-duty 10-inch and 12-inch circular dinner plates engineered to carry full multi-course meals without buckling.',
      icon: Award,
      imageUrl: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'compartment-plates',
      title: 'Compartment Plates',
      desc: 'Sturdy multi-partition thali plates designed to keep dals, gravies, curries, and dry items perfectly separated.',
      icon: Layers,
      imageUrl: 'https://images.unsplash.com/photo-1610832958506-ee5633619144?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'paper-bowls',
      title: 'Paper Bowls',
      desc: 'Deep-drawn cups and serving bowls lined with high-integrity silver sheet, perfect for hot curries, sweets, and gravies.',
      icon: Sparkles,
      imageUrl: 'https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const handleCategoryClick = () => {
    const target = document.querySelector('#catalog');
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="categories" className="py-20 bg-white" aria-label="Product Categories">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#0F294A] font-extrabold bg-[#F0F4F8] px-3 py-1 rounded-full">
            Our Core Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] mt-4">
            Stamping Excellence in Four Formats
          </h2>
          <p className="font-sans text-sm text-[#666666] mt-3 leading-relaxed">
            Every category is built on our signature high-density wood pulp core laminated with a moisture-proof 22-micron silver protective sheet.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                className="flex flex-col bg-white border border-gray-200 hover:border-[#0F294A]/30 rounded-2xl p-6 shadow-3xs hover:shadow-md transition-all duration-350 flex-1 group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Premium Image Container */}
                <div className="aspect-[4/3] bg-gray-50 border border-gray-150 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={cat.imageUrl}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle category badge overlay */}
                  <div className="absolute top-2.5 left-2.5 bg-[#0F294A] text-white font-sans text-[8px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold shadow-3xs">
                    Factory Certified
                  </div>
                </div>

                {/* Text Context */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#0F294A] transition-colors mb-2.5">
                      {cat.title}
                    </h3>
                    <p className="font-sans text-xs text-[#666666] leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                  </div>

                  {/* View Products Button */}
                  <button
                    onClick={handleCategoryClick}
                    className="w-full py-3 border border-gray-200 hover:border-black font-display text-[10px] uppercase tracking-widest text-[#111111] font-extrabold flex items-center justify-center gap-1.5 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer shadow-3xs"
                  >
                    View Products
                    <ArrowRight className="h-3.5 w-3.5 text-gray-500 group-hover:translate-x-1 group-hover:text-black transition-all" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
