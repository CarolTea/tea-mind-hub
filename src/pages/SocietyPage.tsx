import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Calendar, BookOpen, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

/* ── Fade helper ── */
const Fade = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms` }}>
      {children}
    </div>
  );
};

/* ── HeroBackground SVG ── */
const HeroBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 300 Q 360 100 720 300 T 1440 300" stroke="currentColor" strokeWidth="1.5" className="hero-line" />
    <path d="M0 350 Q 360 150 720 350 T 1440 350" stroke="currentColor" strokeWidth="1" className="hero-line-reverse" />
    <circle cx="720" cy="300" r="120" stroke="currentColor" strokeWidth="0.8" className="hero-line-slow" />
    <circle cx="360" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" className="hero-line" />
    <circle cx="1080" cy="400" r="80" stroke="currentColor" strokeWidth="0.5" className="hero-line-reverse" />
  </svg>
);

/* ── Translations ── */
const societyT = {
  pt: {
    hero: {
      eyebrow: "Tea Mind Society",
      title: "Ninguém constrói um mercado sozinho.",
      subtitle: "A Tea Mind Society é o espaço de continuidade da Tea Mind para alunos e profissionais que desejam seguir aprendendo, se atualizando e acompanhando os movimentos do mercado do chá com mais profundidade, estratégia e conexão, mesmo após o encerramento de um programa ou formação.",
      listTitle: "Este espaço é para quem:",
      list: [
        "valoriza continuidade e atualização",
        "quer seguir aprendendo com a Tea Mind",
        "deseja acompanhar temas relevantes do mercado do chá",
        "busca ampliar visão de negócio, repertório e conexões",
        "entende que trajetória profissional se constrói ao longo do tempo",
      ],
    },
    vision: {
      title: "A xícara não se esvazia quando o programa acaba.",
      text: "No mercado do chá, crescer exige continuidade. Exige acompanhar tendências, ouvir novas perspectivas, acessar especialistas, revisitar temas importantes e seguir em contato com um ecossistema que estimula repertório, visão de negócio e evolução profissional.",
      closing: "A Tea Mind Society nasce desse entendimento: como um espaço vivo de atualização, troca qualificada e expansão de visão para quem continua construindo sua trajetória no chá.",
    },
    whatIs: {
      title: "Um espaço de continuidade, atualização e acesso.",
      text: "A Tea Mind Society foi criada para reunir alunos e profissionais formados que desejam permanecer próximos da Tea Mind e continuar ampliando repertório com conteúdo relevante, encontros especiais e conversas que acompanham os movimentos do mercado.",
      itemsTitle: "O que acontece na Society",
      items: [
        "Lives mensais com temas de negócios, mercado e desenvolvimento profissional",
        "Entrevistas e encontros com convidados especiais",
        "Conteúdos que ampliam a visão sobre o mercado do chá",
        "Discussões relevantes para quem deseja seguir evoluindo",
        "Acesso contínuo a conversas que mantêm a jornada em movimento",
      ],
    },
    diff: {
      title: "Uma extensão viva do ecossistema Tea Mind.",
      text: "A Tea Mind Society mantém viva a conexão com as discussões que importam, com os movimentos do mercado e com o pensamento que sustenta a Tea Mind. Com o tempo, esse espaço também se fortalece com a participação de partners e de alunos mais experientes, ampliando ainda mais a riqueza das trocas e dos conteúdos.",
      closing: "Aqui, o valor está na curadoria, na continuidade e no acesso.",
    },
    closing: {
      title: "Continuar perto também é uma forma de crescer.",
      text: "A Tea Mind Society foi criada para quem entende que construir uma trajetória no mercado do chá não é um evento pontual, mas um processo contínuo de expansão, refinamento e presença.",
      cta: "Solicite sua entrada gratuita na Tea Mind Society",
    },
  },
  en: {
    hero: {
      eyebrow: "Tea Mind Society",
      title: "No one builds a market alone.",
      subtitle: "The Tea Mind Society is Tea Mind's continuity space for students and professionals who wish to keep learning, staying updated, and following the movements of the tea market with more depth, strategy, and connection — even after completing a program or course.",
      listTitle: "This space is for those who:",
      list: [
        "value continuity and staying current",
        "want to keep learning with Tea Mind",
        "wish to follow relevant tea market topics",
        "seek to broaden their business vision, repertoire, and connections",
        "understand that a professional journey is built over time",
      ],
    },
    vision: {
      title: "The cup doesn't empty when the program ends.",
      text: "In the tea market, growth requires continuity. It requires following trends, hearing new perspectives, accessing specialists, revisiting important topics, and staying connected to an ecosystem that stimulates repertoire, business vision, and professional evolution.",
      closing: "The Tea Mind Society is born from this understanding: as a living space for updates, qualified exchange, and expanded vision for those who continue building their journey in tea.",
    },
    whatIs: {
      title: "A space for continuity, updates, and access.",
      text: "The Tea Mind Society was created to bring together students and trained professionals who wish to stay close to Tea Mind and continue expanding their repertoire with relevant content, special meetings, and conversations that follow market movements.",
      itemsTitle: "What happens in the Society",
      items: [
        "Monthly lives on business, market, and professional development topics",
        "Interviews and meetings with special guests",
        "Content that broadens the vision of the tea market",
        "Relevant discussions for those who wish to keep evolving",
        "Continuous access to conversations that keep the journey moving",
      ],
    },
    diff: {
      title: "A living extension of the Tea Mind ecosystem.",
      text: "The Tea Mind Society keeps alive the connection with the discussions that matter, with market movements, and with the thinking that sustains Tea Mind. Over time, this space is also strengthened by the participation of partners and more experienced students, further enriching the exchanges and content.",
      closing: "Here, the value lies in curation, continuity, and access.",
    },
    closing: {
      title: "Staying close is also a way to grow.",
      text: "The Tea Mind Society was created for those who understand that building a career in the tea market is not a one-time event, but a continuous process of expansion, refinement, and presence.",
      cta: "Request your free entry to the Tea Mind Society",
    },
  },
  es: {
    hero: {
      eyebrow: "Tea Mind Society",
      title: "Nadie construye un mercado solo.",
      subtitle: "La Tea Mind Society es el espacio de continuidad de Tea Mind para alumnos y profesionales que desean seguir aprendiendo, actualizándose y acompañando los movimientos del mercado del té con más profundidad, estrategia y conexión, incluso después de finalizar un programa o formación.",
      listTitle: "Este espacio es para quien:",
      list: [
        "valora la continuidad y la actualización",
        "quiere seguir aprendiendo con Tea Mind",
        "desea acompañar temas relevantes del mercado del té",
        "busca ampliar visión de negocio, repertorio y conexiones",
        "entiende que la trayectoria profesional se construye a lo largo del tiempo",
      ],
    },
    vision: {
      title: "La taza no se vacía cuando el programa termina.",
      text: "En el mercado del té, crecer exige continuidad. Exige acompañar tendencias, escuchar nuevas perspectivas, acceder a especialistas, revisitar temas importantes y seguir en contacto con un ecosistema que estimula repertorio, visión de negocio y evolución profesional.",
      closing: "La Tea Mind Society nace de ese entendimiento: como un espacio vivo de actualización, intercambio cualificado y expansión de visión para quienes continúan construyendo su trayectoria en el té.",
    },
    whatIs: {
      title: "Un espacio de continuidad, actualización y acceso.",
      text: "La Tea Mind Society fue creada para reunir alumnos y profesionales formados que desean permanecer cercanos a Tea Mind y continuar ampliando repertorio con contenido relevante, encuentros especiales y conversaciones que acompañan los movimientos del mercado.",
      itemsTitle: "Lo que ocurre en la Society",
      items: [
        "Lives mensuales con temas de negocios, mercado y desarrollo profesional",
        "Entrevistas y encuentros con invitados especiales",
        "Contenidos que amplían la visión sobre el mercado del té",
        "Discusiones relevantes para quienes desean seguir evolucionando",
        "Acceso continuo a conversaciones que mantienen el camino en movimiento",
      ],
    },
    diff: {
      title: "Una extensión viva del ecosistema Tea Mind.",
      text: "La Tea Mind Society mantiene viva la conexión con las discusiones que importan, con los movimientos del mercado y con el pensamiento que sustenta Tea Mind. Con el tiempo, este espacio también se fortalece con la participación de partners y de alumnos más experimentados, ampliando aún más la riqueza de los intercambios y contenidos.",
      closing: "Aquí, el valor está en la curaduría, la continuidad y el acceso.",
    },
    closing: {
      title: "Seguir cerca también es una forma de crecer.",
      text: "La Tea Mind Society fue creada para quienes entienden que construir una trayectoria en el mercado del té no es un evento puntual, sino un proceso continuo de expansión, refinamiento y presencia.",
      cta: "Solicita tu entrada gratuita a la Tea Mind Society",
    },
  },
} as const;

const featureIcons = [MessageCircle, Calendar, BookOpen, TrendingUp, Users];

/* ── Content ── */
const SocietyContent = () => {
  const { lang, t: globalT } = useLang();
  const navigate = useNavigate();
  const t = societyT[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── BLOCK 1 — HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[hsl(25,30%,14%)] text-[hsl(40,20%,94%)] overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <Fade>
            <span className="inline-block text-xs tracking-[0.35em] uppercase font-sans mb-6 text-[hsl(40,20%,94%)]/60">{t.hero.eyebrow}</span>
          </Fade>
          <Fade delay={150}>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8">{t.hero.title}</h1>
          </Fade>
          <Fade delay={300}>
            <p className="text-base md:text-lg leading-relaxed text-[hsl(40,20%,94%)]/80 max-w-3xl mx-auto mb-10">{t.hero.subtitle}</p>
          </Fade>
          <Fade delay={450}>
            <div className="text-left max-w-xl mx-auto">
              <p className="text-sm uppercase tracking-[0.2em] font-sans mb-4 text-[hsl(40,20%,94%)]/60">{t.hero.listTitle}</p>
              <ul className="space-y-3">
                {t.hero.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[hsl(40,20%,94%)]/80">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-[hsl(40,20%,94%)]/40 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── BLOCK 2 — VISION ── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Fade>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-foreground">{t.vision.title}</h2>
          </Fade>
          <Fade delay={150}>
            <p className="text-base md:text-lg leading-relaxed text-foreground/70 mb-10">{t.vision.text}</p>
          </Fade>
          <Fade delay={300}>
            <div className="border-l-2 border-foreground/20 pl-6 text-left">
              <p className="italic text-base text-foreground/60 leading-relaxed">{t.vision.closing}</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── BLOCK 3 — WHAT IS THE SOCIETY ── */}
      <section className="py-24 md:py-32 bg-[hsl(25,30%,14%)] text-[hsl(40,20%,94%)]">
        <div className="max-w-5xl mx-auto px-6">
          <Fade>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-6">{t.whatIs.title}</h2>
          </Fade>
          <Fade delay={100}>
            <p className="text-base md:text-lg leading-relaxed text-[hsl(40,20%,94%)]/70 text-center max-w-3xl mx-auto mb-16">{t.whatIs.text}</p>
          </Fade>
          <Fade delay={200}>
            <p className="text-xs uppercase tracking-[0.3em] font-sans text-[hsl(40,20%,94%)]/50 text-center mb-10">{t.whatIs.itemsTitle}</p>
          </Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {t.whatIs.items.map((item, i) => {
              const Icon = featureIcons[i];
              return (
                <Fade key={i} delay={300 + i * 100}>
                  <div className="flex items-start gap-4 p-6 rounded-lg border border-[hsl(40,20%,94%)]/10 hover:border-[hsl(40,20%,94%)]/25 transition-colors duration-500 bg-[hsl(40,20%,94%)]/[0.03]">
                    <Icon className="w-6 h-6 mt-0.5 flex-shrink-0 text-[hsl(40,20%,94%)]/40" />
                    <p className="text-sm md:text-base leading-relaxed text-[hsl(40,20%,94%)]/80">{item}</p>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BLOCK 4 — DIFFERENTIATOR ── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Fade>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-foreground">{t.diff.title}</h2>
          </Fade>
          <Fade delay={150}>
            <p className="text-base md:text-lg leading-relaxed text-foreground/70 mb-12">{t.diff.text}</p>
          </Fade>
          <Fade delay={300}>
            <div className="border-l-2 border-foreground/20 pl-6 text-left max-w-xl mx-auto">
              <p className="text-lg md:text-xl font-serif italic text-foreground/70">{t.diff.closing}</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── BLOCK 5 — CLOSING ── */}
      <section className="py-24 md:py-32 bg-[hsl(25,30%,14%)] text-[hsl(40,20%,94%)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Fade>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">{t.closing.title}</h2>
          </Fade>
          <Fade delay={150}>
            <p className="text-base md:text-lg leading-relaxed text-[hsl(40,20%,94%)]/70 mb-12">{t.closing.text}</p>
          </Fade>
          <Fade delay={300}>
            <a
              href="mailto:contato@teamind.com.br?subject=Tea Mind Society — Entrada gratuita"
              className="inline-block px-8 py-4 border border-[hsl(40,20%,94%)]/30 text-sm tracking-wider uppercase font-sans hover:bg-[hsl(40,20%,94%)]/10 transition-colors duration-500"
            >
              {t.closing.cta}
            </a>
          </Fade>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const SocietyPage = ({ lang = "pt" }: { lang?: Lang }) => (
  <LanguageProvider lang={lang}>
    <SocietyContent />
  </LanguageProvider>
);

export default SocietyPage;
