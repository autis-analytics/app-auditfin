import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Home,
  Info,
  Landmark,
} from 'lucide-react'
import PortalSearch from '@/components/my-components/portal-search'

const auditScopes = [
  {
    icon: ClipboardCheck,
    title: 'Estruturas de apoio e assessorias',
    reference: 'Cláusula 4.4.11',
    description:
      'Consulte a destinação dos recursos e a prestação de contas das estruturas de apoio, ATIs e CAMF.',
    href: '#audit-of-obligations',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Projetos das comunidades atingidas',
    reference: 'Anexo I.1',
    description:
      'Acompanhe a auditoria das Assessorias Técnicas Independentes no âmbito do Anexo I.1 do Acordo.',
    href: '#annex-i1-audit',
  },
  {
    icon: Landmark,
    title: 'Obrigações de pagar da Vale',
    reference: 'Obrigações financeiras',
    description:
      'Conheça as verificações dos pagamentos, prazos e valores previstos no Acordo Judicial.',
    href: '#vale-financial-audit',
  },
]

export default function PortalIntro() {
  return (
    <>
      <section
        className='portal-intro portal-container'
        aria-labelledby='portal-title'
      >
        <nav className='breadcrumb' aria-label='Localização'>
          <a href='#inicio' aria-label='Início'>
            <Home size={15} aria-hidden='true' />
          </a>
          <ChevronRight size={14} aria-hidden='true' />
          <span>Portal de Auditoria Financeira</span>
        </nav>
        <div className='page-introduction'>
          <h1 id='portal-title'>Portal de Auditoria Financeira</h1>
          <p>
            Acompanhe a auditoria independente dos recursos destinados à
            reparação de Brumadinho e da bacia do Paraopeba.
          </p>
        </div>
        <PortalSearch />
      </section>

      <section
        className='audit-directory portal-container'
        id='audit-results'
        tabIndex={-1}
        aria-labelledby='audit-directory-title'
      >
        <div className='directory-intro'>
          <h2 id='audit-directory-title'>O que você deseja consultar?</h2>
          <p>Conheça as três frentes da auditoria financeira independente.</p>
        </div>
        <div className='service-grid'>
          {auditScopes.map((scope) => (
            <a className='service-card' href={scope.href} key={scope.href}>
              <scope.icon size={42} strokeWidth={1.7} aria-hidden='true' />
              <span className='service-reference'>{scope.reference}</span>
              <h3>{scope.title}</h3>
              <p>{scope.description}</p>
              <span className='service-action'>
                Consultar auditoria <ArrowRight size={18} aria-hidden='true' />
              </span>
            </a>
          ))}
        </div>
        <p className='directory-note'>
          <Info size={18} aria-hidden='true' />
          <span>
            As informações se referem ao escopo da auditoria financeira
            independente realizada pela EY.{' '}
            <a href='#limits-of-action'>Conheça os limites de atuação.</a>
          </span>
        </p>
      </section>

      <section
        className='agreement-overview portal-container'
        aria-labelledby='agreement-overview-title'
      >
        <div className='agreement-banner'>
          <Image
            src='/images/Capa_Cor.png'
            alt=''
            fill
            sizes='(max-width: 1200px) 100vw, 1200px'
            className='agreement-background'
          />
          <div className='agreement-banner-content'>
            <p>Acordo Judicial de Reparação Integral</p>
            <h2 id='agreement-overview-title'>
              Informação para acompanhar a reparação.
            </h2>
            <a href='#reparation-agreement'>
              Entenda o acordo <ArrowRight size={18} aria-hidden='true' />
            </a>
          </div>
        </div>
        <dl className='agreement-facts'>
          <div>
            <dt>
              municípios abrangidos
              <span>Brumadinho e outros 25 municípios</span>
            </dt>
            <dd>26</dd>
          </div>
          <div>
            <dt>
              regiões de atuação<span>Organização territorial do Acordo</span>
            </dt>
            <dd>5</dd>
          </div>
          <div>
            <dt>
              frentes de auditoria<span>Escopo da auditoria financeira</span>
            </dt>
            <dd>3</dd>
          </div>
          <div>
            <dt>
              homologação do Acordo
              <span>Acordo Judicial de Reparação Integral</span>
            </dt>
            <dd className='fact-date'>04/02/2021</dd>
          </div>
        </dl>
        <a
          className='agreement-download'
          href='/ajri.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FileText size={22} aria-hidden='true' />
          <span>
            <strong>Acordo Judicial na íntegra</strong>
            <span>Consulte o documento e seus anexos · PDF, 735 KB</span>
          </span>
          <ArrowUpRight size={20} aria-hidden='true' />
          <span className='sr-only'> (abre em nova aba)</span>
        </a>
      </section>
    </>
  )
}
