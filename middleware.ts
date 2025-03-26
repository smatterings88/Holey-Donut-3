import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add CSP header to allow embedding from zenwareai.com and localhost
  response.headers.set(
    'Content-Security-Policy',
    "frame-ancestors 'self' https://zenwareai.com http://localhost:* https://localhost:*"
  );

  return response;
}

export const config = {
  matcher: '/:path*',
};