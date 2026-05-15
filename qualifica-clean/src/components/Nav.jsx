import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { dark, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-gray dark:bg-[#2a2a2a] text-brand-white transition-colors"
    >
      {dark ? (
        /* Sol — ativar modo claro */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        /* Lua — ativar modo escuro */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()

  return (
    <>
      {/* ── MOBILE: fixed no topo durante o scroll ── */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="flex items-center justify-between p-4 rounded-[24px] bg-[rgba(17,19,24,0.5)] backdrop-blur-[4px]">
          <a href="#inicio" aria-label="Qualifica Pro">
            <img
              src="/logo branca.svg"
              alt="Qualifica Pro"
              className="w-[166px]"
            />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex items-center justify-center w-6 h-6 bg-transparent border-0 p-0 cursor-pointer"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 7H21"  stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 17H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <nav className="mt-2 rounded-[20px] bg-[rgba(17,19,24,0.85)] backdrop-blur-[4px] px-5 py-4 flex flex-col gap-1">
            <a
              href="#historia"
              onClick={() => setOpen(false)}
              className="py-3 text-white text-base font-medium border-b border-white/10"
            >
              História
            </a>
            <a
              href="#cursos"
              onClick={() => setOpen(false)}
              className="py-3 text-white text-base font-medium border-b border-white/10"
            >
              Cursos
            </a>
            <button
              onClick={() => { toggle(); setOpen(false) }}
              className="py-3 text-left text-white text-base font-medium border-b border-white/10"
            >
              {dark ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
            </button>
            <a
              href="/cadastro"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow text-[#050507] font-medium text-base"
            >
              Cadastre-se
            </a>
          </nav>
        )}
      </div>

      {/* ── DESKTOP ── */}
      <header className="hidden sm:flex relative z-20 w-full max-w-content mx-auto h-12 items-end justify-between">
        <a href="#inicio" aria-label="Qualifica Pro">
          <img
            src={dark ? '/logo branca.svg' : '/logo.svg'}
            alt="Qualifica Pro"
            className="w-[min(358px,52vw)]"
          />
        </a>
        <div className="flex items-center gap-[26px]">
          <ThemeToggle />
          <a
            href="#historia"
            className="min-h-12 inline-flex items-center px-6 rounded-full bg-brand-gray text-brand-white text-base leading-none"
          >
            História
          </a>
          <a
            href="/cadastro"
            className="min-h-12 inline-flex items-center px-6 rounded-full bg-yellow text-[#050507] text-base leading-none font-medium"
          >
            Cadastre-se
          </a>
        </div>
      </header>
    </>
  )
}
