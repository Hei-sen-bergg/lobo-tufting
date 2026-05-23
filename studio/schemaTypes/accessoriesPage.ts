import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'accessoriesPage',
  title: 'Accessories Page — All Text',
  type: 'document',
  fields: [
    defineField({
      name: 'headlineLine1',
      title: 'Page heading — line 1 (white)',
      type: 'string',
      initialValue: 'Tufting',
    }),
    defineField({
      name: 'headlineLine2',
      title: 'Page heading — line 2 (green)',
      type: 'string',
      initialValue: 'Essentials.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Text under heading',
      type: 'text',
      initialValue:
        'Premium tools, yarn, frames, and supplies for your tufting journey — curated by the LOBO studio.',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Bottom CTA heading',
      type: 'string',
      initialValue: 'Need help choosing gear?',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Bottom CTA text',
      type: 'text',
      initialValue:
        'Message us on WhatsApp and we will recommend the right kit for your skill level.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Bottom button text',
      type: 'string',
      initialValue: 'Ask on WhatsApp',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Accessories Page — All Text' }),
  },
});
