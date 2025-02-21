import Image from 'next/image'
import React from 'react'
import { SectionIntro } from './SectionIntro'
import { Button } from './Button'

export default function CustomLink() {
  
  return (
    <section className='w-full flex justify-evenly items-center gap-24 flex-col md:flex-row mb-20'>
        <div className='max-w-80 ml-5 flex justify-center items-start flex-col'>
          <SectionIntro
            eyebrow="Custom Awning In London"
            title="Ready to transform your outdoor area with a truly bespoke awning?"
            className="mt-10 sm:mt-12 md:mt-20"
          >
            <Button href="/services/custom-awnings" invert={false}>
              Awning In London
            </Button>
          </SectionIntro>
        </div>
        <div>
          <Image 
          className='rounded-4xl md:w-[400px]'
           src={"/custom-link.jpg"}
           width={300}
           height={100}
           alt='custom-link'/>
        </div>
    </section>
  )
}
