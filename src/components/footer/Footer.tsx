'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FooterProps, FooterData, SocialLink, FooterMenu, FooterLink } from './Footer.types'
import { Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
} from 'react-icons/fa6'

const FooterLogo = ({ logo, description }: { logo: FooterData['logo']; description: string }) => (
  <div className="flex flex-col items-start lg:pr-8">
    {logo?.url && (
      <Image
        src={logo.url}
        alt={logo.alt || 'TKH Logo'}
        width={260}
        height={95}
        className="mb-4 object-contain"
      />
    )}
    <p className="text-[rgba(255,255,255,0.8)] text-[14px] leading-[1.6] max-w-[320px]">
      {description}
    </p>
  </div>
)

const FooterContact = ({ data }: { data: FooterData }) => (
  <div className="flex flex-col items-start">
    <h3 className="text-amber-50 text-[17px] font-bold tracking-[0.15em] mb-4">
      {data.contactTitle || 'Contact Us'}
    </h3>

    <div className="flex items-center gap-3 mb-3">
      <Phone size={18} className="text-brand-orange shrink-0" />
      <p className="text-[rgba(255,255,255,0.8)] text-[15px] tracking-tight">{data.phone}</p>
    </div>

    <div className="flex items-start gap-3 mb-3">
      <MapPin size={18} className="text-brand-orange mt-1 shrink-0" />
      <p className="text-[rgba(255,255,255,0.8)] text-[15px] leading-relaxed max-w-[250px] whitespace-pre-wrap">
        {data.address}
      </p>
    </div>

    <div className="flex items-start gap-3 mb-5">
      <Mail size={18} className="text-brand-orange mt-1 shrink-0" />
      <a
        href={`mailto:${data.email}`}
        className="text-[rgba(255,255,255,0.8)] text-[15px] hover:text-white transition-colors"
      >
        {data.email}
      </a>
    </div>

    {data.ctaButton?.url && (
      <Link
        href={data.ctaButton.url}
        className="bg-brand-orange text-white text-[15px] font-bold pl-6 pr-1.5 py-1.5 rounded-full hover:bg-orange-700 transition-colors shadow-md mt-1 flex items-center gap-4 w-fit"
      >
        {data.ctaButton.label}
        <span className="bg-white text-brand-orange rounded-full p-1.5 flex items-center justify-center">
          <ArrowUpRight size={18} strokeWidth={3} />
        </span>
      </Link>
    )}
  </div>
)

const FooterSearch = ({ data }: { data: FooterData }) => (
  <div className="mb-6 w-full">
    <h3 className="text-white text-[17px] font-semibold mb-3">{data.searchTitle}</h3>
    <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[480px]">
      <input
        type="text"
        placeholder="Search for program, Fees, University.."
        className="flex-1 w-full h-[44px] bg-white rounded-full pl-6 pr-6 text-brand-ink focus:outline-none placeholder:text-gray-400 font-medium text-[15px]"
      />
      <button
        type="submit"
        className="h-[44px] px-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold hover:bg-orange-700 transition-colors shrink-0 text-[15px]"
      >
        {data.searchButtonText || 'Search'}
      </button>
    </form>
  </div>
)

const FooterSocial = ({ links }: { links: SocialLink[] }) => {
  const getIcon = (platform: string) => {
    const iconSize = 16
    switch (platform) {
      case 'facebook':
        return <FaFacebookF size={iconSize} />
      case 'instagram':
        return <FaInstagram size={iconSize} />
      case 'twitter':
        return <FaXTwitter size={iconSize} />
      case 'linkedin':
        return <FaLinkedinIn size={iconSize} />
      case 'youtube':
        return <FaYoutube size={iconSize} />
      case 'tiktok':
        return <FaTiktok size={iconSize} />
      default:
        return <FaFacebookF size={iconSize} />
    }
  }

  return (
    <div className="flex flex-col items-start mt-0">
      <div className="flex flex-wrap gap-3">
        {links?.map((link) => (
          <a
            key={link.id || link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            {getIcon(link.platform)}
          </a>
        ))}
      </div>
    </div>
  )
}

const FooterMenus = ({ menus }: { menus: FooterMenu[] }) => {
  if (!menus || menus.length === 0) return null

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] gap-x-8 gap-y-6 w-full">
      {menus.map((menu, index) => {
        const isLastItem = index === menus.length - 1

        return (
          <div
            key={menu.id || index}
            className={`flex flex-col ${
              isLastItem ? 'lg:border-l lg:border-white/10 lg:pl-12' : ''
            }`}
          >
            <h4
              className={`mb-4 ${
                isLastItem
                  ? 'text-white/80 text-[15px] font-semibold tracking-wide'
                  : 'text-white text-[18px] font-bold'
              }`}
            >
              {menu.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {menu.links?.map((link) => (
                <li key={link.id || link.label}>
                  <Link
                    href={link.url}
                    className="text-[rgba(255,255,255,0.7)] text-[14px] font-normal hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

const FooterBottom = ({
  copyright,
  legalLinks,
}: {
  copyright: string
  legalLinks: FooterLink[]
}) => (
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/50 tracking-wide">
    <p>{copyright}</p>
    <div className="flex flex-wrap items-center gap-3">
      {legalLinks?.map((link, index) => (
        <React.Fragment key={link.id || index}>
          <Link href={link.url} className="hover:text-white transition-colors">
            {link.label}
          </Link>
          {index < legalLinks.length - 1 && <span>|</span>}
        </React.Fragment>
      ))}
    </div>
  </div>
)

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null

  return (
    <footer
      className="w-full font-futura overflow-hidden text-white mt-12"
      style={{
        background: 'radial-gradient(circle at center, #14275e 0%, #08132f 45%, #050913 100%)',
      }}
    >
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 pt-12 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-8">
          <div className="lg:col-span-4">
            <FooterLogo logo={data.logo} description={data.description} />
          </div>

          <div className="lg:col-span-3 lg:pl-4">
            <FooterContact data={data} />
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <FooterSearch data={data} />
            <FooterSocial links={data.socialLinks} />
          </div>
        </div>

        <div className="w-full h-px bg-white/10" />

        <div className="py-8">
          <FooterMenus menus={data.footerMenus} />
        </div>

        <div className="w-full h-px bg-white/10" />

        <div className="pt-5">
          <FooterBottom copyright={data.copyright} legalLinks={data.legalLinks} />
        </div>
      </div>
    </footer>
  )
}
