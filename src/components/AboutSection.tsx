import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#FBFAF7]">
      <div className="max-w-desktop mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Lado Esquerdo: Texto */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-semibold mb-2">
              Sobre a InovaWeb
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Muito mais que um chatbot. <br/>
              Uma <span className="text-brand-purple">recepção digital completa</span>.
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Não somos apenas um software. Somos a inteligência que organiza o caos do WhatsApp da sua clínica. 
              Atuamos como um braço direito da sua recepção, garantindo que nenhum paciente fique sem resposta.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Atendimento imediato 24h por dia, 7 dias por semana",
                "Inteligência Artificial que entende o paciente",
                "Conexão direta com seus agendamentos",
                "Humanização real: seu paciente não sente que fala com um robô"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-blue flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lado Direito: Imagem Ilustrativa Clean */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-purple/10 border-8 border-white bg-white">
               {/* Placeholder image focused on happy receptionist or clean tech */}
               <img 
                 src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070" 
                 alt="Equipe médica organizada" 
                 className="w-full h-auto object-cover"
               />
               
               {/* Floating Card */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                 <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                     98%
                   </div>
                   <div>
                     <p className="font-bold text-gray-900">Taxa de Resposta</p>
                     <p className="text-sm text-gray-500">Pacientes atendidos em menos de 1 min</p>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
