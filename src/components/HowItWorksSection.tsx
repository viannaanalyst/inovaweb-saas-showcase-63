import { motion } from "framer-motion";
import { MessageCircle, Filter, LayoutDashboard, CalendarCheck, Eye } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "O canal onde seu paciente já está.",
      delay: 0.1
    },
    {
      icon: Filter,
      title: "Qualificação",
      description: "IA entende a necessidade e coleta dados.",
      delay: 0.2
    },
    {
      icon: LayoutDashboard,
      title: "Organização",
      description: "Triagem automática por prioridade.",
      delay: 0.3
    },
    {
      icon: CalendarCheck,
      title: "Agendamento",
      description: "Do contato à confirmação final.",
      delay: 0.4
    },
    {
      icon: Eye,
      title: "Visão clara",
      description: "Controle total em um único painel.",
      delay: 0.5
    }
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-48 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] relative overflow-hidden">
      <div className="max-w-desktop mx-auto">
        <div className="text-center mb-16 md:mb-32">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Do primeiro contato ao <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
              agendamento confirmado.
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Linha Conectora Minimalista (Timeline) */}
          <div className="absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: step.delay }}
                  viewport={{ once: true }}
                >
                  {/* Círculo do Ícone com Efeito de Pulso Sutil no Hover */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-full bg-white border border-gray-100 flex items-center justify-center relative z-10 group-hover:border-brand-purple/30 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(106,17,203,0.1)]">
                      <Icon className="w-8 h-8 text-gray-400 group-hover:text-brand-purple transition-colors duration-500" />
                    </div>
                    {/* Número do Passo Sutil */}
                    <span className="absolute -bottom-2 -right-2 text-[10px] font-bold text-gray-300 tracking-widest uppercase bg-white px-2 py-1 rounded-md border border-gray-50 z-20 group-hover:text-brand-purple group-hover:border-brand-purple/20 transition-all duration-500">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <div className="space-y-3 px-4">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-brand-purple transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
