import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { JourneySection } from "@/components/JourneySection";
import { AIAgentsSection } from "@/components/AIAgentsSection";
import { DiagnosticSection } from "@/components/DiagnosticSection";
import { AboutSection } from "@/components/AboutSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { VisualProofSection } from "@/components/VisualProofSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF7] font-sans selection:bg-brand-purple/20 selection:text-brand-purple">
      <Header />
      <HeroBanner />
      <JourneySection />
      <AIAgentsSection />
      <DiagnosticSection />
      <AboutSection />
      <HowItWorksSection />
      <VisualProofSection />
      <TestimonialsSection />
      <PartnersSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
