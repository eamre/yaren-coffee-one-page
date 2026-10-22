import { BRAND } from '../../data/brand'
import { NAV_LINKS } from '../../data/sections'
import { Container } from '../ui/Container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-wood py-12 text-cream">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="font-display text-3xl font-bold">{BRAND.name}</p>
        <p className="text-cream/80 italic">{BRAND.slogan}</p>

        <nav aria-label="Alt menü" className="flex gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="py-3 text-cream/80 transition-colors hover:text-copper"
            >
              {label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-cream/60">
          © {currentYear} {BRAND.name}. Fotoğraflar:{' '}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-copper"
          >
            Unsplash
          </a>
        </p>
      </Container>
    </footer>
  )
}
