/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Product, SilverSpec, Testimonial } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'round-plates',
    name: 'Disposable Round Plates',
    description: 'Classic circle plates engineered with a high-integrity silver sheet barrier for elegant catering and banquet services.',
    imageUrl: 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=800&auto=format&fit=crop',
    badge: 'Best Seller',
    subcategories: ['Dinner Plates', 'Appetizer Plates', 'Side Plates']
  },
  {
    id: 'square-plates',
    name: 'Disposable Square Plates',
    description: 'Sleek, architectural square geometry presenting modern aesthetics for high-end parties, food trucks, and contemporary catering.',
    imageUrl: 'https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=800&auto=format&fit=crop',
    badge: 'Premium Style',
    subcategories: ['Gourmet Square Plates', 'Tasting Plates']
  },
  {
    id: 'compartment-plates',
    name: 'Compartment Plates',
    description: 'Deeply segregated partitions designed specifically for multicourse Indian meals, preventing gravies and chutneys from blending.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    badge: 'Popular',
    subcategories: ['3-Compartment', '4-Compartment', '5-Compartment']
  },
  {
    id: 'serving-bowls',
    name: 'Food Serving Bowls',
    description: 'High-sidewall bowls lined with oil-resistant silver laminate, ideal for hot curries, dals, gravies, and traditional Indian desserts.',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop',
    badge: 'Heavy Duty',
    subcategories: ['Curry Bowls', 'Dessert Bowls', 'Deep Soup Bowls']
  },
  {
    id: 'party-plates',
    name: 'Celebration Party Plates',
    description: 'Extra-weight, reinforced plates adorned with decorative silver borders, custom-styled for grand receptions, marriages, and festivals.',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop',
    badge: 'Celebrations',
    subcategories: ['Grand Banquet Plates', 'Floral Edge Plates']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'silver-plate-6',
    name: '6-inch Silver Paper Plate',
    description: 'A heavyweight, highly rigid 6-inch silver laminated paper plate. Engineered perfectly for serving delicious dry starters, appetizers, street foods, sweets, and high-oil fast food items without sagging.',
    category: 'round-plates',
    shapes: ['Round'],
    diametersInches: [6],
    features: [
      '22-micron pure food-grade silver lining',
      'Impervious barrier against moisture and cooking oils',
      'Perfect size for sweet shops and appetizer counters',
      'Raised robust outer borders prevent leaks and spills'
    ],
    bestFor: ['Appetizers & Starters', 'Sweet Shops', 'Street Food Buffets'],
    imageUrl: 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'silver-plate-7',
    name: '7-inch Silver Paper Plate',
    description: 'A versatile 7-inch silver-coated plate designed with a robust wood-fiber core. Ideal for continental breakfasts, dry-serve snacks, tea parties, and medium-portion dining events.',
    category: 'round-plates',
    shapes: ['Round'],
    diametersInches: [7],
    features: [
      'Sag-resistant premium 350 GSM paper board base',
      'Heat-retaining silver sheet thermal insulation',
      '100% dust-free sterile hygienic factory packaging',
      'Comfort-grip high-lip edge profile'
    ],
    bestFor: ['Breakfast Buffets', 'Social Tea Gatherings', 'Quick Snack Service'],
    imageUrl: 'https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'silver-plate-8',
    name: '8-inch Silver Paper Plate',
    description: 'A mid-sized, robust 8-inch silver paper plate. Highly durable, moisture-resistant, and perfect for serving regular meals, lunches, and substantial snacks in food courts or outdoor caterings.',
    category: 'round-plates',
    shapes: ['Round'],
    diametersInches: [8],
    features: [
      'Dense 380 GSM rigid wood fiber board core',
      'High-performance silver sheet leak protection',
      'Perfect size for standard fast food and lunchtime catering',
      'Deep-drawn borders with high leak-proof safety margin'
    ],
    bestFor: ['Lunch Buffets', 'Fast Food Outlets', 'Outdoor Catering Events'],
    imageUrl: 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dinner-plate-10',
    name: '10-inch Dinner Plate',
    description: 'Full-sized premium silver dinner plate. Built to withstand heavy thali meals, steaming hot rice, dals, curries, and multi-layered flatbreads without bending or leakage.',
    category: 'round-plates',
    shapes: ['Round'],
    diametersInches: [10],
    features: [
      'Heavy-duty 400+ GSM thick premium paper core',
      'Inert chemical-safe laminate prevents metal flavor transfer',
      'Moisture-proof and oil-resistant dual shield layers',
      'Compliant with strict food safety profiles'
    ],
    bestFor: ['Wedding Buffets', 'Luxury Event Catering', 'Corporate Lunches'],
    imageUrl: 'https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'compartment-plate',
    name: 'Compartment Plate',
    description: 'Robust partitioned silver plate designed for traditional multi-course dining. Deep high-sidewall dividers keep liquid curries, dals, chutneys, and desserts from mixing.',
    category: 'compartment-plates',
    shapes: ['Compartment'],
    diametersInches: [12],
    features: [
      'Deep 18mm dividers completely eliminate cross-spillage',
      'Toughened center zone supports heavy roti and rice courses',
      'Stops sogginess and retains shape even under watery gravies',
      'Replaces the need for multiple small service trays'
    ],
    bestFor: ['Traditional Thali Catering', 'Festive Dinners', 'Grand Buffets'],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'paper-bowl',
    name: 'Disposable Paper Bowl',
    description: 'Deep, heavy-duty silver bowl coated with thick food-safe metallic laminate. Designed to retain heat and stay comfortable to handle when serving boiling curries, gravies, and hot desserts.',
    category: 'serving-bowls',
    shapes: ['Round'],
    diametersInches: [4.5],
    features: [
      'High liquid density rating for zero leakage up to 12 hours',
      'Double-walled structural insulation shields hands from heat',
      'Acid-resistant silver barrier holds acidic curries comfortably',
      'Elegant smooth-rolled edge details'
    ],
    bestFor: ['Hot Curry & Dal Serving', 'Traditional Sweets & Desserts', 'Soups & Appetizers'],
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop'
  }
];

