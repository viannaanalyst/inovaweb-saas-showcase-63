import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { JourneySection } from "@/components/JourneySection";
import { AIAgentsSection } from "@/components/AIAgentsSection";
import { DiagnosticSection } from "@/components/DiagnosticSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FBFAF7] font-sans selection:bg-brand-purple/20 selection:text-brand-purple">
      <Header />
      <HeroBanner />
      <JourneySection />
      <AIAgentsSection />
      <DiagnosticSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
