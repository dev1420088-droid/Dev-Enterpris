/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Star, Factory, Zap, Check } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenEnquiry: (productName?: string) => void;
}

export default function Hero({ onOpenEnquiry }: HeroProps) {
  const handleScrollToCatalog = () => {
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

  const trustBadges = [
    { label: 'Manufacturer Direct', icon: Factory },
    { label: 'Affordable Pricing', icon: Sparkles },
    { label: 'Bulk Orders', icon: ShieldCheck },
    { label: 'Reliable Quality', icon: Star },
    { label: 'Fast Dispatch', icon: Zap }
  ];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-white overflow-hidden pt-24 pb-16 lg:py-20" aria-label="Hero Section">
      
      {/* Precision Micro-grid background representing engineering/industrial excellence */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60" />
      
      {/* Elegant minimalist ambient spotlights */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gray-50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-gray-100/30 blur-[120px] pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Actions */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Factory Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F8F9FA] border border-gray-150 text-gray-700 rounded-full shadow-3xs">
              <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-display text-[9px] uppercase tracking-[0.2em] font-extrabold text-[#111111]">
                Delhi NCR Manufacturing Unit
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.08] max-w-2xl">
              Quality Disposable Products <br className="hidden sm:inline" />
              <span className="text-[#666666]">at Manufacturer Prices</span>
            </h1>

            {/* Paragraph Text */}
            <p className="font-sans text-sm sm:text-base text-[#555555] leading-relaxed max-w-xl">
              We manufacture reliable disposable paper plates and bowls with silver sheet coating for homes, restaurants, caterers, events and businesses across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={handleScrollToCatalog}
                aria-label="Explore Products"
              >
                Explore Products
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onOpenEnquiry('B2B Bulk Price Quote Request')}
                aria-label="Request Bulk Quote"
              >
                Request Bulk Quote
              </Button>
            </div>

            {/* Trust and Rating Badge Row */}
            <div className="flex items-center gap-3.5 mt-4 py-3 border-t border-gray-100 w-full max-w-lg">
              <div className="flex items-center gap-1.5 text-xs text-gray-600 font-semibold uppercase tracking-wider font-sans">
                <Check className="h-4 w-4 text-green-600" />
                <span>100% Food-Safe Base Core</span>
              </div>
              <div className="h-3 w-px bg-gray-200" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#0F294A] text-[#0F294A]" />
                ))}
                <span className="font-sans text-[10px] text-gray-500 ml-1.5 font-medium">
                  5.0 Rated Wholesale Partner
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean and Professional Product Showcase */}
          <motion.div 
            className="lg:col-span-5 relative w-full flex justify-center items-center mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            {/* Elegant multi-product layout representing real manufacturing company items */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] bg-white border border-gray-200 p-6 shadow-md rounded-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Product Category Showcase Header */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-150">
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] uppercase tracking-wider text-[#0F294A] font-bold">
                    Core Product Showcase
                  </span>
                  <span className="font-sans text-[11px] font-bold text-[#111111]">
                    Premium Silver Plate Series
                  </span>
                </div>
                <span className="font-sans text-[9px] bg-green-50 text-green-700 px-2 py-0.5 rounded font-medium border border-green-200/50">
                  Ready to Dispatch
                </span>
              </div>

              {/* Real layout representation of professional product photoshoot */}
              <div className="relative flex-1 my-6 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=600&auto=format&fit=crop" 
                  alt="Premium dinner plates showcase"
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                
                {/* Clean overlay card detailing specifications */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans text-[10px] font-bold text-[#111111] uppercase tracking-wider">
                      10" Dinner Plate
                    </span>
                    <span className="font-sans text-[9px] text-[#0F294A] font-semibold">
                      400 GSM Core
                    </span>
                  </div>
                  <p className="font-sans text-[10px] text-gray-500 leading-normal">
                    Heavy-duty laminated plate with high-density wood pulp core. Labeled for catering and banquets.
                  </p>
                </div>
              </div>

              {/* Bottom Specs Info */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-150 text-left">
                <div className="flex flex-col">
                  <span className="font-sans text-[8px] text-gray-400 uppercase tracking-wider">
                    Manufacturing
                  </span>
                  <span className="font-sans text-[10px] font-semibold text-[#111111]">
                    Fully Automated Line
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[8px] text-gray-400 uppercase tracking-wider">
                    Daily Capacity
                  </span>
                  <span className="font-sans text-[10px] font-semibold text-[#111111]">
                    100,000+ Units
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
