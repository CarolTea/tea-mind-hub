import { useEffect, useRef, useState, type ReactNode } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useLang } from "@/contexts/LanguageContext";
import { programsTranslations } from "@/lib/programs-translations";
import type { ProgramData, ProgramCategory } from "@/lib/programs-translations";
import type { Lang } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Fade = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const ProgramsHeroBackground = () => (
  <>
  </>
);
  <svg
    className="absolute inset-0 w-full h-full z-[2] pointer-events-none"
    viewBox="0 0 1440 700"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M-100 300 Q 200 260, 500 320 T 900 280 T 1300 340 T 1700 300" stroke="hsl(0 0% 100% / 0.06)" strokeWidth="1.5" className="hero-line" />
    <path d="M-50 400 Q 300 360, 600 420 T 1000 380 T 1400 440 T 1800 400" stroke="hsl(0 0% 100% / 0.04)" strokeWidth="1" className="hero-line-reverse" />
    <path d="M-100 200 Q 350 170, 700 220 T 1100 190 T 1500 240" stroke="hsl(0 0% 100% / 0.03)" strokeWidth="1" className="hero-line-slow" />
    <path d="M200 500 Q 450 460, 700 510 T 1100 480 T 1500 520" stroke="hsl(40 45% 57% / 0.12)" strokeWidth="0.8" className="hero-line-slow" />
    <path d="M-50 150 Q 200 120, 450 160 T 850 130" stroke="hsl(40 45% 57% / 0.08)" strokeWidth="0.6" className="hero-line" />
    <circle cx="350" cy="320" r="2" fill="hsl(0 0% 100% / 0.08)">
      <animate attributeName="opacity" values="0.08;0.2;0.08" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="750" cy="280" r="2.5" fill="hsl(40 45% 57% / 0.15)">
      <animate attributeName="opacity" values="0.15;0.35;0.15" dur="5s" repeatCount="indefinite" />
    </circle>
    <circle cx="1100" cy="350" r="2" fill="hsl(0 0% 100% / 0.06)">
      <animate attributeName="opacity" values="0.06;0.18;0.06" dur="6s" repeatCount="indefinite" />
    </circle>
    <circle cx="500" cy="450" r="1.5" fill="hsl(40 45% 57% / 0.1)">
      <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const ProgramsHero = () => {
  const { lang } = useLang();
  const t = programsTranslations[lang];

  return (
    <section className="relative min-h-[80vh] flex items-center bg-primary text-primary-foreground pt-32 pb-24 overflow-hidden">
      <ProgramsHeroBackground />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl z-[1]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <Fade>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-8">
            {t.hero.eyebrow}
          </p>
        </Fade>
        <Fade className="delay-100">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-tight mb-10">
            {t.hero.title}
          </h1>
        </Fade>
        <Fade className="delay-200">
          <div className="w-16 h-px bg-accent mx-auto mb-10" />
        </Fade>
        <Fade className="delay-300">
          <p className="font-sans text-lg md:text-xl text-primary-foreground/65 leading-relaxed max-w-2xl mx-auto mb-14">
            {t.hero.subtitle}
          </p>
        </Fade>
        <Fade className="delay-500">
          <a
            href="#programs-list"
            className="inline-flex items-center px-10 py-4 bg-accent text-accent-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            ↓ &nbsp; {lang === "pt" ? "Explorar Programas" : lang === "es" ? "Explorar Programas" : "Explore Programs"}
          </a>
        </Fade>
      </div>
    </section>
  );
};

