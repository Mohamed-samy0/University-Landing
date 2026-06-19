import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Hero } from '@/components/hero'
import { AccordionSection } from '@/components/accordion/Accordion'
import { PartnerMarqueeSection } from '@/components/marquee/PartnerMarqueeSection'
import { CoreMajorsSlider } from '@/components/slider/CoreMajorsSlider'
import { EventsSlider } from '@/components/slider/EventsSlider'
import { GraduateSlider } from '@/components/slider/GraduateSlider'
import { ApplicationJourney } from '@/components/journey/ApplicationJourney'

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
  const sectionTitles = await payload.findGlobal({
    slug: 'sectionTitles',
  })

  const eventsResponse = await payload.find({
    collection: 'events',
    limit: 6,
    sort: 'date',
  })

  const graduateSectionData = await payload.findGlobal({
    slug: 'graduateSection',
  })

  const graduatesResponse = await payload.find({
    collection: 'graduates',
    limit: 10,
    sort: 'order',
  })

  const journeyData = await payload.findGlobal({
    slug: 'applicationJourney',
  })

  return (
    <div className="flex flex-col w-full">
      <Hero data={heroData} />
      <AccordionSection data={accordionData} />
      <PartnerMarqueeSection data={partnerMarqueeData} />
      <CoreMajorsSlider sectionData={majorsSectionData} majors={majorsResponse.docs} />
      <EventsSlider sectionData={sectionTitles.events} events={eventsResponse.docs} />
      <GraduateSlider sectionData={graduateSectionData} graduates={graduatesResponse.docs} />
      {journeyData && <ApplicationJourney data={journeyData} />}
    </div>
  )
}
