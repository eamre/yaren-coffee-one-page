type ClassValue = string | false | null | undefined

// Yalnızca geçerli (boş olmayan) sınıfları birleştirir; koşullu sınıfları
// `isActive && 'font-bold'` gibi yazabilmek için.
export function classNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
