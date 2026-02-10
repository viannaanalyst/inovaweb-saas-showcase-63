import React from "react";

const PoliticaPrivacidade = () => {
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
          Política de Privacidade
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Finalidade</h2>
            <p className="leading-relaxed">
              Esta Política descreve, de forma objetiva, como tratamos dados pessoais
              no contexto da integração do CRM com a API do Google Agenda, em conformidade
              com a LGPD (Lei nº 13.709/18). O tratamento é limitado ao necessário
              para sincronização de agendamentos do usuário.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Coleta de dados de agendamentos</h2>
            <p className="leading-relaxed">
              Para criar e gerenciar compromissos, coletamos apenas os dados estritamente necessários:
            </p>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Nome</li>
              <li>Telefone</li>
              <li>Data e hora do agendamento</li>
            </ul>
            <p className="text-sm leading-relaxed mt-2">
              Quando informados pelo usuário, dados adicionais podem ser incluídos na descrição do evento,
              sob responsabilidade do próprio usuário.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Uso da API do Google Calendar</h2>
            <p className="leading-relaxed">
              Utilizamos a API do Google Calendar exclusivamente para sincronizar agendamentos do usuário
              entre o CRM e o Google Agenda. O acesso é restrito aos escopos mínimos necessários para:
            </p>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Criar, atualizar e cancelar eventos do calendário do usuário</li>
              <li>Ler eventos relevantes para manter a sincronização</li>
            </ul>
            <p className="leading-relaxed mt-2">
              Não acessamos e não utilizamos dados do Google além do que for indispensável à sincronização
              de agendamentos. Não realizamos análise comportamental, perfilamento ou uso para fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Compartilhamento de dados</h2>
            <p className="leading-relaxed">
              Não vendemos, não compartilhamos e não divulgamos dados de agendamentos a terceiros.
              O tratamento ocorre apenas dentro do CRM e do Google Agenda do próprio usuário para a
              finalidade informada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Segurança</h2>
            <p className="leading-relaxed">
              Adotamos medidas técnicas e organizacionais para proteger os dados contra acessos não
              autorizados, perdas e alterações indevidas, observando boas práticas de segurança da informação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Exclusão de dados</h2>
            <p className="leading-relaxed">
              O titular pode solicitar a exclusão dos seus dados e/ou dos eventos de agenda sincronizados.
              Para exercer seus direitos, envie uma solicitação para:
            </p>
            <p className="font-semibold leading-relaxed">contato@inovawebtech.com.br</p>
            <p className="text-sm leading-relaxed mt-2">
              Após a confirmação da identidade, realizaremos a exclusão nos sistemas aplicáveis,
              respeitando eventuais obrigações legais de guarda.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PoliticaPrivacidade;
