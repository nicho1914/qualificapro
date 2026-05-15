import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="px-4 sm:px-16 lg:px-20 py-6">
      <div
        className="max-w-content mx-auto
          grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-8 sm:gap-12
          items-start"
      >
        {/* Brand */}
        <div>
          <img
            src="/logo.svg"
            alt="Qualifica Pro"
            className="w-[230px] sm:w-[358px]"
          />
          <div
            className="flex items-center gap-4 mt-[34px]"
            aria-label="Redes sociais"
          >
            <a
              href="https://www.instagram.com/qualificapro_/"
              aria-label="Instagram"
            >
              <img
                src="/instagram-main.svg"
                alt=""
                className="w-[34px] h-[34px]"
              />
            </a>
            <a
              href="https://www.facebook.com/qualificapro"
              aria-label="Facebook"
            >
              <img src="/facebook.svg" alt="" className="w-[34px] h-[34px]" />
            </a>
            <a
              href="https://www.youtube.com/@QualificaPro"
              aria-label="YouTube"
            >
              <img src="/youtube.svg" alt="" className="w-[34px] h-[34px]" />
            </a>
          </div>
          <p className="mt-[23px] text-base leading-none text-ink">
            2026 © Todos os direitos reservados.
            <br />
            Qualifica Pro LTDA
          </p>
        </div>

        {/* Explore */}
        <nav aria-label="Explore">
          <h3 className="m-0 mb-[38px] text-yellow text-xl font-semibold leading-none">
            Explore
          </h3>
          <a
            href="#historia"
            className="block mb-[7px] text-ink text-xl leading-none"
          >
            Sobre
          </a>
          <a
            href="#cursos"
            className="block mb-[7px] text-ink text-xl leading-none"
          >
            Cursos
          </a>
          <a
            href="/cadastro"
            className="block mb-[7px] text-ink text-xl leading-none"
          >
            Cadastrar-se
          </a>
        </nav>

        {/* Outros */}
        <nav aria-label="Outros">
          <h3 className="m-0 mb-[38px] text-yellow text-xl font-semibold leading-none">
            Outros
          </h3>
          <Link to="/privacidade" className="block mb-[7px] text-ink text-xl leading-none">
            Política de Privacidade
          </Link>
          <Link to="/termos" className="block mb-[7px] text-ink text-xl leading-none">
            Termos e condições
          </Link>
          <Link to="/cookies" className="block mb-[7px] text-ink text-xl leading-none">
            Política de Cookies
          </Link>
        </nav>
      </div>
    </footer>
  )
}
