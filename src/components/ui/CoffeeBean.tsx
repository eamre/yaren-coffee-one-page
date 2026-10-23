interface CoffeeBeanProps {
  className?: string
}

// Küçük bir kahve çekirdeği: gövdesi `currentColor` ile boyanır, ortasındaki
// çizgi koyu kahvedir (süs olduğu için ekran okuyuculardan gizli).
export function CoffeeBean({ className }: CoffeeBeanProps) {
  return (
    <svg
      viewBox="0 0 12 16"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="6" cy="8" rx="5" ry="7.5" />
      <path
        d="M6 1.5C3.4 5.2 8.6 10.8 6 14.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="stroke-espresso"
      />
    </svg>
  )
}
