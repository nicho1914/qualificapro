import Nav from './Nav'
import PlayDot from './PlayDot'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero-bg relative overflow-hidden
        min-h-[520px] sm:min-h-[686px] lg:min-h-[917px]
        px-4 sm:px-16 lg:px-20
        pt-24 sm:pt-8 lg:pt-6
        pb-12 sm:pb-20
        flex flex-col gap-12 sm:gap-[71px] lg:gap-[98px]
        justify-start sm:justify-center"
    >
      <Nav />

      <div className="relative z-10 w-full max-w-content mx-auto">
        <h1
          className="m-0 max-w-[823px]
            text-[40px] sm:text-[64px] lg:text-[96px]
            font-extrabold leading-none text-ink dark:text-white"
        >
          O centro de treinamento dos profissionais da construção
        </h1>
        <p
          className="max-w-[823px] mt-6
            text-muted text-base sm:text-[32px]
            font-medium leading-[1.1]"
        >
          Aprenda hoje e aplique amanhã, com técnicas reais, ensinadas por
          profissionais que executam no dia a dia.
        </p>

        <div className="flex flex-wrap items-center gap-[10px] sm:gap-5 mt-[35px]">
          <a
            href="/cadastro"
            className="min-h-[52px] sm:min-h-[62px]
              inline-flex items-center justify-center
              rounded-lg sm:rounded-xl px-5
              text-sm sm:text-[24px] font-medium
              bg-yellow text-black whitespace-nowrap"
          >
            Cadastre-se
          </a>
          <a
            href="https://plataforma.qualificapro.com.br/browse"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[52px] sm:min-h-[62px]
              inline-flex items-center justify-center gap-2
              px-4 sm:px-5
              text-[15px] sm:text-[24px] font-medium
              text-black dark:text-white whitespace-nowrap"
          >
            <PlayDot />
            Acessar a plataforma
          </a>
        </div>
      </div>
    </section>
  )
}
