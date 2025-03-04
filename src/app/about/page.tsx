import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'


export const metadata: Metadata = {
  title: 'About Us | Awning London',
  description:
    'Awning London is a leading provider of high-quality, durable awning solutions in London. We specialize in crafting custom-designed, stylish awnings that enhance the functionality and aesthetics of outdoor spaces.',
}

export default async function About() {

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          At Awning London, we specialize in crafting high-quality,
          durable awning solutions that enhance both the functionality and aesthetics of outdoor spaces. 
          Based in London, we understand the unique needs of our community, 
          providing tailored shading options that offer comfort, protection, and style.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Founded with a commitment to quality and customer satisfaction, we have become a trusted name in the industry. 
          Our range includes retractable, motorized, and fixed awnings in various designs and materials to suit residential, 
          commercial, and industrial spaces. Whether you’re looking to create a cozy outdoor area for your home or a stylish seating space for your business, our team is dedicated to helping you find the perfect solution.
          </p>
          <p>
          Our approach is centered around collaboration, quality craftsmanship, and personalized service. We guide our clients from consultation through installation, ensuring that each project is tailored to their vision and built to last. 
          At Awning London, our mission is to bring comfort, shade, 
          and beauty to every space we touch.
          </p>
        </div>
      </PageIntro>

      <ContactSection />
    </>
  )
}
