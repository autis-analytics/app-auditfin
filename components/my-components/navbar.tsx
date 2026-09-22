'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { useEffect, useMemo, useState } from 'react'

type NavLink = {
  label: string
  href?: string
}

function isLinkActive(pathname: string, activeHash: string, href?: string) {
  if (!href) return false
  if (href.startsWith('#')) return activeHash === href
  return pathname === href
}
function MobileMenu({
  navigationLinks,
  pathname,
  activeHash,
}: {
  navigationLinks: NavLink[]
  pathname: string
  activeHash: string
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className='group size-8 xl:hidden transition-colors text-background hover:bg-[#1a1a24] hover:text-background'
          variant='ghost'
          size='icon'
        >
          <svg
            className='pointer-events-none'
            width={16}
            height={16}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 12L20 12'
              className='origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]'
            />
            <path
              d='M4 12H20'
              className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
            />
            <path
              d='M4 12H20'
              className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]'
            />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='start'
        className='w-72 p-1 xl:hidden text-left bg-primary text-background'
      >
        <NavigationMenu className='max-w-none *:w-full'>
          <NavigationMenuList className='flex-col items-start gap-0 md:gap-2'>
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index} className='w-full'>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    'py-2 text-base rounded-md text-background transition-colors hover:bg-[#1a1a24] hover:text-background',
                    isLinkActive(pathname, activeHash, link.href) &&
                      'font-semibold bg-[#1a1a24] border-b-4 border-zinc-400',
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </PopoverContent>
    </Popover>
  )
}

function DesktopMenu({
  navigationLinks,
  pathname,
  activeHash,
}: {
  navigationLinks: NavLink[]
  pathname: string
  activeHash: string
}) {
  return (
    <NavigationMenu viewport={false} className='max-xl:hidden'>
      <NavigationMenuList className='gap-1'>
        {navigationLinks.map((link, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              href={link.href}
              className={cn(
                'relative px-2 py-2 font-medium text-center text-sm leading-tight rounded-md text-background transition-all hover:bg-[#1a1a24] hover:text-background',
                isLinkActive(pathname, activeHash, link.href) &&
                  'font-semibold bg-[#1a1a24] border-b-4 border-zinc-400 scale-108',
              )}
            >
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default function Navbar() {
  const t = useTranslations('navigation')
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState<string>('')

  const navigationLinks = useMemo<NavLink[]>(
    () => [
      {
        label: 'O Acordo de Reparação',
        href: '#reparation-agreement',
      },
      {
        href: '#audit-of-obligations',
        label: t('audit4411'),
      },
      {
        href: '#annex-i1-audit',
        label: t('auditAnnexI1'),
      },
      {
        href: '#vale-financial-audit',
        label: t('auditVale'),
      },
      {
        href: '#faq',
        label: t('faq'),
      },
      {
        href: '#terms-of-use',
        label: t('terms-of-use'),
      },
    ],
    [t],
  )

  // Coletar ids de seções existentes a partir da navegação
  const sectionIds = useMemo(() => {
    const ids = new Set<string>()
    navigationLinks.forEach((link) => {
      if (link.href?.startsWith('#')) ids.add(link.href.slice(1))
    })
    return Array.from(ids)
  }, [navigationLinks])

  // Ajustar seção ativa com base na posição de rolagem
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (elements.length === 0) return

    let raf: number | null = null
    const compute = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3
      let currentId = elements[0]?.id ?? ''

      for (const el of elements) {
        if (el.offsetTop <= scrollPosition) {
          currentId = el.id
        } else {
          break
        }
      }

      // Garante última seção quando estiver no rodapé da página
      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1
      if (atPageBottom && elements.length > 0) {
        currentId = elements[elements.length - 1].id
      }

      if (currentId) {
        setActiveHash((prev) => {
          const next = `#${currentId}`
          return prev === next ? prev : next
        })
      }

      raf = null
    }

    const onScroll = () => {
      if (raf != null) return
      raf = requestAnimationFrame(compute)
    }

    const handleInitialHash = () => {
      const existingHash = window.location.hash.slice(1)
      if (!existingHash) return
      if (sectionIds.includes(existingHash)) {
        setActiveHash(`#${existingHash}`)
      }
    }

    handleInitialHash()
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [sectionIds])

  // Sincronizar hash da URL com a seção ativa
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!activeHash) return
    if (window.location.hash === activeHash) return

    const { pathname: currentPathname, search } = window.location
    const newUrl = `${currentPathname}${search}${activeHash}`
    window.history.replaceState(null, '', newUrl)
  }, [activeHash, pathname])

  return (
    <nav className='border-b border-transparent px-4 md:px-6 bg-[#2e2e38] text-background'>
      <div className='max-w-[90rem] mx-auto flex min-h-16 items-center justify-between gap-4'>
        {/* Navegação */}
        <div className='flex items-center gap-2'>
          {/* Mobile */}
          <MobileMenu
            navigationLinks={navigationLinks}
            pathname={pathname}
            activeHash={activeHash}
          />

          {/* Desktop */}
          <DesktopMenu
            navigationLinks={navigationLinks}
            pathname={pathname}
            activeHash={activeHash}
          />
        </div>

        {/* Ações */}
        <div className='flex items-center gap-2'>
          <Button
            onClick={() => window.open('/ajri.pdf', '_blank')}
            className='duration-200 hover:scale-105 text-black bg-white hover:bg-white'
          >
            <span>{t('openDocument')}</span>{' '}
            <Image
              src='/icons/iconExternalLink.svg'
              alt='Ícone Acordo de Reparação'
              width={20}
              height={20}
            />
          </Button>
          {/* <div
            className='opacity-50 pointer-events-none cursor-not-allowed'
            aria-disabled='true'
            title='Idioma temporariamente desabilitado'
          >
            <LanguageSwitcher />
          </div> */}
        </div>
      </div>
    </nav>
  )
}
