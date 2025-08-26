import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TechnologiesSection } from "@/components/TechnologiesSection";

const Tecnologias = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main className="pt-20">
        <TechnologiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Tecnologias;