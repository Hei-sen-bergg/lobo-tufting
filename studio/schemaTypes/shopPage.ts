import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'shopPage',
  title: 'Shop Page',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: '① Hero banner', options: { collapsible: true, collapsed: false } },
    { name: 'headings', title: '② Headings & text', options: { collapsible: true, collapsed: false } },
    { name: 'video', title: '③ Video section', options: { collapsible: true } },
    { name: 'cta', title: '④ Bottom CTA', options: { collapsible: true } },
  ],
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Banner image (full-width behind headline)',
      type: 'image',
      fieldset: 'hero',
      options: { hotspot: true },
    }),
    defineField({
      name: 'headlineLine1',
      title: 'Page heading — line 1 (white)',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Available',
    }),
    defineField({
      name: 'headlineLine2',
      title: 'Page heading — line 2 (green)',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Masterpieces.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Text under heading',
      type: 'text',
      fieldset: 'headings',
      initialValue:
        'Ready-to-ship rugs handcrafted with premium materials. Exclusive drops.',
    }),
    defineField({
      name: 'videoSectionTitle',
      title: 'Video section — white part',
      type: 'string',
      fieldset: 'video',
      initialValue: 'Explore Our',
    }),
    defineField({
      name: 'videoSectionTitleAccent',
      title: 'Video section — green part',
      type: 'string',
      fieldset: 'video',
      initialValue: 'Studio',
    }),
    defineField({
      name: 'videoSectionSubtitle',
      title: 'Video section subtitle',
      type: 'text',
      fieldset: 'video',
      initialValue:
        'Inside our tufting studio - where creativity meets craftsmanship',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (YouTube, Vimeo, or Instagram link)',
      type: 'url',
      fieldset: 'video',
      description: 'Paste a video URL. Supports YouTube, Vimeo, or direct .mp4 links.',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Bottom CTA heading',
      type: 'string',
      fieldset: 'cta',
      initialValue: "Don't see what you're looking for?",
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Bottom CTA text',
      type: 'text',
      fieldset: 'cta',
      initialValue:
        'We specialize in one-of-a-kind custom orders tailored to your specifications.',
    }),
    defineField({
      name: 'ctaLinkText',
      title: 'Bottom CTA link text',
      type: 'string',
      fieldset: 'cta',
      initialValue: 'Start a custom commission',
    }),
  ],
  preview: {
    select: { line1: 'headlineLine1', line2: 'headlineLine2' },
    prepare: ({ line1, line2 }) => ({
      title: 'Shop Page',
      subtitle: [line1, line2].filter(Boolean).join(' '),
    }),
  },
});
