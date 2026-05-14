import { useRef, useState } from 'react'

export default function Belief() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function togglePlay() {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section className="px-4 sm:px-16 lg:px-20 py-12">
      <div className="max-w-content mx-auto">
        <h2 className="m-0 text-[31px] sm:text-[64px] font-extrabold leading-[1.1] text-ink">
          Acreditamos que quem sempre soube fazer, merece reconhecimento
        </h2>
        <p className="mt-2 text-muted text-base sm:text-[32px] font-medium leading-[1.1]">
          O Qualifica Pro nasce para propagar o conhecimento da obra, transformar
          experiência em qualificação, e entregar certificação, valorização
          profissional e novas oportunidades.
        </p>

        {/* FIX: added missing wrapper with correct styling and play button overlay */}
        <div className="video-tint relative mt-12 aspect-video sm:aspect-auto sm:h-[720px] overflow-hidden rounded-lg bg-[#d7d7d7]">
          <video
            ref={videoRef}
            loop
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => setPlaying(false)}
          >
            <source src="/takes qualifica.mp4" type="video/mp4" />
          </video>

          {!playing && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label="Reproduzir vídeo"
              className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                w-[74px] h-[74px] sm:w-[149px] sm:h-[149px]
                grid place-items-center rounded-full bg-black
                cursor-pointer border-0"
            >
              <span className="play-triangle-lg" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
