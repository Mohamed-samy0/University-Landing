import { GlobalConfig } from 'payload'

export const Marquee: GlobalConfig = {
  slug: 'marquee',
  admin: {
    group: 'Landing Page Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'ribbons',
      type: 'array',
      required: true,
      label: 'Marquee Ribbons',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Ribbon Text',
        },
        {
          name: 'direction',
          type: 'select',
          required: true,
          label: 'Scroll Direction',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#273480',
          admin: {
            description: 'Hex color code (e.g., #273480)',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          defaultValue: '#ffffff',
          admin: {
            description: 'Hex color code (e.g., #ffffff)',
          },
        },
        {
          name: 'rotation',
          type: 'number',
          label: 'Rotation Angle (degrees)',
          defaultValue: -5,
          admin: {
            description: 'Diagonal angle for ribbon (e.g., -5 for slight tilt)',
          },
        },
      ],
    },
  ],
}
