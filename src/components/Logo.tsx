import Image from 'next/image'
import React from 'react'
import Logo from '@/images/logo-awn.png'

export default function LogoV2() {
  return (
    <Image
        src={Logo}
        width={60}
        height={60}
        alt='logo of the awning'
    />
  )
}
