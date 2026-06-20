import { revalidateCollection } from '@/lib/hooks/revalidate'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  hooks: {
    afterChange: [revalidateCollection],
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
