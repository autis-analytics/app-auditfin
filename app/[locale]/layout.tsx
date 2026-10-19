import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import './portal.css'
import Header from '@/components/my-components/header'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from '@/components/ui/theme-provider'
import DocumentsPanel from '@/components/my-components/documents-panel'
import Footer from '@/components/my-components/footer'
import GoogleAnalytics from '@/components/my-components/google-analytics'
// import Footer from '@/components/my-components/footer'

const rawline = localFont({
  variable: '--font-rawline',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/rawline/rawline-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/rawline/rawline-400i.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/rawline/rawline-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/rawline/rawline-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/rawline/rawline-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
  ),
  title: 'Portal de Auditoria Financeira',
  description: 'Acordo Judicial para Reparação Integral',
  robots:
    process.env.VERCEL_ENV === 'preview'
      ? { index: false, follow: false }
      : undefined,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    images: ['/capaMetaDado.png'],
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) => {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning data-lt-installed>
      <body
        className={`${rawline.variable} ${robotoMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute='class' forcedTheme='light'>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main id='conteudo' tabIndex={-1}>
              {children}
            </main>
            {/* <Footer /> */}
          </NextIntlClientProvider>
        </ThemeProvider>
        {/* Botão/Seção de Documentos fora da rolagem */}
        <DocumentsPanel />
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  )
}

export default RootLayout
