/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Loader2, LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  // Base classes for premium manufacturing feel (clean geometry, letter spacing, transition)
  const baseStyle =
    'inline-flex items-center justify-center font-display font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';

  // Variant implementations
  const variantStyles = {
    // Primary: Deep Dark Blue with white text, highly professional and trustworthy
    primary:
      'bg-[#0F294A] text-white hover:bg-[#07192E] border border-[#0F294A] hover:shadow-md',
    // Secondary: off-white/light gray body with a fine dark gray border
    secondary:
      'bg-white text-[#111111] border border-gray-200 hover:border-gray-800 hover:bg-gray-50',
    // Outline: transparent background, crisp dark blue border and text
    outline:
      'bg-transparent text-[#0F294A] border border-[#0F294A] hover:bg-[#0F294A] hover:text-white',
    // Ghost: transparent body, relying solely on thin text weight and soft hover highlights
    ghost:
      'bg-transparent text-[#666666] hover:text-[#111111] hover:bg-gray-100',
  };

  // Sizing systems
  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2 gap-1.5',
    md: 'text-xs px-6 py-3.5 gap-2',
    lg: 'text-xs md:text-sm px-8 py-4.5 gap-2.5',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin text-current shrink-0" />
      )}

      {!loading && Icon && iconPosition === 'left' && (
        <Icon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-1" />
      )}

      <span className="relative z-10">{children}</span>

      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
