import { PlusIcon } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'
import PowerBiView from '@/components/my-components/power-bi-view'

export type AuditRole = {
  id: string
  title: string
  content: React.ReactNode
}

// Proporção das páginas dos relatórios de prestação de contas no Power BI.
const REPORT_WIDTH = 1280
const REPORT_HEIGHT = 797

export function RolesAccordion({ roles }: { roles: AuditRole[] }) {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-bold text-foreground'>
        Papéis e Responsabilidades
      </h2>
      <Accordion type='single' collapsible className='w-full'>
        {roles.map((role) => (
          <AccordionItem value={role.id} key={role.id} className='py-2'>
            <AccordionPrimitive.Header className='flex'>
              <AccordionPrimitive.Trigger className='text-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 py-2 text-left text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg]:stroke-primary [&>svg]:opacity-100 [&>svg]:transition-transform [&>svg]:duration-200 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'>
                {role.title}
                <PlusIcon
                  size={16}
                  className='pointer-events-none shrink-0'
                  aria-hidden='true'
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className='text-base leading-relaxed text-muted-foreground md:text-lg pb-2'>
              {role.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export function AuditResults({ title, src }: { title: string; src: string }) {
  return (
    <div className='space-y-4 pt-2'>
      <p className='font-medium text-foreground'>
        Os resultados obtidos pela auditoria são apresentados abaixo:
      </p>
      <PowerBiView
        title={title}
        src={src}
        width={REPORT_WIDTH}
        height={REPORT_HEIGHT}
      />
    </div>
  )
}
