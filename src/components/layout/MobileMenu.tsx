import { NAV_LINKS } from '../../data/sections'
import { classNames } from '../../utils/classNames'

interface MobileMenuProps {
  isOpen: boolean
  onNavigate: () => void
}

export function MobileMenu({ isOpen, onNavigate }: MobileMenuProps) {
  return (
    <nav
      id="mobile-menu"
      aria-label="Mobil menü"
      className={classNames(
        'absolute inset-x-0 top-full px-5 pt-2 transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none md:hidden',
        isOpen
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none invisible -translate-y-3 opacity-0',
      )}
    >
      <ul className="divide-y divide-espresso/10 rounded-2xl bg-cream/95 px-6 py-2 shadow-xl backdrop-blur-md">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={onNavigate}
              className="block py-4 text-center text-lg text-espresso transition-colors hover:text-olive"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
