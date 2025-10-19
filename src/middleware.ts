import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // In demo mode, allow all access
  if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
    return NextResponse.next()
  }

  // For production mode, middleware is disabled to avoid Edge Runtime issues
  // Auth protection should be implemented in the pages themselves using getServerSideProps
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*'],
  runtime: 'nodejs', // Use Node.js runtime instead of Edge
}
