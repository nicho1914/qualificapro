import { useNavigate } from 'react-router-dom'

export default function PrivacyPolicy() {
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
          Política de Privacidade
        </h1>
        <p className="text-muted text-sm mb-10">Última atualização: maio de 2026</p>

        <div className="space-y-8 text-base sm:text-lg leading-relaxed text-ink">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">1. Quem somos</h2>
            <p>
              A <strong>Qualifica Pro LTDA</strong> é responsável pelo tratamento dos seus dados pessoais coletados por meio deste site e de nossa plataforma de treinamentos. Nosso objetivo é oferecer cursos e conteúdos práticos para profissionais da construção civil.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">2. Dados que coletamos</h2>
            <p>Podemos coletar os seguintes dados pessoais:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Informações de navegação (cookies e logs de acesso)</li>
              <li>Dados de pagamento (processados por terceiros certificados)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">3. Como usamos seus dados</h2>
            <p>Utilizamos seus dados para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted">
              <li>Criar e gerenciar sua conta na plataforma</li>
              <li>Enviar comunicações sobre cursos, novidades e atualizações</li>
              <li>Processar matrículas e pagamentos</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">4. Compartilhamento de dados</h2>
            <p>
              Não vendemos seus dados pessoais. Podemos compartilhá-los apenas com prestadores de serviço essenciais (plataformas de pagamento, serviços de e-mail) que operam sob acordos de confidencialidade, ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">5. Seus direitos (LGPD)</h2>
            <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação dos dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">6. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">7. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato com nosso DPO (Encarregado de Dados) pelo e-mail:{' '}
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
