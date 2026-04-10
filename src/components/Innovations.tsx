import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const neuralRoutes = { en: "/neural-system", es: "/es/sistema-neural", pt: "/pt/sistema-neural" } as const;

const Innovations = () => {
  const { ref, isVisible } = useFadeIn();
  const { lang, t } = useLang();
  const navigate = useNavigate();

  return (
    <section id="innovations" className="py-32 lg:py-40 bg-primary text-primary-foreground">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4 text-center">
          {t.innovations.eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-center leading-tight max-w-3xl mx-auto">
          {t.innovations.title}
        </h2>
        <p className="font-sans text-base md:text-lg text-primary-foreground/60 leading-relaxed text-center max-w-2xl mx-auto mb-16">
          {t.innovations.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {t.innovations.cards.map((card, i) => (
            <div key={i} className="border border-primary-foreground/10 p-10 flex flex-col transition-all duration-500 hover:border-primary-foreground/30">
              <span className="font-serif text-2xl font-medium text-accent mb-4">{card.icon}</span>
              <h3 className="font-serif text-2xl font-medium mb-4">{card.title}</h3>
              <div className="w-10 h-px bg-accent mb-6" />
              <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed mb-8 flex-1">
                {card.description}
              </p>
              <button
                onClick={() => i === 0 ? navigate(neuralRoutes[lang]) : undefined}
                className="font-sans text-sm tracking-wider uppercase border border-accent text-accent px-6 py-3 hover:bg-accent hover:text-accent-foreground transition-all duration-300 self-start"
              >
                {card.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="font-serif text-xl md:text-2xl font-medium text-center italic mb-10">
          {t.innovations.closing}
        </p>
        <div className="text-center">
          <a href="#" className="inline-flex items-center px-8 py-3.5 border border-primary-foreground/40 text-primary-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10">
            {t.innovations.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Innovations;
