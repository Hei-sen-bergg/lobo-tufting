export interface SanityImage {
  imageUrl: string;
  imageLqip?: string;
}

export interface GalleryItem extends SanityImage {
  _id: string;
  id?: string;
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

export interface About extends SanityImage {
  _id: string;
  title: string;
  description: string;
  story: string;
  mission: string;
  values: string[];
  achievements: Array<{
    title: string;
    value: string;
  }>;
}

export interface Hero extends SanityImage {
  _id: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
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
