
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
    <section id="solucao" className="w-full pt-64 md:pt-96 pb-24 bg-[#FBFAF7] relative overflow-hidden">
        <div className="max-w-desktop mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
            <motion.div 
              className="w-full lg:w-5/12 lg:sticky lg:top-40 pt-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight font-sans">
                Transforme o WhatsApp em uma central de atendimento <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">inteligente e escalável.</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed font-sans max-w-md">
                Tudo conectado em um único CRM, do primeiro contato ao agendamento confirmado.
              </p>
            </motion.div>

            <div className="w-full lg:w-7/12 relative pl-4 sm:pl-12">
              <motion.div 
                className="absolute left-[26px] sm:left-[22px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-brand-purple via-brand-blue to-brand-purple hidden sm:block opacity-20 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              ></motion.div>

              <div className="flex flex-col gap-20">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const color = step.color;
                  return (
                    <motion.div 
                      key={step.id}
                      className="relative flex flex-col sm:flex-row gap-8 items-start z-10 group"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                    >
                      <div className="shrink-0 z-10 bg-[#FBFAF7] py-2 flex items-center">
                        <div className="w-14 h-14 rounded-2xl relative flex items-center justify-center bg-white shadow-sm border border-gray-100 group-hover:border-brand-purple/20 group-hover:shadow-md transition-all duration-500 sm:ml-[-50px]">
                          <Icon className="w-6 h-6" color={color} />
                        </div>
                      </div>

                      <div className="pt-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-purple transition-colors duration-500">{step.title}</h3>
                        <p className="text-[15px] text-gray-500 leading-relaxed font-medium max-w-xl">
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
