export default function Belief() {
  return (
    <section className="px-4 sm:px-16 lg:px-20 py-12">
      <div className="max-w-content mx-auto">
        <h2 className="m-0 text-center text-[31px] sm:text-[64px] font-extrabold leading-[1.1] text-ink dark:text-white">
          Acreditamos que quem sempre soube fazer, merece{' '}
          <span className="text-yellow">reconhecimento</span>
        </h2>
        <p className="mt-2 text-center text-muted text-base sm:text-[32px] font-medium leading-[1.1]">
          O Qualifica Pro nasce para propagar o conhecimento da obra, transformar
          experiência em qualificação, e entregar certificação, valorização
          profissional e novas oportunidades.
        </p>

        <div className="video-tint relative mt-12 aspect-video sm:aspect-auto sm:h-[720px] overflow-hidden rounded-lg bg-[#d7d7d7]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/takes qualifica.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
