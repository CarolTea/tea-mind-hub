import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import aboutTea from "@/assets/about-tea.jpg";

const About = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();

  return (
    <section id="about" className="py-32 lg:py-40">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
            {t.about.title1}
            <br />
            <em>{t.about.title2}</em>
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            {t.about.description}
          </p>
        </div>

        <div className="relative overflow-hidden aspect-[4/5]">
          <img src={aboutTea} alt="Premium tea leaves macro shot" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default About;
