import heroImage from '../../assets/images/hero.jpg'
import { BRAND } from '../../data/brand'
import { SECTION_IDS } from '../../data/sections'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Steam } from '../ui/Steam'

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-espresso text-cream">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/90" />

      <Container className="relative py-32 text-center">
        <Steam />
        <h1 className="font-display text-6xl font-bold sm:text-8xl">
          {BRAND.name}
        </h1>
        <p className="mt-4 font-display text-xl text-cream/90 italic sm:text-3xl">
          {BRAND.slogan}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          {BRAND.tagline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href={`#${SECTION_IDS.products}`}>
            Kahveleri Keşfet
          </ButtonLink>
          <ButtonLink href={`#${SECTION_IDS.contact}`} variant="outline">
            Bize Yazın
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
