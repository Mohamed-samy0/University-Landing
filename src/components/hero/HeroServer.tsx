import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = ({ data }: { data: any }) => {
  const bgType = data?.backgroundType || 'image'
  const bgImage = typeof data?.backgroundImage === 'object' ? data.backgroundImage : null
  const bgVideo = typeof data?.backgroundVideo === 'object' ? data.backgroundVideo : null

  const primaryBtnText = data?.primaryButtonText || 'Explore Programs'
  const primaryBtnUrl = data?.primaryButtonUrl || '/explore'
  const secondaryBtnText = data?.secondaryButtonText || 'Start a Virtual Campus Tour'
  const secondaryBtnUrl = data?.secondaryButtonUrl || '/tour'

  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-end pb-24 lg:pb-32 font-futura">
      <div className="absolute inset-0 z-0 bg-[#0c182b]">
        {bgType === 'video' && bgVideo?.url ? (
          <video autoPlay loop muted playsInline className="object-cover w-full h-full opacity-90">
            <source src={bgVideo.url} type={bgVideo.mimeType || 'video/mp4'} />
          </video>
        ) : (
          <Image
            src={bgImage?.url || '/fallback.jpg'}
            alt={bgImage?.alt || 'Campus Background'}
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/95 via-brand-ink/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Headline */}
          <div className="lg:col-span-7">
            <h1 className="text-white text-5xl lg:text-[72px] font-bold leading-[1.05] tracking-tight">
              {data?.headline || 'Your Gateway To Global Education'}
            </h1>
          </div>

          {/* Subheadline & Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-8 pb-2">
            <p className="text-white/90 text-lg lg:text-[20px] leading-relaxed">
              {data?.subheadline ||
                'Earn a globally recognized degree from top-ranked partnered universities on our state-of-the-art campus located in Egypt.'}
            </p>

            {/* Dynamic Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryBtnUrl}
                className="bg-white text-brand-orange px-6 py-3.5 rounded-full font-medium flex items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                {primaryBtnText}
                <span className="bg-brand-orange text-white rounded-full p-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <Link
                href={secondaryBtnUrl}
                className="border border-white text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                {secondaryBtnText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
