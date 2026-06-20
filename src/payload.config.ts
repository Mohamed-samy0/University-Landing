import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Programs } from './collections/Programs'
import { Events } from './collections/Events'
import { Testimonials } from './collections/Testimonials'
import { Partners } from './collections/Partners'
import { News } from './collections/News'
import { Hero } from './globals/Hero'
import { Header } from './globals/Header'
import { Accordion } from './globals/Accordion'
import { Marquee } from './globals/Marquee'
import { SectionTitles } from './globals/SectionTitles'
import { Footer } from './globals/Footer'
import { ContactForm } from './globals/ContactForm'
import { PartnerMarquee } from './globals/PartnerMarquee'
import { MajorsSection } from './globals/MajorsSection'
import { Majors } from './collections/Majors'
import { GraduateSection } from './globals/GraduateSection'
import { Graduates } from './collections/Graduates'
import { ApplicationJourneyBlock } from './globals/ApplicationJourney'
import { NewsSectionBlock } from './globals/NewsSection'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Programs, Events, Testimonials, Partners, News, Majors, Graduates],
  globals: [
    Hero,
    Header,
    Accordion,
    Marquee,
    SectionTitles,
    Footer,
    ContactForm,
    PartnerMarquee,
    MajorsSection,
    GraduateSection,
    ApplicationJourneyBlock,
    NewsSectionBlock,
    SiteSettings
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [],
})
