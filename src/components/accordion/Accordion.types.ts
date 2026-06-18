export interface AccordionTab {
  id: string 
  title: string
  description: string
  image: {
    url: string
    alt?: string
  }
}

export interface AccordionProps {
  data: {
    tag?: string
    title?: string
    items: AccordionTab[]
    statBadge?: {
      label?: string
      value?: string
    }
    ctaButton?: {
      label?: string
      url?: string
    }
  }
}

export interface ButtonLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}
