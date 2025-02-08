import { FadeIn } from '@/components/FadeIn'
import { type Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Contact Us | Awning London',
  description: 'Let’s work together. We can’t wait to hear from you. Get in touch with Awning London for all your awning needs.',
}

export default function Custom() {
  return (
    <FadeIn>
      <section className="bg-[url('/banner-bg1.jpg')] my-20 h-[500px] bg-cover rounded-4xl relative">
        <h1 className='text-4xl font-bold text-white absolute top-[50%] left-[50%] translate-x-[-50%] tracking-widest'>Custom Awnings in London</h1>
        <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white lg:flex hidden'>Enhance your property’s curb appeal with our premium custom awnings in London. Our service is designed for clients who value unique, tailor-made solutions. From initial design consultations to expert installation, we work closely with you to create awnings that perfectly complement your home or business aesthetic.</p>
      </section>
    </FadeIn>
  )
}
