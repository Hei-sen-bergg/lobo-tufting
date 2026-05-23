import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'galleryPage',
  title: 'Gallery Page — All Text',
  type: 'document',
  fields: [
    defineField({
      name: 'headlineLine1',
      title: 'Page heading — line 1 (white)',
      type: 'string',
      initialValue: 'Tufted',
    }),
    defineField({
      name: 'headlineLine2',
      title: 'Page heading — line 2 (green)',
      type: 'string',
      initialValue: 'Archives.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Text under heading',
      type: 'text',
      initialValue:
        'A curation of our past works, custom commissions, and creative experiments.',
    }),
    defineField({
      name: 'bottomText',
      title: 'Text above bottom button',
      type: 'string',
      initialValue: 'Want something similar for your space?',
    }),
    defineField({
      name: 'bottomButtonText',
      title: 'Bottom button text',
      type: 'string',
      initialValue: 'Request a Recreation',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Gallery Page — All Text' }),
  },
});
