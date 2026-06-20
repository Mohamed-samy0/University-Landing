import { GlobalConfig } from 'payload'
import { NewsSectionBlock } from './NewsSectionBlock'

export const NewsSection: GlobalConfig = {
  slug: 'news-section-global',
  label: 'News Section',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [NewsSectionBlock],
    },
  ],
}
