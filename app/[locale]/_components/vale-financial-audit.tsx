import PowerBiView from '@/components/my-components/power-bi-view'
import SectionHeading from '@/components/my-components/section-heading'

export default function ValeFinancialAudit() {
  return (
    <div
      className='audit-section space-y-8'
      id='vale-financial-audit'
      tabIndex={-1}
    >
      <SectionHeading
        number='04'
        eyebrow='OBRIGAÇÕES FINANCEIRAS'
        title='Auditoria das obrigações de pagar da Vale'
      />
      <p className='section-description'>
        Auditoria das obrigações de pagar da Vale, previstas nas Cláusulas
        4.4.1, 4.4.2, 4.4.3.1, 4.4.6, 4.4.8, 4.4.10, 4.4.13 do Acordo Judicial
        de Reparação, bem como obrigações de fazer da Vale S.A que venham ser
        convertidas em obrigações de pagar ao longo da execução do Acordo
        Judicial de Reparação Integral
      </p>
      <div className='content-container space-y-10'>
        <div className='space-y-6'>
          <div>
            <h3 className='subsection-title'>Contextualização</h3>
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
            Ressalta-se que os resultados obtidos pela EY a partir do confronto
            entre os valores pagos pela Vale S.A. e o recálculo dos valores
            corrigidos monetariamente considerando o disposto na cláusula 4.6,
            acrescidos de eventuais multas e juros conforme previsto na cláusula
            7.6 do AJRI, serão apresentados pela auditoria após definições
            quanto a metodologia de cálculo do IPCA e a data de trânsito em
            julgado da sentença homologatória do Acordo.​
          </p>
          <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
            Abaixo são apresentados os resultados dessa verificação:
          </p>
          <div className='report-host'>
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
