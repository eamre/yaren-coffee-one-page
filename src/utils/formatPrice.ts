const priceFormatter = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 0,
})

// Fiyatı Türk lirası olarak, kuruşsuz yazar (ör. 85 → ₺85).
export function formatPrice(price: number): string {
  return priceFormatter.format(price)
}
