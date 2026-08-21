import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'workshopPage',
  title: 'Workshops Page',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: '① Hero banner', options: { collapsible: true, collapsed: false } },
    { name: 'headings', title: '② Headings & text', options: { collapsible: true, collapsed: false } },
    { name: 'video', title: '③ Video', options: { collapsible: true } },
    { name: 'cta', title: '④ Button & gallery', options: { collapsible: true } },
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
      name: 'badgeText',
      title: 'Small badge above heading',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Workshops in Kerala',
    }),
    defineField({
      name: 'headlineLine1',
      title: 'Page heading — line 1 (white)',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Become the',
    }),
    defineField({
      name: 'headlineLine2',
      title: 'Page heading — line 2 (green)',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Artisan.',
    }),
    defineField({
      name: 'intro',
      title: 'Intro paragraph',
      type: 'text',
      fieldset: 'headings',
      initialValue:
        'Ever wondered how those fluffy masterpieces are made? Join us in our Kodungallur studio and learn the addictive art of tufting.',
    }),
    defineField({
      name: 'features',
      title: 'Four feature blocks',
      type: 'array',
      fieldset: 'headings',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
          ],
        }),
      ],
      initialValue: [
        { title: '3-Hour Session', description: 'Intensive hands-on training from start to finish.' },
        { title: 'All Gear Provided', description: 'Tufting guns, frames, and premium wool included.' },
        { title: 'Small Groups', description: 'Maximum 6 people per session for personalized attention.' },
        { title: 'Refreshments', description: "Snacks and Kerala's finest coffee to keep you fueled." },
      ],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (YouTube, Vimeo, or Instagram link)',
      type: 'url',
      fieldset: 'video',
      description: 'Paste a video URL. Supports YouTube, Vimeo, or direct .mp4 links.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Main button text',
      type: 'string',
      fieldset: 'cta',
      initialValue: 'Inquire for Next Slot',
    }),
    defineField({
      name: 'gallerySectionTitle',
      title: 'Student gallery heading — white',
      type: 'string',
      fieldset: 'cta',
      initialValue: 'What Students',
    }),
    defineField({
      name: 'gallerySectionTitleAccent',
      title: 'Student gallery heading — green',
      type: 'string',
      fieldset: 'cta',
      initialValue: 'Create',
    }),
  ],
  preview: {
    select: { line1: 'headlineLine1', line2: 'headlineLine2' },
    prepare: ({ line1, line2 }) => ({
      title: 'Workshops Page',
      subtitle: [line1, line2].filter(Boolean).join(' '),
    }),
  },
});
