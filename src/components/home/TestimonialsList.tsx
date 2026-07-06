/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import Container from '../ui/Container';
import { TESTIMONIALS } from '../../data/staticData';
import { motion } from 'motion/react';

export default function TestimonialsList() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 14 } },
  };

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-[#F8F9FA] border-t border-gray-150 relative" aria-label="Customer Reviews">
      <Container>
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-2xl mx-auto">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#666666] font-bold">
            Industry Endorsement
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
            Catering Experiences Built On Rigidity
          </h2>
          <div className="w-12 h-0.5 bg-[#0F294A] mt-1" />
          {/* Modern Sans-Serif Subtext */}
          <p className="font-sans text-sm md:text-base text-[#666666] mt-2 leading-relaxed">
            Read how professional event organizers, executive chefs, and sweet merchants across India rely on our heavy-duty silver dinnerware.
          </p>
        </div>

        {/* Quotes Grid with Motion */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between text-left h-full border border-gray-200 bg-white p-8 hover:border-[#0F294A]/30 transition-all duration-300 shadow-3xs relative group rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-6">
                
                {/* Visual Header Row */}
                <div className="flex justify-between items-center">
                  <Quote className="h-6 w-6 text-gray-200 shrink-0 transform group-hover:text-[#0F294A] group-hover:rotate-12 transition-all duration-300" />
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 border border-gray-200/60 rounded-md" aria-label={`Rated ${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 fill-[#0F294A] text-[#0F294A] shrink-0" />
                    ))}
                  </div>
                </div>

                {/* Body Quote */}
                {/* Modern Sans-Serif Quote */}
                <blockquote className="font-sans text-xs md:text-sm text-[#666666] leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author Info with Custom Avatar Initial block */}
              <div className="mt-8 pt-6 border-t border-gray-150 flex items-center gap-4">
                
                {/* Initials Avatar */}
                <div className="h-9 w-9 border border-gray-200 bg-gray-50 flex items-center justify-center text-[#0F294A] font-display text-[11px] font-bold shrink-0 rounded-lg">
                  {getInitials(t.author)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-[#111111] truncate">
                      {t.author}
                    </span>
                    <div className="flex justify-between items-center text-[10px] text-gray-500 font-sans gap-2">
                      <span className="truncate">{t.role}</span>
                      <div className="flex items-center gap-1 text-gray-600 bg-gray-50 px-2 py-0.5 border border-gray-200 shadow-3xs rounded-md whitespace-nowrap shrink-0">
                        <MapPin className="h-2.5 w-2.5 text-[#0F294A]" />
                        <span>{t.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Subtle accent border on bottom hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0F294A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            </motion.div>
          ))}
        </motion.div>

        {/* Global social proof metric */}
        <div className="mt-16 text-center">
          <p className="font-sans text-[11px] text-gray-400 uppercase tracking-widest font-bold">
            ★ ★ ★ ★ ★ OVER 15 MILLION PLATES MANUFACTURED & DELIVERED SINCE INCEPTION
          </p>
        </div>

      </Container>
    </section>
  );
}
