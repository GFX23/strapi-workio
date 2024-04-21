import { NextRequest } from "next/server";

let locales = ["en", "cs"];

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

   if (    
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return
  }  

  // Redirect if there is no locale
  const locale = "cs";
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. if the incoming request is /products
  // the new URL iwill be /en/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|public|favicon.ico).*)'
  ],
};