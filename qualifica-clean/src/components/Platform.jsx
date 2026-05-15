import PlayDot from './PlayDot'

export default function Platform() {
  return (
    <section
      id="plataforma"
      className="px-4 sm:px-16 lg:px-20 min-h-[370px] sm:min-h-[558px] flex items-center"
    >
      <div className="max-w-content mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_700px] items-center gap-8 lg:gap-0">
        {/* Text */}
        <div>
          <h2
            className="m-0 max-w-[739px]
              text-[32px] sm:text-[40px] lg:text-[56px]
              font-extrabold leading-[1.1] text-ink"
          >
            Quer acessar conteúdos práticos e receber avisos de novos cursos?
          </h2>
          <p
            className="mt-2 max-w-[628px]
              text-muted text-[20px] sm:text-[27.6px]
              font-medium leading-[1.35]"
          >
            Acesse nossa plataforma para receber conteúdos, novidades e
            atualizações da Qualifica Pro.
          </p>
          <a
            href="https://qualificapro.com.br/browse?login=true"
            className="mt-6 min-h-[62px]
              inline-flex items-center justify-center gap-2
              rounded-xl px-5
              text-[24px] font-medium
              bg-yellow text-black whitespace-nowrap"
          >
            <PlayDot />
            Acessar a plataforma
          </a>
        </div>

        {/* Platform screenshot — hidden on mobile */}
        <div className="hidden lg:flex items-center justify-end">
          <div className="w-[700px] h-[513px] overflow-hidden">
            <img
              src="/platform-preview.png"
              alt="Prévia da plataforma Qualifica Pro"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
