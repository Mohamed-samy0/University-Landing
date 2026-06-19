import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Hero } from '@/components/hero'
import { AccordionSection } from '@/components/accordion/Accordion'
import { PartnerMarqueeSection } from '@/components/marquee/PartnerMarqueeSection'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const heroData = await payload.findGlobal({
    slug: 'hero',
  })

  const accordionData = await payload.findGlobal({
    slug: 'accordion',
  })

  const partnerMarqueeData = await payload.findGlobal({
    slug: 'partnerMarquee',
  })

  return (
    <div className="flex flex-col w-full">
      <Hero data={heroData} />
      <AccordionSection data={accordionData} />
      <PartnerMarqueeSection data={partnerMarqueeData} />
    </div>
  )
}
