'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { images } from '@/components/Images'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FadeIn } from './FadeIn'

export default function Page() {
  return (
    <section className='my-4 mx-auto max-w-7xl px-2 lg:px-4'>
        <FadeIn className="flex items-center gap-x-2">
          
        <Swiper
          autoplay={{
            delay:2000,
            disableOnInteraction: false,
          }}
          pagination={false}
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-4xl object-cover'
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover rounded-4xl'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </FadeIn>
    </section>
  )
}
