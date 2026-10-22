import { classNames } from '../../utils/classNames'

const STEAM_DELAYS_SECONDS = [0, 1.3, 2.6]

interface SteamProps {
  className?: string
}

// Boyutunu ve yerini üst eleman belirler; yükselme mesafesi kendi yüksekliğiyle orantılıdır.
export function Steam({ className }: SteamProps) {
  return (
    <div
      aria-hidden="true"
      className={classNames('flex items-end justify-between', className)}
    >
      {STEAM_DELAYS_SECONDS.map((delay) => (
        <span
          key={delay}
          style={{ animationDelay: `${delay}s` }}
          className="h-[90%] w-[26%] animate-steam rounded-full bg-cream opacity-0 blur-lg motion-reduce:animate-none"
        />
      ))}
    </div>
  )
}
