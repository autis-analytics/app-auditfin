import Image from 'next/image'
import {
  ArrowDown,
  ArrowRight,
  ChartNoAxesCombined,
  ClipboardCheck,
  Landmark,
} from 'lucide-react'

const auditScopes = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Estruturas de apoio e assessorias',
    reference: 'CLÁUSULA 4.4.11',
    description:
      'Destinação dos recursos e prestação de contas das estruturas de apoio, ATIs e CAMF.',
    href: '#audit-of-obligations',
  },
  {
    number: '02',
    icon: ChartNoAxesCombined,
    title: 'Projetos das comunidades atingidas',
    reference: 'ANEXO I.1',
    description:
      'Atuação das Assessorias Técnicas Independentes no âmbito do Anexo I.1 do Acordo.',
    href: '#annex-i1-audit',
  },
  {
    number: '03',
    icon: Landmark,
    title: 'Obrigações de pagar da Vale',
    reference: 'OBRIGAÇÕES FINANCEIRAS',
    description:
      'Verificação dos pagamentos, prazos e valores previstos no Acordo Judicial.',
    href: '#vale-financial-audit',
  },
]

export default function PortalIntro() {
  return (
    <>
      <section className='portal-hero' aria-labelledby='portal-title'>
        <div className='portal-container'>
          <div className='breadcrumb' aria-label='Localização'>
            <span>Início</span>
            <span aria-hidden='true'>/</span>
            <span>Portal de Auditoria Financeira</span>
          </div>
          <div className='hero-grid'>
            <div className='hero-copy'>
              <p className='eyebrow'>ACORDO JUDICIAL DE REPARAÇÃO INTEGRAL</p>
              <h1 id='portal-title'>
                Auditoria financeira
                <br />
                do Acordo de
                <br />
                <span>Reparação.</span>
              </h1>
              <p className='hero-description'>
                Conheça o trabalho da auditoria independente e acompanhe as
                verificações dos recursos destinados à reparação de Brumadinho e
                da bacia do Paraopeba.
              </p>
              <div className='hero-actions'>
                <a className='primary-link' href='#audit-results'>
                  Consultar as auditorias{' '}
                  <ArrowDown size={17} aria-hidden='true' />
                </a>
                <a className='text-link' href='#reparation-agreement'>
                  Entenda o acordo <ArrowRight size={16} aria-hidden='true' />
                </a>
              </div>
            </div>
            <figure className='hero-visual'>
              <div className='hero-photo'>
                <Image
                  src='/images/Capa_Cor.png'
                  alt='Vista aérea de uma área de memória e paisagem no território de Brumadinho, imagem do acervo do portal'
                  fill
                  priority
                  sizes='(max-width: 760px) 100vw, 46vw'
                  className='object-cover'
                />
              </div>
              <figcaption>
                <span>Reparação integral</span>
                <span>Brumadinho e bacia do Paraopeba</span>
              </figcaption>
            </figure>
          </div>
          <dl className='agreement-facts'>
            <div>
              <dt>Municípios abrangidos</dt>
              <dd>
                26<span>Brumadinho e outros 25 municípios</span>
              </dd>
            </div>
            <div>
              <dt>Organização territorial</dt>
              <dd>
                5<span>regiões de atuação</span>
              </dd>
            </div>
            <div>
              <dt>Auditoria financeira</dt>
              <dd>
                3<span>frentes de trabalho</span>
              </dd>
            </div>
            <div>
              <dt>Homologação do acordo</dt>
              <dd className='fact-date'>
                04 fev. 2021<span>Acordo Judicial de Reparação Integral</span>
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
          <div>
            <p className='eyebrow'>CONSULTA PÚBLICA</p>
            <h2 id='audit-directory-title'>Acompanhe as auditorias</h2>
          </div>
          <p>
            Explore cada frente de atuação para conhecer o escopo, as
            responsabilidades e os resultados disponíveis.
          </p>
        </div>
        <div className='directory-list'>
          {auditScopes.map((scope) => (
            <a className='scope-link' href={scope.href} key={scope.number}>
              <span className='scope-number'>{scope.number}</span>
              <scope.icon size={26} strokeWidth={1.5} aria-hidden='true' />
              <div className='scope-title'>
                <span>{scope.reference}</span>
                <h3>{scope.title}</h3>
              </div>
              <p>{scope.description}</p>
              <ArrowRight
                className='scope-arrow'
                size={22}
                strokeWidth={1.5}
                aria-hidden='true'
              />
            </a>
          ))}
        </div>
        <div className='directory-note'>
          <span className='note-line' aria-hidden='true' />
          <p>
            As informações deste portal se referem ao escopo da auditoria
            financeira independente realizada pela EY.{' '}
            <a href='#limits-of-action'>Conheça os limites de atuação.</a>
          </p>
        </div>
      </section>
    </>
  )
}
