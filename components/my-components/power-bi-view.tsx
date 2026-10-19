'use client'
import React, { useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  src: string
  title?: string
  className?: string
  width?: string | number | undefined
  height?: string | number | undefined
}

const PowerBiView = ({
  src,
  title = 'Relatório Power BI',
  className,
  width,
  height,
}: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
  }, [])

  const isValidUrl = (url: string) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  if (!isValidUrl(src)) {
    return (
      <div
        className={cn(
          'relative w-full aspect-[21/9] md:aspect-[4/3] sm:aspect-[6/7]',
          'flex items-center justify-center bg-gray-100 border border-gray-300',
          'shadow-md',
          className,
        )}
      >
        <p className='text-red-600 text-sm'>URL inválida fornecida</p>
      </div>
    )
  }

  // Com width/height o relatório ganha moldura e proporção fixa: ocupa toda a
  // largura disponível, mas nunca fica mais alto que a área visível abaixo do
  // menu fixo (1366x768 e 1920x1080 exibem a página inteira do relatório).
  const aspectRatio =
    width && height ? Number(width) / Number(height) : undefined

  const frameStyle: React.CSSProperties | undefined = aspectRatio
    ? {
        maxWidth: `min(100%, ${width}px, calc((100svh - 8rem) * ${aspectRatio}))`,
      }
    : undefined

  return (
    <div
      className={cn(
        aspectRatio &&
          'mx-auto w-full overflow-hidden border border-zinc-300 bg-zinc-50 p-2 shadow-md',
      )}
      style={frameStyle}
    >
      <div
        className={cn(
          'relative w-full',
          !aspectRatio && 'md:aspect-[21/9] sm:aspect-[4/3] aspect-[3/4]',
        )}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-50'>
            <div className='flex flex-col items-center gap-2'>
              <div className='animate-spin h-8 w-8 border-b-2 border-blue-600'></div>
              <p className='text-sm text-gray-600'>Carregando relatório...</p>
            </div>
          </div>
        )}

        {hasError ? (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-50'>
            <div className='text-center'>
              <p className='text-red-600 text-sm mb-2'>
                Erro ao carregar o relatório
              </p>
              <button
                onClick={() => {
                  setHasError(false)
                  setIsLoading(true)
                }}
                className='text-blue-600 text-sm hover:underline'
              >
                Tentar novamente
              </button>
            </div>
          </div>
        ) : (
          <iframe
            title={title}
            src={src}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            sandbox='allow-scripts allow-same-origin allow-forms allow-popups allow-presentation'
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              'absolute inset-0 w-full h-full border-0 shadow-lg',
              className,
            )}
          />
        )}
      </div>
    </div>
  )
}

export default PowerBiView
