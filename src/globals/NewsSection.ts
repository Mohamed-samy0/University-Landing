import { revalidateGlobal } from '@/lib/hooks/revalidate'
import { Block } from 'payload'

export const NewsSectionBlock: Block = {
  slug: 'newsSection',
  hooks: {
    afterChange: [revalidateGlobal],
  },
  interfaceName: 'NewsSectionBlock',
  fields: [
    { name: 'tag', type: 'text', defaultValue: 'Stay Updated', required: true },
    { name: 'title', type: 'text', defaultValue: 'Proud News!', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'buttonText', type: 'text', defaultValue: 'Explore Our All News', required: true },
    { name: 'buttonLink', type: 'text', defaultValue: '/news', required: true },
    {
      name: 'featuredNews',
      type: 'relationship',
      relationTo: 'news',
      hasMany: true,
      required: true,
      minRows: 1,
    },
  ],
}
