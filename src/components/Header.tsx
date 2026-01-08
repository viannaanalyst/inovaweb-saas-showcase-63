import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  // Sempre usar o logo escuro para o modo único escuro
  const logoSrc = "/lovable-uploads/a024d666-37da-4e60-a791-1b9c1d6a244f.png";

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-background/95 backdrop-blur-md border-b border-transparent shadow-sm">
      {/* Gradiente da borda - funciona em ambos os modos */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#6A11CB] to-[#2575FC] opacity-90"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center w-full">
          {/* Logo no canto esquerdo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src={logoSrc}
              alt="InovaWeb Agência" 
              className="h-10 sm:h-12 w-auto transition-opacity duration-300"
            />
          </div>
          
          {/* Navigation - Desktop perfeitamente centralizada */}
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-foreground hover:text-foreground font-inter font-medium relative group px-4 py-2 block transition-colors duration-200"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <a
              href="#sobre"
              className="text-foreground hover:text-foreground font-inter font-medium relative group px-4 py-2 block transition-colors duration-200"
            >
              Sobre a empresa
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            
            <a
              href="#contato"
              className="text-foreground hover:text-foreground font-inter font-medium relative group px-4 py-2 block transition-colors duration-200"
            >
              Contato
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center">
            <MobileMenu className="lg:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
