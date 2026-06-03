'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

// Language display names mapping
const languageNames: Record<string, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  zh: '中文',
  ar: 'العربية',
  ru: 'Русский',
  hi: 'हिन्दी',
  // Add more languages as needed
}

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (value: string) => {
    router.replace(pathname, { locale: value })
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          <Languages className='w-5 h-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-56 bg-transparent backdrop-blur-md'
        align='end'
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={handleLanguageChange}
        >
          {routing.locales.map((localeCode) => (
            <DropdownMenuRadioItem key={localeCode} value={localeCode}>
              {languageNames[localeCode] || localeCode.toUpperCase()}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher
