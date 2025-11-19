import createMiddleware from 'next-intl/middleware';
import { locales, Locale } from './lib/i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'en' as Locale,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\..*).*)']
};
