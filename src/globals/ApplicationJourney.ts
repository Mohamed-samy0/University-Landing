import { GlobalConfig } from 'payload'
import { ApplicationJourneyBlock } from './ApplicationJourneyBlock'

export const ApplicationJourney: GlobalConfig = {
  slug: 'application-journey',
  label: 'Application Journey',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [ApplicationJourneyBlock],
    },
  ],
}
