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
  subLinks?: NavigationLink[]
}

export interface MainNavLink extends NavigationLink {
  hasMegaMenu?: boolean
  megaMenuTabs?: MegaMenuTab[]
}

export interface HeaderData {
  logo?: any
  topNavLinks?: NavigationLink[]
  mainNavLinks?: MainNavLink[]
  ctaButton?: CTAButton
}

export interface HeaderProps {
  data?: HeaderData
}
