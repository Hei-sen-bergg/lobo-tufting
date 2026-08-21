import { MOCK_GALLERY, MOCK_PRODUCTS } from '../../../constants';
import type {
  AboutPage,
  Accessory,
  GalleryItem,
  GalleryPageCopy,
  HomePage,
  Product,
  ShopPageCopy,
  WorkshopPageCopy,
} from '../types';

export { HOME_PAGE_DEFAULTS } from '../homeDefaults';

export const SHOP_PAGE_DEFAULTS: ShopPageCopy = {
  headlineLine1: 'Available',
  headlineLine2: 'Masterpieces.',
  subtitle:
    'Ready-to-ship rugs handcrafted with premium materials. Exclusive drops.',
  videoSectionTitle: 'Explore Our',
  videoSectionTitleAccent: 'Studio',
  videoSectionSubtitle:
    'Inside our tufting studio - where creativity meets craftsmanship',
  videoUrl: '/lobo_tufting_/lobo_tufting__1773127369_3849589441597920968_47333694357.mp4',
  ctaTitle: "Don't see what you're looking for?",
  ctaDescription:
    'We specialize in one-of-a-kind custom orders tailored to your specifications.',
  ctaLinkText: 'Start a custom commission',
};

export const GALLERY_PAGE_DEFAULTS: GalleryPageCopy = {
  headlineLine1: 'Tufted',
  headlineLine2: 'Archives.',
  subtitle:
    'A curation of our past works, custom commissions, and creative experiments.',
  bottomText: 'Want something similar for your space?',
  bottomButtonText: 'Request a Recreation',
};

export const WORKSHOP_PAGE_DEFAULTS: WorkshopPageCopy = {
  badgeText: 'Workshops in Kerala',
  headlineLine1: 'Become the',
  headlineLine2: 'Artisan.',
  intro:
    'Ever wondered how those fluffy masterpieces are made? Join us in our Kodungallur studio and learn the addictive art of tufting.',
  features: [
    {
      title: '3-Hour Session',
      description: 'Intensive hands-on training from start to finish.',
    },
    {
      title: 'All Gear Provided',
      description: 'Tufting guns, frames, and premium wool included.',
    },
    {
      title: 'Small Groups',
      description: 'Maximum 6 people per session for personalized attention.',
    },
    {
      title: 'Refreshments',
      description: "Snacks and Kerala's finest coffee to keep you fueled.",
    },
  ],
  videoUrl: '/lobo_tufting_/lobo_tufting__1772114952_3840966041761607274_47333694357.mp4',
  ctaButtonText: 'Inquire for Next Slot',
  gallerySectionTitle: 'What Students',
  gallerySectionTitleAccent: 'Create',
};

export const ACCESSORIES_PAGE_DEFAULTS = {
  headlineLine1: 'Tufting',
  headlineLine2: 'Essentials.',
  subtitle:
    'Premium tools, yarn, frames, and supplies for your tufting journey — curated by the LOBO studio.',
  ctaTitle: 'Need help choosing gear?',
  ctaDescription:
    'Message us on WhatsApp and we will recommend the right kit for your skill level.',
  ctaButtonText: 'Ask on WhatsApp',
};

export const ABOUT_PAGE_DEFAULTS: AboutPage = {
  _id: 'about-fallback',
  headlineLine1: 'The LOBO',
  headlineLine2: 'Origin.',
  description:
    'Born out of an obsession for textures and pop culture, LOBO Tufting started in a small garage in Kodungallur.',
  mission:
    "We don't just sell rugs; we sell tactile stories. Our mission is to bridge the gap between digital art and physical warmth, one stitch at a time.",
  sustainability:
    'We source New Zealand imported wool and use eco-friendly adhesives, ensuring that our footprints are as soft on the planet as our rugs are on your feet.',
  imageUrl:
    '/lobo_tufting_/lobo_tufting__1688196806_3137144649102782183_47333694357.webp',
  statsSectionTitle: 'By The Numbers',
  stats: [
    { value: 200, suffix: '+', label: 'Rugs Crafted' },
    { value: 100, suffix: '%', label: 'Happy Clients' },
    { value: 4, suffix: '+', label: 'Years Active' },
    { value: 1000, suffix: '+', label: 'Hours Invested' },
  ],
  visitTitle: 'Visit the Studio',
  visitDescription:
    'Located in the heart of Kodungallur, Kerala. By appointment only.',
  visitButtonText: 'Book a Studio Visit',
};

export const DEFAULT_PRODUCTS: Product[] = MOCK_PRODUCTS.map((p) => ({
  _id: `product-${p.id}`,
  title: p.name,
  description: p.description,
  price: p.price,
  imageUrl: p.images[0],
  category: p.category,
  inStock: p.stock > 0,
  featured: false,
}));

export const DEFAULT_GALLERY: GalleryItem[] = MOCK_GALLERY.map((g) => ({
  _id: `gallery-${g.id}`,
  title: g.title,
  description: g.title,
  imageUrl: g.imageUrl,
  category: g.category,
  featured: g.featured,
}));

