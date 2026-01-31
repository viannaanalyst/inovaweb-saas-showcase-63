import React from "react";

const Termos = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF7] text-black">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex justify-center mb-8">
          <img
            src="/lovable-uploads/logo_light.png"
            alt="InovaWeb"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Termos de Uso e Política de Privacidade
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Sobre este termo</h2>
            <p className="leading-relaxed">
              Este Termo explica como a Inova Web coleta, usa, armazena e protege os dados pessoais dos usuários do Inova Web CRM, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/18). Ao utilizar o sistema, você concorda com estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Finalidade do Inova Web</h2>
            <p className="leading-relaxed">
              O Inova Web é uma plataforma de gestão de leads, clientes, atendimentos e automações, com integração a canais como WhatsApp, formulários e outros meios digitais. O sistema não presta serviços médicos ou de saúde, atuando apenas como ferramenta de organização e automação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Dados coletados</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Dados cadastrais e de contato</h3>
                <ul className="list-disc pl-6 leading-relaxed">
                  <li>Nome</li>
                  <li>Telefone (incluindo WhatsApp)</li>
                  <li>E-mail</li>
                  <li>Empresa / clínica</li>
                  <li>Informações fornecidas em formulários</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Dados operacionais</h3>
                <ul className="list-disc pl-6 leading-relaxed">
                  <li>Histórico de conversas</li>
                  <li>Status de atendimento e pipeline</li>
                  <li>Tags, observações e registros internos</li>
                  <li>Dados inseridos manualmente pelo usuário</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Dados técnicos</h3>
                <ul className="list-disc pl-6 leading-relaxed">
                  <li>Endereço IP</li>
                  <li>Navegador e sistema operacional</li>
                  <li>Dados de uso da plataforma</li>
                </ul>
              </div>
              <p className="text-sm leading-relaxed">
                A Inova Web não é responsável pelo conteúdo inserido pelos usuários no CRM, incluindo dados sensíveis eventualmente adicionados por eles.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Finalidade do tratamento dos dados</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Operar e melhorar o Inova Web CRM</li>
              <li>Permitir gestão de clientes, leads e atendimentos</li>
              <li>Executar automações e integrações</li>
              <li>Prestar suporte técnico</li>
              <li>Cumprir obrigações legais</li>
            </ul>
            <p className="mt-2 leading-relaxed">Os dados não são vendidos ou comercializados.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Compartilhamento de dados</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Provedores de infraestrutura (servidores, cloud, banco de dados)</li>
              <li>Serviços de mensagens e automação integrados ao CRM</li>
              <li>Autoridades legais, mediante obrigação legal ou ordem judicial</li>
            </ul>
            <p className="mt-2 leading-relaxed">Sempre respeitando o princípio do mínimo necessário.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Segurança da informação</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Controle de acesso</li>
              <li>Criptografia quando aplicável</li>
              <li>Monitoramento de segurança</li>
              <li>Boas práticas de proteção da informação</li>
            </ul>
            <p className="mt-2 leading-relaxed">Nenhum sistema é 100% inviolável, mas atuamos para reduzir riscos ao máximo.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Retenção e exclusão de dados</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Uso do sistema</li>
              <li>Cumprimento de obrigações legais</li>
            </ul>
            <p className="mt-2 leading-relaxed">O usuário pode solicitar a exclusão ou anonimização dos dados, ciente de que isso pode inviabilizar o uso do CRM.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Direitos do titular (LGPD)</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Confirmação do tratamento de dados</li>
              <li>Acesso aos dados</li>
              <li>Correção de dados</li>
              <li>Exclusão ou anonimização</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Responsabilidade do usuário</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Veracidade dos dados inseridos</li>
              <li>Uso adequado da plataforma</li>
              <li>Obter consentimento de seus próprios clientes, quando aplicável</li>
            </ul>
            <p className="mt-2 leading-relaxed">A Inova Web não se responsabiliza por uso indevido do sistema.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Alterações deste termo</h2>
            <p className="leading-relaxed">
              Este Termo pode ser atualizado a qualquer momento. O uso contínuo do sistema após alterações representa concordância com os novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Contato</h2>
            <p className="leading-relaxed">
              Para dúvidas ou solicitações relacionadas a dados pessoais: contato@inovawebtech.com.br
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Termos;
