import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import philosophyBg from "@/assets/philosophy-bg.jpg";

const Philosophy = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();

  return (
    <section className="relative py-36 lg:py-48 overflow-hidden">
      <img src={philosophyBg} alt="Tea plantation rows at dawn" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />

      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground leading-tight italic">
          {t.philosophy.quote}
        </blockquote>
        <div className="w-12 h-px bg-accent mx-auto mt-10" />
      </div>
    </section>
  );
};

export default Philosophy;
