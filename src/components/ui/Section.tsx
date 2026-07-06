/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: 'dark' | 'charcoal' | 'gradient' | 'none';
  divided?: boolean;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = '',
  bg = 'none',
  divided = false,
  id,
  ...props
}: SectionProps) {
  const bgClasses = {
    dark: 'bg-silver-950 text-cbd2db',
    charcoal: 'bg-silver-900 text-cbd2db',
    gradient: 'bg-gradient-to-b from-silver-950 to-silver-900 text-cbd2db',
    none: 'bg-transparent text-cbd2db',
  };

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 md:py-32 overflow-hidden ${
        divided ? 'border-t border-silver-800' : ''
      } ${bgClasses[bg]} ${className}`}
      {...props}
    >
      {/* Decorative Silver Ambient Light Spot */}
      {bg === 'dark' && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent pointer-events-none" />
      )}
      {children}
    </section>
  );
}
