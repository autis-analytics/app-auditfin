import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='relative bg-white'>
      <div className='container px-4 py-8 flex justify-center items-center'>
        <div className='flex justify-start w-full'>
          <Image
            src='/EY_Logo.png'
            alt='EY Logo'
            width={60}
            height={20}
            className='object-contain'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
