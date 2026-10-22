import { useEffect, useState } from 'react'

// Ekranın ortasındaki ince bir şerit: bu şeridi kesen bölüm "aktif" sayılır.
const CENTER_BAND_MARGIN = '-49% 0px -50% 0px'

function isAboveFirstSection(sectionIds: readonly string[]): boolean {
  const firstSection = document.getElementById(sectionIds[0])
  if (!firstSection) return false
  return firstSection.getBoundingClientRect().top > window.innerHeight / 2
}

// Kaydırma sırasında ekranın ortasında hangi bölüm varsa onun id'sini döner.
// Hiçbir bölümün üstünde değilsek (örneğin hero) null döner.
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const crossingCenter = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) crossingCenter.add(target.id)
          else crossingCenter.delete(target.id)
        }

        const [current] = crossingCenter
        if (current) {
          setActiveId(current)
        } else if (isAboveFirstSection(sectionIds)) {
          setActiveId(null)
        }
      },
      { rootMargin: CENTER_BAND_MARGIN },
    )

    for (const id of sectionIds) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
