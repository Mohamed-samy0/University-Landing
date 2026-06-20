'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ChevronDown, ChevronRight } from 'lucide-react'
import { HeaderProps } from './Header.types'

export const Header = ({ data }: HeaderProps) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null)
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const handleOpenMenu = (index: number) => {
    setActiveMenuIndex(index)
    setActiveTabIndex(0)
  }

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenAccordion(null)
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const activeItem =
    activeMenuIndex !== null && data?.mainNavLinks ? data.mainNavLinks[activeMenuIndex] : null
  const activeTab = activeItem?.megaMenuTabs?.[activeTabIndex]

  return (
    <header className="absolute top-4 inset-x-8 lg:inset-x-12 z-50 font-futura text-brand-ink">
      <div
        className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-[2.5rem] shadow-sm relative z-20"
        onMouseLeave={() => setActiveMenuIndex(null)}
      >
        <div className="hidden lg:flex justify-between items-center px-10 py-2 border-b border-brand-ink/10 text-[13px] font-medium">
          <div className="flex items-center gap-3.5">
            {data?.topNavLinks?.map((link, index) => (
              <React.Fragment key={link.id || index}>
                <Link
                  href={link.url}
                  className="hover:text-brand-orange transition-colors font-semibold"
                >
                  {link.label}
                </Link>
                {index === 1 && <span className="text-brand-ink/20 font-light mx-0.5">|</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search
            </button>
            <Link href="/contact" className="hover:text-brand-orange transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center px-6 lg:px-10 py-3">
          <Link href="/" className="shrink-0" onClick={closeMobileMenu}>
            <Image
              src={data?.logo?.url || '/logo.png'}
              alt="Logo"
              width={240}
              height={48}
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
            {data?.mainNavLinks?.map((item, index) => {
              const isActive = activeMenuIndex === index
              const linkClasses = `flex items-center gap-1.5 text-[14px] xl:text-[15px] font-semibold transition-colors ${isActive ? 'text-brand-orange' : 'hover:text-brand-orange'}`

              return (
                <div
                  key={item.id || index}
                  className="relative py-2"
                  onMouseEnter={() => handleOpenMenu(index)}
                >
                  <Link href={item.url} className={linkClasses}>
                    {item.label}
                    {item.hasMegaMenu && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className={`mt-0.5 transition-transform ${isActive ? 'rotate-180' : ''}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </Link>
                </div>
              )
            })}
          </nav>

          <Link
            href={data?.ctaButton?.url || '/apply'}
            className="hidden lg:flex bg-brand-orange text-white px-5 py-2 rounded-full items-center gap-3 hover:opacity-90 transition-opacity font-medium text-[15px] shrink-0"
          >
            {data?.ctaButton?.label || 'Apply Now'}
            <span className="bg-white text-brand-orange rounded-full p-1.5 flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </Link>

          <button
            className="lg:hidden p-2 text-brand-ink"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>

        {activeItem?.hasMegaMenu &&
          activeItem.megaMenuTabs &&
          activeItem.megaMenuTabs.length > 0 && (
            <div className="absolute top-full left-0 right-0 pt-4 z-50 hidden lg:block">
              <div
                className="bg-[#ffffffce] border border-white/50 shadow-2xl rounded-[2rem] p-6 flex gap-8 cursor-default"
                style={{ transformOrigin: 'top center' }}
              >
                <div className="w-[35%] flex flex-col gap-3">
                  {activeItem.megaMenuTabs.map((tab, tabIdx) => (
                    <button
                      type="button"
                      key={tab.id || tabIdx}
                      onMouseEnter={() => setActiveTabIndex(tabIdx)}
                      onFocus={() => setActiveTabIndex(tabIdx)}
                      className={`w-full text-left p-5 rounded-[1.5rem] cursor-pointer transition-all duration-300 flex items-center justify-between group ${activeTabIndex === tabIdx ? 'bg-white shadow-sm' : 'hover:bg-white/40'}`}
                    >
                      <div className="flex flex-col gap-1.5">
                        {tab.tabLogo?.url ? (
                          <Image
                            src={tab.tabLogo.url}
                            alt={tab.tabTitle}
                            width={100}
                            height={32}
                            className="h-8 w-auto object-contain"
                          />
                        ) : (
                          <h3 className="font-bold text-[18px] text-brand-ink">{tab.tabTitle}</h3>
                        )}
                        {tab.tabSubtitle && (
                          <p className="text-[13px] text-gray-500 leading-tight max-w-[90%]">
                            {tab.tabSubtitle}
                          </p>
                        )}
                      </div>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`transition-transform ${activeTabIndex === tabIdx ? 'text-brand-ink translate-x-1' : 'text-gray-400 group-hover:translate-x-1'}`}
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  ))}
                </div>

                <div className="w-[25%] py-6 flex flex-col gap-5">
                  {activeTab?.subLinks?.map((subLink) => (
                    <Link
                      key={subLink.id || subLink.url}
                      href={subLink.url}
                      className="text-[16px] font-semibold text-brand-ink/80 hover:text-brand-orange transition-colors"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>

                <div className="w-[40%] relative overflow-hidden rounded-r-[1.5rem] clip-path-skewed bg-gray-100">
                  {activeTab?.featuredImage?.url && (
                    <Image
                      src={activeTab.featuredImage.url}
                      alt="Featured Graphic"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  )}
                </div>
              </div>
            </div>
          )}
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 bg-[#f3f3f3] z-[999] flex flex-col font-futura overflow-y-auto"
          >
            <div className="flex justify-between items-center px-6 py-6 shrink-0">
              <Link href="/" onClick={closeMobileMenu}>
                <Image
                  src={data?.logo?.url || '/logo.png'}
                  alt="Logo"
                  width={200}
                  height={48}
                  className="h-9 w-auto"
                />
              </Link>
              <button
                onClick={closeMobileMenu}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-ink"
              >
                <X size={24} strokeWidth={2.5} />
              </button>
            </div>

            <div className="px-6 mb-6 shrink-0">
              <div className="flex items-center bg-white rounded-full px-5 py-4 shadow-sm relative">
                <Search className="text-gray-400 absolute left-5" size={20} strokeWidth={2.5} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent outline-none pl-10 text-[16px] font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="px-6 pb-12 flex flex-col gap-3 flex-1">
              {data?.mainNavLinks?.map((item, index) => (
                <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm">
                  {/* Accordion Header */}
                  <button
                    onClick={() => (item.hasMegaMenu ? toggleAccordion(index) : null)}
                    className="flex justify-between items-center w-full p-5 text-left"
                  >
                    {item.hasMegaMenu ? (
                      <>
                        <span className="text-[17px] font-bold text-brand-ink">{item.label}</span>
                        <ChevronDown
                          size={20}
                          strokeWidth={2.5}
                          className={`text-brand-ink transition-transform duration-300 ${
                            openAccordion === index ? 'rotate-180' : ''
                          }`}
                        />
                      </>
                    ) : (
                      <Link
                        href={item.url}
                        onClick={closeMobileMenu}
                        className="text-[17px] font-bold text-brand-ink w-full"
                      >
                        {item.label}
                      </Link>
                    )}
                  </button>

                  <AnimatePresence>
                    {item.hasMegaMenu && openAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="px-5 pb-5"
                      >
                        <div className="flex flex-col gap-3">
                          {item.megaMenuTabs?.map((tab, tabIdx) => {
                            if (tab.tabLogo?.url) {
                              return (
                                <Link
                                  key={tabIdx}
                                  href={tab.subLinks?.[0]?.url || item.url}
                                  onClick={closeMobileMenu}
                                  className="flex justify-between items-center p-4 rounded-2xl bg-[#f6f6f6] hover:bg-gray-100 transition-colors"
                                >
                                  <div className="flex flex-col gap-1.5">
                                    <Image
                                      src={tab.tabLogo.url}
                                      width={90}
                                      height={40}
                                      alt={tab.tabTitle}
                                      className="h-8 w-auto object-contain object-left"
                                    />
                                    {tab.tabSubtitle && (
                                      <p className="text-[12px] text-gray-500 font-semibold">
                                        {tab.tabSubtitle}
                                      </p>
                                    )}
                                  </div>
                                  <ChevronRight
                                    size={20}
                                    className="text-gray-400 shrink-0"
                                    strokeWidth={2.5}
                                  />
                                </Link>
                              )
                            }

                            return (
                              <div key={tabIdx} className="flex flex-col gap-1 pt-2 pb-2">
                                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                                  {tab.tabTitle}
                                </p>
                                {tab.subLinks?.map((sub, sIdx) => (
                                  <Link
                                    key={sIdx}
                                    href={sub.url}
                                    onClick={closeMobileMenu}
                                    className="text-[15px] font-semibold text-brand-ink py-2 border-b border-gray-100 last:border-0 hover:text-brand-orange transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
