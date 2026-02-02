import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path.startsWith("http")) {
      window.location.href = path;
    } else if (path.includes("#")) {
      const [route, hash] = path.split("#");
      if (route === "/" || route === "") {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          // Se não estiver na home, navega para a home com o hash
          navigate(path);
        }
      } else {
        navigate(path);
      }
    } else {
      navigate(path);
    }
    setIsOpen(false); // Fechar menu após navegar
  };

  const navigationItems = [
    { label: "Início", path: "/" },
    { label: "Solução", path: "/#solucao" },
    { label: "Para clínicas", path: "/#clinicas" },
    { label: "Como funciona", path: "/#como-funciona" },
    { label: "Contato", path: "/#contato" },
  ];

  const actionButtons = [
    { label: "Solicitar demo", path: "/#contato", variant: "primary" },
    { label: "WhatsApp", path: "https://wa.me/5511999999999", variant: "whatsapp" },
  ];

  return (
    <div className={className}>
      {/* Botão hambúrguer */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-10 text-gray-900 hover:text-brand-purple transition-all duration-300 active:scale-90 relative z-[60] p-0 flex items-center justify-center"
        aria-label="Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay e Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay para fechar ao clicar fora */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu deslizante de cima para baixo */}
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 bg-white z-50 shadow-2xl p-6 pt-24 flex flex-col rounded-b-[32px] border-b border-black/5"
            >
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <Button
                    key={item.path}
                    variant="ghost"
                    onClick={() => handleNavigation(item.path)}
                    className="w-full justify-start text-left font-sans font-medium py-4 px-4 rounded-xl transition-all text-gray-600 hover:bg-brand-purple/5 hover:text-brand-purple"
                  >
                    {item.label}
                  </Button>
                ))}

                {/* Botões de Ação Inferiores */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {actionButtons.map((button) => (
                    <Button
                      key={button.label}
                      onClick={() => handleNavigation(button.path)}
                      className={`w-full font-bold py-6 rounded-xl transition-all shadow-md active:scale-95 ${
                        button.variant === "primary"
                          ? "bg-brand-purple text-white hover:bg-brand-purple/90 shadow-brand-purple/20"
                          : "bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-[#25D366]/20"
                      }`}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
