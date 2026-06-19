'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { CoreMajorsSliderProps } from './Slider.types'

export const CoreMajorsSlider = ({ sectionData, majors }: CoreMajorsSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: true,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (!majors || majors.length === 0) return null

  return (
    <section className="py-24 px-6 lg:px-12 w-full max-w-[1800px] mx-auto font-futura">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="bg-brand-navy text-white text-[12px] font-bold uppercase tracking-widest px-5 py-2 w-fit mb-6">
          {sectionData?.tag || 'Choose Your Future'}
        </span>
        <h2 className="text-4xl lg:text-[52px] font-bold text-brand-ink leading-tight max-w-3xl">
          {sectionData?.title || 'Discover Your Path Across 5 Core Majors'}
        </h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {majors
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((major) => (
              <div
                key={major.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-6 pb-6 pt-2"
              >
                <div
                  className="group relative w-full h-[400px] lg:h-[480px] cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                  style={{
                    clipPath: 'polygon(0 0, 90% 0, 100% 24%, 100% 100%, 10% 100%, 0 72%)',
                    backgroundColor: '#101828',
                  }}
                >
                  <Image
                    src={major.image?.url || '/placeholder.jpg'}
                    alt={major.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

                  <div className="absolute bottom-10 left-12 right-10 flex flex-col items-start text-white z-10 pointer-events-none">
                    <h4 className="text-2xl lg:text-[40px] font-bold mb-1 uppercase tracking-wide">
                      {major.title}
                    </h4>
                    <p className="text-white/70 font-semibold uppercase tracking-widest text-sm lg:text-[15px] ml-1">
                      {String(major.programsCount).padStart(2, '0')} Programs
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 mt-10">
        <button
          onClick={scrollPrev}
          className="w-14 h-14 rounded-full bg-white border-[1.5px] border-gray-200 shadow-sm flex items-center justify-center text-brand-ink hover:text-brand-orange hover:border-brand-orange transition-all focus:outline-none group"
          aria-label="Previous Slide"
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
          onClick={scrollNext}
          className="w-14 h-14 rounded-full bg-brand-orange border-[1.5px] border-brand-orange shadow-md flex items-center justify-center text-white hover:bg-orange-700 hover:border-orange-700 transition-all focus:outline-none group"
          aria-label="Next Slide"
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
      </div>
    </section>
  )
}
