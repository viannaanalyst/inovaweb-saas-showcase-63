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
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-desktop mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold font-sans text-brand-purple mb-4">
              InovaWeb
            </h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
              Ajudamos clínicas a organizarem seu atendimento e venderem mais com automação humanizada.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://wa.me/5522981055534" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300" 
                aria-label="WhatsApp"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="h-4 w-4"
                />
              </a>
              <a 
                href="https://instagram.com/inovaweb.tech" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-[#C13584] hover:bg-[#C13584] hover:text-white transition-all duration-300" 
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
             <h4 className="text-sm font-bold font-sans text-foreground uppercase tracking-wider mb-4">
              Produto
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#como-funciona" className="hover:text-brand-purple transition-colors">Como funciona</a></li>
              <li><a href="#beneficios" className="hover:text-brand-purple transition-colors">Benefícios</a></li>
              <li><a href="#crm" className="hover:text-brand-purple transition-colors">CRM Integrado</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-purple transition-colors">Clientes</a></li>
            </ul>
          </div>

           {/* Legal */}
           <div>
             <h4 className="text-sm font-bold font-sans text-foreground uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Privacidade</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-bold font-sans text-foreground uppercase tracking-wider mb-4">
              Fale Conosco
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 mt-1 text-brand-purple" />
                <span className="text-sm">contato@inovawebtech.com.br</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 mt-1 text-brand-purple" />
                <span className="text-sm">(22) 98105-5534</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 text-brand-purple" />
                <span className="text-sm">Rio de Janeiro - RJ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-muted-foreground font-sans text-xs">
            © 2025 InovaWeb Tecnologia. Todos os direitos reservados.
          </p>
          <p className="text-center text-muted-foreground font-sans text-xs flex items-center gap-1">
            Feito com <span className="text-red-500">♥</span> para clínicas
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
