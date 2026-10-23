import type { ChangeEvent } from 'react'
import { classNames } from '../../utils/classNames'

interface TextFieldProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  error?: string
  type?: 'text' | 'email'
  multiline?: boolean
  autoComplete?: string
}

const CONTROL_CLASSES =
  'w-full rounded-xl border bg-cream px-4 py-3 text-espresso placeholder:text-espresso/40 transition-colors focus:border-olive focus:outline-2 focus:outline-olive/30'

export function TextField({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  type = 'text',
  multiline = false,
  autoComplete,
}: TextFieldProps) {
  const errorId = `${id}-error`

  const controlProps = {
    id,
    value,
    autoComplete,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    className: classNames(
      CONTROL_CLASSES,
      error ? 'border-red-700' : 'border-espresso/20',
    ),
    onChange: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => onChange(event.target.value),
    onBlur,
  }

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {multiline ? (
        <textarea rows={5} {...controlProps} />
      ) : (
        <input type={type} {...controlProps} />
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}
