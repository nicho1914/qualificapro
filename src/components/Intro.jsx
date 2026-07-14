export default function Intro() {
  return (
    <section id="historia" className="px-4 sm:px-16 lg:px-20 pb-[42px] sm:py-[69px]">
      <div className="max-w-content mx-auto">
        <div
          className="intro-card-bg relative overflow-hidden
            grid grid-cols-[99px_1fr] sm:grid-cols-[275px_1fr] lg:grid-cols-[325px_1fr]
            gap-2 sm:gap-[41px] lg:gap-[122px]
            items-center
            min-h-[200px] sm:min-h-[401px]
            px-[11px] sm:px-10
            py-[25px] sm:py-20
            rounded-[25px]
            text-white"
          style={{
            background:
              'linear-gradient(215.109deg, #5f5f5f 51.282%, #c5c5c5 165.05%)',
          }}
        >
          {/* Logo */}
          <img
            src="/logo horizontal.svg"
            alt="Qualifica Pro"
            className="relative w-[99px] sm:w-[275px] lg:w-[325px]"
          />

          {/* Text */}
          <div className="relative">
            <h2 className="m-0 text-[24px] sm:text-[36px] leading-[1.1] font-normal">
              O <strong className="font-extrabold">Qualifica Pro</strong> é o
              centro de treinamento dos profissionais da{' '}
              <strong className="font-extrabold">construção</strong>
            </h2>
            <p className="mt-4 max-w-[754px] font-sora text-[13px] sm:text-base font-light leading-[1.3]">
              Unimos teoria e prática em treinamentos presenciais e on-line,
              ensinando o jeito certo de executar cada técnica da construção
              civil, direto da obra para a sala de aula.
              <br />
              Nossos cursos são pensados especialmente para profissionais da
              construção, como pedreiros, aplicadores e também para pessoas que
              nunca tiveram a oportunidade de estudar formalmente, mas carregam
              anos de experiência na prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
