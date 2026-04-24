import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Programs from "@/components/Programs";
import SocialProof from "@/components/SocialProof";
import Innovations from "@/components/Innovations";
import Founders from "@/components/Founders";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

const Index = ({ lang = "en" }: { lang?: Lang }) => {
  return (
    <LanguageProvider lang={lang}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Positioning />
          <Programs />
          <SocialProof />
          <Innovations />
          <Founders />
          <CtaFinal />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
