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
    name: "Juliana Matos",
    role: "CEO da Agende-se",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Nosso sistema de agendamento ficou muito mais fluido. A InovaWeb entregou agilidade e design impecável. Estamos mais eficientes do que nunca!"
  },
  {
    id: 2,
    name: "Daniel Souza",
    role: "Fundador da Msgmaster AI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "A automação desenvolvida pela InovaWeb revolucionou nosso atendimento. Inteligência real aplicada com maestria!"
  },
  {
    id: 3,
    name: "Lucas Andrade",
    role: "CEO da StartUp TechPro",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Desde que começamos a usar os sistemas da InovaWeb, nossa produtividade aumentou drasticamente. Rápido, intuitivo e sem travamentos."
  },
  {
    id: 4,
    name: "Mariana Ribeiro",
    role: "Gestora de Operações da BeautyPrime",
    avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Automatizamos vários processos e economizamos horas de trabalho por semana. Excelente suporte e tecnologia de ponta."
  },
  {
    id: 5,
    name: "Fernando Costa",
    role: "Diretor Comercial da SmartLog",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Sistema muito estável e com ótima performance. Trouxe mais controle e agilidade para nossa operação."
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

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }) as any
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
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-reveal-fade"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />
      <div className="absolute inset-0 geometric-particles opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6A11CB] to-[#2574FC] bg-clip-text text-transparent">
            O que dizem sobre nossos sistemas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
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
            className="w-full max-w-5xl mx-auto"
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
                <CarouselItem key={testimonial.id}>
                  <motion.div 
                    className="p-6 lg:p-8 group"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="relative bg-card/40 backdrop-blur-md border border-border/20 rounded-xl p-6 lg:p-8 transition-all duration-500 group-hover:bg-card/60 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(106,17,203,0.3)] group-hover:scale-[1.02]">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6A11CB] to-[#2574FC] opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                      
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                        {/* Avatar */}
                        <div className="relative">
                          <Avatar className="w-16 h-16 lg:w-20 lg:h-20 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                            <AvatarImage 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-semibold">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white fill-current" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                          {/* Stars */}
                          <div className="flex justify-center lg:justify-start gap-1 mb-3">
                            {renderStars(testimonial.rating)}
                          </div>

                          {/* Comment */}
                          <blockquote className="text-lg lg:text-xl text-foreground/90 mb-4 italic leading-relaxed">
                            "{testimonial.comment}"
                          </blockquote>

                          {/* Author Info */}
                          <div>
                            <h4 className="font-semibold text-foreground text-lg">
                              {testimonial.name}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden lg:flex -left-16 bg-card/80 backdrop-blur-md border-primary/20 hover:bg-primary/20 hover:border-primary/40 text-foreground" />
            <CarouselNext className="hidden lg:flex -right-16 bg-card/80 backdrop-blur-md border-primary/20 hover:bg-primary/20 hover:border-primary/40 text-foreground" />
          </Carousel>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 lg:hidden">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30 mx-1 transition-all duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}