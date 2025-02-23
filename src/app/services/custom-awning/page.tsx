import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import clsx from 'clsx'
import { type Metadata } from 'next'
import { StylizedImage } from '@/components/StylizedImage'
import ScrollButton from '@/components/ScrollButton'
import { ContactSection } from '@/components/ContactSection'

const CustomContent = [
  {
    "id": 1,
    "title": "Transform Your Outdoor Spaces with Bespoke Design",
    "desc": "Enhance your home’s curb appeal with our premium custom awnings in London. We offer tailor-made solutions, from design consultations to expert installation, ensuring your awning complements your home or business perfectly.",
    "imgsrc": "/images/img9.jpg"
  },
  {
    "id": 2,
    "title": "Tailored to Your Style",
    "desc": "Our bespoke awnings reflect your unique aesthetic, blending modern and classic design elements for a one-of-a-kind look.",
    "imgsrc": "/images/img8.jpg"
  },
  {
    "id": 3,
    "title": "Premium Quality & Craftsmanship",
    "desc": "Made with high-grade, weather-resistant materials, our awnings guarantee durability and elegance, even in London's unpredictable climate.",
    "imgsrc": "/images/img2.jpg"
  },
  {
    "id": 4,
    "title": "Expert Installation",
    "desc": "Our skilled team ensures a perfect fit and seamless integration, providing optimal protection and enhancing your outdoor space with minimal disruption.",
    "imgsrc": "/images/img15.jpg"
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

function Transform() {
  return (
    <Section title={CustomContent[0].title} image={{ src: CustomContent[0].imgsrc }}>
      <FadeIn>
        <p>
          {CustomContent[0].desc}
        </p>
      </FadeIn>
    </Section>
  )
}

function Tailored() {
  return (
    <Section title={CustomContent[1].title} image={{ src: CustomContent[1].imgsrc }}>
      <FadeIn>
        <p>
          {CustomContent[1].desc}
        </p>
      </FadeIn>
    </Section>
  )
}

function Premium() {
  return (
    <Section title={CustomContent[2].title} image={{ src: CustomContent[2].imgsrc }}>
      <FadeIn>
        <p>
          {CustomContent[2].desc}
        </p>
      </FadeIn>
    </Section>
  )
}

function Expert() {
  return (
    <Section title={CustomContent[3].title} image={{ src: CustomContent[3].imgsrc }}>
      <FadeIn>
        <p>
          {CustomContent[3].desc}
        </p>
      </FadeIn>
    </Section>
  )
}


export const metadata: Metadata = {
  title: 'Custom Canopy | Awning London',
  description: 'Enhance your property’s curb appeal with our premium custom awnings in London. ',
}

export default function Page() {
  
  return (
      <>
        <Container className="mt-8 sm:mt-12 md:mt-16 mb-20">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-4xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-5xl">
              Custom Awnings in London
            </h1>
            <p className="mt-2 text-xl text-sky-700">
              Our service is designed for clients who value unique, tailor-made solutions. From initial design consultations to expert installation, we work closely with you to create awnings that perfectly complement your home or business aesthetic.
            </p>
          </FadeIn>
        </Container>
        <div className="mt-4 mx-2 rounded-4xl bg-sky-600 py-8 sm:mt-6 sm:py-10 lg:mt-6">
        <Container>
        <div className="flex items-center gap-x-2">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              Custom Awning Features
            </h2>
            <div className="h-px flex-auto bg-sky-500" />
            </div>
          <FadeInStagger faster>
            <ul
              role="list"
              className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1 lg:grid-cols-3 text-white"
              >
              {CustomContent.map(item => (
                <li key={item.id} className={clsx('flex items-center text-sm')}>
                  {item.title}
                </li>
              ))}
            </ul>
          </FadeInStagger>
          </Container>
        </div>
        <Container className='my-20'>
          <Transform/>
          <Tailored/>
          <Premium/>
          <Expert/> 
        </Container>
        <ContactSection />
        <ScrollButton/>
      </>
  )
}
