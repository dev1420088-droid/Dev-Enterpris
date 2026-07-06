/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Sparkles, 
  Award, 
  Utensils, 
  Coffee, 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  Package, 
  Phone 
} from 'lucide-react';
import Container from '../ui/Container';
import Breadcrumbs from '../ui/Breadcrumbs';

interface IndustriesPageProps {
  onOpenEnquiry: (productName?: string) => void;
  onNavigate: (view: any) => void;
}

export default function IndustriesPage({ onOpenEnquiry, onNavigate }: IndustriesPageProps) {
  const breadcrumbItems = [
    { label: 'Home', onClick: () => onNavigate('home') },
    { label: 'Industries We Serve', active: true }
  ];

  const industries = [
    {
      icon: Utensils,
      title: 'Catering & Banquets',
      subtitle: 'Robust tableware for wedding catering, events, and functions',
      desc: 'High-volume catering demands plates that maintain absolute rigidity under heavy multi-course Indian meals. Our premium 10" and 12" thali plates are laminated with a moisture-proof silver film to ensure curry gravies never seep through or cause plates to bend.',
      specs: ['High-GSM core (400-450)', 'Deep rim wall containment', 'Seepage-free thermal seal'],
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: Coffee,
      title: 'Sweet Shops & Halwais',
      subtitle: 'Disposable bowls and chat plates with heat reflective properties',
      desc: 'Sweet shop networks across Northern India rely on our deep-draw paper bowls and 6" - 7" snack plates to serve hot syrupy sweets like gulab jamuns, rasgullas, and oily street food like samosas, chat, and chole bhature.',
      specs: ['Hot syrup oil resistance', 'Deep structural draw bowls', 'Compact easy-stack profiles'],
      image: 'https://images.unsplash.com/photo-1610832958506-ee5633619144?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: Users,
      title: 'Street Food & Quick Service',
      subtitle: 'High-speed, affordable, and durable quick-serve essentials',
      desc: 'For busy street food vendors, fast turnaround and bottom-line economics are vital. We supply highly durable, affordable silver plates in bulk quantities, delivering direct factory pricing with fast next-day dispatch across Delhi NCR.',
      specs: ['Manufacturer-direct pricing', 'High-speed packaging counts', 'Bulk stock availability'],
      image: 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: Building,
      title: 'Corporate Cafeterias',
      subtitle: 'Hygienic, certified food-contact safe office dining solutions',
      desc: 'We partner with corporate catering agencies and office canteens to provide hygienic, non-toxic disposable plates. Our automated production ensures zero-physical-contact packaging, maintaining sterile conditions from manufacturing to canteen desks.',
      specs: ['Hygienic sleeve-wrapping', '100% Food-Contact safe cert', 'Consistent monthly supply contracts'],
      image: 'https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8F9FA] relative min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <Container className="relative z-10 pt-16 text-left">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl mb-16">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
            Target Industry Applications
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
            Industries We Serve
          </h1>
          <div className="w-16 h-1 bg-[#0F294A] mt-1" />
          <p className="font-sans text-base sm:text-lg text-[#666666] leading-relaxed mt-2">
            Tailoring plate density, lamination coatings, and shipping rates to support commercial kitchens, sweet shop chains, catering professionals, and retail distributors throughout India.
          </p>
        </div>

        {/* Grid of Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div key={idx} className="bg-white border border-gray-150 rounded-3xl overflow-hidden shadow-3xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Photo or Clean Image Placeholder */}
                  <div className="aspect-[2.2/1] relative bg-gray-100 overflow-hidden">
                    <img 
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-2.5 border border-gray-200 rounded-lg text-[#0F294A]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="p-8">
                    <h2 className="font-display text-lg font-bold uppercase tracking-wider text-[#111111] mb-1">
                      {ind.title}
                    </h2>
                    <span className="block font-sans text-xs text-gray-400 font-medium mb-4">
                      {ind.subtitle}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-[#666666] leading-relaxed mb-6">
                      {ind.desc}
                    </p>

                    <div className="pt-6 border-t border-gray-150">
                      <span className="font-sans text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-3">Key Performance Standards:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {ind.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2 text-[#666666] font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-600 shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gray-50 border-t border-gray-150 flex items-center justify-between">
                  <span className="font-sans text-[10px] text-gray-500 font-semibold uppercase tracking-wider">NCR Stamping Division</span>
                  <button
                    onClick={() => onOpenEnquiry(`${ind.title} Industry Custom Sourcing`)}
                    className="inline-flex items-center gap-1 text-xs font-display font-bold uppercase tracking-widest text-[#0F294A] hover:text-[#07192E] transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Solutions CTA */}
        <div className="bg-[#0F294A] text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-xs">
          <div className="max-w-xl">
            <span className="font-display text-[9px] uppercase tracking-widest text-blue-200 font-bold block mb-2">B2B Customized Stamping</span>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-2">
              Have unique requirements or need customized packaging count?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
              We can configure custom outer carton markings, specify precise GSM core ratios, or handle bespoke multi-size packaging sleeves to align perfectly with your retail distribution matrix.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('B2B Custom Specifications Inquiry')}
            className="px-6 py-4 bg-white hover:bg-gray-100 text-[#0F294A] font-display text-[10px] uppercase tracking-widest font-extrabold rounded-xl transition-colors shrink-0"
          >
            Discuss Custom Order
          </button>
        </div>

      </Container>
    </div>
  );
}
