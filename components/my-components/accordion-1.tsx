import { PlusIcon } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

type Item = {
  key: string
  title: string
  content: string | React.ReactNode
}

type Accordion1Props = {
  items: Item[]
  title?: string
  id?: string
  className?: string
}

export default function Accordion1({
  items,
  title,
  className,
  ...props
}: Accordion1Props) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      {/* Título da seção do acordeão - h2 secundário */}
      <h2 className='text-2xl md:text-3xl font-bold tracking-tight'>{title}</h2>
      <Accordion
        type='single'
        collapsible
        className='w-full space-y-4' // espaço entre os cards
      >
        {items.map((item) => (
          <AccordionItem
            value={item.key}
            key={item.key}
            className={cn(
              // card base
              'p-4 md:p-6 shadow-md',
              // barra lateral primária
              'border-l-4 border-l-primary',
            )}
          >
            <AccordionPrimitive.Header className='flex'>
              <AccordionPrimitive.Trigger
                className={cn(
                  // layout
                  'flex flex-1 items-center justify-between gap-2',
                  // visual e foco
                  'outline-none transition-all cursor-pointer',
                  'focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
                  // espaçamento
                  'py-2',
                  // linha separadora (apenas quando aberto)
                  'data-[state=open]:pb-4 data-[state=open]:border-b data-[state=open]:border-border',
                  // tipografia
                  'text-left text-xl md:text-2xl leading-8 font-semibold',
                  // estados
                  'disabled:pointer-events-none disabled:opacity-50',
                  // estilo do ícone
                  '[&>svg]:stroke-primary [&>svg]:opacity-100 [&>svg]:transition-transform [&>svg]:duration-200',
                  // animações do ícone
                  '[&>svg>path:last-child]:origin-center',
                  '[&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200',
                  '[&[data-state=open]>svg]:rotate-180',
                  '[&[data-state=open]>svg>path:last-child]:rotate-90',
                  '[&[data-state=open]>svg>path:last-child]:opacity-0',
                )}
              >
                {item.title}
                <PlusIcon
                  size={24} // ícone maior
                  className='pointer-events-none shrink-0'
                  aria-hidden='true'
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent
              className={cn(
                // tipografia e espaçamento do conteúdo
                'text-muted-foreground text-base md:text-lg leading-relaxed space-y-4 pt-2',
              )}
            >
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
