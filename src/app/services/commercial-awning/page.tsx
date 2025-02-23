import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import ScrollButton from '@/components/ScrollButton'
import { SectionIntro } from '@/components/SectionIntro'
import AwningBenefit from '@/components/services/AwningBenefit'
import CommecialFaq from '@/components/services/CommercialFaq'
import { StylizedImage } from '@/components/StylizedImage'
import { Metadata } from 'next'
import React from 'react'



  const CustomContent = [
    {
      "id": 1,
      "title": "Storefront Awnings",
      "desc": "Enhance curb appeal for retail shops, salons, and offices. Custom designs that reflect your brand’s identity.",
      "imgsrc": "/residential/retractable.jpg"
    },
    {
      "id": 2,
      "title": "Café Canopies & Restaurant Awnings",
      "desc": "Create comfortable outdoor dining spaces, crucial for London’s vibrant café culture. Weather-resistant options for year-round use.",
      "imgsrc": "/residential/fixed.jpg"
    },
    {
      "id": 3,
      "title": "Retractable Awnings for Businesses",
      "desc": "Flexible solutions for varying weather conditions. Ideal for venues needing adjustable outdoor coverage.",
      "imgsrc": "/residential/motorized.jpg"
    },
    {
      "id": 4,
      "title": "Fixed Awnings",
      "desc": "Durable, long-term solutions for consistent coverage. Great for businesses along high-traffic areas in London.",
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
  
  function Storefront() {
    return (
      <Section title={CustomContent[0].title} image={{ src: CustomContent[0].imgsrc }}>
        <FadeIn>
          <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                <ListItem title={undefined}>
                    {CustomContent[0].desc}
                </ListItem>
            </List>
        </FadeIn>
        
      </Section>
    )
  }
  
  function Canopies() {
    return (
      <Section title={CustomContent[1].title} image={{ src: CustomContent[1].imgsrc }}>
        <FadeIn>
            <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                <ListItem title={undefined}>
                    {CustomContent[1].desc}
                </ListItem>
            </List>
        </FadeIn>
      </Section>
    )
  }
  
  function Retractable() {
    return (
      <Section title={CustomContent[2].title} image={{ src: CustomContent[2].imgsrc }}>
        <FadeIn>
            <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                <ListItem title={undefined}>
                    {CustomContent[2].desc}
                </ListItem>
            </List>
        </FadeIn>
      </Section>
    )
  }
  
  function Fixed() {
    return (
      <Section title={CustomContent[3].title} image={{ src: CustomContent[3].imgsrc }}>
        <FadeIn>
            <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                <ListItem title={undefined}>
                    {CustomContent[3].desc}
                </ListItem>
            </List>
        </FadeIn>
      </Section>
    )
  }
  
  export const metadata: Metadata = {
    title: 'Commercial Awnings in London | Custom Storefront & Café Canopy Solutions',
    description: 'Enhance your London business with custom commercial awnings. Improve branding, customer comfort, and energy efficiency with storefront awnings, café canopies, and retractable solutions. Get a free quote today!',
  }
  
  export default function Page() {
    
    return (
        <>
          <Container className="mt-8 sm:mt-12 md:mt-16 mb-20">
            <FadeIn className="max-w-3xl">
              <h1 className="font-display text-4xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-5xl">
                Enhance Your Business with Custom Commercial Awnings in London
              </h1>
              <p className="mt-2 text-xl text-sky-700">
                Attract more customers, improve comfort, and boost energy efficiency with our high-quality commercial awning solutions.
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
                  eyebrow="Commercial Awnings"
                  title="Why Choose Commercial Awnings for Your London Business?"
                  className="mt-10 sm:mt-12 md:mt-20"
            >
              <p>
                Overview of how awnings benefit businesses in London’s competitive market.
              </p>
              <p>
                Mention key benefits: Enhanced storefront appeal, customer comfort, weather protection, and potential energy savings.
              </p>
              <p>
                Local relevance: Emphasize how London’s climate and bustling streets make awnings a practical choice for local businesses.
              </p>
            </SectionIntro>
            <Container className='my-10'>
                <Retractable/>
                <Storefront/>
                <Canopies/>
                <Fixed/>
            </Container>
            <CommecialFaq/>
            <ScrollButton/>
        </>
    )
  }

