import Image from 'next/image'
import React from 'react'
import Logo from '@/images/logo-awn.png'

export default function LogoV2() {
  return (
    <Image
        src={Logo}
        width={40}
        height={40}
        alt='logo of the awning'
        className='md:w-14'
    />
  )
}
