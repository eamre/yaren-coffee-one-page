import { describe, expect, it } from 'vitest'
import { classNames } from './classNames'

describe('classNames', () => {
  it('joins the given class names with a space', () => {
    expect(classNames('flex', 'items-center')).toBe('flex items-center')
  })

  it('skips false, null, undefined and empty values', () => {
    expect(classNames('a', false, null, undefined, '', 'b')).toBe('a b')
  })

  it('supports conditional classes', () => {
    const isActive = true
    const isDisabled = false

    expect(classNames('btn', isActive && 'active', isDisabled && 'disabled')).toBe(
      'btn active',
    )
  })

  it('returns an empty string when nothing is given', () => {
    expect(classNames()).toBe('')
    expect(classNames(false, null)).toBe('')
  })
})
