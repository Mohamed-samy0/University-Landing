export interface FooterLink {
  label: string
  url: string
  id?: string
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube' | 'tiktok'
  url: string
  id?: string
}

export interface FooterMenu {
  title: string
  links: FooterLink[]
  id?: string
}

export interface FooterData {
  logo: {
    url: string
    alt?: string
  }
  description: string
  phone: string
  email: string
  address: string
  ctaButton: {
    label: string
    url: string
  }
  searchTitle: string
  socialLinks: SocialLink[]
  footerMenus: FooterMenu[]
  copyright: string
  legalLinks: FooterLink[]
  contactTitle?: string | null;
  searchButtonText?: string | null;
}

export interface FooterProps {
  data: FooterData
}
