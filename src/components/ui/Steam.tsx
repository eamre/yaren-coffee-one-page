const STEAM_DELAYS_SECONDS = [0, 1.3, 2.6]

export function Steam() {
  return (
    <div aria-hidden="true" className="flex h-16 items-end justify-center gap-3">
      {STEAM_DELAYS_SECONDS.map((delay) => (
        <span
          key={delay}
          style={{ animationDelay: `${delay}s` }}
          className="h-14 w-2 animate-steam rounded-full bg-cream/60 opacity-0 blur-md motion-reduce:animate-none"
        />
      ))}
    </div>
  )
}
