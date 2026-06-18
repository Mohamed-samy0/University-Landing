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
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Background Image',
    },
    {
      name: 'searchPlaceholder',
      type: 'text',
      label: 'Search Box Placeholder',
      defaultValue: 'Search programs, courses...',
    },
  ],
}
