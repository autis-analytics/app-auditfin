import Image from 'next/image'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='portal-footer'>
      <div className='portal-container'>
        <div className='footer-top'>
          <div>
            <p className='footer-title'>Auditoria Financeira</p>
            <p>Acordo Judicial de Reparação Integral</p>
            <p>Brumadinho · Minas Gerais</p>
          </div>
          <nav aria-label='Links do rodapé'>
            <a href='#faq'>Dúvidas frequentes</a>
            <a href='#terms-of-use'>Termos de uso</a>
          </nav>
          <a className='back-to-top' href='#inicio'>
            Voltar ao início <ArrowUp size={17} aria-hidden='true' />
          </a>
        </div>
        <div className='footer-bottom'>
          <div>
            <Image
              src='/EY_Logo.png'
              alt='EY'
              width={112}
              height={118}
              className='object-contain'
            />
            <span>Auditoria independente realizada pela EY.</span>
          </div>
          <span>Informações relativas ao escopo do projeto.</span>
        </div>
      </div>
    </footer>
  )
}
