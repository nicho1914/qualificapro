import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const { dark } = useTheme()
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
            src={dark ? '/logo branca.svg' : '/logo.svg'}
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
                className="w-[34px] h-[34px] dark:brightness-0 dark:invert"
              />
            </a>
            <a
              href="https://www.facebook.com/qualificapro"
              aria-label="Facebook"
            >
              <img src="/facebook.svg" alt="" className="w-[34px] h-[34px] dark:brightness-0 dark:invert" />
            </a>
            <a
              href="https://www.youtube.com/@QualificaPro"
              aria-label="YouTube"
            >
              <img src="/youtube.svg" alt="" className="w-[34px] h-[34px] dark:brightness-0 dark:invert" />
            </a>
          </div>
          <p className="mt-[23px] text-base leading-none text-ink dark:text-white">
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
          <button
            onClick={() => scrollTo('historia')}
            className="block mb-[7px] text-ink dark:text-white text-xl leading-none text-left"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollTo('cursos')}
            className="block mb-[7px] text-ink dark:text-white text-xl leading-none text-left"
          >
            Cursos
          </button>
          <a
            href="https://plataforma.qualificapro.com.br/browse?login=true"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-[7px] text-ink dark:text-white text-xl leading-none"
          >
            Cadastrar-se
          </a>
        </nav>

        {/* Outros */}
        <nav aria-label="Outros">
          <h3 className="m-0 mb-[38px] text-yellow text-xl font-semibold leading-none">
            Outros
          </h3>
          <Link to="/privacidade" className="block mb-[7px] text-ink dark:text-white text-xl leading-none">
            Política de Privacidade
          </Link>
          <Link to="/termos" className="block mb-[7px] text-ink dark:text-white text-xl leading-none">
            Termos e condições
          </Link>
          <Link to="/cookies" className="block mb-[7px] text-ink dark:text-white text-xl leading-none">
            Política de Cookies
          </Link>
        </nav>
      </div>
    </footer>
  )
}
