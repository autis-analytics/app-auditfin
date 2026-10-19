'use client'

import { FormEvent, useId, useRef, useState } from 'react'
import { ArrowRight, Search, X } from 'lucide-react'

const topics = [
  {
    id: 'reparation-agreement',
    title: 'O Acordo de Reparação',
    description: 'Contexto, partes do Acordo, municípios e regiões abrangidas.',
    keywords:
      'acordo judicial ajri brumadinho paraopeba território partes municípios regiões estado ministério público defensoria mapa',
  },
  {
    id: 'audit-of-obligations',
    title: 'Auditoria da cláusula 4.4.11',
    description:
      'Recursos e prestação de contas das estruturas de apoio, ATIs e CAMF.',
    keywords:
      'auditoria financeira cláusula 4.4.11 obrigações estruturas apoio camf atis assessorias técnicas independentes prestação contas relatório relatórios painel painéis financeiro power bi',
  },
  {
    id: 'annex-i1-audit',
    title: 'Auditoria das ATIs no Anexo I.1',
    description:
      'Atuação das Assessorias Técnicas Independentes no âmbito do Anexo I.1.',
    keywords:
      'auditoria financeira anexo i.1 i1 projetos comunidades atingidas atis assessorias técnicas independentes relatório relatórios painel painéis power bi',
  },
  {
    id: 'vale-financial-audit',
    title: 'Obrigações de pagar da Vale',
    description:
      'Verificação dos pagamentos, prazos e valores previstos no Acordo.',
    keywords:
      'auditoria financeira vale pagamentos pagar valores prazos relatório relatórios painel painéis power bi',
  },
  {
    id: 'faq',
    title: 'Dúvidas frequentes',
    description:
      'Respostas sobre o trabalho da auditoria financeira independente.',
    keywords:
      'dúvidas perguntas frequentes faq escopo ey auditoria independência responsabilidades',
  },
  {
    id: 'terms-of-use',
    title: 'Termos de uso',
    description: 'Condições de utilização das informações deste portal.',
    keywords: 'termos uso condições informações privacidade',
  },
]

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')

export default function PortalSearch() {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState<string | null>(null)
  const resultsId = useId()
  const inputId = useId()
  const resultsHeading = useRef<HTMLHeadingElement>(null)
  const words = normalize(submitted ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  const results = topics.filter((topic) =>
    words.every((word) =>
      normalize(
        `${topic.title} ${topic.description} ${topic.keywords}`,
      ).includes(word),
    ),
  )

  function search(event: FormEvent) {
    event.preventDefault()
    if (!query.trim()) {
      setSubmitted(null)
      return
    }
    setSubmitted(query.trim())
    requestAnimationFrame(() =>
      resultsHeading.current?.focus({ preventScroll: true }),
    )
  }

  function visit(id: string) {
    setSubmitted(null)
    requestAnimationFrame(() =>
      document.getElementById(id)?.focus({ preventScroll: true }),
    )
  }

  return (
    <div
      className='portal-search'
      onKeyDown={(event) => {
        if (event.key === 'Escape' && submitted !== null) {
          event.preventDefault()
          setSubmitted(null)
          document.getElementById(inputId)?.focus()
        }
      }}
    >
      <div className='search-surface'>
        <form role='search' aria-label='Buscar no portal' onSubmit={search}>
          <label className='sr-only' htmlFor={inputId}>
            Buscar por assunto ou seção
          </label>
          <input
            id={inputId}
            type='search'
            placeholder='Localizar um assunto no portal'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete='off'
            maxLength={120}
            aria-controls={submitted !== null ? resultsId : undefined}
          />
          <button type='submit' aria-label='Buscar no portal'>
            <Search size={25} strokeWidth={2.5} aria-hidden='true' />
          </button>
        </form>
      </div>
      {submitted !== null ? (
        <section
          className='search-results'
          id={resultsId}
          aria-labelledby={`${resultsId}-heading`}
        >
          <div className='search-results-header'>
            <h2 ref={resultsHeading} tabIndex={-1} id={`${resultsId}-heading`}>
              {results.length
                ? `${results.length} ${results.length === 1 ? 'seção encontrada' : 'seções encontradas'}`
                : 'Nenhuma seção encontrada'}
              <span> para “{submitted}”</span>
            </h2>
            <button
              type='button'
              onClick={() => {
                setSubmitted(null)
                document.getElementById(inputId)?.focus()
              }}
              aria-label='Fechar resultados'
            >
              <X size={20} aria-hidden='true' />
            </button>
          </div>
          {results.length ? (
            <ul>
              {results.map((topic) => (
                <li key={topic.id}>
                  <a href={`#${topic.id}`} onClick={() => visit(topic.id)}>
                    <span>
                      <strong>{topic.title}</strong>
                      <span>{topic.description}</span>
                    </span>
                    <ArrowRight size={20} aria-hidden='true' />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Tente buscar por “acordo”, “Vale”, “Anexo I.1” ou “dúvidas”.</p>
          )}
        </section>
      ) : null}
    </div>
  )
}
