import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { useEffect, useState } from "react";

export function Footer() {
  useScrollAnimations();

  return (
    <footer className="bg-white border-t border-black/10 pt-24 md:pt-48 pb-16 md:pb-36 relative overflow-hidden">
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
      <div className="max-w-desktop mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-black">
        <div className="flex justify-center -mt-16 mb-12">
          <img 
            src="/lovable-uploads/logo_light.png"
            alt="InovaWeb"
            className="h-20 sm:h-24 w-auto object-contain"
          />
        </div>
        <div className="flex justify-center mb-12">
          <p className="font-sans text-sm sm:text-base leading-relaxed text-center max-w-2xl">
            Ajudamos clínicas a organizarem seu atendimento e venderem mais com automação humanizada.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/5 pt-8 flex flex-col items-center gap-6">
          <div className="flex justify-center gap-8 text-xs sm:text-sm font-medium">
            <a href="https://www.instagram.com/inovaweb.tech" target="_blank" rel="noopener noreferrer" className="text-black transition-all hover:text-brand-purple underline decoration-black decoration-1 underline-offset-[3px] hover:decoration-brand-purple">Instagram</a>
            <a href="/termos" className="text-black transition-all hover:text-brand-purple underline decoration-black decoration-1 underline-offset-[3px] hover:decoration-brand-purple">Termos de Uso</a>
          </div>
          <p className="text-center font-sans text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">
            © 2026 InovaWeb Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
