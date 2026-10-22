import { useEffect, useRef, useState } from 'react'

const VISIBILITY_THRESHOLD = 0.15

// Eleman ekranda ilk göründüğünde bir kez `isVisible` değerini true yapar.
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
      { threshold: VISIBILITY_THRESHOLD },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
