import espressoImage from '../assets/images/espresso.jpg'
import filterCoffeeImage from '../assets/images/filter-coffee.jpg'
import turkishCoffeeImage from '../assets/images/turkish-coffee.jpg'
import type { Product } from '../types'

export const PRODUCTS: Product[] = [
  {
    id: 'turkish-coffee',
    name: 'Türk Kahvesi',
    description:
      'Bakır cezvede, kısık ateşte pişen yoğun ve köpüklü klasik. Yanında bir bardak su ve bir parça lokum.',
    price: 85,
    image: turkishCoffeeImage,
    imageAlt: 'Köpüklü bir fincan Türk kahvesi',
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description:
      'Taze çekilmiş çekirdeklerden, tam basınçta çıkan kısa ve kremalı bir fincan. Güne tek yudumda başla.',
    price: 75,
    image: espressoImage,
    imageAlt: 'Portafiltrede kahve çekirdekleri ve latte art',
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
