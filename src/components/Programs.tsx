import { useFadeIn } from "@/hooks/useFadeIn";
import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";

const programs = [
  {
    title: "Professional Formations",
    description: "Structured programs that build foundational expertise in tea market dynamics, sourcing strategy, and professional certification pathways.",
    image: program1,
    alt: "Professional tea cupping and evaluation setup",
  },
  {
    title: "Specializations",
    description: "Advanced focus areas in sensory analysis, supply chain intelligence, market positioning, and category management for the global tea sector.",
    image: program2,
    alt: "Sensory analysis of premium tea leaves",
  },
  {
    title: "Advanced Programs",
    description: "Executive-level programs designed for industry leaders navigating complex market strategies, brand architecture, and international expansion.",
    image: program3,
    alt: "Executive strategy and business intelligence",
  },
];

const Programs = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="programs" className="py-32 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-12 fade-in-section ${isVisible ? "is-visible" : ""}`}>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-20 text-center leading-tight">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {programs.map((program) => (
            <div key={program.title} className="group relative border border-border/60 transition-all duration-500 hover:border-foreground/20 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img src={program.image} alt={program.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">{program.title}</h3>
                <div className="w-10 h-px bg-accent mb-6" />
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
