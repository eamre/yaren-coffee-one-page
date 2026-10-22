import { useEffect, useState } from 'react'

// Sayfa verilen eşikten fazla kaydırıldığında true döner.
export function useScrolled(threshold = 24) {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > threshold)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}
