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

export const ACCESSORIES_QUERY = groq`
  *[_type == "accessory"] | order(sortOrder asc, _createdAt asc) {
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

export const ABOUT_QUERY = groq`
  *[_type == "about"] | order(_updatedAt desc)[0] {
    _id,
    headlineLine1,
    headlineLine2,
    description,
    mission,
    sustainability,
    statsSectionTitle,
    stats[] { value, suffix, label },
    visitTitle,
    visitDescription,
    visitButtonText,
    "imageUrl": image.asset->url
  }
`;

export const HOME_PAGE_QUERY = groq`
  *[_type == "hero"] | order(_updatedAt desc)[0] {
    _id,
    title,
    badgeText,
    headlineLine1,
    headlineLine2,
    subtitle,
    "imageUrl": image.asset->url,
    primaryButtonText,
    secondaryButtonText,
    howItWorksTitle,
    howItWorksSubtitle,
    steps[] { title, description },
    teaserLine1,
    teaserLine2,
    teaserDescription,
    stat1Value,
    stat1Label,
    stat2Value,
    stat2Label,
    "teaserImageUrl": teaserImage.asset->url,
    ctaTitle,
    ctaButtonText
  }
`;

export const HOME_HERO_QUERY = HOME_PAGE_QUERY;

export const SHOP_PAGE_QUERY = groq`
  *[_type == "shopPage"] | order(_updatedAt desc)[0] {
    _id,
    "heroImageUrl": heroImage.asset->url,
    headlineLine1,
    headlineLine2,
    subtitle,
    videoSectionTitle,
    videoSectionTitleAccent,
    videoSectionSubtitle,
    videoUrl,
    ctaTitle,
    ctaDescription,
    ctaLinkText
  }
`;

export const GALLERY_PAGE_QUERY = groq`
  *[_type == "galleryPage"] | order(_updatedAt desc)[0] {
    _id,
    "heroImageUrl": heroImage.asset->url,
    headlineLine1,
    headlineLine2,
    subtitle,
    videoUrl,
    bottomText,
    bottomButtonText
  }
`;

export const WORKSHOP_PAGE_QUERY = groq`
  *[_type == "workshopPage"] | order(_updatedAt desc)[0] {
    _id,
    "heroImageUrl": heroImage.asset->url,
    badgeText,
    headlineLine1,
    headlineLine2,
    intro,
    features[] { title, description },
    videoUrl,
    ctaButtonText,
    gallerySectionTitle,
    gallerySectionTitleAccent
  }
`;

export const ACCESSORIES_PAGE_QUERY = groq`
  *[_type == "accessoriesPage"] | order(_updatedAt desc)[0] {
    _id,
    "heroImageUrl": heroImage.asset->url,
    headlineLine1,
    headlineLine2,
    subtitle,
    ctaTitle,
    ctaDescription,
    ctaButtonText
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
    hours,
    chatQuickQuestions
  }
`;
