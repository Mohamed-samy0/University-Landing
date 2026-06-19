// src/components/marquee/PartnerMarqueeSection.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { PartnerMarqueeProps } from './PartnerMarquee.types'

export const PartnerMarqueeSection = ({ data }: PartnerMarqueeProps) => {
  const topImage = data?.topRibbonImage?.url || '/placeholder.jpg'
  const middleImage = data?.middleRibbonImage?.url || '/placeholder.jpg'
  const bottomText = data?.bottomRibbonText || 'NEW PARTNERSHIPS SOON'

  return (
    <section className="relative w-full h-[280px] lg:h-[350px] overflow-hidden bg-[#fbf9f6] my-10 flex items-center justify-center">
      <div className="absolute z-10 w-[110%] -left-[5%] top-[15%] rotate-[-3deg] bg-[#273480] py-5 lg:py-7 shadow-lg">
        <Marquee speed={40} autoFill>
          <div className="mx-8 lg:mx-16 relative h-10 lg:h-14 w-56 lg:w-72">
            <Image
              src={topImage}
              alt="Top Ribbon Partner"
              fill
              className="object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </Marquee>
      </div>

      <div className="absolute z-20 w-[110%] -left-[5%] top-[35%] lg:top-[42%] rotate-[3deg] bg-[#348141] py-5 lg:py-7 shadow-2xl">
        <Marquee speed={35} direction="right" autoFill>
          <div className="mx-8 lg:mx-16 relative h-10 lg:h-14 w-56 lg:w-72">
            <Image
              src={middleImage}
              alt="Middle Ribbon Partner"
              fill
              className="object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </Marquee>
      </div>

      <div className="absolute z-30 w-[110%] -left-[5%] top-[65%] lg:top-[70%] rotate-[-4deg] bg-[#9E9E9E] py-5 lg:py-7 shadow-2xl">
        <Marquee speed={30} autoFill>
          <span className="mx-8 lg:mx-16 text-white text-3xl lg:text-5xl font-bold uppercase tracking-widest font-futura drop-shadow-md">
            {bottomText}
          </span>
          <span className="text-white opacity-50 text-3xl lg:text-5xl">★</span>
        </Marquee>
      </div>
    </section>
  )
}
