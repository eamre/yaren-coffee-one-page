interface SteamProps {
  className?: string
}

interface Wisp {
  centerX: number
  radiusX: number
  radiusY: number
  delaySeconds: number
  durationSeconds: number
}

// Dumanın ince şeritleri: her biri farklı yerden, farklı hız ve gecikmeyle yükselir.
const WISPS: Wisp[] = [
  { centerX: 38, radiusX: 7, radiusY: 20, delaySeconds: 0, durationSeconds: 6 },
  { centerX: 54, radiusX: 9, radiusY: 24, delaySeconds: 1.4, durationSeconds: 7.5 },
  { centerX: 62, radiusX: 6, radiusY: 18, delaySeconds: 2.6, durationSeconds: 6.5 },
  { centerX: 46, radiusX: 8, radiusY: 22, delaySeconds: 3.8, durationSeconds: 8 },
  { centerX: 30, radiusX: 6, radiusY: 17, delaySeconds: 5, durationSeconds: 7 },
  { centerX: 58, radiusX: 7, radiusY: 21, delaySeconds: 6.4, durationSeconds: 8.5 },
]

// Her şerit yumuşak bir lekedir; ortak bir gürültü filtresi (`feTurbulence`)
// onları kıvırarak gerçek buğuya benzer ipliksi bir görünüm verir. Her şey bu
// SVG'nin kendi koordinatlarında çizildiği için boyutu ne olursa olsun orantılı
// kalır. Boyutu ve yerini üst eleman (`className`) belirler.
// Not: gradyan ve filtre kimlikleri sayfada benzersiz olmalı; sayfada tek bir
// duman olduğu için sabit tutuldu.
export function Steam({ className }: SteamProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      aria-hidden="true"
      className={className}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="steam-puff">
          <stop offset="0" style={{ stopColor: 'var(--color-cream)' }} stopOpacity="0.9" />
          <stop offset="1" style={{ stopColor: 'var(--color-cream)' }} stopOpacity="0" />
        </radialGradient>
        <filter
          id="steam-smoke"
          filterUnits="userSpaceOnUse"
          x="-50"
          y="-40"
          width="200"
          height="200"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.03"
            numOctaves="2"
            seed="4"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="34"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>

      <g filter="url(#steam-smoke)">
        {WISPS.map(
          ({ centerX, radiusX, radiusY, delaySeconds, durationSeconds }) => (
            <ellipse
              key={centerX}
              className="steam-wisp"
              cx={centerX}
              cy={112}
              rx={radiusX}
              ry={radiusY}
              fill="url(#steam-puff)"
              style={{
                animationDelay: `${delaySeconds}s`,
                animationDuration: `${durationSeconds}s`,
              }}
            />
          ),
        )}
      </g>
    </svg>
  )
}
