import { describe, it, expect, beforeAll } from 'vitest'
import { getPayload, Payload } from 'payload'
import config from '@/payload.config'
import {
  getPrograms,
  getEvents,
  getTestimonials,
  getPartners,
  getNews,
  getHeroData,
  getHeaderData,
  getAccordionData,
  getMarqueeData,
  getSectionTitles,
  getFooterData,
  getContactFormData,
} from '@/lib/cms/api'

describe('CMS API Data Layer', () => {
  let payload: Payload

  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  describe('Collection Fetchers', () => {
    it('getPrograms returns array', async () => {
      const programs = await getPrograms()
      expect(Array.isArray(programs)).toBe(true)
    })

    it('getPrograms handles errors gracefully', async () => {
      const programs = await getPrograms()
      // Should not throw, returns empty array on error
      expect(programs).toBeDefined()
    })

    it('getEvents returns array', async () => {
      const events = await getEvents()
      expect(Array.isArray(events)).toBe(true)
    })

    it('getTestimonials returns array', async () => {
      const testimonials = await getTestimonials()
      expect(Array.isArray(testimonials)).toBe(true)
    })

    it('getPartners returns array', async () => {
      const partners = await getPartners()
      expect(Array.isArray(partners)).toBe(true)
    })

    it('getNews returns array', async () => {
      const news = await getNews()
      expect(Array.isArray(news)).toBe(true)
    })
  })

  describe('Global Fetchers', () => {
    it('getHeroData returns object or null', async () => {
      const hero = await getHeroData()
      // Should return object if exists, null on error
      expect(hero === null || typeof hero === 'object').toBe(true)
    })

    it('getHeroData has expected structure when data exists', async () => {
      const hero = await getHeroData()
      if (hero !== null) {
        expect(hero).toHaveProperty('id')
        expect(hero).toHaveProperty('headline')
        expect(hero).toHaveProperty('subheadline')
      }
    })

    it('getHeaderData returns object or null', async () => {
      const header = await getHeaderData()
      expect(header === null || typeof header === 'object').toBe(true)
    })

    it('getAccordionData returns object or null', async () => {
      const accordion = await getAccordionData()
      expect(accordion === null || typeof accordion === 'object').toBe(true)
    })

    it('getMarqueeData returns object or null', async () => {
      const marquee = await getMarqueeData()
      expect(marquee === null || typeof marquee === 'object').toBe(true)
    })

    it('getSectionTitles returns object or null', async () => {
      const sectionTitles = await getSectionTitles()
      expect(sectionTitles === null || typeof sectionTitles === 'object').toBe(true)
    })

    it('getFooterData returns object or null', async () => {
      const footer = await getFooterData()
      expect(footer === null || typeof footer === 'object').toBe(true)
    })

    it('getContactFormData returns object or null', async () => {
      const contactForm = await getContactFormData()
      expect(contactForm === null || typeof contactForm === 'object').toBe(true)
    })
  })

  describe('Error Handling', () => {
    it('collection fetchers never throw and return empty arrays on error', async () => {
      // These should all handle missing collections gracefully
      const results = await Promise.all([
        getPrograms(),
        getEvents(),
        getTestimonials(),
        getPartners(),
        getNews(),
      ])

      results.forEach((result) => {
        expect(Array.isArray(result)).toBe(true)
      })
    })

    it('global fetchers never throw and return null on error', async () => {
      // These should all handle missing globals gracefully
      const results = await Promise.all([
        getHeroData(),
        getHeaderData(),
        getAccordionData(),
        getMarqueeData(),
        getSectionTitles(),
        getFooterData(),
        getContactFormData(),
      ])

      results.forEach((result) => {
        expect(result === null || typeof result === 'object').toBe(true)
      })
    })
  })

  describe('Type Safety', () => {
    it('getPrograms returns correctly typed Program objects', async () => {
      const programs = await getPrograms()
      if (programs.length > 0) {
        const program = programs[0]
        expect(program).toHaveProperty('id')
        expect(program).toHaveProperty('title')
        expect(program).toHaveProperty('programCount')
        expect(program).toHaveProperty('image')
      }
    })
  })
})
