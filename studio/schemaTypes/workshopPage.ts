import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'workshopPage',
  title: 'Workshops Page — All Text',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Small badge above heading',
      type: 'string',
      initialValue: 'Workshops in Kerala',
    }),
    defineField({
      name: 'headlineLine1',
      title: 'Page heading — line 1 (white)',
      type: 'string',
      initialValue: 'Become the',
    }),
    defineField({
      name: 'headlineLine2',
      title: 'Page heading — line 2 (green)',
      type: 'string',
      initialValue: 'Artisan.',
    }),
    defineField({
      name: 'intro',
      title: 'Intro paragraph',
      type: 'text',
      initialValue:
        'Ever wondered how those fluffy masterpieces are made? Join us in our Kodungallur studio and learn the addictive art of tufting.',
    }),
    defineField({
      name: 'features',
      title: 'Four feature blocks',
      type: 'array',
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
      name: 'ctaButtonText',
      title: 'Main button text',
      type: 'string',
      initialValue: 'Inquire for Next Slot',
    }),
    defineField({
      name: 'gallerySectionTitle',
      title: 'Student gallery heading — white',
      type: 'string',
      initialValue: 'What Students',
    }),
    defineField({
      name: 'gallerySectionTitleAccent',
      title: 'Student gallery heading — green',
      type: 'string',
      initialValue: 'Create',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Workshops Page — All Text' }),
  },
});
