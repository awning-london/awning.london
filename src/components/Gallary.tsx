import Image from 'next/image'
import React from 'react'
import Awn1 from '@/images/1.jpg'
import Awn2 from '@/images/2.jpg'
import Awn3 from '@/images/3.jpg'
import Awn4 from '@/images/4.jpg'
import Awn5 from '@/images/5.jpg'

export default function Gallary() {

    const gallary_col1 = [
        Awn1,
        Awn4,
        Awn3
    ]
    const gallary_col2 = [
        Awn4,
        Awn2,
    ]
    const gallary_col3 = [
        Awn5,
        Awn3,
        Awn1
    ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-8 w-full m-auto">
        <div className="grid gap-4">
            {gallary_col1.map((img, index) => <>
                <Image 
                    key={index}
                    src={img}
                    alt='awning-image'
                    className='h-auto max-w-full rounded-3xl grayscale hover:grayscale-0 transition'
                />
            </>)}
        </div>
        <div className="grid gap-4">
            {gallary_col2.map((img, index) => <>
                    <Image 
                        key={index}
                        src={img}
                        alt='awning-image'
                        className='h-auto max-w-full rounded-3xl grayscale hover:grayscale-0 transition'
                    />
            </>)}
        </div>
        <div className="grid gap-4">
            {gallary_col3.map((img, index) => <>
                    <Image 
                        key={index}
                        src={img}
                        alt='awning-image'
                        className='h-auto max-w-full rounded-3xl grayscale hover:grayscale-0 transition'
                    />
            </>)}
        </div>
    </div>
  )
}
