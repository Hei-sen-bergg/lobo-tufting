/**
 * One-time seed: copies all site fallbacks (text + images) into Sanity.
 *
 * Usage:
 *   1. Create an API token with EDITOR rights at https://www.sanity.io/manage → API → Tokens
 *   2. Add to .env.local: SANITY_WRITE_TOKEN=your_token
 *   3. Run: npm run seed:sanity
 *
 * Idempotent: uses createOrReplace on fixed _ids, so re-running updates in place
 * instead of duplicating content.
 */
import { createClient } from '@sanity/client';
import { readFileSync, existsSync, createReadStream } from 'fs';
import { resolve } from 'path';
import { WHATSAPP_NUMBER } from '../constants';
import {
  ABOUT_PAGE_DEFAULTS,
  ACCESSORIES_PAGE_DEFAULTS,
  DEFAULT_ACCESSORIES,
  DEFAULT_GALLERY,
  DEFAULT_PRODUCTS,
  GALLERY_PAGE_DEFAULTS,
  HOME_PAGE_DEFAULTS,
  SHOP_PAGE_DEFAULTS,
  WORKSHOP_PAGE_DEFAULTS,
} from '../src/sanity/defaults/content';

function loadEnvLocal() {
  const path = resolve(process.cwd(), '.env.local');
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    'Missing VITE_SANITY_PROJECT_ID or SANITY_WRITE_TOKEN in .env.local\n' +
      'Create an Editor token at https://www.sanity.io/manage → API → Tokens'
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-05-20',
  token,
  useCdn: false,
});

