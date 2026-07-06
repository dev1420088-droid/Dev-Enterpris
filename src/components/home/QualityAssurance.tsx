/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Factory, 
  CheckCircle2, 
  Package 
} from 'lucide-react';
import Container from '../ui/Container';

export default function QualityAssurance() {
  const features = [
    {
      icon: Sparkles,
      title: 'Strong Silver Sheet Finish',
      description: 'Laminated with a highly durable 22-micron silver sheet coating. Provides an absolute liquid barrier, zero sogginess, and an elegant reflective finish.',
      color: 'bg-indigo-50/50 text-indigo-700'
    },
    {
      icon: ShieldCheck,
      title: 'Food Serving Quality',
      description: 'Certified non-toxic, chemical-safe raw materials. Fully vetted and completely inert under extreme piping hot, oily, or regional Indian dishes.',
      color: 'bg-emerald-50/50 text-emerald-700'
    },
    {
      icon: Layers,
      title: 'Durable Construction',
      description: 'Stamped using highly dense 350-450 GSM wood-fiber boards. Prevents bending, sagging, or collapse even when loaded with high-volume festive courses.',
      color: 'bg-amber-50/50 text-amber-700'
    },
    {
      icon: Factory,
      title: 'Reliable Manufacturing',
      description: 'Produced on our customized automated hydraulic pressing lines. Guarantees uniform diameters, flat bases, and stable rims on every batch.',
      color: 'bg-blue-50/50 text-blue-700'
    },
    {
      icon: CheckCircle2,
      title: 'Consistent Quality',
      description: 'Rigorous physical inspection checklists eliminate micro-defects. Every sleeve you unwrap maintains identical structural strength and aesthetic standards.',
      color: 'bg-rose-50/50 text-rose-700'
    },
    {
      icon: Package,
      title: 'Hygienic Packaging',
      description: 'Immediately sealed in sterile, dust-proof plastic wrap right after molding inside dust-controlled packaging zones to secure pure tableware.',
      color: 'bg-purple-50/50 text-purple-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 110, 
        damping: 15 
      } 
    }
  };

  return (
    <section id="quality" className="py-20 sm:py-24 bg-[#F8F9FA] border-t border-gray-150 relative" aria-label="Quality Assurance">
      {/* Visual Accent */}
      <div className="absolute left-10 bottom-10 w-64 h-64 rounded-full bg-[#0F294A]/3 blur-[120px] pointer-events-none" />

      <Container>
        {/* Title Block */}
        <div className="flex flex-col items-center text-center gap-3 mb-16 max-w-2xl mx-auto">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
            Uncompromising Standards
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
            Dedicated Quality Assurance
          </h2>
          <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
          <p className="font-sans text-sm text-[#666666] mt-2">
            Every plate and bowl undergoes rigid safety and pressure audits to ensure absolute dinnerware reliability.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-gray-150 p-6.5 rounded-2xl shadow-3xs flex flex-col gap-5 hover:border-[#0F294A]/30 hover:shadow-2xs transition-all duration-300 group relative overflow-hidden"
              >
                {/* Micro hover indicator line */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0F294A] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                {/* Icon wrapper */}
                <div className={`h-11 w-11 ${feat.color} rounded-xl flex items-center justify-center shrink-0 shadow-3xs transition-all duration-300 group-hover:scale-105`}>
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 pl-1.5">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[#111111] group-hover:text-[#0F294A] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-xs text-[#666666] leading-relaxed group-hover:text-gray-800 transition-colors">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Safe Badge Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-16 pt-8 border-t border-gray-150/60 text-[10px] text-[#888888] uppercase tracking-widest font-display">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> 100% Lead-Free</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Inert Chemical Film</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> High-GSM Heavy Density</span>
        </div>
      </Container>
    </section>
  );
}
