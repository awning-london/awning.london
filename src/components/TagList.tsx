import clsx from 'clsx'

export function TagList({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <ul role="list" className={clsx(className, 'flex flex-wrap gap-4')}>
      {children}
    </ul>
  )
}

export function TagListItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <li
      className={clsx(
        'rounded-full bg-sky-100 px-4 py-1.5 text-base text-sky-700',
        className,
      )}
    >
      {children}
    </li>
  )
}
