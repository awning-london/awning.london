import React from 'react'
import { FadeIn } from '../FadeIn'
import { Container } from '../Container'
import { StylizedImage } from '../StylizedImage'
import { Button } from '../Button'

const awningType = [
  {
    "title": "Residential Awnings",
    "desc": "Enhancing patios, balconies, and outdoor spaces for homes.",
    "imgsrc": "/images/img11.jpg",
    "route": "/services/residential-awning",
  },
  {
    "title": "Custom Awnings",
    "desc": "Tailored designs, materials, and colors to match any architectural style.",
    "imgsrc": "/images/img7.jpg",
    "route": "/services/custom-awning",
  },
  {
    "title": "Commercial Awnings",
    "desc": "Custom storefront awnings, branded canopies, and café shades.",
    "imgsrc": "/images/img14.jpg",
    "route": "/services/commercial-awning",
  },
]

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
              width={200}
              height={100}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300  after:text-sky-950"
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

export default function AwningType() {
  return (
    <>
      {awningType.map((type, index) => (
        <Section key={index} title={type.title} image={{ src: type.imgsrc }}>
          <FadeIn>
            <p>
              {type.desc}
            </p>
            <Button href={type.route}>
              Read more
            </Button>
          </FadeIn>
        </Section>
      ))}
    </>
  )
}
