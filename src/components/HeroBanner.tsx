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

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center relative z-10">
        
        {/* Hero Text Content */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6"
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

        <div className="relative w-full -mb-24 md:-mb-48">
          {/* CRM Mockup */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Browser Mockup Header */}
            <div className="bg-gray-100 h-10 w-full flex items-center px-4 space-x-2 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 bg-white px-3 py-1 rounded-md text-xs text-gray-400 flex-1 text-left">
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
            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 max-w-[200px] text-left hidden sm:block">
              <p className="font-bold text-brand-purple text-base">Visão Clara</p>
              <p className="text-[10px] text-gray-500 leading-tight">
                Veja em segundos quem confirmou, quem precisa de retorno e os novos agendamentos.
              </p>
            </div>
          </motion.div>

          {/* Robot - Smaller and floating */}
          <motion.div 
            className="absolute -top-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 z-20 pointer-events-none"
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