const DiagnosisBlock = () => {
  const { lang } = useLang();
  const t = programsTranslations[lang];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <Fade>
          <div className="space-y-4 mb-10">
            {t.diagnosis.text.split("\n\n").map((p, i) => (
              <p key={i} className="font-sans text-base md:text-lg text-foreground/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://teamindquest.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-accent-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90"
            >
              {t.diagnosis.cta1}
            </a>
            <a
              href="#programs-list"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-foreground/20 text-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:border-foreground/40"
            >
              {t.diagnosis.cta2}
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

const CategoryDivider = ({ category, isDark }: { category: ProgramCategory; isDark: boolean }) => (
  <section
    id={category.id}
    className={`py-20 lg:py-24 ${isDark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}`}
  >
    <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
      <Fade>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-6">
          {category.eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
          {category.title}
        </h2>
        <div className="w-16 h-px bg-accent mx-auto mb-8" />
        <p className={`font-sans text-base md:text-lg ${isDark ? "text-primary-foreground/65" : "text-foreground/65"} leading-relaxed`}>
          {category.description}
        </p>
      </Fade>
    </div>
  </section>
);

const ComingSoonSection = ({ program, isDark, label, text }: { program: ProgramData; isDark: boolean; label: string; text: string }) => (
  <section
    id={program.id}
    className={`py-20 lg:py-28 ${isDark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}`}
  >
    <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
      <Fade>
        <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-accent-foreground bg-accent px-4 py-2 mb-8">
          {label}
        </span>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          {program.title}
        </h2>
        <div className="w-12 h-px bg-accent mx-auto mb-8" />
        <p className={`font-sans text-base md:text-lg ${isDark ? "text-primary-foreground/65" : "text-foreground/65"} leading-relaxed mb-6`}>
          {program.mainDescription}
        </p>
        <p className={`font-sans text-sm italic ${isDark ? "text-primary-foreground/50" : "text-foreground/50"} leading-relaxed`}>
          {text}
        </p>
      </Fade>
    </div>
  </section>
);

const ProgramSection = ({ program, isDark, forWhoTitle, includesTitle }: { program: ProgramData; isDark: boolean; forWhoTitle: string; includesTitle: string }) => {
  return (
    <section
      id={program.id}
      className={`py-20 lg:py-28 ${isDark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}`}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Fade>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-center">
            {program.title}
          </h2>
          {program.subtitle && (
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent text-center mb-4">
              {program.subtitle}
            </p>
          )}
          <div className="w-12 h-px bg-accent mx-auto mb-8" />
          <p className={`font-sans text-lg md:text-xl ${isDark ? "text-primary-foreground/70" : "text-foreground/70"} leading-relaxed text-center mb-10`}>
            {program.mainDescription}
          </p>
        </Fade>

        <Fade>
          <div className="space-y-4 mb-14">
            {program.bodyText.split("\n\n").map((p, i) => (
              <p key={i} className={`font-sans text-base ${isDark ? "text-primary-foreground/60" : "text-foreground/60"} leading-relaxed`}>
                {p}
              </p>
            ))}
          </div>
        </Fade>

        {/* Para quem é */}
        <Fade>
          <div className="mb-14">
            <h3 className="font-serif text-xl font-medium mb-2">{forWhoTitle}</h3>
            <p className={`font-sans text-sm ${isDark ? "text-primary-foreground/50" : "text-foreground/50"} mb-6`}>
              {program.forWhoIntro}
            </p>
            <ul className="space-y-3">
              {program.forWhoItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-xs">◆</span>
                  <span className={`font-sans text-sm ${isDark ? "text-primary-foreground/70" : "text-foreground/70"} leading-relaxed`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        {/* O que inclui */}
        <Fade>
          <div className="mb-14">
            <h3 className="font-serif text-xl font-medium mb-6">{includesTitle}</h3>
            <ul className="space-y-3">
              {program.includesItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span>
                  <span className={`font-sans text-sm ${isDark ? "text-primary-foreground/70" : "text-foreground/70"} leading-relaxed`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        {/* Formation text */}
        {program.formationText && (
          <Fade>
            <p className={`font-sans text-base italic ${isDark ? "text-primary-foreground/50" : "text-foreground/50"} leading-relaxed text-center mb-14`}>
              {program.formationText}
            </p>
          </Fade>
        )}

        {/* Como funciona */}
        <Fade>
          <div className="border-l-2 border-accent pl-6 mb-14">
            <h3 className="font-serif text-xl font-medium mb-4">{program.directionTitle}</h3>
            <div className="space-y-4">
              {program.directionText.split("\n\n").map((p, i) => (
                <p key={i} className={`font-sans text-sm ${isDark ? "text-primary-foreground/60" : "text-foreground/60"} leading-relaxed`}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Fade>

        {/* CTA */}
        <Fade>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {program.hotmartUrl && (
              <a
                href={program.hotmartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-accent-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90"
              >
                Comprar agora
              </a>
            )}
            {program.contentUrls?.map((c) => (
              <a
                key={c.url}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-8 py-3.5 border text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 ${
                  isDark
                    ? "border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/60"
                    : "border-foreground/20 text-foreground hover:border-foreground/40"
                }`}
              >
                {c.label}
              </a>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

const ProgramsContent = () => {
  const { lang } = useLang();
  const t = programsTranslations[lang];

  return (
    <>
      <Navbar />
      <ProgramsHero />
      <DiagnosisBlock />
      <div id="programs-list">
        {t.categories.map((category, catIdx) => {
          const catIsDark = catIdx % 2 === 0;
          return (
            <div key={category.id}>
              <CategoryDivider category={category} isDark={catIsDark} />
              {category.programs.map((program, i) => {
                // alternate fundo dentro da categoria, começando oposto ao divider
                const isDark = (catIdx + i + 1) % 2 === 0;
                if (program.comingSoon) {
                  return (
                    <ComingSoonSection
                      key={program.id}
                      program={program}
                      isDark={isDark}
                      label={t.comingSoonLabel}
                      text={t.comingSoonText}
                    />
                  );
                }
                return (
                  <ProgramSection
                    key={program.id}
                    program={program}
                    isDark={isDark}
                    forWhoTitle={t.forWhoTitle}
                    includesTitle={t.includesTitle}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

const ProgramsPage = ({ lang = "pt" }: { lang?: Lang }) => (
  <LanguageProvider lang={lang}>
    <ProgramsContent />
  </LanguageProvider>
);

export default ProgramsPage;
