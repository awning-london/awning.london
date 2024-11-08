import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { TiTick } from "react-icons/ti";
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import awnSample from '@/images/awn.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import clsx from 'clsx';
import Gallary from '@/components/Gallary';

const clients = [
  ['Custom Designs'],
  ['Range of Fabrics'],
  ['Wind, Shower & Sun Resistant'],
  ['Survey and Fitting'],
  ['Professional Installation'],
  ['Sustainable Materials'],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Why Choose Our Awnings?
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3 text-white"
          >
            {clients.map(([client]) => (
              <li key={client} className={clsx('flex items-center ')}>
                <TiTick size={20}/>
                {client}
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Exceptional service beyond compare"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <div className={clsx(
          "grid grid-cols-1 gap-10 md:grid-cols-2"
        )}>
          <p>
            - Our craftsmen install high-quality awnings and garage doors to exacting standards.
          </p>
          <p>
            - We use top brands like Weinor, Gibus, and Aluroll, with extensive experience in fitting across London.
          </p>
          <p>
            - From start to finish, we’re here to ensure a smooth, personalized experience.
          </p>
          <p>
            - Customizable awnings with logo options—plus, we’ll beat any comparable UK quote!
          </p>

        </div>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={awnSample}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Awning Design & Installation">
              We create stylish, high-quality awnings tailored to fit any space, 
              providing both shade and curb appeal.
            </ListItem>
            <ListItem title="Custom Solutions">
              Our custom awnings are designed to match unique architectural styles,
              with a range of materials and colors for a perfect fit.
            </ListItem>
            <ListItem title="Residential Awnings">
              Enhance your home’s outdoor spaces with durable, 
              beautiful awnings that provide shade and style.
            </ListItem>
            <ListItem title="Commercial Awnings">
              Professional awning solutions to create inviting entrances,
             outdoor seating areas, and more for your business.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  const caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Stylish, Durable Awnings for London.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Transform your outdoor space with our high-quality, custom awnings. Designed for elegance and built to last.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        Fantastic service! Professional, detail-oriented team. 
        My awning and garage door look perfect, were installed on time, and at a great price. Highly recommend!
      </Testimonial>

      <Gallary />

      <Services />

      <ContactSection />
    </>
  )
}
