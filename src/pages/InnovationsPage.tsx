import { useRef, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Fade helper ── */
const Fade = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
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

/* ── Translations ── */
const innovT = {
  pt: {
    hero: {
      eyebrow: "Tea Mind Inovações",
      title: "Pioneirismo, tecnologia e novos caminhos para o mercado do chá.",
      subtitle: "A Tea Mind desenvolve projetos que ampliam o futuro da indústria do chá, conectando formação, tecnologia, negócios, experiências e inovação aplicada a um mercado em transformação.",
    },
    vision: {
      title: "Inovar, para nós, é construir o que o mercado ainda precisa.",
      text: "Ao longo da nossa trajetória, percebemos que formar profissionais e educar os consumidores é uma parte da transformação. O mercado do chá também precisa de novas ferramentas, novas experiências, novas conexões e novas estruturas capazes de elevar seu nível de profissionalização, sofisticação e alcance.",
      closing: "É desse olhar que nascem as inovações da Tea Mind: projetos criados para expandir o que o mercado do chá pode ser.",
    },
    ai: {
      badge: "Tea Mind AI",
      title: "A primeira infraestrutura de IA do mundo para o mercado do chá.",
      text: "Desenvolvido a partir do capital intelectual construído pela Tea Mind ao longo de mais de uma década, o ecossistema Tea Mind AI reúne agentes proprietários criados para apoiar profissionais certificados do chá em diferentes frentes de atuação.",
      points: [
        "Inteligência aplicada ao mercado do chá",
        "Agentes especializados por área",
        "Apoio a profissionais já formados",
        "Tecnologia criada com metodologia própria",
      ],
      cta: "Conhecer o Neural System",
    },
    teafest: {
      badge: "Tea Fest in Rio",
      title: "Um espaço de encontro ao vivo para quem está construindo o mercado do chá no Brasil.",
      text1: "Lançado em 2025, o Tea Fest in Rio nasceu como um encontro presencial entre profissionais, marcas, especialistas e apaixonados que vibram na mesma frequência e ajudam a impulsionar o mercado do chá no Brasil.",
      text2: "Na sua primeira edição, o evento reuniu palestrantes importantes, experiências marcantes e o Mercado do Chá, espaço onde muitos alunos apresentaram e venderam seus próprios produtos ao público. O Tea Fest expressa na prática a visão da Tea Mind sobre o futuro do mercado: mais profissionalização, mais visibilidade, mais conexão e mais movimento.",
      cta: "Lista de espera para 2026",
    },
    other: {
      title: "Inovação também é abrir linguagem e possibilidades.",
      text: "A visão inovadora da Tea Mind também se expressa em iniciativas que conectam o universo do chá a novas formas de criação, experiência e tecnologia. Da criação do HackaTEA às primeiras experiências com NFTs do chá para participantes do Tea Fest, seguimos explorando caminhos que ampliam a forma como o mercado do chá pode ser vivido, pensado e construído.",
    },
    closing: {
      title: "Não seguimos o mercado do chá. Nós o expandimos.",
      text: "Cada inovação da Tea Mind nasce de uma mesma convicção: o futuro do chá será construído por quem tiver repertório, visão técnica e de negócios e coragem para criar o que ainda não existe.",
      cta1: "Explorar os Programas",
      cta2: "Conhecer a Tea Mind Society",
    },
  },
  en: {
    hero: {
      eyebrow: "Tea Mind Innovations",
      title: "Pioneering, technology and new paths for the tea market.",
      subtitle: "Tea Mind develops projects that expand the future of the tea industry, connecting education, technology, business, experiences and applied innovation to a market in transformation.",
    },
    vision: {
      title: "For us, innovating means building what the market still needs.",
      text: "Throughout our journey, we realized that training professionals and educating consumers is just one part of the transformation. The tea market also needs new tools, experiences, connections and structures capable of raising its level of professionalism, sophistication and reach.",
      closing: "This is the perspective from which Tea Mind's innovations are born: projects created to expand what the tea market can be.",
    },
    ai: {
      badge: "Tea Mind AI",
      title: "The world's first AI infrastructure for the tea market.",
      text: "Developed from the intellectual capital built by Tea Mind over more than a decade, the Tea Mind AI ecosystem brings together proprietary agents created to support certified tea professionals across different areas.",
      points: [
        "Intelligence applied to the tea market",
        "Specialized agents by area",
        "Support for trained professionals",
        "Technology built with proprietary methodology",
      ],
      cta: "Explore the Neural System",
    },
    teafest: {
      badge: "Tea Fest in Rio",
      title: "A live gathering space for those building the tea market in Brazil.",
      text1: "Launched in 2025, Tea Fest in Rio was born as an in-person meeting between professionals, brands, specialists and enthusiasts who share the same frequency and help drive the tea market in Brazil.",
      text2: "In its first edition, the event gathered important speakers, remarkable experiences and the Tea Market, a space where many students presented and sold their own products to the public. Tea Fest embodies Tea Mind's vision for the future of the market: more professionalism, more visibility, more connection and more movement.",
      cta: "Waitlist for 2026",
    },
    other: {
      title: "Innovation is also about opening language and possibilities.",
      text: "Tea Mind's innovative vision is also expressed through initiatives that connect the tea universe to new forms of creation, experience and technology. From creating HackaTEA to the first NFT experiences for Tea Fest participants, we continue exploring paths that expand how the tea market can be lived, thought and built.",
    },
    closing: {
      title: "We don't follow the tea market. We expand it.",
      text: "Every Tea Mind innovation is born from the same conviction: the future of tea will be built by those with repertoire, technical and business vision, and the courage to create what doesn't yet exist.",
      cta1: "Explore Programs",
      cta2: "Discover Tea Mind Society",
    },
  },
  es: {
    hero: {
      eyebrow: "Tea Mind Innovaciones",
      title: "Pionerismo, tecnología y nuevos caminos para el mercado del té.",
      subtitle: "Tea Mind desarrolla proyectos que amplían el futuro de la industria del té, conectando formación, tecnología, negocios, experiencias e innovación aplicada a un mercado en transformación.",
    },
    vision: {
      title: "Para nosotros, innovar es construir lo que el mercado aún necesita.",
      text: "A lo largo de nuestra trayectoria, percibimos que formar profesionales y educar a los consumidores es una parte de la transformación. El mercado del té también necesita nuevas herramientas, experiencias, conexiones y estructuras capaces de elevar su nivel de profesionalización, sofisticación y alcance.",
      closing: "Es desde esa mirada que nacen las innovaciones de Tea Mind: proyectos creados para expandir lo que el mercado del té puede ser.",
    },
    ai: {
      badge: "Tea Mind AI",
      title: "La primera infraestructura de IA del mundo para el mercado del té.",
      text: "Desarrollado a partir del capital intelectual construido por Tea Mind a lo largo de más de una década, el ecosistema Tea Mind AI reúne agentes propietarios creados para apoyar a profesionales certificados del té en diferentes frentes de actuación.",
      points: [
        "Inteligencia aplicada al mercado del té",
        "Agentes especializados por área",
        "Apoyo a profesionales ya formados",
        "Tecnología creada con metodología propia",
      ],
      cta: "Conocer el Neural System",
    },
    teafest: {
      badge: "Tea Fest in Rio",
      title: "Un espacio de encuentro en vivo para quienes construyen el mercado del té en Brasil.",
      text1: "Lanzado en 2025, el Tea Fest in Rio nació como un encuentro presencial entre profesionales, marcas, especialistas y apasionados que vibran en la misma frecuencia y ayudan a impulsar el mercado del té en Brasil.",
      text2: "En su primera edición, el evento reunió ponentes importantes, experiencias memorables y el Mercado del Té, un espacio donde muchos alumnos presentaron y vendieron sus propios productos al público. El Tea Fest expresa en la práctica la visión de Tea Mind sobre el futuro del mercado: más profesionalización, más visibilidad, más conexión y más movimiento.",
      cta: "Lista de espera para 2026",
    },
    other: {
      title: "La innovación también es abrir lenguaje y posibilidades.",
      text: "La visión innovadora de Tea Mind también se expresa en iniciativas que conectan el universo del té con nuevas formas de creación, experiencia y tecnología. Desde la creación del HackaTEA hasta las primeras experiencias con NFTs del té para participantes del Tea Fest, seguimos explorando caminos que amplían la forma en que el mercado del té puede ser vivido, pensado y construido.",
    },
    closing: {
      title: "No seguimos el mercado del té. Lo expandimos.",
      text: "Cada innovación de Tea Mind nace de una misma convicción: el futuro del té será construido por quienes tengan repertorio, visión técnica y de negocios y coraje para crear lo que aún no existe.",
      cta1: "Explorar los Programas",
      cta2: "Conocer la Tea Mind Society",
    },
  },
};

const programsRoutes = { en: "/programs", es: "/es/programas", pt: "/pt/programas" } as const;

/* ── Hero Background SVG ── */
const HeroBackground = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="xMidYMid slice">
    <path d="M0 300 Q360 200 720 320 T1440 280" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.15" className="hero-line" />
    <path d="M0 400 Q480 300 960 380 T1440 350" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.1" className="hero-line-reverse" />
    <circle cx="720" cy="300" r="3" fill="hsl(var(--accent))" opacity="0.2"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" /></circle>
    <circle cx="360" cy="350" r="2" fill="hsl(var(--accent))" opacity="0.15"><animate attributeName="opacity" values="0.05;0.2;0.05" dur="5s" repeatCount="indefinite" /></circle>
    <circle cx="1100" cy="280" r="2.5" fill="hsl(var(--accent))" opacity="0.15"><animate attributeName="opacity" values="0.1;0.25;0.1" dur="6s" repeatCount="indefinite" /></circle>
  </svg>
);

