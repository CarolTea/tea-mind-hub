import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import { neuralTranslations } from "@/lib/neural-translations";
import { useFadeIn } from "@/hooks/useFadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Fade = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

/* ─── Hero ─── */
const NeuralHero = () => {
  const { lang } = useLang();
  const t = neuralTranslations[lang].hero;
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary to-secondary/95" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <Fade>
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-8 font-sans">Tea Mind Business Hub</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            {t.title}
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-12 font-sans">
            {t.subtitle}
          </p>
          <p className="text-base md:text-lg text-secondary-foreground/60 max-w-2xl mx-auto leading-relaxed font-sans">
            {t.intro}
          </p>
        </Fade>
      </div>
    </section>
  );
};

/* ─── Intelligence Layers (3 AI Cards) ─── */
const IntelligenceLayers = () => {
  const { lang } = useLang();
  const t = neuralTranslations[lang].layers;
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-16">{t.heading}</h2>
        </Fade>
        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((item) => (
            <Fade key={item.number}>
              <div className="group border border-border/60 p-8 md:p-10 hover:border-accent/50 transition-colors duration-500 h-full flex flex-col">
                <span className="font-serif text-5xl text-accent/30 mb-6">{item.number}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">{item.name}</h3>
                <p className="text-sm tracking-wider uppercase text-accent mb-6 font-sans">{item.subtitle}</p>
                <p className="text-base text-foreground/75 leading-relaxed font-sans mb-8 flex-grow">{item.description}</p>
                <div className="border-t border-border/40 pt-6">
                  <p className="text-xs tracking-wider uppercase text-foreground/50 mb-2 font-sans">
                    {lang === "en" ? "Why you need this" : lang === "es" ? "Por qué lo necesita" : "Por que você precisa disso"}
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed font-sans">{item.why}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Pricing ─── */
const PricingSection = () => {
  const { lang } = useLang();
  const t = neuralTranslations[lang].pricing;
  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">{t.heading}</h2>
        </Fade>

        {/* Individual Plan */}
        <Fade>
          <div className="border border-primary-foreground/20 p-8 md:p-10 mb-8">
            <h3 className="font-serif text-2xl mb-6">{t.individual.title}</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs tracking-wider uppercase text-primary-foreground/50 mb-2 font-sans">
                  {lang === "en" ? "Monthly" : "Mensal"}
                </p>
                <p className="font-serif text-3xl text-primary-foreground">{t.individual.monthly}</p>
              </div>
              <div>
                <p className="text-xs tracking-wider uppercase text-accent mb-2 font-sans">
                  {lang === "en" ? "Annual" : "Anual"} — {t.individual.annualLabel}
                </p>
                <p className="font-serif text-3xl text-accent">{t.individual.annual}</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 font-sans">{t.individual.benefits}</p>
          </div>
        </Fade>

        {/* Full Access Combo */}
        <Fade>
          <div className="border-2 border-accent p-8 md:p-10 relative">
            <div className="absolute -top-4 left-8 bg-accent px-4 py-1">
              <span className="text-xs tracking-wider uppercase font-sans text-secondary font-medium">💎 Full Access</span>
            </div>
            <h3 className="font-serif text-2xl mb-3 text-accent">{t.combo.title}</h3>
            <p className="text-base text-primary-foreground/70 font-sans mb-8">{t.combo.subtitle}</p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs tracking-wider uppercase text-primary-foreground/50 mb-2 font-sans">
                  {lang === "en" ? "Monthly" : "Mensal"}
                </p>
                <p className="font-serif text-3xl text-primary-foreground">{t.combo.monthly}</p>
              </div>
              <div>
                <p className="text-xs tracking-wider uppercase text-accent mb-2 font-sans">
                  {lang === "en" ? "Annual" : "Anual"}
                </p>
                <p className="font-serif text-3xl text-accent">{t.combo.annual}</p>
              </div>
            </div>
            <p className="text-sm text-accent/80 font-sans italic">{t.combo.annualNote}</p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const CtaSection = () => {
  const { lang } = useLang();
  const t = neuralTranslations[lang].cta;
  return (
    <section className="bg-secondary text-secondary-foreground py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Fade>
          <div className="w-16 h-px bg-accent mx-auto mb-10" />
          <p className="font-serif text-2xl md:text-3xl text-secondary-foreground/90 mb-12 leading-relaxed">
            {t.statement}
          </p>
          <a
            href="mailto:contato@teamindbusinesshub.com"
            className="inline-block border-2 border-accent text-accent px-10 py-4 text-sm tracking-[0.2em] uppercase font-sans hover:bg-accent hover:text-secondary transition-colors duration-300"
          >
            {t.button}
          </a>
          <div className="w-16 h-px bg-accent mx-auto mt-10" />
        </Fade>
      </div>
    </section>
  );
};

/* ─── Page ─── */
const NeuralSystemContent = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <NeuralHero />
      <IntelligenceLayers />
      <PricingSection />
      <CtaSection />
    </main>
    <Footer />
  </div>
);

const NeuralSystem = ({ lang = "en" }: { lang?: Lang }) => (
  <LanguageProvider lang={lang}>
    <NeuralSystemContent />
  </LanguageProvider>
);

export default NeuralSystem;
