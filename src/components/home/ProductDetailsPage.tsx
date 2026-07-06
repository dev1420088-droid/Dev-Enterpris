/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Building2, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  MessageSquare, 
  PhoneCall, 
  CheckCircle2, 
  ShieldCheck, 
  Coins, 
  Boxes, 
  Truck, 
  Utensils, 
  Store, 
  Cake, 
  Sparkles, 
  Briefcase, 
  Home as HomeIcon, 
  ChefHat, 
  Calendar, 
  Heart,
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Info, 
  Package, 
  PackageCheck,
  AlertCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Headset,
  Trophy,
  Award,
  CircleDot,
  HelpCircle,
  ShoppingCart,
  Check,
  Layers
} from 'lucide-react';
import { Product } from '../../types';
import { PRODUCTS, CATEGORIES } from '../../data/staticData';
import { motion, AnimatePresence } from 'motion/react';
import Container from '../ui/Container';

interface ProductDetailsPageProps {
  product: Product;
  onBack: () => void;
  onOpenEnquiry: (productName?: string) => void;
  onSelectProduct: (product: Product) => void;
}

// Technical angles for the image gallery
const GALLERY_VIEWS = [
  { id: 'top', label: 'Studio Top View', desc: 'Symmetrical face-on rendering showing the premium stamping and silver finish.' },
  { id: 'isometric', label: 'Isometric Stack', desc: 'Shows depth, rigidity, and how neatly they stack in heavy-volume environments.' },
  { id: 'rim', label: 'Rim Close-up', desc: 'Focuses on the 22-micron food-grade leak-proof lock-rim lamination.' },
  { id: 'packaging', label: 'Heavy-duty Carton', desc: 'Illustrates the moisture-proof shrink-wrap and 5-ply transport cartons.' }
];

