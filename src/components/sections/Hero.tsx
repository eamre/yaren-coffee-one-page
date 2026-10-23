import type { ReactNode } from 'react'
import heroPortrait from '../../assets/images/hero-portrait.webp'
import heroWide from '../../assets/images/hero-wide.webp'
import { BRAND } from '../../data/brand'
import { SECTION_IDS } from '../../data/sections'
import { classNames } from '../../utils/classNames'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Steam } from '../ui/Steam'

// Masaüstü fotoğrafına geçilen ekran genişliği (Tailwind'in `md` sınırı).
const WIDE_PHOTO_MEDIA = '(min-width: 768px)'

// Masaüstünde yazı bloğunun (yaklaşık 18 rem yüksekliğinde) altı, fotoğraftaki
// fincanın kenarından yaklaşık 1,8 rem yukarıda bitsin diye üst boşluk ekran
// yüksekliğine göre hesaplanır. Fincan kenarı fotoğrafın yaklaşık %62,8'inde.
const WIDE_TEXT_TOP_PADDING = 'md:pt-[max(6.5rem,calc(62.8svh_-_20.0rem))]'

// Fotoğrafla aynı yaklaştırma ve kırpmayı paylaşan katman: içindeki öğeler
// fotoğraftaki aynı noktaya yüzdeyle bağlanır. Fotoğrafa özgü sayılar
// (yaklaştırma, odak, fincan konumu) `index.css` içinde tanımlıdır.
function PhotoFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="hero-photo pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div className="hero-photo-zoom absolute inset-0">
        <div className="hero-photo-frame">{children}</div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-start overflow-hidden bg-espresso text-cream">
      <PhotoFrame>
        <picture className="contents">
          <source media={WIDE_PHOTO_MEDIA} srcSet={heroWide} />
          <img
            src={heroPortrait}
            alt=""
            fetchPriority="high"
            className="block h-full w-full object-cover"
          />
        </picture>
      </PhotoFrame>
      <div className="hero-text-scrim absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
      <PhotoFrame>
        <div className="hero-steam-anchor">
          <Steam className="hero-steam" />
        </div>
      </PhotoFrame>

      <Container
        className={classNames(
          'relative pt-44 text-center [text-shadow:0_1px_14px_rgb(0_0_0/0.5)]',
          WIDE_TEXT_TOP_PADDING,
        )}
      >
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
