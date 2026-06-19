import { GlobalConfig } from 'payload'

export const MajorsSection: GlobalConfig = {
  slug: 'majorsSection',
  admin: { group: 'University Content' },
  access: { read: () => true },
  fields: [
    { name: 'tag', type: 'text', defaultValue: 'Choose Your Future', required: true },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Discover Your Path Across 5 Core Majors',
      required: true,
    },
  ],
}
