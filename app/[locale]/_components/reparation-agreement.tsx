import Accordion1 from '@/components/my-components/accordion-1'
import PowerBiView from '@/components/my-components/power-bi-view'
import SectionHeading from '@/components/my-components/section-heading'

export default function ReparationAgreement() {
  const thePartiesItems = [
    {
      key: '1',
      title: 'Compromitentes',
      content: (
        <p>
          Os compromitentes do acordo são: O Estado de Minas Gerais,
          representado pela Advocacia-Geral do Estado e por intermédio das
          Secretarias de Estado de Planejamento e Gestão - SEPLAG, de Meio
          Ambiente e Desenvolvimento Sustentável - SEMAD, Infraestrutura e
          Mobilidade - SEINFRA, e de Saúde - SES; o Ministério Público do Estado
          de Minas Gerais (MPMG); a Defensoria Pública do Estado de Minas Gerais
          (DPMG) e o Ministério Público Federal (MPF).
        </p>
      ),
    },
    {
      key: '2',
      title: 'Compromissária',
      content: (
        <p>A Compromissária do Acordo é a Vale S.A. (&quot;Vale&quot;).</p>
      ),
    },
  ]

  return (
    <div
      className='audit-section space-y-10'
      id='reparation-agreement'
      tabIndex={-1}
    >
      <SectionHeading
        number='01'
        eyebrow='CONTEXTO E ABRANGÊNCIA'
        title='O Acordo de Reparação'
      />
      {/* Seção: Introdução do Acordo */}
      <section className='agreement-context space-y-6'>
        <p className='md:text-lg'>
          No dia 25 de janeiro de 2019 ocorreu o Rompimento das Barragens B-I,
          B-IV e B-IVA, da Mina Córrego do Feijão, no município de Brumadinho,
          pertencentes ao Complexo Minerário Paraopeba II - Mina Córrego do
          Feijão, de responsabilidade da Vale S.A., que provocou danos
          ambientais, econômicos e sociais a direitos individuais, coletivos e
          difusos, afetando interesses públicos e privados.
        </p>
        <p className='md:text-lg'>
          Diante disso, em 04 de fevereiro de 2021 foi homologado o Acordo
          Judicial para Reparação Integral Relativa ao Rompimento das Barragens
          B-I, B-IV e B-IVA / Córrego Do Feijão entre a Vale e os Compromitentes
          (&quot;AJRI&quot;){' '}
          <span className='italic'>
            &quot;visando à reparação integral dos danos, impactos negativos e
            prejuízos socioambientais e socioeconômicos causados em decorrência
            do Rompimento, e seus desdobramentos, conforme a solução e adequação
            técnicas definidas para cada situação&quot;
          </span>
          .
        </p>
      </section>

      {/* Seção: As Partes */}
      <Accordion1
        items={thePartiesItems}
        title='As Partes do Acordo'
        id='the-parties'
        // espaçamento externo da seção
        className='space-y-4'
      />

      <hr />

      {/* Seção: Extensão Territorial */}
      <section id='territorial-extension' className='space-y-6'>
        <h3 className='subsection-title'>Extensão Territorial</h3>
        <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
          O Acordo Judicial para Reparação Integral (AJRI) abrange Brumadinho e
          outros 25 municípios diretamente atingidos, distribuídos em 5 regiões,
          que são atendidas pelas Assessorias Técnicas detalhadas abaixo:
        </p>
        <ul className='list-disc text-muted-foreground text-base md:text-lg leading-relaxed'>
          <li>
            Associação Estadual de Defesa Ambiental - AEDAS: responsável pelas
            Regiões 1 e 2 no período compreendido entre fevereiro de 2020 e
            janeiro de 2026;
          </li>
          <li>
            Instituto Brasileiro de Gestão e Pesquisa - IBGP: responsável pela
            Região 1, a partir de maio de 2026;
          </li>
          <li>
            Associação de Desenvolvimento Agrícola Interestadual - ADAI:
            responsável pela Região 2, a partir de maio de 2026;
          </li>
          <li>
            Núcleo de Assessoria às Comunidades Atingidas por Barragens - NACAB:
            responsável pela Região 3 desde fevereiro de 2020;
          </li>
          <li>
            Instituto Guaicuy: responsável pelas Regiões 4 e 5 desde fevereiro
            de 2020.
          </li>
        </ul>

        <PowerBiView src='https://app.powerbi.com/view?r=eyJrIjoiZDFiYzU3OTAtYzhhNS00MzU0LTk4MWQtZGE3OTViNjUzYWVkIiwidCI6IjViOTczZjk5LTc3ZGYtNGJlYi1iMjdkLWFhMGM3MGI4NDgyYyIsImMiOjh9' />
      </section>

      <section className='project-scope space-y-6' id='the-project'>
        <h3 className='subsection-title'>O Projeto</h3>
        <p>
          O projeto de Auditoria Financeira é fruto do Acordo Judicial para
          Reparação Integral relativa ao Rompimento das Barragens B I, B IV e B
          IV-A / Córrego do Feijão (&quot;AJRI&quot;) e abrange três escopos
          gerais de atuação:
        </p>
        <ul className='list-disc md:text-lg leading-relaxed space-y-4'>
          <li>
            Auditoria Independente das Obrigações Especificadas na cláusula
            4.4.11 do Acordo Judicial;
          </li>
          <li>
            Auditoria Independente das ATIs no âmbito do Anexo I.1 do Acordo
            Judicial; e
          </li>
          <li>
            Auditoria das obrigações de pagar da Vale, previstas nas Cláusulas
            4.4.1, 4.4.2, 4.4.3.1, 4.4.6, 4.4.7, 4.4.8, 4.4.10, 4.4.13 do Acordo
            Judicial de Reparação, bem como obrigações de fazer da Vale S.A que
            venham a ser convertidas em obrigações de pagar ao longo da execução
            do Acordo Judicial de Reparação Integral, ressalvados os casos em
            que tal serviço de auditoria já seja realizado por outra auditoria
            contratada;
          </li>
        </ul>
      </section>

      <section className='space-y-6 my-6 md:my-10' id='limits-of-action'>
        <h3 className='subsection-title'>Limites de Atuação</h3>
        <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
          O AJRI também prevê a atuação de uma auditoria socioeconômica e uma
          socioambiental, cujas atividades não são escopo de avaliação da EY.
          Diante do exposto, as informações aqui apresentadas se restringem às
          atividades informadas anteriormente como escopo deste Projeto.
        </p>
      </section>
    </div>
  )
}
