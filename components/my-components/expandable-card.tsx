'use client'

import { useState } from 'react'
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

  return (
    <div
      className={cn(
        // card base e espaçamento com sombra combinada (baixo + esquerda)
        'p-6 md:p-8 space-y-4',
        'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1),-4px_0_6px_-1px_rgba(0,0,0,0.1),-2px_0_4px_-2px_rgba(0,0,0,0.1)]',
        className,
      )}
      {...props}
    >
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
          className='px-4 cursor-pointer'
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Recolher' : t('readMore')}
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform duration-300',
              isExpanded ? 'rotate-180' : 'rotate-0',
            )}
          />
        </Button>
      </div>

      <div
        className={cn(
          'transition-all duration-500 ease-in-out',
          isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden',
        )}
      >
        <div className='border-t pt-4 pb-2 text-muted-foreground text-base md:text-lg leading-relaxed space-y-4'>
          {children}
        </div>
      </div>
    </div>
  )
}
