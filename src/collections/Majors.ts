import { CollectionConfig } from 'payload'

export const Majors: CollectionConfig = {
  slug: 'majors',
  admin: {
    useAsTitle: 'title',
    group: 'University Content',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Major Title (e.g., Engineering)' },
    { name: 'programsCount', type: 'number', required: true, label: 'Number of Programs' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'order', type: 'number', label: 'Display Order' },
  ],
}
