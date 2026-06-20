import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import './globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })

  try {
    const siteSettings = await payload.findGlobal({
      slug: 'site-settings',
    })

    const ogImageUrl =
      typeof siteSettings?.ogImage === 'object' && siteSettings.ogImage?.url
        ? siteSettings.ogImage.url
        : '/fallback.jpg'

    return {
      title: siteSettings?.metaTitle || 'The Knowledge Hub Universities',
      description: siteSettings?.metaDescription || 'Your Gateway To Global Education',
      openGraph: {
        title: siteSettings?.metaTitle || 'The Knowledge Hub Universities',
        description: siteSettings?.metaDescription || 'Your Gateway To Global Education',
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: siteSettings?.metaTitle || 'TKH Universities',
          },
        ],
      },
    }
  } catch (error) {
    return {
      title: 'The Knowledge Hub Universities',
      description: 'Your Gateway To Global Education',
    }
  }
}
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
