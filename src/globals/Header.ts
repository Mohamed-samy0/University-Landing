import { revalidateGlobal } from '@/lib/hooks/revalidate'
import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  hooks: {
    afterChange: [revalidateGlobal],
  },
  admin: {
    group: 'Landing Page Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'logo', type: 'upload', relationTo: 'media', required: true, label: 'Logo Image' },
    {
      name: 'topNavLinks',
      type: 'array',
      label: 'Top Navigation Links',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'mainNavLinks',
      type: 'array',
      label: 'Main Navigation Links',
      fields: [
        { name: 'label', type: 'text', required: true, label: 'Link Text (e.g. Universities)' },
        { name: 'url', type: 'text', required: true, label: 'Link URL' },
        {
          name: 'hasMegaMenu',
          type: 'checkbox',
          label: 'Enable Mega Menu for this link?',
          defaultValue: false,
        },
        {
          name: 'megaMenuTabs',
          type: 'array',
          label: 'Mega Menu Tabs',
          admin: { condition: (_, siblingData) => siblingData.hasMegaMenu },
          fields: [
            { name: 'tabTitle', type: 'text', label: 'Tab Title (e.g. Undergraduates)' },
            {
              name: 'tabLogo',
              type: 'upload',
              relationTo: 'media',
              label: 'OR Tab Logo (e.g. NOVA logo)',
            },
            { name: 'tabSubtitle', type: 'textarea', label: 'Tab Subtitle/Description' },
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Side Image',
            },
            {
              name: 'subLinks',
              type: 'array',
              label: 'Sub-links (Middle Column)',
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
      name: 'ctaButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', required: true, defaultValue: 'Apply Now' },
        { name: 'url', type: 'text', required: true, defaultValue: '/apply' },
      ],
    },
  ],
}
