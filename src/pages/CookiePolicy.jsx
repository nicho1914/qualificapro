import { useNavigate } from 'react-router-dom'

export default function CookiePolicy() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-white text-ink">
      {/* Nav */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-16 lg:px-20 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-brand-gray hover:text-ink transition-colors text-base font-medium"
        >
          <span aria-hidden="true">←</span> Voltar
        </button>
        <a href="/#/">
          <img src="/logo.svg" alt="Qualifica Pro" className="h-8 w-auto" />
        </a>
      </header>

      {/* Conteúdo */}
      <main className="flex-1 px-4 sm:px-16 lg:px-20 py-12 max-w-[860px] mx-auto w-full">
        <h1 className="text-[32px] sm:text-[48px] font-extrabold leading-tight text-ink mb-2">
          Política de Cookies
        </h1>
        <p className="text-muted text-sm mb-10">Última atualização: maio de 2026</p>

        <div className="space-y-8 text-base sm:text-lg leading-relaxed text-ink">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">1. O que são cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre informações sobre a sua visita, como preferências e configurações.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">2. Como utilizamos cookies</h2>
            <p>A Qualifica Pro utiliza cookies para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted">
              <li>Manter sua sessão ativa enquanto você navega na plataforma</li>
              <li>Lembrar suas preferências de idioma e configurações</li>
              <li>Analisar como os usuários interagem com o site (analytics)</li>
              <li>Personalizar conteúdos e anúncios relevantes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">3. Tipos de cookies que usamos</h2>

            <div className="mt-3 space-y-4">
              <div className="border border-gray-100 rounded-xl p-4">
                <h3 className="font-bold mb-1">🔒 Cookies essenciais</h3>
                <p className="text-muted text-sm">
                  Necessários para o funcionamento básico do site. Sem eles, algumas partes do site não funcionarão corretamente. Não podem ser desativados.
                </p>
              </div>
              <div className="border border-gray-100 rounded-xl p-4">
                <h3 className="font-bold mb-1">📊 Cookies de analytics</h3>
                <p className="text-muted text-sm">
                  Coletam informações sobre como você usa o site (páginas visitadas, tempo de permanência) para nos ajudar a melhorá-lo. Nenhum dado pessoal identificável é coletado.
                </p>
              </div>
              <div className="border border-gray-100 rounded-xl p-4">
                <h3 className="font-bold mb-1">🎯 Cookies de marketing</h3>
                <p className="text-muted text-sm">
                  Utilizados para exibir anúncios relevantes com base nos seus interesses. Podem ser compartilhados com parceiros de publicidade.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">4. Cookies de terceiros</h2>
            <p>
              Utilizamos serviços de terceiros que também podem definir cookies no seu dispositivo, como Google Analytics, Meta Pixel e plataformas de pagamento. Cada um desses serviços possui sua própria política de cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">5. Como controlar os cookies</h2>
            <p>
              Você pode controlar e/ou excluir cookies nas configurações do seu navegador. Veja como fazer isso nos principais navegadores:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline">Google Chrome</a>
              </li>
              <li>
                <a href="https://support.mozilla.org/pt-BR/kb/cookies-informacoes-sites-armazenam-no-computador" target="_blank" rel="noopener noreferrer" className="underline">Mozilla Firefox</a>
              </li>
              <li>
                <a href="https://support.apple.com/pt-br/guide/safari/sfri11471" target="_blank" rel="noopener noreferrer" className="underline">Safari</a>
              </li>
            </ul>
            <p className="mt-3">
              Ao desativar cookies, algumas funcionalidades do site podem não funcionar corretamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">6. Contato</h2>
            <p>
              Dúvidas sobre nossa política de cookies:{' '}
              <a href="mailto:privacidade@qualificapro.com.br" className="text-yellow underline">
                privacidade@qualificapro.com.br
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer mínimo */}
      <footer className="px-4 sm:px-16 lg:px-20 py-6 border-t border-gray-100 text-center text-muted text-sm">
        2026 © Todos os direitos reservados. Qualifica Pro LTDA
      </footer>
    </div>
  )
}
