import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ── MOBILE: dark glass pill (Figma design) ── */}
      <div className="sm:hidden relative z-20 w-full">
        <div className="flex items-center justify-between p-4 rounded-[24px] bg-[rgba(17,19,24,0.5)] backdrop-blur-[4px]">
          <a href="#inicio" aria-label="Qualifica Pro">
            <img
              src="/logo.svg"
              alt="Qualifica Pro"
              className="w-[166px] brightness-0 invert"
            />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex items-center justify-center w-6 h-6 bg-transparent border-0 p-0 cursor-pointer"
          >
            {open ? (
              /* X icon when open */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              /* Hamburger (vuesax/linear/menu) */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 7H21"  stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 17H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown — same glass style */}
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
            <a
              href="#cadastro"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow text-[#050507] font-medium text-base"
            >
              Cadastre-se
            </a>
          </nav>
        )}
      </div>

      {/* ── DESKTOP: standard nav ── */}
      <header className="hidden sm:flex relative z-20 w-full max-w-content mx-auto h-12 items-end justify-between">
        <a href="#inicio" aria-label="Qualifica Pro">
          <img
            src="/logo.svg"
            alt="Qualifica Pro"
            className="w-[min(358px,52vw)]"
          />
        </a>
        <div className="flex items-center gap-[26px]">
          <a
            href="#historia"
            className="min-h-12 inline-flex items-center px-6 rounded-full bg-brand-gray text-brand-white text-base leading-none"
          >
            História
          </a>
          <a
            href="#cadastro"
            className="min-h-12 inline-flex items-center px-6 rounded-full bg-yellow text-[#050507] text-base leading-none font-medium"
          >
            Cadastre-se
          </a>
        </div>
      </header>
    </>
  )
}
