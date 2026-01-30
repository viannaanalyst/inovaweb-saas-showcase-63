import { motion } from "framer-motion";
import { MessageSquareWarning, Clock, BadgeDollarSign, Users } from "lucide-react";

export function DiagnosticSection() {
  const cards = [
    {
      icon: MessageSquareWarning,
      title: "Mensagens sem resposta",
      description: "Cada minuto sem retorno é um paciente a menos.",
      closing: "Automatize o primeiro contato e mantenha o canal vivo."
    },
    {
      icon: Clock,
      title: "Fora do horário",
      description: "À noite e no fim de semana, a clínica para. O paciente não.",
      closing: "Fluxos 24/7 com confirmações e lembretes automáticos."
    },
    {
      icon: BadgeDollarSign,
      title: "Leads pagos desperdiçados",
      description: "Demora no WhatsApp transforma tráfego pago em prejuízo.",
      closing: "Capture e qualifique em segundos com automação + CRM."
    },
    {
      icon: Users,
      title: "Recepção sobrecarregada",
      description: "Mensagens repetidas travam o funil. A venda não acontece.",
      closing: "IA coleta dados e entrega casos prontos para o humano."
    }
  ];

  return (
    <section className="w-full py-28 px-4 sm:px-6 lg:px-10 bg-[#FBFAF7]">
      <div className="max-w-desktop mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Quanto dinheiro sua clínica perde por atrasos no WhatsApp?
          </h2>
          <p className="mt-3 text-lg text-gray-800">
            Pequenos atrasos viram grandes perdas. Veja se isso está acontecendo com você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const accents = ["#6A11CB", "#2574FC", "#2c1c8d"];
            const color = accents[i % accents.length];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02, boxShadow: `0 22px 55px -15px rgba(0,0,0,0.35), 0 0 60px ${color}55` }}
                style={{ boxShadow: `0 16px 40px -18px rgba(0,0,0,0.25), 0 0 36px ${color}33` }}
                className="rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 p-8 md:min-h-[190px] transition-all duration-300 ease-out"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-lg border border-white/50 shadow-sm flex items-center justify-center">
                    <Icon className="w-8 h-8" color={color} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">{card.title}</h3>
                    <p className="mt-1 text-gray-800 text-base">
                      {card.description}
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      {card.closing} Conecte tudo com automação + CRM Inova Web.
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
