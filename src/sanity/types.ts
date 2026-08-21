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

export interface AboutPage extends SanityImage {
  _id: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  mission: string;
  sustainability: string;
  statsSectionTitle: string;
  stats?: Array<{
    value: number;
    suffix: string;
    label: string;
  }>;
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
  teaserImageUrl?: string;
  ctaTitle?: string;
  ctaButtonText?: string;
}

export type Hero = HomePage;

export interface ShopPageCopy {
  heroImageUrl?: string;
  headlineLine1: string;
  headlineLine2: string;
  subtitle: string;
  videoSectionTitle: string;
  videoSectionTitleAccent: string;
  videoSectionSubtitle: string;
  videoUrl?: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaLinkText: string;
}

export interface GalleryPageCopy {
  heroImageUrl?: string;
  headlineLine1: string;
  headlineLine2: string;
  subtitle: string;
  videoUrl?: string;
  bottomText: string;
  bottomButtonText: string;
}

export interface WorkshopFeature {
  title: string;
  description: string;
}

export interface WorkshopPageCopy {
  heroImageUrl?: string;
  badgeText: string;
  headlineLine1: string;
  headlineLine2: string;
  intro: string;
  features: WorkshopFeature[];
  videoUrl?: string;
  ctaButtonText: string;
  gallerySectionTitle: string;
  gallerySectionTitleAccent: string;
}

export interface AccessoriesPageCopy {
  heroImageUrl?: string;
  headlineLine1: string;
  headlineLine2: string;
  subtitle: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
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
  chatQuickQuestions?: Array<{
    label: string;
    message: string;
  }>;
}

/** @deprecated Use AboutPage */
export type About = AboutPage;
