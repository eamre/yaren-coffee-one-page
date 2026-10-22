import { useState } from 'react'
import { BRAND } from '../../data/brand'
import { NAV_LINKS } from '../../data/sections'
import { useScrolled } from '../../hooks/useScrolled'
import { classNames } from '../../utils/classNames'
import { Container } from '../ui/Container'

const NAV_LINK_CLASSES = 'text-cream/90 transition-colors hover:text-copper'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrolled()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={classNames(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        isScrolled || isMenuOpen
          ? 'bg-espresso/95 shadow-lg backdrop-blur'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="font-display text-3xl font-bold text-cream"
          onClick={closeMenu}
        >
          {BRAND.name}
        </a>

        <nav aria-label="Ana menü" className="hidden gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={NAV_LINK_CLASSES}>
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="p-2 text-cream md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {isMenuOpen && (
        <nav id="mobile-menu" aria-label="Mobil menü" className="md:hidden">
          <Container className="flex flex-col gap-4 pb-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className={classNames(NAV_LINK_CLASSES, 'py-2 text-lg')}
              >
                {label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
