/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  shapes: ('Round' | 'Square' | 'Compartment')[];
  diametersInches: number[];
  features: string[];
  bestFor: string[];
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  badge?: string;
  subcategories?: string[];
}

export interface SilverSpec {
  id: string;
  metric: string;
  value: string;
  description: string;
  iconName: 'ShieldCheck' | 'Sparkles' | 'Thermometer' | 'Flame' | 'Droplets' | 'Layers';
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  businessType: 'Retail Customer' | 'Restaurant / Food Vendor' | 'Caterer' | 'Party Organizer' | 'Distributor / Wholesaler' | 'Other';
  productInterest: string;
  estimatedMonthlyQuantity: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
}
