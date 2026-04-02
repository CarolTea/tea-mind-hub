import { useEffect, useRef, useState, type ReactNode } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useLang } from "@/contexts/LanguageContext";
import { programsTranslations } from "@/lib/programs-translations";
import type { ProgramData } from "@/lib/programs-translations";
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

const ProgramsHero = () => {
  const { lang } = useLang();
  const t = programsTranslations[lang];

  return (
    <section className="relative min-h-[70vh] flex items-center bg-primary text-primary-foreground pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Fade>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-6 text-center">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-center mb-8">
            {t.hero.title}
          </h1>
          <p className="font-sans text-lg md:text-xl text-primary-foreground/70 leading-relaxed text-center mb-12">
            {t.hero.subtitle}
          </p>
        </Fade>
        <Fade>
          <div className="space-y-6">
            {t.hero.introParagraphs.map((p, i) => (
              <p key={i} className="font-sans text-base text-primary-foreground/60 leading-relaxed text-center">
                {p}
              </p>
            ))}
          </div>
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
              href="#"
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

const ProgramSection = ({ program, index, forWhoTitle, includesTitle }: { program: ProgramData; index: number; forWhoTitle: string; includesTitle: string }) => {
  const isDark = index % 2 === 0;

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
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:opacity-90"
            >
              {program.cta}
            </a>
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
        {t.programs.map((program, i) => (
          <ProgramSection
            key={program.id}
            program={program}
            index={i}
            forWhoTitle={t.forWhoTitle}
            includesTitle={t.includesTitle}
          />
        ))}
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
