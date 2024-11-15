import Image from 'next/image'
import React from 'react'
import Awn1 from '@/images/1.jpg'
import Awn2 from '@/images/2.jpg'
import Awn3 from '@/images/3.jpg'
import Awn4 from '@/images/4.jpg'
import Awn5 from '@/images/5.jpg'
import Awn6 from '@/images/work/a1.jpg'
import Awn7 from '@/images/work/a2.jpg'
import Awn8 from '@/images/work/a3.jpg'
import Awn9 from '@/images/work/a4.jpg'
import Awn10 from '@/images/work/a5.jpg'
import Awn11 from '@/images/work/a6.jpg'
import Awn12 from '@/images/work/a7.jpg'
import Awn13 from '@/images/work/a8.jpg'
import Awn14 from '@/images/work/a9.jpg'
import Awn15 from '@/images/work/a10.jpg'


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
        Awn15,
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
