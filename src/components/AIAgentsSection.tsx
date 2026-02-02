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
    <section className="w-full py-20 md:py-28 bg-[#FBFAF7]">
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
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple opacity-80">
              CRM Inteligente
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              O cérebro central do <br className="hidden sm:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
                atendimento e das vendas
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-gray-600 text-base sm:text-lg leading-relaxed">
              Centralização de WhatsApp, leads e agendamentos. Automação inteligente de conversas. Qualificação e transferência para humano no momento certo. Controle total do funil e métricas.
            </p>

            <div className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                    className="group relative p-8 rounded-[32px] bg-[#FAFAF8] border border-black/5 hover:border-brand-purple/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(106,17,203,0.05)] flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mb-6">
                      <Icon className="w-7 h-7" color={feature.color} />
                    </div>
                    <div className="font-bold text-gray-900 text-xl mb-3 tracking-tight">{feature.title}</div>
                    <div className="text-sm text-gray-500 leading-relaxed font-medium text-center">{feature.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
