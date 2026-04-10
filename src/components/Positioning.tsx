import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import aboutTea from "@/assets/about-tea.jpg";

const Positioning = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();

  return (
    <section id="about" className="py-32 lg:py-40">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
              {t.positioning.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
              {t.positioning.title}
            </h2>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t.positioning.description}
            </p>
          </div>
          <div className="relative overflow-hidden aspect-[4/5]">
            <img src={aboutTea} alt="Premium tea leaves macro shot" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-16">
          {t.positioning.pillars.map((pillar, i) => (
            <div key={i} className="flex gap-4">
              <span className="font-serif text-lg font-medium text-accent flex-shrink-0 mt-1">{pillar.icon}</span>
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">{pillar.title}</h3>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-serif text-xl md:text-2xl text-foreground font-medium text-center italic">
          {t.positioning.closing}
        </p>
      </div>
    </section>
  );
};

export default Positioning;
