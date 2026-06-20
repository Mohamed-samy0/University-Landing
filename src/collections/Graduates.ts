import { revalidateCollection } from '@/lib/hooks/revalidate'
import { CollectionConfig } from 'payload'

export const Graduates: CollectionConfig = {
  slug: 'graduates',
    hooks: {
      afterChange: [revalidateCollection],
    },
  admin: { useAsTitle: 'name', group: 'University Content' },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'graduationYear', type: 'number', required: true },
    { name: 'jobTitle', type: 'text', required: true },
    { name: 'company', type: 'text', required: true },
    { name: 'testimonial', type: 'textarea', required: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'avatar', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'universityLogo',
      type: 'upload',
      relationTo: 'media',
      label: 'University Logo (Overlay)',
    },
    { name: 'order', type: 'number', label: 'Display Order' },
  ],
}
