import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About Page — All Text & Images',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: '① Top section', options: { collapsible: true } },
    { name: 'body', title: '② Mission & sustainability', options: { collapsible: true } },
    { name: 'footer', title: '③ Visit CTA', options: { collapsible: true } },
  ],
  fields: [
    defineField({
      name: 'headlineLine1',
      title: 'Page heading — line 1 (white)',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'The LOBO',
    }),
    defineField({
      name: 'headlineLine2',
      title: 'Page heading — line 2 (green)',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Origin.',
    }),
    defineField({
      name: 'description',
      title: 'Intro paragraph',
      type: 'text',
      fieldset: 'hero',
      initialValue:
        'Born out of an obsession for textures and pop culture, LOBO Tufting started in a small garage in Kodungallur.',
    }),
    defineField({
      name: 'image',
      title: 'Main studio image',
      type: 'image',
      fieldset: 'hero',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mission',
      title: 'Our Mission — text',
      type: 'text',
      fieldset: 'body',
      initialValue:
        "We don't just sell rugs; we sell tactile stories. Our mission is to bridge the gap between digital art and physical warmth, one stitch at a time.",
    }),
    defineField({
      name: 'sustainability',
      title: 'Sustainability — text',
      type: 'text',
      fieldset: 'body',
      initialValue:
        'We source New Zealand imported wool and use eco-friendly adhesives, ensuring that our footprints are as soft on the planet as our rugs are on your feet.',
    }),
    defineField({
      name: 'statsSectionTitle',
      title: 'Stats section heading',
      type: 'string',
      fieldset: 'body',
      initialValue: 'By The Numbers',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      fieldset: 'body',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Number', type: 'number' }),
            defineField({ name: 'suffix', title: 'Suffix (e.g. +, %)', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
          preview: {
            select: { value: 'value', suffix: 'suffix', label: 'label' },
            prepare: ({ value, suffix, label }) => ({
              title: `${value ?? ''}${suffix ?? ''} ${label ?? ''}`.trim(),
            }),
          },
        },
      ],
      initialValue: [
        { value: 200, suffix: '+', label: 'Rugs Crafted' },
        { value: 100, suffix: '%', label: 'Happy Clients' },
        { value: 4, suffix: '+', label: 'Years Active' },
        { value: 1000, suffix: '+', label: 'Hours Invested' },
      ],
    }),
    defineField({
      name: 'visitTitle',
      title: 'Visit CTA heading',
      type: 'string',
      fieldset: 'footer',
      initialValue: 'Visit the Studio',
    }),
    defineField({
      name: 'visitDescription',
      title: 'Visit CTA text',
      type: 'text',
      fieldset: 'footer',
      initialValue:
        'Located in the heart of Kodungallur, Kerala. By appointment only.',
    }),
    defineField({
      name: 'visitButtonText',
      title: 'Visit button text',
      type: 'string',
      fieldset: 'footer',
      initialValue: 'Book a Studio Visit',
    }),
  ],
  preview: {
    select: { line1: 'headlineLine1', line2: 'headlineLine2' },
    prepare: ({ line1, line2 }) => ({
      title: 'About Page — All Text',
      subtitle: [line1, line2].filter(Boolean).join(' '),
    }),
  },
});
