// import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-sky-50 py-10 sm:py-12 md:py-16',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <h4 className="mb-5">
              Comments of our customers
            </h4>
            <blockquote className="relative font-display text-xl font-medium tracking-tight text-sky-950 lg:text-3xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
