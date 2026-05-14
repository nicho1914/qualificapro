function FeatureCard({ src, type = 'img', alt = '', children, large = false }) {
  return (
    <article
      className={`card-overlay relative overflow-hidden flex items-end rounded-lg bg-gray-300
        ${large
          ? 'min-h-[278px] sm:min-h-[502px] lg:min-h-[557px] p-[18px] sm:p-12'
          : 'min-h-[180px] sm:min-h-[502px] p-[18px] sm:p-12'
        }`}
    >
      {type === 'video' ? (
        <video
          src={src}
          muted
          loop
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <h3 className="relative z-10 m-0 text-brand-white text-[15px] sm:text-[32px] font-extrabold sm:font-semibold leading-none">
        {children}
      </h3>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experiencia" className="px-4 sm:px-16 lg:px-20 py-12">
      <div className="max-w-content mx-auto">
        <h2 className="m-0 text-[31px] sm:text-[64px] font-extrabold leading-[1.1] text-ink">
          O que você aprende hoje no Qualifica, você aplica{' '}
          <span className="text-yellow">amanhã</span> na obra.
        </h2>
        <p className="mt-2 text-muted text-base sm:text-[32px] font-medium leading-[1.1]">
          Aprenda hoje e aplique amanhã, com técnicas reais, ensinadas por
          profissionais que executam no dia a dia.
        </p>

        <div className="grid gap-4 mt-12">
          {/* Large featured card */}
          <FeatureCard src="/Image-1.png" alt="Aula presencial do Qualifica Pro" large>
            Certificação e{' '}
            <span className="text-yellow">qualificação</span> para o mercado
          </FeatureCard>

          {/* FIX: mobile = 1 col (was incorrectly 3 cols), desktop = 3 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-[39px]">
            <FeatureCard
              src="/VÍDEO ELIEL TÉCNICO.MOV"
              type="video"
            >
              Feedback do instrutor
            </FeatureCard>
            <FeatureCard src="/Image-2.png" alt="Instrutor dando orientação técnica">
              Orientação técnica
            </FeatureCard>
            <FeatureCard
              src="/VÍDEO-ALUNA NA PRÁTICA.MOV"
              type="video"
            >
              Aplica na prática
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  )
}
