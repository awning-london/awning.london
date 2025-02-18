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

export default function page() {
  return (
    <>
      <Container className="mt-8 sm:mt-12 md:mt-16 mb-20">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-5xl">
            Premium Awning Solutions for Homes & Businesses
          </h1>
          <p className="mt-2 text-xl text-sky-700">
            Explore our range of high-quality, stylish, and durable awnings, customized to suit any space.
          </p>
        </FadeIn>
      </Container> 
      <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
      <FadeIn className="w-[25rem] md:w-[33.75rem] flex-none lg:w-[45rem]">
        <StylizedImage
          src={awnSample}
          sizes="(min-width: 1024px) 41rem, 31rem"
          className="justify-center lg:justify-end"
        />
      </FadeIn>
      </div> 
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
        <div className='mx-auto max-w-7xl px-2 lg:px-4'>
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
                <div className="bg-sky-100 p-4 block h-64 w-full rounded-4xl">
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
      </>
  )
}
