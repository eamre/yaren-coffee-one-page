import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'

type ButtonVariant = 'primary' | 'outline'

const BASE_CLASSES =
  'inline-flex items-center justify-center rounded-full px-7 py-3 font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper disabled:cursor-not-allowed disabled:opacity-60'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-olive text-cream hover:bg-olive-dark',
  outline:
    'border border-cream/60 bg-espresso/30 text-cream backdrop-blur-sm hover:bg-cream/15',
}

interface VariantProps {
  variant?: ButtonVariant
}

function getButtonClasses(variant: ButtonVariant, className?: string) {
  return classNames(BASE_CLASSES, VARIANT_CLASSES[variant], className)
}

// İki görünümlü (dolu / çerçeveli) buton.
export function Button({
  variant = 'primary',
  className,
  ...props
}: VariantProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={getButtonClasses(variant, className)}
      {...props}
    />
  )
}

// Butonla aynı görünüme sahip bağlantı (örneğin bölüme kaydıran düğmeler için).
export function ButtonLink({
  variant = 'primary',
  className,
  ...props
}: VariantProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={getButtonClasses(variant, className)} {...props} />
}
