import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Bot, CalendarDays, Bell, ClipboardList, Workflow, Users } from "lucide-react";
import type { ElementType } from "react";
import { motion } from "framer-motion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import saasAgendamentos from "@/assets/saas-agendamentos.jpg";
import saasFinancas from "@/assets/saas-financas.jpg";
import saasMarketing from "@/assets/saas-marketing.jpg";
import saasDelivery from "@/assets/saas-delivery.jpg";

const saasData = [
  {
    name: "Agendamento automatizado",
    description:
      "Pacientes escolhem especialidade e horário direto no WhatsApp. Integração com agenda e bloqueio de conflitos.",
    imageUrl: saasAgendamentos,
    variant: "agendamento",
  },
  {
    name: "Triagem e dúvidas com IA",
    description:
      "Respostas inteligentes para FAQs, orientações pré-consulta e encaminhamentos sem sobrecarregar a equipe.",
    imageUrl: saasMarketing,
    variant: "triagem",
  },
  {
    name: "Confirmação e lembretes",
    description:
      "Mensagens automáticas de confirmação, lembretes e reengajamento. Redução de faltas e cancelamentos.",
    imageUrl: saasFinancas,
    variant: "confirmacao",
  },
  {
    name: "Pós-consulta e satisfação",
    description:
      "Pesquisa de satisfação, instruções pós-consulta e retorno programado para fidelização.",
    imageUrl: saasDelivery,
    variant: "pos",
  },
];

