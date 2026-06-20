import { revalidateGlobal } from '@/lib/hooks/revalidate'
import { GlobalConfig } from 'payload'

export const Accordion: GlobalConfig = {
  slug: 'accordion',
  hooks: {
    afterChange: [revalidateGlobal],
  },
  admin: { group: 'Landing Page Settings' },
  access: { read: () => true },
  fields: [
    { name: 'tag', type: 'text', defaultValue: 'Experience TKH', label: 'Small Top Tag' },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Experience a World-Class Campus',
      label: 'Main Title',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Accordion Tabs',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Tab Title (e.g. State-of-the-Art Campus)',
        },
        { name: 'description', type: 'textarea', required: true, label: 'Tab Description' },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Associated Image',
        },
      ],
    },
    {
      name: 'statBadge',
      type: 'group',
      label: 'Floating Stat Badge (e.g. 50k m²)',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Campus Area' },
        { name: 'value', type: 'text', defaultValue: '50k m²' },
      ],
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Call to Action Button',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Know More About TKH' },
        { name: 'url', type: 'text', defaultValue: '/about' },
      ],
    },
  ],
}
