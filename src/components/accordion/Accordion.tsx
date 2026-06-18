'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AccordionProps, ButtonLinkProps } from './Accordion.types'

const ButtonLink = ({ href, children, className = '' }: ButtonLinkProps) => (
  <Link
    href={href}
    className={`bg-brand-orange text-white rounded-full px-7 py-3.5 w-fit flex items-center gap-3 font-semibold hover:bg-orange-700 transition-colors shadow-md ${className}`}
  >
    {children}
    <span className="bg-white text-brand-orange rounded-full p-1 flex items-center justify-center">
      <svg
        width="16"
        height="16"
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
)

export const AccordionSection = ({ data }: AccordionProps) => {
  if (!data?.items || data.items.length === 0) return null

  const [activeIndex, setActiveIndex] = useState<number>(0)
  const displayItem = activeIndex !== -1 ? data.items[activeIndex] : data.items[0]

  return (
    <section className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 py-24 font-futura overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col max-w-2xl pt-8 z-10">
          <div className="bg-brand-navy text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 w-fit mb-6">
            {data.tag || 'Experience TKH'}
          </div>

          <h2 className="text-brand-ink text-4xl lg:text-[52px] font-bold leading-[1.1] mb-12">
            {data.title || 'Experience a World-Class Campus'}
          </h2>

          <div className="flex flex-col gap-5 mb-14">
            {data.items.map((item, index) => {
              const isActive = activeIndex === index

              return (
                <div key={item.id || index} className="flex flex-col">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                    className={`text-left pl-5 border-l-[3px] transition-colors duration-300 focus:outline-none py-1 ${isActive ? 'border-brand-orange' : 'border-transparent'}`}
                  >
                    <h3
                      className={`text-[22px] font-bold transition-colors duration-300 ${isActive ? 'text-brand-ink' : 'text-gray-400 hover:text-gray-500'}`}
                    >
                      {item.title}
                    </h3>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pl-6 pt-3 pb-2 text-[16px] text-gray-500 leading-relaxed max-w-[95%]">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          <ButtonLink href={data.ctaButton?.url || '/about'}>
            {data.ctaButton?.label || 'Know More About TKH'}
          </ButtonLink>
        </div>

        <div className="relative w-full h-[500px] lg:h-[650px] flex justify-end mt-16 xl:mt-0 z-0">
          <div
            className="relative w-full lg:w-[95%] h-full bg-gray-100 overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, 86% 0, 100% 25%, 100% 100%, 14% 100%, 0 63%)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={displayItem.id || displayItem.title}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={displayItem.image?.url || '/placeholder.jpg'}
                  alt={displayItem.image?.alt || displayItem.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            {data.statBadge && (
              <motion.div
                key={`badge-${activeIndex}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
                className="absolute -bottom-10 -left-6 lg:left-0 z-20"
              >
                <div
                  className="bg-brand-navy text-white px-10 py-10 shadow-2xl min-w-[260px] flex flex-col justify-center"
                  style={{
                    clipPath: 'polygon(0 0, 83% 0, 100% 22%, 100% 100%, 12% 100%, 0 61%)',
                  }}
                >
                  <p className="text-[13px] font-medium text-white/80 tracking-widest mb-2 uppercase">
                    {data.statBadge.label || 'Campus Area'}
                  </p>
                  <p className="text-[52px] leading-none font-bold tracking-tight">
                    {data.statBadge.value || '50k m²'}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
