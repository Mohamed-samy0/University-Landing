import { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
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
      label: 'News Title',
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      label: 'News Summary',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'News Image',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Full Article Content',
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      label: 'Publication Date',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author Name',
    },
    {
      name: 'category',
      type: 'select',
      label: 'News Category',
      options: [
        { label: 'Academics', value: 'Academics' },
        { label: 'Campus Life', value: 'Campus Life' },
        { label: 'Research', value: 'Research' },
        { label: 'Athletics', value: 'Athletics' },
        { label: 'Community', value: 'Community' },
      ],
    },
  ],
}
