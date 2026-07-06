/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'dark' | 'charcoal' | 'glass';
  interactive?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  key?: React.Key;
}

export default function Card({
  children,
  className = '',
  variant = 'charcoal',
  interactive = true,
  padding = 'md',
  ...props
}: CardProps) {
  // Theme designs matching premium editorial aesthetic
  const variantStyles = {
    dark: 'bg-white border-gray-200/80 shadow-xs text-[#1A1A1A]',
    charcoal: 'bg-gray-50 border-gray-200/60 text-[#1A1A1A]',
    glass: 'bg-white/90 backdrop-blur-md border-gray-200/60 shadow-xs text-[#1A1A1A]',
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 md:p-6',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  };

  const hoverEffects = interactive
    ? 'hover:border-[#0F294A]/25 hover:shadow-[0_16px_40px_rgba(15,41,74,0.04)] hover:-translate-y-1.5 transition-all duration-300'
    : 'transition-all duration-300';

  return (
    <div
      className={`rounded-2xl border ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverEffects} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
