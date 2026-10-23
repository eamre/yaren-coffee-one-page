import type { ReactNode } from 'react'
import type { StoryValueIcon } from '../../types'

interface ValueIconProps {
  name: StoryValueIcon
  className?: string
}

// Solda duran fincan; sağdaki, aynası alınarak çizilir.
const CUP = (
  <>
    <path d="M3 10.5h7l-1.2 6a1 1 0 0 1-1 .8H5.2a1 1 0 0 1-1-.8z" />
    <path d="M3.2 11.7H2.4a1.5 1.5 0 0 0 0 3H3.7" />
    <path d="M2.8 19.5h7.4" />
  </>
)

const ICON_SHAPES: Record<StoryValueIcon, ReactNode> = {
  // Gelenek: buharı tüten cezve
  cezve: (
    <>
      <path d="M9 6.5h4.2c.3 3 2.3 5 2.8 12H6.2c.5-7 2.5-9 2.8-12z" />
      <path d="M8 6.5h6.2" />
      <path d="M15.2 10c2-1.5 4-3.2 5.8-5.4" />
      <path d="M10 1.4c-.9.8.9 1.6 0 2.6M12.6 1.4c-.9.8.9 1.6 0 2.6" />
    </>
  ),
  // Zanaat: özenle işlenmiş, parıldayan bir çekirdek
  bean: (
    <>
      <g transform="rotate(40 12 12.5)">
        <ellipse cx="12" cy="12.5" rx="5.3" ry="7.3" />
        <path d="M12 5.2c-3.2 3.2 3.2 11.4 0 14.6" />
      </g>
      <path d="M5.5 1.8c.3 1.8.9 2.4 2.7 2.7-1.8.3-2.4.9-2.7 2.7-.3-1.8-.9-2.4-2.7-2.7 1.8-.3 2.4-.9 2.7-2.7z" />
      <path d="M19.5 16.5c.2 1.2.6 1.6 1.8 1.8-1.2.2-1.6.6-1.8 1.8-.2-1.2-.6-1.6-1.8-1.8 1.2-.2 1.6-.6 1.8-1.8z" />
    </>
  ),
  // Sohbet: arasında kalp olan iki fincan
  cups: (
    <>
      {CUP}
      <g transform="matrix(-1 0 0 1 24 0)">{CUP}</g>
      <path d="M12 9.2s-2.7-1.6-2.7-3.5a1.5 1.5 0 0 1 2.7-.9 1.5 1.5 0 0 1 2.7.9c0 1.9-2.7 3.5-2.7 3.5z" />
    </>
  ),
}

// Değer kartlarının çizgi ikonları. Rengi çevresindeki metin rengi belirler
// (`currentColor`); süs olduğu için ekran okuyuculardan gizlidir.
export function ValueIcon({ name, className }: ValueIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {ICON_SHAPES[name]}
    </svg>
  )
}
