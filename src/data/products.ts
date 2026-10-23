import espressoImage from '../assets/images/espresso.webp'
import filterCoffeeImage from '../assets/images/filter-coffee.webp'
import turkishCoffeeImage from '../assets/images/turkish-coffee.webp'
import type { Product } from '../types'

export const PRODUCTS: Product[] = [
  {
    id: 'turkish-coffee',
    name: 'Türk Kahvesi',
    description:
      'Bakır cezvede, kısık ateşte pişen yoğun ve köpüklü klasik. Yanında bir bardak su ve bir parça lokum.',
    price: 85,
    image: turkishCoffeeImage,
    imageAlt:
      'Bakır tepside desenli fincanda köpüklü Türk kahvesi, yanında su bardağı ve lokum',
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description:
      'Taze çekilmiş çekirdeklerden, tam basınçta çıkan kısa ve kremalı bir fincan. Güne tek yudumda başla.',
    price: 75,
    image: espressoImage,
    imageAlt: 'Portafiltreden bardağa akan taze espresso',
  },
  {
    id: 'filter-coffee',
    name: 'Filtre Kahve',
    description:
      'Elle demlenen, hafif gövdeli ve aromatik bir kahve. Sohbet ederken yavaş yavaş içmelik.',
    price: 95,
    image: filterCoffeeImage,
    imageAlt: 'Chemex ile demlenen filtre kahve',
  },
]
