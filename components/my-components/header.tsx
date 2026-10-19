import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Navbar from './navbar'

const Header = () => {
  const t = useTranslations('header')
  return (
    <>
      <div
        id='header_title'
        className='relative overflow-hidden min-h-64 md:min-h-80 hidden md:block'
      >
        {/* Background image with subtle blur for contrast */}
        <Image
          src='/images/GettyImages-1.jpg'
          alt='Capa'
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
        {/* Soft dark overlay to enhance text readability */}
        <div className='absolute inset-0 bg-black/20' aria-hidden='true' />

        {/* Text content - Overlaid card */}
        <div className='absolute inset-0 pt-4 md:pt-12'>
          <div className='content-container'>
            <h1 className='text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-md'>
              {t('title')}
            </h1>
            <h2 className='text-sm sm:text-2xl text-white mt-4 font-semibold drop-shadow'>
              {t('subtitle')}
            </h2>
          </div>
        </div>
      </div>
      <header role='banner' className='sticky top-0 z-50'>
        <Navbar />
      </header>
    </>
  )
}

export default Header
