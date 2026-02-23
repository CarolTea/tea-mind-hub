import { LanguageProvider } from "@/contexts/LanguageContext";
import { useLang } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import { neuroTranslations } from "@/lib/neuro-translations";
import { useFadeIn } from "@/hooks/useFadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Shared fade wrapper ─── */
const Fade = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

/* ─── 1. Hero ─── */
const NeuroHero = () => {
  const { lang } = useLang();
  const t = neuroTranslations[lang].hero;
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary to-secondary/95" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <Fade>
          <p className="text-xs tracking-[0.35em] uppercase text-accent mb-8 font-sans">Tea Mind Business Hub</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-12 font-sans">
            {t.subtitle}
          </p>
          <div className="w-16 h-px bg-accent mx-auto mb-12" />
          <p className="font-serif text-2xl md:text-3xl italic text-accent/90">
            {t.statement1}
          </p>
          <p className="font-serif text-2xl md:text-3xl italic text-accent/90 mt-2">
            {t.statement2}
          </p>
        </Fade>
      </div>
    </section>
  );
};

/* ─── 2. The Science ─── */
const Science = () => {
  const { lang } = useLang();
  const t = neuroTranslations[lang].science;
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <Fade>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 font-sans">{t.p1}</p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 font-sans">{t.p2}</p>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6 font-sans font-medium">{t.p3}</p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-10 font-sans">{t.p4}</p>
          <div className="w-12 h-px bg-accent mb-10" />
          <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
            {t.closing1}
          </p>
          <p className="font-serif text-xl md:text-2xl text-accent mt-1">
            {t.closing2}
          </p>
        </Fade>
      </div>
    </section>
  );
};

/* ─── 3. Experience as Competence ─── */
const Experience = () => {
  const { lang } = useLang();
  const t = neuroTranslations[lang].experience;
  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">{t.title}</h2>
          <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-8 font-sans">{t.intro}</p>
          <ul className="space-y-4 mb-10">
            {t.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-primary-foreground/85 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span className="text-base md:text-lg">{b}</span>
              </li>
            ))}
          </ul>
          <p className="font-serif text-xl md:text-2xl text-accent italic">{t.closing}</p>
        </Fade>
      </div>
    </section>
  );
};

/* ─── 4. Product Development ─── */
const Product = () => {
  const { lang } = useLang();
  const t = neuroTranslations[lang].product;
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">{t.title}</h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 font-sans">{t.intro}</p>
          <ul className="space-y-4 mb-10">
            {t.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="text-base md:text-lg">{b}</span>
              </li>
            ))}
          </ul>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-sans italic">{t.closing}</p>
        </Fade>
      </div>
    </section>
  );
};

/* ─── 5. Sector Context ─── */
const Sector = () => {
  const { lang } = useLang();
  const t = neuroTranslations[lang].sector;
  return (
    <section className="bg-secondary text-secondary-foreground py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">{t.title}</h2>
          <p className="text-base md:text-lg text-secondary-foreground/80 leading-relaxed mb-6 font-sans">{t.p1}</p>
          <div className="w-12 h-px bg-accent my-8" />
          <p className="font-serif text-xl md:text-2xl text-accent mb-2">{t.p2}</p>
          <p className="font-serif text-xl md:text-2xl text-secondary-foreground/90 mb-8">{t.p3}</p>
          <p className="text-base md:text-lg text-secondary-foreground/80 leading-relaxed font-sans">{t.p4}</p>
        </Fade>
      </div>
    </section>
  );
};

/* ─── 6. Academic Structure ─── */
const Academic = () => {
  const { lang } = useLang();
  const t = neuroTranslations[lang].academic;
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10">{t.title}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3 text-foreground/80 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span className="text-base">{b}</span>
              </div>
            ))}
          </div>
          <div className="w-12 h-px bg-accent my-10" />
          <p className="font-serif text-xl text-foreground">{t.closing1}</p>
          <p className="font-serif text-xl text-accent mt-1">{t.closing2}</p>
        </Fade>
      </div>
    </section>
  );
};

/* ─── 7. Pricing CTA ─── */
const Pricing = () => {
  const { lang } = useLang();
  const t = neuroTranslations[lang].pricing;
  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Fade>
          <div className="w-16 h-px bg-accent mx-auto mb-10" />
          <p className="font-serif text-6xl md:text-8xl text-accent mb-4">{t.price}</p>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-sans mb-12">{t.subtitle}</p>
          <a
            href="mailto:contato@teamindbusinesshub.com"
            className="inline-block border-2 border-accent text-accent px-10 py-4 text-sm tracking-[0.2em] uppercase font-sans hover:bg-accent hover:text-secondary transition-colors duration-300"
          >
            {t.cta}
          </a>
          <div className="w-16 h-px bg-accent mx-auto mt-10" />
        </Fade>
      </div>
    </section>
  );
};

/* ─── 8. Academic Direction ─── */
const Direction = () => {
  const { lang } = useLang();
  const t = neuroTranslations[lang].direction;
  return (
    <section className="bg-secondary text-secondary-foreground py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">{t.title}</h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {t.profiles.map((p, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto md:mx-0 mb-5">
                  <span className="font-serif text-xl text-accent">{p.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="font-serif text-xl mb-2">{p.name}</h3>
                <p className="text-xs tracking-wider uppercase text-accent/80 mb-4 font-sans">{p.title}</p>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed font-sans">{p.bio}</p>
              </div>
            ))}
          </div>
          <div className="w-12 h-px bg-accent mx-auto mt-16 mb-8" />
          <p className="text-center text-sm text-secondary-foreground/60 font-sans max-w-xl mx-auto">{t.closing}</p>
        </Fade>
      </div>
    </section>
  );
};

/* ─── Page ─── */
const NeurogastronomyContent = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <NeuroHero />
      <Science />
      <Experience />
      <Product />
      <Sector />
      <Academic />
      <Pricing />
      <Direction />
    </main>
    <Footer />
  </div>
);

const Neurogastronomy = ({ lang = "en" }: { lang?: Lang }) => (
  <LanguageProvider lang={lang}>
    <NeurogastronomyContent />
  </LanguageProvider>
);

export default Neurogastronomy;
