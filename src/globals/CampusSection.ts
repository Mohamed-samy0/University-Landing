import { GlobalConfig } from 'payload'

export const CampusSection: GlobalConfig = {
  slug: 'campus-section',
  admin: { group: 'Landing Page Settings' },
  fields: [
    { name: 'tag', type: 'text', label: 'Small Top Tag' },
    { name: 'title', type: 'text', label: 'Main Section Title' },
    {
      name: 'features',
      type: 'array',
      label: 'Campus Features',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    { name: 'areaLabel', type: 'text', label: 'Area Tag (e.g. 50k m²)' },
  ],
}
