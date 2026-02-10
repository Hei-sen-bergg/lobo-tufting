
import React from 'react';
import { Product, GalleryItem, WorkshopSlot } from './types';

export const COLORS = {
  background: '#000000',
  brandGreen: '#74C63D',
  brandGreenHover: '#8DFF4A',
  cardBg: '#0B0F0B',
  sectionBg: '#0F140F',
  border: '#1C261C',
  textMain: '#FFFFFF',
  textSoft: '#B8C0B8',
  textMuted: '#7C857C'
};

export const WHATSAPP_NUMBER = "919037305374"; // Updated to a realistic Kerala number format

export const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ghost Face Mini Rug',
    slug: 'ghost-face-mini',
    price: 1200,
    images: ['https://images.unsplash.com/photo-1627318728515-58252f36079c?q=80&w=800&auto=format&fit=crop'],
    category: 'Mini Rugs',
    size: '12x12 inch',
    stock: 5,
    description: 'Perfect for your desk or as a wall hanging.'
  },
  {
    id: '2',
    name: 'Floral Coaster Set',
    slug: 'floral-coasters',
    price: 850,
    images: ['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop'],
    category: 'Coasters',
    size: '4x4 inch',
    stock: 12,
    description: 'Set of 4 handmade tufted coasters.'
  },
  {
    id: '3',
    name: 'Yin Yang Circular Rug',
    slug: 'yin-yang-rug',
    price: 3500,
    images: ['https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop'],
    category: 'Standard Rugs',
    size: '2x2 ft',
    stock: 2,
    description: 'A classic design with a modern tufted twist.'
  }
];

export const MOCK_GALLERY: GalleryItem[] = [
  { id: 'g1', imageUrl: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop', title: 'Cyberpunk Oni', category: 'Anime', featured: true },
  { id: 'g2', imageUrl: 'https://images.unsplash.com/photo-1584583012066-51566373079b?q=80&w=800&auto=format&fit=crop', title: 'Abstract Waves', category: 'Modern', featured: false },
  { id: 'g3', imageUrl: 'https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800&auto=format&fit=crop', title: 'Custom Script Rug', category: 'Names', featured: true },
  { id: 'g4', imageUrl: 'https://images.unsplash.com/photo-1512418490979-92798ccc1340?q=80&w=800&auto=format&fit=crop', title: 'Sunset Silhouette', category: 'Nature', featured: false },
  { id: 'g5', imageUrl: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=800&auto=format&fit=crop', title: 'Gaming Icon', category: 'Anime', featured: true },
  { id: 'g6', imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', title: 'Cozy Pattern', category: 'Custom', featured: false },
];

// Added MOCK_WORKSHOPS for Admin and Workshop pages
export const MOCK_WORKSHOPS: WorkshopSlot[] = [
  {
    id: 'w1',
    date: '2024-12-15',
    time: '10:00 AM',
    duration: '3 Hours',
    maxSeats: 6,
    bookedSeats: 2,
    price: 1500,
    status: 'Open'
  },
  {
    id: 'w2',
    date: '2024-12-20',
    time: '02:00 PM',
    duration: '3 Hours',
    maxSeats: 6,
    bookedSeats: 6,
    price: 1500,
    status: 'Closed'
  },
  {
    id: 'w3',
    date: '2024-12-22',
    time: '11:00 AM',
    duration: '3 Hours',
    maxSeats: 6,
    bookedSeats: 3,
    price: 1500,
    status: 'Open'
  }
];
