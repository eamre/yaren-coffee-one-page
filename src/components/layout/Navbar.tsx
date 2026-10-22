import { useState } from 'react'
import { BRAND } from '../../data/brand'
import { NAV_LINKS, NAV_SECTION_IDS } from '../../data/sections'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { classNames } from '../../utils/classNames'
import { Container } from '../ui/Container'
import { MenuIcon } from './MenuIcon'
import { MobileMenu } from './MobileMenu'

const DESKTOP_LINK_CLASSES = 'relative transition-colors hover:text-copper'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrolled()
  const activeSectionId = useActiveSection(NAV_SECTION_IDS)
  const activeHref = activeSectionId ? `#${activeSectionId}` : null

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={classNames(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        isScrolled
          ? 'bg-espresso/95 shadow-lg backdrop-blur'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="py-1 font-display text-3xl font-bold text-cream"
          onClick={closeMenu}
        >
          {BRAND.name}
        </a>

        <nav aria-label="Ana menü" className="hidden gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = href === activeHref

            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? 'location' : undefined}
                className={classNames(
                  DESKTOP_LINK_CLASSES,
                  isActive ? 'text-cream' : 'text-cream/80',
                )}
              >
                {label}
                <span
                  aria-hidden="true"
                  className={classNames(
                    'absolute -bottom-2 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-copper transition duration-300',
                    isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
                  )}
                />
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="p-2.5 text-cream md:hidden"
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </Container>

      <MobileMenu
        isOpen={isMenuOpen}
        activeHref={activeHref}
        onNavigate={closeMenu}
      />
    </header>
  )
}
