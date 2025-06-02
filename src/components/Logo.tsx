import Image from 'next/image'
import React from 'react'
import Logo from '@/images/logo.png'

export default function LogoV2() {
  return (
    <Image
        src={Logo}
        width={50}
        height={50}
        alt='logo of the awning'
        className=' md:w-14'
    />
  )
}
