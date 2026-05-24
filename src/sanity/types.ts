export interface SanityImage {
  imageUrl: string;
  imageLqip?: string;
}

export interface GalleryItem extends SanityImage {
  _id: string;
  title: string;
  description: string;
  category: string;
  featured: boolean;
}

export interface Product extends SanityImage {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  featured: boolean;
}

export interface Accessory extends SanityImage {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  featured: boolean;
}

export interface WorkshopItem extends SanityImage {
  _id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
  capacity: number;
  enrolledCount: number;
  location: string;
  featured: boolean;
}

export interface AboutPage extends SanityImage {
  _id: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  mission: string;
  sustainability: string;
  statsSectionTitle: string;
  visitTitle: string;
  visitDescription: string;
  visitButtonText: string;
}

export interface HomeStep {
  title: string;
  description: string;
}

export interface HomePage extends SanityImage {
  _id: string;
  title?: string;
  badgeText?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  howItWorksTitle?: string;
  howItWorksSubtitle?: string;
  steps?: HomeStep[];
  teaserLine1?: string;
  teaserLine2?: string;
  teaserDescription?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  ctaTitle?: string;
  ctaButtonText?: string;
}

export type Hero = HomePage;

export interface ShopPageCopy {
  headlineLine1: string;
  headlineLine2: string;
  subtitle: string;
  videoSectionTitle: string;
  videoSectionTitleAccent: string;
  videoSectionSubtitle: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaLinkText: string;
}

export interface GalleryPageCopy {
  headlineLine1: string;
  headlineLine2: string;
  subtitle: string;
  bottomText: string;
  bottomButtonText: string;
}

export interface WorkshopFeature {
  title: string;
  description: string;
}

export interface WorkshopPageCopy {
  badgeText: string;
  headlineLine1: string;
  headlineLine2: string;
  intro: string;
  features: WorkshopFeature[];
  ctaButtonText: string;
  gallerySectionTitle: string;
  gallerySectionTitleAccent: string;
}

export interface AccessoriesPageCopy {
  headlineLine1: string;
  headlineLine2: string;
  subtitle: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export interface Testimonial extends SanityImage {
  _id: string;
  clientName: string;
  clientTitle: string;
  content: string;
  rating: number;
}

export interface Settings {
  _id: string;
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  phoneNumber: string;
  address: string;
  hours: string;
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
}

/** @deprecated Use AboutPage */
export type About = AboutPage;
