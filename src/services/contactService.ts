import type { ContactFormValues } from '../types'

export type ContactSubmitter = (values: ContactFormValues) => Promise<void>

const SIMULATED_DELAY_MS = 800

// Sunucu bağlantısı yok: gönderimi kısa bir gecikmeyle taklit eder.
// Gerçek bir API'ye geçerken yalnızca bu fonksiyon değişir.
export const submitContactForm: ContactSubmitter = () =>
  new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS))
