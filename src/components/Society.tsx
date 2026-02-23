import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import societyBg from "@/assets/society-bg.jpg";

const Society = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();

  return (
    <section id="society" className="relative py-32 lg:py-40 overflow-hidden">
      <img src={societyBg} alt="Atmospheric tea ceremony" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-secondary/85" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-secondary-foreground mb-4 leading-tight">
          {t.society.title}
        </h2>
        <div className="w-16 h-px bg-accent mx-auto mb-10" />
        <p className="font-sans text-base md:text-lg text-secondary-foreground/70 leading-relaxed max-w-xl mx-auto mb-12">
          {t.society.description}
        </p>
        <a href="#" className="inline-flex items-center px-8 py-3.5 border border-accent text-accent text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:bg-accent hover:text-secondary">
          {t.society.cta}
        </a>
      </div>
    </section>
  );
};

export default Society;
