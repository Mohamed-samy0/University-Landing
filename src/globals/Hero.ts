import { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  admin: {
    group: 'Landing Page Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline',
      defaultValue: 'Your Gateway To Global Education',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      required: true,
      label: 'Subheadline',
    },

    {
      name: 'backgroundType',
      type: 'radio',
      label: 'Background Type',
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Video', value: 'video' },
      ],
      defaultValue: 'image',
      required: true,
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        condition: (_, siblingData) => siblingData.backgroundType === 'image',
      },
    },
    {
      name: 'backgroundVideo',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Video (MP4/WebM)',
      admin: {
        condition: (_, siblingData) => siblingData.backgroundType === 'video',
      },
    },

    {
      name: 'primaryButtonText',
      type: 'text',
      label: 'Primary Button Text (White Button)',
      defaultValue: 'Explore Programs',
    },
    {
      name: 'primaryButtonUrl',
      type: 'text',
      label: 'Primary Button URL',
      defaultValue: '/explore',
    },
    {
      name: 'secondaryButtonText',
      type: 'text',
      label: 'Secondary Button Text (Transparent Button)',
      defaultValue: 'Start a Virtual Campus Tour',
    },
    {
      name: 'secondaryButtonUrl',
      type: 'text',
      label: 'Secondary Button URL',
      defaultValue: '/tour',
    },
  ],
}
