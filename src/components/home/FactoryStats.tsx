/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  FolderHeart, 
  Users2, 
  Layers3, 
  Zap 
} from 'lucide-react';
import Container from '../ui/Container';

// Multi-functional animated counter component that triggers when scrolled into view
function CounterItem({ value, suffix = '', label, icon: Icon }: { value: number; suffix?: string; label: string; icon: any }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (end === 0) return;

    const totalDuration = 1500; // 1.5 seconds animation
    const incrementTime = 25;
    const stepsCount = totalDuration / incrementTime;
    const stepValue = Math.ceil(end / stepsCount);

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center justify-center p-8 bg-white border border-gray-150 rounded-2xl shadow-3xs hover:border-[#0F294A]/30 hover:shadow-2xs transition-all duration-300 relative group overflow-hidden"
    >
      {/* Background soft circle accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-full blur-xl group-hover:bg-[#0F294A]/3 transition-all duration-300 pointer-events-none" />

      {/* Decorative colored bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[#0F294A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

      <div className="h-10 w-10 border border-gray-150 bg-[#F8F9FA] rounded-xl flex items-center justify-center text-[#0F294A] group-hover:bg-[#0F294A] group-hover:text-white transition-all duration-300 shadow-3xs mb-4">
        <Icon className="h-4.5 w-4.5" />
      </div>

      <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight mb-2">
        {count}
        {suffix}
      </span>

      <span className="font-sans text-xs sm:text-sm font-semibold text-[#666666] uppercase tracking-wider text-center">
        {label}
      </span>
    </div>
  );
}

export default function FactoryStats() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-gray-100 relative overflow-hidden" aria-label="Factory Scale">
      <div className="absolute top-0 left-1/3 w-[250px] h-[250px] bg-gray-50 rounded-full blur-[100px] pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Copy section */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <span className="font-display text-[9px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              NCR Production Capacity
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] leading-tight">
              Our Factory In Numbers
            </h2>
            <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
            <p className="font-sans text-sm text-[#666666] leading-relaxed mt-2">
              By maintaining a massive direct lamination pipeline and high-tonnage hydraulic molding presses, we ensure consistent supply and unbeatable pricing at any scale.
            </p>
          </div>

          {/* Counters Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <CounterItem 
              value={10} 
              suffix="+" 
              label="Product Variants" 
              icon={Layers3} 
            />
            <CounterItem 
              value={1000} 
              suffix="+" 
              label="Happy Customers" 
              icon={Users2} 
            />
            <CounterItem 
              value={100} 
              suffix="%" 
              label="Bulk Supply" 
              icon={FolderHeart} 
            />
            <CounterItem 
              value={24} 
              suffix=" Hr" 
              label="Fast Processing" 
              icon={Zap} 
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