/** Resolve a site URL like "/lobo_tufting_/x.webp" to a local file in public/. */
function localPath(url: string | undefined): string | null {
  if (!url) return null;
  const cleaned = url.replace(/^\//, '');
  const abs = resolve(process.cwd(), 'public', cleaned);
  return existsSync(abs) ? abs : null;
}

/** Upload an image once and return a Sanity image field value (cached per URL). */
const assetCache = new Map<string, string>();
async function uploadImage(url: string | undefined) {
  if (!url) return undefined;
  if (assetCache.has(url)) {
    return { _type: 'image', asset: { _type: 'reference', _ref: assetCache.get(url) } };
  }
  const abs = localPath(url);
  if (!abs) {
    console.warn(`  ⚠️  Skipping missing image: ${url}`);
    return undefined;
  }
  const filename = url.split('/').pop() || 'image.webp';
  const asset = await client.assets.upload('image', createReadStream(abs), {
    filename,
    contentType: 'image/webp',
  });
  assetCache.set(url, asset._id);
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function seed() {
  console.log(`\nSeeding ${projectId}/${dataset}…\n`);

  // Build docs sequentially so image uploads can be awaited.
  const homePage = {
    _id: 'homePage',
    _type: 'hero',
    badgeText: HOME_PAGE_DEFAULTS.badgeText,
    headlineLine1: HOME_PAGE_DEFAULTS.headlineLine1,
    headlineLine2: HOME_PAGE_DEFAULTS.headlineLine2,
    subtitle: HOME_PAGE_DEFAULTS.subtitle,
    primaryButtonText: HOME_PAGE_DEFAULTS.primaryButtonText,
    secondaryButtonText: HOME_PAGE_DEFAULTS.secondaryButtonText,
    howItWorksTitle: HOME_PAGE_DEFAULTS.howItWorksTitle,
    howItWorksSubtitle: HOME_PAGE_DEFAULTS.howItWorksSubtitle,
    steps: HOME_PAGE_DEFAULTS.steps,
    teaserLine1: HOME_PAGE_DEFAULTS.teaserLine1,
    teaserLine2: HOME_PAGE_DEFAULTS.teaserLine2,
    teaserDescription: HOME_PAGE_DEFAULTS.teaserDescription,
    stat1Value: HOME_PAGE_DEFAULTS.stat1Value,
    stat1Label: HOME_PAGE_DEFAULTS.stat1Label,
    stat2Value: HOME_PAGE_DEFAULTS.stat2Value,
    stat2Label: HOME_PAGE_DEFAULTS.stat2Label,
    ctaTitle: HOME_PAGE_DEFAULTS.ctaTitle,
    ctaButtonText: HOME_PAGE_DEFAULTS.ctaButtonText,
    image: await uploadImage(HOME_PAGE_DEFAULTS.imageUrl),
    teaserImage: await uploadImage(HOME_PAGE_DEFAULTS.teaserImageUrl),
  };

  const shopPage = { _id: 'shopPageCopy', _type: 'shopPage', ...SHOP_PAGE_DEFAULTS };
  const galleryPage = { _id: 'galleryPageCopy', _type: 'galleryPage', ...GALLERY_PAGE_DEFAULTS };
  const workshopPage = { _id: 'workshopPageCopy', _type: 'workshopPage', ...WORKSHOP_PAGE_DEFAULTS };
  const accessoriesPage = { _id: 'accessoriesPageCopy', _type: 'accessoriesPage', ...ACCESSORIES_PAGE_DEFAULTS };

  const aboutPage = {
    _id: 'aboutPage',
    _type: 'about',
    headlineLine1: ABOUT_PAGE_DEFAULTS.headlineLine1,
    headlineLine2: ABOUT_PAGE_DEFAULTS.headlineLine2,
    description: ABOUT_PAGE_DEFAULTS.description,
    mission: ABOUT_PAGE_DEFAULTS.mission,
    sustainability: ABOUT_PAGE_DEFAULTS.sustainability,
    statsSectionTitle: ABOUT_PAGE_DEFAULTS.statsSectionTitle,
    stats: ABOUT_PAGE_DEFAULTS.stats,
    visitTitle: ABOUT_PAGE_DEFAULTS.visitTitle,
    visitDescription: ABOUT_PAGE_DEFAULTS.visitDescription,
    visitButtonText: ABOUT_PAGE_DEFAULTS.visitButtonText,
    image: await uploadImage(ABOUT_PAGE_DEFAULTS.imageUrl),
  };

  const settings = {
    _id: 'settings',
    _type: 'settings',
    siteName: 'LOBO Tufting',
    siteDescription: 'Crafting premium handmade rugs that transform spaces into experiences.',
    contactEmail: 'hello@lobotufting.com',
    phoneNumber: WHATSAPP_NUMBER,
    address: 'Kodungallur, Kerala, India\nPIN: 680667',
    hours: '',
    socialLinks: [{ platform: 'instagram', url: 'https://www.instagram.com/lobo_tufting_/' }],
    chatQuickQuestions: [
      { label: 'Custom rug price?', message: "Hi LOBO! I'd like to know the price for a custom rug." },
      { label: 'Book a workshop', message: 'Hi LOBO! I want to book a slot for your next tufting workshop.' },
      { label: 'Accessories help', message: 'Hi LOBO! I need help choosing tufting accessories.' },
      { label: 'Track my order', message: "Hi LOBO! I'd like an update on my rug order." },
    ],
  };

  console.log('Uploading product images…');
  const products = [];
  for (const p of DEFAULT_PRODUCTS) {
    products.push({
      _id: p._id,
      _type: 'product',
      title: p.title,
      description: p.description,
      price: p.price,
      category: p.category,
      inStock: p.inStock,
      featured: p.featured,
      image: await uploadImage(p.imageUrl),
    });
  }

  console.log('Uploading gallery images…');
  const gallery = [];
  for (const g of DEFAULT_GALLERY) {
    gallery.push({
      _id: g._id,
      _type: 'gallery',
      title: g.title,
      description: g.description,
      category: g.category,
      featured: g.featured,
      image: await uploadImage(g.imageUrl),
    });
  }

  console.log('Uploading accessory images…');
  const accessories = [];
  for (let i = 0; i < DEFAULT_ACCESSORIES.length; i++) {
    const a = DEFAULT_ACCESSORIES[i];
    accessories.push({
      _id: a._id,
      _type: 'accessory',
      title: a.title,
      description: a.description,
      price: a.price,
      category: a.category,
      inStock: a.inStock,
      featured: a.featured,
      sortOrder: i + 1,
      image: await uploadImage(a.imageUrl),
    });
  }

  const docs = [
    homePage,
    shopPage,
    galleryPage,
    workshopPage,
    accessoriesPage,
    aboutPage,
    settings,
    ...products,
    ...gallery,
    ...accessories,
  ];

  console.log(`\nCommitting ${docs.length} documents…`);
  const transaction = client.transaction();
  for (const doc of docs) {
    transaction.createOrReplace(doc);
  }
  await transaction.commit();

  console.log(`\n✅ Done! ${docs.length} documents seeded (text + images).`);
  console.log('Open Studio to review, or reload the site to see it live.');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
