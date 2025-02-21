"use client"

import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const benefitsAwning = [
    {
      "title": "Patios in London",
      "desc": [
        "With London’s varying climate, awnings provide much-needed shade during hot summer days while protecting you from light rain.",
        "Enjoy your patio all year round, whether you're hosting in Camden or having a family BBQ in Richmond.",
      ]
    },
    {
      "title": "Gardens in London",
      "desc": [
        "Our awnings protect your plants from harsh sun exposure, helping gardens thrive even in the heat of summer.",
        "With our weather-resistant awnings, you can make the most of your garden during London’s occasional downpours.",
      ]
    },
    {
      "title": "Balconies & Decks in London",
      "desc": [
        "If you're living in one of London’s charming flats or apartments, our awnings offer protection for your balcony in areas like Shoreditch or Clapham.",
        "Awnings help shield your outdoor seating areas from the unpredictable weather London is known for, allowing you to enjoy outdoor space all year.",
      ]
    },
    {
      "title": "Windows in London Homes",
      "desc": [
        "By installing awnings over your windows, you can help reduce indoor temperatures, a great solution for summer heat in places like South Bank and Notting Hill.",
        "Keep your home private while letting in natural light by installing an awning over your windows in residential areas of London.",
      ]
    }
  ]

export default function AwningBenefit() {
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
              <h3 className='font-display text-lg font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-xl'>{item.title}</h3>
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
