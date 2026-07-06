/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  ChevronRight, 
  Truck, 
  ShieldCheck, 
  Briefcase, 
  MapPin, 
  FileCheck2, 
  Coins, 
  PhoneCall, 
  MessageSquare,
  PackageCheck
} from 'lucide-react';
import Container from '../ui/Container';
import Breadcrumbs from '../ui/Breadcrumbs';

interface BulkOrdersPageProps {
  onOpenEnquiry: (productName?: string) => void;
  onNavigate: (view: any) => void;
}

export default function BulkOrdersPage({ onOpenEnquiry, onNavigate }: BulkOrdersPageProps) {
  const breadcrumbItems = [
    { label: 'Home', onClick: () => onNavigate('home') },
    { label: 'Bulk Orders', active: true }
  ];

  // Calculator State
  const [selectedProduct, setSelectedProduct] = useState('10-inch-dinner');
  const [orderQuantity, setOrderQuantity] = useState(10000);
  const [deliveryRegion, setDeliveryRegion] = useState('ncr');

  const productData = {
    '6-inch-plate': { name: '6" Silver Snack Plate', basePrice: 0.45, moq: 10000, packSize: 1000 },
    '7-inch-plate': { name: '7" Silver Snack Plate', basePrice: 0.60, moq: 10000, packSize: 1000 },
    '8-inch-plate': { name: '8" Snack Plate', basePrice: 0.85, moq: 5000, packSize: 500 },
    '10-inch-dinner': { name: '10" Heavy-Duty Dinner Plate', basePrice: 1.65, moq: 5000, packSize: 250 },
    'compartment-plate': { name: '4-Compartment Thali Plate', basePrice: 2.30, moq: 5000, packSize: 250 },
    'paper-bowl': { name: 'Disposable Soup Bowl', basePrice: 0.55, moq: 10000, packSize: 1000 }
  };

  const regionData = {
    'ncr': { label: 'Delhi NCR (Direct Factory Dispatch)', leadTime: '24 - 48 Hours', shippingRate: 'Free Shipping' },
    'north': { label: 'North India (Punjab, UP, Haryana)', leadTime: '2 - 3 Days', shippingRate: 'Minimal freight charge' },
    'rest': { label: 'Rest of India (South, West, East)', leadTime: '4 - 5 Days', shippingRate: 'Standard B2B freight' }
  };

  // Calculate pricing based on volume tiers
  const activeProduct = productData[selectedProduct as keyof typeof productData];
  
  const getVolumeDiscount = (qty: number) => {
    if (qty >= 50000) return 0.15; // 15% discount for massive orders
    if (qty >= 20000) return 0.08; // 8% discount
    if (qty >= 10000) return 0.04; // 4% discount
    return 0.0;
  };

  const discountRatio = getVolumeDiscount(orderQuantity);
  const unitPrice = activeProduct.basePrice * (1 - discountRatio);
  const rawSubtotal = unitPrice * orderQuantity;
  const subtotal = Math.round(rawSubtotal * 100) / 100;
  
  // Format Indian currency representation
  const formatINR = (num: number) => {
    return '₹' + num.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  };

  const handleEnquirySubmit = () => {
    const detailString = `Bulk Sourcing Request: ${orderQuantity} pieces of ${activeProduct.name} to Region: ${regionData[deliveryRegion as keyof typeof regionData].label}`;
    onOpenEnquiry(detailString);
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
            B2B Commercial Procurement
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
            Bulk Orders & Logistics
          </h1>
          <div className="w-16 h-1 bg-[#0F294A] mt-1" />
          <p className="font-sans text-base sm:text-lg text-[#666666] leading-relaxed mt-2">
            Procure directly from our automated stamping facility in Delhi NCR. We offer direct wholesale pricing, custom packaging specifications, and dedicated regional B2B logistics.
          </p>
        </div>

        {/* Interactive Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* CALCULATOR CONTROLS */}
          <div className="lg:col-span-7 bg-white border border-gray-150 p-6 sm:p-8 rounded-2xl shadow-3xs">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-150">
              <Calculator className="h-5 w-5 text-[#0F294A]" />
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111]">
                B2B Bulk Pricing & Lead Time Calculator
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {/* Product Selection */}
              <div>
                <label className="block font-sans text-xs font-bold text-[#111111] uppercase tracking-wide mb-2">
                  Select Dinnerware Type
                </label>
                <select 
                  value={selectedProduct}
                  onChange={(e) => {
                    setSelectedProduct(e.target.value);
                    // Adjust quantity to meet MOQ if needed
                    const newMoq = productData[e.target.value as keyof typeof productData].moq;
                    if (orderQuantity < newMoq) {
                      setOrderQuantity(newMoq);
                    }
                  }}
                  className="w-full bg-gray-50 border border-gray-200 hover:border-gray-400 rounded-lg p-3 font-sans text-xs focus:outline-none focus:border-[#0F294A] transition-colors"
                >
                  {Object.entries(productData).map(([key, item]) => (
                    <option key={key} value={key}>
                      {item.name} (MOQ: {item.moq.toLocaleString()} pcs)
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity Slider / Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block font-sans text-xs font-bold text-[#111111] uppercase tracking-wide">
                    Quantity (Pieces)
                  </label>
                  <span className="font-mono text-xs font-bold text-[#0F294A] bg-blue-50 px-2 py-0.5 rounded">
                    {orderQuantity.toLocaleString()} pcs
                  </span>
                </div>
                
                <input 
                  type="range" 
                  min={activeProduct.moq} 
                  max="200000" 
                  step={activeProduct.packSize}
                  value={orderQuantity}
                  onChange={(e) => setOrderQuantity(Number(e.target.value))}
                  className="w-full accent-[#0F294A] h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-3"
                />

                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setOrderQuantity(activeProduct.moq)}
                    className="py-1.5 border border-gray-200 hover:border-gray-300 text-center font-sans text-[10px] font-bold text-[#666666] bg-white rounded cursor-pointer"
                  >
                    Min MOQ ({activeProduct.moq.toLocaleString()})
                  </button>
                  <button 
                    onClick={() => setOrderQuantity(20000)}
                    className="py-1.5 border border-gray-200 hover:border-gray-300 text-center font-sans text-[10px] font-bold text-[#666666] bg-white rounded cursor-pointer"
                  >
                    20,000 pcs (4% Disc)
                  </button>
                  <button 
                    onClick={() => setOrderQuantity(50000)}
                    className="py-1.5 border border-gray-200 hover:border-gray-300 text-center font-sans text-[10px] font-bold text-[#666666] bg-white rounded cursor-pointer"
                  >
                    50,000+ pcs (15% Disc)
                  </button>
                </div>
              </div>

              {/* Region Selection */}
              <div>
                <label className="block font-sans text-xs font-bold text-[#111111] uppercase tracking-wide mb-2">
                  Delivery Destination
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {Object.entries(regionData).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setDeliveryRegion(key)}
                      className={`p-3 border text-left rounded-lg cursor-pointer transition-all flex flex-col justify-between h-20 ${
                        deliveryRegion === key 
                          ? 'border-[#0F294A] bg-[#0F294A]/5 shadow-3xs' 
                          : 'border-gray-200 bg-white hover:bg-gray-50'
                      }`}
                    >
                      <span className="font-sans text-[10px] font-bold uppercase text-[#111111] tracking-wider truncate block w-full">
                        {key === 'ncr' ? 'Delhi NCR' : key === 'north' ? 'North India' : 'Rest of India'}
                      </span>
                      <span className="font-sans text-[9px] text-[#666666]">
                        {item.leadTime}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* CALCULATOR OUTPUT SUMMARY */}
          <div className="lg:col-span-5 bg-[#0F294A] text-white p-6 sm:p-8 rounded-2xl shadow-md">
            <span className="font-display text-[9px] uppercase tracking-widest text-blue-200 font-bold block mb-4">
              Wholesale Estimate Summary
            </span>

            <div className="flex flex-col gap-5">
              {/* Product Info */}
              <div className="pb-4 border-b border-white/10">
                <span className="block font-sans text-[9px] text-gray-400 uppercase tracking-wider">Sourcing Item</span>
                <span className="font-display text-sm font-bold text-white">{activeProduct.name}</span>
              </div>

              {/* Pricing breakdown */}
              <div className="space-y-2.5 font-sans text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Quantity Ordered</span>
                  <span className="text-white font-semibold font-mono">{orderQuantity.toLocaleString()} Units</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Base Unit Rate</span>
                  <span className="text-white font-semibold font-mono">{formatINR(activeProduct.basePrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Volume Tier Discount</span>
                  <span className="text-emerald-400 font-semibold">-{discountRatio * 100}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Discounted Unit Price</span>
                  <span className="text-white font-semibold font-mono">{formatINR(unitPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Cost</span>
                  <span className="text-emerald-400 font-semibold">{regionData[deliveryRegion as keyof typeof regionData].shippingRate}</span>
                </div>
              </div>

              {/* Estimate Total */}
              <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                <span className="font-sans text-xs uppercase tracking-wider font-bold text-gray-300">Est. Subtotal</span>
                <div className="text-right">
                  <span className="font-display text-2xl sm:text-3xl font-black text-white font-mono">{formatINR(subtotal)}</span>
                  <span className="block font-sans text-[8px] text-gray-400 uppercase tracking-widest mt-0.5">*Excludes GST & Freight charges</span>
                </div>
              </div>

              {/* Lead Time Display */}
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg flex gap-3 items-center">
                <Truck className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block font-sans text-[8px] uppercase tracking-widest text-gray-400 font-bold">Estimated Delivery Speed</span>
                  <span className="font-sans text-xs font-bold text-white">{regionData[deliveryRegion as keyof typeof regionData].leadTime}</span>
                </div>
              </div>

              {/* Submit Quote request button */}
              <button
                onClick={handleEnquirySubmit}
                className="w-full py-4 bg-white hover:bg-gray-100 text-[#0F294A] font-display text-[10px] uppercase tracking-widest font-extrabold rounded-xl transition-all shadow-3xs"
              >
                Submit Custom Quote Request
              </button>

              <span className="font-sans text-[8px] text-gray-400 text-center leading-normal block">
                Estimated rates represent wholesale direct-from-factory guidelines and can fluctuate based on custom paperboard GSM settings and raw resource indexes.
              </span>
            </div>
          </div>

        </div>

        {/* Commercial Procurement Checklist */}
        <section className="mb-16">
          <div className="flex flex-col items-center text-center gap-3 mb-10 max-w-2xl mx-auto">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
              Business Vetting
            </span>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#111111]">
              Sourcing Specifications & B2B Guidelines
            </h2>
            <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-3xs flex flex-col gap-4">
              <div className="h-10 w-10 bg-[#F0F4FA] text-[#0F294A] rounded-xl flex items-center justify-center shrink-0">
                <PackageCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111]">
                Custom Packaging Options
              </h3>
              <p className="font-sans text-xs text-[#666666] leading-relaxed">
                Standard shipments are packed in dust-tight inner sleeves of 50 or 100 units, then shipped inside durable 5-ply corrugated outer master boxes. Custom sleeve counts or client branding marks can be implemented upon inquiry.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-3xs flex flex-col gap-4">
              <div className="h-10 w-10 bg-green-50 text-green-700 rounded-xl flex items-center justify-center shrink-0">
                <Coins className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111]">
                Flexible Commercial Terms
              </h3>
              <p className="font-sans text-xs text-[#666666] leading-relaxed">
                We accommodate Standard RTGS / NEFT bank wire options. For verified restaurant networks, sweet shop chains, and repeat institutional accounts, we support custom credit limits or monthly payment schedules.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-3xs flex flex-col gap-4">
              <div className="h-10 w-10 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center shrink-0">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111]">
                Samples Vetting Guarantee
              </h3>
              <p className="font-sans text-xs text-[#666666] leading-relaxed">
                We believe in material verification. Procurement managers can request a free multi-size physical sample kit. Verify our plate thickness, thermal seals, and high-GSM build quality before committing to commercial contracts.
              </p>
            </div>
          </div>
        </section>

        {/* Procurement Assistance Desk Footer */}
        <section className="bg-white border border-gray-150 p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-3xs mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-left">
            <div>
              <h3 className="font-display text-lg font-bold text-[#111111] uppercase tracking-wide mb-1">
                Prefer direct commercial assistance?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-md">
                Talk directly to our B2B procurement head to arrange customized wholesale pricing models, scheduled monthly deliveries, or custom OEM laminations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <a
                href="tel:+919876543210"
                className="py-3 px-6 bg-[#0F294A] hover:bg-[#07192E] text-white font-display text-[10px] uppercase tracking-widest font-extrabold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-3xs"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call +91 98765 43210</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-[10px] uppercase tracking-widest font-extrabold rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </section>

      </Container>
    </div>
  );
}
