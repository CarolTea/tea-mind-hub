import { useFadeIn } from "@/hooks/useFadeIn";

const Society = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="society" className="py-32 lg:py-40 bg-secondary">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-12 text-center fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-secondary-foreground mb-4 leading-tight">
          The Inner Circle
        </h2>

        {/* Gold accent line */}
        <div className="w-16 h-px bg-accent mx-auto mb-10" />

        <p className="font-sans text-base md:text-lg text-secondary-foreground/70 leading-relaxed max-w-xl mx-auto mb-12">
          The Tea Mind Society is a selective professional network reserved for
          those who shape markets, define standards, and influence the future of
          the global tea industry.
        </p>

        <a
          href="#"
          className="inline-flex items-center px-8 py-3.5 border border-accent text-accent text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:bg-accent hover:text-secondary"
        >
          Discover the Society
        </a>
      </div>
    </section>
  );
};

export default Society;
