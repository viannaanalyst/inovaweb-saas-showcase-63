
import { motion } from "framer-motion";
import { MessageCircle, Filter, Bot, BarChart3 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Captação",
    description: "Centralização de leads de WhatsApp, Instagram e campanhas, sem perda de mensagens.",
    icon: MessageCircle,
    color: "#6A11CB",
  },
  {
    id: 2,
    title: "Organização",
    description: "Conversas organizadas em funil, com tags, status, histórico e responsáveis.",
    icon: Filter,
    color: "#2574FC",
  },
  {
    id: 3,
    title: "Atendimento Inteligente",
    description: "IA responde dúvidas iniciais e qualifica o lead, transferindo para humano no momento certo.",
    icon: Bot,
    color: "#6A11CB",
  },
  {
    id: 4,
    title: "Resultados",
    description: "Dashboards claros com métricas de conversão, atendimentos e agendamentos.",
    icon: BarChart3,
    color: "#2574FC",
  },
];

export function JourneySection() {
  return (
    <section className="w-full py-24 bg-[#FBFAF7] relative overflow-hidden">
        <div className="max-w-desktop mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
            <motion.div 
              className="w-full lg:w-5/12 lg:sticky lg:top-20 pt-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-[24px] font-bold text-black leading-[1.25] tracking-tight font-sans">
                Transforme o WhatsApp em uma central de atendimento inteligente, organizada e escalável.
              </h2>
              <p className="mt-3 text-[16px] text-gray-700 leading-relaxed font-sans">
                Tudo conectado em um único CRM, do primeiro contato ao agendamento confirmado.
              </p>
            </motion.div>

            <div className="w-full lg:w-7/12 relative pl-4">
              <div className="absolute left-[26px] top-8 bottom-8 w-[3px] bg-gradient-to-b from-[#6A11CB] via-[#4845e6] to-[#2574FC] hidden sm:block rounded-full opacity-30"></div>

              <div className="flex flex-col gap-16">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const color = step.color;
                  return (
                    <motion.div 
                      key={step.id}
                      className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 items-start z-10"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="shrink-0 z-10 bg-[#FBFAF7] py-2">
                        <div className="w-12 h-12 rounded-full relative flex items-center justify-center bg-white shadow-sm border border-gray-100/50 ml-[-14px]">
                          <Icon className="w-5 h-5" color={color} />
                        </div>
                      </div>

                      <div className="pt-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
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