export const SILVER_SPECS: SilverSpec[] = [
  {
    id: 'spec-barrier',
    metric: 'Laminate Density',
    value: '22 Microns',
    description: 'A high-grade, food-safe silver sheet coating that provides a 100% sterile barrier against oil, grease, and liquid moisture.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'spec-rigidity',
    metric: 'Base GSM Core',
    value: '350 - 450 GSM',
    description: 'Engineered with premium, long-fiber dense paperboard to provide high structural stability. Zero sagging when fully loaded with food.',
    iconName: 'Layers'
  },
  {
    id: 'spec-thermal',
    metric: 'Thermal Range',
    value: 'Up to 95°C',
    description: 'Comfortably hosts boiling hot curries, gravies, and sizzling rice dishes without peeling or compromising structural strength.',
    iconName: 'Thermometer'
  },
  {
    id: 'spec-reactivity',
    metric: 'Chemical Safety',
    value: '100% Inert',
    description: 'Fully inert silver lamination ensuring zero chemical transfer or metallic taste, even when exposed to highly acidic curries.',
    iconName: 'Sparkles'
  },
  {
    id: 'spec-impervious',
    metric: 'Leak resistance',
    value: '24 Hours',
    description: 'Seepage-free performance under prolonged moisture contact, guaranteeing absolute comfort for catering events and party hosts.',
    iconName: 'Droplets'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "As a premium catering business handling over 3,000 guests daily, we cannot afford plates that sag or leak. Dev Enterprise's 400 GSM silver thali plates are exceptionally sturdy under hot dals and gravies. Buying manufacturer-direct has cut our dinnerware expenses by 15%.",
    author: "Ramesh Kumar",
    role: "Founder, Kumar Catering Services",
    location: "Delhi, NCR",
    rating: 5
  },
  {
    id: 't2',
    quote: "Our wedding venue hosts high-volume banquets almost every weekend, and these disposable plates are fantastic. The silver sheet finish is incredibly clean, and they handle heavy multi-course Indian food beautifully. Recommending their compartment plates is a no-brainer.",
    author: "Sunita Sharma",
    role: "Director, Celebration Banquet Hall",
    location: "Gurgaon, Haryana",
    rating: 5
  },
  {
    id: 't3',
    quote: "As a major retail distributor, reliability of supply is everything. Dev Enterprise handles our bulk orders seamlessly. Their dispatch from the NCR factory is rapid, and the packaging is highly hygienic. They offer the best wholesale prices in the market.",
    author: "Vikram Singh",
    role: "National Retail Distributor",
    location: "Noida, Uttar Pradesh",
    rating: 5
  },
  {
    id: 't4',
    quote: "Dev Enterprise plates have completely changed how we handle large-scale outdoor events. They hold hot, wet, and oily dishes perfectly without any seepage. The consistent stamping quality across all plates is exactly what our premium corporate clients expect.",
    author: "Amit Patel",
    role: "Lead Event Planner, Patel Celebrations",
    location: "Ahmedabad, Gujarat",
    rating: 5
  },
  {
    id: 't5',
    quote: "Serving hot gravies, chaats, and rolls from a busy food truck means we need plates that are both rigid and affordable. These silver plates are fully leak-proof and highly stable. Plus, the manufacturer-direct shipping makes them extremely economical.",
    author: "Neha Gupta",
    role: "Owner, The Spice Route Food Truck",
    location: "Mumbai, Maharashtra",
    rating: 5
  },
  {
    id: 't6',
    quote: "We cater massive wedding gatherings and religious events of over 8,000 guests. Dev Enterprise's consistent quality and immense production capacity are unmatched. They deliver huge volume on short deadlines, helping us remain highly competitive.",
    author: "Rajesh Sharma",
    role: "Managing Partner, Sharma Tent & Catering",
    location: "Ludhiana, Punjab",
    rating: 5
  }
];
