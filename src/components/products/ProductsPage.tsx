/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Circle, 
  Award, 
  Layers, 
  Sparkles, 
  Gem, 
  Search, 
  SlidersHorizontal, 
  X, 
  ChevronDown, 
  Phone, 
  MessageSquare, 
  Check, 
  Factory, 
  Tag, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  Info,
  Calendar,
  Zap,
  RotateCcw
} from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Product } from '../../types';

// Let's declare our complete, high-quality, and robust catalog of products specifically for this page.
const ALL_PRODUCTS: (Product & { isFeatured?: boolean; isNew?: boolean; isPopular?: boolean; availability: 'In Stock' | 'Bulk Pre-Order' })[] = [
  {
    id: 'silver-plate-6',
    name: '6-inch Silver Paper Plate',
    description: 'A heavyweight, highly rigid 6-inch silver laminated paper plate. Engineered perfectly for serving dry starters, snacks, sweets, and hot chaats without moisture leakage or sagging.',
    category: 'paper-plates',
    shapes: ['Round'],
    diametersInches: [6],
    features: [
      '22-micron pure food-grade silver lining',
      'Sag-resistant base core board',
      'Perfect for catering sweet shops and appetizers'
    ],
    bestFor: ['Appetizers & Starters', 'Sweet Shops', 'Street Food Buffets'],
    imageUrl: '',
    isPopular: true,
    availability: 'In Stock'
  },
  {
    id: 'silver-plate-7',
    name: '7-inch Silver Paper Plate',
    description: 'Standard 7-inch snack plate built with a dense wood-fiber base core. Perfect for tea parties, continental breakfasts, and small meals.',
    category: 'paper-plates',
    shapes: ['Round'],
    diametersInches: [7],
    features: [
      'Moisture-proof silver protective laminate',
      'Double-pressed rims for secure hold',
      'Comfort-grip high lip profile'
    ],
    bestFor: ['Breakfast Buffets', 'Social Gatherings', 'Snack Service'],
    imageUrl: '',
    isNew: true,
    availability: 'In Stock'
  },
  {
    id: 'silver-plate-8',
    name: '8-inch Silver Paper Plate',
    description: 'Mid-sized 8-inch silver plate designed for medium lunches, fast food counters, and active buffet setups.',
    category: 'paper-plates',
    shapes: ['Round'],
    diametersInches: [8],
    features: [
      'High-rigidity 380 GSM wood-pulp board',
      'Full oil-resistant thermal surface',
      'Sleek modern silver sheet coating'
    ],
    bestFor: ['Lunches', 'Fast Food', 'Outdoor Catering'],
    imageUrl: '',
    availability: 'In Stock'
  },
  {
    id: 'dinner-plate-10',
    name: '10-inch Premium Dinner Plate',
    description: 'Full-sized premium circular plate. Extra-strong core prevents bending or sagging even when piled high with heavy multi-dish rice and gravies.',
    category: 'dinner-plates',
    shapes: ['Round'],
    diametersInches: [10],
    features: [
      'Heavyweight 400+ GSM thick premium core',
      'Zero flavor transfer or metallic residue',
      'Complies with rigid sanitation standards'
    ],
    bestFor: ['Banquet Dinners', 'Wedding Events', 'Corporate Meals'],
    imageUrl: '',
    isFeatured: true,
    isPopular: true,
    availability: 'In Stock'
  },
  {
    id: 'dinner-plate-12',
    name: '12-inch Heavy Duty Dinner Plate',
    description: 'Our largest circular dining plate. Formulated with extreme-density GSM backing for grand wedding buffets and corporate catering.',
    category: 'dinner-plates',
    shapes: ['Round'],
    diametersInches: [12],
    features: [
      'Extreme 450 GSM reinforced base core',
      'Extra deep-drawn basin area',
      'Guaranteed spill-free service structure'
    ],
    bestFor: ['Grand Buffets', 'Corporate Banquets', 'Heavy Dinners'],
    imageUrl: '',
    isNew: true,
    availability: 'Bulk Pre-Order'
  },
  {
    id: 'thali-3-compartment',
    name: '3-Compartment Silver Thali Plate',
    description: 'Sturdy 11-inch partitioned plate featuring high-lip dividers to separate rice/bread, gravies, and chutneys neatly.',
    category: 'compartment-plates',
    shapes: ['Compartment'],
    diametersInches: [11],
    features: [
      'Thick multi-partition structural ribs',
      'Excellent hot curry separation',
      'Eliminates the need for multiple small bowls'
    ],
    bestFor: ['Combo Meals', 'Express Lunches', 'Food Trucks'],
    imageUrl: '',
    isPopular: true,
    availability: 'In Stock'
  },
  {
    id: 'thali-4-compartment',
    name: '4-Compartment Silver Thali Plate',
    description: 'Deep-drawn 12-inch partitioned plate. Highly favored for traditional lunches, school events, and office catering.',
    category: 'compartment-plates',
    shapes: ['Compartment'],
    diametersInches: [12],
    features: [
      'Balanced division for breads, dry subzi, dal, and sweet',
      'Flat central zone for robust structural balance',
      'Unmatched cost efficiency vs reusable tableware'
    ],
    bestFor: ['Standard Lunch Caterings', 'School & Hostels', 'Banquets'],
    imageUrl: '',
    isFeatured: true,
    availability: 'In Stock'
  },
  {
    id: 'thali-5-compartment',
    name: '5-Compartment Silver Thali Plate',
    description: 'Our top-tier 12.5-inch multi-divider thali plate designed specifically for grand wedding menus and festive feasts.',
    category: 'compartment-plates',
    shapes: ['Compartment'],
    diametersInches: [12.5],
    features: [
      '5 clean divisions for high-menu variety',
      'Rigid industrial-stamped outer walls prevent bending',
      'Pure food-grade leak-proof silver lamination'
    ],
    bestFor: ['Festive Feasts', 'Wedding Buffets', 'Religious Events'],
    imageUrl: '',
    isNew: true,
    availability: 'Bulk Pre-Order'
  },
  {
    id: 'silver-bowl-4.5',
    name: '4.5-inch Silver Serving Bowl',
    description: 'Deep-walled circular bowl. Perfect for hot gravies, dals, custom-flavored chaats, and traditional Indian sweets.',
    category: 'paper-bowls',
    shapes: ['Round'],
    diametersInches: [4.5],
    features: [
      'Deep, highly structural side wall',
      'Double-walled thermal insulation benefits',
      'Laminated inner surface retains heat effectively'
    ],
    bestFor: ['Hot Soups & Gravies', 'Desserts & Sweets', 'Chaat Counters'],
    imageUrl: '',
    isPopular: true,
    availability: 'In Stock'
  },
  {
    id: 'silver-bowl-6',
    name: '6-inch Deep Curry Bowl',
    description: 'Large-volume silver laminated paper bowl. Designed to carry heavy soup portions, rasam, kheer, and main dish curries comfortably.',
    category: 'paper-bowls',
    shapes: ['Round'],
    diametersInches: [6],
    features: [
      'Thicker 400 GSM base core composition',
      'Impervious leak-proof performance for 12 hours',
      'Elegant smooth-rolled safety rim details'
    ],
    bestFor: ['Main Course Curries', 'Large Desserts', 'Liquid Food Service'],
    imageUrl: '',
    isFeatured: true,
    availability: 'In Stock'
  },
  {
    id: 'octagonal-plate-10',
    name: '10-inch Octagonal Silver Plate',
    description: 'A striking 8-sided geometric plate designed to add modern flair and high-end aesthetic value to premium caterings.',
    category: 'special-products',
    shapes: ['Square'],
    diametersInches: [10],
    features: [
      'Unique octagonal stamping pattern',
      'High-impact silver sheet moisture barrier',
      'Appealing architectural design accents'
    ],
    bestFor: ['Special Receptions', 'Modern Food Festivals', 'Parties'],
    imageUrl: '',
    isNew: true,
    availability: 'Bulk Pre-Order'
  },
  {
    id: 'custom-embossed-plate',
    name: 'Custom Brand-Embossed Plate',
    description: 'B2B customized plates featuring your hotel, catering, or brand logo subtly pressed on the center zone.',
    category: 'special-products',
    shapes: ['Round', 'Square'],
    diametersInches: [10, 11, 12],
    features: [
      'Precision center branding dies',
      'Reinforced silver reflective surface',
      'Elevated brand trust for high-end hospitality chains'
    ],
    bestFor: ['Hotel Chains', 'Premium Wedding Caterers', 'Brand Promos'],
    imageUrl: '',
    isFeatured: true,
    availability: 'Bulk Pre-Order'
  }
];

