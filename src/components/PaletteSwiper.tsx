"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FadeIn } from './FadeIn'

const colorOptions = [
    { name: "White", value: "#E0E1D3" },
    { name: "Pearl", value: "#AAAAA2" },
    { name: "Cream", value: "#D3C6A6" },
    { name: "Linen", value: "#BBAA8E" },
    { name: "Hemp Beige", value: "#9E8368" },
    { name: "Cacao", value: "#5B3522" },
    { name: "Brown", value: "#35261F" },
    { name: "Yellow", value: "#DF9E0E" },
    { name: "Orange", value: "#EA5211" },
    { name: "Salmon", value: "#CD5B5A" },
    { name: "Red", value: "#B52131" },
    { name: "Vermillion", value: "#941327" },
    { name: "Burgundy", value: "#681C28" },
    { name: "Mauve", value: "#624353" },
    { name: "Lilly", value: "#AEA7EA" },
    { name: "Turquoise", value: "#0C8598" },
    { name: "Blue", value: "#00367B" },
    { name: "Dark Blue", value: "#122D7A" },
    { name: "Admiral Blue", value: "#001741" },
    { name: "Pistachio", value: "#7B8E32" },
    { name: "Emerald", value: "#046157" },
    { name: "Green", value: "#005052" },
    { name: "Hunter", value: "#213124" },
    { name: "Forest Green", value: "#0B3028" },
    { name: "Nickel", value: "#545351" },
    { name: "Charcoal Grey", value: "#2E2D32" },
    { name: "Dark Grey", value: "#19191B" },
  ]

export default function PaletteSwiper() {
  return (
    <section className='my-20 mx-auto max-w-7xl px-2 lg:px-4'>
        <FadeIn className="flex justify-center items-center gap-x-2">
        <Swiper
          autoplay={{
            delay:1500,
            disableOnInteraction: false,
          }}
          pagination={false}
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={swiper => console.log(swiper)}
          className='h-60 w-full rounded-4xl'
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
          {colorOptions.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full rounded-4xl items-center justify-center" style={{backgroundColor: item.value}}>
                <p className='bg-neutral-100 rounded-lg px-2'>
                    {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </FadeIn>
    </section>
  )
}
