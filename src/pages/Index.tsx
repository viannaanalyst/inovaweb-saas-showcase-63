import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { PainPointSection } from "@/components/PainPointSection";
import { SaasGrid } from "@/components/SaasGrid";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <HeroBanner />
      <PainPointSection />
      <SaasGrid />
      <AboutSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
