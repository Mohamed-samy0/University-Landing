// src/components/marquee/PartnerMarquee.types.ts

export interface MarqueeMedia {
  url: string
  alt?: string
}

export interface PartnerMarqueeData {
  topRibbonImage?: MarqueeMedia | null
  middleRibbonImage?: MarqueeMedia | null
  bottomRibbonText?: string | null
}

export interface PartnerMarqueeProps {
  data?: PartnerMarqueeData | null
}
