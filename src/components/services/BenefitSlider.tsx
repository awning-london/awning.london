"use client"

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

export default function BenefitSlider() {
  return (
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
  )
}
