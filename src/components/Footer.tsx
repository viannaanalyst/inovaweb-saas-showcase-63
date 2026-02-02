import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { useEffect, useState } from "react";

export function Footer() {
  useScrollAnimations();

  return (
    <footer className="bg-white border-t border-black/10 pt-48 pb-36 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#4e03a2] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.33] animate-blob"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#1c7fab] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.33] animate-blob" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-[#2c1c8d] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.33] animate-blob" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-[#1b5996] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.33] animate-blob" style={{ animationDelay: "6s" }}></div>
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-[#1f3c8d] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.33] animate-blob" style={{ animationDelay: "3s" }}></div>
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
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center font-sans text-xs">
            © 2026 InovaWeb Tecnologia. Todos os direitos reservados.
          </p>
          <div className="w-full md:w-auto flex md:justify-end gap-6 text-xs md:text-sm">
            <span><a href="https://www.instagram.com/inovaweb.tech" target="_blank" rel="noopener noreferrer" className="text-black transition-colors hover:text-black">Instagram</a></span>
            <span><a href="/termos" className="text-black transition-colors hover:text-black">Termos de Uso</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
