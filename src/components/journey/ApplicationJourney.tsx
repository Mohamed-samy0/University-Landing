'use client'

import Link from 'next/link'
import { ApplicationJourneyProps } from './ApplicationJourney.types'
import { ArrowUpRight } from 'lucide-react'

export const ApplicationJourney = ({ data }: ApplicationJourneyProps) => {
  if (!data) return null

  return (
    <section className="py-24 bg-[#fbf9f6] font-futura w-full">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        <div className="lg:col-span-4 lg:pr-8">
          <div className="sticky top-32 flex flex-col items-start">
            <span className="bg-[#273480] text-white text-[13px] font-bold tracking-widest px-4 py-2 mb-6 shadow-sm">
              {data.tag}
            </span>

            <h2 className="text-4xl lg:text-[52px] font-bold text-[#101828] leading-[1.1] mb-5">
              {data.title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
              {data.description}
            </p>

            <Link
              href={data.buttonLink || '#'}
              className="bg-[#e84925] text-white rounded-full pl-8 pr-4 py-2 w-fit font-bold hover:bg-[#d03d1c] transition-colors flex items-center gap-4 group shadow-md"
            >
              {data.buttonText}
              <span className="bg-white text-[#e84925] rounded-full p-2.5 transition-transform group-hover:translate-x-1">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-8 lg:pl-10">
          <div className="flex flex-col border-t border-gray-200 divide-y divide-gray-200">
            {data.steps?.map((step, index) => {
              return (
                <div
                  key={step.id || index}
                  className="py-5 grid grid-cols-1 md:grid-cols-[60px_250px_1fr] gap-6 md:gap-8 items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#273480] flex flex-shrink-0 items-center justify-center text-xl font-bold text-white shadow-sm">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-[22px] font-bold text-[#101828] leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-600 text-[15px] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
