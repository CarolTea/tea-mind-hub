import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import societyBg from "@/assets/society-bg.jpg";

const Society = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();

  return (
    <section id="society" className="relative py-32 lg:py-40 overflow-hidden">
      <img src={societyBg} alt="Atmospheric tea ceremony" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-secondary/90" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4 text-center">
          {t.society.eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-secondary-foreground mb-6 text-center leading-tight max-w-3xl mx-auto">
          {t.society.title}
        </h2>
        <p className="font-sans text-base md:text-lg text-secondary-foreground/60 leading-relaxed text-center max-w-2xl mx-auto mb-16">
          {t.society.description}
        </p>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 mb-16">
          {t.society.pillars.map((pillar, i) => (
            <div key={i} className="flex gap-4">
              <span className="font-serif text-lg font-medium text-accent flex-shrink-0 mt-1">{pillar.icon}</span>
              <div>
                <h3 className="font-serif text-lg font-medium text-secondary-foreground mb-2">{pillar.title}</h3>
                <p className="font-sans text-sm text-secondary-foreground/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-sans text-base text-secondary-foreground/60 text-center mb-10 max-w-2xl mx-auto">
          {t.society.closing}
        </p>
        <div className="text-center">
          <a href="#" className="inline-flex items-center px-8 py-3.5 border border-accent text-accent text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:bg-accent hover:text-secondary">
            {t.society.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Society;
