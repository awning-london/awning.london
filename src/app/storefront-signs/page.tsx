import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import img from '@/images/storefront/7.jpg'
import ScrollButton from '@/components/ScrollButton'
import { SectionIntro } from '@/components/SectionIntro'
import { TiTick } from 'react-icons/ti'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Testimonial } from '@/components/Testimonial'
import StorefrontSwiper from '@/components/StorefrontSwiper'

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


function Process() {
  return (
    <Section title="Types of Storefront Signs We Offer" image={{ src: img }}>
      <List className="mt-8 mb-10 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Illuminated Signs">
            LED, neon, backlit signage for 24/7 visibility.
        </ListItem>
        <ListItem title="3D Lettering & Channel Letters">
            Raised letters for a professional look.
        </ListItem>
        <ListItem title="Projecting & Hanging Signs">
            Great for attracting foot traffic.
        </ListItem>
        <ListItem title="Vinyl & Window Graphics">
            Cost-effective branding solutions.
        </ListItem>
        <ListItem title="Metal & Acrylic Signs">
            Durable, stylish, and weather-resistant.
        </ListItem>
      </List>
    </Section>
  )
}

function Location() {
  return (
    <SectionIntro
        eyebrow=""
        title="Make a Bold First Impression with Custom Storefront Signs"
        className="mt-10 sm:mt-12 md:mt-20"
      >
        <p>
            Overview of storefront signs and their impact on branding & visibility.
            Benefits of a well-designed storefront sign for businesses.
        </p>
      </SectionIntro>
  )
}


export const metadata: Metadata = {
  title: 'Custom Storefront Signs in London | Eye-Catching Business Signage',
  description:
    'Discover high-quality, custom storefront signs in London designed to enhance your brand visibility. From illuminated signs to 3D lettering, we create standout signage for businesses of all sizes.',
}

export default function Page() {
  return (
    <>
      <PageIntro eyebrow="Storefront Signs" title="Complete Guide to Storefront Signs">
        <p>
            Your storefront sign is the face of your business, attracting customers and reinforcing your brand. With many options available, choosing the right design ensures a smart investment that makes a lasting impression.
        </p>
        <p>
            Need help? Call us for a free consultation today!
        </p>
        <div className='flex gap-4 mt-5'>
            <Button href="/contact" invert={false}>
            Contact Us
            </Button>
            <Button href="tel:+44 7777 602125" invert={true} className='border border-sky-200 '>
                Call Us
            </Button>
        </div>
      </PageIntro>
      <section className='my-14'>
        <StorefrontSwiper/>
      </section>
      <section className='mt-10'>
        <WhyChoose />
      </section>

      <Location  />
      <section className='my-14'>
        <Process />
      </section>
      <Testimonial title='What Our London Customers Say' className="mt-6 sm:mt-8 md:mt-12 mb-20">
        Positive reviews from business owners who upgraded their storefront signs.
      </Testimonial>
      <ContactSection />
      <ScrollButton/>
    </>
  )
}