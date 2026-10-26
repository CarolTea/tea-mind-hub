import { useEffect, useRef, useState } from "react";
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
      p1: "A Tea Mind Society é uma rede privada de profissionais do chá, criada para conectar pessoas que estão atuando, pesquisando, desenvolvendo projetos ou construindo sua trajetória no mercado brasileiro do chá.",
      p2: "Um espaço intimista, dentro do ecossistema Tea Mind, onde diferentes experiências e conhecimentos se encontram para ampliar perspectivas, compartilhar desafios e contribuir para o desenvolvimento do nosso setor.",
      listTitle: "A Society é para quem:",
      list: [
        "Atua profissionalmente com chá ou está construindo esse caminho.",
        "Desenvolve negócios, serviços, experiências, educação, pesquisas ou projetos relacionados ao chá.",
        "Deseja trocar conhecimentos e experiências com outros profissionais.",
        "Acredita que o mercado brasileiro do chá cresce quando seus profissionais se conectam e compartilham o que sabem.",
      ],
      note: "A participação acontece exclusivamente por convite da Tea Mind, considerando a afinidade com esse propósito.",
    },
    ext: {
      title: "Uma extensão viva do ecossistema Tea Mind.",
      p1: "Na Society, o conhecimento continua circulando e novas conexões podem nascer das experiências de quem está construindo o mercado do chá.",
      p2: "Em um grupo privado de WhatsApp, reunimos profissionais com diferentes trajetórias, incluindo alunos, ex-alunos, Special Partners e convidados da Tea Mind.",
      itemsTitle: "O que você encontra na Society:",
      items: [
        "Conversas sobre projetos, negócios, serviços e desafios reais do mercado do chá.",
        "Trocas de experiências, conhecimentos e perspectivas entre profissionais.",
        "Reflexões e aprendizados que Carla Vicente compartilha a partir de sua atuação no mercado.",
        "Conexões com pessoas de diferentes especialidades e áreas de atuação.",
        "Acesso antecipado a informações e inscrições de iniciativas selecionadas da Tea Mind.",
      ],
      note: "A Society não é um curso, mentoria ou grupo de aulas. Não existe calendário fixo de conteúdos ou encontros obrigatórios. Cada membro pode acompanhar e contribuir com as conversas quando desejar.",
      closing: "Aqui, o que nos une é o desejo de fortalecer nossa atuação como profissionais e contribuir para que a cultura do chá se expanda, alcançando cada vez mais brasileiros.",
    },
    closing: {
      title: "Continuar perto também é uma forma de crescer.",
      paragraphs: [
        "A Tea Mind Society foi criada para quem entende que construir uma trajetória profissional no chá é um processo contínuo.",
        "Mais do que permanecer em contato, queremos aproximar profissionais que compartilham um propósito: contribuir para o desenvolvimento do mercado brasileiro do chá.",
        "A participação na Society é seletiva e acontece mediante convite ou aprovação da Tea Mind.",
      ],
      question: "Você atua ou está construindo seu caminho profissional no mercado do chá e se identifica com esse propósito?",
      invite: "Conheça nossa proposta e entre em contato para manifestar seu interesse em participar.",
      cta: "Manifeste seu interesse",
    },
  },
  en: {
    hero: {
      eyebrow: "Tea Mind Society",
      title: "No one builds a market alone.",
      p1: "The Tea Mind Society is a private network of tea professionals, created to connect people who are working, researching, developing projects, or building their careers in the Brazilian tea market.",
      p2: "An intimate space within the Tea Mind ecosystem, where different experiences and knowledge come together to broaden perspectives, share challenges, and contribute to the development of our sector.",
      listTitle: "The Society is for those who:",
      list: [
        "Work professionally with tea or are building that path.",
        "Develop businesses, services, experiences, education, research, or projects related to tea.",
        "Wish to exchange knowledge and experiences with other professionals.",
        "Believe the Brazilian tea market grows when its professionals connect and share what they know.",
      ],
      note: "Participation is exclusively by invitation from Tea Mind, based on affinity with this purpose.",
    },
    ext: {
      title: "A living extension of the Tea Mind ecosystem.",
      p1: "In the Society, knowledge keeps flowing and new connections can arise from the experiences of those building the tea market.",
      p2: "In a private WhatsApp group, we bring together professionals with different paths, including students, former students, Special Partners, and Tea Mind guests.",
      itemsTitle: "What you will find in the Society:",
      items: [
        "Conversations about projects, businesses, services, and real challenges in the tea market.",
        "Exchanges of experiences, knowledge, and perspectives among professionals.",
        "Reflections and insights Carla Vicente shares from her work in the market.",
        "Connections with people from different specialties and fields.",
        "Early access to information and registrations for selected Tea Mind initiatives.",
      ],
      note: "The Society is not a course, mentorship, or class group. There is no fixed content calendar or mandatory meetings. Each member can follow and contribute to the conversations whenever they wish.",
      closing: "Here, what unites us is the desire to strengthen our work as professionals and help tea culture expand, reaching more and more Brazilians.",
    },
    closing: {
      title: "Staying close is also a way to grow.",
      paragraphs: [
        "The Tea Mind Society was created for those who understand that building a professional career in tea is a continuous process.",
        "More than staying in touch, we want to bring together professionals who share a purpose: contributing to the development of the Brazilian tea market.",
        "Participation in the Society is selective and happens by invitation or approval from Tea Mind.",
      ],
      question: "Do you work in, or are you building your professional path in, the tea market and identify with this purpose?",
      invite: "Learn about our proposal and get in touch to express your interest in joining.",
      cta: "Express your interest",
    },
  },
  es: {
    hero: {
      eyebrow: "Tea Mind Society",
      title: "Nadie construye un mercado solo.",
      p1: "La Tea Mind Society es una red privada de profesionales del té, creada para conectar a personas que están actuando, investigando, desarrollando proyectos o construyendo su trayectoria en el mercado brasileño del té.",
      p2: "Un espacio íntimo, dentro del ecosistema Tea Mind, donde diferentes experiencias y conocimientos se encuentran para ampliar perspectivas, compartir desafíos y contribuir al desarrollo de nuestro sector.",
      listTitle: "La Society es para quien:",
      list: [
        "Trabaja profesionalmente con té o está construyendo ese camino.",
        "Desarrolla negocios, servicios, experiencias, educación, investigaciones o proyectos relacionados con el té.",
        "Desea intercambiar conocimientos y experiencias con otros profesionales.",
        "Cree que el mercado brasileño del té crece cuando sus profesionales se conectan y comparten lo que saben.",
      ],
      note: "La participación se da exclusivamente por invitación de Tea Mind, considerando la afinidad con este propósito.",
    },
    ext: {
      title: "Una extensión viva del ecosistema Tea Mind.",
      p1: "En la Society, el conocimiento sigue circulando y nuevas conexiones pueden nacer de las experiencias de quienes están construyendo el mercado del té.",
      p2: "En un grupo privado de WhatsApp, reunimos a profesionales con diferentes trayectorias, incluyendo alumnos, exalumnos, Special Partners e invitados de Tea Mind.",
      itemsTitle: "Lo que encuentras en la Society:",
      items: [
        "Conversaciones sobre proyectos, negocios, servicios y desafíos reales del mercado del té.",
        "Intercambios de experiencias, conocimientos y perspectivas entre profesionales.",
        "Reflexiones y aprendizajes que Carla Vicente comparte a partir de su actuación en el mercado.",
        "Conexiones con personas de diferentes especialidades y áreas de actuación.",
        "Acceso anticipado a información e inscripciones de iniciativas seleccionadas de Tea Mind.",
      ],
      note: "La Society no es un curso, mentoría ni grupo de clases. No existe un calendario fijo de contenidos ni encuentros obligatorios. Cada miembro puede acompañar y contribuir a las conversaciones cuando lo desee.",
      closing: "Aquí, lo que nos une es el deseo de fortalecer nuestra actuación como profesionales y contribuir a que la cultura del té se expanda, llegando a cada vez más brasileños.",
    },
    closing: {
      title: "Seguir cerca también es una forma de crecer.",
      paragraphs: [
        "La Tea Mind Society fue creada para quienes entienden que construir una trayectoria profesional en el té es un proceso continuo.",
        "Más que mantenernos en contacto, queremos acercar a profesionales que comparten un propósito: contribuir al desarrollo del mercado brasileño del té.",
        "La participación en la Society es selectiva y se da mediante invitación o aprobación de Tea Mind.",
      ],
      question: "¿Trabajas o estás construyendo tu camino profesional en el mercado del té y te identificas con este propósito?",
      invite: "Conoce nuestra propuesta y ponte en contacto para manifestar tu interés en participar.",
      cta: "Manifiesta tu interés",
    },
  },
} as const;

