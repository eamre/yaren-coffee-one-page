import storyImage from '../../assets/images/story.webp'
import { SECTION_IDS } from '../../data/sections'
import { STORY_INTRO, STORY_VALUES } from '../../data/story'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { ValueIcon } from '../ui/ValueIcon'

// Telefonda iki satır ("Dost Olmak," / "Paylaşmak"), geniş ekranda tek satır.
const STORY_TITLE = (
  <span className="sm:whitespace-nowrap">
    <span className="hidden sm:inline">Yâren: </span>
    Dost Olmak, <br className="sm:hidden" />
    <em className="font-medium text-cream/85">Paylaşmak</em>
  </span>
)

// İkon solda, metin sağda durur. Yalnızca sayfanın tek sütun olduğu ve kartların
// yan yana dizildiği dar tablet genişliğinde ikon üstte, metin ortadadır.
const VALUE_CARD_CLASSES =
  'flex gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-4 sm:flex-col sm:items-center sm:text-center md:flex-row md:items-start md:text-left'

export function Story() {
  return (
    <Section id={SECTION_IDS.story} className="bg-wood text-cream">
      <Container className="md:pb-16">
        <SectionHeading eyebrow="Hikâyemiz" title={STORY_TITLE} tone="dark" />

        <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          <Reveal className="h-full">
            <img
              src={storyImage}
              alt="Kavurma makinesinden dökülen sıcak kahve çekirdekleri"
              loading="lazy"
              className="aspect-4/3 w-full rounded-3xl object-cover shadow-2xl md:aspect-auto md:h-full"
            />
          </Reveal>

          <Reveal
            delayMs={150}
            className="flex h-full flex-col justify-between gap-10"
          >
            <p className="text-center leading-relaxed text-cream/80 md:text-left md:text-base lg:text-lg">
              {STORY_INTRO}
            </p>

            <ul className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
              {STORY_VALUES.map(({ icon, title, description }) => (
                <li key={title} className={VALUE_CARD_CLASSES}>
                  <ValueIcon name={icon} className="h-9 w-9 shrink-0 text-copper" />
                  <div>
                    <h3 className="font-display text-xl font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/75">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
