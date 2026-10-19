import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, FileText } from 'lucide-react'

const auditScopes = [
  {
    number: '01',
    title: 'Estruturas de apoio e assessorias',
    reference: 'Cláusula 4.4.11',
    description:
      'Destinação dos recursos e prestação de contas das estruturas de apoio, ATIs e CAMF.',
    href: '#audit-of-obligations',
  },
  {
    number: '02',
    title: 'Projetos das comunidades atingidas',
    reference: 'Anexo I.1',
    description:
      'Atuação das Assessorias Técnicas Independentes no âmbito do Anexo I.1 do Acordo.',
    href: '#annex-i1-audit',
  },
  {
    number: '03',
    title: 'Obrigações de pagar da Vale',
    reference: 'Obrigações financeiras',
    description:
      'Verificação dos pagamentos, prazos e valores previstos no Acordo Judicial.',
    href: '#vale-financial-audit',
  },
]

export default function PortalIntro() {
  return (
    <>
      <section className='executive-opening' aria-labelledby='portal-title'>
        <div className='portal-container cover-introduction'>
          <div className='cover-heading'>
            <p className='eyebrow'>PORTAL DE AUDITORIA FINANCEIRA</p>
            <h1 id='portal-title'>
              Auditoria financeira
              <br className='desktop-break' /> do Acordo de Reparação.
            </h1>
          </div>
          <div className='cover-summary'>
            <p className='territory-label'>Brumadinho e bacia do Paraopeba</p>
            <p>
              Conheça o trabalho da auditoria independente e acompanhe as
              verificações dos recursos destinados à reparação.
            </p>
            <a className='primary-link' href='#audit-results'>
              Consultar as auditorias <ArrowDown size={17} aria-hidden='true' />
            </a>
          </div>
        </div>
        <div className='cover-panorama'>
          <Image
            src='/images/Capa_Cor.png'
            alt=''
            fill
            priority
            sizes='100vw'
            className='cover-photograph'
          />
          <div className='portal-container panorama-caption'>
            <span>Imagem do acervo do portal</span>
            <a href='#reparation-agreement'>
              Conheça o acordo <ArrowUpRight size={16} aria-hidden='true' />
            </a>
          </div>
        </div>
        <div className='agreement-context-strip'>
          <dl className='portal-container agreement-facts'>
            <div>
              <dt>Abrangência territorial</dt>
              <dd>
                26 <span>municípios</span>
              </dd>
            </div>
            <div>
              <dt>Organização do território</dt>
              <dd>
                5 <span>regiões</span>
              </dd>
            </div>
            <div>
              <dt>Auditoria financeira</dt>
              <dd>
                3 <span>frentes de atuação</span>
              </dd>
            </div>
            <div>
              <dt>Homologação do Acordo</dt>
              <dd className='fact-date'>
                04 <span>fev.</span> 2021
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        className='audit-directory portal-container'
        id='audit-results'
        tabIndex={-1}
        aria-labelledby='audit-directory-title'
      >
        <div className='directory-intro'>
          <p className='eyebrow'>ESCOPO DA AUDITORIA</p>
          <h2 id='audit-directory-title'>Frentes de atuação</h2>
          <p>
            Consulte o escopo, as responsabilidades e os resultados de cada
            frente.
          </p>
        </div>
        <div className='directory-layout'>
          <div className='mandate-list'>
            {auditScopes.map((scope) => (
              <a className='mandate-link' href={scope.href} key={scope.href}>
                <span className='mandate-number' aria-hidden='true'>
                  {scope.number}
                </span>
                <div className='mandate-copy'>
                  <span className='mandate-reference'>{scope.reference}</span>
                  <h3>{scope.title}</h3>
                  <p>{scope.description}</p>
                </div>
                <span className='mandate-action'>
                  <span>Consultar</span>
                  <ArrowRight size={20} aria-hidden='true' />
                </span>
              </a>
            ))}
          </div>
          <aside
            className='agreement-document'
            aria-labelledby='agreement-document-title'
          >
            <div className='document-meta'>
              <FileText size={24} strokeWidth={1.3} aria-hidden='true' />
              <span>DOCUMENTO DE REFERÊNCIA</span>
            </div>
            <h3 id='agreement-document-title'>
              Acordo Judicial de Reparação Integral
            </h3>
            <p>
              Consulte o documento que estabelece as obrigações e os
              compromissos de reparação.
            </p>
            <dl>
              <div>
                <dt>Homologação</dt>
                <dd>04 de fevereiro de 2021</dd>
              </div>
              <div>
                <dt>Arquivo</dt>
                <dd>PDF · 735 KB</dd>
              </div>
            </dl>
            <a href='/ajri.pdf' target='_blank' rel='noopener noreferrer'>
              Acessar o Acordo <ArrowUpRight size={17} aria-hidden='true' />
              <span className='sr-only'> (PDF, abre em nova aba)</span>
            </a>
          </aside>
        </div>
        <p className='directory-note'>
          As informações se referem ao escopo da auditoria financeira
          independente realizada pela EY.{' '}
          <a href='#limits-of-action'>Conheça os limites de atuação.</a>
        </p>
      </section>
    </>
  )
}
