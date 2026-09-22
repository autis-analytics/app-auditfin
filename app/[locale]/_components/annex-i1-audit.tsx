import Image from 'next/image'
import PowerBiView from '@/components/my-components/power-bi-view'
import { PlusIcon } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'

const annexI1PowerBiUrl =
  'https://app.powerbi.com/view?r=eyJrIjoiNGFlMWM5ZGItNmVkMC00MmFmLWI3ZTEtM2I5YzMwYjNjYmQ5IiwidCI6IjViOTczZjk5LTc3ZGYtNGJlYi1iMjdkLWFhMGM3MGI4NDgyYyIsImMiOjh9'

const roles = [
  {
    id: 'annex-justice-institutions',
    title: 'Instituições de Justiça (IJs)',
    content: (
      <p>
        Compete às Instituições de Justiça acompanhar a atuação das ATIs e
        avaliar os resultados apresentados pela EY em seus relatórios, bem como
        deliberar sobre a autorização dos repasses de recursos às ATIs, com
        fundamento nos pareceres emitidos pela CAMF e nos relatórios de
        auditoria elaborados pela EY.
      </p>
    ),
  },
  {
    id: 'annex-atis',
    title: 'Assessorias Técnicas Independentes (ATIs)',
    content: (
      <p>
        As ATIs são responsáveis pela elaboração e apresentação adequada das
        informações financeiras e finalísticas relativas às atividades
        executadas e aos dispêndios realizados, em conformidade com as premissas
        estabelecidas nos instrumentos normativos aplicáveis.
      </p>
    ),
  },
  {
    id: 'annex-camf',
    title: 'Coordenação de Acompanhamento Metodológico e Finalístico (CAMF)',
    content: (
      <p>
        A CAMF é responsável pelo acompanhamento, monitoramento e avaliação da
        execução dos Planos de Trabalho, promovendo a coordenação e o
        alinhamento técnico, metodológico e financeiro entre as ATIs, com vistas
        à transparência, à integração das ações e à adequada utilização dos
        recursos. Além disso, é responsável por emitir parecer técnico acerca do
        trabalho desenvolvido pelas ATIs e atribuir nota de desempenho com base
        na análise das avaliações e dos relatórios produzidos.
      </p>
    ),
  },
  {
    id: 'annex-financial-audit',
    title: 'Auditoria Financeira e Finalística',
    content: (
      <div className='space-y-4'>
        <p>
          A EY é responsável por realizar, de forma amostral, a avaliação dos
          dispêndios apresentados pelas ATIs, com base nos extratos bancários,
          nas Relações de Pagamentos e na documentação suporte disponibilizada,
          bem como por executar procedimentos destinados à obtenção de
          evidências adequadas e suficientes para concluir acerca da
          conformidade desses dispêndios com os respectivos Termos de
          Compromisso, Planos de Trabalho e demais instrumentos aplicáveis.
        </p>
        <p>
          Adicionalmente, a EY realiza o acompanhamento das entregas reportadas
          como concluídas pelas ATIs nos Relatórios Trimestrais Finalísticos e
          Financeiros.
        </p>
        <p>
          A responsabilidade da EY compreende a emissão dos respectivos
          relatórios de avaliação financeira e finalística para cada frente de
          atuação.
        </p>
      </div>
    ),
  },
]

export default function AnnexI1Audit() {
  return (
    <section className='space-y-8' id='annex-i1-audit'>
      <div className='relative flex min-h-72 items-center justify-center overflow-hidden py-8 sm:h-72 sm:py-0 md:h-80 lg:h-96'>
        <Image
          src='/images/Capa_Cor.png'
          alt='Território abrangido pelo Acordo Judicial de Reparação Integral'
          fill
          sizes='100vw'
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/45' aria-hidden='true' />
        <h1 className='relative z-[1] mx-auto max-w-4xl px-4 text-center text-xl font-bold leading-snug tracking-tight text-white drop-shadow-md sm:px-6 sm:text-3xl md:text-4xl'>
          Auditoria Independente das ATIs no âmbito do Anexo I.1 do Acordo
          Judicial
        </h1>
      </div>

      <div className='content-container space-y-10'>
        <div className='max-w-5xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg'>
          <p>
            O Anexo I.1 do AJRI refere-se aos Projetos de Demandas das
            Comunidades Atingidas, no valor nominal de R$ 3.000.000.000,00 (três
            bilhões de reais), estabelecidos como modalidade de &ldquo;Obrigação
            de Pagar&rdquo; da Vale S.A.
          </p>
          <p>
            O referido Anexo contempla projetos a serem definidos pelas pessoas
            atingidas das Regiões 1 a 5, bem como fundos de financiamento,
            garantidores e equalizador voltados à diversificação econômica,
            agropecuários e agroindustriais - Crédito e microcrédito. Conforme o
            Termo de Compromisso, as ATIs devem prestar apoio técnico e
            organizacional à execução das atividades aos Projetos de Demandas
            das Comunidades Atingidas, em conformidade com as atividades
            previstas no Quadro de Entregas e Prazos.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Papéis e Responsabilidades
          </h2>
          <Accordion type='single' collapsible className='w-full'>
            {roles.map((role) => (
              <AccordionItem value={role.id} key={role.id} className='py-2'>
                <AccordionPrimitive.Header className='flex'>
                  <AccordionPrimitive.Trigger className='text-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 py-3 text-left text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg]:stroke-primary [&>svg]:opacity-100 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'>
                    {role.title}
                    <PlusIcon
                      size={16}
                      className='pointer-events-none shrink-0'
                      aria-hidden='true'
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className='text-base leading-relaxed text-muted-foreground md:text-lg'>
                  {role.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className='space-y-4'>
          <p className='font-medium text-foreground md:text-lg'>
            Os resultados obtidos pela auditoria são apresentados abaixo:
          </p>
          <div className='mx-auto w-full max-w-[600px] overflow-hidden border border-zinc-300 bg-zinc-50 p-2 shadow-md'>
            <PowerBiView
              title='Prestação de Contas - Anexo I.1'
              src={annexI1PowerBiUrl}
              width={600}
              height={373.5}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
