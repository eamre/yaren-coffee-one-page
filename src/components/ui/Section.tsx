import type { ReactNode } from 'react'
import { classNames } from '../../utils/classNames'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

// Sayfa bölümlerinin ortak kabuğu: menü bağlantısı için `id`, dikey boşluk ve
// masaüstünde tam ekran yükseklik.
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={classNames('py-16 md:flex md:min-h-svh md:items-center md:py-24', className)}>
      {children}
    </section>
  )
}
