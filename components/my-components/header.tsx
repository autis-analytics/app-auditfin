import Image from 'next/image'
import Navbar from './navbar'
import AccessibilityTools from './accessibility-tools'

export default function Header() {
  return (
    <>
      <div className='utility-bar'>
        <div className='portal-container utility-inner'>
          <span>Acordo Judicial de Reparação Integral</span>
          <AccessibilityTools />
        </div>
      </div>
      <header className='masthead' id='inicio' tabIndex={-1}>
        <div className='portal-container masthead-inner'>
          <a
            href='#inicio'
            className='portal-brand'
            aria-label='Auditoria Financeira — início'
          >
            <svg
              className='brand-symbol'
              viewBox='0 0 42 48'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M4 44V4h24l10 10v30H4Z'
                stroke='currentColor'
                strokeWidth='2.5'
              />
              <path
                d='M27 4v11h11M13 34v-7m8 7V21m8 13V17'
                stroke='currentColor'
                strokeWidth='2.5'
              />
            </svg>
            <span>
              Auditoria<span className='brand-second-line'>Financeira</span>
            </span>
          </a>
          <div className='masthead-description'>
            <span>Acordo Judicial de Reparação Integral</span>
            <span>Brumadinho · Minas Gerais</span>
          </div>
          <div className='audit-signature'>
            <span>Auditoria independente</span>
            <Image
              src='/EY_Logo.png'
              alt='EY'
              width={51}
              height={54}
              className='object-contain'
            />
          </div>
        </div>
      </header>
      <Navbar />
    </>
  )
}
