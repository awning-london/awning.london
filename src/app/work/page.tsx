import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import Image from 'next/image'
import { SectionIntro } from '@/components/SectionIntro'
import { Button } from '@/components/Button'
import works from "@/lib/works.json";

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

      <Container className='flex justify-center items-center'>
        {works.map(caseStudy => (
          <>
            <div key={caseStudy.id} className='flex justify-between items-center my-10 md:flex-row flex-col'>
              <Image
                src={caseStudy.imgurl}
                className='rounded-4xl'
                width={300}
                height={300}
                alt='work' />
              <SectionIntro
                title={caseStudy.title}
                className="mt-10 sm:mt-12 md:mt-18"
              >
                <p>
                  {caseStudy.desc}
                </p>
                <Button href={`/work/${caseStudy.id}`} invert={false} className='mt-5'>
                  {caseStudy.btnTitle}
                </Button>
              </SectionIntro>
            </div>
            <hr />
          </>

        ))}
      </Container>

      <ContactSection />
    </>
  )
}
