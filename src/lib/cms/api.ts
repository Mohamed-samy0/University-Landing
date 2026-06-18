import { getPayload } from 'payload'
import config from '@payload-config'
import { cache } from 'react'

export const getHeroData = cache(async () => {
  const payload = await getPayload({ config })

  try {
    const hero = await payload.findGlobal({
      slug: 'hero',
    })
    return hero
  } catch (error) {
    console.error('Error fetching Hero data:', error)
    return null
  }
})

export const getProgramsData = cache(async () => {
  const payload = await getPayload({ config })

  try {
    const programs = await payload.find({
      collection: 'programs',
      limit: 10,
    })
    return programs.docs
  } catch (error) {
    console.error('Error fetching Programs data:', error)
    return []
  }
})
