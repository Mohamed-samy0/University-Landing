import { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    group: 'University Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Event Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Event Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Event Image',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Event Date',
    },
    {
      name: 'time',
      type: 'text',
      required: true,
      label: 'Event Time',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Event Location',
    },
    {
      name: 'registrationUrl',
      type: 'text',
      label: 'Registration URL',
    },
  ],
}
