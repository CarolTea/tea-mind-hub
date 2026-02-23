import { useFadeIn } from "@/hooks/useFadeIn";

const programs = [
  {
    title: "Professional Formations",
    description:
      "Structured programs that build foundational expertise in tea market dynamics, sourcing strategy, and professional certification pathways.",
  },
  {
    title: "Specializations",
    description:
      "Advanced focus areas in sensory analysis, supply chain intelligence, market positioning, and category management for the global tea sector.",
  },
  {
    title: "Advanced Programs",
    description:
      "Executive-level programs designed for industry leaders navigating complex market strategies, brand architecture, and international expansion.",
  },
];

const Programs = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="programs" className="py-32 lg:py-40">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-20 text-center leading-tight">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group relative p-8 lg:p-10 border border-border/60 transition-all duration-500 hover:border-foreground/20 overflow-hidden"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-500" />

              <div className="relative z-10">
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
                  {program.title}
                </h3>

                {/* Gold divider */}
                <div className="w-10 h-px bg-accent mb-6" />

                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
