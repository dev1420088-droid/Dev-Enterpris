/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  ArrowRight, 
  Check, 
  Info, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Building2, 
  Phone, 
  User, 
  Mail, 
  Layers, 
  Package, 
  ArrowUpDown, 
  ThumbsUp, 
  Heart, 
  Eye, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { CATEGORIES, PRODUCTS } from '../../data/staticData';
import { Product } from '../../types';
import Plate3DRender from './Plate3DRender';
import { motion, AnimatePresence } from 'motion/react';

interface FeaturedCategoriesProps {
  onOpenEnquiry: (productName?: string) => void;
  onSelectProduct?: (product: Product) => void;
}

// Helper to map product ID to 3D plate type
const getPlateType = (id: string): 'plate-10' | 'plate-8' | 'plate-7' | 'plate-6' | 'compartment' | 'bowl' => {
  if (id.includes('plate-6')) return 'plate-6';
  if (id.includes('plate-7')) return 'plate-7';
  if (id.includes('plate-8')) return 'plate-8';
  if (id.includes('dinner-plate-10') || id.includes('plate-10')) return 'plate-10';
  if (id.includes('compartment')) return 'compartment';
  if (id.includes('bowl')) return 'bowl';
  return 'plate-10';
};

export default function FeaturedCategories({ onOpenEnquiry, onSelectProduct }: FeaturedCategoriesProps) {
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'name' | 'popular' | 'size'>('default');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Detail & Gallery States
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [galleryAngle, setGalleryAngle] = useState<'top' | 'side' | 'under'>('top');
  const [zoomScale, setZoomScale] = useState(1);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  // B2B bulk form state inside details view
  const [bulkFormData, setBulkFormData] = useState({
    name: '',
    phone: '',
    email: '',
    quantity: '10000',
    businessType: 'Restaurant / Food Vendor',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Add to recently viewed when details opened
  useEffect(() => {
    if (activeProduct) {
      setRecentlyViewed(prev => {
        const filtered = prev.filter(p => p.id !== activeProduct.id);
        return [activeProduct, ...filtered].slice(0, 3);
      });
      // Reset details configurations
      setGalleryAngle('top');
      setZoomScale(1);
      setFormSubmitted(false);
      setBulkFormData(prev => ({
        ...prev,
        message: `Hi, I am interested in placing a bulk order for the ${activeProduct.name}. Please contact me with wholesale factory pricing.`
      }));
    }
  }, [activeProduct]);

  // Unique sizes across catalog
  const availableSizes = [6, 7, 8, 10, 12];

  // Filter and Sort Logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSize = selectedSize === 'all' || product.diametersInches.includes(Number(selectedSize));
    
    return matchesSearch && matchesCategory && matchesSize;
  }).sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'popular') {
      // Products with smaller sizes or compartment tend to be highest volume
      const aVal = a.id.includes('6') || a.id.includes('compartment') ? 2 : 1;
      const bVal = b.id.includes('6') || b.id.includes('compartment') ? 2 : 1;
      return bVal - aVal;
    }
    if (sortBy === 'size') {
      return Math.max(...a.diametersInches) - Math.max(...b.diametersInches);
    }
    return 0; // Default/newest
  });

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep state clear after some time
    }, 5000);
  };

  return (
    <div id="catalog" className="py-16 bg-[#F8F9FA] border-t border-gray-200 relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold">
              Factory Catalog
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
              Silver Sheet Plate Collection
            </h2>
            <p className="font-sans text-sm text-gray-500 max-w-xl">
              Heavy-duty circular, multi-compartment thali plates, and serving bowls lined with high-integrity silver sheet barrier. Built for catering operations and food businesses.
            </p>
          </div>

          {/* Sourcing/Wholesale Notice Box */}
          <div className="bg-white border border-gray-200/80 p-4 max-w-xs flex gap-3 shadow-xs">
            <Info className="h-4 w-4 text-black shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-display text-[9px] uppercase tracking-wider text-black font-extrabold">
                Direct Manufacturing Pricing
              </span>
              <p className="font-sans text-[10px] text-gray-500 mt-1 leading-normal">
                Bypass middlemen. Sourced directly from our automated stamping lines in Delhi NCR. High-volume custom sizes available.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar (Desktop) */}
        <div className="bg-white border border-gray-200 p-4 mb-8 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between shadow-xs">
          {/* Search */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search plates, sizes, shapes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-none text-xs font-sans focus:border-black focus:outline-none transition-colors"
            />
          </div>

          {/* Filters Group */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-bold">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#F8F9FA] border border-gray-250 py-1.5 px-2 text-xs font-sans focus:outline-none focus:border-black"
              >
                <option value="all">All Categories</option>
                <option value="round-plates">Round Plates</option>
                <option value="compartment-plates">Compartment Plates</option>
                <option value="serving-bowls">Serving Bowls</option>
              </select>
            </div>

            {/* Size Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-bold">Size:</span>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="bg-[#F8F9FA] border border-gray-250 py-1.5 px-2 text-xs font-sans focus:outline-none focus:border-black"
              >
                <option value="all">All Sizes</option>
                {availableSizes.map((sz) => (
                  <option key={sz} value={sz}>{sz}-inch</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-bold">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F8F9FA] border border-gray-250 py-1.5 px-2 text-xs font-sans focus:outline-none focus:border-black"
              >
                <option value="default">Newest Arrival</option>
                <option value="name">Product Name (A-Z)</option>
                <option value="popular">Popularity / Volume</option>
                <option value="size">Size (Small to Large)</option>
              </select>
            </div>

            {/* Clear Filters */}
            {(searchQuery !== '' || selectedCategory !== 'all' || selectedSize !== 'all' || sortBy !== 'default') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedSize('all');
                  setSortBy('default');
                }}
                className="font-display text-[9px] uppercase tracking-widest text-red-600 font-bold hover:underline py-1 px-2"
              >
                Reset
              </button>
            )}

            {/* Mobile Filter Trigger */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden ml-auto flex items-center gap-1.5 bg-black text-white px-3 py-2 text-xs font-display uppercase tracking-wider"
            >
              <SlidersHorizontal className="h-3 w-3" />
              Filters
            </button>
          </div>
        </div>

        {/* Mobile Filter Drawer Overlay */}
        <AnimatePresence>
          {isMobileFilterOpen && (
            <motion.div 
              className="fixed inset-0 z-50 lg:hidden flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-xs"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              {/* Drawer Sheet */}
              <motion.div 
                className="relative w-full max-w-[280px] h-full bg-white p-6 shadow-2xl flex flex-col justify-between"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-150">
                    <span className="font-display text-xs uppercase tracking-widest text-black font-extrabold">Filter Catalog</span>
                    <button onClick={() => setIsMobileFilterOpen(false)}>
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Search */}
                  <div className="flex flex-col gap-2">
                    <span className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-bold">Search query</span>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search items..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 border border-gray-200 text-xs font-sans focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-col gap-2">
                    <span className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-bold">Category</span>
                    <div className="flex flex-col gap-1.5">
                      {['all', 'round-plates', 'compartment-plates', 'serving-bowls'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`text-left text-xs py-1.5 px-2.5 border transition-all ${
                            selectedCategory === cat 
                              ? 'bg-black text-white border-black font-semibold' 
                              : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {cat === 'all' ? 'All Categories' : cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sizing */}
                  <div className="flex flex-col gap-2">
                    <span className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-bold">Product Diameter</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        onClick={() => setSelectedSize('all')}
                        className={`text-xs py-1.5 px-2 border transition-all text-center ${
                          selectedSize === 'all' ? 'bg-black text-white border-black' : 'bg-gray-50 border-gray-200 text-gray-600'
                        }`}
                      >
                        All
                      </button>
                      {availableSizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`text-xs py-1.5 px-2 border transition-all text-center ${
                            selectedSize === sz ? 'bg-black text-white border-black font-semibold' : 'bg-gray-50 border-gray-200 text-gray-600'
                          }`}
                        >
                          {sz}"
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sorting */}
                  <div className="flex flex-col gap-2">
                    <span className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-bold">Sort options</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-[#F8F9FA] border border-gray-250 py-1.5 px-2 text-xs font-sans focus:outline-none"
                    >
                      <option value="default">Newest Arrival</option>
                      <option value="name">Product Name (A-Z)</option>
                      <option value="popular">Popularity / Volume</option>
                      <option value="size">Size (Small to Large)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3 bg-black text-white font-display text-[10px] uppercase tracking-widest font-bold"
                >
                  Apply Filters ({filteredProducts.length} Items)
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-white border border-gray-200 p-12 text-center max-w-lg mx-auto shadow-xs">
            <Package className="h-8 w-8 text-gray-300 mx-auto mb-3" />
            <span className="font-display text-xs uppercase tracking-widest font-extrabold text-black block mb-1">
              No matching products found
            </span>
            <p className="font-sans text-xs text-gray-500 mb-4">
              We couldn't find any products matching your current query or filter selections.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedSize('all');
                setSortBy('default');
              }}
              className="bg-black text-white font-display text-[10px] uppercase tracking-widest px-6 py-3 font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const plateType = getPlateType(product.id);
            return (
              <Card
                key={product.id}
                padding="none"
                className="flex flex-col bg-white border border-gray-250/75 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative group"
              >
                {/* 3D Product Render Box */}
                <div className="aspect-square relative bg-white border-b border-gray-150 p-6 flex items-center justify-center overflow-hidden">
                  {/* Subtle radial glow background behind product */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 via-white to-transparent" />
                  
                  {/* Real 3D Plate Render Component */}
                  <Plate3DRender
                    type={plateType}
                    className="scale-95 group-hover:scale-102 transition-transform duration-500"
                    isFloating={true}
                    interactive={false} // Disable individual rotation in catalog grid to avoid interaction conflicts, keeping it clean
                  />

                  {/* Manufacturer Direct Badge */}
                  <div className="absolute top-4 left-4 bg-[#0F294A] text-white font-display text-[8px] uppercase tracking-[0.2em] font-extrabold px-2.5 py-1 rounded-md shadow-xs z-10">
                    Manufacturer Direct
                  </div>

                  {/* Sizing Indicator Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-[#111111] border border-gray-200 font-display text-[8px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md shadow-3xs z-10">
                    {product.diametersInches.map(d => `${d}"`).join(', ')} Diameter
                  </div>
                </div>

                {/* Info and Pricing Segment */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white rounded-b-2xl">
                  <div className="flex flex-col gap-2.5">
                    <span className="font-display text-[9px] uppercase tracking-[0.2em] text-[#666666] font-bold">
                      Shape: {product.shapes.join(', ')}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#111111] uppercase tracking-wider leading-tight group-hover:text-[#0F294A] transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Available Sizes Tag list */}
                    <div className="flex flex-wrap items-center gap-1 mt-1">
                      <span className="font-display text-[8px] uppercase tracking-wider text-[#0F294A] font-extrabold bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-sm">
                        Sizes:
                      </span>
                      {product.diametersInches.map((d) => (
                        <span key={d} className="font-sans text-[10px] text-[#666666] bg-gray-50 px-1.5 py-0.5 border border-gray-150 rounded-sm">
                          {d} inch
                        </span>
                      ))}
                    </div>

                    <p className="font-sans text-xs text-[#666666] leading-relaxed mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2.5 pt-6 mt-6 border-t border-gray-100">
                    <button
                      onClick={() => {
                        if (onSelectProduct) {
                          onSelectProduct(product);
                        } else {
                          setActiveProduct(product);
                        }
                      }}
                      className="flex-1 py-3 text-center border border-gray-200 hover:border-[#0F294A] font-display text-[9px] uppercase tracking-widest text-[#666666] hover:text-[#0F294A] font-extrabold rounded-lg transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-1 shadow-3xs hover:bg-gray-50"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenEnquiry(product.name)}
                      className="flex-1 py-3 text-center bg-[#0F294A] hover:bg-[#07192E] font-display text-[9px] uppercase tracking-widest text-white font-extrabold rounded-lg transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-1 shadow-2xs"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      Quick Enquiry
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>

      {/* IMMERSIVE PRODUCT DETAIL DRAWER / OVERLAY */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/65 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProduct(null)}
            />

            {/* Immersive Detail Card */}
            <motion.div 
              className="relative w-full max-w-5xl bg-white border border-gray-200 shadow-2xl overflow-y-auto max-h-[92vh] text-[#1A1A1A] rounded-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-black font-display text-[10px] uppercase tracking-widest p-2 border border-gray-200 hover:border-black cursor-pointer bg-white rounded-lg flex items-center gap-1 shadow-2xs z-30"
              >
                <X className="h-3.5 w-3.5" />
                Close
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10">
                
                {/* LEFT SIDE: Product Gallery & Zoom Controls (lg:col-span-6) */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  {/* High Resolution Product Gallery */}
                  <div className="relative aspect-square border border-gray-200 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-8 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 via-white to-transparent" />
                    
                    {/* Main Product Image View */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div 
                        className="transition-transform duration-300"
                        style={{ transform: `scale(${zoomScale})` }}
                      >
                        <Plate3DRender
                          type={getPlateType(activeProduct.id)}
                          isFloating={false}
                          interactive={false}
                          imageUrl={galleryAngle === 'under' ? activeProduct.imageUrl : undefined}
                        />
                      </div>
                    </div>

                    {/* Interactive Instructions */}
                    <div className="absolute bottom-4 left-4 bg-black/5 backdrop-blur-xs text-black/60 font-sans text-[8px] uppercase tracking-wider font-extrabold px-2.5 py-1 pointer-events-none">
                      Factory Direct Quality Showcase
                    </div>

                    {/* Zoom / View controls */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white border border-gray-200 p-1 shadow-xs rounded-lg">
                      <button 
                        onClick={() => setZoomScale(prev => Math.min(prev + 0.2, 1.8))} 
                        title="Zoom In"
                        className="p-1.5 hover:bg-gray-100 text-gray-600 rounded"
                      >
                        <ZoomIn className="h-3.5 w-3.5" />
                      </button>
                      <button 
                        onClick={() => setZoomScale(prev => Math.max(prev - 0.2, 0.8))} 
                        title="Zoom Out"
                        className="p-1.5 hover:bg-gray-100 text-gray-600 rounded"
                      >
                        <ZoomOut className="h-3.5 w-3.5" />
                      </button>
                      <button 
                        onClick={() => setZoomScale(1)} 
                        title="Reset Zoom"
                        className="p-1.5 hover:bg-gray-100 text-gray-600 rounded"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Product Images */}
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => { setGalleryAngle('top'); setZoomScale(1); }}
                      className={`flex-1 py-2.5 border text-center font-sans text-[9px] uppercase tracking-wider rounded-lg cursor-pointer transition-all ${
                        galleryAngle === 'top' ? 'bg-[#0F294A] text-white border-[#0F294A] font-bold shadow-xs' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Standard Angle
                    </button>
                    <button
                      onClick={() => { setGalleryAngle('side'); setZoomScale(1); }}
                      className={`flex-1 py-2.5 border text-center font-sans text-[9px] uppercase tracking-wider rounded-lg cursor-pointer transition-all ${
                        galleryAngle === 'side' ? 'bg-[#0F294A] text-white border-[#0F294A] font-bold shadow-xs' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Detail Close-Up
                    </button>
                    <button
                      onClick={() => { setGalleryAngle('under'); setZoomScale(1.1); }}
                      className={`flex-1 py-2.5 border text-center font-sans text-[9px] uppercase tracking-wider rounded-lg cursor-pointer transition-all ${
                        galleryAngle === 'under' ? 'bg-[#0F294A] text-white border-[#0F294A] font-bold shadow-xs' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Material Texture
                    </button>
                  </div>

                  {/* Recently Viewed Products Panel */}
                  <div className="mt-4 pt-6 border-t border-gray-250">
                    <span className="font-display text-[9px] uppercase tracking-widest text-[#666666] font-bold block mb-3">
                      Recently Viewed Products
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {recentlyViewed.filter(p => p.id !== activeProduct.id).slice(0, 3).map((prevProd) => (
                        <div
                          key={prevProd.id}
                          onClick={() => setActiveProduct(prevProd)}
                          className="flex items-center gap-2 p-2 border border-gray-200 hover:border-[#0F294A] cursor-pointer bg-gray-50/50 hover:bg-white transition-all rounded-lg"
                        >
                          <div className="w-10 h-10 flex items-center justify-center border border-gray-150 bg-white scale-90 rounded">
                            <Plate3DRender type={getPlateType(prevProd.id)} isFloating={false} interactive={false} />
                          </div>
                          <span className="font-display text-[8px] uppercase tracking-wide font-bold text-[#111111] line-clamp-2">
                            {prevProd.name}
                          </span>
                        </div>
                      ))}
                      {recentlyViewed.filter(p => p.id !== activeProduct.id).length === 0 && (
                        <span className="font-sans text-[10px] text-gray-400 italic">
                          No other items recently viewed.
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: Product specifications, Related, and Bulk enquiry Form (lg:col-span-6) */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  {/* Identity */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-[8px] uppercase tracking-[0.2em] bg-[#0F294A] text-white px-2 py-0.5 rounded font-bold">
                        Manufacturer Direct
                      </span>
                      <span className="font-display text-[8px] uppercase tracking-wider text-[#666666] font-bold">
                        ID: {activeProduct.id.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-[#111111]">
                      {activeProduct.name}
                    </h3>
                  </div>

                  {/* Available Sizes Tag segment */}
                  <div className="p-3 border border-gray-200 bg-gray-50 flex items-center justify-between">
                    <span className="font-display text-[9px] uppercase tracking-widest text-gray-500 font-bold">Available Sizes:</span>
                    <span className="font-sans text-xs text-black font-extrabold uppercase tracking-wider bg-white border border-gray-250 px-2.5 py-1">
                      {activeProduct.diametersInches.map(d => `${d}" inches`).join(', ')}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed">
                    {activeProduct.description}
                  </p>

                  {/* Tabulated Specs Sheet */}
                  <div className="border border-gray-200 overflow-hidden">
                    <div className="bg-gray-100 p-2.5 border-b border-gray-200">
                      <span className="font-display text-[9px] uppercase tracking-widest text-black font-extrabold">Technical Specifications</span>
                    </div>
                    <div className="divide-y divide-gray-150 font-sans text-xs">
                      <div className="grid grid-cols-2 p-2.5">
                        <span className="text-gray-500">GSM Core Base</span>
                        <span className="text-black font-bold">350 - 450 Heavyweight Paperboard</span>
                      </div>
                      <div className="grid grid-cols-2 p-2.5">
                        <span className="text-gray-500">Lamination Style</span>
                        <span className="text-black font-bold">22μ Pure Food-Safe Silver Sheet</span>
                      </div>
                      <div className="grid grid-cols-2 p-2.5">
                        <span className="text-gray-500">Heat Stability</span>
                        <span className="text-black font-bold">Safely rated up to 95°C</span>
                      </div>
                      <div className="grid grid-cols-2 p-2.5">
                        <span className="text-gray-500">Moisture Barrier</span>
                        <span className="text-black font-bold">100% Leak-Proof (Over 24 Hours)</span>
                      </div>
                      <div className="grid grid-cols-2 p-2.5">
                        <span className="text-gray-500">Certifications</span>
                        <span className="text-black font-bold">FDA Food-Grade Safe, Fully Inert</span>
                      </div>
                    </div>
                  </div>

                  {/* Related / Other Products */}
                  <div>
                    <span className="font-display text-[9px] uppercase tracking-widest text-[#666666] font-bold block mb-2.5">Related Sizing Products</span>
                    <div className="flex gap-2">
                      {PRODUCTS.filter(p => p.id !== activeProduct.id).slice(0, 3).map((relProduct) => (
                        <button
                          key={relProduct.id}
                          onClick={() => setActiveProduct(relProduct)}
                          className="flex-1 py-2 px-3 border border-gray-200 hover:border-[#0F294A] text-left flex items-center gap-1.5 transition-all bg-white shadow-3xs cursor-pointer rounded-lg"
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <Plate3DRender type={getPlateType(relProduct.id)} isFloating={false} interactive={false} />
                          </div>
                          <span className="font-display text-[8px] uppercase tracking-wider text-[#666666] font-bold line-clamp-1">
                            {relProduct.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* B2B Factory Direct Bulk Enquiry Form */}
                  <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="h-4 w-4 text-[#0F294A]" />
                      <span className="font-display text-[10px] uppercase tracking-widest text-[#111111] font-bold">B2B Wholesale Enquiries</span>
                    </div>

                    <AnimatePresence mode="wait">
                      {!formSubmitted ? (
                        <motion.form 
                          onSubmit={handleBulkSubmit} 
                          className="flex flex-col gap-3.5"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <User className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                              <input
                                type="text"
                                required
                                placeholder="Contact Name"
                                value={bulkFormData.name}
                                onChange={(e) => setBulkFormData({...bulkFormData, name: e.target.value})}
                                className="w-full pl-8 pr-3 py-2 border border-gray-200 bg-white text-xs font-sans rounded-lg focus:outline-none focus:border-[#0F294A]"
                              />
                            </div>
                            <div className="relative">
                              <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                              <input
                                type="tel"
                                required
                                placeholder="Phone Number"
                                value={bulkFormData.phone}
                                onChange={(e) => setBulkFormData({...bulkFormData, phone: e.target.value})}
                                className="w-full pl-8 pr-3 py-2 border border-gray-200 bg-white text-xs font-sans rounded-lg focus:outline-none focus:border-[#0F294A]"
                              />
                            </div>
                          </div>

                          <div className="relative">
                            <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                            <input
                              type="email"
                              required
                              placeholder="Email Address"
                              value={bulkFormData.email}
                              onChange={(e) => setBulkFormData({...bulkFormData, email: e.target.value})}
                              className="w-full pl-8 pr-3 py-2 border border-gray-200 bg-white text-xs font-sans rounded-lg focus:outline-none focus:border-[#0F294A]"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <select
                                value={bulkFormData.businessType}
                                onChange={(e) => setBulkFormData({...bulkFormData, businessType: e.target.value})}
                                className="w-full px-2.5 py-2 border border-gray-200 bg-white text-xs font-sans rounded-lg focus:outline-none focus:border-[#0F294A]"
                              >
                                <option>Restaurant / Food Vendor</option>
                                <option>Caterer</option>
                                <option>Party Organizer</option>
                                <option>Distributor / Wholesaler</option>
                                <option>Retail Customer</option>
                              </select>
                            </div>
                            <div>
                              <select
                                value={bulkFormData.quantity}
                                onChange={(e) => setBulkFormData({...bulkFormData, quantity: e.target.value})}
                                className="w-full px-2.5 py-2 border border-gray-200 bg-white text-xs font-sans rounded-lg focus:outline-none focus:border-[#0F294A]"
                              >
                                <option value="1000">1,000 - 5,000 pcs</option>
                                <option value="5000">5,000 - 10,000 pcs</option>
                                <option value="10000">10,000 - 50,000 pcs</option>
                                <option value="50000">5,0000 - 100,000 pcs</option>
                                <option value="100000">100,000+ pcs</option>
                              </select>
                            </div>
                          </div>

                          <textarea
                            rows={2}
                            placeholder="Enquiry Message"
                            value={bulkFormData.message}
                            onChange={(e) => setBulkFormData({...bulkFormData, message: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-200 bg-white text-xs font-sans rounded-lg focus:outline-none focus:border-[#0F294A] resize-none"
                          />

                          <button
                            type="submit"
                            className="w-full py-3.5 bg-[#0F294A] hover:bg-[#07192E] text-white font-display text-[9px] uppercase tracking-widest font-extrabold rounded-lg shadow-sm cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0"
                          >
                            Submit Factory Pricing Request
                          </button>
                        </motion.form>
                      ) : (
                        <motion.div 
                          className="bg-white p-6 border border-gray-200 text-center flex flex-col items-center justify-center rounded-lg"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center mb-2 shadow-xs">
                            <Check className="h-5 w-5" />
                          </div>
                          <span className="font-display text-[10px] uppercase tracking-wider font-extrabold text-black block mb-1">Enquiry Successfully Logged!</span>
                          <p className="font-sans text-[10px] text-gray-500 leading-relaxed max-w-xs">
                            Thanks, <strong>{bulkFormData.name}</strong>. Our direct NCR factory desk has received your request for the {activeProduct.name}. We will contact you at <strong>{bulkFormData.phone}</strong> in 1–2 hours.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
