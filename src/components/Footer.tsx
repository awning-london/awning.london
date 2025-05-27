import Link from 'next/link'

import { Container } from '@/components/Container'
import Logo from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'Fixed', href: '/work/fixed-awning' },
      { title: 'Manual', href: '/work/manual-awning' },
      { title: 'Retractable', href: '/work/retractable-awning' },
      {
        title: (
          <>
            Work <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/about' },
      { title: 'Contact us', href: '/contact' },
      { title: 'Services', href: '/services' },
      { title: 'Process', href: '/installation-process' },
      { title: 'Fix & Repair', href: '/fix-repair' },
      { title: 'Color & Palette', href: '/color-palette' },
      { title: 'Feedback', href: '/feedback' },
      { title: 'Business Card', href: '/business-card' },
    ],
  },
  {
    title: 'Services',
    links: [
      { title: 'Residential', href: '/services/residential-awning' },
      { title: 'Custom', href: '/services/custom-awning' },
      {
        title: (
          <>
            Services <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/services',
      },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
  {
    title: 'Blog',
    links: [
      { title: 'Best Choice', href: '/blog/best-awnings-for-homes' },
      { title: 'Which one is better?', href: '/blog/retractable-vs-fixed-awnings' },
    ],
  },
  {
    title: 'Other',
    links: [
      { title: 'Storefront Sign', href: '/storefront-signs' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-sky-950">
              {section.title}
            </div>
            <ul role="list" className="mt-2 text-sm text-sky-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-1">
                  <Link
                    href={link.href}
                    className="transition hover:text-sky-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}


export function Footer() {
  return (
    <Container as="footer" data-testid="footer" className="mt-8 w-full sm:mt-10 lg:mt-12">
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2">
          <Navigation />
        </div>
        <div className="mb-6 mt-8 pt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
          <p className="text-sm text-sky-700">
            © Awning London Inc. {new Date().getFullYear()}
          </p>
        </div>
    </Container>
  )
}
