import storyImage from '../../assets/images/story.jpg'
import { SECTION_IDS } from '../../data/sections'
import { STORY_INTRO, STORY_VALUES } from '../../data/story'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

// Telefonda iki satır ("Dost Olmak," / "Paylaşmak"), geniş ekranda tek satır.
const STORY_TITLE = (
  <span className="sm:whitespace-nowrap">
    <span className="hidden sm:inline">Yâren: </span>
    Dost Olmak, <br className="sm:hidden" />
    <em className="font-medium text-cream/85">Paylaşmak</em>
  </span>
)

export function Story() {
  return (
    <Section id={SECTION_IDS.story} className="bg-wood text-cream">
      <Container>
        <SectionHeading eyebrow="Hikâyemiz" title={STORY_TITLE} tone="dark" />

        <div className="mt-8 grid gap-8 md:mt-12 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="h-full">
            <img
              src={storyImage}
              alt="Kavurma makinesinden dökülen sıcak kahve çekirdekleri"
              loading="lazy"
              className="aspect-4/3 w-full rounded-3xl object-cover shadow-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal
            delayMs={150}
            className="flex h-full flex-col justify-between gap-10"
          >
            <p className="text-center leading-relaxed text-cream/80 md:text-left md:text-lg">
              {STORY_INTRO}
            </p>

            <ul className="grid gap-6 text-center sm:grid-cols-3 md:text-left">
              {STORY_VALUES.map(({ title, description }) => (
                <li key={title}>
                  <h3 className="font-display text-xl font-bold text-copper">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
