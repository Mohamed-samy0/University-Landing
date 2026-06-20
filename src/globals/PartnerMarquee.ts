// src/globals/PartnerMarquee.ts
import { revalidateGlobal } from '@/lib/hooks/revalidate'
import { GlobalConfig } from 'payload'

export const PartnerMarquee: GlobalConfig = {
  slug: 'partnerMarquee',
  hooks: {
    afterChange: [revalidateGlobal],
  },
  admin: {
    group: 'University Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'topRibbonImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Top Ribbon Image (Blue - e.g., Coventry Logo)',
      required: true,
    },
    {
      name: 'middleRibbonImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Middle Ribbon Image (Green - e.g., NOVA Logo)',
      required: true,
    },
    {
      name: 'bottomRibbonText',
      type: 'text',
      label: 'Bottom Ribbon Text (Grey)',
      defaultValue: 'NEW PARTNERSHIPS SOON',
      required: true,
    },
  ],
}
