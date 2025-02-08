import { type Metadata } from 'next'

import { TiTick } from "react-icons/ti";
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import awnSample from '@/images/awn.jpg'
import clsx from 'clsx';
// import GallaryV2 from '@/components/GallaryV2';
import SwiperSlides from '@/components/SwiperSlides'
import Link from 'next/link';

const features = [
  ['Custom Designs'],
  ['Range of Fabrics'],
  ['Wind, Shower & Sun Resistant'],
  ['Survey and Fitting'],
  ['Professional Installation'],
  ['Sustainable Materials'],
]

function Clients() {
  return (
    <div className="mt-4 mx-2 rounded-4xl bg-sky-600 py-8 sm:mt-6 sm:py-10 lg:mt-6">
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
            {features.map(([feature]) => (
              <li key={feature} className={clsx('flex items-center ')}>
                <TiTick size={20}/>
                {feature}
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-10 sm:mt-12 md:mt-20"
      >
        <p>
          We offer a wide range of services to meet your needs, including custom-designed awnings, 
          retractable awnings, fixed awnings, and motorized awnings.
        </p>
      </SectionIntro>
      <Container className="mt-0">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[25rem] md:w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={awnSample}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
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
  title: 'Awning London | Stylish, Durable, Cheap Awnings for Londoners',
  description:
    'Discover premium awning solutions in London. Awning London offers high-quality retractable, fixed, and motorized awnings to enhance your outdoor spaces with style and comfort. Contact us today!',
}

export default async function Home() {

  return (
    <>
      <Container className="mt-8 sm:mt-12 md:mt-16 mb-4">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-5xl">
            Stylish, Durable Awnings for London.
          </h1>
          <p className="mt-2 text-xl text-sky-700">
          Elevate your outdoor living with our premium custom awnings in London—meticulously designed for enduring elegance and engineered with high-quality materials to provide lasting durability.
          </p>
          <div className='my-5'>
            <Link href={"/contact"} className='text-xl bg-sky-600 text-white rounded-full px-8 py-3 mr-5'>Book</Link>
            <Link href={"/about"} className='text-xl text-sky-600 bg-white border border-sky-600 rounded-full px-8 py-3'>About</Link>
          </div>
        </FadeIn>
      </Container>
      

      <Clients />
      
      <SwiperSlides/>
      <Testimonial
        className="mt-6 sm:mt-8 md:mt-12"
      >
        Fantastic service! Professional, detail-oriented team. 
        My awning and garage door look perfect, were installed on time, and at a great price. Highly recommend!
      </Testimonial>

      {/* <GallaryV2 /> */}

      <Services />

      <ContactSection />
    </>
  )
}
