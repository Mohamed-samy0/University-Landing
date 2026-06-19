import { GlobalConfig } from 'payload'

export const SectionTitles: GlobalConfig = {
  slug: 'sectionTitles',
  admin: {
    group: 'Landing Page Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'coreMajorsTitle',
      type: 'text',
      label: 'Core Majors Section Title',
      defaultValue: 'Discover Your Path Across 5 Core Majors',
    },
    {
      name: 'events',
      type: 'group',
      label: 'Events Section Headers',
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'EVENTS' },
        { name: 'title', type: 'text', defaultValue: "Don't Miss Our Upcoming Events!" },
      ],
    },
    {
      name: 'testimonialsTitle',
      type: 'text',
      label: 'Testimonials Section Title',
      defaultValue: 'Success Career Journeys',
    },
    {
      name: 'admissionStepsTitle',
      type: 'text',
      label: 'Admission Steps Section Title',
      defaultValue: 'Your Journey Starts Here',
    },
    {
      name: 'newsTitle',
      type: 'text',
      label: 'News Section Title',
      defaultValue: 'Proud News',
    },
    {
      name: 'contactFormTitle',
      type: 'text',
      label: 'Contact Form Section Title',
      defaultValue: 'Get In Touch',
    },
  ],
}
