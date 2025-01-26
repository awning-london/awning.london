import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import Gallary from '@/components/WorkGallary'
import { Container } from '@/components/Container'


export const metadata: Metadata = {
  title: 'Our Work | Awning London',
  description:
    'Explore our portfolio of successful projects, showcasing our expertise in creating functional and stylish awnings for a wide range of clients.',
}

export default async function Work() {

  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
      <Container>
        <Gallary />
      </Container>

      <ContactSection />
    </>
  )
}
