import React from 'react'
import { FadeIn } from '../FadeIn'
import Link from 'next/link'
import Image from 'next/image'

const awningType = [
  {
    "title": "Residential Awnings ",
    "desc": "Enhancing patios, balconies, and outdoor spaces for homes.",
    "imgSrc": "/images/img11.jpg",
    "route": "/residential-awning",
  },
  {
    "title": "Custom Awnings",
    "desc": "Tailored designs, materials, and colors to match any architectural style.",
    "imgSrc": "/images/img7.jpg",
    "route": "/custom-awning",
  },
  {
    "title": "Commercial Awnings",
    "desc": "Custom storefront awnings, branded canopies, and café shades.",
    "imgSrc": "/images/img14.jpg",
    "route": "/commercial-awning",
  },
]

export default function AwningType() {
  return (
    <FadeIn className='flex justify-center items-center flex-col mb-20 gap-14 md:flex-row'>
          {awningType.map((item, index) => (
            <section key={index} className='flex justify-center items-center gap-10 flex-col md:flex-row'>
              <div className='max-w-80 ml-5'>
                <h3 className='pb-2 font-display text-3xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-4xl'>{item.title}</h3>
                <p className='pb-5 text-sky-700'>{item.desc}</p>
                <Link href={'/custom-awning-london'} className='px-8 py-3 border border-sky-600 bg-sky-600 text-white rounded-full hover:bg-white hover:text-sky-600'>Read More</Link>
              </div>
              <div>
                <Image 
                  className='rounded-4xl md:hidden'
                  src={item.imgSrc}
                  width={300}
                  height={100}
                  alt='custom-link'/>
              </div>
            </section>
          ))}
    </FadeIn>
  )
}
