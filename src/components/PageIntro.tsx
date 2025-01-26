import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
}) {
  return (
    <Container
      className={clsx('mt-8 sm:mt-10 md:mt-12', centered && 'text-center')}
    >
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-sky-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-4 block max-w-5xl font-display text-4xl font-medium tracking-tight text-sky-950 [text-wrap:balance] sm:text-6xl',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-2 max-w-3xl text-xl text-sky-800',
            centered && 'mx-auto',
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  )
}
