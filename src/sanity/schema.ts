/**
 * SANITY SCHEMA DEFINITIONS
 * 
 * This file contains the schema definitions that need to be created in your Sanity Studio.
 * Go to your Sanity Studio and create these document types using the Studio interface or 
 * by adding these definitions to your schema files in the sanity-studio folder.
 * 
 * Steps:
 * 1. Open your Sanity Studio (usually http://localhost:3333)
 * 2. Go to the desk/schema configuration
 * 3. Create each document type below
 */

// ==================== GALLERY SCHEMA ====================
export const gallerySchema = {
  name: 'gallery',
  type: 'document',
  title: 'Gallery Items',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Premium', value: 'Premium' },
          { title: 'Modern', value: 'Modern' },
          { title: 'Custom', value: 'Custom' },
          { title: 'Anime', value: 'Anime' },
          { title: 'Art', value: 'Art' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }
  ]
};

// ==================== PRODUCT SCHEMA ====================
export const productSchema = {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }
  ]
};

// ==================== WORKSHOP SCHEMA ====================
export const workshopSchema = {
  name: 'workshopItem',
  type: 'document',
  title: 'Workshops',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'enrolledCount',
      title: 'Enrolled Count',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }
  ]
};

// ==================== ABOUT SCHEMA ====================
export const aboutSchema = {
  name: 'about',
  type: 'document',
  title: 'About Page',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'story',
      title: 'Story',
      type: 'text'
    },
    {
      name: 'mission',
      title: 'Mission',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' }
          ]
        }
      ]
    }
  ]
};

// ==================== HERO SCHEMA ====================
export const heroSchema = {
  name: 'hero',
  type: 'document',
  title: 'Homepage Hero',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'cta',
      title: 'CTA Button Text',
      type: 'string'
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string'
    }
  ]
};

// ==================== TESTIMONIAL SCHEMA ====================
export const testimonialSchema = {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonials',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'clientTitle',
      title: 'Client Title',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 }
        ]
      }
    },
    {
      name: 'image',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};

// ==================== SETTINGS SCHEMA ====================
export const settingsSchema = {
  name: 'settings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string'
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text'
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string'
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text'
    },
    {
      name: 'hours',
      title: 'Business Hours',
      type: 'text'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' }
          ]
        }
      ]
    }
  ]
};
