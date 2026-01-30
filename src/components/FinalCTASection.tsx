import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden relative border-t border-purple-100/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/5 via-transparent to-transparent opacity-60" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-foreground mb-6 leading-tight">
            Pronto para organizar sua clínica?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Junte-se às clínicas que automatizaram o atendimento e pararam de perder pacientes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-full bg-brand-purple hover:bg-brand-purple/90 shadow-lg shadow-brand-purple/25 transition-all hover:scale-105"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Falar com especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-full border-brand-blue text-brand-blue hover:bg-brand-blue/5 hover:text-brand-blue/80"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver se faz sentido para minha clínica
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-blue" />
              <span>Implementação rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-blue" />
              <span>Suporte humanizado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-blue" />
              <span>Sem fidelidade</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
