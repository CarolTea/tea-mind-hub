import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Mic, Video, CalendarDays, Lightbulb } from "lucide-react";

/* ─── Fade helper ─── */
const Fade = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
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

/* ─── HeroBackground SVG ─── */
const HeroBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 600" fill="none">
    <path d="M0 300 Q300 100 600 300 T1200 300" stroke="currentColor" strokeWidth="1" className="hero-line" />
    <path d="M0 350 Q400 150 800 350 T1200 250" stroke="currentColor" strokeWidth="0.5" className="hero-line-reverse" />
    <circle cx="300" cy="200" r="3" fill="currentColor" className="animate-pulse" />
    <circle cx="900" cy="350" r="2" fill="currentColor" className="animate-pulse" style={{ animationDelay: "1s" }} />
    <circle cx="600" cy="150" r="2.5" fill="currentColor" className="animate-pulse" style={{ animationDelay: "2s" }} />
  </svg>
);

/* ─── Translations ─── */
const partnersT = {
  pt: {
    hero: {
      eyebrow: "Tea Mind Special Partners",
      title: "Os melhores encontros do mercado do chá acontecem aqui.",
      subtitle: "A Tea Mind reúne especialistas, professores parceiros e profissionais convidados que enriquecem a jornada dos nossos alunos com conhecimento, experiência prática e diferentes visões sobre o mercado do chá.",
    },
    vision: {
      title: "Um ecossistema se fortalece quando os melhores se encontram.",
      text: "Ao longo da nossa trajetória, entendemos que construir mercado também significa criar pontes entre diferentes expertises, repertórios e experiências. Por isso, a Tea Mind se conecta a parceiros que agregam valor real à formação, à inovação e ao desenvolvimento profissional dos nossos alunos.",
      closing: "Cada partner amplia o ecossistema Tea Mind com sua própria bagagem — fortalecendo uma jornada mais rica, mais conectada e mais relevante para o mercado do chá.",
    },
    partners: {
      title: "Special Partners em Destaque",
      cards: [
        { name: "Partner 1", specialty: "Especialidade", bio: "Especialista reconhecido na área, contribui com a Tea Mind por meio de especializações, aulas especiais e conteúdos estratégicos para o mercado do chá." },
        { name: "Partner 2", specialty: "Especialidade", bio: "Profissional com vasta experiência prática, participa de eventos, experiências e projetos de inovação dentro do ecossistema Tea Mind." },
        { name: "Partner 3", specialty: "Especialidade", bio: "Referência em sua área de atuação, enriquece a jornada dos alunos com diferentes visões e repertórios sobre o mercado do chá." },
        { name: "Partner 4", specialty: "Especialidade", bio: "Contribui com a Tea Mind por meio de especializações, aulas especiais, experiências, eventos ou conteúdos estratégicos." },
        { name: "Partner 5", specialty: "Especialidade", bio: "Profissional convidado que agrega valor real à formação e ao desenvolvimento profissional dos nossos alunos." },
        { name: "Partner 6", specialty: "Especialidade", bio: "Especialista que fortalece o ecossistema Tea Mind com conhecimento técnico e visão de mercado." },
      ],
    },
    participate: {
      title: "Diferentes especialistas, diferentes contribuições, uma mesma visão de excelência.",
      text: "Os partners da Tea Mind participam de diferentes formas dentro do ecossistema, sempre com o objetivo de ampliar a experiência dos alunos e fortalecer a construção do mercado do chá.",
      items: ["Especializações", "Aulas e encontros especiais", "Lives e conteúdos exclusivos", "Experiências e eventos", "Projetos de inovação e colaboração"],
    },
    student: {
      title: "Aprender com quem também constrói o mercado amplia a jornada.",
      text: "Na Tea Mind, o aluno não acessa apenas uma metodologia própria e sólida. Ele também se conecta a diferentes especialistas que enriquecem sua visão, ampliam seu repertório e aproximam sua trajetória da prática real do mercado.",
      closing: "É assim que um hub se diferencia: pela qualidade das conexões que é capaz de reunir.",
    },
    closing: {
      title: "A Tea Mind não é apenas um hub de formação. É um ecossistema onde os melhores se encontram.",
      cta1: "Conheça os Programas",
      cta2: "Explorar o ecossistema Tea Mind",
    },
  },
  en: {
    hero: {
      eyebrow: "Tea Mind Special Partners",
      title: "The best encounters in the tea market happen here.",
      subtitle: "Tea Mind brings together specialists, partner instructors, and guest professionals who enrich our students' journey with knowledge, practical experience, and diverse perspectives on the tea market.",
    },
    vision: {
      title: "An ecosystem grows stronger when the best come together.",
      text: "Throughout our journey, we understood that building a market also means creating bridges between different expertise, repertoires, and experiences. That's why Tea Mind connects with partners who add real value to training, innovation, and the professional development of our students.",
      closing: "Each partner expands the Tea Mind ecosystem with their own background — strengthening a richer, more connected, and more relevant journey for the tea market.",
    },
    partners: {
      title: "Featured Special Partners",
      cards: [
        { name: "Partner 1", specialty: "Specialty", bio: "A recognized specialist in their field, contributing to Tea Mind through specializations, special classes, and strategic content for the tea market." },
        { name: "Partner 2", specialty: "Specialty", bio: "A professional with extensive practical experience, participating in events, experiences, and innovation projects within the Tea Mind ecosystem." },
        { name: "Partner 3", specialty: "Specialty", bio: "A reference in their area, enriching students' journey with different perspectives and repertoires on the tea market." },
        { name: "Partner 4", specialty: "Specialty", bio: "Contributes to Tea Mind through specializations, special classes, experiences, events, or strategic content." },
        { name: "Partner 5", specialty: "Specialty", bio: "A guest professional who adds real value to training and professional development of our students." },
        { name: "Partner 6", specialty: "Specialty", bio: "A specialist who strengthens the Tea Mind ecosystem with technical knowledge and market vision." },
      ],
    },
    participate: {
      title: "Different specialists, different contributions, one shared vision of excellence.",
      text: "Tea Mind partners participate in different ways within the ecosystem, always aiming to enhance students' experience and strengthen the tea market.",
      items: ["Specializations", "Special classes and meetings", "Exclusive lives and content", "Experiences and events", "Innovation and collaboration projects"],
    },
    student: {
      title: "Learning from those who also build the market expands the journey.",
      text: "At Tea Mind, students don't just access a solid proprietary methodology. They also connect with different specialists who enrich their vision, broaden their repertoire, and bring their trajectory closer to real market practice.",
      closing: "That's how a hub stands out: by the quality of the connections it can bring together.",
    },
    closing: {
      title: "Tea Mind is not just a training hub. It's an ecosystem where the best come together.",
      cta1: "Discover Programs",
      cta2: "Explore the Tea Mind Ecosystem",
    },
  },
  es: {
    hero: {
      eyebrow: "Tea Mind Special Partners",
      title: "Los mejores encuentros del mercado del té ocurren aquí.",
      subtitle: "Tea Mind reúne especialistas, profesores asociados y profesionales invitados que enriquecen la jornada de nuestros alumnos con conocimiento, experiencia práctica y diferentes visiones sobre el mercado del té.",
    },
    vision: {
      title: "Un ecosistema se fortalece cuando los mejores se encuentran.",
      text: "A lo largo de nuestra trayectoria, entendimos que construir mercado también significa crear puentes entre diferentes expertises, repertorios y experiencias. Por eso, Tea Mind se conecta con partners que agregan valor real a la formación, la innovación y el desarrollo profesional de nuestros alumnos.",
      closing: "Cada partner amplía el ecosistema Tea Mind con su propia trayectoria — fortaleciendo una jornada más rica, más conectada y más relevante para el mercado del té.",
    },
    partners: {
      title: "Special Partners Destacados",
      cards: [
        { name: "Partner 1", specialty: "Especialidad", bio: "Especialista reconocido en su área, contribuye con Tea Mind a través de especializaciones, clases especiales y contenidos estratégicos para el mercado del té." },
        { name: "Partner 2", specialty: "Especialidad", bio: "Profesional con amplia experiencia práctica, participa en eventos, experiencias y proyectos de innovación dentro del ecosistema Tea Mind." },
        { name: "Partner 3", specialty: "Especialidad", bio: "Referencia en su área de actuación, enriquece la jornada de los alumnos con diferentes visiones y repertorios sobre el mercado del té." },
        { name: "Partner 4", specialty: "Especialidad", bio: "Contribuye con Tea Mind a través de especializaciones, clases especiales, experiencias, eventos o contenidos estratégicos." },
        { name: "Partner 5", specialty: "Especialidad", bio: "Profesional invitado que agrega valor real a la formación y al desarrollo profesional de nuestros alumnos." },
        { name: "Partner 6", specialty: "Especialidad", bio: "Especialista que fortalece el ecosistema Tea Mind con conocimiento técnico y visión de mercado." },
      ],
    },
    participate: {
      title: "Diferentes especialistas, diferentes contribuciones, una misma visión de excelencia.",
      text: "Los partners de Tea Mind participan de diferentes formas dentro del ecosistema, siempre con el objetivo de ampliar la experiencia de los alumnos y fortalecer la construcción del mercado del té.",
      items: ["Especializaciones", "Clases y encuentros especiales", "Lives y contenidos exclusivos", "Experiencias y eventos", "Proyectos de innovación y colaboración"],
    },
    student: {
      title: "Aprender con quienes también construyen el mercado amplía la jornada.",
      text: "En Tea Mind, el alumno no accede solo a una metodología propia y sólida. También se conecta con diferentes especialistas que enriquecen su visión, amplían su repertorio y acercan su trayectoria a la práctica real del mercado.",
      closing: "Así es como un hub se diferencia: por la calidad de las conexiones que es capaz de reunir.",
    },
    closing: {
      title: "Tea Mind no es solo un hub de formación. Es un ecosistema donde los mejores se encuentran.",
      cta1: "Conocer los Programas",
      cta2: "Explorar el ecosistema Tea Mind",
    },
  },
};

