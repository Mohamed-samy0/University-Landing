import { GlobalConfig } from 'payload'

export const GraduateSection: GlobalConfig = {
  slug: 'graduateSection',
  admin: { group: 'University Content' },
  access: { read: () => true },
  fields: [
    { name: 'tag', type: 'text', defaultValue: 'CAREER SUCCESS' },
    { name: 'title', type: 'text', defaultValue: 'Success Career Journeys of Our Graduates' },
    {
      name: 'subtitle',
      type: 'textarea',
      defaultValue: 'Discover how our alumni are shaping the future across top global companies.',
    },
    { name: 'ctaText', type: 'text', defaultValue: 'Explore Our Career Services', required: true },
    { name: 'ctaLink', type: 'text', defaultValue: '/career-services', required: true },
  ],
}
