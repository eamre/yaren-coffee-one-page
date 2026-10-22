import { CONTACT_INFO } from '../../data/brand'
import { SECTION_IDS } from '../../data/sections'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ContactForm } from './ContactForm'

const INFO_ITEMS = [
  { label: 'Adres', value: CONTACT_INFO.address },
  { label: 'E-posta', value: CONTACT_INFO.email },
  { label: 'Çalışma saatleri', value: CONTACT_INFO.hours },
]

export function Contact() {
  return (
    <section id={SECTION_IDS.contact} className="bg-sand py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="İletişim"
            title="Bir fincan sohbete var mısın?"
            description="Sorunuzu, önerinizi ya da selamınızı yazın; bir kahve molasında okuyup size dönelim."
            align="left"
          />

          <dl className="mt-10 space-y-6">
            {INFO_ITEMS.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-sm font-medium tracking-wider text-copper uppercase">
                  {label}
                </dt>
                <dd className="mt-1 text-lg">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delayMs={150}>
          <div className="rounded-3xl bg-cream p-6 shadow-lg sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