const programsRoutes = { en: "/programs", es: "/es/programas", pt: "/pt/programas" } as const;
const homeRoutes = { en: "/", es: "/es", pt: "/pt" } as const;

const participateIcons = [BookOpen, Mic, Video, CalendarDays, Lightbulb];

/* ─── Content ─── */
const PartnersContent = () => {
  const { lang, t: globalT } = useLang();
  const navigate = useNavigate();
  const tx = partnersT[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* BLOCK 1 — Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 bg-foreground text-background overflow-hidden">
        <HeroBackground />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <Fade>
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-background/60 mb-5">{tx.hero.eyebrow}</p>
          </Fade>
          <Fade delay={150}>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">{tx.hero.title}</h1>
          </Fade>
          <Fade delay={300}>
            <p className="font-sans text-base md:text-lg text-background/70 leading-relaxed max-w-3xl mx-auto">{tx.hero.subtitle}</p>
          </Fade>
        </div>
      </section>

      {/* BLOCK 2 — Vision */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <Fade>
            <h2 className="font-serif text-2xl md:text-4xl font-medium text-foreground leading-tight mb-10">{tx.vision.title}</h2>
          </Fade>
          <Fade delay={150}>
            <div className="border-l-2 border-accent pl-6 text-left max-w-2xl mx-auto mb-8">
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">{tx.vision.text}</p>
            </div>
          </Fade>
          <Fade delay={300}>
            <p className="font-sans text-base text-muted-foreground italic max-w-2xl mx-auto">{tx.vision.closing}</p>
          </Fade>
        </div>
      </section>

      {/* BLOCK 3 — Partner Cards */}
      <section className="py-28 lg:py-36 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Fade>
            <h2 className="font-serif text-2xl md:text-4xl font-medium text-center mb-16">{tx.partners.title}</h2>
          </Fade>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tx.partners.cards.map((card, i) => (
              <Fade key={i} delay={i * 100}>
                <div className="group border border-background/10 hover:border-background/30 transition-all duration-500 overflow-hidden">
                  <div className="aspect-square bg-background/5 flex items-center justify-center overflow-hidden">
                    <div className="w-24 h-24 rounded-full bg-background/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <span className="font-serif text-2xl font-medium text-background/40">
                        {card.name.split(" ").map(w => w[0]).join("")}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-medium mb-1">{card.name}</h3>
                    <span className="inline-block font-sans text-xs tracking-wider uppercase text-accent mb-3">{card.specialty}</span>
                    <p className="font-sans text-sm text-background/60 leading-relaxed">{card.bio}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 4 — How Partners Participate */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Fade>
            <h2 className="font-serif text-2xl md:text-4xl font-medium text-foreground text-center mb-6">{tx.participate.title}</h2>
          </Fade>
          <Fade delay={100}>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-16">{tx.participate.text}</p>
          </Fade>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {tx.participate.items.map((item, i) => {
              const Icon = participateIcons[i];
              return (
                <Fade key={i} delay={i * 80}>
                  <div className="flex flex-col items-center text-center p-6 border border-border/60 hover:border-foreground/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
                    <span className="font-sans text-sm font-medium text-foreground">{item}</span>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOCK 5 — Student Value */}
      <section className="py-28 lg:py-36 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <Fade>
            <h2 className="font-serif text-2xl md:text-4xl font-medium leading-tight mb-8">{tx.student.title}</h2>
          </Fade>
          <Fade delay={150}>
            <p className="font-sans text-base md:text-lg text-background/70 leading-relaxed max-w-3xl mx-auto mb-12">{tx.student.text}</p>
          </Fade>
          <Fade delay={300}>
            <div className="border-l-2 border-accent pl-6 text-left max-w-2xl mx-auto">
              <p className="font-serif text-lg md:text-xl italic text-background/80">{tx.student.closing}</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* BLOCK 6 — Closing */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <Fade>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-foreground leading-snug mb-14 max-w-3xl mx-auto">{tx.closing.title}</p>
          </Fade>
          <Fade delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate(programsRoutes[lang])}
                className="px-8 py-3.5 bg-foreground text-background text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:bg-foreground/90"
              >
                {tx.closing.cta1}
              </button>
              <button
                onClick={() => navigate(homeRoutes[lang])}
                className="px-8 py-3.5 border border-foreground/30 text-foreground text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:border-foreground/60"
              >
                {tx.closing.cta2}
              </button>
            </div>
          </Fade>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const PartnersPage = ({ lang = "pt" }: { lang?: Lang }) => (
  <LanguageProvider lang={lang}>
    <PartnersContent />
  </LanguageProvider>
);

export default PartnersPage;
