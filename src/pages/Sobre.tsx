import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Sobre a InovaWeb
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A InovaWeb é especializada no desenvolvimento de soluções SaaS modernas, 
                escaláveis e fáceis de usar. Nosso compromisso é transformar ideias em 
                produtos digitais que simplifiquem processos e impulsionem negócios.
              </p>
              <p>
                Com uma equipe focada em inovação e usabilidade, desenvolvemos sistemas 
                com design clean e alta performance, pensados para entregar a melhor 
                experiência aos usuários.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;