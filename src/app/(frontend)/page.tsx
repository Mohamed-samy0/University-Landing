import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Hero } from '@/components/hero'
import { AccordionSection } from '@/components/accordion/Accordion'
import { PartnerMarqueeSection } from '@/components/marquee/PartnerMarqueeSection'
import { CoreMajorsSlider } from '@/components/slider/CoreMajorsSlider'

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

  const majorsSectionData = await payload.findGlobal({
    slug: 'majorsSection',
  })

  const majorsResponse = await payload.find({
    collection: 'majors',
    limit: 10,
    sort: 'order',
  })

  return (
    <div className="flex flex-col w-full">
      <Hero data={heroData} />
      <AccordionSection data={accordionData} />
      <PartnerMarqueeSection data={partnerMarqueeData} />
      <CoreMajorsSlider sectionData={majorsSectionData} majors={majorsResponse.docs} />
    </div>
  )
}
