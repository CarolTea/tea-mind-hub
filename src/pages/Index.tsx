import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Society from "@/components/Society";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

const Index = ({ lang = "en" }: { lang?: Lang }) => {
  return (
    <LanguageProvider lang={lang}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Programs />
          <Society />
          <Philosophy />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
