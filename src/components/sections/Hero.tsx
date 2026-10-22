import type { ReactNode } from 'react'
import heroImage from '../../assets/images/hero.webp'
import { BRAND } from '../../data/brand'
import { SECTION_IDS } from '../../data/sections'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Steam } from '../ui/Steam'

// Fotoğrafın yaklaştırma oranı: yanlardaki dekoratif bitkileri dışarıda bırakır.
const PHOTO_ZOOM = 1.35

// Öndeki fincanın yüzey merkezi, fotoğrafın yüzdesi olarak. Duman buradan çıkar.
// Fotoğraf değişirse yalnızca bu değer güncellenir.
const CUP_SURFACE = { left: '56%', top: '70%' }

// Fotoğrafla aynı yaklaştırma ve kırpmayı paylaşan katman: içindeki öğeler
// fotoğraftaki aynı noktaya yüzdeyle bağlanır.
function PhotoFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="hero-photo pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0" style={{ scale: PHOTO_ZOOM }}>
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
      <div className="hero-text-scrim absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
      <PhotoFrame>
        <div
          className="absolute -translate-x-1/2 -translate-y-full"
          style={CUP_SURFACE}
        >
          <Steam className="hero-steam" />
        </div>
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
