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
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#FBFAF7] scroll-reveal-fade border-y border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative max-w-desktop mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-2">
            Integrações e Parceiros
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-sans">
            Conectado às melhores ferramentas
          </h2>
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
              align: "center",
              loop: true,
              slidesToScroll: 1,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={partner.id} className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
                  <motion.div 
                    className="p-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-white border border-gray-100 rounded-xl p-6 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 hover:shadow-lg hover:shadow-brand-purple/5">
                      <span className="font-bold text-gray-800 text-sm md:text-base">{partner.name}</span>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
}
