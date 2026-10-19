export default function SectionHeading({
  number,
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
      <div className='chapter-kicker'>
        <span>{number}</span>
        {eyebrow}
      </div>
      <h2 id={id}>{title}</h2>
    </div>
  )
}
