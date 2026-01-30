import { motion } from "framer-motion";
import { MessageSquareWarning, Clock, UserX, Users } from "lucide-react";

export function PainPointSection() {
  const painPoints = [
    {
      icon: <MessageSquareWarning className="h-8 w-8 text-brand-purple" />,
      title: "Mensagens esquecidas",
      description: "Pacientes ficam horas sem resposta e acabam procurando outra clínica."
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-blue" />,
      title: "Atendimento fora do horário",
      description: "Sua clínica fecha às 18h, mas seus pacientes querem agendar à noite."
    },
    {
      icon: <UserX className="h-8 w-8 text-brand-purple" />,
      title: "Leads desperdiçados",
      description: "Investimento em tráfego pago que vai para o ralo por demora no atendimento."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Recepção sobrecarregada",
      description: "Sua equipe perde tempo respondendo perguntas repetitivas o dia todo."
    }
  ];

  return (
    <section id="problemas" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-desktop mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sua clínica está perdendo pacientes por <span className="text-brand-purple">detalhes bobos</span>?
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            A demora no atendimento é o principal motivo de desistência. Veja se isso acontece com você:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 border border-gray-100">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
