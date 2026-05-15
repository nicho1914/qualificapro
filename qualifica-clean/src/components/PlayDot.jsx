import playCircle from '../assets/play-circle.svg'

export default function PlayDot({ darkInvert = false }) {
  return (
    <img
      src={playCircle}
      alt=""
      aria-hidden="true"
      className={`w-6 h-6 shrink-0 brightness-0${darkInvert ? ' dark:invert' : ''}`}
    />
  )
}
