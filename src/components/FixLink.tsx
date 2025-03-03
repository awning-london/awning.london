import React from 'react'
import { Button } from './Button'
import { FadeIn } from './FadeIn'
import { StylizedImage } from './StylizedImage'
import { List, ListItem } from './List'
import img from "@/images/work/4.jpg"
import { Container } from './Container'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 after:text-sky-950"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-sky-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

export default function FixLink() {
  
  return (
    <Section title="Awning Fix & Repair Services in London | Restore & Maintain Your Awning" image={{ src: img }}>
      <List className="mt-8 mb-10 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Awning & Canopy Repairs">
            Get professional awning repair services in London to fix damage, wear, or mechanical issues. We restore retractable, fixed, and motorized awnings for homes and businesses. Contact us for a quick and reliable fix!
        </ListItem>
        <ListItem title="Engine Repairs">
            Over time, awnings can experience wear and tear due to weather exposure or mechanical faults. Our awning repair services ensure your awning remains in top condition, extending its lifespan and maintaining its functionality. Whether it&apos;s fabric replacement, frame repair, or motor issues, our experts provide fast and reliable solutions.
        </ListItem>
      </List>
      <div className='flex flex-row gap-4'>
          <Button href="/services/fix-repair" invert={false}>
            Explore How to Repair
          </Button>
      </div>
    </Section>
    
  )
}

