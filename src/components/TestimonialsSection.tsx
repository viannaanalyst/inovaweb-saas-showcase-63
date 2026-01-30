import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    id: 1,
    name: "Dra. Juliana Matos",
    role: "Gestora de Clínica de Estética",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "As automações no WhatsApp reduziram em 62% nossas filas. Agendamento e confirmações acontecem 100% no chat, sem sobrecarregar a equipe."
  },
  {
    id: 2,
    name: "Daniel Souza",
    role: "Administrador de Clínica Odontológica",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Com IA no WhatsApp, dúvidas comuns são respondidas automaticamente e só chegam casos complexos à equipe. Ganhamos velocidade e qualidade no atendimento."
  },
  {
    id: 3,
    name: "Lucas Andrade",
    role: "Coordenador de Agenda Médica",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Os lembretes automáticos reduziram faltas e cancelamentos. A confirmação via WhatsApp integra direto na agenda — simples e eficaz."
  },
  {
    id: 4,
    name: "Mariana Ribeiro",
    role: "Diretora de Operações",
    avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Os fluxos em n8n organizam todo o pós-consulta: pesquisa de satisfação e instruções automáticas. Ganho real de tempo para o time."
  },
  {
    id: 5,
    name: "Fernando Costa",
    role: "Gestor de Atendimento",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "A jornada no WhatsApp ficou completa: triagem com IA, confirmação e reengajamento. A experiência do paciente melhorou muito."
  }
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { addScrollAnimation } = useScrollAnimations();

  useEffect(() => {
    if (sectionRef.current) {
      addScrollAnimation(sectionRef.current, 'fade');
    }
  }, [addScrollAnimation]);

  const plugin = useRef<ReturnType<typeof Autoplay>>(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const renderStars = (rating: number) => {
    return (
      <>
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6A11CB" />
              <stop offset="100%" stopColor="#2574FC" />
            </linearGradient>
          </defs>
        </svg>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating 
                ? 'fill-current' 
                : 'text-muted-foreground/30'
            }`}
            style={i < rating ? { fill: 'url(#star-gradient)' } : undefined}
          />
        ))}
      </>
    );
  };

  return (
    <motion.section
      id="depoimentos"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-reveal-fade"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/4"></div>

      <div className="relative max-w-desktop mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground font-sans">
            O que dizem sobre nossa <span className="text-brand-purple">tecnologia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Gestores e clínicas que transformaram seu atendimento
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <motion.div 
                    className="p-4 h-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="relative bg-[#FBFAF7] border border-gray-100 rounded-3xl p-8 h-full flex flex-col justify-between hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-300 hover:-translate-y-1">
                      
                      <div className="flex flex-col gap-6">
                        {/* Avatar & Header */}
                        <div className="flex items-center gap-4">
                          <Avatar className="w-14 h-14 ring-2 ring-white shadow-sm">
                            <AvatarImage 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-brand-purple/10 text-brand-purple font-semibold">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-bold text-foreground text-lg font-sans">
                              {testimonial.name}
                            </h4>
                            <p className="text-brand-purple text-sm font-medium">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>

                        {/* Comment */}
                        <blockquote className="text-muted-foreground text-base leading-relaxed">
                          "{testimonial.comment}"
                        </blockquote>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mt-6">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden lg:flex -left-16 bg-white border-gray-200 hover:bg-gray-50 hover:text-brand-purple text-gray-400" />
            <CarouselNext className="hidden lg:flex -right-16 bg-white border-gray-200 hover:bg-gray-50 hover:text-brand-purple text-gray-400" />
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
}
