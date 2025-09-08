import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip if already has locale
  if (pathname.startsWith("/en") || pathname.startsWith("/ar")) {
    return;
  }

  // Redirect to default locale (en)
  return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
