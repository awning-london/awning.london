import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import repair from '@/images/awn1.jpg'
import img from '@/images/a23.jpg'
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

function Choose() {
  return (
    <SectionIntro
        eyebrow=""
        title="Which One Should You Choose?"
        className="mt-10 sm:mt-12 md:mt-20"
      >
        <p>
            If you want flexibility and modern convenience, a retractable awning is ideal. For a long-lasting, cost-effective solution, a fixed awning may be the better choice. Need help deciding? Contact us for expert advice!
        </p>
      </SectionIntro>
  )
}

function Retractable() {
  return (
    <Section title="Retractable Awnings" image={{ src: img }}>
      <List className="mt-8 mb-10 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Flexibility">
            Extend or retract as needed for adjustable shade.
        </ListItem>
        <ListItem title="Space-Saving">
            Folds away when not in use, preserving open views.
        </ListItem>
        <ListItem title="Convenience">
            Available in manual or motorized options for easy operation.
        </ListItem>
        <ListItem title="Cost">
            Typically higher upfront but offers long-term versatility.
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

function Deciding() {
  return (
    <SectionIntro
        eyebrow=""
        title="Deciding between a retractable or fixed awning? "
        className="mt-10 sm:mt-12 md:mt-20"
      >
        <p>
            Retractable awnings offer flexibility and space-saving features, while fixed awnings provide permanent, low-maintenance coverage. Learn about their benefits, costs, and ideal uses to choose the right shade solution for your space. Need expert advice? Contact us today!
        </p>
      </SectionIntro>
  )
}

function Fixed() {
  return (
    <Section title="Fixed Awnings" image={{ src: repair }}>
      <List className="mt-8 mb-10 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Permanent Coverage">
            Provides continuous protection from sun and rain.
        </ListItem>
        <ListItem title="Durability">
            Sturdy construction withstands harsh weather.
        </ListItem>
        <ListItem title="Low Maintenance">
            No moving parts, reducing wear and tear.
        </ListItem>
        <ListItem title="Cost">
            More affordable upfront with minimal upkeep.
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
  title: 'Retractable vs. Fixed Awnings – Pros, Cons & Best Choice',
  description:
    'Compare retractable and fixed awnings to find the best option for your home or business. Discover the pros, cons, costs, and benefits of each to make an informed decision.',
}

export default function Page() {
  return (
    <>
      <PageIntro eyebrow="Retractable vs. Fixed Awnings" title="Which One is Right for You?">
        <p>
            Choosing between retractable and fixed awnings depends on your needs, space, and budget. Both offer shade, protection, and aesthetic appeal, but each has distinct advantages.
        </p>
      </PageIntro>

      <section className='mt-10'>
        <BenefitsOfAwning />
      </section>

      <Choose />
      <Fixed  />
      <Deciding  />
      <Retractable />
      <Testimonial title='Finding the Perfect Awning' className="mt-6 sm:mt-8 md:mt-12 mb-20">
        James and Sarah wanted shade for their home and café but weren’t sure which awning to choose. For their patio, we recommended a retractable awning—offering flexible shade and easy motorized control. For their café, a fixed awning provided permanent coverage and custom branding to attract customers.
      </Testimonial>
      <ContactSection />
      <ScrollButton/>
    </>
  )
}