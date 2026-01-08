import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type VantaNetOptions = {
  el: HTMLElement | null;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  color: number;
  backgroundColor: number;
  points: number;
  maxDistance: number;
  spacing: number;
};

type VantaInstance = {
  destroy: () => void;
};

type Vanta = {
  NET: (options: VantaNetOptions) => VantaInstance;
};

declare global {
  interface Window {
    VANTA?: Vanta;
  }
}

export function HeroBanner() {
  const vantaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let vantaEffect: VantaInstance | undefined;
    
    if (vantaRef.current && window.VANTA) {
      vantaEffect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x2574fc,
        backgroundColor: 0x0,
        points: 4.00,
        maxDistance: 21.00,
        spacing: 19.00
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="w-full min-h-[90vh] flex items-center justify-between px-4 sm:px-6 lg:px-10 py-16 pt-20 relative"
    >
      {/* Lado Esquerdo: Logo + Headline + CTA */}
      <motion.div 
        className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.img 
          src="/lovable-uploads/97d3257d-e2b2-4afc-ba7a-b48432740773.png" 
          alt="Tecnologia e Sistemas InovaWeb"
          className="w-full max-w-lg h-auto object-contain"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        />

        {/* Headline */}
        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Atendimento no WhatsApp com IA <br className="hidden sm:block" /> 
          para clínicas, 24h por dia
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="text-lg text-muted-foreground max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          Automatize agendamentos, triagem, confirmações e lembretes com IA. Reduza filas no WhatsApp e não perca pacientes fora do horário.
        </motion.p>

        {/* Botão CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <Button 
            variant="inovaweb" 
            size="default"
            className="text-base font-medium px-6 py-3 h-auto rounded-lg hover:scale-[1.02] transition-transform duration-200"
            onClick={() => {
              window.location.href = "/whats";
            }}
          >
            Falar no WhatsApp agora
          </Button>
        </motion.div>
      </motion.div>

      {/* Lado Direito: Animação */}
      <motion.div 
        className="hidden lg:flex w-1/2 justify-center items-center relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <DotLottieReact
          src="https://lottie.host/0b6a142e-a991-4e1f-b3f2-6129cb1f53cf/ut0UsGx0vd.lottie"
          loop
          autoplay
          className="w-full max-w-2xl h-[600px]"
        />
      </motion.div>
    </section>
  );
}
