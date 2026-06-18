// src/collections/Programs.ts
import { CollectionConfig } from 'payload'

export const Programs: CollectionConfig = {
  slug: 'programs',
  admin: {
    useAsTitle: 'title',
    group: 'University Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Major / Program Title',
    },
    {
      name: 'programCount',
      type: 'number',
      required: true,
      label: 'Number of Sub-Programs',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Background Image',
    },
  ],
}
