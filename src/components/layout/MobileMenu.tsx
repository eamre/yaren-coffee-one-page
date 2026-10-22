import { NAV_LINKS } from '../../data/sections'
import { classNames } from '../../utils/classNames'

interface MobileMenuProps {
  isOpen: boolean
  activeHref: string | null
  onNavigate: () => void
}

export function MobileMenu({
  isOpen,
  activeHref,
  onNavigate,
}: MobileMenuProps) {
  return (
    <nav
      id="mobile-menu"
      aria-label="Mobil menü"
      className={classNames(
        'absolute inset-x-0 top-full px-5 pt-2 transition-[opacity,visibility] duration-200 md:hidden motion-reduce:transition-none',
        isOpen
          ? 'animate-menu-in opacity-100 motion-reduce:animate-none'
          : 'pointer-events-none invisible opacity-0',
      )}
    >
      <ul className="divide-y divide-espresso/10 rounded-2xl bg-cream/95 px-6 py-2 shadow-xl backdrop-blur-md">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = href === activeHref

          return (
            <li key={href}>
              <a
                href={href}
                onClick={onNavigate}
                aria-current={isActive ? 'location' : undefined}
                className={classNames(
                  'block py-4 text-center text-lg transition-colors hover:text-olive',
                  isActive ? 'font-medium text-olive' : 'text-espresso',
                )}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
