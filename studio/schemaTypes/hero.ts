import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Home Page — All Text & Images',
  type: 'document',
  fieldsets: [
    { name: 'heroSection', title: '① Hero (top of page)', options: { collapsible: true, collapsed: false } },
    { name: 'howItWorks', title: '② The LOBO Way', options: { collapsible: true } },
    { name: 'teaser', title: '③ Crafting Soft Statements', options: { collapsible: true } },
    { name: 'bottomCta', title: '④ Bottom green CTA', options: { collapsible: true } },
  ],
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Small badge (above headline)',
      type: 'string',
      fieldset: 'heroSection',
      initialValue: 'Not just made, felt',
    }),
    defineField({
      name: 'headlineLine1',
      title: 'Main headline — line 1 (white)',
      type: 'string',
      fieldset: 'heroSection',
      initialValue: 'ART YOU CAN',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headlineLine2',
      title: 'Main headline — line 2 (green)',
      type: 'string',
      fieldset: 'heroSection',
      initialValue: 'WALK ON.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Text under headline',
      type: 'text',
      fieldset: 'heroSection',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Hero background image',
      type: 'image',
      fieldset: 'heroSection',
      options: { hotspot: true },
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Green button text',
      type: 'string',
      fieldset: 'heroSection',
      initialValue: 'Custom Inquiry',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Outline button text',
      type: 'string',
      fieldset: 'heroSection',
      initialValue: 'Browse Collection',
    }),

    defineField({
      name: 'howItWorksTitle',
      title: 'Section heading',
      type: 'string',
      fieldset: 'howItWorks',
      initialValue: 'The LOBO Way',
    }),
    defineField({
      name: 'howItWorksSubtitle',
      title: 'Section subheading',
      type: 'text',
      fieldset: 'howItWorks',
      initialValue: 'Bespoke craftsmanship from Kerala to your doorstep.',
    }),
    defineField({
      name: 'steps',
      title: 'Three steps',
      type: 'array',
      fieldset: 'howItWorks',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'step',
          fields: [
            defineField({ name: 'title', title: 'Step title', type: 'string' }),
            defineField({ name: 'description', title: 'Step description', type: 'text' }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        }),
      ],
      initialValue: [
        { title: 'Conceptualize', description: 'Share your design, favorite anime character, or logo via WhatsApp.' },
        { title: 'Consultation', description: 'We help you select the perfect size, wool type, and vibrant color palette.' },
        { title: 'Hand-Tufted', description: 'Our artisans meticulously craft your rug, ensuring durability and detail.' },
      ],
    }),

    defineField({
      name: 'teaserLine1',
      title: 'Heading — line 1 (white)',
      type: 'string',
      fieldset: 'teaser',
      initialValue: 'Crafting',
    }),
    defineField({
      name: 'teaserLine2',
      title: 'Heading — line 2 (green)',
      type: 'string',
      fieldset: 'teaser',
      initialValue: 'Soft Statements.',
    }),
    defineField({
      name: 'teaserDescription',
      title: 'Paragraph',
      type: 'text',
      fieldset: 'teaser',
      initialValue:
        "Every rug we create is more than just home decor; it's a piece of tactile art. Located in Kodungallur, we pride ourselves on pushing the boundaries of tufting techniques.",
    }),
    defineField({
      name: 'stat1Value',
      title: 'Stat 1 — number',
      type: 'string',
      fieldset: 'teaser',
      initialValue: '200+',
    }),
    defineField({
      name: 'stat1Label',
      title: 'Stat 1 — label',
      type: 'string',
      fieldset: 'teaser',
      initialValue: 'Rugs Delivered',
    }),
    defineField({
      name: 'stat2Value',
      title: 'Stat 2 — number',
      type: 'string',
      fieldset: 'teaser',
      initialValue: '100%',
    }),
    defineField({
      name: 'stat2Label',
      title: 'Stat 2 — label',
      type: 'string',
      fieldset: 'teaser',
      initialValue: 'Handmade',
    }),

    defineField({
      name: 'ctaTitle',
      title: 'CTA heading',
      type: 'string',
      fieldset: 'bottomCta',
      initialValue: 'Ready to start your project?',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA button text',
      type: 'string',
      fieldset: 'bottomCta',
      initialValue: "Let's Chat on WhatsApp",
    }),
  ],
  preview: {
    select: { line1: 'headlineLine1', line2: 'headlineLine2' },
    prepare: ({ line1, line2 }) => ({
      title: 'Home Page Content',
      subtitle: [line1, line2].filter(Boolean).join(' '),
    }),
  },
});
