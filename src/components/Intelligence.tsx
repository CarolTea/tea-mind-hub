import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const neuralRoutes = { en: "/neural-system", es: "/es/sistema-neural", pt: "/pt/sistema-neural" } as const;

const Intelligence = () => {
  const { ref, isVisible } = useFadeIn();
  const { lang, t } = useLang();
  const navigate = useNavigate();

  return (
    <section id="intelligence" className="py-32 lg:py-40 bg-primary text-primary-foreground">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-10 leading-tight text-center">
          {t.intelligence.title}
        </h2>

        <p className="font-sans text-base md:text-lg leading-relaxed text-primary-foreground/80 text-center max-w-2xl mx-auto mb-12">
          {t.intelligence.intro}
        </p>

        <div className="text-center">
          <button
            onClick={() => navigate(neuralRoutes[lang])}
            className="inline-block border-2 border-accent text-accent px-10 py-4 text-sm tracking-[0.2em] uppercase font-sans hover:bg-accent hover:text-primary transition-colors duration-300"
          >
            {t.intelligence.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intelligence;
