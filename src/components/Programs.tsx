import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";

const Programs = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();

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
        <div className="text-center mb-16">
          <a href="#" className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90">
            {t.programs.diagnosisCta}
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.programs.items.map((program, i) => (
            <div
              key={i}
              className={`border border-primary-foreground/10 p-8 flex flex-col transition-all duration-500 hover:border-primary-foreground/30 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <h3 className="font-serif text-xl font-medium mb-4">{program.title}</h3>
              <div className="w-10 h-px bg-accent mb-6" />
              <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed mb-8 flex-1">
                {program.description}
              </p>
              <button className="font-sans text-sm tracking-wider text-accent hover:text-accent/80 transition-colors duration-300 text-left">
                {t.programs.cardCta}
              </button>
            </div>
          ))}
        </div>

        <p className="font-sans text-sm text-primary-foreground/40 text-center italic">
          {t.programs.footerNote}{" "}
          <a href="#" className="text-accent hover:text-accent/80 transition-colors not-italic">
            {t.programs.footerCta}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Programs;
