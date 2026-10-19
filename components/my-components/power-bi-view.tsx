'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  LoaderCircle,
  RotateCcw,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  src: string
  title?: string
  className?: string
  width?: string | number
  height?: string | number
}

export default function PowerBiView({
  src,
  title = 'Extensão territorial',
  className,
  width,
  height,
}: Props) {
  const [enabled, setEnabled] = useState(false)
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const reportRegion = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (enabled) reportRegion.current?.focus()
  }, [enabled])
  let valid = false
  try {
    const url = new URL(src)
    valid = url.protocol === 'https:' && url.hostname === 'app.powerbi.com'
  } catch {
    /* Invalid source. */
  }

  if (!valid)
    return <p role='alert'>O endereço deste painel não está disponível.</p>

  return (
    <div className={cn('report-panel', className)}>
      <div className='report-toolbar'>
        <span>
          <ChartNoAxesCombined size={16} aria-hidden='true' /> Painel interativo
        </span>
        <a href={src} target='_blank' rel='noopener noreferrer'>
          Abrir em nova aba <ArrowUpRight size={15} aria-hidden='true' />
          <span className='sr-only'>: {title}</span>
        </a>
      </div>
      {!enabled ? (
        <div className='report-placeholder'>
          <ChartNoAxesCombined
            size={34}
            strokeWidth={1.25}
            aria-hidden='true'
          />
          <h4>{title}</h4>
          <p>Explore os dados e filtros deste painel da auditoria.</p>
          <button
            className='primary-link'
            type='button'
            onClick={() => setEnabled(true)}
          >
            Carregar painel <ArrowUpRight size={16} aria-hidden='true' />
            <span className='sr-only'>: {title}</span>
          </button>
          <span>Microsoft Power BI · conteúdo externo</span>
        </div>
      ) : (
        <div
          ref={reportRegion}
          className='report-viewport'
          role='region'
          aria-label={`Painel: ${title}`}
          aria-busy={loading && !failed}
          tabIndex={-1}
          style={{
            aspectRatio:
              width && height ? `${Number(width) / Number(height)}` : '16 / 10',
          }}
        >
          {loading && !failed && (
            <p className='report-loading' role='status'>
              <LoaderCircle
                className='animate-spin'
                size={20}
                aria-hidden='true'
              />{' '}
              Carregando painel…
            </p>
          )}
          {failed ? (
            <div className='report-placeholder' role='alert'>
              <p>Não foi possível carregar o painel.</p>
              <button
                className='primary-link'
                type='button'
                onClick={() => {
                  setFailed(false)
                  setLoading(true)
                  setAttempt(attempt + 1)
                }}
              >
                <RotateCcw size={16} aria-hidden='true' /> Tentar novamente
              </button>
            </div>
          ) : (
            <iframe
              key={attempt}
              title={title}
              src={src}
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
              sandbox='allow-scripts allow-same-origin allow-forms allow-popups allow-presentation'
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false)
                setFailed(true)
              }}
            />
          )}
        </div>
      )}
      {enabled && (
        <p className='report-help'>
          Para ampliar a visualização e usar todos os filtros, abra o painel em
          uma nova aba.
        </p>
      )}
    </div>
  )
}
