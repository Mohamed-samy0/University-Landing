import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import './globals.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config: configPromise })

  const headerData = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <html lang="en">
      <body>
        <Header data={headerData} />
        <main>{children}</main>
      </body>
    </html>
  )
}
