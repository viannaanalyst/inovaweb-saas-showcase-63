import { 
  Code, 
  Server, 
  Database, 
  Palette, 
  Zap,
  Bot
} from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "React.js",
    description: "Framework para interfaces rápidas, dinâmicas e responsivas.",
    icon: Code,
    color: "#61DAFB"
  },
  {
    name: "Node.js", 
    description: "Ambiente rápido e escalável para back-end eficiente.",
    icon: Server,
    color: "#339933"
  },
  {
    name: "Supabase",
    description: "Banco de dados e autenticação simplificados para SaaS.",
    icon: Database,
    color: "#3ECF8E"
  },
  {
    name: "PostgreSQL",
    description: "Banco de dados robusto e seguro, ideal para grandes volumes de dados.",
    icon: Database,
    color: "#336791"
  },
  {
    name: "Tailwind CSS",
    description: "Framework de CSS para design moderno e responsivo.",
    icon: Palette,
    color: "#06B6D4"
  },
  {
    name: "Python",
    description: "Linguagem versátil usada para automações e análise de dados.",
    icon: Bot,
    color: "#3776AB"
  }
];

export function TechnologiesSection() {
  return (
    <motion.section 
      id="tecnologias" 
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background dark:bg-[#121212]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold font-inter text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tecnologias utilizadas
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: index * 0.1 
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="group bg-card dark:bg-[#1E1E1E] rounded-xl p-4 sm:p-6 shadow-card border border-border transition-all duration-300 hover:shadow-card-hover hover:scale-105 hover:border-purple-500/50 hover:shadow-purple-500/20 cursor-pointer purple-glow-hover"
                
              >
                <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                  {/* Icon */}
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: `${tech.color}20`,
                      border: `1px solid ${tech.color}40`
                    }}
                  >
                    <IconComponent 
                      className="w-5 h-5 sm:w-6 sm:h-6" 
                      style={{ color: tech.color, fill: 'currentColor' }}
                    />
                  </div>
                  
                  {/* Technology Name */}
                  <h3 className="text-lg sm:text-xl font-bold font-inter text-card-foreground group-hover:text-card-foreground/90 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground font-inter leading-relaxed text-sm sm:text-base">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}