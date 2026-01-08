import { motion } from "framer-motion";
import { CheckCircle, Zap, Palette, TrendingUp, MessageCircle, Workflow, CalendarDays } from "lucide-react";

export function PainPointSection() {
  const painPoints = [
    {
      icon: <TrendingUp className="h-6 w-6 text-[#6A11CB]" />,
      text: "Filas e demora no WhatsApp – atendimento lento e manual."
    },
    {
      icon: <Zap className="h-6 w-6 text-[#6A11CB]" />,
      text: "Agendamentos manuais – erros e perda de horários."
    },
    {
      icon: <Palette className="h-6 w-6 text-[#6A11CB]" />,
      text: "Sem confirmação – mais faltas e cancelamentos."
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background dark:bg-[#121212] overflow-hidden">
      {/* Subtle separator with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6A11CB] to-[#2574FC] opacity-30" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Main Title - Impactful Question */}
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Seu atendimento no WhatsApp está te fazendo{" "}
              <span className="bg-gradient-to-r from-[#6A11CB] to-[#2574FC] bg-clip-text text-transparent">
                perder pacientes?
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground font-inter leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              Clínicas ainda sofrem com atendimento manual pelo WhatsApp: demora nas respostas, agendamentos confusos e falta de confirmação. Implementamos automações com IA que organizam o fluxo, reduzem no-show e elevam a experiência do paciente.
            </motion.p>

            {/* Benefits List */}
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 text-left"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#6A11CB]/10 to-[#2574FC]/10 border border-[#6A11CB]/20 flex items-center justify-center">
                    {point.icon}
                  </div>
                  <p className="text-base sm:text-lg font-inter text-foreground font-medium">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration Column */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6A11CB]/20 to-[#2574FC]/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                {/* Tech Stack Visualization */}
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-500/10 to-teal-400/10 rounded-lg border border-emerald-500/20"
                    animate={{ scale: [1, 1.02, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MessageCircle className="h-5 w-5 text-emerald-400" />
                    <div className="flex-1">
                      <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" />
                      <span className="text-xs text-emerald-400 font-medium">WhatsApp com IA</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500/10 to-sky-400/10 rounded-lg border border-blue-500/20"
                    animate={{ scale: [1, 1.02, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Workflow className="h-5 w-5 text-blue-400" />
                    <div className="flex-1">
                      <div className="h-2 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full" />
                      <span className="text-xs text-blue-400 font-medium">Fluxos n8n</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/10 to-fuchsia-400/10 rounded-lg border border-purple-500/20"
                    animate={{ scale: [1, 1.02, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <CalendarDays className="h-5 w-5 text-purple-400" />
                    <div className="flex-1">
                      <div className="h-2 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-full" />
                      <span className="text-xs text-purple-400 font-medium">Agenda Integrada</span>
                    </div>
                  </motion.div>
                </div>

                {/* Central Success Indicator */}
                <motion.div 
                  className="mt-6 p-4 bg-gradient-to-br from-[#6A11CB]/10 to-[#2574FC]/10 rounded-xl border border-[#6A11CB]/20 text-center"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(106, 17, 203, 0.1)",
                      "0 0 30px rgba(106, 17, 203, 0.2)",
                      "0 0 20px rgba(106, 17, 203, 0.1)"
                    ]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <CheckCircle className="h-8 w-8 text-[#6A11CB] mx-auto mb-2" />
                  <span className="text-sm font-medium text-[#6A11CB]">
                    Atendimento 24/7
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6A11CB] to-[#2574FC] opacity-20" />
    </section>
  );
}
