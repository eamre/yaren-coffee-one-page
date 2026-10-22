import type { NavLink } from '../types'

export const SECTION_IDS = {
  products: 'urunler',
  story: 'hikaye',
  contact: 'iletisim',
} as const

export const NAV_LINKS: NavLink[] = [
  { label: 'Kahveler', href: `#${SECTION_IDS.products}` },
  { label: 'Hikâyemiz', href: `#${SECTION_IDS.story}` },
  { label: 'İletişim', href: `#${SECTION_IDS.contact}` },
]
