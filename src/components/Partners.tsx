import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";

const Partners = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();

  return (
    <section id="partners" className="py-32 lg:py-40 bg-background">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4 text-center">
          {t.partners.eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-center leading-tight max-w-3xl mx-auto">
          {t.partners.title}
        </h2>
        <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-16">
          {t.partners.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {t.partners.placeholders.map((partner, i) => (
            <div key={i} className="border border-border/60 overflow-hidden transition-all duration-500 hover:border-foreground/20">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground/40">Foto</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">{partner.name}</h3>
                <p className="font-sans text-xs tracking-wider uppercase text-accent mb-3">{partner.specialty}</p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{partner.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-sans text-base text-muted-foreground text-center mb-10 max-w-2xl mx-auto italic">
          {t.partners.closing}
        </p>
        <div className="text-center">
          <a href="#" className="inline-flex items-center px-8 py-3.5 border border-foreground/30 text-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:border-foreground/60">
            {t.partners.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
