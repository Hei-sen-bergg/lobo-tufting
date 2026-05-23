/**
 * One-time seed: copies all site fallbacks into Sanity so Studio matches the live site.
 *
 * Usage:
 *   1. Create an API token with EDITOR rights at sanity.io/manage
 *   2. Add to .env.local: SANITY_WRITE_TOKEN=your_token
 *   3. Run: npm run seed:sanity
 */
import { createClient } from '@sanity/client';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
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

async function seed() {
  const docs = [
    {
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
    },
    { _id: 'shopPageCopy', _type: 'shopPage', ...SHOP_PAGE_DEFAULTS },
    { _id: 'galleryPageCopy', _type: 'galleryPage', ...GALLERY_PAGE_DEFAULTS },
    { _id: 'workshopPageCopy', _type: 'workshopPage', ...WORKSHOP_PAGE_DEFAULTS },
    { _id: 'accessoriesPageCopy', _type: 'accessoriesPage', ...ACCESSORIES_PAGE_DEFAULTS },
    {
      _id: 'aboutPage',
      _type: 'about',
      headlineLine1: ABOUT_PAGE_DEFAULTS.headlineLine1,
      headlineLine2: ABOUT_PAGE_DEFAULTS.headlineLine2,
      description: ABOUT_PAGE_DEFAULTS.description,
      mission: ABOUT_PAGE_DEFAULTS.mission,
      sustainability: ABOUT_PAGE_DEFAULTS.sustainability,
      statsSectionTitle: ABOUT_PAGE_DEFAULTS.statsSectionTitle,
      visitTitle: ABOUT_PAGE_DEFAULTS.visitTitle,
      visitDescription: ABOUT_PAGE_DEFAULTS.visitDescription,
      visitButtonText: ABOUT_PAGE_DEFAULTS.visitButtonText,
    },
    ...DEFAULT_PRODUCTS.map((p) => ({
      _id: p._id,
      _type: 'product',
      title: p.title,
      description: p.description,
      price: p.price,
      category: p.category,
      inStock: p.inStock,
      featured: p.featured,
    })),
    ...DEFAULT_GALLERY.map((g) => ({
      _id: g._id,
      _type: 'gallery',
      title: g.title,
      description: g.description,
      category: g.category,
      featured: g.featured,
    })),
    ...DEFAULT_ACCESSORIES.map((a, i) => ({
      _id: a._id,
      _type: 'accessory',
      title: a.title,
      description: a.description,
      price: a.price,
      category: a.category,
      inStock: a.inStock,
      featured: a.featured,
      sortOrder: i + 1,
    })),
  ];

  const cleaned = docs.map((doc) => {
    const { imageUrl, imageLqip, ...rest } = doc as Record<string, unknown>;
    void imageUrl;
    void imageLqip;
    return rest;
  });

  console.log(`Seeding ${cleaned.length} documents to ${projectId}/${dataset}...`);

  const transaction = client.transaction();
  for (const doc of cleaned) {
    transaction.createOrReplace(doc);
  }
  await transaction.commit();

  console.log('Done. Open Studio → Page copy & item lists to review and upload images.');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
