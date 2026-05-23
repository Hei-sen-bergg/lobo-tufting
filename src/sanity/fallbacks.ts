// Fallback mock data in case Sanity connection fails
// This ensures the app still works while developing
export const FALLBACK_GALLERY: Array<any> = [
  {
    _id: '1',
    title: 'Premium Lobo Rug',
    description: 'Handcrafted premium tufted rug',
    imageUrl: '/lobo_tufting_/lobo_tufting__1687850774_3134241923196813278_47333694357.webp',
    category: 'Premium',
    featured: true
  }
];

export const FALLBACK_PRODUCTS: Array<any> = [
  {
    _id: '1',
    title: 'Custom Order',
    description: 'Made to order rugs',
    price: 5000,
    imageUrl: '/lobo_tufting_/lobo_tufting__1688196492_3137142016581358514_47333694357.webp',
    category: 'Custom',
    inStock: true,
    featured: true
  }
];

export const FALLBACK_WORKSHOPS: Array<any> = [
  {
    _id: '1',
    title: 'Tufting Masterclass',
    description: 'Learn the art of tufting',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
    price: 2000,
    imageUrl: '/lobo_tufting_/lobo_tufting__1690386213_3155510723970659967_47333694357.webp',
    capacity: 6,
    enrolledCount: 3,
    location: 'Kodungallur, Kerala',
    featured: true
  }
];

export const FALLBACK_ABOUT: any = {
  _id: 'about',
  title: 'The LOBO Origin',
  description: 'Born out of an obsession for textures and pop culture, LOBO Tufting started in a small garage in Kodungallur.',
  story: 'Our story begins with a passion for art and handcrafted excellence.',
  mission: 'We don\'t just sell rugs; we sell tactile stories.',
  imageUrl: '/lobo_tufting_/lobo_tufting__1688196806_3137144649102782183_47333694357.webp',
  values: ['Quality', 'Creativity', 'Sustainability'],
  achievements: [
    { title: 'Rugs Crafted', value: '200+' },
    { title: 'Happy Clients', value: '100%' }
  ]
};

export const FALLBACK_HERO: any = {
  _id: 'hero',
  title: 'ART YOU CAN WALK ON.',
  subtitle: 'Premium custom-tufted rugs for your space. Anime, logos, or abstract art—we bring your floors to life.',
  imageUrl: '/lobo_tufting_/lobo_tufting__1687850774_3134241923196813278_47333694357.webp',
  cta: 'Custom Inquiry',
  ctaLink: '/custom'
};
