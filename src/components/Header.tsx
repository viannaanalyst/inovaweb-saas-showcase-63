import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled 
          ? "bg-white py-4 shadow-md border-b border-black/5" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-desktop mx-auto px-6 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/logo_light.png"
              alt="InovaWeb" 
              className="h-9 sm:h-12 w-auto object-contain transition-all duration-300"
            />
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center justify-center space-x-8">
            <button
              onClick={() => {
                 navigate('/');
                 setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
              className="text-black hover:text-brand-purple font-bold text-sm transition-colors duration-200"
            >
              Início
            </button>
            <a
              href="/#solucao"
              className="text-black hover:text-brand-purple font-bold text-sm transition-colors duration-200"
            >
              Solução
            </a>
            <a
              href="/#clinicas"
              className="text-black hover:text-brand-purple font-bold text-sm transition-colors duration-200"
            >
              Para clínicas
            </a>
            <a
              href="/#como-funciona"
              className="text-black hover:text-brand-purple font-bold text-sm transition-colors duration-200"
            >
              Como funciona
            </a>
            <a
              href="/#contato"
              className="text-black hover:text-brand-purple font-bold text-sm transition-colors duration-200"
            >
              Contato
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
             <Button 
               onClick={() => {
                 const contactSection = document.getElementById('contato');
                 if (contactSection) {
                   contactSection.scrollIntoView({ behavior: 'smooth' });
                 } else {
                   navigate('/#contato');
                 }
               }}
               className="w-[145px] h-[48px] bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-xl text-[14px] transition-all shadow-lg shadow-brand-purple/20 active:scale-95 p-0"
             >
               Solicitar demo
             </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
