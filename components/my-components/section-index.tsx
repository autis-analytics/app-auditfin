import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'

export const portalSections = [
  {
    id: 'reparation-agreement',
    short: 'O acordo',
    title: 'O Acordo de Reparação',
  },
  {
    id: 'audit-of-obligations',
    short: 'Cláusula 4.4.11',
    title: 'Obrigações da cláusula 4.4.11',
  },
  {
    id: 'annex-i1-audit',
    short: 'Anexo I.1',
    title: 'ATIs no âmbito do Anexo I.1',
  },
  {
    id: 'vale-financial-audit',
    short: 'Obrigações da Vale',
    title: 'Obrigações de pagar da Vale',
  },
  { id: 'faq', short: 'Dúvidas frequentes', title: 'Dúvidas frequentes' },
  { id: 'terms-of-use', short: 'Termos de uso', title: 'Termos de uso' },
]

export default function SectionIndex() {
  return (
    <aside className='section-index'>
      <div className='section-index-sticky'>
        <p className='index-label'>Nesta página</p>
        <nav aria-label='Índice do conteúdo'>
          {portalSections.map((section) => (
            <a href={`#${section.id}`} key={section.id}>
              <span>{section.title}</span>
            </a>
          ))}
        </nav>
        <div className='index-document'>
          <ArrowDownToLine size={22} aria-hidden='true' />
          <h2>Documento de referência</h2>
          <p>Consulte o Acordo Judicial de Reparação Integral e seus anexos.</p>
          <a href='/ajri.pdf' target='_blank' rel='noopener noreferrer'>
            Abrir acordo <ArrowUpRight size={15} aria-hidden='true' />
            <span className='sr-only'> (PDF, nova aba)</span>
          </a>
          <span className='file-caption'>PDF · 735 KB</span>
        </div>
      </div>
    </aside>
  )
}
