'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { NewsSectionProps } from './News.types'
import { NewsHeader } from './NewsHeader'
import { NewsCard } from './NewsCard'
import { CarouselButtons } from './CarouselButtons'
import { ArrowUpRight } from 'lucide-react'

export const NewsSection = ({ data }: NewsSectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  if (!data || !data.featuredNews?.length) return null

  return (
    <section className="py-24 bg-[#fbf9f6] w-full font-futura overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <NewsHeader tag={data.tag} title={data.title} description={data.description} />

        <div className="overflow-hidden mt-10" ref={emblaRef}>
          <div className="flex -ml-6 pb-8">
            {data.featuredNews.map((newsItem) => (
              <div
                key={newsItem.id}
                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0 pl-6"
              >
                <NewsCard news={newsItem} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-8 gap-8">
          <CarouselButtons scrollPrev={scrollPrev} scrollNext={scrollNext} />

          <Link
            href={data.buttonLink}
            className="bg-[#e84925] text-white rounded-full pl-8 pr-2 py-2 w-fit font-bold hover:bg-[#d03d1c] transition-colors flex items-center gap-4 group shadow-md"
          >
            {data.buttonText}
            <span className="bg-white text-[#e84925] rounded-full p-2.5 transition-transform group-hover:translate-x-1">
              <ArrowUpRight size={20} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