const getCategoryImageUrl = (category: string) => {
  switch (category) {
    case 'paper-plates':
      return 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=600&auto=format&fit=crop';
    case 'dinner-plates':
      return 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=600&auto=format&fit=crop';
    case 'compartment-plates':
      return 'https://images.unsplash.com/photo-1610832958506-ee5633619144?q=80&w=600&auto=format&fit=crop';
    case 'paper-bowls':
      return 'https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=600&auto=format&fit=crop';
    default:
      return 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=600&auto=format&fit=crop';
  }
};

interface ProductsPageProps {
  onOpenEnquiry: (productName?: string) => void;
  onSelectProduct: (product: Product) => void;
  onBackToHome: () => void;
}

export default function ProductsPage({ onOpenEnquiry, onSelectProduct, onBackToHome }: ProductsPageProps) {
  // Navigation & View States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedShape, setSelectedShape] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'default'>('default');
  
  // Mobile Filter Drawer Toggle
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Pagination State
  const [visibleCount, setVisibleCount] = useState(8);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    {
      id: 'paper-plates',
      title: 'Paper Plates',
      desc: 'Heavy-pressed snack plates for appetizers, street foods, and catering side dishes.',
      icon: Circle,
      count: ALL_PRODUCTS.filter(p => p.category === 'paper-plates').length
    },
    {
      id: 'dinner-plates',
      title: 'Dinner Plates',
      desc: 'Full-sized premium plates built to handle heavy thalis and multicourse dining safely.',
      icon: Award,
      count: ALL_PRODUCTS.filter(p => p.category === 'dinner-plates').length
    },
    {
      id: 'compartment-plates',
      title: 'Compartment Plates',
      desc: 'Partitioned thalis designed to prevent dals, gravies, and chutneys from mixing.',
      icon: Layers,
      count: ALL_PRODUCTS.filter(p => p.category === 'compartment-plates').length
    },
    {
      id: 'paper-bowls',
      title: 'Paper Bowls',
      desc: 'Deep-walled silver bowls perfect for steaming hot curries, dals, and traditional desserts.',
      icon: Sparkles,
      count: ALL_PRODUCTS.filter(p => p.category === 'paper-bowls').length
    },
    {
      id: 'special-products',
      title: 'Special Products',
      desc: 'Octagonal plates and custom brand-embossed tableware for premium hospitality.',
      icon: Gem,
      count: ALL_PRODUCTS.filter(p => p.category === 'special-products').length
    }
  ];

  // Helper arrays for filters
  const uniqueSizes = useMemo(() => {
    const sizes = new Set<number>();
    ALL_PRODUCTS.forEach(p => p.diametersInches.forEach(s => sizes.add(s)));
    return Array.from(sizes).sort((a, b) => a - b);
  }, []);

  const uniqueShapes = useMemo(() => {
    const shapes = new Set<string>();
    ALL_PRODUCTS.forEach(p => p.shapes.forEach(s => shapes.add(s)));
    return Array.from(shapes);
  }, []);

  // Reset Filters helper
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSize('all');
    setSelectedShape('all');
    setSelectedAvailability('all');
    setSortBy('default');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...ALL_PRODUCTS];

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Size filter
    if (selectedSize !== 'all') {
      const sizeNum = parseFloat(selectedSize);
      result = result.filter(p => p.diametersInches.includes(sizeNum));
    }

    // Shape filter
    if (selectedShape !== 'all') {
      result = result.filter(p => p.shapes.includes(selectedShape as any));
    }

    // Availability filter
    if (selectedAvailability !== 'all') {
      result = result.filter(p => p.availability === selectedAvailability);
    }

    // Sorting
    if (sortBy === 'newest') {
      result = result.filter(p => p.isNew);
    } else if (sortBy === 'popular') {
      result = result.filter(p => p.isPopular);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedSize, selectedShape, selectedAvailability, sortBy]);

  // Featured Spotlight list
  const featuredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => p.isFeatured);
  }, []);

  // Paginated List
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="pt-24 pb-12 bg-white flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 bg-[#F8F9FA] border-b border-gray-150 overflow-hidden" aria-label="Products Hero">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.005)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />
        <Container className="relative z-10 text-center">
          <span className="font-display text-[9px] uppercase tracking-[0.25em] text-[#0F294A] font-extrabold bg-[#E6EEF8] px-3 py-1 rounded-full shadow-3xs">
            Commercial Portfolio
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111111] mt-4 mb-3">
            Our Products
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#555555] max-w-xl mx-auto leading-relaxed">
            Browse our range of disposable paper plates and bowls manufactured with quality silver sheet coating.
          </p>
        </Container>
      </section>

      {/* 2. PRODUCT CATEGORIES QUICK SELECTION */}
      <section className="py-12 border-b border-gray-150 bg-white" aria-label="Categories Selection">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-display text-lg font-extrabold uppercase tracking-widest text-[#111111]">
              Browse By Category
            </h2>
            <div className="h-0.5 w-12 bg-[#0F294A] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    // Scroll down to filters
                    const filterSection = document.getElementById('filters-section');
                    if (filterSection) {
                      filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`flex flex-col p-5 border rounded-2xl cursor-pointer text-center group transition-all duration-300 shadow-3xs ${
                    isSelected 
                      ? 'border-[#0F294A] bg-[#0F294A]/[0.02] ring-1 ring-[#0F294A]/30' 
                      : 'border-gray-150 bg-white hover:border-gray-300 hover:shadow-xs'
                  }`}
                >
                  <div className={`h-10 w-10 mx-auto rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isSelected 
                      ? 'bg-[#0F294A] text-white' 
                      : 'bg-gray-50 border border-gray-150 text-gray-700 group-hover:bg-[#0F294A] group-hover:text-white'
                  }`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  
                  <h3 className="font-display text-[11px] font-extrabold uppercase tracking-wide text-[#111111] mb-1.5">
                    {cat.title}
                  </h3>
                  
                  <p className="font-sans text-[10px] text-gray-500 leading-relaxed mb-4 flex-1">
                    {cat.desc}
                  </p>

                  <div className={`mt-auto text-[9px] uppercase tracking-wider font-extrabold flex items-center justify-center gap-1.5 ${
                    isSelected ? 'text-[#0F294A]' : 'text-gray-400 group-hover:text-[#0F294A]'
                  }`}>
                    <span>Select</span>
                    <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. MAIN PRODUCT BROWSING STAGE (SEARCH & FILTERS) */}
      <section id="filters-section" className="py-16 bg-white scroll-mt-24" aria-label="Catalog Filters">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* LEFT COLUMN: DESKTOP FILTERS */}
            <div className="hidden lg:flex flex-col gap-6 border border-gray-150 p-6 rounded-2xl bg-[#F8F9FA]/80 h-fit sticky top-28">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-gray-800" />
                  <span className="font-display text-[10px] uppercase tracking-widest font-extrabold text-[#111111]">
                    Refine Selection
                  </span>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="font-sans text-[10px] font-semibold text-gray-500 hover:text-black flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3" />
                  Clear All
                </button>
              </div>

              {/* Category selector */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">
                  Category
                </label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-white border border-gray-250 py-2.5 pl-3.5 pr-8 rounded-lg font-sans text-xs text-gray-700 outline-none focus:border-black appearance-none"
                  >
                    <option value="all">All Categories</option>
                    <option value="paper-plates">Paper Plates</option>
                    <option value="dinner-plates">Dinner Plates</option>
                    <option value="compartment-plates">Compartment Plates</option>
                    <option value="paper-bowls">Paper Bowls</option>
                    <option value="special-products">Special Products</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Size selector */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">
                  Diameter (Inches)
                </label>
                <div className="relative">
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-white border border-gray-250 py-2.5 pl-3.5 pr-8 rounded-lg font-sans text-xs text-gray-700 outline-none focus:border-black appearance-none"
                  >
                    <option value="all">All Sizes</option>
                    {uniqueSizes.map(size => (
                      <option key={size} value={size.toString()}>{size} inches</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Shape selector */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">
                  Geometric Shape
                </label>
                <div className="relative">
                  <select
                    value={selectedShape}
                    onChange={(e) => setSelectedShape(e.target.value)}
                    className="w-full bg-white border border-gray-250 py-2.5 pl-3.5 pr-8 rounded-lg font-sans text-xs text-gray-700 outline-none focus:border-black appearance-none"
                  >
                    <option value="all">All Shapes</option>
                    {uniqueShapes.map(shape => (
                      <option key={shape} value={shape}>{shape}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Availability selector */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">
                  Logistics Availability
                </label>
                <div className="relative">
                  <select
                    value={selectedAvailability}
                    onChange={(e) => setSelectedAvailability(e.target.value)}
                    className="w-full bg-white border border-gray-250 py-2.5 pl-3.5 pr-8 rounded-lg font-sans text-xs text-gray-700 outline-none focus:border-black appearance-none"
                  >
                    <option value="all">All Status</option>
                    <option value="In Stock">In Stock (Dispatch Direct)</option>
                    <option value="Bulk Pre-Order">Bulk Pre-Order (On Demand)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Sort By selector */}
              <div className="flex flex-col gap-2">
                <label className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">
                  Sort Order
                </label>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full bg-white border border-gray-250 py-2.5 pl-3.5 pr-8 rounded-lg font-sans text-xs text-gray-700 outline-none focus:border-black appearance-none"
                  >
                    <option value="default">Default Catalog</option>
                    <option value="newest">Newest Manufactured</option>
                    <option value="popular">Most Popular</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Direct Factory Tag */}
              <div className="mt-4 pt-4 border-t border-gray-200 flex items-start gap-2 text-[10px] text-gray-500 leading-relaxed font-sans">
                <Info className="h-4 w-4 text-[#0F294A] shrink-0 mt-0.5" />
                <span>
                  All products feature double-pressed rim contours and certified food-safe high-barrier silver linings.
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: SEARCH BAR, MOBILE TRIGGER & PRODUCT GRID */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              
              {/* Search Bar Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full bg-white border border-gray-250 rounded-xl py-3.5 pl-11 pr-4 font-sans text-xs text-gray-700 outline-none focus:border-black focus:ring-1 focus:ring-black/10 shadow-3xs"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Mobile Filter Trigger Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="flex lg:hidden items-center justify-center gap-2.5 px-5 py-3.5 border border-gray-250 rounded-xl bg-white hover:bg-gray-50 font-display text-[10px] uppercase tracking-widest font-extrabold text-gray-700 cursor-pointer shadow-3xs"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </button>
              </div>

              {/* Selected Filters Chips Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-sans text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                  Active Filter:
                </span>
                
                {selectedCategory !== 'all' && (
                  <span className="bg-gray-100 text-gray-800 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-gray-200 flex items-center gap-1.5 font-sans">
                    Category: {categories.find(c => c.id === selectedCategory)?.title || selectedCategory}
                    <button onClick={() => setSelectedCategory('all')} className="hover:text-black cursor-pointer"><X className="h-2.5 w-2.5" /></button>
                  </span>
                )}

                {selectedSize !== 'all' && (
                  <span className="bg-gray-100 text-gray-800 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-gray-200 flex items-center gap-1.5 font-sans">
                    Size: {selectedSize} inch
                    <button onClick={() => setSelectedSize('all')} className="hover:text-black cursor-pointer"><X className="h-2.5 w-2.5" /></button>
                  </span>
                )}

                {selectedShape !== 'all' && (
                  <span className="bg-gray-100 text-gray-800 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-gray-200 flex items-center gap-1.5 font-sans">
                    Shape: {selectedShape}
                    <button onClick={() => setSelectedShape('all')} className="hover:text-black cursor-pointer"><X className="h-2.5 w-2.5" /></button>
                  </span>
                )}

                {selectedAvailability !== 'all' && (
                  <span className="bg-gray-100 text-gray-800 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-gray-200 flex items-center gap-1.5 font-sans">
                    Logistics: {selectedAvailability}
                    <button onClick={() => setSelectedAvailability('all')} className="hover:text-black cursor-pointer"><X className="h-2.5 w-2.5" /></button>
                  </span>
                )}

                {sortBy !== 'default' && (
                  <span className="bg-gray-100 text-gray-800 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-gray-200 flex items-center gap-1.5 font-sans">
                    Sort: {sortBy === 'newest' ? 'Newest' : 'Popular'}
                    <button onClick={() => setSortBy('default')} className="hover:text-black cursor-pointer"><X className="h-2.5 w-2.5" /></button>
                  </span>
                )}

                {selectedCategory === 'all' && selectedSize === 'all' && selectedShape === 'all' && selectedAvailability === 'all' && sortBy === 'default' && (
                  <span className="text-[10px] text-gray-400 font-medium italic font-sans">
                    None (Showing complete list)
                  </span>
                )}
              </div>

              {/* 5. PRODUCT GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <AnimatePresence mode="popLayout">
                  {paginatedProducts.length > 0 ? (
                    paginatedProducts.map((prod, idx) => {
                      const categoryLabel = categories.find(c => c.id === prod.category)?.title || 'Silver Dinnerware';
                      return (
                        <motion.div
                          key={prod.id}
                          layout
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.35 }}
                          className="border border-gray-200 hover:border-[#0F294A]/30 rounded-2xl bg-white p-5 flex flex-col justify-between shadow-3xs hover:shadow-md transition-all duration-300 group h-[520px]"
                        >
                          {/* Image Box designed for high res photography */}
                          <div className="aspect-[4/3] bg-gray-50 border border-gray-150 rounded-xl relative overflow-hidden flex items-center justify-center shrink-0">
                            <img
                              src={getCategoryImageUrl(prod.category)}
                              alt={prod.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                            
                            {/* Specs tag overlay */}
                            <span className="absolute bottom-2.5 left-2.5 font-sans text-[9px] uppercase tracking-wider text-white font-semibold bg-[#0F294A] px-2 py-0.5 rounded shadow-3xs">
                              {prod.shapes.join(', ')} • {prod.diametersInches.join(', ')}"
                            </span>
                          </div>

                          {/* Content Section with strict equal height layout */}
                          <div className="flex-1 flex flex-col justify-between mt-5">
                            
                            {/* Product Copy */}
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-display text-[8px] uppercase tracking-wider text-gray-400 font-bold">
                                  {categoryLabel}
                                </span>
                                <span className="flex items-center gap-1 text-[9px] text-[#555555] font-semibold uppercase tracking-wider font-sans">
                                  <Calendar className="h-3 w-3 text-gray-400" />
                                  {prod.availability}
                                </span>
                              </div>

                              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#0F294A] transition-colors line-clamp-1 mb-2">
                                {prod.name}
                              </h3>

                              <p className="font-sans text-[11px] text-[#666666] leading-relaxed line-clamp-2 mb-4">
                                {prod.description}
                              </p>
                            </div>

                            {/* Product Badges row */}
                            <div className="flex flex-wrap gap-1.5 py-3 border-t border-b border-gray-100 my-2 shrink-0">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-50 border border-gray-150 text-[8px] uppercase tracking-wider font-bold text-gray-600 rounded">
                                <Check className="h-2 w-2 text-green-600 shrink-0" />
                                Manufacturer Direct
                              </span>
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-50 border border-gray-150 text-[8px] uppercase tracking-wider font-bold text-gray-600 rounded">
                                <Check className="h-2 w-2 text-green-600 shrink-0" />
                                Bulk Orders
                              </span>
                            </div>

                            {/* Dual action buttons */}
                            <div className="grid grid-cols-2 gap-3 pt-2 shrink-0">
                              <button
                                onClick={() => onSelectProduct(prod)}
                                className="py-3 border border-gray-200 hover:border-black font-display text-[9px] uppercase tracking-widest text-[#111111] font-extrabold text-center hover:bg-gray-50 transition-colors rounded-lg cursor-pointer shadow-3xs"
                              >
                                View Details
                              </button>
                              <button
                                onClick={() => onOpenEnquiry(prod.name)}
                                className="py-3 bg-[#0F294A] hover:bg-[#07192E] font-display text-[9px] uppercase tracking-widest text-white font-extrabold text-center transition-colors rounded-lg cursor-pointer shadow-2xs"
                              >
                                Request Quote
                              </button>
                            </div>

                          </div>
                        </motion.div>
                      );
                    })
                  ) : (
                    <div className="col-span-2 text-center py-20 border border-dashed border-gray-200 rounded-3xl bg-[#F8F9FA]/50">
                      <div className="h-10 w-10 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <SlidersHorizontal className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111]">
                        No Products Found
                      </h3>
                      <p className="font-sans text-xs text-gray-500 mt-2 max-w-sm mx-auto leading-relaxed">
                        No products match your active search terms or filters. Try adjusting your selections or resetting filters.
                      </p>
                      <button
                        onClick={handleResetFilters}
                        className="mt-6 px-5 py-2.5 bg-[#0F294A] hover:bg-[#07192E] text-white font-display text-[9px] uppercase tracking-widest font-extrabold rounded-lg cursor-pointer transition-colors shadow-2xs"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* 9. PAGINATION (LOAD MORE) */}
              {filteredProducts.length > visibleCount && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-4 border border-gray-250 hover:border-black text-[#111111] font-display text-xs uppercase tracking-widest font-extrabold bg-white hover:bg-gray-50 transition-colors rounded-lg cursor-pointer shadow-3xs"
                  >
                    Load More Products
                  </button>
                </div>
              )}

            </div>

          </div>
        </Container>
      </section>

      {/* 6. FEATURED PRODUCTS SPOTLIGHT ROW */}
      <section className="py-20 bg-[#F8F9FA] border-t border-b border-gray-150" aria-label="Featured Spotlight">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-display text-[9px] uppercase tracking-[0.25em] text-[#0F294A] font-extrabold bg-[#E6EEF8] px-3 py-1 rounded-full">
              Factory Highlights
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] mt-4">
              Best-Selling Solutions
            </h2>
            <p className="font-sans text-xs text-gray-500 mt-2">
              Our most-demanded silver laminated products trusted by high-volume catering, hotels, and distributors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 4).map((prod) => {
              const categoryLabel = categories.find(c => c.id === prod.category)?.title || 'Silver Dinnerware';
              return (
                <div
                  key={`featured-${prod.id}`}
                  className="bg-white border border-gray-200 hover:border-[#0F294A]/30 rounded-2xl p-5 shadow-3xs hover:shadow-xs transition-all duration-300 group flex flex-col justify-between h-[450px]"
                >
                  <div className="aspect-[4/3] bg-gray-50 border border-gray-150 rounded-xl relative overflow-hidden flex items-center justify-center shrink-0">
                    <img
                      src={getCategoryImageUrl(prod.category)}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#0F294A] text-white font-sans text-[8px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold shadow-3xs">
                      Wholesale Best Seller
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between mt-4">
                    <div>
                      <span className="font-display text-[8px] uppercase tracking-wider text-gray-400 font-bold">
                        {categoryLabel}
                      </span>
                      <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#111111] mt-1 mb-2 line-clamp-1">
                        {prod.name}
                      </h3>
                      <p className="font-sans text-[10px] text-gray-500 leading-relaxed line-clamp-2">
                        {prod.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 shrink-0">
                      <button
                        onClick={() => onSelectProduct(prod)}
                        className="py-2.5 border border-gray-200 hover:border-black font-display text-[8px] uppercase tracking-widest text-[#111111] font-extrabold text-center hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => onOpenEnquiry(prod.name)}
                        className="py-2.5 bg-[#0F294A] hover:bg-[#07192E] font-display text-[8px] uppercase tracking-widest text-white font-extrabold text-center transition-colors rounded-lg cursor-pointer shadow-3xs"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 8. TRUST SECTION */}
      <section className="py-12 bg-white border-b border-gray-150" aria-label="Trust section">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-10 w-10 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-center text-gray-700 mb-3">
                <Factory className="h-4.5 w-4.5" />
              </div>
              <h4 className="font-display text-[10px] font-extrabold uppercase tracking-wider text-[#111111] mb-1">
                Manufacturer Direct
              </h4>
              <p className="font-sans text-[10px] text-gray-500 leading-normal">
                Sourced direct from our Delhi NCR stamping assembly lines.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="h-10 w-10 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-center text-gray-700 mb-3">
                <Tag className="h-4.5 w-4.5" />
              </div>
              <h4 className="font-display text-[10px] font-extrabold uppercase tracking-wider text-[#111111] mb-1">
                Affordable Pricing
              </h4>
              <p className="font-sans text-[10px] text-gray-500 leading-normal">
                Wholesale quotes specifically customized to lower costs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="h-10 w-10 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-center text-gray-700 mb-3">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <h4 className="font-display text-[10px] font-extrabold uppercase tracking-wider text-[#111111] mb-1">
                Reliable Quality
              </h4>
              <p className="font-sans text-[10px] text-gray-500 leading-normal">
                Strict hydraulic pressure press testing with dense base wood.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="h-10 w-10 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-center text-gray-700 mb-3">
                <Layers className="h-4.5 w-4.5" />
              </div>
              <h4 className="font-display text-[10px] font-extrabold uppercase tracking-wider text-[#111111] mb-1">
                Bulk Supply
              </h4>
              <p className="font-sans text-[10px] text-gray-500 leading-normal">
                Massive warehousing setup guarantees continuous inventory.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 col-span-2 md:col-span-1">
              <div className="h-10 w-10 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-center text-gray-700 mb-3">
                <Truck className="h-4.5 w-4.5" />
              </div>
              <h4 className="font-display text-[10px] font-extrabold uppercase tracking-wider text-[#111111] mb-1">
                Fast Dispatch
              </h4>
              <p className="font-sans text-[10px] text-gray-500 leading-normal">
                Express shipping logistics across major industrial corridors.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 7. BULK ORDER BANNER */}
      <section className="py-20 bg-[#F8F9FA]" aria-label="Large Quantities CTA">
        <Container>
          <div className="relative border border-gray-250 bg-white p-8 md:p-16 text-center max-w-4xl mx-auto overflow-hidden shadow-xs rounded-3xl">
            <div className="relative z-10 flex flex-col items-center gap-6">
              
              <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#0F294A] font-extrabold bg-[#E6EEF8] px-3 py-1 rounded-full">
                Factory Wholesale Division
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111] max-w-xl leading-tight">
                Need Large Quantities?
              </h2>

              <p className="font-sans text-sm text-[#555555] max-w-lg leading-relaxed">
                Contact us directly for wholesale and bulk orders.
              </p>

              {/* 3-Button Stack */}
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
                  onClick={() => onOpenEnquiry('B2B Custom Corporate Order')}
                  className="font-display text-xs uppercase tracking-wider bg-[#0F294A] hover:bg-[#07192E] text-white font-bold px-8 py-4.5 cursor-pointer transition-colors flex items-center justify-center gap-2 rounded-lg shadow-2xs"
                >
                  Request Quote
                </button>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* MOBILE FILTERS DRAWER SLIDE IN SHEET */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black z-50 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-xs bg-white z-50 p-6 flex flex-col justify-between shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-6 overflow-y-auto max-h-[85vh]">
                <div className="flex items-center justify-between border-b border-gray-150 pb-4">
                  <span className="font-display text-xs uppercase tracking-widest font-extrabold text-[#111111]">
                    Filter Products
                  </span>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="text-gray-500 hover:text-black cursor-pointer">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Category Selector */}
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-white border border-gray-250 py-3 px-3 rounded-lg font-sans text-xs text-gray-700 outline-none"
                  >
                    <option value="all">All Categories</option>
                    <option value="paper-plates">Paper Plates</option>
                    <option value="dinner-plates">Dinner Plates</option>
                    <option value="compartment-plates">Compartment Plates</option>
                    <option value="paper-bowls">Paper Bowls</option>
                    <option value="special-products">Special Products</option>
                  </select>
                </div>

                {/* Size Selector */}
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">
                    Diameter (Inches)
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-white border border-gray-250 py-3 px-3 rounded-lg font-sans text-xs text-gray-700 outline-none"
                  >
                    <option value="all">All Sizes</option>
                    {uniqueSizes.map(size => (
                      <option key={size} value={size.toString()}>{size} inches</option>
                    ))}
                  </select>
                </div>

                {/* Shape Selector */}
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">
                    Geometric Shape
                  </label>
                  <select
                    value={selectedShape}
                    onChange={(e) => setSelectedShape(e.target.value)}
                    className="w-full bg-white border border-gray-250 py-3 px-3 rounded-lg font-sans text-xs text-gray-700 outline-none"
                  >
                    <option value="all">All Shapes</option>
                    {uniqueShapes.map(shape => (
                      <option key={shape} value={shape}>{shape}</option>
                    ))}
                  </select>
                </div>

                {/* Availability Selector */}
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">
                    Logistics Availability
                  </label>
                  <select
                    value={selectedAvailability}
                    onChange={(e) => setSelectedAvailability(e.target.value)}
                    className="w-full bg-white border border-gray-250 py-3 px-3 rounded-lg font-sans text-xs text-gray-700 outline-none"
                  >
                    <option value="all">All Status</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Bulk Pre-Order">Bulk Pre-Order</option>
                  </select>
                </div>

                {/* Sort selector */}
                <div className="flex flex-col gap-2">
                  <label className="font-display text-[9px] uppercase tracking-wider text-gray-400 font-extrabold">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full bg-white border border-gray-250 py-3 px-3 rounded-lg font-sans text-xs text-gray-700 outline-none"
                  >
                    <option value="default">Default Catalog</option>
                    <option value="newest">Newest Manufactured</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>

              {/* Drawer Apply Buttons */}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-150">
                <button
                  onClick={handleResetFilters}
                  className="w-full py-3 border border-gray-200 font-display text-[10px] uppercase tracking-widest font-extrabold text-gray-600 rounded-lg cursor-pointer"
                >
                  Reset Filters
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3 bg-[#0F294A] text-white font-display text-[10px] uppercase tracking-widest font-extrabold rounded-lg cursor-pointer shadow-3xs"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
