import type { ReactNode } from 'react'
import { classNames } from '../../utils/classNames'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
}

// Etiketin yanındaki ince çizgi (süs): rengini etiketten alır.
function EyebrowLine() {
  return (
    <span aria-hidden="true" className="h-px w-8 bg-current opacity-70 sm:w-12" />
  )
}

// Bölüm başlığı: üstte küçük etiket, altında başlık ve isteğe bağlı açıklama.
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'center',
}: SectionHeadingProps) {
  const isDark = tone === 'dark'
  const isCentered = align === 'center'

  return (
    <header className={classNames('max-w-2xl', isCentered && 'mx-auto')}>
      <p
        className={classNames(
          'flex items-center gap-4 text-base font-semibold tracking-[0.2em] text-copper uppercase',
          isCentered ? 'justify-center' : 'justify-start',
        )}
      >
        <EyebrowLine />
        {eyebrow}
        <EyebrowLine />
      </p>
      <h2
        className={classNames(
          'mt-9 font-display text-3xl font-bold text-balance sm:text-4xl',
          isCentered && 'text-center',
          isDark ? 'text-cream' : 'text-espresso',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={classNames(
            'mt-4 text-lg leading-relaxed',
            isCentered && 'text-center',
            isDark ? 'text-cream/80' : 'text-espresso/75',
          )}
        >
          {description}
        </p>
      )}
    </header>
  )
}
