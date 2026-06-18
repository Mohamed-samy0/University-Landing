import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Hero } from '@/components/hero'
import { AccordionSection } from '@/components/accordion/Accordion'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const heroData = await payload.findGlobal({
    slug: 'hero',
  })

  const accordionData = await payload.findGlobal({
    slug: 'accordion',
  })

  return (
    <div className="flex flex-col w-full">
      <Hero data={heroData} />
      <AccordionSection data={accordionData} />
      {/* <MarqueeSection /> */}
    </div>
  )
}
