/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Search, MessageSquare, Award, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface NavbarProps {
  onOpenEnquiry: (productName?: string) => void;
  activeSection: string;
  selectedProduct?: any;
  onClearSelectedProduct?: () => void;
  currentView: string;
  onViewChange: (view: any) => void;
}

export default function Navbar({ 
  onOpenEnquiry, 
  activeSection, 
  selectedProduct, 
  onClearSelectedProduct,
  currentView,
  onViewChange
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', view: 'home' },
    { label: 'About Us', view: 'about' },
    { label: 'Products', view: 'products' },
    { label: 'Manufacturing', view: 'manufacturing' },
    { label: 'Industries We Serve', view: 'industries' },
    { label: 'Bulk Orders', view: 'bulk-orders' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: string) => {
    setIsOpen(false);
    if (onClearSelectedProduct) {
      onClearSelectedProduct();
    }
    onViewChange(view);
    
    // Smooth scroll to top on page transition
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simulate product search
      onClearSelectedProduct?.();
      onViewChange('products');
      setSearchOpen(false);
      setSearchQuery('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3.5 shadow-xs'
          : 'bg-[#F8F9FA]/95 backdrop-blur-md py-5 border-b border-gray-200/40'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Logo Brand Design */}
          <a
            href="#"
            className="group flex items-center gap-2 focus-visible:outline-none shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            {/* Reflective Square Chrome Icon representing paper plate stamping precision */}
            <div className="relative h-9 w-9 border border-[#0F294A] flex items-center justify-center bg-[#0F294A] group-hover:bg-white group-hover:text-[#0F294A] transition-all duration-300 rounded-lg overflow-hidden">
              <span className="font-display text-base font-bold text-white group-hover:text-[#0F294A] tracking-tighter">DE</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-gray-400" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-xs font-black uppercase tracking-[0.25em] text-[#111111] leading-tight">
                Dev Enterprise
              </span>
              <span className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#666666] leading-none mt-0.5 font-bold">
                Silver Dinnerware Factory
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`font-display text-[10px] uppercase tracking-wider font-bold transition-all duration-200 hover:text-[#0F294A] cursor-pointer pb-1 border-b-2 ${
                  currentView === item.view && !selectedProduct
                    ? 'text-[#0F294A] border-[#0F294A]'
                    : 'text-gray-500 border-transparent hover:border-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Callouts */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Interactive Search Icon Toggle */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-500 hover:text-[#0F294A] transition-colors rounded-lg bg-white border border-gray-200 cursor-pointer flex items-center justify-center shadow-3xs"
                aria-label="Search Catalog"
              >
                <Search className="h-3.5 w-3.5" />
              </button>

              {searchOpen && (
                <form 
                  onSubmit={handleSearchSubmit}
                  className="absolute right-0 top-11 bg-white border border-gray-200 rounded-lg shadow-md p-2 flex gap-1.5 w-60"
                >
                  <input
                    type="text"
                    required
                    placeholder="Search dinnerware sizes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-gray-50 border border-gray-200 rounded px-2.5 py-1 text-xs focus:outline-none focus:border-[#0F294A]"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-[#0F294A] text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase"
                  >
                    Go
                  </button>
                </form>
              )}
            </div>

            {/* Direct Call button */}
            <a
              href="tel:+919876543210"
              className="font-display text-[10px] uppercase tracking-wider text-[#666666] hover:text-[#0F294A] transition-all py-2 px-3 border border-gray-200 hover:border-[#0F294A] rounded-lg cursor-pointer bg-white font-bold flex items-center gap-1.5 shadow-3xs"
            >
              <Phone className="h-3.5 w-3.5 text-[#0F294A]" />
              <span className="hidden xl:inline">Call: +91 98765 43210</span>
              <span className="xl:hidden">Call Factory</span>
            </a>

            {/* Request Quote button */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenEnquiry('Corporate Sourcing Quote Request')}
              className="text-[10px] tracking-wider font-extrabold uppercase py-2.5"
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Action & Toggle */}
          <div className="flex items-center gap-2.5 xl:hidden">
            <button
              onClick={() => onOpenEnquiry('B2B Quick Quote Request')}
              className="text-[9px] font-display uppercase tracking-widest bg-[#0F294A] text-white px-3.5 py-2 hover:bg-[#07192E] rounded-lg cursor-pointer transition-colors font-extrabold"
            >
              Quote
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#666666] hover:text-[#0F294A] focus:outline-none p-2 border border-gray-200 rounded-lg bg-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Navigation Backdrop */}
      <div
        className={`fixed inset-0 top-[69px] bg-black/40 backdrop-blur-xs z-40 transition-opacity duration-300 xl:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer menu */}
      <div
        className={`fixed left-0 right-0 top-[69px] bg-white border-b border-gray-200 z-40 px-6 py-6 flex flex-col gap-5 xl:hidden transition-all duration-300 ease-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.view)}
              className={`font-display text-xs uppercase tracking-widest py-2 border-b border-gray-100 font-extrabold text-left transition-all ${
                currentView === item.view && !selectedProduct
                  ? 'text-[#0F294A] pl-1'
                  : 'text-[#666666] hover:text-[#0F294A]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2.5 pt-4 border-t border-gray-100">
          <a
            href="tel:+919876543210"
            className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 text-[#0F294A] font-display text-[10px] uppercase tracking-widest font-extrabold rounded-lg hover:bg-gray-50"
          >
            <Phone className="h-4 w-4" />
            <span>Call: +91 98765 43210</span>
          </a>
          <Button
            variant="primary"
            size="md"
            className="w-full text-[10px] tracking-widest font-extrabold uppercase py-3.5"
            onClick={() => {
              setIsOpen(false);
              onOpenEnquiry('Corporate Sourcing Proposal');
            }}
          >
            Request Factory Proposal
          </Button>
        </div>
      </div>
    </header>
  );
}
