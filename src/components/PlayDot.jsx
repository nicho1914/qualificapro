import playCircle from '../assets/play-circle.svg'

// hero:     preto no light, branco no dark → brightness-0 dark:invert
// platform: preto sempre                  → brightness-0
export default function PlayDot({ variant = 'hero' }) {
  const filter =
    variant === 'platform'
      ? 'brightness-0'
      : 'brightness-0 dark:invert'

  return (
    <img
      src={playCircle}
      alt=""
      aria-hidden="true"
      className={`w-6 h-6 shrink-0 ${filter}`}
    />
  )
}
