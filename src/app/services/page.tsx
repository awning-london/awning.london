

import React from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import awnSample from '@/images/services.jpg'
import { Metadata } from 'next'
import BenefitSlider from '@/components/services/BenefitSlider'
import AwningType from '@/components/services/AwningType'
import ContactService from '@/components/services/ContactService'

export const metadata: Metadata = {
  title: 'Premium Awning Solutions in London | Custom, Residential & Commercial Awnings',
  description:
    'Explore our range of high-quality, stylish awning services at Awning.London. We offer custom, residential, and commercial awnings designed for shade, weather protection, and energy savings. Get your free quote today!',
}

export default function page() {
  return (
    <>
      <Container className="mt-8 sm:mt-12 md:mt-16 mb-20">
        <FadeIn className="w-full flex justify-between items-center flex-col md:flex-row">
          <div className='z-10'>
            <h1 className="font-display text-4xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-5xl">
              Premium Awning Solutions for Homes & Businesses
            </h1>
            <p className="mt-2 text-xl text-sky-700">
              Explore our range of high-quality, stylish, and durable awnings, customized to suit any space.
            </p>
          </div>
          <div className="flex justify-center w-full lg:pr-12 z-0">
            <FadeIn className="w-full lg:w-full">
              <StylizedImage
                src={awnSample}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div> 
        </FadeIn>
      </Container> 
        <Testimonial title='Our Awning Services' className="mt-6 sm:mt-8 md:mt-12">
          At Awning.London, we specialize in designing and installing premium awnings for residential and commercial properties. Whether you&apos;re looking for shade for your garden, a retractable awning for your patio, or a stylish storefront canopy, we have the perfect solution for you.
        </Testimonial>
        <Container className="mt-12 sm:mt-14 md:mt-16 mb-10">
          <FadeIn className="max-w-3xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-4xl">
              Benefits of Installing an Awning
            </h2>
          </FadeIn>
        </Container> 
        <BenefitSlider />
        <AwningType />
        <ContactService />
        
      </>
  )
}
