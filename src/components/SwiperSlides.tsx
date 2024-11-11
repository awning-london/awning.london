'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { images } from '@/components/Images'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

export default function Page() {
  return (
    <section className='py-12'>
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          
        <Swiper
          autoplay={{
            delay:2000,
            disableOnInteraction: false,
          }}
          pagination={false}
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg object-cover'
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover rounded-lg'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </FadeIn>
       
      </Container>
    </section>
  )
}
