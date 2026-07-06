/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Factory, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Truck, 
  Scissors, 
  Eye, 
  Box, 
  Leaf, 
  Utensils, 
  PartyPopper, 
  Store, 
  Globe, 
  Award, 
  Sparkles, 
  Zap, 
  Users, 
  Shield, 
  HelpCircle
} from 'lucide-react';
import Container from '../ui/Container';
import Breadcrumbs from '../ui/Breadcrumbs';

interface ManufacturingPageProps {
  onOpenEnquiry: (productName?: string) => void;
  onNavigate: (view: any) => void;
}

export default function ManufacturingPage({ onOpenEnquiry, onNavigate }: ManufacturingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Home', onClick: () => onNavigate('home') },
    { label: 'Manufacturing', active: true }
  ];

  // SECTION 2 - OUR PROCESS Steps
  const processSteps = [
    {
      step: 'Step 1',
      title: 'Raw Material Selection',
      icon: Leaf,
      desc: 'We source only 100% pure virgin wood pulp paperboard from certified sustainable mills. This raw material provides the ultra-dense fibrous core essential for structural rigidity without utilizing any harmful chemical recycled additives.',
    },
    {
      step: 'Step 2',
      title: 'Silver Sheet Lamination',
      icon: Layers,
      desc: 'Using advanced high-temperature thermal bonding, we fuse a food-grade, moisture-proof 22-micron silver protective sheet to the base core. This creates an impermeable, heat-resistant barrier against water, hot syrups, and heavy oils.',
    },
    {
      step: 'Step 3',
      title: 'Precision Cutting & Forming',
      icon: Scissors,
      desc: 'The laminated reels are fed into our automated hydraulic stamping machines. Applying up to 60 metric tons of consistent force at precise thermoforming temperatures (140°C - 160°C), we shape high-rim walls and crisp compartments.',
    },
    {
      step: 'Step 4',
      title: 'Quality Inspection',
      icon: Eye,
      desc: 'Every batch is subjected to micro-tolerance testing. Our trained QA professionals measure lateral flexural rim strength, thermal seal integrity, and look for surface minor blemishes to ensure absolute performance standards.',
    },
    {
      step: 'Step 5',
      title: 'Clean Packaging',
      icon: Box,
      desc: 'Approved dinnerware is mechanically counted and automatically heat-shrink wrapped inside moisture-tight plastic sleeves. This process takes place with zero physical touch to maintain maximum factory sterilization.',
    },
    {
      step: 'Step 6',
      title: 'Dispatch',
      icon: Truck,
      desc: 'Packed sleeves are securely layered in high-durability 5-ply corrugated outer boxes. From our central New Delhi NCR terminal, we coordinate next-day shipping schedules across major national transit loops.',
    }
  ];

  // SECTION 3 - QUALITY STANDARDS Cards
  const qualityCards = [
    {
      title: 'Food Serving Quality',
      icon: Utensils,
      desc: 'Certified 100% food-contact safe. Totally non-toxic and odor-free, preventing any flavor transfer during serving.'
    },
    {
      title: 'Reliable Manufacturing',
      icon: Factory,
      desc: 'Driven by automated constant-pressure hydraulic cylinders to eliminate natural structural flaws or structural inconsistencies.'
    },
    {
      title: 'Strong Silver Sheet Finish',
      icon: Layers,
      desc: 'Premium glossy silver film that resists moisture seeping, high temperatures, and grease absorption without peeling.'
    },
    {
      title: 'Quality Inspection',
      icon: ShieldCheck,
      desc: 'Every production batch undergoes strict stress-testing to guarantee reliable load-bearing capabilities on plates.'
    },
    {
      title: 'Clean Packaging',
      icon: Box,
      desc: 'Automated high-speed shrink wrapping ensures pristine hygiene is preserved from our stamping molds to the table.'
    },
    {
      title: 'Consistent Production',
      icon: Clock,
      desc: 'High daily output ensures we fulfill long-term enterprise procurement agreements without supply-chain disruptions.'
    }
  ];

  // SECTION 5 - INDUSTRIES WE SUPPLY
  const industryCards = [
    {
      title: 'Restaurants',
      icon: Utensils,
      desc: 'Reliable, premium-looking plates for fast-casual establishments, sweet shops, and family dining hubs.',
      badge: 'Daily Use Essentials'
    },
    {
      title: 'Catering',
      icon: Users,
      desc: 'Heavy-duty 10" and 12" buffet thali plates designed to withstand heavy multi-course catering portions.',
      badge: 'High Rigidity'
    },
    {
      title: 'Events',
      icon: PartyPopper,
      desc: 'Elegant, spill-proof silver plates and bowls ideal for corporate banquets, functions, and grand celebrations.',
      badge: 'Elegant Styling'
    },
    {
      title: 'Street Food',
      icon: Store,
      desc: 'Fast, budget-friendly, and lightweight deep-draw chat plates and curry bowls for high-volume quick service.',
      badge: 'Bulk Value'
    },
    {
      title: 'Retail',
      icon: Globe,
      desc: 'Convenient retail counter packs designed for superstores, distributors, and general merchant networks.',
      badge: 'Ready Consumer Packs'
    },
    {
      title: 'Wholesale',
      icon: Box,
      desc: 'Standard Master Carton quantities sold at direct-from-factory rates to local trade partners and distributors.',
      badge: 'Volume Pricing'
    }
  ];

  // SECTION 7 - FAQS
  const faqs = [
    {
      q: 'How are your products manufactured?',
      a: 'Our products are manufactured using state-of-the-art automatic hydraulic thermo-stamping presses. We fuse a food-grade silver sheet lamination to high-GSM virgin paperboard reels using heat and high tonnage pressure. This creates rigid, perfectly shaped, moisture-proof plates with neat rim curls and zero manual touch during production.'
    },
    {
      q: 'Are the products suitable for food serving?',
      a: 'Yes, absolutely. We use 100% pure virgin paperboard fibers and certified food-contact safe, BPA-free thermal silver laminations. The materials contain zero toxic chemicals or recycled post-consumer waste, ensuring they are totally hygienic and safe for hot, liquid, or oily food items.'
    },
    {
      q: 'Can you supply bulk quantities?',
      a: 'Yes, bulk scale is our core specialty. Our plant in Delhi NCR features automated manufacturing lines with a combined production capacity exceeding 100,000 units daily. We support ongoing monthly supply contracts, container-load sourcing, and custom packaging sleeves for commercial distributors.'
    },
    {
      q: 'How do I request a quotation?',
      a: 'Requesting a quote is easy and fast. You can click any of our "Request Quote" buttons to launch the digital Enquiry desk, or reach us directly at sales@deventerprise.in / +91 98765 43210. Our sales staff typically delivers a customized technical and pricing proposal within 12 hours.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F8F9FA] relative min-h-screen">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <Container className="relative z-10 pt-16 text-left">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* SECTION 1 — HERO */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero text */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#0F294A] font-extrabold bg-[#E6EEF8] px-3 py-1 rounded-full self-start">
                Industrial Capacity
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
                Manufacturing Excellence
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#555555] leading-relaxed">
                Learn how Dev Enterprise manufactures high-quality disposable paper products with a focus on consistency, hygiene and reliability.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <button
                  onClick={() => onOpenEnquiry('Factory Sourcing Inquiry')}
                  className="px-6 py-3 bg-[#0F294A] hover:bg-[#07192E] text-white font-display text-[10px] uppercase tracking-widest font-extrabold rounded-lg transition-all shadow-3xs"
                >
                  Request Plant Info
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 border border-gray-300 hover:border-black text-[#111111] font-display text-[10px] uppercase tracking-widest font-bold bg-white rounded-lg transition-all"
                >
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Industrial Photo Placeholder - Styled beautifully without fake illustrations */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl border border-gray-200 bg-white shadow-xs overflow-hidden group flex flex-col justify-between p-8">
                <div className="absolute inset-0 bg-linear-to-b from-[#F0F4FA]/60 via-transparent to-white pointer-events-none" />
                
                {/* Visual camera/industrial target markers to reflect professional photographic intent */}
                <div className="flex justify-between items-start z-10">
                  <div className="h-6 w-6 border-t border-l border-gray-300 rounded-tl" />
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">STAMPING_FACILITY_CAM_01</span>
                  <div className="h-6 w-6 border-t border-r border-gray-300 rounded-tr" />
                </div>

                {/* Empty Placeholder message stating future real asset */}
                <div className="my-auto flex flex-col items-center text-center gap-4 py-8 z-10">
                  <div className="h-14 w-14 rounded-2xl bg-[#F0F4FA] text-[#0F294A] flex items-center justify-center border border-gray-100">
                    <Factory className="h-6 w-6" />
                  </div>
                  <div className="max-w-sm">
                    <span className="block font-display text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                      Factory Site Photograph
                    </span>
                    <p className="font-sans text-[11px] text-[#666666] leading-relaxed">
                      This placement holder is reserved for future high-resolution photography of our automated 60-ton hydraulic stamping line operating in Delhi NCR.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-end z-10">
                  <div className="h-6 w-6 border-b border-l border-gray-300 rounded-bl" />
                  <span className="font-mono text-[8px] text-gray-400">OKHLA PHASE-III TERMINAL • 28.5355° N, 77.2639° E</span>
                  <div className="h-6 w-6 border-b border-r border-gray-300 rounded-br" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — OUR PROCESS */}
        <section className="mb-24">
          <div className="flex flex-col items-center text-center gap-3 mb-16 max-w-2xl mx-auto">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Traceability Dossier
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
              Our Manufacturing Process
            </h2>
            <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
            <p className="font-sans text-xs sm:text-sm text-[#666666] mt-2">
              From pristine wood pulp fibers to localized commercial delivery, we track every parameter of our supply pipeline.
            </p>
          </div>

          {/* Timeline Structure */}
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop timeline center line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gray-200 -translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {processSteps.map((item, idx) => {
                const IconComponent = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`flex flex-col md:flex-row relative items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Circle Bullet Indicator */}
                    <div className="absolute left-8 md:left-1/2 h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#0F294A] shadow-xs -translate-x-1/2 z-10">
                      <IconComponent className="h-4 w-4" />
                    </div>

                    {/* Left/Right space for text alignment */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 text-left">
                      <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-3xs hover:shadow-xs transition-all duration-300">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#0F294A] font-extrabold block mb-1">
                          {item.step}
                        </span>
                        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111] mb-2">
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs text-[#666666] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Empty block to preserve balanced grids on large screens */}
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3 — QUALITY STANDARDS */}
        <section className="mb-24">
          <div className="flex flex-col items-center text-center gap-3 mb-16 max-w-2xl mx-auto">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Production Protocols
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
              Quality Standards
            </h2>
            <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
            <p className="font-sans text-xs sm:text-sm text-[#666666] mt-2">
              Our stamping plant adheres to strict material tolerances to ensure safe and dependable paper tableware.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 bg-white border border-gray-150 rounded-2xl shadow-3xs hover:border-[#0F294A]/25 transition-all duration-300 group text-left"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#F0F4FA] group-hover:bg-[#0F294A] group-hover:text-white transition-colors duration-300 text-[#0F294A] flex items-center justify-center border border-gray-100 mb-4">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs text-[#666666] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4 — WHY OUR PROCESS MATTERS */}
        <section className="mb-24">
          <div className="bg-[#0F294A] text-white p-8 sm:p-12 md:p-16 rounded-3xl relative overflow-hidden shadow-xs">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 flex flex-col gap-4 text-left">
                <span className="font-display text-[9px] uppercase tracking-widest text-blue-200 font-bold block">
                  Material Performance
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Why Our Process Matters
                </h2>
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Unlike traditional manual presses that result in uneven thickness and weak structural folds, our continuous thermoforming automation applies a precise balance of heavy physical compression and temperature control.
                </p>
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                  This guarantees high-strength paper tableware that can sustain oily dishes, hot gravy portions, and high-frequency catering environments without collapsing.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-3">
                    <Award className="h-4 w-4" />
                  </div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Better Durability
                  </h4>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed">
                    High tonnage compression yields dense, flat bases and perfectly curved rim walls that withstand significant culinary loads without buckling.
                  </p>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-3">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Cleaner Presentation
                  </h4>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed">
                    Glossy thermal silver linings offer an attractive, crease-free reflective surface that enhances visual hygiene and general aesthetic presentation.
                  </p>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-3">
                    <Zap className="h-4 w-4" />
                  </div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Reliable Supply
                  </h4>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed">
                    Continuous automated capacity lets us maintain large safety stocks, guaranteeing that contract shipments arrive on schedule without exceptions.
                  </p>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-3">
                    <Utensils className="h-4 w-4" />
                  </div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Commercial Suitability
                  </h4>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed">
                    Specially constructed to handle the high density and humidity demands of busy restaurant networks, wedding banquets, and caterers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — INDUSTRIES WE SUPPLY */}
        <section className="mb-24">
          <div className="flex flex-col items-center text-center gap-3 mb-16 max-w-2xl mx-auto">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Market Operations
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
              Industries We Supply
            </h2>
            <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
            <p className="font-sans text-xs sm:text-sm text-[#666666] mt-2">
              Supplying tailored paper products and bulk container-load shipping to diverse culinary markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryCards.map((ind, idx) => {
              const IconComponent = ind.icon;
              return (
                <div key={idx} className="bg-white border border-gray-150 p-6 sm:p-8 rounded-2xl shadow-3xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between items-start text-left">
                  <div className="w-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-10 w-10 rounded-xl bg-gray-50 border border-gray-150 flex items-center justify-center text-[#0F294A]">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="font-sans text-[9px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border border-gray-200/60 px-2 py-0.5 rounded">
                        {ind.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111] mb-2">
                      {ind.title}
                    </h3>
                    <p className="font-sans text-xs text-[#666666] leading-relaxed mb-6">
                      {ind.desc}
                    </p>
                  </div>
                  <button 
                    onClick={() => onOpenEnquiry(`${ind.title} Industry Custom Order Proposal`)}
                    className="inline-flex items-center gap-1.5 font-display text-[9px] uppercase tracking-widest font-extrabold text-[#0F294A] hover:text-[#07192E] transition-colors bg-transparent border-none p-0 cursor-pointer"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 6 — BULK CAPABILITIES */}
        <section className="mb-24">
          <div className="bg-white border border-gray-150 p-8 sm:p-12 md:p-16 rounded-3xl shadow-3xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Side */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#0F294A] font-extrabold bg-[#E6EEF8] px-3 py-1 rounded-full self-start">
                  Commercial Sourcing
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] leading-tight">
                  High-Capacity Sourcing & Customization
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#666666] leading-relaxed">
                  We specialize in bulk manufacturing, reliable supply, fast order processing, and custom order support. Whether you require standard wholesale master cartons or specialized corporate branding markings, we accommodate custom specifications seamlessly.
                </p>

                {/* Sub-grid of key parameters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-150">
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-xs font-bold text-[#111111] uppercase tracking-wide">Bulk Production</h4>
                      <p className="font-sans text-[11px] text-gray-500 leading-normal">Capacity exceeding 100,000 plates every 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-xs font-bold text-[#111111] uppercase tracking-wide">Reliable Supply</h4>
                      <p className="font-sans text-[11px] text-gray-500 leading-normal">Dedicated raw material reserves ensuring steady shipping.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-xs font-bold text-[#111111] uppercase tracking-wide">Fast Order Processing</h4>
                      <p className="font-sans text-[11px] text-gray-500 leading-normal">Next-day local dispatch with direct-freight carrier networks.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-xs font-bold text-[#111111] uppercase tracking-wide">Custom Order Support</h4>
                      <p className="font-sans text-[11px] text-gray-500 leading-normal">Bespoke paper core GSM settings and sleeve wrapping sizes.</p>
                    </div>
                  </div>
                </div>

                {/* Action CTA buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => onOpenEnquiry('B2B Bulk Sourcing Proposal Request')}
                    className="px-6 py-3.5 bg-[#0F294A] hover:bg-[#07192E] text-white font-display text-[10px] uppercase tracking-widest font-extrabold rounded-lg transition-colors shadow-3xs"
                  >
                    Request Quote
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3.5 border border-gray-300 hover:border-black text-[#111111] font-display text-[10px] uppercase tracking-widest font-bold bg-white rounded-lg transition-colors"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>

              {/* Badging / Value Proposition Grid (5 columns) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 border border-gray-150 rounded-2xl bg-gray-50/50 text-center flex flex-col items-center justify-center">
                  <span className="font-display text-2xl font-black text-[#0F294A]">₹0.45</span>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-gray-400 font-bold block mt-1">Starting Unit Rate</span>
                </div>
                <div className="p-5 border border-gray-150 rounded-2xl bg-gray-50/50 text-center flex flex-col items-center justify-center">
                  <span className="font-display text-2xl font-black text-[#0F294A]">10K+</span>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-gray-400 font-bold block mt-1">Wholesale MOQ</span>
                </div>
                <div className="p-5 border border-gray-150 rounded-2xl bg-gray-50/50 text-center flex flex-col items-center justify-center col-span-2">
                  <span className="font-display text-lg font-extrabold text-[#111111] uppercase tracking-wider">Delhi NCR Facility</span>
                  <span className="font-sans text-[9px] uppercase tracking-wider text-gray-400 font-bold block mt-1">Direct Road Freight Terminal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — FAQ */}
        <section className="mb-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Factory Q&A Helpdesk
            </span>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#111111]">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-150 rounded-xl overflow-hidden shadow-3xs transition-all duration-200 hover:border-gray-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-[#111111]">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-[#0F294A] shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 pt-1 border-t border-gray-100">
                          <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </Container>
    </div>
  );
}
