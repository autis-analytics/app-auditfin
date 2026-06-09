'use client'

import PowerBiView from '@/components/my-components/power-bi-view'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function ValeFinancialAudit() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const [colorOpacity, setColorOpacity] = useState(0)
  const targetOpacityRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const onScroll = () => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const windowH = window.innerHeight || 1
      // Progresso mais gradual (limiar aumentado para suavidade)
      const raw = 1 - rect.top / (windowH * 1.2)
      const clamped = Math.min(Math.max(raw, 0), 1)
      targetOpacityRef.current = easeOutCubic(clamped)
      if (rafRef.current === null)
        rafRef.current = requestAnimationFrame(animate)
    }
    const animate = () => {
      setColorOpacity((prev) => {
        const next = prev + (targetOpacityRef.current - prev) * 0.08 // interpolação suave
        if (Math.abs(next - targetOpacityRef.current) < 0.001)
          return targetOpacityRef.current
        rafRef.current = requestAnimationFrame(animate)
        return next
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  return (
    <div className='space-y-8' id='vale-financial-audit'>
      {/* Banner com transição de PB para COR conforme rolagem */}
      <div
        ref={heroRef}
        className='relative flex justify-center items-center overflow-hidden min-h-72 sm:h-72 md:h-80 lg:h-96 py-8 sm:py-0'
      >
        {/* Imagem PB (base) */}
        <Image
          src='/images/Seção2_PB.jpg'
          alt='Capa PB'
          fill
          priority
          sizes='100vw'
          className='object-cover blur-[1px] scale-105 will-change-transform'
        />
        {/* Imagem colorida com opacidade variável */}
        <Image
          src='/images/Seção2_PB.jpg'
          alt='Capa Colorida'
          fill
          priority
          sizes='100vw'
          style={{ opacity: colorOpacity }}
          className='object-cover blur-[1px] scale-105 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-opacity'
        />
        {/* Overlay para contraste do texto (clareia conforme ganha cor) */}
        <div
          className='absolute inset-0'
          style={{ backgroundColor: `rgba(0,0,0,${0.4 - 0.2 * colorOpacity})` }}
          aria-hidden='true'
        />
        <h1 className='relative z-[1] text-3xl md:text-4xl font-bold tracking-tight text-center content-container text-white drop-shadow-md'>
          Auditoria das obrigações de pagar da Vale, previstas nas Cláusulas
          4.4.1, 4.4.2, 4.4.3.1, 4.4.6, 4.4.8, 4.4.10, 4.4.13 do Acordo Judicial
          de Reparação, bem como obrigações de fazer da Vale S.A que venham ser
          convertidas em obrigações de pagar ao longo da execução do Acordo
          Judicial de Reparação Integral
        </h1>
      </div>
      <div className='content-container space-y-10'>
        <div className='space-y-6'>
          <div className='inline-flex items-end gap-4 border-b-4 pb-2 border-[#2e525a] pr-10'>
            <Image
              src='/icons/iconContextualizacao.png'
              alt='Ícone Acordo de Reparação'
              width={60}
              height={60}
            />
            <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>
              Contextualização
            </h2>
          </div>
          <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
            A EY é responsável pela auditoria das obrigações de pagar da Vale
            S.A., previstas nas cláusulas 4.4.1, 4.4.2, 4.4.3.1, 4.4.6, 4.4.7,
            4.4.8, 4.4.10, 4.4.13 do AJRI, bem como obrigações de fazer da Vale
            S.A. que venham a ser convertidas em obrigações de pagar ao longo da
            execução do Acordo, ressalvados os casos em que tal serviço de
            Auditoria já seja realizado por alguma outra Auditoria Externa
            Independente contratada.
          </p>
          <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
            Nesse sentido, o trabalho da EY consiste em verificar as evidências
            da realização, pela Vale, dos pagamentos definidos no âmbito das
            cláusulas descritas anteriormente, com o objetivo de verificar a
            aderência aos prazos previstos e aos valores corrigidos
            monetariamente conforme descrito na cláusula 4.6 do AJRI, que prevê:{' '}
            <span className='italic'>
              “Os valores previstos neste Acordo, salvo quando disposto
              expressamente em contrário, serão corrigidos monetariamente pela
              variação do Índice Nacional de Preços ao Consumidor Amplo - IPCA,
              ou outro índice que vier a substituí-lo, verificada entre a data
              da homologação deste Acordo e seu respectivo pagamento”.
            </span>
          </p>
          <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
            Ainda, para pagamentos realizados em atraso ou não realizados, caso
            seja aplicável, são verificadas evidências do pagamento de juros e
            multas calculados a partir das premissas descritas na cláusula 7.6
            do AJRI, na qual prevê que:{' '}
            <span className='italic'>
              “Eventual descumprimento de obrigação de pagar sujeitará a Vale à
              multa de 2% sobre o valor em atraso, e juros moratórios de 1% ao
              mês, calculados pro rata die (0,033% ao dia) entre a data do
              recebimento da notificação até o efetivo pagamento ou depósito. A
              partir da data do vencimento, incidirá atualização monetária sobre
              o valor em atraso com base no IPCA até a data do pagamento”.
            </span>
          </p>
          <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
          Ressalta-se que os resultados obtidos pela EY a partir do confronto entre os valores pagos pela Vale S.A. e o recálculo dos valores corrigidos monetariamente considerando o disposto na cláusula 4.6, acrescidos de eventuais multas e juros conforme previsto na cláusula 7.6 do AJRI, serão apresentados pela auditoria após definições quanto a metodologia de cálculo do IPCA e a data de trânsito em julgado da sentença homologatória do Acordo.​
          </p>
          <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
            Abaixo são apresentados os resultados dessa verificação:
          </p>
          <div className='mx-auto my-6 w-full max-w-5xl overflow-hidden border border-zinc-300 bg-zinc-50 p-2 shadow-md'>
            <PowerBiView
              title='Escopo D'
              src='https://app.powerbi.com/view?r=eyJrIjoiMmI3OGYxNzMtYmE4NS00ZTNiLWI0N2EtZjBmYjgzODYyYThlIiwidCI6IjViOTczZjk5LTc3ZGYtNGJlYi1iMjdkLWFhMGM3MGI4NDgyYyIsImMiOjh9'
              width={1100}
              height={620}
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}
