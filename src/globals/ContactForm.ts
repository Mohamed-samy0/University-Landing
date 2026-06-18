import { GlobalConfig } from 'payload'

export const ContactForm: GlobalConfig = {
  slug: 'contactForm',
  admin: {
    group: 'Landing Page Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Form Title',
      defaultValue: 'Get In Touch',
    },
    {
      name: 'fields',
      type: 'array',
      required: true,
      label: 'Form Fields',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Field Label',
        },
        {
          name: 'placeholder',
          type: 'text',
          required: true,
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
      defaultValue: 'Submit',
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
