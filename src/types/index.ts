export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  imageAlt: string
}

export interface NavLink {
  label: string
  href: string
}

export type StoryValueIcon = 'cezve' | 'bean' | 'cups'

export interface StoryValue {
  icon: StoryValueIcon
  title: string
  description: string
}

export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'
