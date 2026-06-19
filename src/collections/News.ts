import { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    group: 'University Content',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'category', type: 'text', required: true, label: 'Category' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'date', type: 'date', required: true },
    { name: 'featured', type: 'checkbox', defaultValue: false },
  ],
}
