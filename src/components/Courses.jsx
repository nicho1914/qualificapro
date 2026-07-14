const courses = [
  {
    img: '/IMG_2507.JPEG',
    alt: 'Curso presencial de efeito rocha',
    title: 'Efeito Rocha',
    desc: 'Técnica de revestimento que simula texturas naturais de pedra com acabamento profissional.',
  },
  {
    img: '/IMG_7671.JPEG',
    alt: 'Turma do curso de piso drenante',
    title: 'Piso Drenante',
    desc: 'Execução correta de pisos com alta capacidade de escoamento para áreas externas e descobertas.',
  },
  {
    img: '/IMG_2892.jpg',
    alt: 'Treinamento sobre umidade ascendente',
    title: 'Umidade Ascendente',
    desc: 'Diagnóstico e tratamento eficaz de umidade que sobe pela base das paredes e estruturas.',
  },
]

export default function Courses() {
  return (
    <section id="cursos" className="px-4 sm:px-16 lg:px-20 py-12 text-center">
      <div className="max-w-content mx-auto">
        <h2 className="m-0 text-[31px] sm:text-[64px] font-extrabold leading-[1.1] text-ink dark:text-white sm:whitespace-nowrap">
          Cursos presenciais que já realizamos
        </h2>
        <p className="mt-2 text-muted text-base sm:text-[32px] font-medium leading-[1.1]">
          Treinamentos práticos com profissionais da construção, do início ao
          certificado.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[23px] mt-12">
          {courses.map((course) => (
            <article key={course.title} className="flex flex-col gap-[39px] sm:gap-[66px]">
              {/* FIX: full-width responsive image (was fixed 282px on mobile) */}
              <div className="w-full sm:w-auto h-[272px] sm:h-[400px] overflow-hidden border-b-[15px] border-yellow rounded-[25px] bg-gray-200">
                <img
                  src={course.img}
                  alt={course.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="m-0 mb-4 text-ink dark:text-white text-[36px] font-extrabold leading-[1.1]">
                  {course.title}
                </h3>
                <p className="m-0 text-muted text-base sm:text-[24px] font-medium leading-[1.1]">
                  {course.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
