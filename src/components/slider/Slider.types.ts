export interface MajorMedia {
  url: string
  alt?: string
}

export interface Major {
  id: string
  title: string
  programsCount: number
  image: MajorMedia
  order?: number
}

export interface MajorsSectionData {
  tag: string
  title: string
}

export interface CoreMajorsSliderProps {
  sectionData: MajorsSectionData
  majors: Major[]
}