export function SaasGrid() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const Step = ({ icon: Icon, label, badge }: { icon: ElementType; label: string; badge?: string }) => (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-gradient-to-r from-card/60 to-card/40">
      <div className="w-8 h-8 rounded-md flex items-center justify-center bg-muted/60">
        <Icon className="h-4 w-4 text-foreground" />
      </div>
      <span className="text-sm font-medium text-card-foreground">{label}</span>
      {badge && <span className="ml-auto text-[11px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">{badge}</span>}
    </div>
  );

  const Connector = () => <div className="h-0.5 w-10 mx-2 bg-gradient-to-r from-[#6A11CB] to-[#2575FC] rounded-full" />;

  const renderFlowDiagram = (variant: string) => {
    if (variant === "agendamento") {
      return (
        <div className="relative rounded-xl border border-border p-4 bg-card">
          <div className="flex items-center">
            <Step icon={MessageCircle} label="WhatsApp" />
            <Connector />
            <Step icon={Bot} label="Triagem IA" badge="n8n" />
            <Connector />
            <Step icon={CalendarDays} label="Agenda" />
            <Connector />
            <Step icon={ClipboardList} label="Confirmação" />
          </div>
        </div>
      );
    }
    if (variant === "triagem") {
      return (
        <div className="relative rounded-xl border border-border p-4 bg-card">
          <div className="flex items-center">
            <Step icon={MessageCircle} label="WhatsApp" />
            <Connector />
            <Step icon={Bot} label="NLP/FAQ" badge="n8n" />
            <Connector />
            <Step icon={Users} label="Atendimento humano" />
          </div>
        </div>
      );
    }
    if (variant === "confirmacao") {
      return (
        <div className="relative rounded-xl border border-border p-4 bg-card">
          <div className="flex items-center">
            <Step icon={CalendarDays} label="Agendamento" />
            <Connector />
            <Step icon={ClipboardList} label="Confirmação" badge="n8n" />
            <Connector />
            <Step icon={Bell} label="Lembrete" />
            <Connector />
            <Step icon={Workflow} label="Reengajamento" />
          </div>
        </div>
      );
    }
    return (
      <div className="relative rounded-xl border border-border p-4 bg-card">
        <div className="flex items-center">
          <Step icon={ClipboardList} label="Pós-consulta" />
          <Connector />
          <Step icon={Bot} label="Instruções IA" badge="n8n" />
          <Connector />
          <Step icon={Workflow} label="Pesquisa" />
          <Connector />
          <Step icon={Users} label="Retorno" />
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      // Reset progress when slide changes
      progressRef.current = 0;
      setProgress(0);
    });
  }, [api]);

  // Progress bar effect
  useEffect(() => {
    const startProgress = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      progressRef.current = 0;
      setProgress(0);
      
      intervalRef.current = setInterval(() => {
        progressRef.current += 1;
        setProgress(progressRef.current);
        
        if (progressRef.current >= 100) {
          progressRef.current = 0;
          setProgress(0);
        }
      }, 100); // Update every 100ms for smooth animation (10000ms / 100 = 100 steps)
    };

    startProgress();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [current]);

  return (
    <motion.section 
      ref={sectionRef} 
      data-section="projects" 
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background dark:bg-[#121212]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold font-inter text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Fluxos de automação para clínicas
        </motion.h2>
        
        {/* Container with clean background */}
        <motion.div 
          className="bg-card dark:bg-gradient-to-br dark:from-[#121212] dark:to-[#1A1A1A] rounded-xl shadow-card p-4 sm:p-6 lg:p-10 pb-0 relative overflow-hidden border border-border"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative max-w-6xl mx-auto">
            <Carousel
              setApi={setApi}
              plugins={[
                Autoplay({
                  delay: 10000,
                  stopOnInteraction: false,
                }) as ReturnType<typeof Autoplay>,
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="transition-transform duration-700 ease-out">
                {saasData.map((saas, index) => (
                  <CarouselItem key={index}>
                    <motion.div 
                      className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-16 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] px-2 sm:px-4 lg:px-8 group"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {/* Content - Left side on desktop, bottom on mobile */}
                      <motion.div 
                        className="flex-1 order-2 lg:order-1 text-center lg:text-left w-full"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                      >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-inter text-card-foreground mb-3 sm:mb-4 lg:mb-6 transition-all duration-500 group-hover:text-[#6A11CB] group-hover:scale-105">
                          {saas.name}
                        </h3>
                        <p className="text-muted-foreground font-inter leading-relaxed text-sm sm:text-base lg:text-xl mb-4 sm:mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 transition-all duration-500 group-hover:text-muted-foreground/90 group-hover:translate-y-[-2px]">
                          {saas.description}
                        </p>
                      </motion.div>

                      {/* Image - Right side on desktop, top on mobile */}
                      <motion.div 
                        className="flex-1 order-1 lg:order-2 w-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                      >
                        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto relative group">
                          {/* Partículas sutis ao redor da imagem */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                            <div className="absolute -top-2 -left-2 w-1 h-1 bg-[#6A11CB] rounded-full animate-pulse"></div>
                            <div className="absolute -top-1 right-4 w-0.5 h-0.5 bg-[#2574FC] rounded-full animate-pulse delay-200"></div>
                            <div className="absolute bottom-2 -left-1 w-0.5 h-0.5 bg-[#6A11CB] rounded-full animate-pulse delay-400"></div>
                            <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-[#2574FC] rounded-full animate-pulse delay-600"></div>
                          </div>
                          
                          <div className="absolute inset-0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#6A11CB]/10 via-transparent to-[#2574FC]/10 blur-sm scale-105"></div>
                          {renderFlowDiagram(saas.variant as string)}
                        </div>
                      </motion.div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Custom Navigation Arrows - Responsive positioning */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-2 sm:left-4 lg:left-[-20px] top-1/2 -translate-y-1/2 z-10 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-full bg-muted/80 dark:bg-[#1E1E1E]/80 backdrop-blur-sm border border-border dark:border-white/10 text-foreground dark:text-white hover:bg-muted/90 dark:hover:bg-[#1E1E1E]/90 hover:border-primary/20 dark:hover:border-white/20 transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </button>
            
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-2 sm:right-4 lg:right-[-20px] top-1/2 -translate-y-1/2 z-10 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-full bg-muted/80 dark:bg-[#1E1E1E]/80 backdrop-blur-sm border border-border dark:border-white/10 text-foreground dark:text-white hover:bg-muted/90 dark:hover:bg-[#1E1E1E]/90 hover:border-primary/20 dark:hover:border-white/20 transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </button>

            {/* Indicators - Modern minimalist style with responsive sizing */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 mb-4 sm:mb-6 lg:mb-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-full transition-all duration-300 ease-out ${
                    index + 1 === current 
                      ? 'bg-gradient-to-r from-[#6A11CB] to-[#2575FC] shadow-md scale-110' 
                      : 'bg-transparent border border-muted-foreground/40 hover:border-muted-foreground/60 hover:scale-105'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Progress bar - Positioned at absolute bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 w-full">
            <div className="w-full h-[3px] bg-border/30 dark:bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#6A11CB] to-[#2575FC] transition-all duration-100 ease-linear shadow-lg"
                style={{ 
                  width: `${progress}%`,
                  boxShadow: '0 0 10px rgba(106, 17, 203, 0.4)'
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
