
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

export const WHATSAPP_NUMBER = "919526276687"; // Updated to a realistic Kerala number format

export const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Tufted Masterpiece',
    slug: 'premium-tufted-1',
    price: 4500,
    images: ['/lobo_tufting_/lobo_tufting__1685819950_3117206139143014754_47333694357.webp'],
    category: 'Premium Rugs',
    size: '3x3 ft',
    stock: 3,
    description: 'Handcrafted premium tufted rug with intricate details.'
  },
  {
    id: '2',
    name: 'Custom Anime Design Rug',
    slug: 'custom-anime-rug',
    price: 3800,
    images: ['/lobo_tufting_/lobo_tufting__1687070213_3127694099691803616_47333694357.webp'],
    category: 'Custom Orders',
    size: '2.5x2.5 ft',
    stock: 5,
    description: 'Anime-inspired custom tufted rug with vibrant colors.'
  },
  {
    id: '3',
    name: 'Abstract Art Rug',
    slug: 'abstract-art-rug',
    price: 3200,
    images: ['/lobo_tufting_/lobo_tufting__1687269971_3129369793556775561_47333694357.webp'],
    category: 'Modern Art',
    size: '2x2 ft',
    stock: 4,
    description: 'Modern abstract design tufted with premium wool.'
  }
];

export const MOCK_GALLERY: GalleryItem[] = [
  { id: 'g1', imageUrl: '/lobo_tufting_/lobo_tufting__1685819950_3117206139143014754_47333694357.webp', title: 'Cosmic Waves', category: 'Premium', featured: true },
  { id: 'g2', imageUrl: '/lobo_tufting_/lobo_tufting__1687070213_3127694099691803616_47333694357.webp', title: 'Abstract Dreams', category: 'Modern', featured: false },
  { id: 'g3', imageUrl: '/lobo_tufting_/lobo_tufting__1687269971_3129369793556775561_47333694357.webp', title: 'Vibrant Palette', category: 'Custom', featured: true },
  { id: 'g4', imageUrl: '/lobo_tufting_/lobo_tufting__1687331687_3129887503839452976_47333694357.webp', title: 'Geometric Art', category: 'Modern', featured: false },
  { id: 'g5', imageUrl: '/lobo_tufting_/lobo_tufting__1687331928_3129889524982479877_47333694357.webp', title: 'Premium Collection', category: 'Premium', featured: true },
  { id: 'g6', imageUrl: '/lobo_tufting_/lobo_tufting__1687435248_3130756238308388880_47333694357.webp', title: 'Custom Creation', category: 'Custom', featured: false },
  { id: 'g7', imageUrl: '/lobo_tufting_/lobo_tufting__1687505939_3131349232086658429_47333694357.webp', title: 'Artistic Blend', category: 'Art', featured: true },
  { id: 'g8', imageUrl: '/lobo_tufting_/lobo_tufting__1687582730_3131993406894214532_47333694357.webp', title: 'Textured Beauty', category: 'Premium', featured: false },
  { id: 'g10', imageUrl: '/lobo_tufting_/lobo_tufting__1687850774_3134241923196813278_47333694357.webp', title: 'Studio Master', category: 'Premium', featured: false },
  { id: 'g11', imageUrl: '/lobo_tufting_/lobo_tufting__1687939229_3134983935554612792_47333694357.webp', title: 'Elegant Design', category: 'Modern', featured: true },
  { id: 'g12', imageUrl: '/lobo_tufting_/lobo_tufting__1688104034_3136366422537112948_47333694357.webp', title: 'Crafted Beauty', category: 'Art', featured: false },
  { id: 'g13', imageUrl: '/lobo_tufting_/lobo_tufting__1688196492_3137142016581358514_47333694357.webp', title: 'Modern Twist', category: 'Modern', featured: true },
  { id: 'g14', imageUrl: '/lobo_tufting_/lobo_tufting__1688196806_3137144649102782183_47333694357.webp', title: 'Vibrant Art', category: 'Custom', featured: false },
  { id: 'g15', imageUrl: '/lobo_tufting_/lobo_tufting__1688272867_3137782694218878989_47333694357.webp', title: 'Premium Craft', category: 'Premium', featured: true },
  { id: 'g16', imageUrl: '/lobo_tufting_/lobo_tufting__1688726164_3141585225687492121_47333694357.webp', title: 'Studio Work', category: 'Art', featured: false },
  { id: 'g17', imageUrl: '/lobo_tufting_/lobo_tufting__1689075054_3144511930596870533_47333694357.webp', title: 'Anime Inspired', category: 'Anime', featured: true },
  { id: 'g18', imageUrl: '/lobo_tufting_/lobo_tufting__1689429031_3147481299875966260_47333694357.webp', title: 'Abstract Design', category: 'Modern', featured: false },
  // { id: 'g19', imageUrl: '/lobo_tufting_/lobo_tufting__1689785672_3150473025423041294_47333694357.webp', title: 'Custom Order', category: 'Custom', featured: true },
  // { id: 'g20', imageUrl: '/lobo_tufting_/lobo_tufting__1690386213_3155510723970659967_47333694357.webp', title: 'Premium Work', category: 'Premium', featured: false },
  // { id: 'g21', imageUrl: '/lobo_tufting_/lobo_tufting__1690802451_3159002382756070863_47333694357.webp', title: 'Modern Classic', category: 'Modern', featured: true },
  // { id: 'g22', imageUrl: '/lobo_tufting_/lobo_tufting__1690806531_3159036609743401578_47333694357.webp', title: 'Artistic Touch', category: 'Art', featured: false },
  // { id: 'g23', imageUrl: '/lobo_tufting_/lobo_tufting__1690963102_3160350017672869801_47333694357.webp', title: 'Anime Craft', category: 'Anime', featured: true },
  // { id: 'g24', imageUrl: '/lobo_tufting_/lobo_tufting__1691253928_3162789642911594258_47333694357.webp', title: 'Custom Beauty', category: 'Custom', featured: false },
  { id: 'g25', imageUrl: '/lobo_tufting_/lobo_tufting__1691404470_3164052486026320943_47333694357.webp', title: 'Premium Design', category: 'Premium', featured: true },
  { id: 'g26', imageUrl: '/lobo_tufting_/lobo_tufting__1691565339_3165401948803929036_47333694357.webp', title: 'Modern Luxury', category: 'Modern', featured: false },
  { id: 'g27', imageUrl: '/lobo_tufting_/lobo_tufting__1692709584_3175000571162313345_47333694357.webp', title: 'Craft Art', category: 'Art', featured: true },
  { id: 'g28', imageUrl: '/lobo_tufting_/lobo_tufting__1692779309_3175585474051131563_47333694357.webp', title: 'Custom Anime', category: 'Anime', featured: false },
];

// Video conten
export const VIDEOS = {
  reel1: '/lobo_tufting_/lobo_tufting__1694323695_3188536079502847642_47333694357.mp4',
  reel2: '/lobo_tufting_/lobo_tufting__1694869013_3193111468451746850_47333694357.mp4',
  reel3: '/lobo_tufting_/lobo_tufting__1773127369_3849589441597920968_47333694357.mp4',
  reel4: '/lobo_tufting_/lobo_tufting__1772200103_3841805919369930763_47333694357.mp4',
  reel5: '/lobo_tufting_/lobo_tufting__1772114952_3840966041761607274_47333694357.mp4',

  reel6: '/lobo_tufting_/lobo_tufting__1773127369_3849589441597920968_47333694357.mp4'
};

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
