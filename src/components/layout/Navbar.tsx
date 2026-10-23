import { useState } from 'react'
import { BRAND } from '../../data/brand'
import { NAV_LINKS, NAV_SECTION_IDS } from '../../data/sections'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrolled } from '../../hooks/useScrolled'
import { useSectionHash } from '../../hooks/useSectionHash'
import { classNames } from '../../utils/classNames'
import { CoffeeBean } from '../ui/CoffeeBean'
import { Container } from '../ui/Container'
import { MenuIcon } from './MenuIcon'
import { MobileMenu } from './MobileMenu'

const DESKTOP_LINK_CLASSES = 'relative transition-colors hover:text-copper'

// Sayfa başında çubuk şeffaftır; yazılar fotoğrafın açık bölgelerinde de
// okunsun diye harflerin etrafına yumuşak, koyu bir gölge çizilir.
const CLEAR_BAR_CLASSES =
  'bg-transparent [text-shadow:0_1px_8px_rgb(0_0_0/0.7),0_0_2px_rgb(0_0_0/0.5)]'

// Üst çubuk: logo, masaüstü menüsü ve telefon menüsü düğmesi. Kaydırınca zemin
// belirir, hangi bölümdeysek menüde çekirdekle işaretlenir.
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrolled()
  const activeSectionId = useActiveSection(NAV_SECTION_IDS)
  const activeHref = activeSectionId ? `#${activeSectionId}` : null
  useSectionHash(activeSectionId)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={classNames(
        'fixed inset-x-0 top-0 z-50 backdrop-blur transition-colors duration-300',
        isScrolled ? 'bg-navbar/88 shadow-lg' : CLEAR_BAR_CLASSES,
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
                <CoffeeBean
                  className={classNames(
                    'absolute -bottom-3 left-1/2 h-3 w-2.5 -translate-x-1/2 text-copper transition duration-300',
                    isActive
                      ? 'rotate-25 scale-100 opacity-100'
                      : '-rotate-45 scale-0 opacity-0',
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
