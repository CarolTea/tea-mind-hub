import { useNavigate } from "react-router-dom";
import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";

const neuroRoutes = { en: "/neurogastronomy", es: "/es/neurogastronomia", pt: "/pt/neurogastronomia" } as const;

const programImages = [
  { image: program1, alt: "Professional tea cupping and evaluation setup" },
  { image: program2, alt: "Sensory analysis and neurogastronomy exploration" },
];

const Programs = () => {
  const { ref, isVisible } = useFadeIn();
  const { lang, t } = useLang();
  const navigate = useNavigate();

  return (
    <section id="programs" className="py-32 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-20 text-center leading-tight">
          {t.programs.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {t.programs.items.map((program, i) => {
            const isNeuro = i === 1;
            return (
              <div key={program.title} className="group relative border border-border/60 transition-all duration-500 hover:border-foreground/20 overflow-hidden flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={programImages[i].image} alt={programImages[i].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">{program.title}</h3>
                  <div className="w-10 h-px bg-accent mb-6" />
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed mb-8">{program.description}</p>
                  {isNeuro && (
                    <div className="mt-auto">
                      <button
                        onClick={() => navigate(neuroRoutes[lang])}
                        className="font-sans text-sm tracking-wider uppercase border border-foreground/30 px-6 py-3 text-foreground/80 hover:text-foreground hover:border-foreground/60 transition-all duration-300"
                      >
                        {t.programs.cta}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
