import { Toaster } from '@/components/ui/toaster'
import TanStackProvider from '@/providers/TanstackProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { type Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'

import { Nunito } from 'next/font/google'

interface ILocaleLayoutProps {
  children: React.ReactNode
}

const nunito = Nunito({
  weight: ['300', '400', '700', '800'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-nunito',
})

const LocaleLayout: React.FC<ILocaleLayoutProps> = async ({ children }) => {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={nunito.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <TanStackProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </TanStackProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'home' })

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}

export default LocaleLayout
