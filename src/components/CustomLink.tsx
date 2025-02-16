import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function CustomLink() {
  
  return (
    <section className='flex justify-center items-center gap-24 flex-col md:flex-row'>
        <div className='max-w-80 ml-5'>
          <h3 className='pb-2 font-display text-3xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-4xl'>Custom Awning In London</h3>
          <p className='pb-5 text-sky-700'>Ready to transform your outdoor area with a truly bespoke awning? Contact us today to schedule a consultation and discover how our custom awning solutions can enhance your London property. Let’s create a space that’s as unique as you are.</p>
          <Link href={'/custom-awning-london'} className='px-8 py-3 border border-sky-600 bg-sky-600 text-white rounded-full hover:bg-white hover:text-sky-600'>Awning In London</Link>
        </div>
        <div>
          <Image 
          className='rounded-4xl'
           src={"/custom-link.jpg"}
           width={400}
           height={100}
           alt='custom-link'/>
        </div>
      </section>
  )
}
