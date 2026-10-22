import { classNames } from '../../utils/classNames'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'center',
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <header
      className={classNames(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
      )}
    >
      <p className="text-sm font-medium tracking-[0.2em] text-copper uppercase">
        {eyebrow}
      </p>
      <h2
        className={classNames(
          'mt-3 font-display text-3xl font-bold sm:text-4xl',
          isDark ? 'text-cream' : 'text-espresso',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={classNames(
            'mt-4 text-lg leading-relaxed',
            isDark ? 'text-cream/80' : 'text-espresso/75',
          )}
        >
          {description}
        </p>
      )}
    </header>
  )
}
