'use client'

import React, { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { EventsSliderProps } from './Events.types'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

export const EventsSlider = ({ sectionData, events }: EventsSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  if (!events || events.length === 0) return null

  return (
    <section className="py-24 px-6 lg:px-12 w-full max-w-[1800px] mx-auto font-futura">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="bg-[#273480] text-white text-[12px] font-bold uppercase tracking-widest px-5 py-2 w-fit mb-6">
          {sectionData?.tag || 'EVENTS'}
        </span>
        <h2 className="text-4xl lg:text-[50px] font-bold text-[#101828] leading-tight max-w-xl">
          {sectionData?.title || "Don't Miss Our Upcoming Events!"}
        </h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6 pb-6">
          {events.map((event) => {
            const dateObj = new Date(event.date)
            const day = dateObj.toLocaleDateString('en-US', { day: '2-digit' })
            const month = dateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
            const year = dateObj.getFullYear()

            return (
              <div
                key={event.id}
                className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_50%] min-w-0 pl-6"
              >
                <div
                  className="group relative w-full h-[500px] lg:h-[500px] cursor-pointer transition-transform duration-300 hover:-translate-y-2 overflow-hidden"
                  style={{
                    clipPath: 'polygon(12% 0, 100% 0, 100% 74%, 89% 99%, 0 100%, 1% 30%)',
                    backgroundColor: '#101828',
                  }}
                >
                  <Image
                    src={event.image?.url || '/placeholder.jpg'}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                  <div
                    className="absolute top-0 right-8 bg-[#e84925] text-white flex flex-col items-center justify-start pt-6 pb-4 w-[85px] shadow-lg z-20 pointer-events-none"
                    style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 90%, 0 100%, 0 0)' }}
                  >
                    <span className="text-[34px] font-bold leading-none mb-1">{day}</span>
                    <span className="text-[14px] font-bold uppercase tracking-widest">{month}</span>
                    <span className="text-[12px] font-semibold opacity-90 mt-1">{year}</span>
                  </div>

                  <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start text-white z-10 pointer-events-none">
                    <h3 className="text-[28px] lg:text-[34px] font-bold leading-tight mb-3">
                      {event.title}
                    </h3>
                    <p className="text-white/80 text-base line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-8 border-t border-gray-200 pt-10">
        <div className="flex items-center gap-5">
          <button
            onClick={scrollPrev}
            className="w-14 h-14 rounded-full bg-white border-[1.5px] border-gray-200 shadow-sm flex items-center justify-center text-[#101828] hover:text-[#e84925] hover:border-[#e84925] transition-all focus:outline-none group"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="transition-transform group-hover:-translate-x-1" />
          </button>
          <button
            onClick={scrollNext}
            className="w-14 h-14 rounded-full bg-[#e84925] border-[1.5px] border-[#e84925] shadow-md flex items-center justify-center text-white hover:bg-[#d03d1c] hover:border-[#d03d1c] transition-all focus:outline-none group"
            aria-label="Next Slide"
          >
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <Link
          href="/events"
          className="bg-[#e84925] text-white rounded-full pl-8 pr-2 py-2 w-fit font-bold  transition-colors flex items-center gap-4 group shadow-md"
        >
          See All Events
          <span className="bg-[#e84925] text-white rounded-full p-2.5 transition-transform group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#e84925]">
            <ArrowUpRight  size={20}/>
          </span>
        </Link>
      </div>
    </section>
  )
}
