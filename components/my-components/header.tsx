import Navbar from './navbar'
import AccessibilityTools from './accessibility-tools'

export default function Header() {
  return (
    <header className='masthead' id='inicio' tabIndex={-1}>
      <div className='portal-container masthead-inner'>
        <a
          className='portal-brand'
          href='#inicio'
          aria-label='Portal de Auditoria Financeira — início'
        >
          <span className='brand-line' aria-hidden='true' />
          <span>
            <strong>Auditoria Financeira</strong>
            <small>Acordo Judicial de Reparação Integral</small>
          </span>
        </a>
        <Navbar />
        <AccessibilityTools />
      </div>
    </header>
  )
}
