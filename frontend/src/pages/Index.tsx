import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedLocations from "@/components/FeaturedLocations";
import HowItWorks from "@/components/HowItWorks";
import ReferralBanner from "@/components/ReferralBanner";
import DownloadApp from "@/components/DownloadApp";


const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] ">
      <HeroSection />
      <ReferralBanner />
      <HowItWorks />
      <FeaturedLocations />
      <DownloadApp />
    </div>
  );
};

export default Index;
