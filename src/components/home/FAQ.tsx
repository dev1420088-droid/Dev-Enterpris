/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '../ui/Container';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do we place Bulk Orders and what discounts are available?",
      a: "We support bulk purchasing directly from our facility. Since we are a direct manufacturer, larger volumes qualify for tiered manufacturing pricing. Whether you need 10,000 or 1,000,000 pieces, our logistics team manages your supply schedule seamlessly to ensure maximum affordability and best value."
    },
    {
      q: "What is the Minimum Order Quantity (MOQ)?",
      a: "To provide the best factory-direct pricing, our standard minimum order quantity starts at just 1,000 pieces for circular or compartment plates, making it highly accessible for retail customers, family events, and local distributors alike."
    },
    {
      q: "What are your delivery timelines and dispatch processes?",
      a: "Orders are dispatched rapidly from our central NCR warehouse. Deliveries within Delhi NCR take 24–48 hours, while shipments to major cities across India (including Mumbai, Bangalore, Chennai, and Kolkata) are delivered via tracked express cargo within 3 to 5 business days."
    },
    {
      q: "What product sizes and styles do you manufacture?",
      a: "We manufacture a wide range of sizes and styles to fit all food-serving needs: 6-inch and 7-inch snack plates, 10-inch dinner plates, multi-compartment thali plates, and deep bowls. Custom sizing can also be developed for high-volume contract orders."
    },
    {
      q: "How do you ensure the strength and leak-proof quality of your plates?",
      a: "Quality and food safety are our highest priorities. We use heavy-duty, high-GSM paperboard cores that resist bending, and heat-fuse a protective silver sheet lamination. This creates a 100% moisture-proof and oil-resistant barrier that remains rigid under heavy or watery food portions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-t border-gray-150 relative" aria-label="Frequently Asked Questions">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F8F9FA] via-white to-transparent pointer-events-none" />

      <Container className="relative z-10 max-w-4xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
            Customer Information Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
            Enquiry & Technical FAQ
          </h2>
          <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
          <p className="font-sans text-xs sm:text-sm text-[#666666] max-w-lg mt-1 leading-relaxed">
            Everything you need to know about our material safety, volume allocations, and shipping SLAs.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 bg-[#F8F9FA] transition-all duration-300 hover:border-[#0F294A]/30 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0F294A]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="h-4.5 w-4.5 text-[#0F294A] shrink-0" />
                    <span className="font-display text-xs md:text-sm font-bold uppercase tracking-wider text-[#111111]">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-[#0F294A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-gray-150 text-xs md:text-sm text-[#666666] leading-relaxed font-sans max-w-3xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Help CTA Footer */}
        <div className="mt-12 p-6 border border-gray-200 bg-white rounded-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-3xs">
          <div className="text-left">
            <h4 className="font-display text-[11px] uppercase tracking-wider font-extrabold text-[#111111]">
              Have a custom configuration request?
            </h4>
            <p className="font-sans text-[11px] text-[#666666] mt-1">
              Connect directly with our Delhi-NCR engineering cell for specialized diameters, shapes or prints.
            </p>
          </div>
          <button
            onClick={() => {
              const target = document.querySelector('#catalog');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="whitespace-nowrap font-display text-[10px] uppercase tracking-widest bg-[#0F294A] text-white hover:bg-[#07192E] px-5 py-3.5 font-bold rounded-lg transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
          >
            Connect Sourcing Cell
          </button>
        </div>

      </Container>
    </section>
  );
}
