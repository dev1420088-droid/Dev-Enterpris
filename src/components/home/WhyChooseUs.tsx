/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Factory, Award, CheckCircle, Flame, Sparkles, Layers, Settings, Truck, Headphones, Box } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Factory,
      title: 'Manufacturer Direct',
      desc: 'Sourced directly from our automated stamping lines in NCR. Bypassing middlemen ensures direct factory prices, consistent supply, and customized batch allocations.',
    },
    {
      icon: Award,
      title: 'Affordable Prices',
      desc: 'Our products offer excellent value for money with budget-friendly wholesale prices. High-quality paper plates and bowls manufactured cost-efficiently for maximum savings.',
    },
    {
      icon: CheckCircle,
      title: 'Consistent Quality',
      desc: 'Backed by high-integrity 350-450 GSM base cores and seamless 22-micron silver sheets. Certified non-toxic and fully leak-proof under wet gravies.',
    },
    {
      icon: Box,
      title: 'Bulk Orders',
      desc: 'Equipped to handle high-volume catering, banquet, and retail wholesale requirements. We guarantee continuous supply volumes and custom size thali dimensions.',
    },
    {
      icon: Truck,
      title: 'Fast Supply',
      desc: 'We leverage rapid dispatch channels and a fully stocked central warehouse to ship bulk orders quickly across India. Guaranteed transit schedules keep your stock levels secure.',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      desc: 'Our factory sales division provides personalized support, prompt custom quotes, and real-time dispatch tracking to build absolute sourcing trust.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <section id="why-choose" className="py-20 sm:py-24 bg-white border-t border-gray-100 relative" aria-label="Why Choose Us">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F8F9FA] via-white to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core sales copy */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left lg:sticky lg:top-24">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Engineering Excellence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
              Reliable Quality. <br />
              Direct From Source.
            </h2>
            {/* Modern Sans-Serif Subtext */}
            <p className="font-sans text-sm md:text-base text-[#666666] leading-relaxed">
              Why leading caterers, wholesale distributors, and hospitality planners across India choose Dev Enterprise.
            </p>
            
            <div className="mt-4 p-5 bg-gray-50 border border-gray-200/60 rounded-2xl flex flex-col gap-3 shadow-3xs">
              <div className="flex items-center gap-2 text-[#0F294A]">
                <Flame className="h-4.5 w-4.5 text-[#0F294A] shrink-0" />
                <span className="font-display text-[10px] uppercase tracking-wider font-bold">
                  Thermal Seepage Barrier
                </span>
              </div>
              <p className="font-sans text-[11px] text-[#666666] leading-relaxed">
                The thick, high-density paper core acts as a natural heat insulator. Hot dishes stay hot, while the plate outer structure remains completely cool to touch.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Animated Cards Grid */}
          <motion.div 
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="flex flex-col gap-4 text-left p-6 border border-gray-200 bg-gray-50 hover:bg-white hover:border-[#0F294A]/30 transition-all duration-300 shadow-3xs hover:shadow-lg group relative rounded-2xl overflow-hidden"
              >
                {/* Micro outline background for hover state */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0F294A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="h-10 w-10 border border-gray-200 bg-white rounded-lg flex items-center justify-center text-[#0F294A] group-hover:bg-[#0F294A] group-hover:text-white transition-all duration-300">
                  <pillar.icon className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#0F294A] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-[11px] md:text-xs text-[#666666] leading-relaxed group-hover:text-gray-800 transition-colors">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}
