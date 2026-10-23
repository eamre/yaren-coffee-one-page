import type { ContactFormErrors, ContactFormValues } from '../types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MIN_NAME_LENGTH = 2
const MIN_MESSAGE_LENGTH = 10

type FieldValidator = (value: string) => string | undefined

const validateName: FieldValidator = (value) => {
  const name = value.trim()
  if (!name) return 'Lütfen adınızı girin.'
  if (name.length < MIN_NAME_LENGTH) {
    return `Ad en az ${MIN_NAME_LENGTH} karakter olmalı.`
  }
}

const validateEmail: FieldValidator = (value) => {
  const email = value.trim()
  if (!email) return 'Lütfen e-posta adresinizi girin.'
  if (!EMAIL_PATTERN.test(email)) return 'Geçerli bir e-posta adresi girin.'
}

const validateMessage: FieldValidator = (value) => {
  const message = value.trim()
  if (!message) return 'Lütfen mesajınızı yazın.'
  if (message.length < MIN_MESSAGE_LENGTH) {
    return `Mesaj en az ${MIN_MESSAGE_LENGTH} karakter olmalı.`
  }
}

const FIELD_VALIDATORS: Record<keyof ContactFormValues, FieldValidator> = {
  name: validateName,
  email: validateEmail,
  message: validateMessage,
}

export function validateField(
  field: keyof ContactFormValues,
  value: string,
): string | undefined {
  return FIELD_VALIDATORS[field](value)
}

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {}

  for (const field of Object.keys(FIELD_VALIDATORS) as Array<
    keyof ContactFormValues
  >) {
    const error = validateField(field, values[field])
    if (error) errors[field] = error
  }

  return errors
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}
