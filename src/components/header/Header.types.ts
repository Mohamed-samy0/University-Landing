export interface NavigationLink {
  id?: string
  label: string
  url: string
}

export interface CTAButton {
  label: string
  url: string
}

export interface MegaMenuTab {
  id?: string
  tabTitle: string
  tabSubtitle?: string
  tabLogo?: any 
  featuredImage?: any
  subLinks?: NavigationLink[] | null
}

export interface MainNavLink extends NavigationLink {
  hasMegaMenu?: boolean
  megaMenuTabs?: MegaMenuTab[] | null
}

export interface HeaderData {
  logo?: any
  topNavLinks?: NavigationLink[] | null
  mainNavLinks?: MainNavLink[] | null
  ctaButton?: CTAButton
}

export interface HeaderProps {
  data?: HeaderData
}
