import { GlobalConfig } from 'payload'
import { revalidateGlobal } from '../lib/hooks/revalidate'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  hooks: {
    afterChange: [revalidateGlobal],
  },
  admin: {
    group: 'Global Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      required: true,
      defaultValue: 'The Knowledge Hub Universities',
      label: 'Default SEO Title',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      required: true,
      defaultValue: 'Your Gateway To Global Education',
      label: 'Default SEO Description',
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Open Graph Image (Social Share Image)',
    },
  ],
}
