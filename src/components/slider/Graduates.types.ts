export interface MediaObject {
  url: string
  alt?: string
}

export interface GraduateStory {
  id: string
  name: string
  graduationYear: number
  jobTitle: string
  company: string
  testimonial: string
  image: MediaObject
  avatar: MediaObject
  universityLogo?: MediaObject
}

export interface GraduateSectionData {
  tag?: string
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

export interface GraduateSliderProps {
  sectionData?: GraduateSectionData
  graduates: GraduateStory[]
}
