import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const programsRoutes = { en: "/programs", es: "/es/programas", pt: "/pt/programas" } as const;

const Programs = () => {
  const { ref, isVisible } = useFadeIn();
  const { lang, t } = useLang();
  const navigate = useNavigate();

  const goToProgram = (programId: string) => {
    navigate(`${programsRoutes[lang]}#${programId}`);
  };

  return (
    <section id="programs" className="py-32 lg:py-40 bg-primary text-primary-foreground">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4 text-center">
          {t.programs.eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-center leading-tight max-w-3xl mx-auto">
          {t.programs.heading}
        </h2>
        <p className="font-sans text-base md:text-lg text-primary-foreground/60 leading-relaxed text-center max-w-2xl mx-auto mb-8">
          {t.programs.subtitle}
        </p>
        <div className="text-center mb-20">
          <a
            href="https://teamindquest.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90"
          >
            {t.programs.diagnosisCta}
          </a>
        </div>

        <div className="space-y-20 mb-12">
          {t.programs.categories.map((category) => (
            <div key={category.id}>
              {/* Category header */}
              <div className="text-center max-w-2xl mx-auto mb-10">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-3">
                  {category.eyebrow}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                  {category.title}
                </h3>
                <div className="w-12 h-px bg-accent mx-auto mb-4" />
                <p className="font-sans text-sm md:text-base text-primary-foreground/55 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((program) => {
                  const isComingSoon = "comingSoon" in program && program.comingSoon;
                  return (
                    <div
                      key={program.id}
                      className={`border p-8 flex flex-col transition-all duration-500 ${
                        isComingSoon
                          ? "border-primary-foreground/10 opacity-70"
                          : "border-primary-foreground/10 hover:border-primary-foreground/30"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h4 className="font-serif text-xl font-medium">{program.title}</h4>
                          {"subtitle" in program && program.subtitle && (
                            <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mt-2">
                              {program.subtitle}
                            </p>
                          )}
                        </div>
                        {isComingSoon && (
                          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-accent-foreground bg-accent px-2 py-1 whitespace-nowrap shrink-0">
                            {t.programs.comingSoonLabel}
                          </span>
                        )}
                      </div>
                      <div className="w-10 h-px bg-accent mb-6" />
                      <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed mb-8 flex-1">
                        {program.description}
                      </p>
                      {!isComingSoon && (
                        <button
                          onClick={() => goToProgram(program.id)}
                          className="font-sans text-sm tracking-wider text-accent hover:text-accent/80 transition-colors duration-300 text-left"
                        >
                          {t.programs.cardCta}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="font-sans text-sm text-primary-foreground/40 text-center italic">
          {t.programs.footerNote}{" "}
          <button onClick={() => navigate(programsRoutes[lang])} className="text-accent hover:text-accent/80 transition-colors not-italic">
            {t.programs.footerCta}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Programs;
