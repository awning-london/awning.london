import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function SectionIntro({
  title,
  eyebrow,
  children,
  smaller = false,
  invert = false,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof Container>,
  'title' | 'children'
> & {
  title: string
  eyebrow?: string
  children?: React.ReactNode
  smaller?: boolean
  invert?: boolean
}) {
  return (
    <Container {...props}>
      <FadeIn className="w-full">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  'mb-6 block font-display text-base font-semibold',
                  invert ? 'text-white' : 'text-sky-950',
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              'block font-display tracking-tight [text-wrap:balance]',
              smaller
                ? 'text-lg font-semibold'
                : 'text-xl font-medium sm:text-4xl',
              invert ? 'text-white' : 'text-sky-950',
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              'mt-6 text-xl',
              invert ? 'text-sky-300' : 'text-sky-700',
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  )
}
