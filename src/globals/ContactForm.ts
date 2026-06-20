import { revalidateGlobal } from '@/lib/hooks/revalidate'
import { GlobalConfig } from 'payload'

export const ContactForm: GlobalConfig = {
  slug: 'contactForm',
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
    {
      name: 'tag',
      type: 'text',
      label: 'Tag (e.g., Take Action)',
      defaultValue: 'Take Action',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Form Title',
      defaultValue: 'Get In Touch!',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Have a question on mind? Leave us a message and we will contact you shortly.',
      required: true,
    },
    {
      name: 'fields',
      type: 'array',
      required: true,
      label: 'Form Fields (Inputs)',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Field Label (e.g., Your Email)',
        },
        {
          name: 'placeholder',
          type: 'text',
          required: false,
          label: 'Placeholder Text',
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          label: 'Field Type',
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'tel' },
          ],
        },
        {
          name: 'required',
          type: 'checkbox',
          label: 'Required Field',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'submitButtonText',
      type: 'text',
      label: 'Submit Button Text',
      defaultValue: 'Send Message',
    },
    {
      name: 'successMessage',
      type: 'text',
      label: 'Success Message',
      defaultValue: 'Thank you! We will contact you soon.',
    },
    {
      name: 'errorMessage',
      type: 'text',
      label: 'Error Message',
      defaultValue: 'Something went wrong. Please try again.',
    },
    {
      name: 'submitEndpoint',
      type: 'text',
      label: 'Form Submit Endpoint',
      defaultValue: '/api/contact',
      admin: {
        description: 'API endpoint for form submission',
      },
    },
  ],
}
