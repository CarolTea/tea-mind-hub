import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";

const Intelligence = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();

  return (
    <section id="intelligence" className="py-32 lg:py-40 bg-primary text-primary-foreground">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-10 leading-tight text-center">
          {t.intelligence.title}
        </h2>

        <p className="font-sans text-base md:text-lg leading-relaxed mb-6 text-primary-foreground/80 text-center max-w-2xl mx-auto">
          {t.intelligence.intro}
        </p>

        <div className="space-y-1 mb-8 text-center">
          <p className="font-sans text-base md:text-lg text-primary-foreground/80 leading-relaxed">
            {t.intelligence.line1}
          </p>
          <p className="font-sans text-base md:text-lg text-primary-foreground/80 leading-relaxed">
            {t.intelligence.line2}
          </p>
        </div>

        <p className="font-sans text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-4 text-center">
          {t.intelligence.supports}
        </p>

        <ul className="list-disc list-inside font-sans text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-lg mx-auto mb-8 space-y-1">
          {t.intelligence.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="text-center space-y-2">
          <p className="font-sans text-base md:text-lg text-primary-foreground/80 leading-relaxed">
            {t.intelligence.closing1}
          </p>
          <p className="font-sans text-base md:text-lg text-primary-foreground font-medium">
            {t.intelligence.closing2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intelligence;
