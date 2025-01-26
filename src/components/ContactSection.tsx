import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-8 sm:mt-10 md:mt-12 mx-4 md:mx-4">
      <FadeIn className="-mx-6 rounded-4xl bg-sky-600 px-6 py-8 sm:mx-0 sm:py-16 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Contact Us
              </Button>
            </div>
            {/* <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our offices
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div> */}
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
