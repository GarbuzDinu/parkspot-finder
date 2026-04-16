import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedLocations from "@/components/FeaturedLocations";
import HowItWorks from "@/components/HowItWorks";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <FeaturedLocations />
    </div>
  );
};

export default Index;
