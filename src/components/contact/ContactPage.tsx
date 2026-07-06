/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldAlert, 
  MessageSquare, 
  Building 
} from 'lucide-react';
import Container from '../ui/Container';
import Breadcrumbs from '../ui/Breadcrumbs';

interface ContactPageProps {
  onOpenEnquiry: (productName?: string) => void;
  onNavigate: (view: any) => void;
}

export default function ContactPage({ onOpenEnquiry, onNavigate }: ContactPageProps) {
  const breadcrumbItems = [
    { label: 'Home', onClick: () => onNavigate('home') },
    { label: 'Contact', active: true }
  ];

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'General Wholesale Sourcing',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API contact form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        interest: 'General Wholesale Sourcing',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F8F9FA] relative min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <Container className="relative z-10 pt-16 text-left">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl mb-12">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
            Factory Assistance Desk
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
            Contact Our Sales Team
          </h1>
          <div className="w-16 h-1 bg-[#0F294A] mt-1" />
          <p className="font-sans text-base sm:text-lg text-[#666666] leading-relaxed mt-2">
            Have queries regarding shipping logistics, customized GSM plate thickness, or looking for localized distribution partnerships? Get in touch with our NCR factory desk.
          </p>
        </div>

        {/* Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* CONTACT INFO CARD (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Direct Channels */}
            <div className="bg-white border border-gray-150 p-6 sm:p-8 rounded-2xl shadow-3xs flex flex-col gap-6">
              <h2 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111] pb-3 border-b border-gray-150">
                Direct Communication
              </h2>

              <div className="flex items-start gap-4 text-xs font-sans text-[#666666]">
                <div className="h-8 w-8 bg-[#F0F4FA] border border-gray-100 rounded-lg flex items-center justify-center text-[#0F294A] shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-sans text-[8px] text-gray-400 uppercase tracking-widest font-bold">Sales & Sourcing Desk</span>
                  <a href="tel:+919876543210" className="font-bold text-[#111111] hover:text-[#0F294A] transition-colors leading-normal block mt-0.5">
                    +91 98765 43210
                  </a>
                  <span className="text-[10px] text-gray-400">Monday - Saturday (9AM - 7PM)</span>
                </div>
              </div>

              <div className="flex items-start gap-4 text-xs font-sans text-[#666666]">
                <div className="h-8 w-8 bg-[#F0F4FA] border border-gray-100 rounded-lg flex items-center justify-center text-[#0F294A] shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-sans text-[8px] text-gray-400 uppercase tracking-widest font-bold">Direct Email</span>
                  <a href="mailto:sales@deventerprise.in" className="font-bold text-[#111111] hover:text-[#0F294A] transition-colors leading-normal block mt-0.5">
                    sales@deventerprise.in
                  </a>
                  <span className="text-[10px] text-gray-400">Response within 12 Hours guaranteed</span>
                </div>
              </div>

              <div className="flex items-start gap-4 text-xs font-sans text-[#666666]">
                <div className="h-8 w-8 bg-[#F0F4FA] border border-gray-100 rounded-lg flex items-center justify-center text-[#0F294A] shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-sans text-[8px] text-gray-400 uppercase tracking-widest font-bold">NCR Stamping Plant Address</span>
                  <p className="font-bold text-[#111111] leading-snug mt-0.5">
                    Plot No. 44, Okhla Industrial Area, Phase-III, New Delhi, 110020, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-xs font-sans text-[#666666]">
                <div className="h-8 w-8 bg-[#F0F4FA] border border-gray-100 rounded-lg flex items-center justify-center text-[#0F294A] shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-sans text-[8px] text-gray-400 uppercase tracking-widest font-bold">Business Hours</span>
                  <p className="font-bold text-[#111111] leading-snug mt-0.5">
                    Mon - Sat: 9:00 AM - 7:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Map Placeholder */}
            <div className="bg-white border border-gray-150 p-6 rounded-2xl shadow-3xs text-left">
              <span className="block font-sans text-[8px] text-gray-400 uppercase tracking-widest font-bold mb-3">Plant Location Mockup</span>
              <div className="relative aspect-video rounded-xl bg-gray-50 border border-gray-150 overflow-hidden flex flex-col justify-between p-4 group">
                <div className="absolute inset-0 bg-linear-to-tr from-gray-100 via-white to-transparent opacity-90 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col gap-1.5">
                  <span className="font-display text-[9px] uppercase tracking-wider text-[#0F294A] font-extrabold">Factory GPS Coordinates</span>
                  <span className="font-mono text-[10px] text-gray-600 block">28.5355° N, 77.2639° E</span>
                </div>

                <div className="my-auto flex items-center gap-2 relative z-10">
                  <div className="h-3 w-3 bg-red-600 rounded-full animate-ping absolute" />
                  <div className="h-3 w-3 bg-red-600 rounded-full relative" />
                  <span className="font-sans text-[11px] font-bold text-[#111111]">Okhla Phase-III Plant</span>
                </div>

                <div className="relative z-10 flex justify-between items-end border-t border-gray-200/65 pt-2">
                  <span className="font-sans text-[9px] text-gray-400">Delhi-NCR Direct Dispatch Terminal</span>
                  <a 
                    href="https://maps.google.com/?q=Okhla+Industrial+Area+Phase+3+New+Delhi"
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-[9px] text-[#0F294A] font-bold hover:underline"
                  >
                    Open Map
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* CONTACT FORM (8 columns) */}
          <div className="lg:col-span-8 bg-white border border-gray-150 p-6 sm:p-10 rounded-2xl shadow-3xs">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111] pb-4 border-b border-gray-150 mb-6">
              Write to Our Sales Team
            </h2>

            {submitSuccess ? (
              <div className="py-12 flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 bg-green-50 border border-green-200 text-green-700 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="max-w-md">
                  <h3 className="font-display text-lg font-bold text-[#111111] uppercase tracking-wide">
                    Thank You for Your Enquiry
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#666666] leading-relaxed mt-2">
                    Our sales representative has received your parameters and contact credentials. A curated technical proposal and price sheets will be sent to your inbox within the next 12 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 py-2.5 px-6 border border-gray-300 hover:border-black text-[#111111] font-display text-[10px] uppercase tracking-wider font-extrabold rounded-lg transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                      Contact Name *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-200 focus:bg-white rounded-lg p-3 font-sans text-xs focus:outline-none focus:border-[#0F294A] transition-colors"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                      Company / Business Name *
                    </label>
                    <input 
                      type="text" 
                      name="company"
                      required
                      placeholder="e.g. Standard Catering Services"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-200 focus:bg-white rounded-lg p-3 font-sans text-xs focus:outline-none focus:border-[#0F294A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="e.g. rajesh@catering.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-200 focus:bg-white rounded-lg p-3 font-sans text-xs focus:outline-none focus:border-[#0F294A] transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                      Phone Number (Mobile / WhatsApp) *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-200 focus:bg-white rounded-lg p-3 font-sans text-xs focus:outline-none focus:border-[#0F294A] transition-colors"
                    />
                  </div>
                </div>

                {/* Sourcing Interest Category */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                    Nature of Sourcing Request
                  </label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-200 focus:bg-white rounded-lg p-3 font-sans text-xs focus:outline-none focus:border-[#0F294A] transition-colors"
                  >
                    <option value="General Wholesale Sourcing">General Wholesale Sourcing</option>
                    <option value="Bulk B2B Catering Contract">Bulk B2B Catering Contract (Repeat Deliveries)</option>
                    <option value="Custom Packing / GSM Configuration">Custom Packing / GSM Configuration</option>
                    <option value="Distribution & Agency Application">Distribution & Agency Application</option>
                    <option value="Free Physical Sample Pack Request">Free Physical Sample Pack Request</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                    Sourcing Parameters / Message
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    placeholder="Specify target plates sizes, desired quantities, delivery pincode, or customized carton packing requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-200 focus:bg-white rounded-lg p-3 font-sans text-xs focus:outline-none focus:border-[#0F294A] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto self-start mt-2 px-8 py-4 bg-[#0F294A] hover:bg-[#07192E] text-white font-display text-[10px] uppercase tracking-widest font-extrabold rounded-lg flex items-center justify-center gap-2 transition-all shadow-3xs cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending Request...' : 'Submit Sourcing Enquiry'}</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Client Support Helpbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-3xs flex gap-4">
            <div className="h-10 w-10 bg-green-50 text-green-700 rounded-xl flex items-center justify-center shrink-0">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                WhatsApp Urgent Support
              </h3>
              <p className="font-sans text-xs text-[#666666] leading-relaxed mb-3">
                Need answers right now or looking to trace a pending bulk shipment? Launch a live WhatsApp chat directly with our dispatch manager.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex font-sans text-xs font-bold text-green-700 hover:underline"
              >
                Start Chat Now →
              </a>
            </div>
          </div>

          <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-3xs flex gap-4">
            <div className="h-10 w-10 bg-[#F0F4FA] text-[#0F294A] rounded-xl flex items-center justify-center shrink-0">
              <Building className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                Distributors Program
              </h3>
              <p className="font-sans text-xs text-[#666666] leading-relaxed mb-3">
                Interested in stocking and selling our certified silver series paper plates and bowls in your home state? Learn more about region allocations.
              </p>
              <button
                onClick={() => onOpenEnquiry('Distributors / Agency Partnership application')}
                className="inline-flex font-sans text-xs font-bold text-[#0F294A] hover:underline bg-transparent border-none cursor-pointer"
              >
                Apply for Agency →
              </button>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
