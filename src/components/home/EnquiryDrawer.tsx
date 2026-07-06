/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldAlert, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { EnquiryFormData } from '../../types';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

export default function EnquiryDrawer({ isOpen, onClose, prefilledProduct = '' }: EnquiryDrawerProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    businessType: 'Retail Customer',
    productInterest: '',
    estimatedMonthlyQuantity: 'Under 1,000 pieces',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Update prefilled interest when drawer receives it
  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({ ...prev, productInterest: prefilledProduct }));
    } else {
      setFormData(prev => ({ ...prev, productInterest: '' }));
    }
  }, [prefilledProduct, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please provide your name, email address, and active phone number.');
      return;
    }

    setLoading(true);

    // Simulate luxury API submission delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-lg bg-white border-l border-gray-200 h-full overflow-y-auto shadow-xl z-10 flex flex-col justify-between text-[#1A1A1A]">
        {/* Header Block */}
        <div className="p-6 md:p-8 border-b border-gray-150 flex justify-between items-center bg-gray-50">
          <div className="flex flex-col gap-1.5">
            <span className="font-display text-[9px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Secure Request Desk
            </span>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#111111]">
              {formData.productInterest.includes('Sample') ? 'Request Sample Pack' : 'Quote Enquiry Portal'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#666666] hover:text-[#0F294A] font-display text-[10px] uppercase tracking-widest px-3 py-2 border border-gray-200 hover:border-[#0F294A] rounded-lg cursor-pointer bg-white transition-colors"
          >
            Close [X]
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 p-6 md:p-8">
          {success ? (
            /* Elegant high-fidelity Success Statement */
            <div className="flex flex-col items-center justify-center text-center h-full py-12 gap-6 animate-fade-in">
              <div className="h-14 w-14 border border-[#0F294A] bg-[#0F294A] rounded-xl flex items-center justify-center text-white">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-display text-[10px] uppercase tracking-widest text-[#666666] font-bold">
                  Enquiry Registered Successfully
                </span>
                <h4 className="font-display text-xl font-bold uppercase tracking-wider text-[#111111]">
                  Thank You, {formData.name.split(' ')[0]}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#666666] mt-1 leading-relaxed max-w-sm">
                  Our factory sales division has reserved your quote allocation. A specialist will call you shortly.
                </p>
              </div>

              {/* Simulated Receipt Details */}
              <div className="w-full bg-gray-50 border border-gray-200 p-5 font-sans text-[11px] text-left text-gray-600 flex flex-col gap-2.5 rounded-2xl shadow-3xs">
                <div className="flex justify-between border-b border-gray-150 pb-2">
                  <span className="text-gray-400">Enquiry Reference:</span>
                  <span className="text-black font-mono font-bold">DE-2026-{(Math.floor(Math.random() * 90000) + 10000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Interested Product:</span>
                  <span className="text-black font-semibold">{formData.productInterest || 'General Assortment'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Contact Number:</span>
                  <span className="text-black font-semibold">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated Volume:</span>
                  <span className="text-black font-semibold">{formData.estimatedMonthlyQuantity}</span>
                </div>
                <div className="flex justify-between mt-1 pt-2 border-t border-gray-150">
                  <span className="text-gray-400">Response SLA:</span>
                  <span className="text-black font-semibold">Under 4 Business Hours</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSuccess(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    businessType: 'Retail Customer',
                    productInterest: '',
                    estimatedMonthlyQuantity: 'Under 1,000 pieces',
                    message: ''
                  });
                  onClose();
                }}
                className="w-full py-4 border border-gray-200 hover:border-[#0F294A] font-display text-[11px] uppercase tracking-widest text-[#666666] hover:text-[#0F294A] rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 bg-white"
              >
                Return to Catalog
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left font-sans text-xs">
              {/* Product selection banner */}
              {formData.productInterest && (
                <div className="p-4 bg-gray-50 border border-gray-200/80 rounded-xl flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display text-[8px] uppercase tracking-wider text-[#666666] font-bold">
                      Selected Item
                    </span>
                    <span className="font-display text-xs font-bold text-[#111111] uppercase tracking-wider">
                      {formData.productInterest}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormData(p => ({ ...p, productInterest: '' }))}
                    className="text-[9px] font-display text-[#666666] hover:text-[#0F294A] uppercase tracking-wider px-2 py-1 border border-gray-200 hover:border-[#0F294A] rounded-lg cursor-pointer bg-white"
                  >
                    Clear
                  </button>
                </div>
              )}

              {/* Error Callout */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex gap-3">
                  <ShieldAlert className="h-5 w-5 shrink-0 text-red-600" />
                  <p className="leading-relaxed text-[11px]">{error}</p>
                </div>
              )}

              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] uppercase tracking-widest text-[#666666] font-bold">
                  Contact Name <span className="text-[#0F294A]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full bg-white border border-gray-200 p-3 text-black focus:border-[#0F294A] focus:outline-none placeholder-gray-400 rounded-lg transition-colors"
                  required
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[10px] uppercase tracking-widest text-[#666666] font-bold">
                    Email Address <span className="text-[#0F294A]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rajesh@example.com"
                    className="w-full bg-white border border-gray-200 p-3 text-black focus:border-[#0F294A] focus:outline-none placeholder-gray-400 rounded-lg transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[10px] uppercase tracking-widest text-[#666666] font-bold">
                    Phone / WhatsApp <span className="text-[#0F294A]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-white border border-gray-200 p-3 text-black focus:border-[#0F294A] focus:outline-none placeholder-gray-400 rounded-lg transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Company & Business Segment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[10px] uppercase tracking-widest text-[#666666] font-bold">
                    Company Name <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Sharma Banquets"
                    className="w-full bg-white border border-gray-200 p-3 text-black focus:border-[#0F294A] focus:outline-none placeholder-gray-400 rounded-lg transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[10px] uppercase tracking-widest text-[#666666] font-bold">
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 p-3 text-black focus:border-[#0F294A] focus:outline-none rounded-lg transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Retail Customer">Retail Customer</option>
                    <option value="Restaurant / Food Vendor">Restaurant / Food Vendor</option>
                    <option value="Caterer">Caterer / Wedding Planner</option>
                    <option value="Party Organizer">Party Organizer</option>
                    <option value="Distributor / Wholesaler">Distributor / Wholesaler</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* General Interest placeholder if not prefilled */}
              {!formData.productInterest && (
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[10px] uppercase tracking-widest text-[#666666] font-bold">
                    Product Interest
                  </label>
                  <input
                    type="text"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    placeholder="e.g. Round Plates, Serving Bowls"
                    className="w-full bg-white border border-gray-200 p-3 text-black focus:border-[#0F294A] focus:outline-none placeholder-gray-400 rounded-lg transition-colors"
                  />
                </div>
              )}

              {/* Monthly Volume Tier */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] uppercase tracking-widest text-[#666666] font-bold">
                  Estimated Monthly Volume
                </label>
                <select
                  name="estimatedMonthlyQuantity"
                  value={formData.estimatedMonthlyQuantity}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 p-3 text-black focus:border-[#0F294A] focus:outline-none rounded-lg transition-colors appearance-none cursor-pointer"
                >
                  <option value="Under 1,000 pieces">Under 1,000 pieces (Retail / Family Event)</option>
                  <option value="1,000 - 5,000 pieces">1,000 - 5,000 pieces (Standard Banquet)</option>
                  <option value="5,000 - 20,000 pieces">5,000 - 20,000 pieces (Caterer Wholesale)</option>
                  <option value="20,000+ pieces">20,000+ pieces (Major distributor / Retail chain)</option>
                </select>
              </div>

              {/* Message Details */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[10px] uppercase tracking-widest text-[#666666] font-bold">
                  Custom Requirements / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Detail any custom requirements here, e.g. custom shapes or delivery location..."
                  className="w-full bg-white border border-gray-200 p-3 text-black focus:border-[#0F294A] focus:outline-none placeholder-gray-400 rounded-lg resize-none transition-colors"
                />
              </div>

              {/* Submitting Buttons */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-[#0F294A] text-white hover:bg-[#07192E] font-display text-[11px] uppercase tracking-[0.2em] font-extrabold py-4 transition-all hover:-translate-y-0.5 active:translate-y-0 rounded-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-2xs"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Transmitting Specs...
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    Submit Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Info footer inside drawer */}
        <div className="p-6 md:p-8 border-t border-gray-150 text-center font-sans text-[10px] text-gray-500 leading-normal flex items-center gap-3 bg-gray-50">
          <Sparkles className="h-4 w-4 text-[#0F294A] shrink-0 animate-pulse" />
          <p className="text-left">
            Submitted data is protected by corporate privacy SLAs and will be used solely for compiling your silver sheet allocation proposal.
          </p>
        </div>
      </div>
    </div>
  );
}
