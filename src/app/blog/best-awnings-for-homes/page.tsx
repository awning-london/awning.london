import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import repair from '@/images/work/6.jpg'
import img from '@/images/work/10.jpg'
import ScrollButton from '@/components/ScrollButton'
import { SectionIntro } from '@/components/SectionIntro'
import { TiTick } from 'react-icons/ti'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Testimonial } from '@/components/Testimonial'

const benefits = [
    ['Energy Efficiency'],
    ['Enhanced Outdoor Living'],
    ['Property Value'],
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

function BenefitsOfAwning() {
  return (
    <div className="mx-2 rounded-4xl bg-sky-600 py-8 sm:mt-6 sm:py-10 lg:mt-6">
      <Container>
        <div className="flex items-center gap-x-2">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Why Installing Awning Have Benefits
          </h2>
          <div className="h-px flex-auto bg-sky-500" />
        </div>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1 lg:grid-cols-3 text-white"
          >
            {benefits.map(([item]) => (
              <li key={item} className={clsx('flex items-center ')}>
                <TiTick size={20}/>
                {item}
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Consultation() {
  return (
    <SectionIntro
        eyebrow=""
        title="The Importance of Awnings"
        className="mt-10 sm:mt-12 md:mt-20"
      >
        <p>
            Awnings are a valuable addition to any home, enhancing outdoor living spaces by providing essential shade, protecting against harsh weather conditions, and adding aesthetic appeal. They help create a comfortable area for relaxation, shielding patios, decks, and windows from excessive sunlight and rain. Beyond comfort, awnings also contribute to energy efficiency by reducing indoor temperatures, leading to lower cooling costs.
        </p>
      </SectionIntro>
  )
}

function Factors() {
  return (
    <Section title="Factors to Consider When Choosing an Awning" image={{ src: img }}>
      <List className="mt-8 mb-10 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Material">
            Choose from durable options like polyester, acrylic, or metal. Fabrics offer weather resistance and easy maintenance, while metal provides strength and long-lasting protection.
        </ListItem>
        <ListItem title="Size and Coverage">
            Properly measure your space to ensure the awning provides sufficient shade and protection for patios, windows, or balconies.
        </ListItem>
        <ListItem title="Climate Considerations">
            Select an awning that can withstand local weather, with wind-resistant features for windy areas and proper drainage for heavy rain.
        </ListItem>
      </List>
      <div className='flex flex-col justify-center items-start gap-4'>
        <p className='text-sky-700'>Get expert advice to find the perfect fit for your needs—contact us today!</p>
        <Button href="tel:+44 7777 602125" invert={true} className='border border-sky-200'>
          Call Us
        </Button>
      </div>
    </Section>
  )
}

function Location() {
  return (
    <SectionIntro
        eyebrow=""
        title="Choosing the Right Awning for Your Space"
        className="mt-10 sm:mt-12 md:mt-20"
      >
        <p>
            Selecting the perfect awning involves more than just style—it’s about durability, functionality, and suitability for your environment. The right choice enhances comfort, protects against the elements, and adds aesthetic appeal to your home or business.
        </p>
      </SectionIntro>
  )
}

function Types() {
  return (
    <Section title="Types of Awnings" image={{ src: repair }}>
      <List className="mt-8 mb-10 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Retractable Awnings">
            Flexible and space-saving, these awnings extend for shade and retract when not needed, ideal for patios and decks.
        </ListItem>
        <ListItem title="Fixed Awnings">
            Permanently installed for continuous protection, they add style while shielding windows and doors from the elements.
        </ListItem>
        <ListItem title="Motorized Awnings">
            Effortless control with remote or smart devices, offering instant shade and weather-responsive automation.
        </ListItem>
      </List>
      <div className='flex flex-row gap-4'>
        <Button href="/contact" invert={false}>
          Contact Us
        </Button>
        <Button href="tel:+44 7777 602125" invert={true} className='border border-sky-200'>
          Call Us
        </Button>
      </div>
    </Section>
  )
}


export const metadata: Metadata = {
  title: 'Awning, Canopy & Engine Repairs in London | Awning.London',
  description:
    'Need awning, canopy, or engine repairs in London? [Your Business Name] offers fast, expert repair services. Get a free quote today!',
}

export default function Page() {
  return (
    <>
      <PageIntro eyebrow="Best Awnings for Homes" title="Choosing the Right Shade Solution">
        <p>
            how awnings enhance outdoor living spaces by providing shade, protection from the elements, and aesthetic appeal?
        </p>
      </PageIntro>

      <section className='mt-10'>
        <BenefitsOfAwning />
      </section>

      <Consultation />
      <Types  />
      <Location  />
      <Factors />
      <Testimonial title='Making the Right Choice' className="mt-6 sm:mt-8 md:mt-12 mb-20">
        We needed the perfect awning for shade and style. With expert guidance, we found a durable, weather-resistant solution that fits our space beautifully. If you&apos;re unsure, consult the professionals—they made it easy for us!
      </Testimonial>
      <ContactSection />
      <ScrollButton/>
    </>
  )
}