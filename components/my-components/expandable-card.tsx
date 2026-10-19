'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

interface ExpandableCardProps {
  title: string
  description?: string | React.ReactNode
  children: React.ReactNode
  id?: string
  className?: string
}

export function ExpandableCard({
  title,
  description,
  children,
  className,
  ...props
}: ExpandableCardProps) {
  const t = useTranslations('common')
  const [isExpanded, setIsExpanded] = useState(false)
  const panelId = useId()

  return (
    <div className={cn('audit-expandable space-y-4', className)} {...props}>
      <h3 className='text-xl md:text-2xl font-semibold tracking-tight'>
        {title}
      </h3>
      {description &&
        (typeof description === 'string' ? (
          <p className='text-muted-foreground text-base md:text-lg leading-relaxed'>
            {description}
          </p>
        ) : (
          <div className='text-muted-foreground text-base md:text-lg leading-relaxed'>
            {description}
          </div>
        ))}

      <div>
        <Button
          size='lg'
          onClick={() => setIsExpanded(!isExpanded)}
          variant='outline'
          className='expand-audit-button'
          aria-expanded={isExpanded}
          aria-controls={panelId}
        >
          {isExpanded ? 'Recolher detalhes' : t('readMore')}
          <span className='sr-only'>: {title}</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-300',
              isExpanded ? 'rotate-180' : 'rotate-0',
            )}
          />
        </Button>
      </div>

      <div id={panelId} hidden={!isExpanded}>
        <div className='border-t pt-4 pb-2 text-muted-foreground text-base md:text-lg leading-relaxed space-y-4'>
          {children}
        </div>
      </div>
    </div>
  )
}
