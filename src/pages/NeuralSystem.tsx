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
          <span className="inline-block border border-accent text-accent text-[10px] tracking-[0.3em] uppercase font-sans px-5 py-2 mb-8">
            {t.badge}
          </span>
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

/* ─── Agents Section (Stacked Cards) ─── */
const AgentsSection = () => {
  const { lang } = useLang();
  const t = neuralTranslations[lang].layers;
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">{t.heading}</h2>
          <p className="text-base md:text-lg text-foreground/60 text-center max-w-3xl mx-auto mb-20 font-sans leading-relaxed">
            {t.subtitle}
          </p>
        </Fade>

        <div className="space-y-16 md:space-y-24">
          {t.items.map((agent) => (
            <Fade key={agent.number}>
              <article className="border border-border/60 p-8 md:p-12">
                {/* Header */}
                <div className="mb-8">
                  <span className="font-serif text-5xl text-accent/30 block mb-4">{agent.number}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{agent.name}</h3>
                  <p className="text-sm tracking-wider uppercase text-accent font-sans italic">{agent.tag}</p>
                </div>

                <div className="w-12 h-px bg-accent/40 mb-8" />

                {/* Headline */}
                <p className="font-serif text-xl md:text-2xl text-foreground/90 mb-6 leading-snug">{agent.headline}</p>

                {/* Body */}
                {agent.body.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-base text-foreground/70 leading-relaxed font-sans mb-4">{paragraph}</p>
                ))}

                {/* Capabilities */}
                <p className="text-sm tracking-wider uppercase text-foreground/50 font-sans mt-8 mb-4">{agent.capabilitiesIntro}</p>
                <ul className="space-y-3 mb-8">
                  {agent.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-foreground/75 font-sans leading-relaxed">
                      <span className="text-accent mt-1.5 text-xs">◆</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                {/* Closing */}
                <div className="border-t border-border/40 pt-6">
                  <p className="text-base text-foreground/80 font-sans italic">{agent.closing}</p>
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Pricing (3 Tiers) ─── */
const PricingSection = () => {
  const { lang } = useLang();
  const t = neuralTranslations[lang].pricing;

  const tiers = [t.monthly, t.annual, t.combo];

  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">{t.heading}</h2>
        </Fade>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => {
            const isCombo = i === 2;
            return (
              <Fade key={i}>
                <div
                  className={`relative p-6 md:p-8 flex flex-col h-full ${
                    isCombo
                      ? "border-2 border-accent"
                      : "border border-primary-foreground/20"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-6 bg-accent px-4 py-1">
                      <span className="text-[10px] tracking-wider uppercase font-sans text-secondary font-medium">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <h3 className={`font-serif text-lg md:text-xl mb-2 ${tier.badge ? "mt-2" : ""} ${isCombo ? "text-accent" : ""}`}>
                    {tier.title}
                  </h3>

                  <p className="text-xs tracking-wider uppercase text-primary-foreground/50 font-sans mb-6">
                    {tier.access}
                  </p>

                  <div className="mb-2">
                    <p className={`font-serif text-2xl md:text-3xl ${isCombo ? "text-accent" : ""}`}>{tier.price}</p>
                  </div>

                  {tier.installment && (
                    <p className="text-sm text-primary-foreground/50 font-sans mb-6">{tier.installment}</p>
                  )}
                  {!tier.installment && <div className="mb-6" />}

                  <p className="text-sm text-primary-foreground/60 font-sans leading-relaxed mb-8 flex-grow">
                    {tier.description}
                  </p>

                  <a
                    href="mailto:contato@teamindbusinesshub.com"
                    className={`block text-center px-4 py-3 text-sm tracking-[0.15em] uppercase font-sans transition-colors duration-300 ${
                      isCombo
                        ? "bg-accent text-secondary hover:bg-accent/90 font-medium"
                        : "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </Fade>
            );
          })}
        </div>
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
      <AgentsSection />
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
