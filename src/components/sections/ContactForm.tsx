import { useContactForm } from '../../hooks/useContactForm'
import type { SubmitStatus } from '../../types'
import { Button } from '../ui/Button'
import { TextField } from '../ui/TextField'

interface StatusFeedback {
  message: string
  role: 'status' | 'alert'
  className: string
}

const FEEDBACK_BASE_CLASSES = 'rounded-xl px-4 py-3'

// Gönderim sonucuna göre gösterilen geri bildirim. Yeni bir durum eklemek
// için buraya bir kayıt eklemek yeterli.
const STATUS_FEEDBACK: Partial<Record<SubmitStatus, StatusFeedback>> = {
  success: {
    message:
      'Teşekkürler! Mesajınız bize ulaştı, en kısa sürede dönüş yapacağız.',
    role: 'status',
    className: `${FEEDBACK_BASE_CLASSES} bg-olive/15 text-olive-dark`,
  },
  error: {
    message: 'Mesaj gönderilemedi. Lütfen biraz sonra tekrar deneyin.',
    role: 'alert',
    className: `${FEEDBACK_BASE_CLASSES} bg-red-100 text-red-800`,
  },
}

export function ContactForm() {
  const { values, errors, status, setField, handleBlur, handleSubmit } =
    useContactForm()
  const isSubmitting = status === 'submitting'
  const feedback = STATUS_FEEDBACK[status]

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <TextField
        id="name"
        label="Ad"
        value={values.name}
        error={errors.name}
        autoComplete="name"
        onChange={(value) => setField('name', value)}
        onBlur={() => handleBlur('name')}
      />
      <TextField
        id="email"
        label="E-posta"
        type="email"
        value={values.email}
        error={errors.email}
        autoComplete="email"
        onChange={(value) => setField('email', value)}
        onBlur={() => handleBlur('email')}
      />
      <TextField
        id="message"
        label="Mesaj"
        multiline
        value={values.message}
        error={errors.message}
        onChange={(value) => setField('message', value)}
        onBlur={() => handleBlur('message')}
      />

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
      </Button>

      {feedback && (
        <p role={feedback.role} className={feedback.className}>
          {feedback.message}
        </p>
      )}
    </form>
  )
}