const featureIcons = [MessageCircle, Users, BookOpen, TrendingUp, Calendar];

/* ── Content ── */
const SocietyContent = () => {
  const { lang } = useLang();
  const t = societyT[lang];

  const WHATSAPP_NUMBER = "5521981126981";
  const societyMessages = {
    pt: "Olá! Gostaria de manifestar meu interesse em participar da Tea Mind Society.",
    en: "Hi! I'd like to express my interest in joining the Tea Mind Society.",
    es: "¡Hola! Me gustaría manifestar mi interés en participar en la Tea Mind Society.",
  } as const;
  const societyHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(societyMessages[lang])}`;
  const light = "text-[hsl(40,20%,94%)]";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* BLOCK 1 */}
      <section className={`relative min-h-[90vh] flex items-center justify-center bg-[hsl(25,30%,14%)] ${light} overflow-hidden`}>
        <HeroBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <Fade><span className={`inline-block text-xs tracking-[0.35em] uppercase font-sans mb-6 ${light}/60`}>{t.hero.eyebrow}</span></Fade>
          <Fade delay={150}><h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8">{t.hero.title}</h1></Fade>
          <Fade delay={300}>
            <p className={`text-base md:text-lg leading-relaxed ${light}/80 max-w-3xl mx-auto mb-6`}>{t.hero.p1}</p>
            <p className={`text-base md:text-lg leading-relaxed ${light}/70 max-w-3xl mx-auto mb-12`}>{t.hero.p2}</p>
          </Fade>
          <Fade delay={450}>
            <div className="text-left max-w-xl mx-auto">
              <p className={`text-sm uppercase tracking-[0.2em] font-sans mb-4 ${light}/60`}>{t.hero.listTitle}</p>
              <ul className="space-y-3">
                {t.hero.list.map((item, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm md:text-base ${light}/80`}>
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 ${light}/40 flex-shrink-0`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-8 text-sm md:text-base leading-relaxed ${light}/70`}>{t.hero.note}</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* BLOCK 2 */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <Fade><h2 className="font-serif text-3xl md:text-4xl text-center mb-8 text-foreground">{t.ext.title}</h2></Fade>
          <Fade delay={100}>
            <p className="text-base md:text-lg leading-relaxed text-foreground/70 text-center max-w-3xl mx-auto mb-4">{t.ext.p1}</p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/70 text-center max-w-3xl mx-auto mb-16">{t.ext.p2}</p>
          </Fade>
          <Fade delay={200}><p className="text-xs uppercase tracking-[0.3em] font-sans text-foreground/50 text-center mb-10">{t.ext.itemsTitle}</p></Fade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.ext.items.map((item, i) => {
              const Icon = featureIcons[i];
              return (
                <Fade key={i} delay={300 + i * 100}>
                  <div className="flex items-start gap-4 p-6 h-full rounded-lg border border-foreground/10 hover:border-foreground/25 transition-colors duration-500">
                    <Icon className="w-6 h-6 mt-0.5 flex-shrink-0 text-foreground/40" />
                    <p className="text-sm md:text-base leading-relaxed text-foreground/80">{item}</p>
                  </div>
                </Fade>
              );
            })}
          </div>
          <Fade delay={300}><p className="max-w-3xl mx-auto mt-14 text-center text-sm md:text-base leading-relaxed text-foreground/70">{t.ext.note}</p></Fade>
          <Fade delay={400}>
            <div className="border-l-2 border-foreground/20 pl-6 text-left max-w-2xl mx-auto mt-12">
              <p className="text-lg md:text-xl font-serif italic text-foreground/70">{t.ext.closing}</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* BLOCK 3 */}
      <section className={`py-24 md:py-32 bg-[hsl(25,30%,14%)] ${light}`}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Fade><h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">{t.closing.title}</h2></Fade>
          <Fade delay={150}>
            {t.closing.paragraphs.map((p, i) => (
              <p key={i} className={`text-base md:text-lg leading-relaxed ${light}/70 mb-5`}>{p}</p>
            ))}
          </Fade>
          <Fade delay={300}>
            <p className="font-serif italic text-xl md:text-2xl mt-10 mb-4">{t.closing.question}</p>
            <p className={`text-base leading-relaxed ${light}/70 mb-12`}>{t.closing.invite}</p>
            <a href={societyHref} target="_blank" rel="noopener noreferrer"
              className={`inline-block px-8 py-4 border border-[hsl(40,20%,94%)]/30 text-sm tracking-wider uppercase font-sans hover:bg-[hsl(40,20%,94%)]/10 transition-colors duration-500`}>
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
