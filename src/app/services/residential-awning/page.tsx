import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import ScrollButton from '@/components/ScrollButton'
import { SectionIntro } from '@/components/SectionIntro'
import AwningBenefit from '@/components/services/AwningBenefit'
import FAQPage from '@/components/services/Faq'
import { StylizedImage } from '@/components/StylizedImage'
import { Metadata } from 'next'
import React from 'react'



  const CustomContent = [
    {
      "id": 1,
      "title": "Retractable Awnings",
      "desc": " Whether it's a sunny afternoon in Islington or a rainy evening in Greenwich, retractable awnings are perfect for patios or balconies that need flexible weather protection.",
      "imgsrc": "/residential/retractable.jpg"
    },
    {
      "id": 2,
      "title": "Fixed Awnings",
      "desc": "Fixed awnings offer long-term protection for homes near busy streets or public spaces, ideal for protecting patios in bustling areas like Soho or Covent Garden.",
      "imgsrc": "/residential/fixed.jpg"
    },
    {
      "id": 3,
      "title": "Motorized Awnings",
      "desc": "Motorized awnings are perfect for homeowners who prefer automated solutions for larger properties or hard-to-reach areas, such as those with large decks in Hampstead.",
      "imgsrc": "/residential/motorized.jpg"
    },
    {
      "id": 4,
      "title": "Manual Awnings",
      "desc": "Manual awnings provide a budget-friendly way to add shade and protection, perfect for small patios or garden spaces in residential areas like Wimbledon.",
      "imgsrc": "/residential/manual.jpg"
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
                className="font-display text-base font-semibold before:text-neutral-300 after:text-sky-950 "
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
  
  function Retractable() {
    return (
      <Section title={CustomContent[0].title} image={{ src: CustomContent[0].imgsrc }}>
        <FadeIn>
          <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                <ListItem title="Adaptable for London Weather">
                    {CustomContent[0].desc}
                </ListItem>
            </List>
        </FadeIn>
        
      </Section>
    )
  }
  
  function Fixed() {
    return (
      <Section title={CustomContent[1].title} image={{ src: CustomContent[1].imgsrc }}>
        <FadeIn>
            <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                <ListItem title="Permanent Shade for Busy London Streets">
                    {CustomContent[1].desc}
                </ListItem>
            </List>
        </FadeIn>
      </Section>
    )
  }
  
  function Motorized() {
    return (
      <Section title={CustomContent[2].title} image={{ src: CustomContent[2].imgsrc }}>
        <FadeIn>
            <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                <ListItem title="Convenience for Busy Londoners">
                    {CustomContent[2].desc}
                </ListItem>
            </List>
        </FadeIn>
      </Section>
    )
  }
  
  function Manual() {
    return (
      <Section title={CustomContent[3].title} image={{ src: CustomContent[3].imgsrc }}>
        <FadeIn>
            <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                <ListItem title="Affordable Option for London Homes">
                    {CustomContent[3].desc}
                </ListItem>
            </List>
        </FadeIn>
      </Section>
    )
  }
  
  export const metadata: Metadata = {
    title: 'Residential Awnings in London | Stylish, Durable, & Custom Outdoor Shade Solutions',
    description: 'Discover high-quality residential awnings in London for your patio, garden, balcony, and windows. Choose from retractable, fixed, and motorized options designed to enhance comfort and style. Get a free quote today!',
  }
  
  export default function Page() {
    
    return (
        <>
          <Container className="mt-8 sm:mt-12 md:mt-16 mb-20">
            <FadeIn className="max-w-3xl">
              <h1 className="font-display text-4xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-5xl">
                Enhance Your Outdoor Living with Stylish Residential Awnings in London
              </h1>
              <p className="mt-2 text-xl text-sky-700">
                Create a comfortable, shaded space for your London patio, garden, balcony, or windows with durable, stylish residential awnings.
              </p>
            </FadeIn>
          </Container>
          <Container className="mt-12 sm:mt-14 md:mt-16 mb-10">
                <FadeIn className="max-w-3xl">
                  <h2 className="font-display text-3xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-4xl">
                    How Awnings Enhance Your Space in London
                  </h2>
                </FadeIn>
            </Container> 
            <AwningBenefit/>
          <SectionIntro
                  eyebrow="Residential Awnings"
                  title="Why Choose Residential Awnings in London?"
                  className="mt-10 sm:mt-12 md:mt-20"
            >
              <p>
                Residential awnings are a fantastic way to enhance your outdoor living spaces in London. Whether you have a garden in Hackney, a balcony in Westminster, or a patio in Chelsea, our high-quality awnings provide shade, protection, and style. We offer customizable solutions that fit the unique needs of London homeowners, with designs and materials that endure the varied weather conditions throughout the year.
              </p>
            </SectionIntro>
            <Container className='my-10'>
                <Retractable/>
                <Fixed/>
                <Motorized/>
                <Manual/>
            </Container>
            <FAQPage/>
            <ScrollButton/>
        </>
    )
  }