export const DEFAULT_ACCESSORIES: Accessory[] = [
  {
    _id: 'accessory-1',
    title: 'Primary Tufting Gun',
    description: 'Professional-grade cut-pile tufting gun for smooth, consistent stitches.',
    price: 12500,
    imageUrl: '/lobo_tufting_/lobo_tufting__1685819950_3117206139143014754_47333694357.webp',
    category: 'Tufting Guns',
    inStock: true,
    featured: true,
  },
  {
    _id: 'accessory-2',
    title: 'Loop-Pile Tufting Gun',
    description: 'Ideal for textured finishes and sculptural loop-pile designs.',
    price: 11800,
    imageUrl: '/lobo_tufting_/lobo_tufting__1687070213_3127694099691803616_47333694357.webp',
    category: 'Tufting Guns',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-3',
    title: '80×80 cm Tufting Frame',
    description: 'Sturdy adjustable frame for medium rugs and wall hangings.',
    price: 3200,
    imageUrl: '/lobo_tufting_/lobo_tufting__1687269971_3129369793556775561_47333694357.webp',
    category: 'Frames',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-4',
    title: 'Primary Tufting Cloth (per metre)',
    description: 'High-density backing cloth optimized for tufting guns.',
    price: 450,
    imageUrl: '/lobo_tufting_/lobo_tufting__1687331687_3129887503839452976_47333694357.webp',
    category: 'Backing & Cloth',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-5',
    title: 'Premium Wool Yarn Bundle',
    description: '12-skein assorted palette — soft, vibrant, and fade-resistant.',
    price: 2400,
    imageUrl: '/lobo_tufting_/lobo_tufting__1687331928_3129889524982479877_47333694357.webp',
    category: 'Yarn',
    inStock: true,
    featured: true,
  },
  {
    _id: 'accessory-6',
    title: 'Acrylic Yarn Starter Pack',
    description: 'Budget-friendly starter pack for practice pieces and experiments.',
    price: 1200,
    imageUrl: '/lobo_tufting_/lobo_tufting__1687435248_3130756238308388880_47333694357.webp',
    category: 'Yarn',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-7',
    title: 'Tufting Needle Set',
    description: 'Precision needles for detailing, finishing, and touch-ups.',
    price: 350,
    imageUrl: '/lobo_tufting_/lobo_tufting__1687505939_3131349232086658429_47333694357.webp',
    category: 'Tools',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-8',
    title: 'Rug Trimming Scissors',
    description: 'Long-blade scissors for even pile height and clean edges.',
    price: 890,
    imageUrl: '/lobo_tufting_/lobo_tufting__1687582730_3131993406894214532_47333694357.webp',
    category: 'Tools',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-9',
    title: 'Electric Carving Clippers',
    description: 'Shape contours and sculpt details after tufting.',
    price: 2100,
    imageUrl: '/lobo_tufting_/lobo_tufting__1687850774_3134241923196813278_47333694357.webp',
    category: 'Tools',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-10',
    title: 'Fabric Adhesive (1L)',
    description: 'Flexible rug backing adhesive for durable finishes.',
    price: 650,
    imageUrl: '/lobo_tufting_/lobo_tufting__1687939229_3134983935554612792_47333694357.webp',
    category: 'Adhesives',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-11',
    title: 'Non-Slip Rug Backing',
    description: 'Apply after adhesive for safe, floor-ready rugs.',
    price: 550,
    imageUrl: '/lobo_tufting_/lobo_tufting__1688104034_3136366422537112948_47333694357.webp',
    category: 'Backing & Cloth',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-12',
    title: 'Design Projection Stand',
    description: 'Hold reference art at the perfect angle while you tuft.',
    price: 1800,
    imageUrl: '/lobo_tufting_/lobo_tufting__1688196492_3137142016581358514_47333694357.webp',
    category: 'Studio Setup',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-13',
    title: 'Yarn Cone Holder (6-pack)',
    description: 'Keeps cones organized and feeding smoothly during sessions.',
    price: 980,
    imageUrl: '/lobo_tufting_/lobo_tufting__1688196806_3137144649102782183_47333694357.webp',
    category: 'Studio Setup',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-14',
    title: 'Protective Workshop Apron',
    description: 'Heavy-duty apron with pockets for tools and yarn snips.',
    price: 720,
    imageUrl: '/lobo_tufting_/lobo_tufting__1688272867_3137782694218878989_47333694357.webp',
    category: 'Studio Setup',
    inStock: true,
    featured: false,
  },
  {
    _id: 'accessory-15',
    title: 'Beginner Tufting Kit',
    description: 'Gun, frame, cloth, yarn starter pack, and adhesive — everything to start.',
    price: 18900,
    imageUrl: '/lobo_tufting_/lobo_tufting__1688726164_3141585225687492121_47333694357.webp',
    category: 'Bundles',
    inStock: true,
    featured: true,
  },
];
