
interface SaasCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

export function SaasCard({ name, description, imageUrl }: SaasCardProps) {
  return (
    <div className="group bg-card rounded-2xl shadow-card overflow-hidden fade-up border border-border relative transition-all duration-500 ease-out hover:shadow-2xl hover:border-transparent hover:scale-[1.02]">
      {/* Partículas sutis no fundo */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
        <div className="absolute top-2 left-2 w-1 h-1 bg-[#6A11CB] rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-4 w-0.5 h-0.5 bg-[#2574FC] rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-4 left-6 w-0.5 h-0.5 bg-[#6A11CB] rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-8 right-8 w-1 h-1 bg-[#2574FC] rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Brilho gradiente nas bordas no hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#6A11CB]/20 via-transparent to-[#2574FC]/20 p-[1px]">
        <div className="w-full h-full bg-card rounded-2xl"></div>
      </div>

      {/* Imagem do SaaS */}
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={`Preview de ${name}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Overlay sutil no hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 relative z-10 transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
        <h3 className="text-xl font-semibold font-inter text-foreground mb-3 transition-colors duration-300 group-hover:text-[#6A11CB]">
          {name}
        </h3>
        <p className="text-card-foreground font-inter leading-relaxed mb-6 transition-colors duration-300 group-hover:text-muted-foreground/90">
          {description}
        </p>
      </div>
    </div>
  );
}