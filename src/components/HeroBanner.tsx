import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import crmImage from "@/assets/saas-agendamentos.jpg";

export function HeroBanner() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col items-center pt-32 px-4 sm:px-6 lg:px-10 relative bg-white">
      
      {/* Background Decor - Organic Gradient */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Roxo vivido */}
        <div className="absolute top-[-10%] right-[-15%] md:top-[-20%] md:right-[-10%] w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[#4e03a2] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-[0.4] md:opacity-[0.33] animate-blob"></div>
        {/* Azure */}
        <div className="absolute bottom-[-10%] left-[-15%] md:bottom-[-20%] md:left-[-10%] w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[#1c7fab] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-[0.4] md:opacity-[0.33] animate-blob" style={{ animationDelay: "2s" }}></div>
        {/* Índigo */}
        <div className="absolute top-[20%] left-[-10%] md:left-[20%] w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-[#2c1c8d] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-[0.4] md:opacity-[0.33] animate-blob" style={{ animationDelay: "4s" }}></div>
        {/* Azure */}
        <div className="absolute bottom-[20%] right-[-10%] md:bottom-[10%] md:right-[20%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#1b5996] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-[0.4] md:opacity-[0.33] animate-blob" style={{ animationDelay: "6s" }}></div>
        
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center relative z-10">
        
        {/* Hero Text Content */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <motion.h1 
            className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.2] sm:leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Atendimento Inteligente. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Controle Total.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Um CRM completo para transformar o WhatsApp em uma central de atendimento organizada e escalável.
          </motion.p>

          <motion.p 
            className="mt-4 text-sm md:text-base text-brand-purple font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Usado por clínicas que querem escala sem perder o atendimento humano
          </motion.p>
        </div>

        <div className="relative w-full -mb-16 md:-mb-48">
          {/* CRM Mockup */}
          <motion.div 
            className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Browser Mockup Header */}
            <div className="bg-gray-100 h-8 md:h-10 w-full flex items-center px-3 md:px-4 space-x-2 border-b border-gray-200">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
              <div className="ml-2 md:ml-4 bg-white px-2 md:px-3 py-0.5 md:py-1 rounded-md text-[10px] md:text-xs text-gray-400 flex-1 text-left">
                crm.inovaweb.com.br
              </div>
            </div>
            
            {/* CRM Image */}
            <img 
              src={crmImage} 
              alt="Painel do CRM InovaWeb" 
              className="w-full h-auto object-cover"
            />

            {/* Floating Highlight Badge */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white p-3 md:p-4 rounded-lg shadow-xl border border-gray-100 max-w-[150px] md:max-w-[200px] text-left hidden sm:block">
              <p className="font-bold text-brand-purple text-sm md:text-base">Visão Clara</p>
              <p className="text-[9px] md:text-[10px] text-gray-500 leading-tight">
                Veja em segundos quem confirmou, quem precisa de retorno e os novos agendamentos.
              </p>
            </div>
          </motion.div>

          {/* Robot - Smaller and floating */}
          <motion.div 
            className="absolute -top-12 -right-8 sm:-top-16 sm:-right-16 w-32 h-32 sm:w-64 sm:h-64 z-20 pointer-events-none"
            initial={{ opacity: 0, scale: 0.5, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <DotLottieReact
              src="https://lottie.host/0b6a142e-a991-4e1f-b3f2-6129cb1f53cf/ut0UsGx0vd.lottie"
              loop
              autoplay
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}