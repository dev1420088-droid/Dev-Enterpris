/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, Mail, Phone, Calendar, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Hero from './components/home/Hero';
import TrustSection from './components/home/TrustSection';
import ProductCategories from './components/home/ProductCategories';
import FeaturedCategories from './components/home/FeaturedCategories';
import Specifications from './components/home/Specifications';
import FactoryStats from './components/home/FactoryStats';
import WhyChooseUs from './components/home/WhyChooseUs';
import ManufacturingProcess from './components/home/ManufacturingProcess';
import QualityAssurance from './components/home/QualityAssurance';
import TestimonialsList from './components/home/TestimonialsList';
import FAQ from './components/home/FAQ';
import EnquiryDrawer from './components/home/EnquiryDrawer';
import Container from './components/ui/Container';
import { Product } from './types';
import ProductDetailsPage from './components/home/ProductDetailsPage';
import AboutUsPage from './components/about/AboutUsPage';
import ProductsPage from './components/products/ProductsPage';
import ManufacturingPage from './components/manufacturing/ManufacturingPage';
import IndustriesPage from './components/industries/IndustriesPage';
import BulkOrdersPage from './components/bulk/BulkOrdersPage';
import ContactPage from './components/contact/ContactPage';

type ViewType = 'home' | 'about' | 'products' | 'manufacturing' | 'industries' | 'bulk-orders' | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync state with browser path/hash routing
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const path = window.location.pathname.replace('/', '');
      const targetView = hash || path || 'home';
      
      const allowedViews: ViewType[] = ['home', 'about', 'products', 'manufacturing', 'industries', 'bulk-orders', 'contact'];
      if (allowedViews.includes(targetView as ViewType)) {
        setCurrentView(targetView as ViewType);
      } else {
        setCurrentView('home');
      }
    };

    // Run once on mount
    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Update scroll to top button visibility
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScrollButtonVisibility);
    return () => window.removeEventListener('scroll', handleScrollButtonVisibility);
  }, []);

  // Navigation controller with routing history syncing
  const navigateTo = (view: ViewType) => {
    setSelectedProduct(null);
    setCurrentView(view);
    
    // Smooth scroll to top on navigation change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Try HTML5 pushState first, fallback to hash
    const url = view === 'home' ? '/' : `/${view}`;
    const hash = view === 'home' ? '#/' : `#/${view}`;
    try {
      window.history.pushState(null, '', url);
    } catch (e) {
      window.location.hash = hash;
    }
  };

  // Open Enquiry modal with preset name
  const handleOpenEnquiry = (productName?: string) => {
    if (productName) {
      setPrefilledProduct(productName);
    } else {
      setPrefilledProduct('');
    }
    setIsEnquiryOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] flex flex-col selection:bg-black selection:text-white font-sans antialiased">
      
      {/* Top Banner - Urgency & Direct Factory Hook */}
      <AnnouncementBar onOpenEnquiry={handleOpenEnquiry} />

      {/* Global Navigation */}
      <Navbar 
        onOpenEnquiry={handleOpenEnquiry} 
        activeSection={activeSection} 
        selectedProduct={selectedProduct}
        onClearSelectedProduct={() => setSelectedProduct(null)}
        currentView={currentView}
        onViewChange={(view) => navigateTo(view as ViewType)}
      />

      {/* Main Sections with smooth fade animation transitions */}
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView + (selectedProduct ? '-details' : '')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex-1 flex flex-col"
          >
            {selectedProduct ? (
              <ProductDetailsPage
                product={selectedProduct}
                onBack={() => setSelectedProduct(null)}
                onOpenEnquiry={handleOpenEnquiry}
                onSelectProduct={(p) => setSelectedProduct(p)}
              />
            ) : currentView === 'about' ? (
              <AboutUsPage 
                onOpenEnquiry={handleOpenEnquiry} 
                onBackToHome={() => navigateTo('home')}
              />
            ) : currentView === 'products' ? (
              <ProductsPage
                onOpenEnquiry={handleOpenEnquiry}
                onSelectProduct={(p) => setSelectedProduct(p)}
                onBackToHome={() => navigateTo('home')}
              />
            ) : currentView === 'manufacturing' ? (
              <ManufacturingPage
                onOpenEnquiry={handleOpenEnquiry}
                onNavigate={(v) => navigateTo(v as ViewType)}
              />
            ) : currentView === 'industries' ? (
              <IndustriesPage
                onOpenEnquiry={handleOpenEnquiry}
                onNavigate={(v) => navigateTo(v as ViewType)}
              />
            ) : currentView === 'bulk-orders' ? (
              <BulkOrdersPage
                onOpenEnquiry={handleOpenEnquiry}
                onNavigate={(v) => navigateTo(v as ViewType)}
              />
            ) : currentView === 'contact' ? (
              <ContactPage
                onOpenEnquiry={handleOpenEnquiry}
                onNavigate={(v) => navigateTo(v as ViewType)}
              />
            ) : (
              <>
                {/* Hero Segment */}
                <Hero onOpenEnquiry={handleOpenEnquiry} />

                {/* Trust Badges Bar */}
                <TrustSection />

                {/* Product Category Cards */}
                <ProductCategories />

                {/* Dynamic Catalog Section */}
                <FeaturedCategories 
                  onOpenEnquiry={handleOpenEnquiry} 
                  onSelectProduct={(p) => setSelectedProduct(p)}
                />

                {/* Factory Animated Statistics */}
                <FactoryStats />

                {/* Bento Grid Specifications */}
                <Specifications />

                {/* Manufacturing Process Timeline */}
                <ManufacturingProcess />

                {/* Quality Assurance Features */}
                <QualityAssurance />

                {/* Core Brand Pillars */}
                <WhyChooseUs />

                {/* Bottom CTA Block - High conversion zone */}
                <div className="py-20 bg-[#F8F9FA] border-t border-gray-150 relative text-left">
                  <Container>
                    <div className="relative border border-gray-250 bg-white p-8 md:p-16 text-center max-w-4xl mx-auto overflow-hidden shadow-xs rounded-2xl">
                      <div className="absolute inset-0 bg-silver-dark-gradient pointer-events-none" />
                      <div className="relative z-10 flex flex-col items-center gap-6">
                        
                        {/* Direct wholesale badge */}
                        <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#0F294A] font-extrabold bg-[#E6EEF8] px-3 py-1 rounded-full">
                          Direct Wholesale Solutions
                        </span>

                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] max-w-xl leading-tight">
                          Need Bulk Quantities?
                        </h2>

                        <p className="font-sans text-sm text-[#555555] max-w-lg leading-relaxed text-center">
                          We manufacture and supply high-volume disposable paper plates and bowls across India. Get consistent stamping diameters, high-GSM base cores, and moisture-proof silver linings directly from our NCR factory.
                        </p>

                        {/* Highly responsive 3-Button Stack */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                          {/* Call Now */}
                          <a
                            href="tel:+919876543210"
                            className="font-display text-xs uppercase tracking-wider bg-white border border-gray-300 hover:border-[#111111] text-[#111111] font-bold px-8 py-4.5 cursor-pointer transition-colors flex items-center justify-center gap-2 rounded-lg shadow-3xs hover:bg-gray-50"
                          >
                            <Phone className="h-4 w-4 text-[#0F294A]" />
                            Call Now
                          </a>
                          
                          {/* WhatsApp */}
                          <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noreferrer"
                            className="font-display text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4.5 cursor-pointer transition-colors flex items-center justify-center gap-2 rounded-lg shadow-2xs"
                          >
                            <MessageSquare className="h-4 w-4" />
                            WhatsApp
                          </a>

                          {/* Request Quote */}
                          <button
                            onClick={() => handleOpenEnquiry('B2B Custom Corporate Order')}
                            className="font-display text-xs uppercase tracking-wider bg-[#0F294A] hover:bg-[#07192E] text-white font-bold px-8 py-4.5 cursor-pointer transition-colors flex items-center justify-center gap-2 rounded-lg shadow-2xs"
                          >
                            Request Quote
                          </button>
                        </div>

                        {/* Sourcing badges */}
                        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-[10px] text-gray-400 uppercase tracking-widest font-sans pt-8 border-t border-gray-150 w-full max-w-md">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-black" />
                            <span>Food-Contact Safe</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-black" />
                            <span>NCR Direct Despatch</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>

                {/* Client Success Stories */}
                <TestimonialsList />

                {/* Frequently Asked Questions */}
                <FAQ />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer 
        onOpenEnquiry={handleOpenEnquiry} 
        onViewChange={(view) => navigateTo(view as ViewType)} 
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-[#0F294A] hover:bg-[#07192E] text-white rounded-full shadow-lg transition-all cursor-pointer border border-white/10 hover:scale-105 active:scale-95 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Dynamic Slide-in Enquiry Desk */}
      <EnquiryDrawer
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        prefilledProduct={prefilledProduct}
      />
    </div>
  );
}
