/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Sparkles, Thermometer, Droplets, Layers, ShieldCheck as ShieldIcon } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { SILVER_SPECS } from '../../data/staticData';

export default function Specifications() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    Thermometer: Thermometer,
    Droplets: Droplets,
    Layers: Layers,
    Flame: Thermometer, // Fallback
  };

  return (
    <div id="specs" className="py-20 sm:py-24 bg-[#F8F9FA] border-t border-gray-200/40 relative">
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gray-200/20 blur-[100px] pointer-events-none" />

      <Container>
        {/* Title block */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
            Engineering Specifications
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] max-w-2xl">
            High-Performance Stamping Standards
          </h2>
          <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
          {/* Modern Sans-Serif Subtext */}
          <p className="font-sans text-sm md:text-base text-[#666666] max-w-xl mt-2">
            Every product stamped in our Delhi NCR factory complies with strict food-contact safety profiles, thermal stability thresholds, and mechanical stress profiles.
          </p>
        </div>

        {/* Specs Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SILVER_SPECS.map((spec) => {
            const IconComponent = iconMap[spec.iconName] || ShieldCheck;
            return (
              <Card
                key={spec.id}
                variant="dark"
                interactive={true}
                padding="sm"
                className="flex flex-col justify-between text-left h-full border-gray-200/80 hover:border-[#0F294A]/30 group shadow-2xs"
              >
                <div className="flex flex-col gap-4">
                  <div className="h-9 w-9 border border-gray-200 bg-gray-50 rounded-lg flex items-center justify-center text-[#0F294A] group-hover:bg-[#0F294A] group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-4.5 w-4.5 text-[#0F294A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-[#666666] font-bold">
                      {spec.metric}
                    </span>
                    <span className="font-display text-2xl font-extrabold text-[#111111] mt-1.5 leading-none">
                      {spec.value}
                    </span>
                  </div>
                </div>
                <p className="font-sans text-[11px] text-[#666666] leading-relaxed mt-6 pt-4 border-t border-gray-100">
                  {spec.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Bottom micro copy for compliance */}
        <div className="mt-12 text-center">
          <p className="font-sans text-[10px] text-gray-400 max-w-lg mx-auto leading-relaxed">
            *All specifications are verified by regular factory batch stress-tests. Materials are 100% heavy metal-free, certified food-grade, and manufactured without chlorine bleaching agents.
          </p>
        </div>
      </Container>
    </div>
  );
}
