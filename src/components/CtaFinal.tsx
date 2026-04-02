import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const CtaFinal = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();

  return (
    <section className="relative py-36 lg:py-48 overflow-hidden">
      <img src={heroBg} alt="Tea plantation" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/85" />

      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
          {t.ctaFinal.eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-6 leading-tight">
          {t.ctaFinal.title}
        </h2>
        <p className="font-sans text-base md:text-lg text-primary-foreground/60 leading-relaxed mb-12 max-w-2xl mx-auto">
          {t.ctaFinal.subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#" className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90">
            {t.ctaFinal.cta1}
          </a>
          <a href="#programs" className="inline-flex items-center px-8 py-3.5 border border-primary-foreground/40 text-primary-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10">
            {t.ctaFinal.cta2}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
