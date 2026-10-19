import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Navbar from './navbar'
import AccessibilityTools from './accessibility-tools'

export default function Header() {
  return (
    <>
      <header className='masthead' id='inicio' tabIndex={-1}>
        <div className='portal-container'>
          <div className='utility-inner'>
            <a className='utility-project' href='#reparation-agreement'>
              Acordo Judicial de Reparação Integral
            </a>
            <AccessibilityTools />
          </div>
          <div className='masthead-inner'>
            <a
              href='#inicio'
              className='portal-brand'
              aria-label='Auditoria Financeira — início'
            >
              <span>
                auditoria<span className='brand-accent'>financeira</span>
              </span>
            </a>
            <div className='masthead-description'>
              <span>Brumadinho e bacia do Paraopeba</span>
              <span>Acordo Judicial de Reparação Integral</span>
            </div>
            <a className='header-help' href='#faq'>
              Dúvidas frequentes <ArrowUpRight size={16} aria-hidden='true' />
            </a>
            <div className='audit-signature'>
              <span>
                Auditoria
                <br />
                independente
              </span>
              <Image
                src='/EY_Logo.png'
                alt='EY'
                width={47}
                height={50}
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  )
}
