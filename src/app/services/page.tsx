"use client"

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import awnSample from '@/images/services.jpg'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link'
import Image from 'next/image'

const benefitsAwning = [
  {
    "title": "Shade & Comfort",
    "desc": [
      "Blocks harmful UV rays, reducing sun exposure.",
      "Creates a cooler outdoor environment for relaxation.",
      "Helps prevent indoor spaces from overheating.",
    ]
  },
  {
    "title": "Weather Protection",
    "desc": [
      "Shields against rain and wind, extending the usability of outdoor spaces.",
      "Protects outdoor furniture from fading and wear.",
      "Durable materials ensure long-lasting resistance to harsh weather.",
    ]
  },
  {
    "title": "Shade & Comfort",
    "desc": [
      "Reduces indoor cooling costs by blocking excess sunlight.",
      "Helps maintain consistent indoor temperatures, lowering air conditioning usage.",
      "Acts as an eco-friendly home improvement option."
    ]
  }
]

const awningType = [
  {
    "title": "Residential Awnings ",
    "desc": "Enhancing patios, balconies, and outdoor spaces for homes.",
    "imgSrc": "/images/img11.jpg",
    "route": "/residential-awning",
  },
  {
    "title": "Custom Awnings",
    "desc": "Tailored designs, materials, and colors to match any architectural style.",
    "imgSrc": "/images/img7.jpg",
    "route": "/custom-awning",
  },
  {
    "title": "Commercial Awnings",
    "desc": "Custom storefront awnings, branded canopies, and café shades.",
    "imgSrc": "/images/img14.jpg",
    "route": "/commercial-awning",
  },
]

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
        <div className='mx-auto max-w-7xl px-2 lg:px-4 mb-20'>
          <Swiper
            autoplay={{
              delay:2000,
              disableOnInteraction: false,
            }}
            pagination={false}
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={swiper => console.log(swiper)}
            className='w-full rounded-4xl flex justify-center items-center gap-2'
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {benefitsAwning.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-sky-50 p-4 block h-64 w-full rounded-4xl">
                  <h3 className='font-display text-2xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-3xl'>{item.title}</h3>
                  <ul className="text-sm gap-5 flex justify-center items-start flex-col text-sky-800">
                    <li>{item.desc[0]}</li>
                    <li>{item.desc[1]}</li>
                    <li>{item.desc[2]}</li>
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <FadeIn className='flex justify-center items-center flex-col mb-20 gap-14 md:flex-row'>
          {awningType.map((item, index) => (
            <section key={index} className='flex justify-center items-center gap-10 flex-col md:flex-row'>
              <div className='max-w-80 ml-5'>
                <h3 className='pb-2 font-display text-3xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-4xl'>{item.title}</h3>
                <p className='pb-5 text-sky-700'>{item.desc}</p>
                <Link href={'/custom-awning-london'} className='px-8 py-3 border border-sky-600 bg-sky-600 text-white rounded-full hover:bg-white hover:text-sky-600'>Read More</Link>
              </div>
              <div>
                <Image 
                  className='rounded-4xl md:hidden'
                  src={item.imgSrc}
                  width={300}
                  height={100}
                  alt='custom-link'/>
              </div>
            </section>
          ))}
        </FadeIn>
      </>
  )
}
