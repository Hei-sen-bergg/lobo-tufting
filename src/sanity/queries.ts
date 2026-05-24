import { groq } from './client';

export const GALLERY_QUERY = groq`
  *[_type == "gallery"] | order(_createdAt desc) {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    "imageLqip": image.asset->metadata.lqip,
    category,
    featured
  }
`;

export const PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    description,
    price,
    "imageUrl": image.asset->url,
    "imageLqip": image.asset->metadata.lqip,
    category,
    inStock,
    featured
  }
`;

export const WORKSHOPS_QUERY = groq`
  *[_type == "workshopItem"] | order(startDate asc) {
    _id,
    title,
    description,
    startDate,
    endDate,
    price,
    "imageUrl": image.asset->url,
    capacity,
    enrolledCount,
    location,
    featured
  }
`;

export const ABOUT_QUERY = groq`
  *[_type == "about"][0] {
    _id,
    title,
    description,
    story,
    mission,
    values[],
    "imageUrl": image.asset->url,
    achievements[]
  }
`;

export const HOME_HERO_QUERY = groq`
  *[_type == "hero"][0] {
    _id,
    title,
    subtitle,
    "imageUrl": image.asset->url,
    cta,
    ctaLink
  }
`;

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"] {
    _id,
    clientName,
    clientTitle,
    content,
    rating,
    "imageUrl": image.asset->url
  }
`;

export const SETTINGS_QUERY = groq`
  *[_type == "settings"][0] {
    _id,
    siteName,
    siteDescription,
    contactEmail,
    phoneNumber,
    socialLinks,
    address,
    hours
  }
`;
