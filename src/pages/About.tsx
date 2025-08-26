import { InstitutionalHeader } from "@/components/InstitutionalHeader";
import { AboutSection } from "@/components/AboutSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { ContactSection } from "@/components/ContactSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <InstitutionalHeader />
      <AboutSection />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
};

export default About;