import type { Product } from '../../types'
import { formatPrice } from '../../utils/formatPrice'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { name, description, price, image, imageAlt } = product

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-sand shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-bold">{name}</h3>
          <span className="text-lg font-medium text-copper">
            {formatPrice(price)}
          </span>
        </div>
        <p className="mt-3 leading-relaxed text-espresso/75">{description}</p>
      </div>
    </article>
  )
}
