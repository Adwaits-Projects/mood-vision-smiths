import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { WhyItStandsOut } from "@/components/WhyItStandsOut";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Features />
      <WhyItStandsOut />
      <Footer />
    </main>
  );
};

export default Index;
