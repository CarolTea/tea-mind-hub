import { useFadeIn } from "@/hooks/useFadeIn";

const Philosophy = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-36 lg:py-48">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 lg:px-12 text-center fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight italic">
          "We structure what others consume."
        </blockquote>

        {/* Gold underline */}
        <div className="w-12 h-px bg-accent mx-auto mt-10" />
      </div>
    </section>
  );
};

export default Philosophy;
