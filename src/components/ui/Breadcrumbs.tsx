/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-1.5 text-[11px] font-sans text-gray-400 mb-6 select-none ${className}`}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <ChevronRight className="h-3 w-3 text-gray-300 shrink-0" />}
          {item.active || !item.onClick ? (
            <span className={`font-semibold ${item.active ? 'text-[#0F294A]' : 'text-gray-500'}`}>
              {item.label}
            </span>
          ) : (
            <button
              onClick={item.onClick}
              className="hover:text-[#0F294A] transition-colors cursor-pointer font-medium"
            >
              {item.label}
            </button>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
