import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    if (path.startsWith("http")) {
      window.location.href = path;
    } else {
      navigate(path);
    }
    setIsOpen(false); // Fechar menu após navegar
  };

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Como Funciona", path: "/#como-funciona" },
    { label: "Sobre", path: "/#sobre" },
    { label: "Clientes", path: "/#depoimentos" },
    { label: "Contato", path: "/#contato" },
    { label: "Login", path: "https://crm.inovawebtech.com.br/users/sign_in" },
    { label: "Falar com Especialista", path: "/#contato" },
  ];

  return (
    <div className={className}>
      {/* Botão hambúrguer */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-10 text-gray-700 hover:bg-brand-purple/5 hover:text-brand-purple transition-colors"
        aria-label="Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay e Menu */}
      {isOpen && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu deslizante */}
          <div className="fixed top-[73px] right-0 w-64 h-[calc(100vh-73px)] bg-white border-l border-gray-100 z-50 shadow-2xl">
            <nav className="flex flex-col p-4 space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full justify-start text-left font-sans font-medium py-3 px-4 rounded-xl transition-all ${
                    item.label === "Falar com Especialista" 
                      ? "bg-brand-purple text-white hover:bg-brand-purple/90 hover:text-white shadow-md shadow-brand-purple/20 mt-4" 
                      : "text-gray-600 hover:bg-brand-purple/5 hover:text-brand-purple"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
