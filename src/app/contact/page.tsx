import { type Metadata } from 'next'
import Link from 'next/link'
import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { ContactForm } from './contact-form'



function ContactDetails() {
  return (
    <FadeIn>
      <Border className="mt-4 pt-4">
        <h2 className="font-display text-base font-semibold text-sky-950">
          Email us
        </h2>
        <dl className="mt-2 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Contact', 'info@awning.london'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-sky-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-sky-700 hover:text-sky-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-4 pt-4">
        <h2 className="font-display text-base font-semibold text-sky-950">
          Get in touch
        </h2>
        <dl className="mt-2 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Contact', '+44 7777 602125'],
          ].map(([label, phone]) => (
            <div key={phone}>
              <dt className="font-semibold text-sky-950">{label}</dt>
              <dd>
                <Link
                  href={`tel:${phone}`}
                  className="text-sky-700 hover:text-sky-950"
                >
                  {phone}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>


      <Border className="mt-4 pt-4">
        <h2 className="font-display text-base font-semibold text-sky-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us | Awning London',
  description: 'Let’s work together. We can’t wait to hear from you. Get in touch with Awning London for all your awning needs.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-4 sm:mt-12 md:mt-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  )
}
