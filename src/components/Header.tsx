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
          ? "bg-white/20 backdrop-blur-md py-3 shadow-sm" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-desktop mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/logo_light.png"
              alt="InovaWeb" 
              className="h-10 sm:h-12 w-auto object-contain"
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
              Home
            </button>
            <a
              href="/#como-funciona"
              className="text-black hover:text-brand-purple font-bold text-sm transition-colors duration-200"
            >
              Como Funciona
            </a>
            <a
              href="/#sobre"
              className="text-black hover:text-brand-purple font-bold text-sm transition-colors duration-200"
            >
              Sobre
            </a>
            <a
              href="/#depoimentos"
              className="text-black hover:text-brand-purple font-bold text-sm transition-colors duration-200"
            >
              Clientes
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
               variant="ghost" 
               onClick={() => window.location.href = "https://crm.inovawebtech.com.br/users/sign_in"}
               className="text-black hover:text-brand-purple font-bold"
             >
               Login
             </Button>
             <Button 
               onClick={() => {
                 const contactSection = document.getElementById('contato');
                 if (contactSection) {
                   contactSection.scrollIntoView({ behavior: 'smooth' });
                 } else {
                   navigate('/#contato');
                 }
               }}
               className="bg-[#6A11CB] hover:bg-[#5a0eb3] text-white font-bold rounded-full px-8 shadow-none transition-all duration-300 ease-in-out"
             >
               Falar com especialista
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
