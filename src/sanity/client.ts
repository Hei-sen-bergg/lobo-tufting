import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

if (!projectId) {
  console.error('Sanity Project ID is not configured');
}

// Public "production" datasets can be read without a token.
// An invalid/expired token causes every request to fail with "Unauthorized".
export const sanityClient = createClient({
  projectId: projectId || '',
  dataset,
  apiVersion: '2024-05-20',
  useCdn: true,
});

export const groq = String.raw;
