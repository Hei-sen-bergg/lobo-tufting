import type { HomePage } from './types';

export const HOME_PAGE_DEFAULTS: HomePage = {
  _id: 'fallback',
  badgeText: 'Not just made, felt',
  headlineLine1: 'ART YOU CAN',
  headlineLine2: 'WALK ON.',
  subtitle:
    'Premium custom-tufted rugs for your space. Anime, logos, or abstract art—we bring your floors to life.',
  imageUrl: '/lobo_tufting_/lobo_tufting__1687850774_3134241923196813278_47333694357.webp',
  primaryButtonText: 'Custom Inquiry',
  secondaryButtonText: 'Browse Collection',
  howItWorksTitle: 'The LOBO Way',
  howItWorksSubtitle: 'Bespoke craftsmanship from Kerala to your doorstep.',
  steps: [
    {
      title: 'Conceptualize',
      description: 'Share your design, favorite anime character, or logo via WhatsApp.',
    },
    {
      title: 'Consultation',
      description: 'We help you select the perfect size, wool type, and vibrant color palette.',
    },
    {
      title: 'Hand-Tufted',
      description: 'Our artisans meticulously craft your rug, ensuring durability and detail.',
    },
  ],
  teaserLine1: 'Crafting',
  teaserLine2: 'Soft Statements.',
  teaserDescription:
    "Every rug we create is more than just home decor; it's a piece of tactile art. Located in Kodungallur, we pride ourselves on pushing the boundaries of tufting techniques.",
  stat1Value: '200+',
  stat1Label: 'Rugs Delivered',
  stat2Value: '100%',
  stat2Label: 'Handmade',
  ctaTitle: 'Ready to start your project?',
  ctaButtonText: "Let's Chat on WhatsApp",
};

export function withHomeDefaults(data: HomePage | null | undefined): HomePage {
  if (!data) return HOME_PAGE_DEFAULTS;

  const headlineLine1 =
    data.headlineLine1?.trim() ||
    data.title?.trim() ||
    HOME_PAGE_DEFAULTS.headlineLine1;

  const headlineLine2 =
    data.headlineLine2?.trim() || HOME_PAGE_DEFAULTS.headlineLine2;

  return {
    ...HOME_PAGE_DEFAULTS,
    ...data,
    badgeText: data.badgeText?.trim() || HOME_PAGE_DEFAULTS.badgeText,
    headlineLine1,
    headlineLine2,
    subtitle: data.subtitle?.trim() || HOME_PAGE_DEFAULTS.subtitle,
    imageUrl: data.imageUrl?.trim() || HOME_PAGE_DEFAULTS.imageUrl,
    primaryButtonText:
      data.primaryButtonText?.trim() || HOME_PAGE_DEFAULTS.primaryButtonText,
    secondaryButtonText:
      data.secondaryButtonText?.trim() || HOME_PAGE_DEFAULTS.secondaryButtonText,
    howItWorksTitle:
      data.howItWorksTitle?.trim() || HOME_PAGE_DEFAULTS.howItWorksTitle,
    howItWorksSubtitle:
      data.howItWorksSubtitle?.trim() || HOME_PAGE_DEFAULTS.howItWorksSubtitle,
    steps: data.steps?.length ? data.steps : HOME_PAGE_DEFAULTS.steps,
    teaserLine1: data.teaserLine1?.trim() || HOME_PAGE_DEFAULTS.teaserLine1,
    teaserLine2: data.teaserLine2?.trim() || HOME_PAGE_DEFAULTS.teaserLine2,
    teaserDescription:
      data.teaserDescription?.trim() || HOME_PAGE_DEFAULTS.teaserDescription,
    stat1Value: data.stat1Value?.trim() || HOME_PAGE_DEFAULTS.stat1Value,
    stat1Label: data.stat1Label?.trim() || HOME_PAGE_DEFAULTS.stat1Label,
    stat2Value: data.stat2Value?.trim() || HOME_PAGE_DEFAULTS.stat2Value,
    stat2Label: data.stat2Label?.trim() || HOME_PAGE_DEFAULTS.stat2Label,
    ctaTitle: data.ctaTitle?.trim() || HOME_PAGE_DEFAULTS.ctaTitle,
    ctaButtonText: data.ctaButtonText?.trim() || HOME_PAGE_DEFAULTS.ctaButtonText,
  };
}
