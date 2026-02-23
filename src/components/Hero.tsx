import heroBg from "@/assets/hero-bg.jpg";
import { useLang } from "@/contexts/LanguageContext";

const HeroBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full z-[2]"
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M-100 400 Q 200 350, 400 420 T 800 380 T 1200 440 T 1600 390" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="1.5" className="hero-line" />
    <path d="M-50 500 Q 250 460, 500 520 T 900 470 T 1300 530 T 1700 480" stroke="hsl(0 0% 100% / 0.06)" strokeWidth="1" className="hero-line-reverse" />
    <path d="M-100 300 Q 300 270, 600 320 T 1000 290 T 1400 340 T 1800 300" stroke="hsl(0 0% 100% / 0.05)" strokeWidth="1" className="hero-line-slow" />
    <path d="M200 600 Q 450 560, 700 610 T 1100 580 T 1500 620" stroke="hsl(40 45% 57% / 0.15)" strokeWidth="0.8" className="hero-line-slow" />
    <path d="M-50 250 Q 200 220, 450 260 T 850 230" stroke="hsl(40 45% 57% / 0.1)" strokeWidth="0.6" className="hero-line" />
    <circle cx="400" cy="420" r="2" fill="hsl(0 0% 100% / 0.1)" />
    <circle cx="800" cy="380" r="2.5" fill="hsl(0 0% 100% / 0.08)" />
    <circle cx="1200" cy="440" r="2" fill="hsl(40 45% 57% / 0.2)" />
  </svg>
);

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={heroBg} alt="Aerial view of lush tea plantation rows" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40 z-[1]" />
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-0">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-primary-foreground mb-8 opacity-0 animate-fade-in">
            {t.hero.title1}
            <br />
            <span className="italic">{t.hero.title2}</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-12 max-w-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#programs" className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90">
              {t.hero.cta1}
            </a>
            <a href="#society" className="inline-flex items-center px-8 py-3.5 border border-primary-foreground/40 text-primary-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10">
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
