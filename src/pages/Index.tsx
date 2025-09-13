import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { VirtualTourSection } from "@/components/VirtualTourSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <VirtualTourSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;