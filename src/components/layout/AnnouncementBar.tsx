/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import Container from '../ui/Container';

interface AnnouncementBarProps {
  onOpenEnquiry: (productName?: string) => void;
}

const MESSAGES = [
  '✔ Manufacturer Direct Supply — No Middlemen, Best Prices',
  '✔ Bulk Orders Welcome — Catering & Restaurant Discounts',
  '✔ Fast Delivery Across India — Rapid Dispatch from Delhi NCR'
];

export default function AnnouncementBar({ onOpenEnquiry }: AnnouncementBarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#111111] text-white py-2 px-4 relative z-50 overflow-hidden border-b border-white/5">
      <Container>
        <div className="flex items-center justify-between gap-4">
          
          {/* Direct Notice Tag */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 bg-white text-black rounded text-[9px] uppercase tracking-[0.2em] font-extrabold shrink-0">
            Factory Direct
          </div>

          {/* Sliding/Rotating Text Area */}
          <div className="flex-1 flex justify-center items-center h-5 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="font-sans text-[10px] md:text-xs font-semibold tracking-wide text-gray-200 flex items-center gap-2 text-center"
              >
                {MESSAGES[currentIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action CTA Link */}
          <button
            onClick={() => onOpenEnquiry('Free Sample Pack')}
            className="font-display text-[9px] uppercase tracking-[0.15em] font-extrabold text-white underline hover:text-gray-300 cursor-pointer flex items-center gap-1 shrink-0 transition-colors"
          >
            Sample Box <ArrowRight className="h-2.5 w-2.5 shrink-0" />
          </button>
        </div>
      </Container>
    </div>
  );
}
