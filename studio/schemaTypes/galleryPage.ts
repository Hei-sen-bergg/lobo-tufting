import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: '① Hero banner', options: { collapsible: true, collapsed: false } },
    { name: 'headings', title: '② Headings & text', options: { collapsible: true, collapsed: false } },
    { name: 'video', title: '③ Video reel', options: { collapsible: true } },
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
      initialValue: 'Tufted',
    }),
    defineField({
      name: 'headlineLine2',
      title: 'Page heading — line 2 (green)',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Archives.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Text under heading',
      type: 'text',
      fieldset: 'headings',
      initialValue:
        'A curation of our past works, custom commissions, and creative experiments.',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (YouTube, Vimeo, or Instagram link)',
      type: 'url',
      fieldset: 'video',
      description: 'Paste a video URL. Supports YouTube, Vimeo, or direct .mp4 links.',
    }),
    defineField({
      name: 'bottomText',
      title: 'Text above bottom button',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Want something similar for your space?',
    }),
    defineField({
      name: 'bottomButtonText',
      title: 'Bottom button text',
      type: 'string',
      fieldset: 'headings',
      initialValue: 'Request a Recreation',
    }),
  ],
  preview: {
    select: { line1: 'headlineLine1', line2: 'headlineLine2' },
    prepare: ({ line1, line2 }) => ({
      title: 'Gallery Page',
      subtitle: [line1, line2].filter(Boolean).join(' '),
    }),
  },
});
