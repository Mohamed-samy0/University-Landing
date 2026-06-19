'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduateSliderProps } from './Graduates.types'

export const GraduateSlider = ({ sectionData, graduates }: GraduateSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!graduates || graduates.length === 0) return null
  const safeGraduates =
    graduates.length < 5 ? [...graduates, ...graduates, ...graduates].slice(0, 5) : graduates

  const next = () => setActiveIndex((prev) => (prev === safeGraduates.length - 1 ? 0 : prev + 1))
  const prev = () => setActiveIndex((prev) => (prev === 0 ? safeGraduates.length - 1 : prev - 1))

  const getCardPosition = (index: number) => {
    const offset = (index - activeIndex + safeGraduates.length) % safeGraduates.length
    switch (offset) {
      case 0:
        return 'center'
      case 1:
        return 'right'
      case 2:
        return 'rightBack'
      case safeGraduates.length - 1:
        return 'left'
      case safeGraduates.length - 2:
        return 'leftBack'
      default:
        return 'hidden'
    }
  }

  const variants = {
    center: { x: 0, rotate: 0, scale: 1, zIndex: 50, opacity: 1 },
    left: { x: -180, rotate: -8, scale: 0.85, zIndex: 30, opacity: 1 },
    leftBack: { x: -320, rotate: -12, scale: 0.7, zIndex: 10, opacity: 1 },
    right: { x: 180, rotate: 8, scale: 0.85, zIndex: 30, opacity: 1 },
    rightBack: { x: 320, rotate: 12, scale: 0.7, zIndex: 10, opacity: 1 },
    hidden: { x: 0, rotate: 0, scale: 0.5, zIndex: 0, opacity: 0 },
  }

  return (
    <section className="py-24 w-full bg-[#F4EFED] overflow-hidden font-futura">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-12 flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl">
          <span className="bg-[#273480] text-white text-[12px] font-bold uppercase tracking-widest px-5 py-2 w-fit mb-6">
            {sectionData?.tag || 'Build Your Career'}
          </span>
          <h2 className="text-4xl lg:text-[54px] font-bold text-[#101828] leading-[1.1] mb-6">
            {sectionData?.title || 'Success Career Journeys of Our Graduates'}
          </h2>
          {sectionData?.subtitle && (
            <p className="text-[#101828]/70 text-lg">{sectionData.subtitle}</p>
          )}
        </div>

        <div className="relative w-full max-w-[1300px] h-[600px] lg:h-[700px] flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 md:-left-8 z-50 w-14 h-14 rounded-full bg-white border-2 border-[#e84925] flex items-center justify-center text-[#e84925] hover:bg-[#e84925] hover:text-white transition-colors focus:outline-none shadow-md hidden md:flex group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:-right-8 z-50 w-14 h-14 rounded-full bg-white border-2 border-[#e84925] flex items-center justify-center text-[#e84925] hover:bg-[#e84925] hover:text-white transition-colors focus:outline-none shadow-md hidden md:flex group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <AnimatePresence initial={false}>
            {safeGraduates.map((graduate, index) => {
              const position = getCardPosition(index)
              const isMobileHidden = position !== 'center' ? 'hidden md:block' : ''

              return (
                <motion.div
                  key={`${graduate.id}-${index}`}
                  variants={variants}
                  initial={false}
                  animate={position}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  className={`absolute w-[340px] lg:w-[600px] h-[520px] lg:h-[620px] bg-[#1D2244] border-[8px] border-white shadow-2xl flex flex-col overflow-hidden cursor-pointer ${isMobileHidden}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative w-full h-[80%]">
                    <Image
                      src={graduate.image?.url || '/placeholder.jpg'}
                      alt={graduate.name}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

                    {graduate.universityLogo?.url && (
                      <div className="absolute bottom-1 left-1 w-32 h-24 lg:w-40 lg:h-28">
                        <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full">
                          <path
                            d="M30 70 C10 70 0 50 10 35 C5 15 25 0 50 5 C60 -5 90 -5 100 10 C120 0 150 5 155 25 C175 25 190 45 180 65 C195 80 185 105 160 105 C160 120 135 130 115 120 C95 135 60 130 50 115 C25 120 10 100 20 80 C10 78 15 70 30 70 Z"
                            fill="#101828"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                          <Image
                            src={graduate.universityLogo.url}
                            alt="University"
                            fill
                            className="object-contain p-5"
                          />
                        </div>
                      </div>
                    )}
                    <div className="absolute -top-0 -right-2 w-28 lg:w-36 drop-shadow-lg">
                      <svg viewBox="0 0 240 170" className="w-full h-auto">
                        <path
                          d="M60,0 L220,0 Q240,0 240,20 L240,140 L140,140 L110,170 L90,140 L40,140 L40,90 L65,70 L40,50 L40,20 Q40,0 60,0 Z"
                          fill="#101828"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center -translate-y-2">
                        <span className="text-white font-extrabold italic text-lg lg:text-2xl leading-none">
                          {graduate.graduationYear}
                        </span>
                        <span className="text-white font-extrabold italic text-lg lg:text-2xl leading-none">
                          Grad
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative w-full h-[50%] p-6 lg:p-8 flex flex-col justify-between">
                    <div className="mt-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-15 h-15 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={graduate.avatar?.url || '/placeholder-avatar.jpg'}
                            alt={graduate.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="text-white text-[26px] lg:text-[30px] font-bold leading-none mb-2">
                            {graduate.name}
                          </h3>

                          <p className="text-gray-300 font-semibold text-[13px] lg:text-[15px] tracking-wide ">
                            {graduate.jobTitle}
                            <span className="text-white/50"> at </span>
                            {graduate.company}
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <svg
                          className="absolute -top-2 -left-2 w-7 h-7 text-white/10 transform -scale-x-100"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                        </svg>
                        <p className="text-white/80 text-sm lg:text-base leading-relaxed line-clamp-4 italic pl-5">
                          "{graduate.testimonial}"
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-[#e84925] flex items-center justify-center text-[#e84925]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-[#e84925] flex items-center justify-center text-[#e84925]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href={sectionData?.ctaLink || '/career-services'}
            className="bg-[#e84925] text-white rounded-full pl-8 pr-2 py-2 w-fit font-bold hover:bg-[#d03d1c] transition-colors flex items-center gap-4 group shadow-xl"
          >
            {sectionData?.ctaText || 'Explore Our Career Services'}
            <span className="bg-white text-[#e84925] rounded-full p-2.5 transition-transform group-hover:translate-x-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
