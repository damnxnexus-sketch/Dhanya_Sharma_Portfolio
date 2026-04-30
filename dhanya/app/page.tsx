import Header from "./components/Header";
import HeroSection from "./components/Hero";
import EthosSection from "./components/About";
import ImpactStatsSection from "./components/Stats";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <EthosSection />
      <ImpactStatsSection />
    </div>
  );
}
