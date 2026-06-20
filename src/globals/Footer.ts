import { revalidateGlobal } from '@/lib/hooks/revalidate'
import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
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
      type: 'tabs',
      tabs: [
        {
          label: 'Layer 1: Top Footer',
          fields: [
            // Column 1
            { name: 'logo', type: 'upload', relationTo: 'media', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'contactTitle', type: 'text', defaultValue: 'Contact Us', required: true },
            // Column 2
            { name: 'phone', type: 'text', required: true },
            { name: 'email', type: 'text', required: true },
            { name: 'address', type: 'textarea', required: true },
            {
              name: 'ctaButton',
              type: 'group',
              fields: [
                { name: 'label', type: 'text', defaultValue: 'Apply Now' },
                { name: 'url', type: 'text', defaultValue: '/apply' },
              ],
            },

            // Column 3
            { name: 'searchTitle', type: 'text', defaultValue: 'Looking For Something?' },
            {
              name: 'socialLinks',
              type: 'array',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  options: [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'X (Twitter)', value: 'twitter' },
                    { label: 'YouTube', value: 'youtube' },
                    { label: 'TikTok', value: 'tiktok' },
                  ],
                  required: true,
                },
                { name: 'url', type: 'text', required: true },
                { name: 'searchButtonText', type: 'text', defaultValue: 'Search', required: true },
              ],
            },
          ],
        },
        {
          label: 'Layer 2: Mega Menu',
          fields: [
            {
              name: 'footerMenus',
              type: 'array',
              minRows: 1,
              maxRows: 6,
              fields: [
                { name: 'title', type: 'text', required: true },
                {
                  name: 'links',
                  type: 'array',
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    { name: 'url', type: 'text', required: true },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Layer 3: Bottom Bar',
          fields: [
            {
              name: 'copyright',
              type: 'text',
              required: true,
              defaultValue: '© 2024 The Knowledge Hub Universities. All rights reserved.',
            },
            {
              name: 'legalLinks',
              type: 'array',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'url', type: 'text', required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
}
