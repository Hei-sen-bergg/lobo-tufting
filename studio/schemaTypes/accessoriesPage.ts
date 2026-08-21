import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'accessoriesPage',
  title: 'Accessories Page',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: '① Hero banner', options: { collapsible: true, collapsed: false } },
    { name: 'headings', title: '② Headings & text', options: { collapsible: true, collapsed: false } },
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
      initialValue: 'Tufting',
    }),
    defineField({
      name: 'headlineLine2',
      title: 'Page heading — line 2 (green)',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Essentials.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Text under heading',
      type: 'text',
      fieldset: 'headings',
      initialValue:
        'Premium tools, yarn, frames, and supplies for your tufting journey — curated by the LOBO studio.',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Bottom CTA heading',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Need help choosing gear?',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Bottom CTA text',
      type: 'text',
      fieldset: 'headings',
      initialValue:
        'Message us on WhatsApp and we will recommend the right kit for your skill level.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Bottom button text',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Ask on WhatsApp',
    }),
  ],
  preview: {
    select: { line1: 'headlineLine1', line2: 'headlineLine2' },
    prepare: ({ line1, line2 }) => ({
      title: 'Accessories Page',
      subtitle: [line1, line2].filter(Boolean).join(' '),
    }),
  },
});
