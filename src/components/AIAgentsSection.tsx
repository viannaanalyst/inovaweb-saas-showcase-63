import { motion } from "framer-motion";
import { MessageCircle, Filter, Calendar, Bot } from "lucide-react";

export function AIAgentsSection() {
  const features = [
    {
      title: "Conversas",
      description: "Centraliza WhatsApp e canais em um só lugar.",
      icon: MessageCircle,
      color: "#6A11CB",
    },
    {
      title: "Funil",
      description: "Kanban com tags, status, histórico e responsáveis.",
      icon: Filter,
      color: "#2574FC",
    },
    {
      title: "Agendamentos",
      description: "Lembretes e confirmações automáticas com controle total.",
      icon: Calendar,
      color: "#6A11CB",
    },
    {
      title: "IA ativa",
      description: "Qualifica conversas e transfere para humano no momento certo.",
      icon: Bot,
      color: "#2574FC",
    },
  ];

  return (
    <section className="w-full py-28 bg-[#FBFAF7]">
      <div className="max-w-desktop mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[36px] border border-black/5 bg-white">
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#4e03a2] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.30]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#1c7fab] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.30]"></div>
            <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-[#2c1c8d] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.30]"></div>
            <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-[#1b5996] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.30]"></div>
            <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-[#1f3c8d] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.25]"></div>
          </div>

          <div className="relative px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6A11CB]">
              CRM Inteligente
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              O cérebro central do atendimento e das vendas
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-gray-800 text-base sm:text-lg">
              Centralização de WhatsApp, leads e agendamentos. Automação inteligente de conversas. Qualificação e transferência para humano no momento certo. Controle total do funil e métricas.
            </p>

            <div className="mx-auto mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="rounded-xl bg-white/70 backdrop-blur border border-white/50 shadow-sm p-6 flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100/60 flex items-center justify-center">
                      <Icon className="w-6 h-6" color={f.color} />
                    </div>
                    <div className="mt-4 font-semibold text-gray-900">{f.title}</div>
                    <div className="mt-1 text-sm text-gray-700">{f.description}</div>
                  </motion.div>
                );
              })}
            </div>

            <a
              href="/crm"
              className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-[#6A11CB] to-[#2574FC] px-6 py-3 text-white font-medium shadow-sm hover:opacity-90 transition-opacity"
            >
              Conheça o CRM Inova Web
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
