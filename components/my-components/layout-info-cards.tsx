import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LayoutInfoCardData {
  key: string
  title: string
  description: string
  buttonLink?: string
  buttonText?: string
}

interface LayoutInfoCardsProps {
  cards: LayoutInfoCardData[]
  className?: string
}

const LayoutInfoCards = React.forwardRef<HTMLDivElement, LayoutInfoCardsProps>(
  ({ cards, className, ...props }, ref) => {
    if (!cards?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn('grid gap-6 md:grid-cols-2 lg:grid-cols-3', className)}
        {...props}
      >
        {cards.map((card) => (
          <Card key={card.key} className='h-full'>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col h-full'>
              <CardDescription className='flex-1'>
                {card.description}
              </CardDescription>
              {card.buttonLink && (
                <Button
                  asChild
                  variant='ghost'
                  size='sm'
                  className='mt-4 w-fit p-0'
                >
                  <Link
                    href={card.buttonLink}
                    className='inline-flex items-center gap-2'
                  >
                    {card.buttonText || 'Saiba mais'}
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    )
  },
)

LayoutInfoCards.displayName = 'LayoutInfoCards'

export { LayoutInfoCards, type LayoutInfoCardData, type LayoutInfoCardsProps }
export default LayoutInfoCards
