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
    navigate(path);
    setIsOpen(false); // Fechar menu após navegar
  };

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Sobre a empresa", path: "/sobre" },
    { label: "Tecnologias utilizadas", path: "/tecnologias" },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <div className={className}>
      {/* Botão hambúrguer */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 w-10 text-foreground hover:bg-accent"
        aria-label="Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay e Menu */}
      {isOpen && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div
            className="fixed inset-0 bg-black/50 dark:bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu deslizante */}
          <div className="fixed top-[73px] right-0 w-64 h-[calc(100vh-73px)] bg-background border-l border-border z-50 shadow-lg">
            <nav className="flex flex-col p-4 space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => handleNavigation(item.path)}
                  className="w-full justify-start text-left text-foreground hover:bg-accent font-inter font-medium py-3 px-4 rounded-lg"
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