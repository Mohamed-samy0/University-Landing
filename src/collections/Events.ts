import { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    group: 'University Content',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true, label: 'Event Description' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'date', type: 'date', required: true, label: 'Event Date (For the Ribbon)' },
    { name: 'url', type: 'text', label: 'Event URL', defaultValue: '#' },
  ],
}
