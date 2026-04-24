import { useEffect, useRef, useState, type ReactNode } from "react";
import { Calendar, Sparkles, Building2, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

const WHATSAPP_NUMBER = "5521981126981";
const waMessages = {
  pt: "Olá! Gostaria de saber mais sobre os eventos personalizados, corporativos e temáticos da Tea Mind.",
  en: "Hi! I'd like to know more about Tea Mind's personalized, corporate and themed events.",
  es: "¡Hola! Me gustaría saber más sobre los eventos personalizados, corporativos y temáticos de Tea Mind.",
} as const;

const Fade = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => {
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

const HeroBackground = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="xMidYMid slice">
    <path d="M0 320 Q360 180 720 320 T1440 300" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.18" className="hero-line" />
    <path d="M0 400 Q480 320 960 380 T1440 360" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.12" className="hero-line-reverse" />
    <circle cx="720" cy="300" r="3" fill="hsl(var(--accent))" opacity="0.25"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="4s" repeatCount="indefinite" /></circle>
    <circle cx="360" cy="350" r="2" fill="hsl(var(--accent))" opacity="0.18"><animate attributeName="opacity" values="0.05;0.25;0.05" dur="5s" repeatCount="indefinite" /></circle>
    <circle cx="1100" cy="280" r="2.5" fill="hsl(var(--accent))" opacity="0.18"><animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" /></circle>
  </svg>
);

const eventsT = {
  pt: {
    hero: {
      eyebrow: "Tea Mind Eventos",
      title: "Experiências de chá que viram linguagem de marca, conexão e memória.",
      subtitle: "Eventos personalizados, corporativos e temáticos com curadoria sensorial e narrativa autoral. Da concepção à experiência final, criamos encontros únicos.",
      cta: "Falar no WhatsApp",
    },
    intro: {
      title: "Cada evento é um universo sensorial construído sob medida.",
      text: "Mais do que servir chá, criamos atmosferas que envolvem o público em uma experiência completa, técnica, estética e emocional. Trabalhamos com profundidade de repertório, refinamento e visão de negócio para entregar encontros memoráveis.",
    },
    types: {
      title: "Formatos de eventos",
      items: [
        { icon: Sparkles, title: "Eventos Personalizados", text: "Para celebrações privadas, lançamentos e ocasiões especiais que pedem uma experiência sensorial única." },
        { icon: Building2, title: "Eventos Corporativos", text: "Experiências para marcas, equipes e clientes estratégicos que valorizam sofisticação e diferencial." },
        { icon: Heart, title: "Eventos Temáticos", text: "Encontros com narrativa autoral que conectam chá, cultura, gastronomia e experiência de marca." },
      ],
    },
    diff: {
      title: "Por que escolher a Tea Mind",
      items: [
        "Curadoria sensorial assinada por especialistas reconhecidas no mercado do chá",
        "Narrativa autoral que conecta cada experiência ao propósito da marca ou ocasião",
        "Padrão premium de execução, do conceito ao detalhe final",
        "Mais de uma década construindo o mercado do chá no Brasil",
      ],
    },
    closing: {
      title: "Vamos criar a sua experiência.",
      text: "Conte sobre o seu projeto e desenhamos um evento à altura da sua marca, ocasião ou celebração.",
      cta: "Falar no WhatsApp",
    },
  },
  en: {
    hero: {
      eyebrow: "Tea Mind Events",
      title: "Tea experiences that become brand language, connection and memory.",
      subtitle: "Personalized, corporate and themed events with sensory curation and signature narrative. From concept to execution, we craft unique gatherings.",
      cta: "Chat on WhatsApp",
    },
    intro: {
      title: "Every event is a sensory universe built to measure.",
      text: "More than serving tea, we create atmospheres that immerse audiences in a complete experience, technical, aesthetic and emotional. We work with depth of repertoire, refinement and business vision to deliver memorable gatherings.",
    },
    types: {
      title: "Event formats",
      items: [
        { icon: Sparkles, title: "Personalized Events", text: "For private celebrations, launches and special occasions that call for a unique sensory experience." },
        { icon: Building2, title: "Corporate Events", text: "Experiences for brands, teams and strategic clients who value sophistication and differentiation." },
        { icon: Heart, title: "Themed Events", text: "Gatherings with signature narrative that connect tea, culture, gastronomy and brand experience." },
      ],
    },
    diff: {
      title: "Why choose Tea Mind",
      items: [
        "Sensory curation signed by recognized specialists in the tea market",
        "Signature narrative connecting each experience to brand or occasion purpose",
        "Premium execution standard, from concept to final detail",
        "Over a decade building the tea market in Brazil",
      ],
    },
    closing: {
      title: "Let's create your experience.",
      text: "Tell us about your project and we'll design an event worthy of your brand, occasion or celebration.",
      cta: "Chat on WhatsApp",
    },
  },
  es: {
    hero: {
      eyebrow: "Tea Mind Eventos",
      title: "Experiencias de té que se convierten en lenguaje de marca, conexión y memoria.",
      subtitle: "Eventos personalizados, corporativos y temáticos con curaduría sensorial y narrativa de autor. De la concepción a la ejecución, creamos encuentros únicos.",
      cta: "Hablar por WhatsApp",
    },
    intro: {
      title: "Cada evento es un universo sensorial construido a medida.",
      text: "Más que servir té, creamos atmósferas que envuelven al público en una experiencia completa, técnica, estética y emocional. Trabajamos con profundidad de repertorio, refinamiento y visión de negocio para entregar encuentros memorables.",
    },
    types: {
      title: "Formatos de eventos",
      items: [
        { icon: Sparkles, title: "Eventos Personalizados", text: "Para celebraciones privadas, lanzamientos y ocasiones especiales que requieren una experiencia sensorial única." },
        { icon: Building2, title: "Eventos Corporativos", text: "Experiencias para marcas, equipos y clientes estratégicos que valoran sofisticación y diferencial." },
        { icon: Heart, title: "Eventos Temáticos", text: "Encuentros con narrativa de autor que conectan té, cultura, gastronomía y experiencia de marca." },
      ],
    },
    diff: {
      title: "Por qué elegir Tea Mind",
      items: [
        "Curaduría sensorial firmada por especialistas reconocidas en el mercado del té",
        "Narrativa de autor que conecta cada experiencia al propósito de marca u ocasión",
        "Estándar premium de ejecución, del concepto al detalle final",
        "Más de una década construyendo el mercado del té en Brasil",
      ],
    },
    closing: {
      title: "Vamos a crear tu experiencia.",
      text: "Cuéntanos sobre tu proyecto y diseñamos un evento a la altura de tu marca, ocasión o celebración.",
      cta: "Hablar por WhatsApp",
    },
  },
} as const;

const EventsContent = () => {
  const { lang } = useLang();
  const t = eventsT[lang];
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessages[lang])}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <HeroBackground />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <Fade>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-5">{t.hero.eyebrow}</p>
          </Fade>
          <Fade delay={150}>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 max-w-4xl mx-auto">{t.hero.title}</h1>
          </Fade>
          <Fade delay={300}>
            <p className="font-sans text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-3xl mx-auto mb-10">{t.hero.subtitle}</p>
          </Fade>
          <Fade delay={450}>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300"
            >
              {t.hero.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </Fade>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <Fade>
            <h2 className="font-serif text-2xl md:text-4xl font-medium leading-tight mb-8">{t.intro.title}</h2>
          </Fade>
          <Fade delay={150}>
            <p className="font-sans text-base md:text-lg text-foreground/70 leading-relaxed">{t.intro.text}</p>
          </Fade>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-24 lg:py-32 bg-[hsl(25,30%,14%)] text-[hsl(40,20%,94%)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Fade>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-6 text-center">{t.types.title}</p>
          </Fade>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {t.types.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Fade key={i} delay={150 + i * 120}>
                  <div className="border border-[hsl(40,20%,94%)]/15 p-8 h-full hover:border-accent transition-colors duration-500">
                    <Icon className="w-8 h-8 text-accent mb-6" />
                    <h3 className="font-serif text-xl md:text-2xl mb-4">{item.title}</h3>
                    <p className="font-sans text-sm text-[hsl(40,20%,94%)]/70 leading-relaxed">{item.text}</p>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Fade>
            <h2 className="font-serif text-2xl md:text-4xl font-medium leading-tight mb-12 text-center">{t.diff.title}</h2>
          </Fade>
          <ul className="space-y-5 max-w-3xl mx-auto">
            {t.diff.items.map((item, i) => (
              <Fade key={i} delay={100 + i * 100}>
                <li className="flex items-start gap-4 border-l-2 border-accent pl-6 py-2">
                  <span className="font-serif text-accent text-lg">0{i + 1}</span>
                  <span className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed">{item}</span>
                </li>
              </Fade>
            ))}
          </ul>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <Fade>
            <Calendar className="w-10 h-10 text-accent mx-auto mb-6" />
          </Fade>
          <Fade delay={100}>
            <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight mb-6">{t.closing.title}</h2>
          </Fade>
          <Fade delay={200}>
            <p className="font-sans text-base md:text-lg text-primary-foreground/70 leading-relaxed mb-10">{t.closing.text}</p>
          </Fade>
          <Fade delay={300}>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary hover:bg-accent/90 px-10 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300"
            >
              {t.closing.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </Fade>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const EventsPage = ({ lang }: { lang: Lang }) => (
  <LanguageProvider lang={lang}>
    <EventsContent />
  </LanguageProvider>
);

export default EventsPage;