/* ── Icon components ── */
const icons = [
  // brain
  <svg key="brain" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a5 5 0 0 0-5 5c0 1.5.5 2.5 1.5 3.5L12 14l3.5-3.5C16.5 9.5 17 8.5 17 7a5 5 0 0 0-5-5Z" /><path d="M9 22v-6m6 6v-6" /><path d="M7 12c-2 1-3 3-3 5h4m9-5c2 1 3 3 3 5h-4" /></svg>,
  // layers
  <svg key="layers" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m12 2 10 6-10 6L2 8z" /><path d="m2 12 10 6 10-6" /><path d="m2 17 10 6 10-6" /></svg>,
  // shield
  <svg key="shield" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  // code
  <svg key="code" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
];

/* ── Sections ── */

const InnovationsHero = () => {
  const { lang } = useLang();
  const t = innovT[lang].hero;
  return (
    <section className="relative bg-primary text-primary-foreground pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
      <HeroBackground />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <Fade>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-5">{t.eyebrow}</p>
        </Fade>
        <Fade delay={150}>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 max-w-4xl mx-auto">{t.title}</h1>
        </Fade>
        <Fade delay={300}>
          <p className="font-sans text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-3xl mx-auto">{t.subtitle}</p>
        </Fade>
      </div>
    </section>
  );
};

