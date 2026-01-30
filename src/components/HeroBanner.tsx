import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="w-full min-h-[85vh] flex items-center justify-between px-4 sm:px-6 lg:px-10 py-14 relative overflow-hidden bg-white">
      
      {/* Background Decor - Organic Gradient */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Roxo vivido */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#4e03a2] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.33] animate-blob"></div>
        {/* Azure */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#1c7fab] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.33] animate-blob" style={{ animationDelay: "2s" }}></div>
        {/* Índigo */}
        <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-[#2c1c8d] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.33] animate-blob" style={{ animationDelay: "4s" }}></div>
        {/* Azure */}
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-[#1b5996] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.33] animate-blob" style={{ animationDelay: "6s" }}></div>
        {/* Azul */}
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-[#1f3c8d] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.33] animate-blob" style={{ animationDelay: "3s" }}></div>
        
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-desktop mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        
        {/* Lado Esquerdo: Conteúdo */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col space-y-8 text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.15] tracking-tight font-sans">
            Sua recepção mais <span className="text-[#6A11CB]">eficiente</span> e seus pacientes <span className="text-[#2574FC]">mais felizes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-black/80 leading-relaxed max-w-xl font-medium">
            Automatize agendamentos e confirmações no WhatsApp. Reduza faltas, elimine filas de espera e deixe sua equipe focar no atendimento presencial.
          </p>

          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              className="bg-[#6A11CB] hover:bg-[#5a0eb3] text-white text-base font-bold px-8 py-4 h-auto rounded-full shadow-lg shadow-[#6A11CB]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => window.location.href = "https://wa.me/5522981055534"}
            >
              Falar com especialista
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Lado Direito: Visual Friendly */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center items-center relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
            {/* Glass Card Behind Robot */}
            <div className="absolute inset-4 bg-white/40 rounded-[3rem] border border-white/60 backdrop-blur-md shadow-2xl -z-10 rotate-3"></div>
            <div className="absolute inset-4 bg-white/60 rounded-[3rem] border border-white/60 backdrop-blur-md shadow-xl -z-10 -rotate-2 scale-95"></div>
            
            <DotLottieReact
              src="https://lottie.host/0b6a142e-a991-4e1f-b3f2-6129cb1f53cf/ut0UsGx0vd.lottie"
              loop
              autoplay
              className="w-full h-full object-contain drop-shadow-2xl z-20"
            />
            
            {/* Floating Cards for Context */}
            
            {/* Card 1: Agendamento Confirmado (Left) */}
            <motion.div 
              className="absolute -left-6 top-[5%] bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] z-30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#25D366]/10 p-2.5 rounded-full shrink-0 flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                   </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Agendamento Confirmado</p>
                  <p className="text-xs text-gray-500 mt-0.5">Automático via WhatsApp</p>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Follow-up (Left Bottom) */}
            <motion.div 
              className="absolute -left-10 bottom-[25%] bg-white p-3 rounded-xl shadow-lg border border-purple-100 max-w-[210px] z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.8 }}
            >
               <div className="flex items-center gap-3">
                 <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                   <CheckCircle2 size={18} /> 
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-purple-600 uppercase">Pós-Consulta</p>
                   <p className="text-xs font-medium text-gray-700">Como está se sentindo hoje? Precisando de algo?</p>
                 </div>
               </div>
            </motion.div>

            {/* Card 3: Lembrete (Bottom Right) */}
            <motion.div 
              className="absolute -right-4 bottom-[35%] bg-white p-3 rounded-xl shadow-lg border-l-4 border-l-[#2574FC] max-w-[200px] z-30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#2574FC] animate-pulse"></div>
                <p className="text-[10px] font-bold text-[#2574FC] uppercase tracking-wide">Lembrete Enviado</p>
              </div>
              <p className="text-xs font-medium text-gray-800">Sua consulta é amanhã às 14:00. Confirma?</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}