import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import clsx from 'clsx'
import { type Metadata } from 'next'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Custom Canopy | Awning London',
  description: 'Enhance your property’s curb appeal with our premium custom awnings in London. ',
}

const CustomFeatures = [
  ['Transform Your Outdoor Spaces with Bespoke Design'],
  ['Tailored to Your Unique Style'],
  ['Premium Quality Materials & Craftsmanship'],
  ['Expert Installation & Seamless Integration'],
]

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

export default function Custom() {
  
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
              {CustomFeatures.map(([feature]) => (
                <li key={feature} className={clsx('flex items-center ')}>
                  {feature}
                </li>
              ))}
            </ul>
          </FadeInStagger>
          </Container>
        </div>
        {CustomContent.map((content) => (
          <Container key={content.id} className="mt-8 sm:mt-12 md:mt-16 mb-20">
            <div className='flex justify-between items-center flex-col lg:flex-row '>
              <FadeIn className="max-w-3xl gap-5">
                <h2 className="font-display text-2xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-5xl">
                  {content.title}
                </h2>
                <p className="mt-2 text-lg text-sky-700 max-w-96">
                  {content.desc}
                </p>
              </FadeIn>
              <Image 
                className='rounded-4xl'
                alt='custom-canopy'
                src={content.imgsrc}
                width={500}
                height={300}
                />
            </div>
          </Container>
          ))}
          
          
      </>
  )
}
