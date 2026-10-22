import { useContactForm } from '../../hooks/useContactForm'
import type { SubmitStatus } from '../../types'
import { Button } from '../ui/Button'
import { TextField } from '../ui/TextField'

const STATUS_MESSAGES: Partial<Record<SubmitStatus, string>> = {
  success: 'Teşekkürler! Mesajınız bize ulaştı, en kısa sürede dönüş yapacağız.',
  error: 'Mesaj gönderilemedi. Lütfen biraz sonra tekrar deneyin.',
}

export function ContactForm() {
  const { values, errors, status, setField, handleSubmit } = useContactForm()
  const isSubmitting = status === 'submitting'
  const statusMessage = STATUS_MESSAGES[status]

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <TextField
        id="name"
        label="Ad"
        value={values.name}
        error={errors.name}
        autoComplete="name"
        onChange={(value) => setField('name', value)}
      />
      <TextField
        id="email"
        label="E-posta"
        type="email"
        value={values.email}
        error={errors.email}
        autoComplete="email"
        onChange={(value) => setField('email', value)}
      />
      <TextField
        id="message"
        label="Mesaj"
        multiline
        value={values.message}
        error={errors.message}
        onChange={(value) => setField('message', value)}
      />

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
      </Button>

      {statusMessage && (
        <p
          role={status === 'error' ? 'alert' : 'status'}
          className={
            status === 'error'
              ? 'rounded-xl bg-red-100 px-4 py-3 text-red-800'
              : 'rounded-xl bg-olive/15 px-4 py-3 text-olive-dark'
          }
        >
          {statusMessage}
        </p>
      )}
    </form>
  )
}
