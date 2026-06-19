export interface JourneyStep {
  id?: string
  title: string
  description: string
}

export interface ApplicationJourneyData {
  tag: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  steps: JourneyStep[]
}

export interface ApplicationJourneyProps {
  data: ApplicationJourneyData
}
