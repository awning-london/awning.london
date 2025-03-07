import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import repair from '@/images/awning-fix.jpg'
import img from '@/images/a22.jpg'
import ScrollButton from '@/components/ScrollButton'
import { SectionIntro } from '@/components/SectionIntro'
import { TiTick } from 'react-icons/ti'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Testimonial } from '@/components/Testimonial'
import FixSlider from '@/components/fixSlider'

const choosen = [
    ['Local Expertise'],
    ['Fast Turnaround'],
    ['Affordable Pricing'],
    ['Survey and Fitting'],
    ['Experienced Team'],
    ['Customer Satisfaction'],
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

function WhyChoose() {
  return (
    <div className="mx-2 rounded-4xl bg-sky-600 py-8 sm:mt-6 sm:py-10 lg:mt-6">
      <Container>
        <div className="flex items-center gap-x-2">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Why Choose Our Awnings?
          </h2>
          <div className="h-px flex-auto bg-sky-500" />
        </div>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1 lg:grid-cols-3 text-white"
          >
            {choosen.map(([item]) => (
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
        title="Trusted Repair Services for Awnings, Canopies, and Motors in London"
        className="mt-10 sm:mt-12 md:mt-20"
      >
        <p>
            Your go-to solution for professional repair services in London. Whether your awning or canopy has seen better days or your motor needs urgent attention, our skilled technicians are here to help. With years of experience and a commitment to quality, we deliver fast, reliable repairs that get you back on track. Based in London, we proudly serve homes and businesses across the city.
        </p>
      </SectionIntro>
  )
}

function Process() {
  return (
    <Section title="How Our Repair Service Works" image={{ src: img }}>
      <List className="mt-8 mb-10 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Contact Us">
            Call or fill out our online form to describe your repair needs.
        </ListItem>
        <ListItem title="Assessment">
            We’ll evaluate the damage and provide a free, no-obligation quote.
        </ListItem>
        <ListItem title="Repair">
            Our team gets to work, using top-quality materials and techniques.
        </ListItem>
        <ListItem title="Completion">
            Your awning, canopy, or motor is back in action, good as new!
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

function Location() {
  return (
    <SectionIntro
        eyebrow=""
        title="Serving All of London with Expert Repairs"
        className="mt-10 sm:mt-12 md:mt-20"
      >
        <p>
          No matter where you are in London – from Camden to Croydon, Islington to Greenwich – we’re ready to assist. Our mobile repair team brings the tools and expertise directly to you, or you can visit our workshop for more complex fixes.
        </p>
      </SectionIntro>
  )
}

function Services() {
  return (
    <Section title="How Our Repair Service Works" image={{ src: repair }}>
      <List className="mt-8 mb-10 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Awning & Canopy Repairs">
        Damaged fabric, broken frames, or faulty mechanisms? We fix all types of awnings and canopies, from shopfronts to garden setups. Our team restores functionality and appearance, ensuring durability against London’s unpredictable weather.
        </ListItem>
        <ListItem title="Motor Repairs">
        From small machinery to vehicle motors, we diagnose and repair issues quickly and efficiently. Our expertise covers everything from routine maintenance to complex motor faults, keeping your equipment running smoothly.
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
  title: 'Awning, Canopy & Motor Repairs in London | Awning.London',
  description:
    'Need awning, canopy, or motor repairs in London? [Your Business Name] offers fast, expert repair services. Get a free quote today!',
}

export default function Page() {
  return (
    <>
      <PageIntro eyebrow="Our Repair" title="Expert Awning, Canopy & Motor Repair Services in London">
        <p>
            Need reliable awning, canopy, or motor repairs in London? Our expert team offers fast, affordable repair services across the city. Contact us today!
        </p>
      </PageIntro>

      <FixSlider />

      <section className='mt-10'>
        <WhyChoose />
      </section>

      <Consultation />
      <Services  />
      <Location  />
      <Process />
      <Testimonial title='What Our London Customers Say' className="mt-6 sm:mt-8 md:mt-12 mb-20">
        Fixed my shop awning in record time – fantastic service!
      </Testimonial>
      <ContactSection />
      <ScrollButton/>
    </>
  )
}