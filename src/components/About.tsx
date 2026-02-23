import { useFadeIn } from "@/hooks/useFadeIn";

const AbstractComposition = () => (
  <svg
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-md mx-auto"
  >
    {/* Structured botanical / geometric lines */}
    <path d="M250 50 L250 450" stroke="hsl(150 22% 14% / 0.08)" strokeWidth="0.5" />
    <path d="M250 200 Q 320 180, 380 220 Q 420 260, 370 320 Q 320 360, 250 340" stroke="hsl(150 22% 14% / 0.15)" strokeWidth="1" fill="none" />
    <path d="M250 200 Q 180 180, 120 220 Q 80 260, 130 320 Q 180 360, 250 340" stroke="hsl(150 22% 14% / 0.15)" strokeWidth="1" fill="none" />
    <path d="M250 150 Q 340 140, 400 190" stroke="hsl(150 22% 14% / 0.1)" strokeWidth="0.8" fill="none" />
    <path d="M250 150 Q 160 140, 100 190" stroke="hsl(150 22% 14% / 0.1)" strokeWidth="0.8" fill="none" />
    {/* Gold accent */}
    <path d="M230 270 Q 250 230, 270 270" stroke="hsl(40 45% 57% / 0.4)" strokeWidth="1.2" fill="none" />
    <circle cx="250" cy="200" r="3" fill="hsl(150 22% 14% / 0.12)" />
    <circle cx="250" cy="340" r="3" fill="hsl(40 45% 57% / 0.2)" />
    {/* Network lines */}
    <line x1="150" y1="120" x2="350" y2="120" stroke="hsl(150 22% 14% / 0.05)" strokeWidth="0.5" />
    <line x1="130" y1="380" x2="370" y2="380" stroke="hsl(150 22% 14% / 0.05)" strokeWidth="0.5" />
  </svg>
);

const About = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="about" className="py-32 lg:py-40">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
            The Intelligence Behind
            <br />
            <em>the Industry</em>
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Tea Mind Business Hub structures professionals, integrates sensory
            expertise with market application, and builds positioning power
            within the global tea ecosystem. We operate at the intersection of
            strategic intelligence and industry authority.
          </p>
        </div>

        <div className="flex justify-center">
          <AbstractComposition />
        </div>
      </div>
    </section>
  );
};

export default About;
