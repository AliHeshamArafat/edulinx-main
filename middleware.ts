import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

const intlMiddleware = createIntlMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always"
});

// Protected routes that require authentication
const PROTECTED_ROUTES = ['/profile', '/tracker'];

export default function middleware(request: NextRequest) {
  // Get the pathname
  const pathname = request.nextUrl.pathname;
  
  // Check if path is a protected route
  const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.includes(route));
  
  if (isProtectedRoute) {
    // Check if user is authenticated by looking for the token
    const token = request.cookies.get('token')?.value;
    
    if (!token) {
      // Create the URL to redirect to
      const url = new URL('/', request.url);
      // Maintain the locale in the path when redirecting
      const locale = pathname.split('/')[1]; // Get locale from URL
      if (['en', 'ar'].includes(locale)) {
        url.pathname = `/${locale}`;
      }
      return NextResponse.redirect(url);
    }
  }
  
  // Handle localization for all routes
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
