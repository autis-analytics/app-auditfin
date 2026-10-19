'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { portalSections } from './section-index'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const selectedSection = useRef<string | null>(null)

  useEffect(() => {
    let frame = 0
    function update() {
      let current = 'inicio'
      for (const section of portalSections) {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= 145)
          current = section.id
      }
      setActive(current)
      frame = 0
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const links = [
    { id: 'inicio', short: 'Início' },
    ...portalSections.filter((s) => s.id !== 'terms-of-use'),
  ]

  return (
    <nav className='site-nav' aria-label='Navegação principal'>
      <div className='portal-container nav-inner'>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              className='mobile-menu-button'
              type='button'
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
              {open ? (
                <X size={21} aria-hidden='true' />
              ) : (
                <Menu size={21} aria-hidden='true' />
              )}{' '}
              Menu
            </button>
          </PopoverTrigger>
          <PopoverContent
            align='start'
            className='mobile-navigation'
            onCloseAutoFocus={(event) => {
              if (!selectedSection.current) return
              event.preventDefault()
              const target = document.getElementById(selectedSection.current)
              selectedSection.current = null
              requestAnimationFrame(() =>
                target?.focus({ preventScroll: true }),
              )
            }}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  selectedSection.current = link.id
                  setOpen(false)
                }}
                aria-current={active === link.id ? 'location' : undefined}
              >
                {link.short}
              </a>
            ))}
            <a
              href='#terms-of-use'
              onClick={() => {
                selectedSection.current = 'terms-of-use'
                setOpen(false)
              }}
            >
              Termos de uso
            </a>
          </PopoverContent>
        </Popover>
        <div className='desktop-navigation'>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'location' : undefined}
            >
              {link.short}
            </a>
          ))}
        </div>
        <a
          className='nav-document'
          href='/ajri.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          Acordo na íntegra <ArrowUpRight size={16} aria-hidden='true' />
          <span className='sr-only'> (PDF, abre em nova aba)</span>
        </a>
      </div>
    </nav>
  )
}
