export interface EventMedia {
  url: string
  alt?: string
}

export interface EventItem {
  id: string
  title: string
  image: EventMedia
  date: string
  time: string
  location: string
  url?: string
  description?: string | null;
}

export interface EventsSectionData {
  tag?: string
  title?: string
}

export interface EventsSliderProps {
  sectionData?: EventsSectionData
  events: EventItem[]
}
