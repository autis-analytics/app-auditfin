import type { Metadata } from 'next'
import { Roboto, Roboto_Mono, Roboto_Serif } from 'next/font/google'
import './globals.css'
import Header from '@/components/my-components/header'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from '@/components/ui/theme-provider'
import DocumentsPanel from '@/components/my-components/documents-panel'
import Footer from '@/components/my-components/footer'
// import Footer from '@/components/my-components/footer'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

const robotoSerif = Roboto_Serif({
  variable: '--font-roboto-serif',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Portal de Auditoria Financeira',
  description: 'Acordo Judicial para Reparação Integral',
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
        className={`${roboto.variable} ${robotoMono.variable} ${robotoSerif.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute='class' forcedTheme='light'>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
          </NextIntlClientProvider>
        </ThemeProvider>
        {/* Botão/Seção de Documentos fora da rolagem */}
        <DocumentsPanel />
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
