import { MessageCircle, Mail, Phone, MapPin, Instagram, ChevronUp } from "lucide-react";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { useEffect, useState } from "react";

export function Footer() {
  useScrollAnimations();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Mostra o botão quando o footer estiver visível na tela
        const isFooterVisible = footerRect.top < windowHeight;
        setShowScrollTop(isFooterVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica imediatamente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <footer className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border scroll-reveal-fade">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Company info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-inter text-foreground mb-3 sm:mb-4">
              InovaWeb
            </h3>
            <p className="text-muted-foreground font-inter text-sm sm:text-base leading-relaxed">
              Especializada em soluções modernas e escaláveis para impulsionar seu negócio.
            </p>
          </div>

          {/* Contact info */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold font-inter text-foreground mb-3 sm:mb-4">
              Contato
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm sm:text-base link-hover-gradient">contato@inovaweb.dev</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm sm:text-base link-hover-gradient">(11) 99999-9999</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm sm:text-base">São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold font-inter text-foreground mb-3 sm:mb-4">
              Redes Sociais
            </h4>
            <div className="flex justify-center md:justify-start space-x-3">
              <a 
                href="#" 
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] hover:scale-110 transition-all duration-300 icon-hover-bounce" 
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-white" />
              </a>
              <a 
                href="https://instagram.com/inovaweb.tech" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:scale-110 transition-all duration-300 icon-hover-bounce" 
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4285F4] hover:bg-[#3367D6] hover:scale-110 transition-all duration-300 icon-hover-bounce" 
                aria-label="E-mail"
              >
                <Mail className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-4 sm:pt-6">
          <p className="text-center text-muted-foreground font-inter text-sm sm:text-base">
            © 2025 InovaWeb - Todos os direitos reservados
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-brand shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50 opacity-90 hover:opacity-100"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-5 w-5 text-white" />
        </button>
      )}
    </footer>
  );
}