export default function ProductDetailsPage({ 
  product, 
  onBack, 
  onOpenEnquiry,
  onSelectProduct 
}: ProductDetailsPageProps) {
  const [activeView, setActiveView] = useState('top');
  
  // Interactive Magnifier Zoom States
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomScale, setZoomScale] = useState(1.25);
  
  // Size selector state
  const [selectedSize, setSelectedSize] = useState<number>(
    product.diametersInches && product.diametersInches.length > 0 ? product.diametersInches[0] : 8
  );

  // Cart Future-Ready Toast State
  const [showCartToast, setShowCartToast] = useState(false);

  // FAQ Expanded State (accordion)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Bulk Enquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    quantity: '10000',
    city: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const enquiryFormRef = useRef<HTMLDivElement>(null);

  // Scroll to top and reset states when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveView('top');
    setIsZoomed(false);
    setFormSubmitted(false);
    
    const initialSize = product.diametersInches && product.diametersInches.length > 0 
      ? product.diametersInches[0] 
      : 8;
    setSelectedSize(initialSize);
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessName: '',
      quantity: '10000',
      city: '',
      message: `Hi Dev Enterprise Sourcing, we are interested in receiving a wholesale quote and sample verification for the "${product.name}" in size ${initialSize} inches. Please contact us with shipping rates and custom stamping options.`
    });
  }, [product]);

  // Update prefilled message when size changes
  const handleSizeChange = (size: number) => {
    setSelectedSize(size);
    setFormData(prev => ({
      ...prev,
      message: `Hi Dev Enterprise Sourcing, we are interested in receiving a wholesale quote and sample verification for the "${product.name}" in size ${size} inches. Please contact us with shipping rates and custom stamping options.`
    }));
  };

  // Find category friendly name
  const categoryObj = CATEGORIES.find(c => c.id === product.category);
  const categoryName = categoryObj ? categoryObj.name : 'Silver Dinnerware';

  // Find 4 related products
  const relatedProducts = PRODUCTS
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  // Specifications table list (Requirement 2)
  const specs = [
    { label: 'Material', value: 'Premium heavyweight virgin wood pulp base (350 - 450 GSM core rigidity)', icon: Layers },
    { label: 'Silver Sheet Finish', value: 'Food-safe 22-micron high-gloss hot-stamped silver sheet lamination', icon: Sparkles },
    { label: 'Shape', value: product.shapes ? product.shapes.join(', ') : 'Round', icon: CircleDot },
    { label: 'Available Sizes', value: product.diametersInches ? product.diametersInches.map(d => `${d}"`).join(', ') : '6", 7", 8", 10", 12"', icon: ZoomIn },
    { label: 'Food Grade', value: 'FDA compliant, 100% chemical-inert, non-toxic organic starch binder', icon: ShieldCheck },
    { label: 'Usage', value: 'Commercial buffet systems, wedding caterers, street fast foods, corporate cafeterias, and homes', icon: Utensils },
    { label: 'Packaging', value: '50 or 100 piece moisture-proof shrink-wrap packages inside heavy 5-ply kraft shipping cartons', icon: Package },
    { label: 'Manufacturer', value: 'Dev Enterprise (Factory direct shipping from industrial stamping lines in Delhi NCR)', icon: Building2 }
  ];

  // Modern application cards list (Requirement 3)
  const applications = [
    { 
      id: 'app-restaurants',
      icon: Utensils, 
      title: 'Restaurants', 
      desc: 'Elegant plating alternatives that handle steaming hot rice, dals, and oily main courses with absolute leak safety.' 
    },
    { 
      id: 'app-streetfood',
      icon: Store, 
      title: 'Street Food', 
      desc: 'Super rigid small-plates ideal for rapid serving of golgappas, tikki, chaats, and oily street rolls.' 
    },
    { 
      id: 'app-parties',
      icon: Cake, 
      title: 'Birthday Parties', 
      desc: 'Highly festive silver sheen that elevates party themes and offers effortless cleanups for busy parents.' 
    },
    { 
      id: 'app-events',
      icon: Calendar, 
      title: 'Events', 
      desc: 'Consistent stamping layout that stacks uniformly for fast buffet setups and caterer assembly lines.' 
    },
    { 
      id: 'app-weddings',
      icon: Heart, 
      title: 'Weddings', 
      desc: 'Replaces costly ceramic dinnerware. Provides high-status presentation at a fraction of the weight and expenses.' 
    },
    { 
      id: 'app-catering',
      icon: ChefHat, 
      title: 'Catering', 
      desc: 'High-lip boundaries and thermal insulating barrier shields servers and keeps hot meals comfortable to hold.' 
    },
    { 
      id: 'app-corporate',
      icon: Briefcase, 
      title: 'Corporate Functions', 
      desc: 'Factory-sealed, completely hygienic shrink wraps that conform to modern workspace sanitization audits.' 
    },
    { 
      id: 'app-home',
      icon: HomeIcon, 
      title: 'Home Use', 
      desc: 'The ultimate convenience for family Pujas, festivals, and backyard BBQ get-togethers without any sink pile-ups.' 
    }
  ];

  // 6 Product Feature Cards (Requirement 4)
  const productFeatures = [
    {
      id: 'feat-quality',
      icon: Award,
      title: 'Reliable Quality',
      desc: 'Tested to remain 100% sag-proof under greasy sauces and boiling liquids for over 12 continuous hours.'
    },
    {
      id: 'feat-pricing',
      icon: Coins,
      title: 'Affordable Pricing',
      desc: 'Wholesale tier margins with factory direct rates that eliminate distributors or wholesale middlemen markup.'
    },
    {
      id: 'feat-construction',
      icon: Layers,
      title: 'Strong Construction',
      desc: 'Double-pressed thick organic board fibers create an incredibly sturdy structural base that stays flat.'
    },
    {
      id: 'feat-direct',
      icon: Building2,
      title: 'Manufacturer Direct',
      desc: 'Manufactured and dispatched directly from our automated stamping line based in Delhi NCR, India.'
    },
    {
      id: 'feat-supply',
      icon: Truck,
      title: 'Fast Supply',
      desc: 'High-speed modern machinery assures consistent stock levels and swift dispatch within 24-48 hours.'
    },
    {
      id: 'feat-bulk',
      icon: Boxes,
      title: 'Bulk Orders',
      desc: 'Highly scalable capacity to dispatch massive volumes ranging from 10,000 to over 1,000,000+ plates.'
    }
  ];

  // FAQ Accordion List (Requirement 7)
  const faqItems = [
    {
      question: "What sizes are available?",
      answer: "We offer a comprehensive range of diameters including 6-inch, 7-inch, 8-inch, 10-inch, and 12-inch sizes. These sizes are engineered across round, square, and multi-compartment partitioned designs to satisfy appetizers, light snacks, side servings, or full-course heavy meals."
    },
    {
      question: "Can I place bulk orders?",
      answer: "Absolutely! Dev Enterprise is a high-volume direct manufacturer. Our standard Minimum Order Quantity (MOQ) starts at 10,000 units. We offer deep commercial wholesale tier discounts for high-volume caterers, regional wedding planners, and national retail distributors."
    },
    {
      question: "How is the product packaged?",
      answer: "All silver plates are packed under sterile conditions in shrink-wrapped batches of 50 or 100 plates. This shields the metallic layer from humidity and moisture. These packs are then stacked inside heavy-duty, double-walled 5-ply corrugated kraft cartons to secure them during freight transport."
    },
    {
      question: "Do you deliver across India?",
      answer: "Yes, we ship nationwide! From our factory unit in Delhi NCR, we coordinate with major third-party logistics firms and heavy freight carriers to ship securely to any state, district, or municipal transport hub in India, complete with real-time consignment tracking."
    }
  ];

  // Trust Section (Requirement 8)
  const trustPillars = [
    { 
      id: 'trust-direct',
      icon: Building2, 
      title: 'Manufacturer Direct', 
      desc: 'Fresh off our Delhi NCR stamping rollers. Guaranteed lowest direct factory quotes.' 
    },
    { 
      id: 'trust-quality',
      icon: ShieldCheck, 
      title: 'Reliable Quality', 
      desc: 'Heavy-duty 400+ GSM food-grade boards. Safe under hot oil and heavy curries.' 
    },
    { 
      id: 'trust-pricing',
      icon: Coins, 
      title: 'Affordable Pricing', 
      desc: 'No middleman markups. Enjoy competitive bulk price tiers on all items.' 
    },
    { 
      id: 'trust-dispatch',
      icon: Truck, 
      title: 'Fast Dispatch', 
      desc: 'Rapid logistics coordination. Secure packing for reliable statewide transit.' 
    },
    { 
      id: 'trust-support',
      icon: Headset, 
      title: 'Customer Support', 
      desc: 'Dedicated wholesale specialists ready to handle custom specs and dispatch orders.' 
    }
  ];

  // Handle Magnifier Zoom Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  // Scroll smoothly to enquiry form
  const scrollToEnquiry = () => {
    if (enquiryFormRef.current) {
      enquiryFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Blink form to attract attention
      const formBg = enquiryFormRef.current.querySelector('.form-container-box');
      if (formBg) {
        formBg.classList.add('ring-2', 'ring-black');
        setTimeout(() => {
          formBg.classList.remove('ring-2', 'ring-black');
        }, 1500);
      }
    }
  };

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const triggerAddToCart = () => {
    setShowCartToast(true);
    setTimeout(() => {
      setShowCartToast(false);
    }, 5000);
  };

  return (
    <div id="product-details-root" className="py-24 bg-[#F8F9FA] min-h-screen text-[#1A1A1A] overflow-hidden">
      <Container>
        
        {/* Breadcrumbs */}
        <nav id="breadcrumbs-nav" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-display uppercase tracking-widest text-gray-500">
          <button 
            id="bc-home-btn"
            onClick={onBack}
            className="hover:text-black hover:underline transition-colors focus:outline-none"
          >
            Home
          </button>
          <span>/</span>
          <button 
            id="bc-products-btn"
            onClick={onBack}
            className="hover:text-black hover:underline transition-colors focus:outline-none"
          >
            Products
          </button>
          <span>/</span>
          <span className="text-gray-400">{categoryName}</span>
          <span>/</span>
          <span className="text-black font-extrabold">{product.name}</span>
        </nav>

        {/* Back Button */}
        <button
          id="product-back-btn"
          onClick={onBack}
          className="group mb-8 inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-widest text-gray-600 hover:text-black font-bold focus:outline-none py-1.5"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Catalog
        </button>

        {/* SECTION 1: PRODUCT HERO */}
        <div id="product-hero-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 bg-white border border-gray-200/80 rounded-2xl p-6 md:p-10 shadow-xs mb-16">
          
          {/* LEFT COLUMN: Large Product Image Gallery */}
          <div id="gallery-container" className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Interactive Image Container with Zoom on Hover */}
            <div 
              id="main-image-zoom-box"
              className="relative aspect-square border border-gray-200 bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl overflow-hidden flex items-center justify-center p-8 select-none cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              {/* Gridlines to symbolize design blueprint & prepare containers for real images */}
              <div className="absolute inset-4 border border-dashed border-gray-200/50 pointer-events-none rounded-lg" />
              <div className="absolute top-1/2 left-3 right-3 h-px border-t border-dashed border-gray-200/40 pointer-events-none" />
              <div className="absolute left-1/2 top-3 bottom-3 w-px border-l border-dashed border-gray-200/40 pointer-events-none" />
              
              <div className="absolute top-4 left-4 font-mono text-[7px] text-gray-400 uppercase tracking-widest pointer-events-none">
                VIEW: {activeView.toUpperCase()} / HIGH-RES DIGITAL MODEL
              </div>

              {/* Status & Trust Badges Overlay */}
              <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end z-10 pointer-events-none">
                <span className="bg-black text-white font-display text-[8px] uppercase tracking-[0.2em] font-extrabold px-3 py-1 shadow-2xs">
                  Manufacturer Direct
                </span>
                <span className="bg-[#E2E8F0] text-black border border-gray-300 font-display text-[8px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 shadow-2xs">
                  Bulk Orders Available
                </span>
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 font-display text-[8px] uppercase tracking-wider font-semibold px-2.5 py-0.5">
                  Available in Stock
                </span>
              </div>

              {/* Render High-Fidelity SVG Plates or Image depending on current gallery selection */}
              <motion.div
                id="zoomable-render-layer"
                className="w-full h-full flex items-center justify-center transition-all duration-100 ease-out"
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isZoomed ? `scale(${zoomScale * 1.5})` : `scale(1)`
                }}
              >
                {/* Fallback elegant SVG/vector design. Ready to load real image URL in the future if present */}
                {product.imageUrl && activeView === 'top' && !isZoomed ? (
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    referrerPolicy="no-referrer"
                    className="w-[85%] h-[85%] object-contain"
                  />
                ) : (
                  <div className="w-[85%] h-[85%] border-2 border-gray-300/40 rounded-full flex flex-col items-center justify-center p-6 relative bg-white/40 backdrop-blur-3xs shadow-xs">
                    
                    {/* Concentric rings showing design */}
                    <div className="absolute inset-2 border border-dashed border-gray-300/60 rounded-full" />
                    <div className="absolute inset-8 border border-gray-200 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#F1F5F9]/30 to-white">
                      <div className="absolute inset-1 border border-dashed border-gray-300/30 rounded-full" />
                      
                      {/* Central Stamping */}
                      <div className="w-16 h-16 rounded-full border border-gray-200 flex flex-col items-center justify-center bg-white/80 p-2 text-center">
                        <Sparkles className="h-4 w-4 text-gray-400 mb-0.5" />
                        <span className="font-mono text-[6px] text-gray-400 uppercase tracking-widest">STAMPED</span>
                      </div>
                    </div>

                    {/* Interactive Diameter Indicator overlay */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 bg-black text-white px-2 py-0.5 font-mono text-[8px] tracking-wider rounded-md">
                      {selectedSize}" DIAMETER
                    </div>

                    {/* Highlighting specific view details */}
                    {activeView === 'isometric' && (
                      <div className="absolute inset-0 bg-black/[0.02] rounded-full flex items-center justify-center">
                        <div className="w-[90%] h-[90%] border-2 border-double border-gray-300 rounded-full absolute -bottom-3 left-2 pointer-events-none opacity-60" />
                        <div className="w-[90%] h-[90%] border-2 border-double border-gray-300 rounded-full absolute -bottom-6 left-4 pointer-events-none opacity-40" />
                        <span className="bg-white/90 border border-gray-200 text-black px-2 py-1 font-display text-[7px] uppercase tracking-widest font-extrabold rounded shadow-2xs absolute top-4">
                          HEAVY 3-PLY VERTICAL STACK
                        </span>
                      </div>
                    )}

                    {activeView === 'rim' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute top-1 right-1 h-8 w-8 rounded-full border-2 border-black animate-ping opacity-20 pointer-events-none" />
                        <div className="absolute top-1 right-1 h-8 w-8 rounded-full border-2 border-black flex items-center justify-center bg-black text-white font-display text-[7px] font-extrabold">
                          22μ
                        </div>
                        <span className="bg-black text-white px-2 py-0.5 font-display text-[7px] uppercase tracking-widest font-extrabold rounded shadow-2xs absolute bottom-4">
                          REINFORCED LEAK-PROOF BEAD
                        </span>
                      </div>
                    )}

                    {activeView === 'packaging' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-full">
                        <div className="flex flex-col items-center gap-1">
                          <PackageCheck className="h-6 w-6 text-gray-400" />
                          <span className="font-display text-[8px] uppercase tracking-widest text-black font-extrabold">SHRINK WRAPPED</span>
                          <span className="font-mono text-[6px] text-gray-400">50 plates / moisture barrier</span>
                        </div>
                      </div>
                    )}

                    {/* Plate Title label */}
                    <div className="absolute bottom-[16%] text-center z-10 bg-white/70 px-3 py-1 rounded-full backdrop-blur-xs">
                      <span className="font-display text-[8px] uppercase tracking-widest text-[#1A1A1A] font-extrabold block">
                        {product.name}
                      </span>
                      <span className="font-mono text-[6px] text-gray-400 block">
                        SKU: DE-SLV-{selectedSize}
                      </span>
                    </div>

                  </div>
                )}
              </motion.div>

              {/* Shadow effect below plates */}
              <div className="absolute bottom-[6%] w-[70%] h-[12px] bg-black/[0.04] rounded-full blur-[6px] pointer-events-none" />

              {/* Manual Zoom Guide */}
              <div className="absolute bottom-4 left-4 text-gray-400 text-[9px] font-mono pointer-events-none hidden sm:block">
                Hover to Zoom (2.0x Magnification)
              </div>

              {/* Zoom Controls Overlay */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white border border-gray-250 p-1 shadow-2xs rounded-lg z-10">
                <button 
                  id="zoom-in-btn"
                  onClick={() => setZoomScale(prev => Math.min(prev + 0.15, 1.8))} 
                  title="Zoom In"
                  className="p-1 hover:bg-gray-100 text-gray-600 rounded transition-colors"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </button>
                <button 
                  id="zoom-out-btn"
                  onClick={() => setZoomScale(prev => Math.max(prev - 0.15, 0.9))} 
                  title="Zoom Out"
                  className="p-1 hover:bg-gray-100 text-gray-600 rounded transition-colors"
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                </button>
                <button 
                  id="zoom-reset-btn"
                  onClick={() => { setZoomScale(1.25); setActiveView('top'); }} 
                  title="Reset Scale"
                  className="p-1 hover:bg-gray-100 text-gray-600 rounded transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images list */}
            <div id="gallery-thumbnails-grid" className="grid grid-cols-4 gap-2.5">
              {GALLERY_VIEWS.map((view) => (
                <button
                  id={`thumb-btn-${view.id}`}
                  key={view.id}
                  onClick={() => {
                    setActiveView(view.id);
                  }}
                  className={`py-2 px-1 text-center border font-display text-[8px] uppercase tracking-wider transition-all duration-300 rounded-md focus:outline-none flex flex-col items-center justify-center gap-0.5 ${
                    activeView === view.id 
                      ? 'bg-black text-white border-black font-extrabold shadow-sm' 
                      : 'bg-white border-gray-250 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="block font-bold truncate max-w-full">{view.label}</span>
                  <span className="text-[6px] opacity-70 scale-90 hidden sm:block">Angle View</span>
                </button>
              ))}
            </div>

            {/* Selected Angle Description */}
            <div id="active-angle-desc-box" className="p-3 bg-gray-50 border border-gray-150 rounded-xl text-[11px] text-gray-500 font-sans leading-relaxed">
              <strong>{GALLERY_VIEWS.find(v => v.id === activeView)?.label}:</strong> {GALLERY_VIEWS.find(v => v.id === activeView)?.desc}
            </div>

          </div>

          {/* RIGHT COLUMN: Product Specs, Available Sizes & High-conversion CTAs */}
          <div id="details-panel" className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            <div className="flex flex-col gap-4">
              {/* Manufacturer Tag line */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-black text-white font-display text-[8px] uppercase tracking-widest px-2.5 py-0.5 font-bold">
                  Direct Manufacturer Despatch
                </span>
                <span className="text-gray-400 font-mono text-[9px] uppercase tracking-wider">
                  MODEL: DE-SLV-{product.id.toUpperCase()}
                </span>
              </div>

              {/* Title & Short Description */}
              <div className="flex flex-col gap-1">
                <h1 id="product-details-title" className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-[#1A1A1A]">
                  {product.name}
                </h1>
                <p className="font-display text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Category: {categoryName}
                </p>
              </div>

              {/* Badges row */}
              <div className="flex flex-wrap gap-2">
                <div className="bg-[#F1F5F9] border border-gray-200 text-[#1A1A1A] font-display text-[8px] uppercase tracking-widest px-2.5 py-1 font-extrabold flex items-center gap-1">
                  <Building2 className="h-2.5 w-2.5" /> Manufacturer Direct
                </div>
                <div className="bg-[#F1F5F9] border border-gray-200 text-[#1A1A1A] font-display text-[8px] uppercase tracking-widest px-2.5 py-1 font-extrabold flex items-center gap-1">
                  <Boxes className="h-2.5 w-2.5" /> Bulk Orders Available
                </div>
                <div className="bg-emerald-50 border border-emerald-150 text-emerald-800 font-display text-[8px] uppercase tracking-widest px-2.5 py-1 font-extrabold flex items-center gap-1">
                  <Check className="h-2.5 w-2.5" /> In Stock & Ready
                </div>
              </div>

              {/* Core short product description */}
              <div className="border-t border-b border-gray-150 py-4 my-1">
                <p id="short-description-para" className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed">
                  {product.description} Laminated with a food-safe 22μ silver foil sheet, this heavyweight plate prevents grease leakage, gravy soaking, or thermal distortion. Designed specifically to offer high-status buffet dining at direct wholesale rates.
                </p>
              </div>

              {/* Available Sizes selector (Requirement 1 - Available Sizes) */}
              <div id="size-selector-block" className="flex flex-col gap-2">
                <span className="font-display text-[9px] uppercase tracking-[0.2em] text-gray-400 font-extrabold">
                  Select Required Size (Current Selection: {selectedSize}")
                </span>
                <div className="flex flex-wrap gap-2">
                  {[6, 7, 8, 10, 12].map((size) => {
                    const isConfigured = product.diametersInches ? product.diametersInches.includes(size) : (size === 8);
                    return (
                      <button
                        id={`size-btn-${size}`}
                        key={size}
                        onClick={() => handleSizeChange(size)}
                        className={`h-11 px-4 border font-display text-xs font-extrabold transition-all duration-200 rounded-lg flex items-center gap-1.5 focus:outline-none ${
                          selectedSize === size
                            ? 'bg-black text-white border-black shadow-xs'
                            : 'bg-white border-gray-200 text-[#1A1A1A] hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-sm">{size}"</span>
                        <span className="text-[8px] opacity-75 uppercase">Inch</span>
                        {!isConfigured && (
                          <span className="bg-gray-100 text-gray-500 text-[6px] px-1 py-0.5 rounded ml-1 tracking-normal font-normal">
                            Custom MOQ
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-gray-400 font-sans mt-0.5">
                  * Selected size will be pre-filled automatically in your Wholesale enquiry request.
                </p>
              </div>

              {/* Specs pill quick highlights */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-gray-50 border border-gray-150 px-3 py-2.5 rounded-xl flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-white border border-gray-200 flex items-center justify-center text-black">
                    <Layers className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-mono text-[7px] uppercase text-gray-400 block leading-none font-bold">Rigidity</span>
                    <span className="font-display text-[9px] uppercase text-black font-extrabold">350 - 450 GSM Base</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-150 px-3 py-2.5 rounded-xl flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-white border border-gray-200 flex items-center justify-center text-black">
                    <Sparkles className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-mono text-[7px] uppercase text-gray-400 block leading-none font-bold">Finish</span>
                    <span className="font-display text-[9px] uppercase text-black font-extrabold">22μ Silver Sheet</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTAs Column Block */}
            <div id="ctas-container" className="flex flex-col gap-3 pt-6 border-t border-gray-150">
              
              {/* Primary & Secondary CTA Block */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Primary CTA: Request Bulk Quote */}
                <button
                  id="primary-quote-cta"
                  onClick={scrollToEnquiry}
                  className="flex-1 py-4 bg-black hover:bg-gray-800 text-white font-display text-xs uppercase tracking-widest font-extrabold rounded-lg shadow-xs transition-all text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Request Bulk Quote
                </button>

                {/* Secondary CTA: Add to Cart (Future Ready) */}
                <button
                  id="secondary-cart-cta"
                  onClick={triggerAddToCart}
                  className="flex-1 py-4 border border-gray-300 hover:border-black text-gray-700 hover:text-black font-display text-xs uppercase tracking-widest font-extrabold bg-white hover:bg-gray-50 transition-all text-center rounded-lg flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart (Future Ready)
                </button>
              </div>

              {/* Direct Support numbers row */}
              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  id="factory-call-cta"
                  href="tel:+919999999999"
                  className="py-3 border border-gray-200 hover:border-[#0F294A] text-[#0F294A] font-display text-[9px] uppercase tracking-widest font-extrabold bg-white hover:bg-blue-50/20 transition-all rounded-lg flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-[#0F294A]" />
                  Call Factory Desk
                </a>
                <a
                  id="factory-whatsapp-cta"
                  href={`https://wa.me/919999999999?text=Hi%20Dev%20Enterprise,%20I%20am%20interested%20in%20a%20commercial%20wholesale%20quote%20for%20the%20${encodeURIComponent(product.name)}%20in%20${selectedSize}%2522%20size.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display text-[9px] uppercase tracking-widest font-extrabold transition-all rounded-lg flex items-center justify-center gap-1.5"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.989 14.058.96 11.444.96c-5.44 0-9.865 4.369-9.87 9.8-.002 1.83.499 3.614 1.455 5.172l-.953 3.486 3.571-.937z" />
                  </svg>
                  WhatsApp Desk
                </a>
              </div>

              {/* Online payment disclaimer */}
              <p className="text-[10px] text-gray-400 text-center font-sans mt-1">
                * Minimum Order Quantity is 10,000 plates. Full freight coordination arranged nationwide.
              </p>

            </div>

          </div>

        </div>

        {/* Future Ready Cart Toast Notification */}
        <AnimatePresence>
          {showCartToast && (
            <motion.div 
              id="cart-future-toast"
              className="fixed bottom-6 right-6 bg-[#1A1A1A] border border-gray-800 text-white rounded-xl p-4 shadow-xl max-w-sm z-50 flex gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Info className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="font-display text-[10px] uppercase tracking-wider font-extrabold text-white">Online Checkout is Coming Soon!</span>
                <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                  We are actively establishing our standard e-commerce retail cart. For high-volume distributor contracts, weddings, or wholesale orders, please log an enquiry below to secure direct NCR factory prices.
                </p>
                <div className="w-full bg-gray-800 h-1 mt-1 rounded-full overflow-hidden">
                  <motion.div 
                    className="bg-white h-full" 
                    initial={{ width: '100%' }}
                    animate={{ width: '0%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 2: PRODUCT SPECIFICATIONS */}
        <div id="product-specifications-section" className="mb-16">
          <div className="flex flex-col gap-1 mb-6">
            <span className="font-display text-[9px] uppercase tracking-[0.25em] text-gray-400 font-bold">
              Engineering Specs
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-black">
              Product Specifications Matrix
            </h2>
            <div className="w-12 h-px bg-black mt-1" />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="divide-y divide-gray-150 font-sans text-xs">
              {specs.map((sp, idx) => {
                const SpecIcon = sp.icon;
                return (
                  <div 
                    id={`spec-row-${idx}`}
                    key={idx} 
                    className={`grid grid-cols-1 md:grid-cols-4 p-4 gap-2 transition-colors duration-150 items-center ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 md:col-span-1">
                      <div className="h-6 w-6 rounded bg-gray-100 flex items-center justify-center text-gray-600">
                        <SpecIcon className="h-3 w-3" />
                      </div>
                      <span className="text-gray-500 font-display text-[10px] uppercase tracking-wider font-extrabold">
                        {sp.label}
                      </span>
                    </div>
                    <span className="text-black font-semibold md:col-span-3 leading-relaxed pl-1 md:pl-4">
                      {sp.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION 3: APPLICATIONS */}
        <div id="product-applications-section" className="mb-16">
          <div className="flex flex-col gap-1 mb-8 text-center items-center">
            <span className="font-display text-[9px] uppercase tracking-[0.25em] text-gray-400 font-bold">
              Versatile Dinnerware
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-black">
              Product Applications & Use Cases
            </h2>
            <p className="font-sans text-xs text-gray-500 max-w-lg mt-1 text-center">
              Our durable silver-laminated dinnerware is engineered specifically for diverse commercial catering operations, regional assemblies, and domestic convenience.
            </p>
            <div className="w-12 h-px bg-black mt-2" />
          </div>

          <div id="applications-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => {
              const IconComp = app.icon;
              return (
                <div 
                  id={app.id}
                  key={app.id} 
                  className="bg-white border border-gray-200/80 rounded-xl p-5 hover:border-black hover:shadow-sm transition-all duration-300 flex flex-col gap-3 group"
                >
                  <div className="h-10 w-10 border border-gray-200 bg-gray-50 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300 rounded-lg shadow-3xs">
                    <IconComp className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-[11px] uppercase tracking-widest font-extrabold text-[#1A1A1A]">
                      {app.title}
                    </h3>
                    <p className="font-sans text-[11px] text-gray-500 leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: PRODUCT FEATURES */}
        <div id="product-features-section" className="mb-16">
          <div className="flex flex-col gap-1 mb-8 text-center items-center">
            <span className="font-display text-[9px] uppercase tracking-[0.25em] text-gray-400 font-bold">
              Unrivaled Design Standards
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-black">
              Key Manufacturing Features
            </h2>
            <p className="font-sans text-xs text-gray-500 max-w-lg mt-1 text-center">
              Dev Enterprise blends mechanical stamping precision with high-grade organic wood fiber cores.
            </p>
            <div className="w-12 h-px bg-black mt-2" />
          </div>

          <div id="features-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productFeatures.map((feat) => {
              const FeatIcon = feat.icon;
              return (
                <div 
                  id={feat.id}
                  key={feat.id}
                  className="bg-white border border-gray-150 hover:border-black hover:shadow-xs p-6 rounded-2xl transition-all duration-300 flex items-start gap-4"
                >
                  <div className="h-10 w-10 border border-gray-200 bg-gray-50 text-black flex items-center justify-center rounded-xl shrink-0">
                    <FeatIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-xs font-extrabold text-black uppercase tracking-wider">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 5: RELATED PRODUCTS */}
        <div id="related-products-section" className="mb-16 border-t border-gray-200/80 pt-16">
          <div className="flex flex-col gap-1 mb-8">
            <span className="font-display text-[9px] uppercase tracking-[0.25em] text-gray-400 font-bold">
              Factory Catalog
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-black">
              Related Silver Dinnerware
            </h2>
            <div className="w-12 h-px bg-black mt-1" />
          </div>

          <div id="related-products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProd) => (
              <div
                id={`rel-product-card-${relProd.id}`}
                key={relProd.id}
                className="bg-white border border-gray-250/75 rounded-2xl overflow-hidden shadow-3xs hover:shadow-sm transition-all duration-300 flex flex-col group"
              >
                {/* Image Placeholder Container */}
                <div className="aspect-square relative bg-gradient-to-br from-white to-gray-50 border-b border-gray-150 p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-3 border border-dashed border-gray-200/40 pointer-events-none rounded-lg" />
                  <div className="absolute top-3 left-3 font-mono text-[6px] text-gray-400 pointer-events-none">
                    TECHNICAL RENDER CONTAINER
                  </div>

                  {/* Stamped Circle Wireframe simulating realistic render container */}
                  <div className="relative w-3/4 h-3/4 border border-dashed border-gray-300/80 rounded-full flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500 bg-white/40 shadow-4xs">
                    <div className="absolute inset-2 border border-gray-200 rounded-full" />
                    <span className="font-display text-[8px] uppercase tracking-widest text-[#1A1A1A] font-extrabold text-center max-w-[80px] leading-tight z-10">
                      {relProd.name.split(' ')[0]} {relProd.name.split(' ')[1] || ''}
                    </span>
                  </div>

                  {/* Size Badge */}
                  <div className="absolute bottom-3 right-3 bg-gray-100 text-[#1A1A1A] border border-gray-200 font-display text-[8px] uppercase tracking-wider font-extrabold px-1.5 py-0.5">
                    {relProd.diametersInches ? relProd.diametersInches.join(', ') : '8'}" sizes
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div className="flex flex-col gap-1.5 mb-4">
                    <h3 className="font-display text-xs font-extrabold text-black uppercase tracking-wider leading-snug group-hover:text-[#0F294A] transition-colors line-clamp-2">
                      {relProd.name}
                    </h3>
                    <span className="font-sans text-[11px] text-gray-500 bg-gray-50 border border-gray-150 px-2 py-0.5 w-max font-medium">
                      Diameter: {relProd.diametersInches ? relProd.diametersInches.map(d => `${d} inch`).join(', ') : '8"'}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id={`rel-details-btn-${relProd.id}`}
                      onClick={() => onSelectProduct(relProd)}
                      className="py-2.5 text-center border border-gray-250 hover:border-black font-display text-[8px] uppercase tracking-widest text-gray-600 hover:text-black font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1 bg-white rounded-md"
                    >
                      <Eye className="h-3 w-3" />
                      Details
                    </button>
                    <button
                      id={`rel-quote-btn-${relProd.id}`}
                      onClick={() => {
                        onSelectProduct(relProd);
                        setTimeout(() => scrollToEnquiry(), 400);
                      }}
                      className="py-2.5 text-center bg-black hover:bg-gray-800 font-display text-[8px] uppercase tracking-widest text-white font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1 rounded-md"
                    >
                      <MessageSquare className="h-3 w-3" />
                      Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: BULK ENQUIRY FORM */}
        <div 
          id="bulk-enquiry-section" 
          ref={enquiryFormRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white border border-gray-200/80 rounded-2xl p-6 md:p-10 shadow-xs mb-16 scroll-mt-24"
        >
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-display text-[9px] uppercase tracking-[0.25em] text-gray-400 font-bold">
                B2B Sourcing Desk
              </span>
              <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide text-black leading-tight">
                Get Wholesale Manufacturer Pricing
              </h2>
              <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed">
                Need continuous high-volume supply? Connect directly with our Delhi NCR manufacturing line. Specify your target volume, and secure direct-to-factory contract rates across India.
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3 text-xs font-sans text-gray-600">
                  <div className="h-8 w-8 border border-gray-200 bg-gray-50 flex items-center justify-center text-black shrink-0 rounded-lg">
                    <Building2 className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[10px] uppercase text-black font-display tracking-wider">Manufacturing Unit</span>
                    <span>Direct NCR Industrial Area, Delhi NCR, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-sans text-gray-600">
                  <div className="h-8 w-8 border border-gray-200 bg-gray-50 flex items-center justify-center text-black shrink-0 rounded-lg">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[10px] uppercase text-black font-display tracking-wider">Factory Email Desk</span>
                    <span>sourcing@deventerprise.co.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-sans text-gray-600">
                  <div className="h-8 w-8 border border-gray-200 bg-gray-50 flex items-center justify-center text-black shrink-0 rounded-lg">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[10px] uppercase text-black font-display tracking-wider">Bulk Line / Call Desk</span>
                    <span>+91 99999 99999</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Access Support Buttons (Requirement 6 - Buttons: Request Quote, Call Now, WhatsApp) */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-150">
              <a
                id="form-call-now-btn"
                href="tel:+919999999999"
                className="flex-1 py-3 px-4 border border-gray-200 hover:border-[#0F294A] text-[#0F294A] font-display text-[9px] uppercase tracking-widest font-extrabold text-center bg-white hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 rounded-lg"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Call Now
              </a>
              <a
                id="form-whatsapp-btn"
                href={`https://wa.me/919999999999?text=Hi%20Dev%20Enterprise,%20I%20am%20interested%20in%20a%20bulk%20quote%20for%20the%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display text-[9px] uppercase tracking-widest font-extrabold text-center transition-colors flex items-center justify-center gap-1.5 rounded-lg"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.989 14.058.96 11.444.96c-5.44 0-9.865 4.369-9.87 9.8-.002 1.83.499 3.614 1.455 5.172l-.953 3.486 3.571-.937z" />
                </svg>
                WhatsApp Desk
              </a>
            </div>
          </div>

          {/* Right Column - B2B Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F8F9FA] rounded-xl p-6 md:p-8 border border-gray-200 form-container-box transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <PackageCheck className="h-4.5 w-4.5 text-black" />
              <span className="font-display text-[10px] uppercase tracking-widest text-black font-extrabold">Log Bulk Quotation Request</span>
            </div>

            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  id="b2b-enquiry-form"
                  onSubmit={handleBulkSubmit}
                  className="flex flex-col gap-4"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-display text-[9px] uppercase tracking-wider text-gray-500 font-bold">Contact Person Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                        <input
                          id="form-input-name"
                          type="text"
                          required
                          placeholder="e.g. Rajinder Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full pl-9 pr-3 py-2.5 border border-gray-250 bg-white text-xs font-sans focus:outline-none focus:border-black rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-display text-[9px] uppercase tracking-wider text-gray-500 font-bold">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                        <input
                          id="form-input-phone"
                          type="tel"
                          required
                          placeholder="e.g. +91 99999 99999"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full pl-9 pr-3 py-2.5 border border-gray-250 bg-white text-xs font-sans focus:outline-none focus:border-black rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-display text-[9px] uppercase tracking-wider text-gray-500 font-bold">Business Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                        <input
                          id="form-input-email"
                          type="email"
                          required
                          placeholder="e.g. purchase@catering.in"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-9 pr-3 py-2.5 border border-gray-250 bg-white text-xs font-sans focus:outline-none focus:border-black rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Business Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-display text-[9px] uppercase tracking-wider text-gray-500 font-bold">Business / Company Name</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                        <input
                          id="form-input-business"
                          type="text"
                          placeholder="e.g. Kingston Caterers Private Ltd"
                          value={formData.businessName}
                          onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                          className="w-full pl-9 pr-3 py-2.5 border border-gray-250 bg-white text-xs font-sans focus:outline-none focus:border-black rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Selected Product */}
                    <div className="flex flex-col gap-1.5 md:col-span-1">
                      <label className="font-display text-[9px] uppercase tracking-wider text-gray-500 font-bold">Product Name</label>
                      <input
                        id="form-input-product"
                        type="text"
                        readOnly
                        value={`${product.name} (${selectedSize}")`}
                        className="w-full px-3 py-2.5 border border-gray-200 bg-gray-100 text-xs font-sans text-gray-600 focus:outline-none rounded-lg font-bold"
                      />
                    </div>

                    {/* Required Quantity */}
                    <div className="flex flex-col gap-1.5 md:col-span-1">
                      <label className="font-display text-[9px] uppercase tracking-wider text-gray-500 font-bold">Required Quantity</label>
                      <select
                        id="form-input-quantity"
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        className="w-full px-3 py-2.5 border border-gray-250 bg-white text-xs font-sans focus:outline-none focus:border-black rounded-lg font-semibold"
                      >
                        <option value="10000">10,000 - 25,000 pcs (MOQ)</option>
                        <option value="25000">25,000 - 50,000 pcs</option>
                        <option value="50000">50,000 - 100,000 pcs</option>
                        <option value="100000">100,000+ units (Wholesale Tier)</option>
                      </select>
                    </div>

                    {/* City */}
                    <div className="flex flex-col gap-1.5 md:col-span-1">
                      <label className="font-display text-[9px] uppercase tracking-wider text-gray-500 font-bold">Destination City *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                        <input
                          id="form-input-city"
                          type="text"
                          required
                          placeholder="e.g. New Delhi"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="w-full pl-9 pr-3 py-2.5 border border-gray-250 bg-white text-xs font-sans focus:outline-none focus:border-black rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-display text-[9px] uppercase tracking-wider text-gray-500 font-bold">Custom Requirements / Instructions</label>
                    <textarea
                      id="form-input-message"
                      rows={3}
                      placeholder="Specify customized stamping, border patterns, or speed-delivery requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-3 py-2.5 border border-gray-250 bg-white text-xs font-sans focus:outline-none focus:border-black resize-none rounded-lg"
                    />
                  </div>

                  {/* Submit Button (Requirement 6 - Request Quote) */}
                  <button
                    id="form-submit-quote-btn"
                    type="submit"
                    className="w-full py-4 bg-black hover:bg-gray-800 text-white font-display text-xs uppercase tracking-widest font-extrabold shadow-sm transition-all text-center cursor-pointer rounded-lg mt-2"
                  >
                    Request Quote
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  id="form-success-alert"
                  className="bg-white p-8 border border-gray-200 text-center flex flex-col items-center justify-center rounded-xl my-6 shadow-xs"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center mb-3 shadow-2xs">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xs uppercase tracking-wider font-extrabold text-black block mb-1">
                    Enquiry Logged Successfully!
                  </h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-sm mt-1">
                    Thank you <strong>{formData.name}</strong>. Our commercial team has received your wholesale sourcing request for <strong>{Number(formData.quantity).toLocaleString()} units</strong> of {product.name}. We will contact you at <strong>{formData.phone}</strong> with shipping quotes within 1 to 2 business hours.
                  </p>
                  <button
                    id="success-form-reset-btn"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData(prev => ({ ...prev, name: '', phone: '', email: '', businessName: '', city: '' }));
                    }}
                    className="mt-6 font-display text-[10px] uppercase tracking-widest text-gray-500 hover:text-black font-extrabold focus:outline-none underline"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* SECTION 7: FAQ (Requirement 7) */}
        <div id="faq-section" className="mb-16 bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-xs">
          <div className="flex flex-col gap-1 mb-8 text-center items-center">
            <span className="font-display text-[9px] uppercase tracking-[0.25em] text-gray-400 font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-black">
              Got Sourcing Questions?
            </h2>
            <div className="w-12 h-px bg-black mt-2" />
          </div>

          <div id="faq-accordion" className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqItems.map((faq, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div 
                  id={`faq-item-${idx}`}
                  key={idx}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    id={`faq-toggle-btn-${idx}`}
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-5 bg-gray-50/50 hover:bg-gray-50 font-display text-xs sm:text-sm font-extrabold text-[#1A1A1A] text-left flex justify-between items-center transition-colors focus:outline-none"
                  >
                    <span className="uppercase tracking-wider">{faq.question}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500 shrink-0" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`faq-answer-${idx}`}
                        className="bg-white"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="p-5 border-t border-gray-150 font-sans text-xs text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 8: TRUST SECTION (Requirement 8 - Manufacturer Direct, Reliable Quality, Affordable Pricing, Fast Dispatch, Customer Support) */}
        <div id="customer-trust-section" className="mb-16 border-t border-gray-200/85 pt-16">
          <div className="flex flex-col gap-1 mb-10 text-center items-center">
            <span className="font-display text-[9px] uppercase tracking-[0.25em] text-gray-400 font-bold">
              The Dev Enterprise Seal
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-black">
              Why Corporate Buyers Choose Us
            </h2>
            <div className="w-12 h-px bg-black mt-2" />
          </div>

          <div id="trust-pillars-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustPillars.map((tp) => {
              const PillarIcon = tp.icon;
              return (
                <div 
                  id={tp.id}
                  key={tp.id} 
                  className="bg-white border border-gray-200 p-6 flex flex-col items-start gap-4 hover:shadow-sm transition-all duration-300 rounded-xl"
                >
                  <div className="h-9 w-9 bg-gray-50 border border-gray-200 text-black flex items-center justify-center rounded-lg shrink-0 shadow-3xs">
                    <PillarIcon className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-display text-[9px] uppercase tracking-widest font-extrabold text-[#1A1A1A]">
                      {tp.title}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-500 leading-relaxed">
                      {tp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </div>
  );
}
