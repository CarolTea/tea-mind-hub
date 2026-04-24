import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import carolImg from "@/assets/carol-tavares.png";
import carlaImg from "@/assets/carla-vicente.png";

const founderPhotos: Record<string, string> = {
  CT: carolImg,
  CV: carlaImg,
};

const Founders = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();

  return (
    <section id="founders" className="py-32 lg:py-40 bg-background">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4 text-center">
          {t.founders.eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 text-center leading-tight max-w-3xl mx-auto">
          {t.founders.title}
        </h2>
        <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-16">
          {t.founders.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-12">
          {t.founders.profiles.map((profile, i) => (
            <div key={i} className="border border-border/60 overflow-hidden transition-all duration-500 hover:border-foreground/20">
              <div className="aspect-[4/5] bg-muted overflow-hidden">
                {founderPhotos[profile.initials] ? (
                  <img
                    src={founderPhotos[profile.initials]}
                    alt={profile.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-serif text-5xl text-muted-foreground/30">{profile.initials}</span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">{profile.name}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{profile.titles}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center px-8 py-3.5 border border-foreground/30 text-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:border-foreground/60">
            {t.founders.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Founders;
