"use client"

import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Testimonial } from './Testimonial';


const review = [
    {
      "title": "Perfect Addition to Our Home!",
      "desc": "The custom awning transformed our patio! It provides great shade, and the quality is outstanding. Highly recommend!",
      "from": "Emma L., London"
    },
    {
      "title": "Great Service & High-Quality Awnings",
      "desc": "From consultation to installation, the process was smooth. The team helped us choose the perfect awning for our café. It looks fantastic!",
      "from": "James R., Chelsea"
    },
    {
      "title": "Stylish & Durable!",
      "desc": "Our retractable awning is both stylish and functional. We love the convenience of adjusting it as needed. Excellent craftsmanship!",
      "from": "Sophia M., Camden"
    },
    {
        "title": "Highly Recommended!",
        "desc": "The team was professional, and the awning exceeded our expectations. It adds a beautiful touch to our storefront while keeping our customers comfortable.",
        "from": "Daniel W., Soho"
    },
  ]

export default function Review() {
  return (
    
      <Swiper
        autoplay={{
          delay:5000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={swiper => console.log(swiper)}
        className='w-full flex justify-center items-center gap-2'
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {review.map((item, index) => (
          <SwiperSlide key={index} className="mt-6 sm:mt-8 md:mt-12 mb-20">
            <Testimonial title={item.title} >
                {item.desc} - {item.from}
            </Testimonial>
          </SwiperSlide>
        ))}
      </Swiper>
  )
}
