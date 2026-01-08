import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect, useRef } from 'react';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import Autoplay from 'embla-carousel-autoplay';

const partners = [
  {
    id: 1,
    name: "Agende-se",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
    category: "Agendamento online"
  },
  {
    id: 2,
    name: "Msgmaster AI",
    logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=100&fit=crop", 
    category: "Automação para seu negócio"
  },
  {
    id: 3,
    name: "BeautyPrime",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop",
    category: "Salão & Estética"
  },
  {
    id: 4,
    name: "TechPro",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop",
    category: "Startup Tecnologia"
  },
  {
    id: 5,
    name: "SmartLog",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop",
    category: "Logística & Transporte"
  },
  {
    id: 6,
    name: "FinanceX",
    logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=200&h=100&fit=crop",
    category: "Fintech"
  },
  {
    id: 7,
    name: "AutoPrime",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop",
    category: "Automação Industrial"
  }
];

export function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { addScrollAnimation } = useScrollAnimations();

  useEffect(() => {
    if (sectionRef.current) {
      addScrollAnimation(sectionRef.current, 'fade');
    }
  }, [addScrollAnimation]);

  const plugin = useRef<ReturnType<typeof Autoplay>>(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-reveal-fade"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl" />
      
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
            Empresas que confiam em nossa tecnologia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Parcerias sólidas construídas com tecnologia de ponta
          </p>
        </motion.div>

        {/* Partners Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={partner.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <motion.div 
                    className="p-2 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="relative bg-card/20 backdrop-blur-sm border border-border/10 rounded-lg p-6 h-24 flex items-center justify-center transition-all duration-500 group-hover:bg-card/40 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(106,17,203,0.2)] group-hover:scale-105">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#6A11CB] to-[#2574FC] opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10" />
                      
                      {/* Logo Container */}
                      <div className="relative w-full h-full flex items-center justify-center px-2">
                        <div className="min-w-fit max-w-full h-8 px-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded flex items-center justify-center text-primary font-bold text-xs transition-all duration-300 group-hover:from-primary/30 group-hover:to-secondary/30">
                          <span className="text-center truncate">{partner.name}</span>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#6A11CB]/20 to-[#2574FC]/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-20" />
                    </div>

                    {/* Partner Category (Hidden on mobile, shown on hover) */}
                    <div className="text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-muted-foreground hidden md:block">
                        {partner.category}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden lg:flex -left-12 bg-card/80 backdrop-blur-md border-primary/20 hover:bg-primary/20 hover:border-primary/40 text-foreground" />
            <CarouselNext className="hidden lg:flex -right-12 bg-card/80 backdrop-blur-md border-primary/20 hover:bg-primary/20 hover:border-primary/40 text-foreground" />
          </Carousel>

        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: "50+", label: "Empresas Parceiras" },
            { number: "100%", label: "Satisfação" },
            { number: "24/7", label: "Suporte" },
            { number: "100%", label: "Uptime" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-card/20 backdrop-blur-sm rounded-lg border border-border/10 hover:bg-card/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-[#6A11CB] to-[#2574FC] bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
