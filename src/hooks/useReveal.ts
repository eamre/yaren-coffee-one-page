import { useEffect, useRef, useState } from 'react'

const VISIBILITY_THRESHOLD = 0.15

// Ekranın altından biraz önce başlar: içerik ekrana girerken zaten belirmiş olur.
const EARLY_START_MARGIN = '0px 0px 10% 0px'

// Eleman ekrana girmek üzereyken bir kez `isVisible` değerini true yapar.
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: VISIBILITY_THRESHOLD, rootMargin: EARLY_START_MARGIN },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
