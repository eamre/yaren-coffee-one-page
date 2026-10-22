import type { ReactNode } from 'react'
import { classNames } from '../../utils/classNames'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={classNames('py-16 md:py-24', className)}>
      {children}
    </section>
  )
}
