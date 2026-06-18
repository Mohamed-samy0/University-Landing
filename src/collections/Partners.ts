import { CollectionConfig } from 'payload'

export const Partners: CollectionConfig = {
  slug: 'partners',
  admin: {
    useAsTitle: 'name',
    group: 'University Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Partner Name',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Partner Logo',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Partner Display Image',
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'Partner Website URL',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Partner Description',
    },
  ],
}
