/* FIX: corrected all asset filenames (HTML had wrong names like LOGO_HOLD_STONE.svg)
   and removed LOGO_GRUPO_82 which doesn't exist in assets */
const partners = [
  { src: '/LOGO_CRISTAL_ROXO.svg', alt: 'Cristal Roxo' },
  { src: '/LOGO HOLD STONE.svg', alt: 'Hold Stone' },
  { src: '/DRYLEVIS SLOGAN2.svg', alt: 'Drylevis' },
  { src: '/elastment-logo.svg', alt: 'Elastment' },
  { src: '/LOGO - O PULO DO GATO.svg', alt: 'O Pulo do Gato' },
]

export default function Partners() {
  return (
    <section
      aria-label="Parceiros"
      className="px-4 sm:px-16 lg:px-20 py-20 text-center"
    >
      <div className="max-w-content mx-auto">
        <h2 className="m-0 text-[31px] sm:text-[64px] font-extrabold leading-[1.1] text-ink">
          Parceiros do Qualifica Pro
        </h2>
        <p className="mt-2 text-muted text-base sm:text-[32px] font-medium leading-[1.1] max-w-[499px] mx-auto">
          As marcas que constroem o futuro
        </p>

        {/* FIX: removed broken width: calc(100vw - 160px) — now full-width scroll */}
        <div
          role="list"
          aria-label="Lista de parceiros"
          className="no-scrollbar flex gap-[25px] mt-12 overflow-x-auto pb-2 snap-x snap-mandatory"
        >
          {partners.map((p) => (
            <div
              key={p.alt}
              role="listitem"
              className="snap-center shrink-0 w-[193px] h-[120px]
                grid place-items-center
                rounded-xl bg-white p-[18px]
                shadow-[inset_0_0_0_1px_#eeeeee]"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="max-h-[88px] max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
