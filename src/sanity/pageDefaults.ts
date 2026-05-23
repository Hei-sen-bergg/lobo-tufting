import { withFields } from './merge';
import type {
  AboutPage,
  AccessoriesPageCopy,
  GalleryPageCopy,
  ShopPageCopy,
  WorkshopPageCopy,
} from './types';
import {
  ABOUT_PAGE_DEFAULTS,
  ACCESSORIES_PAGE_DEFAULTS,
  GALLERY_PAGE_DEFAULTS,
  SHOP_PAGE_DEFAULTS,
  WORKSHOP_PAGE_DEFAULTS,
} from './defaults/content';

const shopKeys: (keyof ShopPageCopy)[] = [
  'headlineLine1',
  'headlineLine2',
  'subtitle',
  'videoSectionTitle',
  'videoSectionTitleAccent',
  'videoSectionSubtitle',
  'ctaTitle',
  'ctaDescription',
  'ctaLinkText',
];

const galleryKeys: (keyof GalleryPageCopy)[] = [
  'headlineLine1',
  'headlineLine2',
  'subtitle',
  'bottomText',
  'bottomButtonText',
];

const workshopKeys: (keyof WorkshopPageCopy)[] = [
  'badgeText',
  'headlineLine1',
  'headlineLine2',
  'intro',
  'ctaButtonText',
  'gallerySectionTitle',
  'gallerySectionTitleAccent',
];

const accessoriesKeys: (keyof AccessoriesPageCopy)[] = [
  'headlineLine1',
  'headlineLine2',
  'subtitle',
  'ctaTitle',
  'ctaDescription',
  'ctaButtonText',
];

const aboutKeys: (keyof AboutPage)[] = [
  'headlineLine1',
  'headlineLine2',
  'description',
  'mission',
  'sustainability',
  'statsSectionTitle',
  'visitTitle',
  'visitDescription',
  'visitButtonText',
];

export function withShopPageDefaults(data: Partial<ShopPageCopy> | null | undefined): ShopPageCopy {
  return withFields(data, SHOP_PAGE_DEFAULTS, shopKeys);
}

export function withGalleryPageDefaults(
  data: Partial<GalleryPageCopy> | null | undefined
): GalleryPageCopy {
  return withFields(data, GALLERY_PAGE_DEFAULTS, galleryKeys);
}

export function withWorkshopPageDefaults(
  data: Partial<WorkshopPageCopy> | null | undefined
): WorkshopPageCopy {
  const merged = withFields(data, WORKSHOP_PAGE_DEFAULTS, workshopKeys);
  return {
    ...merged,
    features: data?.features?.length ? data.features : WORKSHOP_PAGE_DEFAULTS.features,
  };
}

export function withAccessoriesPageDefaults(
  data: Partial<AccessoriesPageCopy> | null | undefined
): AccessoriesPageCopy {
  return withFields(data, ACCESSORIES_PAGE_DEFAULTS, accessoriesKeys);
}

export function withAboutPageDefaults(data: Partial<AboutPage> | null | undefined): AboutPage {
  const merged = withFields(data, ABOUT_PAGE_DEFAULTS, aboutKeys);
  return {
    ...merged,
    imageUrl: data?.imageUrl?.trim() || ABOUT_PAGE_DEFAULTS.imageUrl,
  };
}
