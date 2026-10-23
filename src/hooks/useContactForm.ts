import { useState, type FormEvent } from 'react'
import { submitContactForm, type ContactSubmitter } from '../services/contactService'
import type {
  ContactFormErrors,
  ContactFormValues,
  SubmitStatus,
} from '../types'
import {
  hasErrors,
  validateContactForm,
  validateField,
} from '../utils/validators'

const EMPTY_VALUES: ContactFormValues = { name: '', email: '', message: '' }

// İletişim formunun durumunu (değerler, hatalar, gönderim) ve olaylarını yönetir.
export function useContactForm(submit: ContactSubmitter = submitContactForm) {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  function setField(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setStatus('idle')
  }

  // Alandan çıkılınca hatayı hemen göster. Boş alan burada yoksayılır: kullanıcı
  // sadece Tab ile geçiyor olabilir, boşluk gönderirken zaten kontrol edilir.
  function handleBlur(field: keyof ContactFormValues) {
    const value = values[field]
    if (!value.trim()) return

    setErrors((current) => ({ ...current, [field]: validateField(field, value) }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)
    if (hasErrors(validationErrors)) return

    setStatus('submitting')
    try {
      await submit(values)
      setValues(EMPTY_VALUES)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return { values, errors, status, setField, handleBlur, handleSubmit }
}
