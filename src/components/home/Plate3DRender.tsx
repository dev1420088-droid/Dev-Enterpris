/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface Plate3DRenderProps {
  type: 'plate-10' | 'plate-8' | 'plate-7' | 'plate-6' | 'compartment' | 'bowl';
  className?: string;
  isFloating?: boolean;
  interactive?: boolean;
  imageUrl?: string;
}

export default function Plate3DRender({
  type,
  className = '',
  imageUrl
}: Plate3DRenderProps) {

  // Configuration mapping for product types
  const config = {
    'plate-10': { 
      label: '10" Premium Dinner Plate', 
      dimensions: 'Diameter: 10 inches', 
      defaultImage: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=600&auto=format&fit=crop'
    },
    'plate-8': { 
      label: '8" Snack Plate', 
      dimensions: 'Diameter: 8 inches', 
      defaultImage: 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=600&auto=format&fit=crop'
    },
    'plate-7': { 
      label: '7" Snack Plate', 
      dimensions: 'Diameter: 7 inches', 
      defaultImage: 'https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=600&auto=format&fit=crop'
    },
    'plate-6': { 
      label: '6" Appetizer Plate', 
      dimensions: 'Diameter: 6 inches', 
      defaultImage: 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=600&auto=format&fit=crop'
    },
    'compartment': { 
      label: 'Compartment Thali Plate', 
      dimensions: 'Standard 4-Partition', 
      defaultImage: 'https://images.unsplash.com/photo-1610832958506-ee5633619144?q=80&w=600&auto=format&fit=crop'
    },
    'bowl': { 
      label: 'Disposable Soup Bowl', 
      dimensions: 'Deep Draw Design', 
      defaultImage: 'https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=600&auto=format&fit=crop'
    },
  }[type];

  // Pick whichever image source is available (explicit prop or fallback default from Unsplash)
  const displayImage = imageUrl || config.defaultImage;

  return (
    <div className={`relative flex items-center justify-center select-none w-full h-full max-w-xs aspect-square ${className}`}>
      {/* 1. Elegant shadow base for real product depth */}
      <div className="absolute bottom-[6%] w-[75%] h-[10px] bg-black/[0.04] rounded-full blur-[5px] pointer-events-none" />

      {/* 2. Main Premium Product Image Container */}
      <div className="relative w-[92%] h-[92%] rounded-xl overflow-hidden flex items-center justify-center bg-white border border-gray-100 shadow-[0_8px_16px_rgba(0,0,0,0.02)] transition-all duration-300">
        {displayImage ? (
          <div className="relative w-full h-full p-1.5 flex items-center justify-center bg-white">
            <img
              src={displayImage}
              alt={config.label}
              className="w-full h-full object-cover rounded-lg pointer-events-none"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Elegant and subtle silver overlay for brand identity */}
            <div className="absolute bottom-2 left-2 bg-black/75 text-white font-sans text-[8px] tracking-wide font-medium px-2 py-0.5 rounded shadow-xs">
              {config.dimensions}
            </div>
          </div>
        ) : (
          /* Clean e-commerce placeholder when no image URL is given */
          <div className="w-full h-full bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col justify-between relative">
            <div className="flex justify-between items-start">
              <span className="font-sans text-[8px] text-gray-400 uppercase tracking-wider">
                Photo Placeholder
              </span>
              <span className="font-sans text-[9px] bg-gray-200 text-gray-700 px-2 py-0.5 rounded font-medium">
                {config.dimensions}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1.5 text-center my-auto">
              <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-sans text-[11px] font-bold text-gray-700">
                {config.label}
              </span>
              <span className="font-sans text-[9px] text-gray-400 max-w-[130px]">
                Product photo placeholder
              </span>
            </div>

            <div className="flex justify-between items-end">
              <span className="font-sans text-[7px] uppercase tracking-wider text-gray-400">
                Delhi NCR Factory
              </span>
              <span className="font-sans text-[7px] uppercase tracking-wider text-gray-400">
                Silver Series
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
