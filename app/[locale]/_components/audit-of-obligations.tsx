import PowerBiView from '@/components/my-components/power-bi-view'
import Image from 'next/image'
// import { useTranslations } from 'next-intl'
import { ExpandableCard } from '@/components/my-components/expandable-card'

import { PlusIcon } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'

const items = [
  {
    id: '1',
    title: 'Instituições de Justiça (IJs)',
    content: (
      <>
        <p>
          As Instituições de Justiça são responsáveis por avaliar, acompanhar e
          solicitar que as Assessorias Técnicas Independentes (ATIs) realizem
          eventuais modificações necessárias nos Planos de Trabalho, contando
          para isso com o apoio da Coordenação de Acompanhamento Metodológico e
          Finalístico (CAMF). Adicionalmente, cabe às Instituições de Justiça
          avaliar e tomar providências quanto aos resultados apresentados pela
          EY nos relatórios.
        </p>
      </>
    ),
  },
  {
    id: '2',
    title: 'Assessorias Técnicas Independentes (ATIs)',
    content: (
      <div className='space-y-4'>
        <p>
          Em audiência judicial realizada no dia 20/02/2019, determinou-se a
          obrigatoriedade da Companhia Vale S/A custear a contratação de
          entidades que prestarão serviços de Assessoria Técnica Independente
          multidisciplinar às comunidades atingidas em razão do rompimento. O
          Ministério Público do Estado de Minas Gerais (MPMG), o Ministério
          Público Federal (MPF), a Defensoria Pública do Estado de Minas Gerais
          (DPMG) e a Defensoria Pública da União (DPU) (&quot;Instituições de
          Justiça&quot;) realizaram o chamamento público de entidades sem fins
          lucrativos interessadas na prestação de assessoria técnica
          independente às pessoas atingidas pelo rompimento da Barragem B-I e
          soterramento das Barragens B-IV e B-IV A da Mina Córrego do Feijão,
          ocorrido em Brumadinho/MG (&quot;Rompimento&quot;).
        </p>
        <p>
          Para tal, foi elaborado o Edital de Chamamento Público e o respectivo
          Termo de Referência, que foram base para o processo de escolha das
          entidades. Após as inscrições, as Instituições de Justiça realizaram o
          credenciamento das entidades e posteriormente cada entidade se
          apresentou à região a qual se inscreveu.
        </p>
        <p>
          As entidades que prestam o serviço de Assessoria Técnica Independente
          (ATI) foram eleitas através de votos dos integrantes das comissões de
          pessoas/comunidades atingidas de cada região. Uma vez escolhidas, as
          entidades de Assessoria Técnica elaboraram seus Planos de Trabalho e
          Planilhas de Orçamento Detalhado (&quot;Plano de Trabalho&quot;).
        </p>
        <p>
          Em 17 de julho de 2023 houve a assinatura de nova versão do Termo de
          Compromisso no âmbito do Acordo Judicial para Reparação integral dos
          Danos coletivos relativos ao rompimento das Barragens B-I, B-IV e
          B-IVA/ Córrego do Feijão, firmado entre as Instituições de Justiça,
          Assessorias Técnicas Independentes e Coordenação de Acompanhamento
          Metodológico e Finalístico.
        </p>
        <p>
          Neste documento foi definido que as ATIs prestarão apoio e orientação
          às pessoas atingidas no processo de reparação do Acordo Judicial, pelo
          prazo de 30 meses, e sem prejuízo da participação e do acesso direto
          das pessoas atingidas aos órgãos judiciários e administrativos, com
          vistas à referida reparação integral, devendo ser prestados, no
          mínimo, os seguintes escopos:
        </p>
        <ul className='list-decimal [&>li::marker]:font-bold pl-8'>
          <li>
            Apoio técnico e organizacional na definição dos projetos de
            interesse das comunidades, no âmbito do anexo I.1;
          </li>
          <li>
            Apoio na participação das comunidades autorreconhecidas como Povos e
            Comunidades Tradicionais (PCTs) contempladas com projetos, no âmbito
            das etapas decorrentes da Consulta Popular específica;
          </li>
          <li>
            Apoio à participação informada das pessoas atingidas, na defesa e
            garantida de seus direitos quanto à execução e cumprimento dos
            termos do Acordo Judicial e seus respectivos anexos.
          </li>
        </ul>
        <p>
          Em relação à prestação de contas, as ATIs são responsáveis por
          apresentar as informações relacionadas aos dispêndios efetuados, os
          quais devem ser elaboradas de acordo com as premissas estabelecidas no
          Termo de Compromisso, celebrado entre a CAMF, as ATIs e o Ministério
          Público do Estado de Minas Gerais (MPMG), o Ministério Público Federal
          (MPF), a Defensoria Pública do Estado de Minas Gerais (DPMG) e a
          Defensoria Pública da União (DPU), coletivamente denominadas como (
          <span className='italic'>
            “Instituições da Justiça ou Compromitentes”
          </span>
          ).
        </p>
        <p>
          Cabe ainda à administração da ATI, a implementação dos controles
          internos determinados por ela como necessários para permitir que as
          referidas informações estejam livres de distorções relevantes,
          independentemente se causadas por erro ou fraude.
        </p>
        <p>
          A responsabilidade pelos dispêndios, sua classificação, alocação, bem
          como a salvaguarda de documentos que suportam a adequada utilização
          dos recursos recebidos, tendo em vista sua finalidade, é da
          administração da ATI.
        </p>
        <p>
          Adicionalmente, a ATI é responsável por realizar a classificação
          manual dos lançamentos apresentados na Relação de Pagamentos,
          considerando a rubrica dos mesmos conforme Plano de Trabalho aprovado.
        </p>
      </div>
    ),
  },
  {
    id: '3',
    title: 'Coordenação de Acompanhamento Metodológico e Finalístico (CAMF)',
    content: (
      <p>
        A CAMF é responsável por acompanhar, monitorar e avaliar os Planos de
        Trabalho das Assessorias Técnicas Independentes (ATIs) conforme os
        termos do Acordo Judicial celebrado em 04 de fevereiro de 2021, no
        atendimento às comunidades atingidas pelo rompimento da Barragem B-I e o
        soterramento das Barragens B-IV e IV-A, promovendo o alinhamento
        técnico, metodológico e financeiro entre as entidades, visando a
        transparência e o bom uso dos recursos.
      </p>
    ),
  },
  {
    id: '4',
    title: 'Auditoria Financeira',
    content: (
      <p>
        A EY é responsável por realizar uma avaliação de forma amostral, sobre
        os dispêndios apresentados na prestação de contas pelas Assessorias
        Técnicas Independentes (“ATIs”) e pela Coordenação de Acompanhamento
        Metodológico e Finalístico (“CAMF”) no âmbito do Termo de Compromisso
        firmado em 17 de julho de 2023 (“TC”). Este trabalho envolve a execução
        de procedimentos selecionados para obtenção de evidências adequadas e
        suficientes de que os dispêndios apresentados pelas ATIs e CAMF estão
        aderentes com o estabelecido no Termo de Compromisso, Plano de Trabalho
        e demais documentações pertinentes.
      </p>
    ),
  },
]