const VisionBlock = () => {
  const { lang } = useLang();
  const t = innovT[lang].vision;
  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <Fade>
          <h2 className="font-serif text-2xl md:text-4xl font-medium leading-tight mb-10">{t.title}</h2>
        </Fade>
        <Fade delay={150}>
          <p className="font-sans text-base md:text-lg text-foreground/70 leading-relaxed mb-10 max-w-3xl mx-auto">{t.text}</p>
        </Fade>
        <Fade delay={300}>
          <div className="border-l-2 border-accent pl-6 text-left max-w-2xl mx-auto">
            <p className="font-serif text-lg md:text-xl italic text-foreground/80 leading-relaxed">{t.closing}</p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

const AIBlock = () => {
  const { lang } = useLang();
  const t = innovT[lang].ai;
  const navigate = useNavigate();
  return (
    <section className="py-24 lg:py-36 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left – text */}
          <div>
            <Fade>
              <span className="inline-block font-sans text-xs tracking-[0.25em] uppercase border border-accent text-accent px-4 py-1.5 mb-6">{t.badge}</span>
            </Fade>
            <Fade delay={100}>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-6">{t.title}</h2>
            </Fade>
            <Fade delay={200}>
              <p className="font-sans text-sm md:text-base text-primary-foreground/65 leading-relaxed mb-8">{t.text}</p>
            </Fade>
            <Fade delay={350}>
              <button
                onClick={() => navigate(neuralRoutes[lang])}
                className="font-sans text-sm tracking-wider uppercase border border-accent text-accent px-8 py-3.5 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                {t.cta}
              </button>
            </Fade>
          </div>

          {/* Right – feature grid */}
          <Fade delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {t.points.map((point, i) => (
                <div key={i} className="border border-primary-foreground/10 p-6 flex flex-col items-start gap-3 hover:border-primary-foreground/25 transition-colors duration-300">
                  <span className="text-accent">{icons[i]}</span>
                  <p className="font-sans text-sm text-primary-foreground/80 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

const TeaFestBlock = () => {
  const { lang } = useLang();
  const t = innovT[lang].teafest;
  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <Fade>
            <div className="aspect-[4/3] bg-muted flex items-center justify-center">
              <span className="font-serif text-4xl text-muted-foreground/30">TF</span>
            </div>
          </Fade>

          {/* Text */}
          <div>
            <Fade>
              <span className="inline-block font-sans text-xs tracking-[0.25em] uppercase border border-accent text-accent px-4 py-1.5 mb-6">{t.badge}</span>
            </Fade>
            <Fade delay={100}>
              <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight mb-6">{t.title}</h2>
            </Fade>
            <Fade delay={200}>
              <p className="font-sans text-sm md:text-base text-foreground/70 leading-relaxed mb-4">{t.text1}</p>
            </Fade>
            <Fade delay={250}>
              <p className="font-sans text-sm md:text-base text-foreground/70 leading-relaxed mb-8">{t.text2}</p>
            </Fade>
            <Fade delay={350}>
              <a href="#" className="inline-block font-sans text-sm tracking-wider uppercase border border-foreground/30 text-foreground px-8 py-3.5 hover:border-foreground hover:bg-foreground/5 transition-all duration-300">
                {t.cta}
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

const OtherFrontsBlock = () => {
  const { lang } = useLang();
  const t = innovT[lang].other;
  return (
    <section className="py-24 lg:py-36 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <Fade>
          <h2 className="font-serif text-2xl md:text-4xl font-medium leading-tight mb-10">{t.title}</h2>
        </Fade>
        <Fade delay={150}>
          <p className="font-sans text-sm md:text-base text-primary-foreground/65 leading-relaxed max-w-3xl mx-auto mb-12">{t.text}</p>
        </Fade>
        <Fade delay={300}>
          <div className="flex justify-center gap-12">
            <div className="flex flex-col items-center gap-3">
              <span className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center text-accent text-xl">⚡</span>
              <span className="font-sans text-xs tracking-wider uppercase text-primary-foreground/50">HackaTEA</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center text-accent text-xl">🎨</span>
              <span className="font-sans text-xs tracking-wider uppercase text-primary-foreground/50">NFTs do Chá</span>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

const ClosingBlock = () => {
  const { lang } = useLang();
  const t = innovT[lang].closing;
  const navigate = useNavigate();
  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <Fade>
          <div className="w-12 h-px bg-accent mx-auto mb-10" />
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-medium italic leading-tight mb-8">{t.title}</h2>
        </Fade>
        <Fade delay={150}>
          <p className="font-sans text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-12">{t.text}</p>
        </Fade>
        <Fade delay={300}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate(programsRoutes[lang])}
              className="font-sans text-sm tracking-wider uppercase bg-primary text-primary-foreground px-8 py-3.5 hover:bg-primary/90 transition-all duration-300"
            >
              {t.cta1}
            </button>
            <a
              href="#society"
              className="inline-flex items-center justify-center font-sans text-sm tracking-wider uppercase border border-foreground/30 text-foreground px-8 py-3.5 hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
            >
              {t.cta2}
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

/* ── Page ── */

const InnovationsContent = () => (
  <div className="min-h-screen">
    <Navbar />
    <InnovationsHero />
    <VisionBlock />
    <AIBlock />
    <TeaFestBlock />
    <OtherFrontsBlock />
    <ClosingBlock />
    <Footer />
  </div>
);

const InnovationsPage = ({ lang = "pt" }: { lang?: Lang }) => (
  <LanguageProvider lang={lang}>
    <InnovationsContent />
  </LanguageProvider>
);

export default InnovationsPage;
