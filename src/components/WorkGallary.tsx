import Image from 'next/image'
import React from 'react'
import Awn1 from '@/images/1.jpg'
import Awn2 from '@/images/3.jpg'
import Awn3 from '@/images/3.jpg'
import Awn4 from '@/images/4.jpg'
import Awn5 from '@/images/5.jpg'
import Awn6 from '@/images/a1.jpg'
import Awn7 from '@/images/a2.jpg'
import Awn8 from '@/images/a3.jpg'
import Awn9 from '@/images/a4.jpg'
import Awn10 from '@/images/a5.jpg'
import Awn11 from '@/images/a6.jpg'
import Awn12 from '@/images/a7.jpg'
import Awn13 from '@/images/a8.jpg'
import Awn14 from '@/images/a9.jpg'
import Awn16 from '@/images/a11.jpg'
import Awn17 from '@/images/a12.jpg'
import Awn18 from '@/images/a13.jpg'
import Awn19 from '@/images/a14.jpg'
import Awn20 from '@/images/a15.jpg'
import Awn21 from '@/images/a16.jpg'
import Awn22 from '@/images/a17.jpg'

export default function Gallary() {

    const gallary_col1 = [
        Awn1,
        Awn3,
        Awn4,
        Awn5,
        Awn6,
        Awn7,
        Awn8,
        Awn2,
        Awn9,
        Awn10,
        Awn11,
        Awn12,
        Awn13,
        Awn14,
        Awn16,
        Awn17,
        Awn18,
        Awn19,
        Awn20,
        Awn21,
        Awn22,
    ]

  return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 w-full m-auto">
            {gallary_col1.map((img, key) => <>
                <Image 
                    src={img}
                    alt='awning-image'
                    className='h-auto max-w-full rounded-lg '
                    key={key}
                />
            </>)}
        </div>
  )
}
