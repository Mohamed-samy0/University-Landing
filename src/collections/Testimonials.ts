import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    group: 'University Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Graduate Name',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Graduate Photo',
    },
    {
      name: 'testimonial',
      type: 'textarea',
      required: true,
      label: 'Testimonial Text',
    },
    {
      name: 'jobTitle',
      type: 'text',
      required: true,
      label: 'Job Title',
    },
    {
      name: 'company',
      type: 'text',
      required: true,
      label: 'Company Name',
    },
    {
      name: 'graduationYear',
      type: 'number',
      label: 'Graduation Year',
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Display Order',
      admin: {
        description: 'Order in which testimonial appears in coverflow (lower numbers first)',
      },
    },
  ],
}
