import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WelcomePage = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Bem-vindo(a) , Tea Mind Business Hub";

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(robots);
    };
  }, []);

  return (
    <LanguageProvider lang="pt">
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 pt-32 pb-24">
          <section className="container mx-auto px-6 max-w-3xl">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent text-center mb-8">
              01 , Boas-vindas
            </p>

            <h1 className="font-serif text-4xl md:text-6xl text-primary text-center leading-tight mb-8">
              Bem-vindo(a) ao
              <span className="block italic text-accent mt-2">Tea Mind Business Hub</span>
            </h1>

            <p className="font-serif italic text-xl md:text-2xl text-primary/80 text-center leading-relaxed mb-16 max-w-2xl mx-auto">
              Você acaba de dar o primeiro passo dentro do hub que está construindo o futuro do mercado do chá no Brasil.
            </p>

            <div className="h-px w-24 bg-accent/40 mx-auto mb-16" />

            <div className="space-y-10 font-sans text-base md:text-lg text-primary/85 leading-relaxed">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3">02 , Próximo passo</p>
                <p>
                  Você já deve ter recebido um e-mail da <strong className="text-primary">Hotmart</strong> com o seu acesso. Por favor, verifique também a sua caixa de <strong className="text-primary">spam</strong>, lixo eletrônico ou promoções, pois o e-mail pode chegar por lá.
                </p>
              </div>

              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-3">03 , Suporte</p>
                <p>
                  Caso encontre qualquer dificuldade no acesso, fale diretamente com a nossa equipe de suporte pelo WhatsApp. Estamos prontos para te ajudar.
                </p>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center gap-6">
              <a
                href="https://wa.me/5521981126981"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-[0.2em] uppercase hover:bg-accent hover:text-primary transition-colors duration-300"
              >
                Falar com o suporte no WhatsApp →
              </a>
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-primary/50">
                +55 21 98112,6981
              </p>
            </div>

            <p className="font-serif italic text-lg text-primary/70 text-center mt-20 leading-relaxed">
              Que essa jornada eleve a sua atuação, a sua visão e o seu lugar dentro do mercado do chá.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default WelcomePage;