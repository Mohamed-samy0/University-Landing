import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret')

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    const body = await request.json()
    const { path } = body

    if (path) {
      revalidatePath(path, 'page')
      return NextResponse.json({ revalidated: true, path, now: Date.now() })
    }

    return NextResponse.json({ message: 'Missing path parameter' }, { status: 400 })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
