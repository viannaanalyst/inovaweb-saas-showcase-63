import { motion } from "framer-motion";
import { MessageSquare, Clock, TrendingDown, Users } from "lucide-react";

export function DiagnosticSection() {
  const problems = [
    {
      icon: MessageSquare,
      title: "Mensagens sem resposta",
      dotColor: "bg-red-400"
    },
    {
      icon: TrendingDown,
      title: "Leads pagos desperdiçados",
      dotColor: "bg-orange-400"
    },
    {
      icon: Clock,
      title: "Atendimento fora do horário",
      dotColor: "bg-blue-400"
    },
    {
      icon: Users,
      title: "Recepção sobrecarregada",
      dotColor: "bg-purple-400"
    }
  ];

  return (
    <section className="w-full py-40 px-4 sm:px-6 lg:px-8 bg-[#FBFAF7] relative overflow-hidden">
      {/* Sutil detalhe de fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-desktop mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32">
          
          {/* Coluna Esquerda: Lista de Problemas com Design Refinado */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-10">
              {problems.map((problem, i) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100 group-hover:border-brand-purple/20 group-hover:shadow-md transition-all duration-500">
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-brand-purple transition-colors duration-500" />
                      </div>
                      {/* Indicador de status sutil */}
                      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-[#FBFAF7] ${problem.dotColor} opacity-80`} />
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold text-gray-800 tracking-tight group-hover:text-black transition-colors duration-500">
                        {problem.title}
                      </span>
                      <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-brand-purple/40 to-transparent transition-all duration-700 mt-1" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Coluna Direita: Tipografia Premium e Manifesto */}
          <motion.div 
            className="w-full lg:w-5/12 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="space-y-4">
              <span className="text-brand-purple font-bold tracking-[0.2em] text-xs uppercase opacity-70">
                Diagnóstico de Perda
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Pequenos atrasos geram <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-brand-purple">
                  grandes perdas.
                </span>
              </h2>
            </div>
            
            <div className="relative pl-6 border-l-2 border-brand-purple/10">
              <p className="text-xl text-gray-500 leading-relaxed italic">
                "Quando o atendimento não é estruturado, o paciente não espera — ele procura outra clínica."
              </p>
            </div>
            
            <motion.p 
              className="text-lg text-gray-400 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Identifique os gargalos antes que eles se tornem prejuízo.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
