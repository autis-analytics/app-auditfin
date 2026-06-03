import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'pt', 'es'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The locale prefix for URLs (always show locale in URL)
  localePrefix: 'always',

  pathnames: {
    '/': '/',
    '/clause-4-4-11': {
      en: '/clause-4-4-11',
      pt: '/clausula-4-4-11',
      es: '/clausula-4-4-11',
    }
  },
})
