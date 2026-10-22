import type { ReactNode } from 'react'
import heroImage from '../../assets/images/hero.jpg'
import { BRAND } from '../../data/brand'
import { SECTION_IDS } from '../../data/sections'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Steam } from '../ui/Steam'

// Fotoğrafla aynı yaklaştırma ve kırpmayı paylaşan katman: içindeki öğeler
// fotoğraftaki aynı noktaya yüzdeyle bağlanır.
function PhotoFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="hero-photo pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 scale-[1.35]">
        <div className="hero-photo-frame">{children}</div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-start overflow-hidden bg-espresso text-cream">
      <PhotoFrame>
        <img
          src={heroImage}
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </PhotoFrame>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_38%_at_50%_44%,color-mix(in_srgb,var(--color-espresso)_55%,transparent),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,color-mix(in_srgb,var(--color-espresso)_85%,transparent)_85%)]" />
      <PhotoFrame>
        <Steam className="hero-steam absolute top-[70%] left-[56%] -translate-x-1/2 -translate-y-full" />
      </PhotoFrame>

      <Container className="relative pt-44 text-center [text-shadow:0_1px_14px_rgb(0_0_0/0.5)] md:pt-48">
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
