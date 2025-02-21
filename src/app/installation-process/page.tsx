import { type Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import img1 from '@/images/a23.jpg'
import img2 from '@/images/a22.jpg'
import img3 from '@/images/a21.jpg'
import img4 from '@/images/a24.jpg'
import ScrollButton from '@/components/ScrollButton'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-sky-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-sky-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Consultation() {
  return (
    <Section title="Consultation & Assessment" image={{ src: img1 }}>
      <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Initial Contact">
          Schedule a free consultation via phone, email, or our website.
        </ListItem>
        <ListItem title="Needs Analysis">
          Discuss your specific requirements (residential/commercial, type, style, and usage).
        </ListItem>
        <ListItem title="Site Visit">
          Our experts visit your location to assess the space, measure dimensions, and evaluate structural considerations.
        </ListItem>
        <ListItem title="Material & Design Selection">
          Choose from a variety of materials, colors, and awning types to suit your needs and architectural style.
        </ListItem>
      </List>
    </Section>
  )
}

function Measurement() {
  return (
    <Section title="Accurate Measurement" image={{ src: img2 }}>
      <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Precise Measurements">
          We ensure accurate dimensions for a perfect fit.
        </ListItem>
        <ListItem title="Customized Design Plan">
          Present a detailed design plan and confirm final choices.
        </ListItem>
        <ListItem title="Transparent Quotation">
          Provide a comprehensive quote covering materials, labor, and estimated timeline.
        </ListItem>
      </List>
    </Section>
  )
}

function Fabrication() {
  return (
    <Section title="Fabrication & Customization" image={{ src: img3 }}>
      <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Material Procurement">
          Source high-quality, durable materials.
        </ListItem>
        <ListItem title="Custom Fabrication">
          Our skilled team fabricates the canopy or awning according to your specifications.
        </ListItem>
        <ListItem title="Quality Control">
          Rigorous quality checks ensure all components meet our standards.
        </ListItem>
      </List>
    </Section>
  )
}

function Installation() {
  return (
    <Section title="Professional Installation" image={{ src: img4 }}>
      <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
        <ListItem title="Preparation">
          Prepare the site, ensuring minimal disruption.
        </ListItem>
        <ListItem title="Secure Mounting">
          Install mounting brackets securely to walls or supports.
        </ListItem>
        <ListItem title="Awning/Canopy Fitting">
          Attach the awning/canopy, ensuring alignment and stability.
        </ListItem>
        <ListItem title="Motorized Features (if applicable)">
          Install and test motorized controls or smart home integration systems.
        </ListItem>
        <ListItem title="Final Inspection">
          Conduct a thorough check to ensure proper installation and functionality.
        </ListItem>
      </List>
    </Section>
  )
}


export const metadata: Metadata = {
  title: 'Awning & Canopy Installation Process | Step-by-Step Guide – Awning.London',
  description:
    'Learn about our seamless awning and canopy installation process at Awning.London. From consultation to measurement and final installation, we ensure quality and timely service. Discover maintenance tips for long-lasting awnings.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Consultation />
        <Measurement />
        <Fabrication  />
        <Installation  />
      </div>

      <ContactSection />
      <ScrollButton/>
    </>
  )
}
