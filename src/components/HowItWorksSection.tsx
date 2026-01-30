import { motion } from "framer-motion";
import { MessageCircle, Filter, UserCheck, LayoutDashboard, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      id: "01",
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Atendimento Automático",
      description: "O paciente manda mensagem e a IA responde na hora, tira dúvidas e inicia o agendamento.",
      color: "bg-brand-purple"
    },
    {
      id: "02",
      icon: <Filter className="w-8 h-8 text-white" />,
      title: "Qualificação Inteligente",
      description: "A IA entende o que o paciente precisa (consulta, exame, retorno) e coleta os dados.",
      color: "bg-brand-blue"
    },
    {
      id: "03",
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: "Transferência Humanizada",
      description: "Se for um caso complexo, a IA passa para sua equipe com todo o histórico pronto.",
      color: "bg-indigo-500"
    },
    {
      id: "04",
      icon: <LayoutDashboard className="w-8 h-8 text-white" />,
      title: "Organização no CRM",
      description: "Tudo fica registrado em um painel visual. Você sabe quem agendou, quem faltou e quem precisa de retorno.",
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-10 hidden lg:block" />
      
      <div className="max-w-desktop mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-semibold tracking-wider text-sm uppercase">Passo a Passo</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Como a InovaWeb transforma sua clínica
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um fluxo simples e eficiente que funciona sozinho, 24 horas por dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 text-6xl font-bold text-gray-50 opacity-50 z-0 select-none">
                {step.id}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg mb-6 relative z-10`}>
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                {step.description}
              </p>

              {/* Arrow Connection (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 -right-6 text-gray-200 z-0">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
