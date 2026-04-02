import { useFadeIn } from "@/hooks/useFadeIn";
import { useLang } from "@/contexts/LanguageContext";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const SocialProof = () => {
  const { ref, isVisible } = useFadeIn();
  const { t } = useLang();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const testimonials = Array.from({ length: 6 }, (_, i) => ({
    text: `"Depoimento placeholder ${i + 1} — conteúdo real a ser inserido."`,
    name: `Profissional ${i + 1}`,
    title: "Sommelier de Chá · São Paulo · Atuação em consultoria",
  }));

  return (
    <section id="social-proof" className="py-32 lg:py-40 bg-background">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {t.socialProof.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-medium text-foreground">{stat.number}</p>
              <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4 text-center">
          {t.socialProof.eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-16 text-center leading-tight max-w-3xl mx-auto">
          {t.socialProof.title}
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden mb-8" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_31%] min-w-0">
                <div className="border border-border/60 p-8 h-full flex flex-col">
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                    {item.text}
                  </p>
                  <div>
                    <p className="font-serif text-base font-medium text-foreground">{item.name}</p>
                    <p className="font-sans text-xs text-muted-foreground mt-1">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === selectedIndex ? "bg-accent" : "bg-border"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <p className="font-sans text-base text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          {t.socialProof.transition}
        </p>
        <div className="text-center">
          <a href="#" className="font-sans text-sm tracking-wider uppercase text-accent hover:text-accent/80 transition-colors duration-300">
            {t.socialProof.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
