import type { GlobalAfterChangeHook, CollectionAfterChangeHook } from 'payload'

const triggerRevalidate = async (path: string = '/') => {
  if (!process.env.REVALIDATE_SECRET || !process.env.NEXT_PUBLIC_SERVER_URL) {
    console.warn('⚠️ Missing REVALIDATE_SECRET or NEXT_PUBLIC_SERVER_URL in .env')
    return
  }

  try {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET}`
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path }),
    })
  } catch (error) {
    console.error('Error hitting revalidate route:', error)
  }
}

export const revalidateGlobal: GlobalAfterChangeHook = async ({ doc }) => {
  await triggerRevalidate('/')
  return doc
}

export const revalidateCollection: CollectionAfterChangeHook = async ({ doc }) => {
  await triggerRevalidate('/')
  return doc
}
