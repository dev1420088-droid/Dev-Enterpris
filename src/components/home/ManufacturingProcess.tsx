/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Package, 
  Send,
  ArrowRight
} from 'lucide-react';
import Container from '../ui/Container';

export default function ManufacturingProcess() {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Raw Material',
      tag: 'Certified Base Core',
      description: 'We source high-density wood pulp core board (350–450 GSM), tested for flawless rigidity.'
    },
    {
      step: '02',
      icon: Layers,
      title: 'Silver Sheet Lamination',
      tag: 'Moisture Barrier',
      description: 'A food-safe 22-micron silver protective film is thermally bonded without any chemical adhesive.'
    },
    {
      step: '03',
      icon: Cpu,
      title: 'Manufacturing',
      tag: 'Hydraulic Stamping',
      description: 'Automated high-tonnage hydraulic stamping presses mold the structural rims and deep basin.'
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: 'Quality Inspection',
      tag: 'Defect-Free Guarantee',
      description: 'Every unit is verified for rim stiffness, thickness consistency, and lamination integrity.'
    },
    {
      step: '05',
      icon: Package,
      title: 'Packaging',
      tag: 'Dust-Proof Sleeve Seals',
      description: 'Plates are immediately sleeve-sealed in sterile plastic covers within a hygienic facility.'
    },
    {
      step: '06',
      icon: Send,
      title: 'Dispatch',
      tag: 'Delhi NCR Logistics',
      description: 'Direct dispatch via premium cargo networks for rapid, secure transit across all of India.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#F8F9FA] border-t border-b border-gray-150 relative overflow-hidden" aria-label="Manufacturing Process">
      {/* Precision Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.008)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#0F294A] font-extrabold bg-[#E6EEF8] px-3 py-1 rounded-full">
            Technical Transparency
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] mt-4">
            How Your Plates Are Made
          </h2>
          <p className="font-sans text-sm text-[#666666] mt-3">
            A comprehensive, automated manufacturing cycle engineered for high-volume reliability.
          </p>
        </div>

        {/* Horizontal Timeline Connector Line (Desktop Only) */}
        <div className="hidden lg:block absolute left-12 right-12 top-[312px] h-0.5 bg-gray-200 z-0" />

        {/* Timeline Horizontal / Vertical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                
                {/* Step Card */}
                <div className="w-full bg-white border border-gray-200 p-5 rounded-2xl shadow-3xs group-hover:border-[#0F294A]/30 transition-all duration-300 flex flex-col h-[180px] justify-between relative mb-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-gray-350 bg-gray-50 border border-gray-150 px-2 py-0.5 rounded-md">
                      STEP {step.step}
                    </span>
                    <span className="font-mono text-[7px] uppercase tracking-widest text-gray-400 font-extrabold">
                      QA_CHECKED
                    </span>
                  </div>

                  <div className="my-auto py-2">
                    <h3 className="font-display text-xs font-extrabold uppercase tracking-wide text-[#111111] leading-tight group-hover:text-[#0F294A] transition-colors mb-1.5">
                      {step.title}
                    </h3>
                    <span className="font-sans text-[9px] text-[#666666] bg-gray-50 px-1.5 py-0.5 rounded-sm border border-gray-150 font-medium">
                      {step.tag}
                    </span>
                  </div>

                  <div className="text-left border-t border-gray-100 pt-2.5">
                    <p className="font-sans text-[10px] text-gray-500 leading-normal line-clamp-3">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node Icon (The center connect dot) */}
                <div className="relative flex items-center justify-center z-10">
                  {/* Outer circle halo */}
                  <div className="h-10 w-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center group-hover:border-[#0F294A] group-hover:bg-[#0F294A] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="h-4.5 w-4.5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>

                  {/* Tiny connecting arrows between nodes (Desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute left-8 w-12 items-center justify-center text-gray-300 pointer-events-none">
                      <ArrowRight className="h-3 w-3 animate-pulse" />
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Footnote Badge */}
        <div className="mt-16 text-center">
          <p className="font-sans text-[10px] text-gray-400 uppercase tracking-[0.25em] font-semibold">
            ✦ Fully Automated Lines • ✦ 100% Food-Safe Thermal Bond • ✦ NCR Factory Direct Logistics
          </p>
        </div>

      </Container>
    </section>
  );
}
