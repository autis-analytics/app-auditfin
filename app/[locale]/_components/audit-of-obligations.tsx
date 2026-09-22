import PowerBiView from '@/components/my-components/power-bi-view'
import Image from 'next/image'
import { ExpandableCard } from '@/components/my-components/expandable-card'
import { PlusIcon } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'

const participationInformedPowerBiUrl =
  'https://app.powerbi.com/view?r=eyJrIjoiNTI0YjhlM2QtNGM5NS00OTIwLWFiYmMtZTBkZmQxZjBiYmJmIiwidCI6IjViOTczZjk5LTc3ZGYtNGJlYi1iMjdkLWFhMGM3MGI4NDgyYyIsImMiOjh9'

const camfPowerBiUrl =
  'https://app.powerbi.com/view?r=eyJrIjoiNTRlYWU2MGItZDg3NC00NDE4LWIzOWMtNDVkNjBiYzc0ZjViIiwidCI6IjViOTczZjk5LTc3ZGYtNGJlYi1iMjdkLWFhMGM3MGI4NDgyYyIsImMiOjh9'

const roles = [
  {
    id: 'justice-institutions',
    title: 'Instituições de Justiça (IJs)',
    content: (
      <p>
        Compete às Instituições de Justiça acompanhar os trabalhos das
        Assessorias Técnicas Independentes (ATIs) e CAMF, aprovar os Planos de
        Trabalho e avaliar os resultados apresentados pela EY em seus
        relatórios.
      </p>
    ),
  },
  {
    id: 'atis',
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
    id: 'camf',
    title: 'Coordenação de Acompanhamento Metodológico e Finalístico (CAMF)',
    content: (
      <p>
        A CAMF é responsável pelo acompanhamento, monitoramento e avaliação da
        execução dos Planos de Trabalho, promovendo a coordenação e o
        alinhamento técnico, metodológico e financeiro entre as ATIs, com vistas
        à transparência, à integração das ações e à adequada utilização dos
        recursos.
      </p>
    ),
  },
  {
    id: 'financial-audit',
    title: 'Auditoria Financeira',
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

function RolesAccordion() {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold text-foreground'>
        Papéis e Responsabilidades
      </h2>
      <Accordion type='single' collapsible className='w-full'>
        {roles.map((role) => (
          <AccordionItem value={role.id} key={role.id} className='py-2'>
            <AccordionPrimitive.Header className='flex'>
              <AccordionPrimitive.Trigger className='text-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 py-2 text-left text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg]:stroke-primary [&>svg]:opacity-100 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'>
                {role.title}
                <PlusIcon
                  size={16}
                  className='pointer-events-none shrink-0'
                  aria-hidden='true'
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className='text-muted-foreground pb-2'>
              {role.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

function AuditResults({ title, src }: { title: string; src: string }) {
  return (
    <div className='space-y-4 pt-2'>
      <p className='font-medium text-foreground'>
        Os resultados obtidos pela auditoria são apresentados abaixo:
      </p>
      <div className='mx-auto w-full max-w-[600px] overflow-hidden border border-zinc-300 bg-zinc-50 p-2 shadow-md'>
        <PowerBiView title={title} src={src} width={600} height={373.5} />
      </div>
    </div>
  )
}

export default function AuditOfObligations() {
  return (
    <div className='space-y-8' id='audit-of-obligations'>
      <div className='relative flex min-h-72 items-center justify-center overflow-hidden py-8 sm:h-72 sm:py-0 md:h-80 lg:h-96'>
        <Image
          src='/images/Seção1_PB.jpg'
          alt='Documentos e gráficos de auditoria financeira'
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/30' aria-hidden='true' />
        <h1 className='relative z-[1] mx-auto max-w-3xl px-4 text-center text-xl font-bold leading-snug tracking-tight text-white drop-shadow-md sm:px-6 sm:text-3xl md:text-4xl'>
          Auditoria Independente das Obrigações Especificadas na cláusula 4.4.11
          do Acordo Judicial
        </h1>
      </div>

      <div className='content-container space-y-10'>
        <p className='text-base leading-relaxed text-muted-foreground md:text-lg'>
          De acordo com a cláusula 4.4.11 do Acordo, a quantia de R$
          700.000.000,00 (setecentos milhões) será destinada à contratação de
          estruturas de apoio, inclusive auditorias e assessorias técnicas
          independentes. Ainda de acordo com a Cláusula 4.6, os valores
          previstos no Acordo, salvo quando disposto expressamente em contrário,
          serão corrigidos monetariamente pelo IPCA, verificada entre a data de
          homologação do Acordo e seu respectivo pagamento.
        </p>
        <p className='text-base leading-relaxed text-muted-foreground md:text-lg'>
          No contexto dessa cláusula a EY executa os seguintes escopos:
        </p>

        <ExpandableCard
          title='Panorama da Cláusula 4.4.11 - R$ 700 milhões'
          className='bg-zinc-200'
          description={
            <ul className='list-disc space-y-2'>
              <li>
                Análise da regularidade dos valores pagos pela Vale S.A. desde a
                data de assinatura do Acordo, em fevereiro de 2021, para
                contratação de estruturas de apoio, auditorias e assessorias
                técnicas independentes;
              </li>
              <li>
                Controle financeiro dos valores pagos e a pagar referente ao
                valor global de R$ 700 milhões, para fins de controle de fluxo
                de caixa e avaliação dos contratos a serem definidos para
                estruturas de apoio eventualmente contratadas pela Vale.
              </li>
            </ul>
          }
          id='audit-of-obligations-700-million'
        >
          <div className='space-y-4'>
            <p>
              Nesta frente de trabalho a EY realiza o acompanhamento dos valores
              relacionados à cláusula 4.4.11, assim como o recálculo do saldo a
              partir do previsto na cláusula 4.6 do Acordo, na qual dispõe que:
            </p>
            <p className='italic'>
              &ldquo;Os valores previstos neste Acordo, salvo quando disposto
              expressamente em contrário, serão corrigidos monetariamente pela
              variação do Índice Nacional de Preços ao Consumidor Amplo - IPCA,
              ou outro índice que vier a substituí-lo, verificada entre a data
              da homologação deste Acordo e seu respectivo pagamento.&rdquo;
            </p>
            <p>
              Até o momento foram identificados pagamentos relacionados às
              seguintes partes:
            </p>
            <ul className='list-disc space-y-2'>
              <li>
                <strong>Assessorias Técnicas Independentes (ATIs): </strong>
                Composição dos valores recebidos pelas ATIs, conforme verificado
                nos extratos bancários das entidades.
              </li>
              <li>
                <strong>
                  Coordenação de Acompanhamento Metodológico e Finalístico
                  (CAMF):{' '}
                </strong>
                Valores recebidos pela CAMF, conforme verificado nos extratos
                bancários da Coordenação.
              </li>
              <li>
                <strong>Auditorias: </strong>
                Valores recebidos pela Auditoria Socioeconômica e Auditoria
                Financeira, verificados a partir dos boletins de medição e
                comprovantes bancários.
              </li>
            </ul>
            <div className='mx-auto my-6 w-full max-w-5xl overflow-hidden border border-zinc-300 bg-zinc-50 p-2 shadow-md'>
              <PowerBiView
                title='Cláusula 4.4.11'
                src='https://app.powerbi.com/view?r=eyJrIjoiMWJlYTE5YzMtNzBmMS00ZjdkLWI4MDctMjllZTI0MjMzNTIxIiwidCI6IjViOTczZjk5LTc3ZGYtNGJlYi1iMjdkLWFhMGM3MGI4NDgyYyIsImMiOjh9'
                width={1100}
                height={620}
              />
            </div>
            <p>
              Destaca-se que, de acordo com o Ofício emitido em 16 de novembro
              de 2022, publicado nos autos de nº 5071521-44.2019.8.13.0024 pelo
              MINISTÉRIO PÚBLICO DO ESTADO DE MINAS GERAIS, DEFENSORIA PÚBLICA
              DO ESTADO DE MINAS GERAIS e MINISTÉRIO PÚBLICO FEDERAL
              (&ldquo;Instituições de Justiça&rdquo;), o aporte realizado pela
              Vale destinado ao Processo não deve ser descontado dos R$
              700.000.000,00 previstos na cláusula 4.4.11 do Acordo. No entanto,
              considerando que a definição sobre a origem dos recursos para
              pagar as diferentes despesas das ATIs &apos;do Acordo&apos; e
              &apos;do Processo&apos; ainda está em discussão judicial, sem
              decisão definitiva transitada em julgado, para esta análise, as
              despesas do processo também foram consideradas como recursos do
              item 4.4.11.
            </p>
          </div>
        </ExpandableCard>

        <ExpandableCard
          title='Auditoria da Prestação de Contas das Assessorias Técnicas Independentes (ATIs) no âmbito da Participação Informada'
          description={
            <div className='space-y-3'>
              <p>
                Consiste na avaliação do cumprimento dos Planos de Trabalho
                elaborados pelas ATIs e aprovados pelas Instituições de Justiça,
                na verificação da adequação dos gastos aos objetivos propostos e
                na análise das prestações de contas financeiras e finalísticas
                apresentadas pelas Assessorias Técnicas Independentes,
                escolhidas pelas comunidades das cinco regiões, no âmbito da
                Participação Informada¹. O escopo também contempla a avaliação
                da prestação de contas financeira apresentada pela Coordenação
                de Acompanhamento Metodológico e Finalístico (CAMF).
              </p>
              <p className='text-sm leading-relaxed'>
                ¹ Consiste no apoio à participação informada das pessoas
                atingidas, na defesa e garantia de seus direitos quanto à
                execução e cumprimento dos termos do Acordo Judicial e seus
                respectivos anexos.
              </p>
            </div>
          }
          id='audit-of-obligations-participation-accounting'
          className='bg-zinc-200'
        >
          <div className='space-y-8'>
            <RolesAccordion />
            <AuditResults
              title='Prestação de Contas - Participação Informada'
              src={participationInformedPowerBiUrl}
            />
          </div>
        </ExpandableCard>

        <ExpandableCard
          title='Auditoria da Prestação de Contas da Coordenação de Acompanhamento Metodológico e Finalístico (CAMF)'
          description='Consiste na análise do cumprimento do Plano de Trabalho, na avaliação da adequação dos gastos aos objetivos e atividades previstos e na verificação da prestação de contas financeira apresentada pela Coordenação de Acompanhamento Metodológico e Finalístico (CAMF).'
          id='camf-accountability-audit'
          className='bg-zinc-200'
        >
          <AuditResults
            title='Prestação de Contas - CAMF'
            src={camfPowerBiUrl}
          />
        </ExpandableCard>
      </div>
    </div>
  )
}
