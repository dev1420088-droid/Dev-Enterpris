/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Shield, Layers, Award, Sparkles, Facebook, Instagram, Linkedin, Youtube, MessageSquare, Clock } from 'lucide-react';
import Container from '../ui/Container';

interface FooterProps {
  onOpenEnquiry: (productName?: string) => void;
  onViewChange: (view: any) => void;
}

export default function Footer({ onOpenEnquiry, onViewChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent, view: string) => {
    e.preventDefault();
    onViewChange(view);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const qualityStandards = [
    { icon: Shield, title: 'Food-Safe Materials', desc: '100% non-toxic, virgin wood pulp core' },
    { icon: Layers, title: 'Seamless Lamination', desc: 'Impervious barrier against wet curries & oils' },
    { icon: Award, title: 'Structural Rigidity', desc: 'High-GSM board that refuses to bend under weight' },
    { icon: Sparkles, title: 'Best Value Lamination', desc: 'Clean, reliable silver lining for affordable food service' }
  ];

  return (
    <footer className="bg-white text-gray-650 border-t border-gray-150 pt-16 pb-10 relative overflow-hidden" aria-label="Global Footer">
      {/* Absolute subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <Container className="relative z-10">
        
        {/* Core Quality Highlights Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 mb-12 border-b border-gray-200/85">
          {qualityStandards.map((item, index) => (
            <div key={index} className="flex gap-3.5 text-left">
              <div className="h-9 w-9 shrink-0 border border-gray-200 bg-[#F8F9FA] rounded-xl flex items-center justify-center text-[#0F294A]">
                <item.icon className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111] leading-tight mb-1">
                  {item.title}
                </h4>
                <p className="font-sans text-[11px] text-[#666666] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Master Navigation & Link Directories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12 mb-8 border-b border-gray-200/85">
          
          {/* Brand Presentation & Socials (4 columns) */}
          <div className="md:col-span-4 flex flex-col gap-5 text-left">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 border border-[#0F294A] flex items-center justify-center bg-[#0F294A] rounded-lg">
                <span className="font-display text-xs font-bold text-white tracking-tighter">DE</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs font-black uppercase tracking-[0.2em] text-[#111111]">
                  Dev Enterprise
                </span>
                <span className="font-sans text-[8px] uppercase tracking-[0.12em] text-[#666666] mt-0.5 font-bold">
                  Silver Dinnerware Factory
                </span>
              </div>
            </div>
            
            <p className="font-sans text-[11px] text-[#666666] leading-relaxed max-w-sm">
              Established in New Delhi, Dev Enterprise is a high-capacity manufacturer of heavyweight silver-coated paper plates and bowls. We deliver heavy-duty structural performance, seepage-free seals, and excellent value with affordable manufacturer-direct pricing.
            </p>

            {/* Social Icons Section */}
            <div className="flex flex-col gap-2.5">
              <span className="font-display text-[8px] uppercase tracking-widest text-[#111111] font-bold">
                Follow Sourcing Desk
              </span>
              <div className="flex gap-2">
                <a href="#" aria-label="Facebook Profile" className="h-7 w-7 border border-gray-200 hover:border-[#0F294A] hover:bg-[#0F294A] hover:text-white flex items-center justify-center text-gray-500 rounded-lg transition-all">
                  <Facebook className="h-3 w-3" />
                </a>
                <a href="#" aria-label="Instagram Profile" className="h-7 w-7 border border-gray-200 hover:border-[#0F294A] hover:bg-[#0F294A] hover:text-white flex items-center justify-center text-gray-500 rounded-lg transition-all">
                  <Instagram className="h-3 w-3" />
                </a>
                <a href="#" aria-label="LinkedIn Profile" className="h-7 w-7 border border-gray-200 hover:border-[#0F294A] hover:bg-[#0F294A] hover:text-white flex items-center justify-center text-gray-500 rounded-lg transition-all">
                  <Linkedin className="h-3 w-3" />
                </a>
                <a href="#" aria-label="YouTube Channel" className="h-7 w-7 border border-gray-200 hover:border-[#0F294A] hover:bg-[#0F294A] hover:text-white flex items-center justify-center text-gray-500 rounded-lg transition-all">
                  <Youtube className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Company Links (2 columns) */}
          <div className="md:col-span-2 flex flex-col gap-3 text-left">
            <h5 className="font-display text-[9px] uppercase tracking-widest text-[#111111] font-bold pb-1 border-b border-gray-100">
              Company
            </h5>
            <ul className="flex flex-col gap-2 font-sans text-[11px] text-[#666666]">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-[#0F294A] transition-colors font-medium">About Us</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'manufacturing')} className="hover:text-[#0F294A] transition-colors font-medium">NCR Facility</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-[#0F294A] transition-colors font-medium">Quality Assurance</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-[#0F294A] transition-colors font-medium">CSR Compliance</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-[#0F294A] transition-colors font-medium">Career Opportunities</a></li>
            </ul>
          </div>

          {/* Column 2: Products Links (2 columns) */}
          <div className="md:col-span-2 flex flex-col gap-3 text-left">
            <h5 className="font-display text-[9px] uppercase tracking-widest text-[#111111] font-bold pb-1 border-b border-gray-100">
              Products
            </h5>
            <ul className="flex flex-col gap-2 font-sans text-[11px] text-[#666666]">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'products')} className="hover:text-[#0F294A] transition-colors font-medium">6" Silver Paper Plate</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'products')} className="hover:text-[#0F294A] transition-colors font-medium">7" Silver Paper Plate</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'products')} className="hover:text-[#0F294A] transition-colors font-medium">10" Dinner Plate</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'products')} className="hover:text-[#0F294A] transition-colors font-medium">Compartment Plate</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'products')} className="hover:text-[#0F294A] transition-colors font-medium">Disposable Paper Bowl</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links (2 columns) */}
          <div className="md:col-span-2 flex flex-col gap-3 text-left">
            <h5 className="font-display text-[9px] uppercase tracking-widest text-[#111111] font-bold pb-1 border-b border-gray-100">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-2 font-sans text-[11px] text-[#666666]">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'products')} className="hover:text-[#0F294A] transition-colors font-medium">View Catalog</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'manufacturing')} className="hover:text-[#0F294A] transition-colors font-medium">Technical Specs</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'industries')} className="hover:text-[#0F294A] transition-colors font-medium">Why Choose Us</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'bulk-orders')} className="hover:text-[#0F294A] transition-colors font-medium">Bulk Orders</a></li>
              <li><button onClick={() => onOpenEnquiry('Free Premium Sample Pack')} className="text-left hover:text-[#0F294A] transition-colors bg-transparent border-none p-0 cursor-pointer font-medium">Request Samples</button></li>
            </ul>
          </div>

          {/* Column 4: Contact & Phone/WhatsApp (2 columns) */}
          <div className="md:col-span-2 flex flex-col gap-3.5 text-left font-sans text-[11px] text-[#666666]">
            <h5 className="font-display text-[9px] uppercase tracking-widest text-[#111111] font-bold pb-1 border-b border-gray-100">
              Contact Us
            </h5>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#0F294A] shrink-0 mt-0.5" />
                <span className="leading-snug">New Delhi, NCR, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#0F294A] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#0F294A] transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#0F294A] shrink-0" />
                <span className="truncate">sales@deventerprise.in</span>
              </div>
              <div className="flex items-start gap-1.5 text-gray-400 mt-1">
                <Clock className="h-3.5 w-3.5 text-gray-400 shrink-0 mt-0.5" />
                <span>Mon - Sat:<br/>9:00 AM - 7:00 PM</span>
              </div>
            </div>
            
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry('Direct Website Footer Quick Request')}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-[#0F294A] hover:bg-[#07192E] text-white font-display text-[8px] uppercase tracking-wider font-bold rounded-lg cursor-pointer transition-colors"
              >
                <MessageSquare className="h-3 w-3" />
                Fast Enquiry
              </button>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-gray-400 font-sans text-[10px] border-t border-gray-150">
          <p>© {currentYear} Dev Enterprise. All Rights Reserved. ISO 9001:2015 Stamping Facility.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black transition-colors">Quality Guidelines</a>
            <a href="#" className="hover:text-black transition-colors">Factory Compliance</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>

      </Container>
    </footer>
  );
}
