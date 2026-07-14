import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Terms() {
  const navigate = useNavigate()
  const { dark } = useTheme()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#111] text-ink dark:text-white">
      <header className="sticky top-0 z-10 bg-white dark:bg-[#111] border-b border-gray-100 dark:border-[#222] px-4 sm:px-16 lg:px-20 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-brand-gray dark:text-[#aaa] hover:text-ink dark:hover:text-white transition-colors text-base font-medium"
        >
          <span aria-hidden="true">←</span> Voltar
        </button>
        <a href="/#/">
          <img src={dark ? '/logo branca.svg' : '/logo.svg'} alt="Qualifica Pro" className="h-8 w-auto" />
        </a>
      </header>

      <main className="flex-1 px-4 sm:px-16 lg:px-20 py-12 max-w-[860px] mx-auto w-full">
        <h1 className="text-[32px] sm:text-[48px] font-extrabold leading-tight mb-2">
          Termos e Condições
        </h1>
        <p className="text-muted text-sm mb-10">Última atualização: maio de 2026</p>

        <div className="space-y-8 text-base sm:text-lg leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">1. Aceitação dos termos</h2>
            <p>
              Ao acessar e utilizar os serviços da <strong>Qualifica Pro LTDA</strong>, você concorda com os presentes Termos e Condições. Caso não concorde, pedimos que não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">2. Descrição dos serviços</h2>
            <p>
              A Qualifica Pro oferece cursos presenciais e online voltados para profissionais da construção civil, incluindo, mas não se limitando a, treinamentos em técnicas de revestimento, pisos, impermeabilização e afins.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">3. Cadastro e conta</h2>
            <p>
              Para acessar determinados conteúdos, é necessário criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais e por todas as atividades realizadas sob sua conta.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">4. Pagamentos e reembolsos</h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted">
              <li>Os preços dos cursos são informados no momento da compra</li>
              <li>Pagamentos são processados por plataformas seguras e certificadas</li>
              <li>Reembolsos podem ser solicitados em até 7 dias após a compra, desde que o conteúdo não tenha sido concluído</li>
              <li>Cursos presenciais possuem política de cancelamento própria, informada no ato da inscrição</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">5. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado (vídeos, textos, materiais de apoio, logotipos) é de propriedade exclusiva da Qualifica Pro ou de seus parceiros. É proibida a reprodução, distribuição ou uso comercial sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">6. Conduta do usuário</h2>
            <p>Ao utilizar nossos serviços, você concorda em não:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted">
              <li>Compartilhar seu acesso com terceiros</li>
              <li>Reproduzir ou distribuir materiais dos cursos sem autorização</li>
              <li>Utilizar os serviços para fins ilegais ou que violem direitos de terceiros</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">7. Limitação de responsabilidade</h2>
            <p>
              A Qualifica Pro não se responsabiliza por danos indiretos resultantes do uso ou da impossibilidade de uso dos serviços. Nossa responsabilidade fica limitada ao valor pago pelo curso em questão.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">8. Alterações nos termos</h2>
            <p>
              Podemos atualizar estes Termos a qualquer momento. As alterações entram em vigor assim que publicadas nesta página. O uso contínuo dos serviços após as mudanças implica aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">9. Foro</h2>
            <p>
              Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">10. Contato</h2>
            <p>
              Dúvidas sobre estes termos:{' '}
              <a href="mailto:contato@qualificapro.com.br" className="text-yellow underline">
                contato@qualificapro.com.br
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="px-4 sm:px-16 lg:px-20 py-6 border-t border-gray-100 dark:border-[#222] text-center text-muted text-sm">
        2026 © Todos os direitos reservados. Qualifica Pro LTDA
      </footer>
    </div>
  )
}
