import Header from "./components/Header";
import HeroSection from "./components/Hero";
import EthosSection from "./components/About";
import ImpactStatsSection from "./components/Stats";
import VisionCTASection from "./components/Vision";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <EthosSection />
      <ImpactStatsSection />
      <VisionCTASection />
      <Footer />
    </div>
  );
}
