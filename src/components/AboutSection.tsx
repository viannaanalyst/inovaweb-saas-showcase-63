import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="sobre" className="w-full pt-48 pb-48 px-4 sm:px-6 lg:px-8 bg-[#FBFAF7] relative overflow-hidden">
      {/* Blur Background Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Criado para clínicas que não podem perder pacientes.
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A Inova Web existe para resolver um problema simples e caro: 
              <span className="block font-medium text-gray-900 mt-2">mensagens sem resposta, leads perdidos e recepções sobrecarregadas.</span>
            </p>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto pt-4 border-t border-gray-100">
              Não somos um chatbot genérico. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue font-bold">
                Somos um sistema completo de atendimento inteligente, pensado para a rotina real de clínicas.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
