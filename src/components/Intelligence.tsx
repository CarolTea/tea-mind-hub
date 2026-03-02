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

        <p className="font-sans text-base md:text-lg leading-relaxed text-primary-foreground/80 text-center max-w-2xl mx-auto">
          {t.intelligence.intro}
        </p>
      </div>
    </section>
  );
};

export default Intelligence;
