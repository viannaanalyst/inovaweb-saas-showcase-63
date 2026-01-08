import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <motion.section 
      id="sobre" 
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold font-inter text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sobre a Empresa
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Texto - Slide-in da esquerda */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-4 text-card-foreground font-inter leading-relaxed text-base sm:text-lg">
              <p>
                A <strong className="text-foreground">InovaWeb</strong> é especializada em automação de atendimento com IA via WhatsApp para clínicas.
                Nosso foco é eliminar filas, organizar agendamentos e oferecer uma experiência moderna ao paciente.
              </p>
              
              <p>
                Implementamos fluxos inteligentes de triagem, confirmação, lembretes e pós-consulta,
                integrando com agendas e sistemas existentes quando necessário, sempre com segurança e escalabilidade.
              </p>
              
              <p>
                Nossa missão é liberar sua equipe das tarefas repetitivas, aumentar a conversão,
                reduzir o no-show e elevar a satisfação dos pacientes com atendimento 24/7.
              </p>
            </div>
          </motion.div>

          {/* Ilustração/Stats - Slide-in da direita */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-gradient-to-br from-card to-card/80 dark:from-[#1E1E1E] dark:to-[#1A1A1A] rounded-2xl p-6 sm:p-8 border border-border transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] hover:border-purple-500/50 hover:shadow-purple-500/20 cursor-pointer group purple-glow-hover">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      5+
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      Projetos entregues
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      1+
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      Anos de experiência
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      95%
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      Clientes satisfeitos
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      24/7
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      Suporte disponível
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