export default function AuditOfObligations() {
  // const t = useTranslations('pages.audit4411')
  // const t700Million = useTranslations('pages.overviewClause4411700Million')

  return (
    <div className='space-y-8' id='audit-of-obligations'>
      {/* Título com imagem de fundo */}
      <div
        className={
          // banner container: mais altura no mobile para evitar corte do título
          'relative flex justify-center items-center overflow-hidden min-h-72 sm:h-72 md:h-80 lg:h-96 py-8 sm:py-0'
        }
      >
        {/* Background image com leve blur para contraste */}
        <Image
          src='/images/Seção1_PB.jpg'
          alt='Seção 1'
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        {/* Overlay para reforçar legibilidade do texto */}
        <div className='absolute inset-0 bg-black/30' aria-hidden='true' />
        <h1 className='relative z-[1] text-xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug text-center max-w-3xl mx-auto px-4 sm:px-6 text-white drop-shadow-md'>
          Auditoria Independente das Obrigações Especificadas na cláusula 4.4.11
          do Acordo Judicial
        </h1>
      </div>
      <div className='content-container space-y-10'>
        <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
        De acordo com a cláusula 4.4.11 do Acordo, a quantia de R$ 700.000.000,00 (setecentos milhões) será destinada à contratação de estruturas de apoio, inclusive auditorias e assessorias técnicas independentes. Ainda de acordo com a Cláusula 4.6, os valores previstos no Acordo, salvo quando disposto expressamente em contrário, serão corrigidos monetariamente pelo IPCA, verificada entre a data de homologação do Acordo e seu respectivo pagamento.​
        </p>
        <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
          No contexto dessa cláusula a EY executa os seguintes escopos:
        </p>

        <ExpandableCard
          title='Panorama da Cláusula 4.4.11 - R$ 700 milhões'
          className='bg-zinc-200'
          description={
            <ul className='list-disc'>
              <li>
                Análise da regularidade dos valores pagos pela Vale S.A. desde a
                data de assinatura do Acordo, em fevereiro de 2021, para
                contratação de estruturas de apoio, auditorias e assessorias
                técnicas independentes;
              </li>
              <li>
                Controle financeiro dos valores pagos e a pagar referente ao
                valor global de R$700 milhões, para fins de controle de fluxo de
                caixa e avaliação dos contratos a serem definidos para
                estruturas de apoio eventualmente contratadas pela Vale.
              </li>
            </ul>
          }
          id='audit-of-obligations-700-million'
        >
          <div className='space-y-4'>
            <p>
              Nesta frente de trabalho a EY realiza o acompanhamento dos valores
              relacionados a cláusula 4.4.11, assim como o recálculo do saldo a
              partir do previsto na cláusula 4.6 do Acordo, na qual dispõe que:
            </p>
            <p className='italic'>
              “Os valores previstos neste Acordo, salvo quando disposto
              expressamente em contrário, serão corrigidos monetariamente pela
              variação do Índice Nacional de Preços ao Consumidor Amplo - IPCA,
              ou outro índice que vier a substituí-lo, verificada entre a data
              da homologação deste Acordo e seu respectivo pagamento.”
            </p>
            <p>
              Até o momento foram identificados pagamentos relacionados às
              seguintes partes:
            </p>

            <ul className='list-disc'>
              <li>
                <b>Assessorias Técnicas Independentes (ATIs): </b> Composição
                dos valores recebidos pelas ATIs. Conforme verificado nos
                extratos bancários das entidades.
              </li>
              <li>
                <b>
                  Coordenação de Acompanhamento Metodológico e Finalístico
                  (CAMF):
                </b>{' '}
                Valores recebidos pela CAMF. Conforme verificado nos extratos
                bancários da Coordenação.
              </li>
              <li>
                <b>Auditorias:</b> Valores recebidos pela Auditoria
                Socioecônomica e Auditoria Financeira, verificados a partir dos
                boletins de medição e comprovantes bancários.
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
              Destaca-se que de acordo com o Ofício emitido em 16 de novembro de
              2022, publicado nos autos de nº. 5071521-44.2019.8.13.0024 pelo
              MINISTÉRIO PÚBLICO DO ESTADO DE MINAS GERAIS, DEFENSORIA PÚBLICA
              DO ESTADO DE MINAS GERAIS, e MINISTÉRIO PÚBLICO FEDERAL
              (“Instituições de Justiça”), o aporte realizado pela Vale destinado
              ao Processo não deve ser descontado dos R$ 700.000.000,00
              previstos na cláusula 4.4.11 do Acordo. No entanto, considerando
              que a definição sobre a origem dos recursos para pagar as
              diferentes despesas das ATIs &apos;do Acordo&apos; e &apos;do Processo&apos;
              ainda estão em discussão judicial, sem decisão definitiva
              transitada em julgado, para esta análise, as despesas do processo
              também foram consideradas como recursos do item 4.4.11.
            </p>
          </div>
        </ExpandableCard>

        <ExpandableCard
          title='Auditoria da Prestação de Contas mensal das Assessorias Técnicas Independentes (ATIs) e da Coordenação de Acompanhamento Metodológico e Finalístico (CAMF)'
          description='Consiste na análise do cumprimento do plano de trabalho definido pelas Instituições de Justiça; avaliação da adequabilidade dos gastos em relação aos objetivos propostos e análise da prestação de contas mensal apresentada pelas três Assessorias Técnicas Independentes escolhidas pelas Comunidades integrantes das 5 Regiões predeterminadas e da Coordenação de Acompanhamento Metodológico e Finalístico (CAMF).'
          id='audit-of-obligations-monthly-accounting'
          className='bg-zinc-200'
        >
          <div className='space-y-4'>
            <h2 className='text-xl font-bold text-foreground'>
              Papéis e Responsabilidades
            </h2>
            <Accordion type='single' collapsible className='w-full'>
              {items.map((item) => (
                <AccordionItem value={item.id} key={item.id} className='py-2'>
                  <AccordionPrimitive.Header className='flex'>
                    <AccordionPrimitive.Trigger className='text-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg]:stroke-primary [&>svg]:opacity-100 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'>
                      {item.title}
                      <PlusIcon
                        size={16}
                        className='pointer-events-none shrink-0'
                        aria-hidden='true'
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className='text-muted-foreground pb-2'>
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <hr className='border-gray-300' />
          </div>
        </ExpandableCard>
      </div>
    </div>
  )
}
