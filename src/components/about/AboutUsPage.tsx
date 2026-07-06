/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  Factory, 
  Layers, 
  Cpu, 
  Search, 
  Sparkles, 
  Send, 
  Truck, 
  Users, 
  Zap, 
  Phone, 
  MessageSquare, 
  ClipboardList, 
  CheckCircle2, 
  Plus, 
  Package, 
  Heart, 
  Clock 
} from 'lucide-react';
import Container from '../ui/Container';

interface AboutUsPageProps {
  onOpenEnquiry: (productName?: string) => void;
  onBackToHome: () => void;
}

// Simple internal animated counter component to keep things highly performant and clean
function StatCounter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (end === 0) return;

    // Standard total milliseconds duration
    const totalDuration = 1800;
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
  }, [value]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-150 rounded-2xl shadow-3xs hover:border-[#0F294A]/30 hover:shadow-sm transition-all duration-300">
      <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#0F294A] tracking-tight mb-2">
        {count}
        {suffix}
      </span>
      <span className="font-sans text-xs sm:text-sm font-semibold text-[#666666] uppercase tracking-wider text-center">
        {label}
      </span>
    </div>
  );
}

export default function AboutUsPage({ onOpenEnquiry, onBackToHome }: AboutUsPageProps) {
  // Fade and slide variants for framer-motion
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

  // Process timeline data
  const timelineSteps = [
    {
      step: '01',
      icon: Search,
      title: 'Raw Material Selection',
      desc: 'We source only certified 350-450 GSM virgin paperboard base. Every batch undergoes thickness, density, and safety vetting.',
      tag: 'Certified Base Core'
    },
    {
      step: '02',
      icon: Layers,
      title: 'Silver Sheet Lamination',
      desc: 'A premium 22-micron silver protective film is thermally bonded to the paperboard, creating a 100% moisture and oil barrier.',
      tag: 'Zero Sogginess Barrier'
    },
    {
      step: '03',
      icon: Cpu,
      title: 'Precision Manufacturing',
      desc: 'Automated high-pressure hydraulic stamping presses shape the tableware with structural rigidity under strict heat profiles.',
      tag: 'Perfect Stamping Precision'
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: 'Quality Inspection',
      desc: 'Inline sensors and physical stress tests verify oil resistance, rim strength, and lamination uniformity before packing.',
      tag: 'Defect-Free Inspection'
    },
    {
      step: '05',
      icon: Package,
      title: 'Hygienic Packaging',
      desc: 'Formed plates and bowls are immediately sealed in dust-proof shrink wrap inside a dust-controlled packaging zone.',
      tag: 'Sterilized Sleeves'
    },
    {
      step: '06',
      icon: Send,
      title: 'On-Time Dispatch',
      desc: 'Packaged stock is dispatched direct from our central NCR warehouse via premier logistics networks to any state across India.',
      tag: 'Direct Sourcing Fleet'
    }
  ];

  // Quality Assurance features
  const qaFeatures = [
    {
      icon: Layers,
      title: 'Strong Silver Sheet Finish',
      desc: 'Coated with a highly durable 22-micron silver sheet lamination. Offers a pristine reflective finish and flawless surface integrity.'
    },
    {
      icon: ShieldCheck,
      title: 'Food Serving Quality',
      desc: 'Certified non-toxic, inert chemical-safe finish that is safely graded for serving piping hot, acidic, or oily regional foods.'
    },
    {
      icon: Award,
      title: 'Durable Construction',
      desc: 'Engineered with a dense, heavyweight 350-450 GSM core that resists bending or collapse under full banquet meals.'
    },
    {
      icon: Factory,
      title: 'Reliable Manufacturing',
      desc: 'Automated hydraulic stamping ensures standardized plate profiles, deep walls, and reliable thickness margins across millions of units.'
    },
    {
      icon: CheckCircle2,
      title: 'Consistent Quality',
      desc: 'Strict inline audits remove micro-defects, ensuring that every sleeve you open maintains identical performance and finish.'
    },
    {
      icon: Package,
      title: 'Hygienic Packaging',
      desc: 'Sealed within sterile plastic sleeves directly after cooling. Guarantees dust-free, contaminant-free tableware upon arrival.'
    }
  ];

  // Values data
  const companyValues = [
    {
      icon: ShieldCheck,
      title: 'Absolute Food Safety',
      desc: 'We place hygienic compliance and non-toxic materials at the core of all lamination and production processes.'
    },
    {
      icon: Factory,
      title: 'Manufacturing Rigor',
      desc: 'Operating high-tonnage automated stamping presses to ensure standardized diameters, flat bases, and tight rims.'
    },
    {
      icon: Award,
      title: 'Uncompromised Value',
      desc: 'Delivering direct factory pricing to bypass middlemen, making top-tier silver dinnerware accessible to any food venture.'
    },
    {
      icon: Heart,
      title: 'Client Commitment',
      desc: 'Offering rapid bulk dispatch schedules and free sample packages to help business buyers source with absolute trust.'
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8F9FA] relative min-h-screen">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <Container className="relative z-10 pt-16">
        
        {/* Back Button & Page Header */}
        <div className="flex flex-col items-start gap-4 mb-12">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#666666] hover:text-[#0F294A] transition-colors group cursor-pointer bg-white px-4 py-2 border border-gray-200 rounded-lg shadow-3xs"
          >
            ← Back to Catalog
          </button>
          
          <div className="flex flex-col gap-3 text-left max-w-3xl">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Corporate Dossier
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
              About Dev Enterprise
            </h1>
            <div className="w-16 h-1 bg-[#0F294A] mt-1" />
            <p className="font-sans text-base sm:text-lg text-[#666666] leading-relaxed mt-2">
              Based in India’s National Capital Region, Dev Enterprise is a leading high-capacity manufacturer specializing in heavyweight, food-safe silver sheet coated paper plates and bowls.
            </p>
          </div>
        </div>

        {/* Section 1: Company Introduction */}
        <section className="bg-white border border-gray-150 p-8 sm:p-12 rounded-3xl shadow-3xs mb-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#0F294A] font-bold">
                The Heritage of Rigidity
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] leading-tight">
                Forging Reliable Tableware for India's High-Volume Dining
              </h2>
              <p className="font-sans text-sm text-[#666666] leading-relaxed">
                At Dev Enterprise, we understand that professional event caterers, sweet shops, and street vendors need disposable dinnerware that performs flawlessly under demanding conditions. Sogginess, leakage, or bending plates can ruin a carefully planned dining experience.
              </p>
              <p className="font-sans text-sm text-[#666666] leading-relaxed">
                Our NCR facility utilizes custom-built, high-tonnage automated stamping lines to bind food-safe silver laminated sheets with high-integrity wood fibers (350–450 GSM). By automating the entire lamination and press cycle, we guarantee uniform structural rigidity, perfect rim depths, and premium heat-reflective properties at direct manufacturer-to-buyer wholesale pricing.
              </p>
              
              <div className="p-5 bg-gray-50 border border-gray-150 rounded-2xl flex flex-col gap-3">
                <span className="font-display text-[10px] uppercase tracking-wider font-bold text-[#111111] flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#0F294A]" /> Established for Scale
                </span>
                <p className="font-sans text-[11px] text-[#666666] leading-relaxed">
                  We maintain a massive inventory of raw wood pulp and premium silver laminates in our warehouse to guarantee immediate dispatch and consistent stock availability, regardless of seasonal wedding spikes or high festival demands.
                </p>
              </div>
            </div>

            {/* Visual representation card */}
            <div className="relative border border-gray-150 p-8 bg-gray-50/50 rounded-3xl overflow-hidden flex flex-col gap-6 shadow-3xs">
              <div className="absolute top-0 right-0 h-40 w-40 bg-[#0F294A]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="h-10 w-10 bg-[#0F294A] text-white rounded-xl flex items-center justify-center font-display text-sm font-bold">
                DE
              </div>
              <h3 className="font-display text-lg font-bold text-[#111111] uppercase tracking-wider">
                Our Foundational Pillar
              </h3>
              
              <ul className="flex flex-col gap-4 font-sans text-xs text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 bg-white border border-gray-200 text-[#0F294A] rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-[#111111]">100% Manufacturer Direct:</strong> Sourced directly from our automated stamping lines in Delhi NCR. No distributors, no markups.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 bg-white border border-gray-200 text-[#0F294A] rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-[#111111]">High-GSM Density:</strong> Using dense, structural paper cores to support heavier meal courses with absolute grace.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 bg-white border border-gray-200 text-[#0F294A] rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-[#111111]">Sterile Automation:</strong> Sealed in heavy protective sleeves with zero physical contact post-shaping.
                  </div>
                </li>
              </ul>

              <button
                onClick={() => onOpenEnquiry('Corporate Sourcing Proposal')}
                className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-[#0F294A] hover:bg-[#07192E] text-white font-display text-[10px] uppercase tracking-widest font-extrabold rounded-xl transition-all cursor-pointer shadow-3xs"
              >
                <ClipboardList className="h-4 w-4" />
                Request Technical Data Sheet
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Mission, Vision & Values */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
            {/* Mission Card */}
            <div className="bg-white border border-gray-150 p-8 sm:p-10 rounded-3xl shadow-3xs hover:border-[#0F294A]/20 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 text-gray-50 group-hover:text-[#0F294A]/5 transition-colors duration-300">
                <Target className="h-32 w-32" />
              </div>
              <div className="h-12 w-12 bg-gray-50 border border-gray-150 text-[#0F294A] rounded-xl flex items-center justify-center shrink-0">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#111111]">
                Our Mission
              </h3>
              <p className="font-sans text-sm text-[#666666] leading-relaxed relative z-10">
                To design, engineer, and mass-manufacture the most rigid, food-safe, and moisture-resistant disposable dinnerware directly from our automated NCR presses. We empower culinary entrepreneurs, caterers, and families to serve regional food with absolute comfort, structural safety, and exceptional cost-effectiveness.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-gray-150 p-8 sm:p-10 rounded-3xl shadow-3xs hover:border-[#0F294A]/20 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 text-gray-50 group-hover:text-[#0F294A]/5 transition-colors duration-300">
                <Eye className="h-32 w-32" />
              </div>
              <div className="h-12 w-12 bg-gray-50 border border-gray-150 text-[#0F294A] rounded-xl flex items-center justify-center shrink-0">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#111111]">
                Our Vision
              </h3>
              <p className="font-sans text-sm text-[#666666] leading-relaxed relative z-10">
                To set the benchmark for high-rigidity disposable tableware in India. We aim to continually advance automated hot-stamping engineering, implement cleaner materials, and scale our regional distribution matrix to remain the most trusted manufacturer-direct partner for catering enterprises nationwide.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="bg-white border border-gray-150 p-8 sm:p-12 rounded-3xl shadow-3xs text-left">
            <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
              <span className="font-display text-[9px] uppercase tracking-[0.25em] text-[#666666] font-bold">
                Behavioral Guidelines
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-[#111111]">
                Our Core Values
              </h3>
              <div className="w-12 h-0.5 bg-[#0F294A] mt-1 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((val, idx) => (
                <div key={idx} className="flex flex-col gap-3 p-5 bg-gray-50 border border-gray-150 rounded-2xl hover:bg-white hover:border-[#0F294A]/30 transition-all duration-300 shadow-3xs group">
                  <div className="h-9 w-9 bg-white border border-gray-150 rounded-lg flex items-center justify-center text-[#0F294A] group-hover:bg-[#0F294A] group-hover:text-white transition-all duration-300">
                    <val.icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111]">
                    {val.title}
                  </h4>
                  <p className="font-sans text-[11px] text-[#666666] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Manufacturer Direct Advantage */}
        <section className="mb-20 text-left">
          <div className="flex flex-col items-center text-center gap-3 mb-12 max-w-2xl mx-auto">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Procurement Security
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
              The Manufacturer Direct Advantage
            </h2>
            <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
            <p className="font-sans text-sm text-[#666666] leading-relaxed">
              Bypassing middlemen doesn't just save you money — it guarantees strict quality control, uninterrupted supply lines, and dedicated client service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-3xs flex flex-col gap-4">
              <div className="h-10 w-10 bg-green-50 text-green-700 rounded-xl flex items-center justify-center">
                <Plus className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111]">
                Direct Price Efficiency
              </h3>
              <p className="font-sans text-xs text-[#666666] leading-relaxed">
                By purchasing straight from our Delhi NCR stamping lines, you eliminate the 15-25% markups charged by local distributors and wholesale traders. Ensure premium quality at the absolute best bottom-line.
              </p>
            </div>

            <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-3xs flex flex-col gap-4">
              <div className="h-10 w-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111]">
                Uninterrupted Bulk Supply
              </h3>
              <p className="font-sans text-xs text-[#666666] leading-relaxed">
                Retail stockists and party organizers often suffer from seasonal shortages. Since we control raw wood fiber procurement and press allocation, we guarantee reliable stock levels for weddings and high-volume catering.
              </p>
            </div>

            <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-3xs flex flex-col gap-4">
              <div className="h-10 w-10 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111]">
                Accountability & Safety
              </h3>
              <p className="font-sans text-xs text-[#666666] leading-relaxed">
                We are fully accountable for our laminates and base boards. We never substitute unvetted or non-food-safe chemicals. Your purchase is supported by direct corporate SLAs and a clear quality guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* TASK 2: MANUFACTURING PROCESS TIMELINE */}
        <section className="mb-20 py-16 bg-white border border-gray-150 rounded-3xl shadow-3xs relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#0F294A/0.01_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="relative z-10 px-6 sm:px-12">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center gap-3 mb-16 max-w-2xl mx-auto">
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
                Workflow Transparency
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
                The Manufacturing Process Timeline
              </h2>
              <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
              <p className="font-sans text-sm text-[#666666]">
                Explore how we turn raw wood-fiber cores and certified metalized films into extremely rigid, clean, and food-safe disposable tableware.
              </p>
            </div>

            {/* Vertical/Horizontal Responsive Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.step}
                    className="flex flex-col items-start text-left bg-gray-50 border border-gray-150 p-6 shadow-3xs relative group hover:border-[#0F294A]/30 hover:bg-white transition-all duration-300 rounded-2xl overflow-hidden"
                  >
                    {/* Top Flow connector (desktop/tablet only) */}
                    {index < timelineSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 p-1 rounded-full text-[#0F294A]">
                        <Plus className="h-3 w-3 rotate-45" />
                      </div>
                    )}

                    {/* Step badge */}
                    <div className="flex items-center justify-between w-full mb-4">
                      <span className="font-mono text-2xl font-bold text-gray-300 group-hover:text-[#0F294A] transition-colors">
                        {step.step}
                      </span>
                      <div className="h-10 w-10 border border-gray-200 bg-white rounded-xl flex items-center justify-center text-[#0F294A] group-hover:bg-[#0F294A] group-hover:text-white transition-all duration-300 shadow-3xs">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-1.5">
                      <span className="font-display text-[8px] uppercase tracking-wider text-[#666666] font-extrabold bg-white px-2 py-0.5 border border-gray-150 rounded-md self-start">
                        {step.tag}
                      </span>
                      <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[#111111] group-hover:text-[#0F294A] transition-colors">
                        {step.title}
                      </h3>
                      <p className="font-sans text-[11px] sm:text-xs text-[#666666] leading-relaxed group-hover:text-gray-800 transition-colors mt-1">
                        {step.desc}
                      </p>
                    </div>

                    {/* Subtle lower accent line */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0F294A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TASK 3: QUALITY ASSURANCE DEDICATED SECTION */}
        <section className="mb-20">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-3 mb-12 max-w-2xl mx-auto">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Uncompromising Standards
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
              Dedicated Quality Assurance
            </h2>
            <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
            <p className="font-sans text-sm text-[#666666] leading-relaxed">
              Every single product variant leaving our NCR lines passes a rigorous inspection checklist. We never compromise on rigidity, safety, or moisture integrity.
            </p>
          </div>

          {/* QA Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {qaFeatures.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-150 p-6 rounded-2xl shadow-3xs flex flex-col gap-4 hover:border-[#0F294A]/30 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="h-10 w-10 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-center text-[#0F294A] group-hover:bg-[#0F294A] group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#0F294A] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs text-[#666666] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TASK 5: FACTORY STATS */}
        <section className="mb-20 bg-white border border-gray-150 p-8 sm:p-12 rounded-3xl shadow-3xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Stats copy */}
            <div className="lg:col-span-4 flex flex-col gap-4 text-left">
              <span className="font-display text-[9px] uppercase tracking-[0.25em] text-[#666666] font-bold">
                Capacity Metrics
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] leading-tight">
                Our Scale In Numbers
              </h2>
              <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
              <p className="font-sans text-xs sm:text-sm text-[#666666] leading-relaxed mt-2">
                We design and stamp high-volume dinnerware batches to satisfy bulk distributors, sweet shop networks, and caterers across multiple Indian states.
              </p>
            </div>

            {/* Counters grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCounter value={10} suffix="+" label="Product Variants" />
              <StatCounter value={1000} suffix="+" label="Happy Customers" />
              <StatCounter value={100} suffix="% Direct" label="Bulk Supply Available" />
              <StatCounter value={24} suffix=" Hr" label="Fast Order Processing" />
            </div>
          </div>
        </section>

        {/* TASK 6: BULK ORDER CTA */}
        <section className="relative border border-gray-200 bg-white p-8 md:p-16 text-center max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-3xs">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#0F294A]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center gap-6">
            
            {/* Icon Accent */}
            <div className="h-12 w-12 border border-gray-150 bg-gray-50 rounded-2xl flex items-center justify-center text-[#0F294A] mb-2 animate-pulse">
              <Sparkles className="h-5 w-5" />
            </div>

            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Event Planner & Restaurant Solutions
            </span>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111111] max-w-2xl leading-tight">
              Consistent Stamping for Catering & Retail Ventures
            </h2>

            <p className="font-sans text-sm text-[#666666] max-w-lg leading-relaxed">
              Join thousands of restaurants, sweet shops, and event caterers across India who trust Dev Enterprise for heavy-duty silver dinnerware. Access affordable factory-direct pricing now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 justify-center items-center">
              <button
                onClick={() => onOpenEnquiry('B2B Bulk Sourcing Quotation')}
                className="w-full sm:w-auto font-display text-xs uppercase tracking-wider bg-[#0F294A] hover:bg-[#07192E] text-white font-extrabold px-8 py-4.5 cursor-pointer rounded-xl transition-all duration-300 shadow-3xs hover:-translate-y-0.5 active:translate-y-0"
              >
                Request Quote
              </button>
              <button
                onClick={() => onOpenEnquiry('General Business Enquiry')}
                className="w-full sm:w-auto font-display text-xs uppercase tracking-wider text-[#0F294A] border border-[#0F294A] hover:bg-[#0F294A] hover:text-white px-8 py-4.5 cursor-pointer bg-white rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Us
              </button>
              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto font-display text-xs uppercase tracking-wider text-[#666666] border border-gray-200 hover:border-black px-8 py-4.5 cursor-pointer bg-white rounded-xl transition-all duration-300 hover:bg-gray-50 flex items-center justify-center gap-2 font-bold"
              >
                <Phone className="h-3.5 w-3.5 text-[#0F294A]" />
                Call Now
              </a>
            </div>

            {/* Direct delivery text */}
            <p className="font-sans text-[10px] text-gray-400 uppercase tracking-widest mt-6">
              ✔ secure transaction • ✔ full batch inspection guarantee • ✔ direct factory assistance
            </p>
          </div>
        </section>

      </Container>
    </div>
  );
}
