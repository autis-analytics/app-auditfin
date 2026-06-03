import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const items = [
  {
    id: '1',
    title:
      'O que é o Acordo Judicial para Reparação Integral Relativa ao Rompimento das Barragens B-I, B-IV e B-IVA, da Mina Córrego do Feijão ("AJRI")?',
    content:
      'O Acordo define as obrigações de fazer e de pagar da Vale S.A., visando à reparação integral dos danos, impactos negativos e prejuízos socioambientais e socioeconômicos causados em decorrência do Rompimento e seus desdobramentos, conforme a solução e adequação técnicas definidas para cada situação, nos moldes estabelecidos no Acordo e em seus Anexos.',
  },
  {
    id: '2',
    title: 'Quem define o escopo da auditoria financeira?',
    content:
      'O escopo da auditoria financeira foi definido pelos Compromitentes do Acordo Judicial de Reparação Integral.',
  },
  {
    id: '3',
    title: 'Qual o objetivo do Portal da auditoria financeira?',
    content:
      'O portal foi construído com o objetivo de divulgar informações relacionadas ao escopo do trabalho da auditoria financeira e visão geral das verificações realizadas.',
  },
  {
    id: '4',
    title: 'Qual o objetivo da auditoria das prestações de contas das ATIs?',
    content:
      'O objetivo da auditoria independente é verificar amostralmente, por meio das prestações de contas das ATIs, a aderência dos gastos apresentados com o Plano de Trabalho e as atividades previstas.',
  },
  {
    id: '5',
    title: 'Onde estão definidos os valores das Obrigações de Pagar da Vale?',
    content:
      'Os valores das Obrigações de Pagar auditados pela EY estão apresentados em cláusulas do AJRI.',
  },
  {
    id: '6',
    title: 'Como é conduzido o trabalho da auditoria financeira?',
    content:
      'Todo o trabalho é realizado em base documental, considerando as premissas e diretrizes definidas nos documentos elaborados pelas demais entidades envolvidas no processo, como por exemplo: AJRI, Planos de Trabalho, Termo de Compromisso, Decisões judiciais e demais documentos aplicáveis.',
  },
  {
    id: '7',
    title:
      'O AJRI prevê a atuação de auditorias Socioeconômicas e Socioambientais, esses escopos também são executados pela EY?',
    content:
      'Não, esses escopos são executados atualmente por outras organizações.',
  },
  {
    id: '8',
    title:
      'Posso utilizar as informações apresentadas neste portal para outras finalidades?',
    content:
      'As informações apresentadas neste portal são públicas, no entanto não devem ser utilizadas para embasar outros trabalhos sem o consentimento prévio da EY.',
  },
]

export default function Fag() {
  return (
    <div id='faq' className='space-y-8'>
      <div className='bg-[url("/images/section-faq.jpg")] bg-cover bg-center bg-no-repeat h-64 flex justify-center items-center'>
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md'>
          Dúvidas Frequentes
        </h2>
      </div>
      <div className='content-container space-y-6'>
        <Accordion type='single' collapsible className='w-full'>
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id} className='py-2'>
              <AccordionTrigger className='text-foreground text-base md:text-lg leading-relaxed'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground text-base md:text-lg leading-relaxed [&>div]:transition-colors [&>div]:border-l-0 data-[state=open]:[&>div]:border-l-4 data-[state=open]:[&>div]:border-muted-foreground/70 data-[state=open]:[&>div]:pl-4'>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
