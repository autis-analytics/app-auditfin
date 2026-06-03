import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface LayoutInfoBaseProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
  id?: string
}

const LayoutInfoBase = ({
  title,
  description,
  children,
  className,
  id,
}: LayoutInfoBaseProps) => {
  return (
    <div id={id || title} className={cn('space-y-6', className)}>
      <div className='space-y-2'>
        <h1 className='text-2xl font-semibold tracking-tight md:text-3xl sm:text-center'>
          {title}
        </h1>
        {description && <p className='text-muted-foreground'>{description}</p>}
      </div>
      <div className='space-y-4'>{children}</div>
    </div>
  )
}

export default LayoutInfoBase
