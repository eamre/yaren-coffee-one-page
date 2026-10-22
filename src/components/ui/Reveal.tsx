import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { classNames } from '../../utils/classNames'

interface RevealProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={classNames(
        'transition duration-700 ease-out motion-reduce:transition-none',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
