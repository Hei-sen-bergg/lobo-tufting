import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'shopPage',
  title: 'Shop Page — All Text',
  type: 'document',
  fields: [
    defineField({
      name: 'headlineLine1',
      title: 'Page heading — line 1 (white)',
      description: 'Live site default: "Available"',
      type: 'string',
      initialValue: 'Available',
    }),
    defineField({
      name: 'headlineLine2',
      title: 'Page heading — line 2 (green)',
      description: 'Live site default: "Masterpieces."',
      type: 'string',
      initialValue: 'Masterpieces.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Text under heading',
      type: 'text',
      initialValue:
        'Ready-to-ship rugs handcrafted with premium materials. Exclusive drops.',
    }),
    defineField({
      name: 'videoSectionTitle',
      title: 'Video section — white part',
      type: 'string',
      initialValue: 'Explore Our',
    }),
    defineField({
      name: 'videoSectionTitleAccent',
      title: 'Video section — green part',
      type: 'string',
      initialValue: 'Studio',
    }),
    defineField({
      name: 'videoSectionSubtitle',
      title: 'Video section subtitle',
      type: 'text',
      initialValue:
        'Inside our tufting studio - where creativity meets craftsmanship',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Bottom CTA heading',
      type: 'string',
      initialValue: "Don't see what you're looking for?",
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Bottom CTA text',
      type: 'text',
      initialValue:
        'We specialize in one-of-a-kind custom orders tailored to your specifications.',
    }),
    defineField({
      name: 'ctaLinkText',
      title: 'Bottom CTA link text',
      type: 'string',
      initialValue: 'Start a custom commission',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Shop Page — All Text' }),
  },
});
