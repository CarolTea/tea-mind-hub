import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import type { LegalContent } from "./legal-content";

interface LegalPageProps {
  lang: Lang;
  content: LegalContent;
}

const LegalPage = ({ lang, content }: LegalPageProps) => {
  return (
    <LanguageProvider lang={lang}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <article className="max-w-3xl mx-auto px-6 lg:px-12">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
              {content.badge}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4 leading-tight">
              {content.title}
            </h1>
            <p className="font-sans text-xs tracking-wider uppercase text-foreground/50 mb-10">
              {content.updated}
            </p>
            <div className="w-12 h-px bg-accent mb-10" />
            <p className="font-sans text-base md:text-lg text-foreground/75 leading-relaxed mb-12">
              {content.intro}
            </p>

            <div className="space-y-10">
              {content.sections.map((s) => (
                <section key={s.title}>
                  <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
                    {s.title}
                  </h2>
                  <div className="space-y-3">
                    {s.body.map((p, i) => (
                      <p key={i} className="font-sans text-sm md:text-base text-foreground/70 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default LegalPage;