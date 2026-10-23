import { describe, expect, it } from 'vitest'
import type { ContactFormValues } from '../types'
import { hasErrors, validateContactForm, validateField } from './validators'

describe('validateField: name', () => {
  it.each([
    ['', 'Lütfen adınızı girin.'],
    ['   ', 'Lütfen adınızı girin.'],
    ['A', 'Ad en az 2 karakter olmalı.'],
  ])('rejects "%s"', (value, message) => {
    expect(validateField('name', value)).toBe(message)
  })

  it.each(['Ay', 'Ayşe', '  Ayşe  '])('accepts "%s"', (value) => {
    expect(validateField('name', value)).toBeUndefined()
  })
})

describe('validateField: email', () => {
  it.each([
    ['', 'Lütfen e-posta adresinizi girin.'],
    ['   ', 'Lütfen e-posta adresinizi girin.'],
    ['ali', 'Geçerli bir e-posta adresi girin.'],
    ['ali@', 'Geçerli bir e-posta adresi girin.'],
    ['ali@example', 'Geçerli bir e-posta adresi girin.'],
    ['ali@example.', 'Geçerli bir e-posta adresi girin.'],
    ['ali baba@example.com', 'Geçerli bir e-posta adresi girin.'],
  ])('rejects "%s"', (value, message) => {
    expect(validateField('email', value)).toBe(message)
  })

  it.each(['ali@example.com', 'ali.veli@mail.example.co', '  ali@example.com  '])(
    'accepts "%s"',
    (value) => {
      expect(validateField('email', value)).toBeUndefined()
    },
  )
})

describe('validateField: message', () => {
  it.each([
    ['', 'Lütfen mesajınızı yazın.'],
    ['   ', 'Lütfen mesajınızı yazın.'],
    ['Merhaba', 'Mesaj en az 10 karakter olmalı.'],
    ['123456789', 'Mesaj en az 10 karakter olmalı.'],
  ])('rejects "%s"', (value, message) => {
    expect(validateField('message', value)).toBe(message)
  })

  it('accepts a message of exactly 10 characters', () => {
    expect(validateField('message', '1234567890')).toBeUndefined()
  })
})

describe('validateContactForm', () => {
  const validValues: ContactFormValues = {
    name: 'Ayşe',
    email: 'ayse@example.com',
    message: 'Kahveleriniz harika görünüyor!',
  }

  it('returns no errors for valid values', () => {
    expect(validateContactForm(validValues)).toEqual({})
  })

  it('returns an error for every empty field', () => {
    const errors = validateContactForm({ name: '', email: '', message: '' })

    expect(Object.keys(errors)).toEqual(['name', 'email', 'message'])
  })

  it('reports only the invalid fields', () => {
    const errors = validateContactForm({ ...validValues, email: 'ayse@' })

    expect(errors).toEqual({ email: 'Geçerli bir e-posta adresi girin.' })
  })
})

describe('hasErrors', () => {
  it('is false for an empty error object', () => {
    expect(hasErrors({})).toBe(false)
  })

  it('is true when there is at least one error', () => {
    expect(hasErrors({ name: 'Lütfen adınızı girin.' })).toBe(true)
  })
})
