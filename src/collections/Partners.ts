import { revalidateCollection } from '@/lib/hooks/revalidate'
import { CollectionConfig } from 'payload'

export const Partners: CollectionConfig = {
  slug: 'partners',
  hooks: {
    afterChange: [revalidateCollection],
  },
  admin: {
    useAsTitle: 'name',
    group: 'University Content',
  },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media', required: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'url', type: 'text', required: true, label: 'CTA URL' },
    { name: 'description', type: 'textarea', label: 'Detailed Description' },
    {
      name: 'position',
      type: 'select',
      label: 'Initial Grid Position',
      options: [
        { label: 'Top Left', value: 'tl' },
        { label: 'Top Right', value: 'tr' },
        { label: 'Bottom Left', value: 'bl' },
        { label: 'Bottom Right', value: 'br' },
      ],
      required: true,
      defaultValue: 'tl',
    },
    // الـ 3 مربعات اللي في الديزاين
    {
      name: 'stats',
      type: 'array',
      label: 'University Statistics (Max 3)',
      maxRows: 3,
      fields: [
        { name: 'value', type: 'text', label: 'Stat Value (e.g., #1)' },
        { name: 'label', type: 'text', label: 'Stat Label (e.g., YOUNG UNIVERSITY)' },
      ],
    },
  ],
}
