import { useEffect, useRef } from 'react'

// Adres çubuğundaki `#bölüm` kısmını o an görünen bölümle eşler. `replaceState`
// kullanılır: sayfa kaymaz ve geri tuşuna her bölüm için yeni kayıt eklenmez.
// Sayfa başına (hero) dönülünce `#` kısmı silinir. Sayfa `#iletisim` ile
// açıldığında, bölüm henüz bulunmadan adres silinmesin diye ilk `null` yoksayılır.
export function useSectionHash(activeId: string | null) {
  const hasHadActiveSection = useRef(false)

  useEffect(() => {
    if (activeId) {
      hasHadActiveSection.current = true
      const hash = `#${activeId}`
      if (window.location.hash !== hash) {
        window.history.replaceState(null, '', hash)
      }
    } else if (hasHadActiveSection.current) {
      hasHadActiveSection.current = false
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search,
      )
    }
  }, [activeId])
}
