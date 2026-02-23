const HeroBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Structured network lines in deep green */}
    <path
      d="M-100 400 Q 200 350, 400 420 T 800 380 T 1200 440 T 1600 390"
      stroke="hsl(150 22% 14% / 0.08)"
      strokeWidth="1.5"
      className="hero-line"
    />
    <path
      d="M-50 500 Q 250 460, 500 520 T 900 470 T 1300 530 T 1700 480"
      stroke="hsl(150 22% 14% / 0.06)"
      strokeWidth="1"
      className="hero-line-reverse"
    />
    <path
      d="M-100 300 Q 300 270, 600 320 T 1000 290 T 1400 340 T 1800 300"
      stroke="hsl(150 22% 14% / 0.05)"
      strokeWidth="1"
      className="hero-line-slow"
    />
    {/* Gold accent lines */}
    <path
      d="M200 600 Q 450 560, 700 610 T 1100 580 T 1500 620"
      stroke="hsl(40 45% 57% / 0.12)"
      strokeWidth="0.8"
      className="hero-line-slow"
    />
    <path
      d="M-50 250 Q 200 220, 450 260 T 850 230"
      stroke="hsl(40 45% 57% / 0.08)"
      strokeWidth="0.6"
      className="hero-line"
    />
    {/* Nodes / intersection dots */}
    <circle cx="400" cy="420" r="2" fill="hsl(150 22% 14% / 0.1)" />
    <circle cx="800" cy="380" r="2.5" fill="hsl(150 22% 14% / 0.08)" />
    <circle cx="1200" cy="440" r="2" fill="hsl(40 45% 57% / 0.15)" />
    <circle cx="600" cy="320" r="1.5" fill="hsl(150 22% 14% / 0.06)" />
    <circle cx="1000" cy="290" r="2" fill="hsl(150 22% 14% / 0.08)" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-0">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-8 opacity-0 animate-fade-in">
            We think in markets,
            <br />
            <span className="italic">not in cups.</span>
          </h1>

          <p
            className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-lg opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Strategic intelligence for professionals shaping the tea industry.
          </p>

          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#programs"
              className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90"
            >
              Explore Programs
            </a>
            <a
              href="#society"
              className="inline-flex items-center px-8 py-3.5 border border-foreground/30 text-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:border-foreground hover:bg-foreground/5"
            >
              Enter the Society
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
