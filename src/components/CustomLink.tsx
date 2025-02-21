import React from 'react'
import { SectionIntro } from './SectionIntro'
import { Button } from './Button'
import { FadeIn } from './FadeIn'
import { StylizedImage } from './StylizedImage'

export default function CustomLink() {
  
  return (
    <section className='w-full flex justify-evenly items-center gap-24 flex-col md:flex-row mb-20'>
        <div className='max-w-80 ml-5 flex justify-center items-start flex-col'>
          <SectionIntro
            eyebrow="Custom Awning In London"
            title="Ready to transform your outdoor area with a truly bespoke awning?"
            className="mt-10 sm:mt-12 md:mt-20"
          >
            <Button href="/services/custom-awning" invert={false}>
              Awning In London
            </Button>
          </SectionIntro>
        </div>
        <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[25rem] md:w-[33.75rem] flex-none lg:w-[40rem]">
              <StylizedImage
                src={"/custom-link.jpg"}
                width={300}
                height={100}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
    </section>
  )
}
