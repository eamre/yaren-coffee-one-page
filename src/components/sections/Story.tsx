import storyImage from '../../assets/images/story.jpg'
import { SECTION_IDS } from '../../data/sections'
import { STORY_INTRO, STORY_VALUES } from '../../data/story'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Story() {
  return (
    <section id={SECTION_IDS.story} className="bg-wood py-24 text-cream">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img
            src={storyImage}
            alt="Kavurma makinesinden dökülen sıcak kahve çekirdekleri"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
          />
        </Reveal>

        <Reveal delayMs={150}>
          <SectionHeading
            eyebrow="Hikâyemiz"
            title="Yâren: dost olmak, paylaşmak"
            description={STORY_INTRO}
            tone="dark"
            align="left"
          />

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
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
      </Container>
    </section>
  )
}
