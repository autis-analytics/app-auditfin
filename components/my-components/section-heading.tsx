export default function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  number: string
  eyebrow: string
  title: string
  id?: string
}) {
  return (
    <div className='chapter-heading'>
      <p className='chapter-kicker'>
        {eyebrow.charAt(0) + eyebrow.slice(1).toLocaleLowerCase('pt-BR')}
      </p>
      <h2 id={id}>{title}</h2>
    </div>
  )
}
