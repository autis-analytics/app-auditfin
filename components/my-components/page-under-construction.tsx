'use client'

import { Construction, Hammer, Wrench } from 'lucide-react'
import { Spinner } from '../ui/kibo-ui/spinner'
import { Progress } from '../ui/progress'
import { useState, useEffect } from 'react'

const PageUnderConstruction = () => {
  const [progress, setProgress] = useState(20)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          return Math.floor(Math.random() * 41) + 10
        }
        const randomIncrement = Math.floor(Math.random() * 8) + 3
        return Math.min(prev + randomIncrement, 100)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center text-center'>
      {/* Animated construction icons */}
      <div className='relative'>
        {/* Main construction icon */}
        <div className='relative'>
          <Construction className='h-20 w-20 text-primary' />

          {/* Animated hammer */}
          <div className='absolute -left-3 -top-2 animate-bounce'>
            <Hammer className='h-8 w-8 text-primary rotate-45' />
          </div>

          {/* Animated wrench */}
          <div className='absolute -right-2 -bottom-1 animate-pulse'>
            <Wrench className='h-6 w-6 text-primary/70 -rotate-12' />
          </div>
        </div>

        {/* Animated dots representing work in progress */}

        <Spinner
          variant='ellipsis'
          size={50}
          className='text-primary mx-auto'
        />
      </div>

      {/* Content */}
      <div className='max-w-md space-y-4'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground md:text-4xl'>
          Em construção
        </h1>

        <p className='text-muted-foreground text-lg leading-relaxed'>
          Estamos trabalhando duro para trazer algo incrível para você. Esta
          página está em desenvolvimento e estará disponível em breve.
        </p>

        <div className='text-sm text-muted-foreground/80'>
          Obrigado pela sua paciência
        </div>
      </div>

      {/* Animated progress bar */}
      <div className='w-full max-w-xs mt-3'>
        <Progress value={progress} />
      </div>
    </div>
  )
}

export default PageUnderConstruction
