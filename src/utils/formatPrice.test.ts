import { describe, expect, it } from 'vitest'
import { formatPrice } from './formatPrice'

describe('formatPrice', () => {
  it.each([
    [0, '₺0'],
    [75, '₺75'],
    [85, '₺85'],
    [1250, '₺1.250'],
  ])('formats %d as %s', (price, expected) => {
    expect(formatPrice(price)).toBe(expected)
  })

  it('rounds to whole liras', () => {
    expect(formatPrice(79.6)).toBe('₺80')
  })
})
