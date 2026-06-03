import Image from 'next/image'

export default function TermsOfUse() {
  return (
    <div id='terms-of-use' className='space-y-8'>
      <div className='bg-[url("/images/section-terms-of-use.jpg")] bg-cover bg-center bg-no-repeat h-64 flex justify-center items-center'>
        <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md'>
          Termos de Uso
        </h2>
      </div>
      <div className='content-container space-y-4 text-base md:text-lg leading-relaxed'>
        <div className='inline-flex items-end gap-4 border-b-4 pb-2 border-[#2e525a] pr-10'>
          <Image
            src='/icons/iconLimitacoesPermissas.png'
            alt='Ícone Acordo de Reparação'
            width={60}
            height={60}
          />
          <h3 className='text-xl font-semibold'>
            Limitação e Responsabilidades
          </h3>
        </div>

        <p>
          Os materiais e informações disponibilizados neste site são fornecidos
          &quot;como estão&quot; e &quot;conforme disponíveis&quot;. A EY não
          garante a precisão, integridade ou atualidade das informações
          apresentadas. Em nenhuma circunstância, a EY será responsável por
          quaisquer danos diretos, indiretos, incidentais, especiais ou
          consequenciais que possam resultar do uso ou da incapacidade de uso
          das informações contidas neste site. O usuário concorda em utilizar as
          informações e serviços oferecidos por este site por sua própria conta
          e risco.
        </p>

        <p>
          Em nenhuma hipótese a EY, suas afiliadas ou subsidiárias, bem como
          seus diretores, agentes, colaboradores, poderão ser responsabilizados
          por danos de natureza indireta, incidental, consequencial, especial,
          exemplar, punitivo ou qualquer outro tipo que possa resultar ou estar
          de alguma forma associado às informações apresentadas no portal.
        </p>
        <hr />
        <div className='inline-flex items-end gap-4 border-b-4 pb-2 border-[#2e525a] pr-10'>
          <Image
            src='/icons/iconPropriedadeIntelectual.png'
            alt='Ícone Acordo de Reparação'
            width={60}
            height={60}
          />
          <h3 className='text-xl font-semibold'>Propriedade Intelectual</h3>
        </div>
        <p>
          Todo o conteúdo deste site, incluindo textos, gráficos, logotipos,
          imagens e software, é protegido por leis de propriedade intelectual e
          é de propriedade da EY ou de seus licenciadores. O uso não autorizado
          de qualquer material contido neste site pode violar direitos autorais,
          marcas registradas e outras leis. O usuário não pode reproduzir,
          distribuir, modificar ou criar obras derivadas sem a autorização
          expressa da EY.
        </p>
        <hr />
        <div className='inline-flex items-end gap-4 border-b-4 pb-2 border-[#2e525a] pr-10'>
          <Image
            src='/icons/iconDadosApresentadosPortal.png'
            alt='Ícone Acordo de Reparação'
            width={60}
            height={60}
          />
          <h3 className='text-xl font-semibold'>
            Dados apresentados no Portal
          </h3>
        </div>
        <p>
          Os resultados apresentados neste portal se referem às informações que
          nos foram disponibilizadas durante a execução dos procedimentos,
          podendo haver outras informações que não chegaram ao nosso
          conhecimento e que possam refletir em mudanças nos resultados obtidos.
        </p>
      </div>
    </div>
  )
}
