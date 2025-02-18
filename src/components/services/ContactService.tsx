import React from 'react'
import { Container } from '../Container'
import { FadeIn } from '../FadeIn'
import { Button } from '../Button'

export default function ContactService() {
  return (
    <Container className="mt-8 sm:mt-10 md:mt-12 mb-20">
      <FadeIn className="rounded-4xl bg-sky-600 px-6 py-8 sm:mx-0 sm:py-16 md:px-12">
        <div className="mx-2 max-w-5xl">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Button href="tel:+44 7777 602125" invert>
                Get a Free Consult
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
