import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-sky-950 hover:bg-sky-200'
      : 'bg-sky-600 text-white hover:bg-sky-500',
  )

  const inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
