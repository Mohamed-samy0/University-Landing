import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  admin: {
    group: 'Landing Page Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Footer Logo',
    },
    {
      name: 'linkColumns',
      type: 'array',
      required: true,
      label: 'Link Columns',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Column Title',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              label: 'Link Text',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'Link URL',
            },
          ],
        },
      ],
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email Address',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Physical Address',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          label: 'Social Platform',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'YouTube', value: 'youtube' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'Profile URL',
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: '© 2025 University. All rights reserved.',
    },
  ],
}
