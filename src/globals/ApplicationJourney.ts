import { revalidateGlobal } from '@/lib/hooks/revalidate'
import { Block } from 'payload'

export const ApplicationJourneyBlock: Block = {
  slug: 'applicationJourney',
  hooks: {
    afterChange: [revalidateGlobal],
  },
  interfaceName: 'ApplicationJourneyBlock',
  labels: {
    singular: 'Application Journey Section',
    plural: 'Application Journey Sections',
  },
  fields: [
    { name: 'tag', type: 'text', defaultValue: 'TAKE ACTION', required: true },
    { name: 'title', type: 'text', defaultValue: 'Your Journey Starts Here!', required: true },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Just a few steps to join TKH campus.',
      required: true,
    },
    { name: 'buttonText', type: 'text', defaultValue: 'Apply For 2026', required: true },
    { name: 'buttonLink', type: 'text', defaultValue: '/apply', required: true },
    {
      name: 'steps',
      type: 'array',
      label: 'Journey Steps',
      required: true,
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Step Title (e.g., Apply Online)' },
        { name: 'description', type: 'textarea', required: true, label: 'Step Description' },
      ],
    },
  ],
}
