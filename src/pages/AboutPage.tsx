import { useEffect, useRef, useState, type ReactNode } from "react";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import carolImg from "@/assets/carol-tavares.png";
import carlaImg from "@/assets/carla-vicente.png";

const founderPhotos: Record<string, string> = {
  "Carol Tavares": carolImg,
  "Carla Vicente": carlaImg,
};

/* ─── Fade helper ─── */
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

/* ─── Translations ─── */
const aboutT = {
  pt: {
    hero: {
      eyebrow: "Quem está por trás da Tea Mind",
      title: "Conhecimento técnico, visão de negócio e leitura real do mercado do chá.",
      subtitle: "A Tea Mind nasceu da experiência real de quem conhece o mercado do chá, sua complexidade, suas oportunidades e seu potencial econômico e há mais de uma década transforma esse conhecimento em formação profissional, direção estratégica e construção de mercado.",
      subtitle2: "Não importa o tamanho do que você deseja construir no mercado do chá. Do profissional que atua de forma solo ao empreendedor que deseja estruturar um negócio maior, o que oferecemos é direção estratégica para transformar conhecimento em construção real.",
      statGrowth: "25%",
      statGrowthLabel: "Crescimento do consumo nacional de chá (2013–2020)",
      statTrend: "55,8 → 78,1",
      statTrendLabel: "Google Trends para 'chá' no Brasil (2018–2022)",
      closing: "A Tea Mind sabe exatamente como atuar nesse novo estágio. Formando profissionais preparados, estruturando negócios com visão de mercado e criando caminhos reais para quem deseja trabalhar com chá com profundidade, estratégia e valor.",
    },
    origin: {
      title: "Da experiência prática ao nascimento da Tea Mind",
      p1: "A Tea Mind Business Hub nasce da evolução de uma trajetória construída no mercado do chá com profundidade, consistência e visão pioneira. Ao longo dos anos, Carol Tavares e Carla Vicente formaram profissionais, mentoraram negócios, desenvolveram experiências sensoriais e gastronômicas, venderam chás e abriram caminhos em um setor que cresce, se diversifica e exige cada vez mais inteligência para ser organizado.",
      p2: "Sempre estivemos atentas a esse movimento. E foi justamente dessa leitura que surgiu uma convicção: o mercado do chá não se fortalece apenas com novos produtos, mas com formação profissional séria, visão de negócio e pessoas capazes de compreender, comunicar e elevar o valor desse mercado. Foi assim no mercado do vinho há 30 anos atrás e está sendo assim com o mercado do chá no Brasil.",
      closing: "A transição da Chá Pra Quê para a Tea Mind não representa uma mudança de essência, mas um alinhamento mais preciso entre nome, posicionamento e aquilo que sempre esteve no centro do nosso trabalho: unir capital intelectual técnico, direção estratégica e desenvolvimento profissional para quem deseja construir algo real no mercado do chá.",
    },
    carol: {
      name: "Carol Tavares",
      roles: ["Co-fundadora Tea Mind Business Hub", "Sommelier de Chá", "Especialista em Drinks com Chá", "Mestra em Harmonizações", "Estrategista de Negócios"],
      bio: [
        "Carol está na interseção entre o chá e os negócios há mais de 13 anos. Co-fundadora da Chá Pra Quê, a primeira escola online de formação profissional de chá com foco empreendedor do Brasil, formou centenas de profissionais e mentorou mais de 100 negócios no mercado do chá.",
        "Especialista em harmonizações extraordinárias, criadora do Método HARCOR e responsável pela concepção criativa de experiências sensoriais que já encantaram clientes de marcas como Miu Miu e State of Mind. Professora da Associação Brasileira de Sommeliers de Vinho ABS-RJ. Pós-graduada em Marketing & Negócios.",
        "Chief Product Manager da Chat Pay Labs, startup de sua criação, Carol transita com naturalidade entre o universo do chá e o ecossistema de tecnologia e inovação, com passagens por hackathons que a tornaram vencedora e referência em criação acelerada de soluções. Essa visão levou ao nascimento do HackaTEA no Tea Fest in Rio, uma experiência singular de criatividade e inovação aplicada ao mercado do chá.",
        "Na Tea Mind, Carol lidera a visão estratégica e tecnológica, incluindo o desenvolvimento do ecossistema pioneiro de IAs proprietárias para o mercado do chá, criado a partir do capital intelectual construído ao longo de mais de uma década de atuação no setor.",
      ],
      stats: [
        { value: "13+", label: "anos no mercado do chá" },
        { value: "100+", label: "negócios mentorados" },
      ],
    },
    carla: {
      name: "Carla Vicente",
      roles: ["Co-fundadora Tea Mind Business Hub", "Sommelier de Chá", "Tea Barista", "Especialista em Chás Gelados"],
      bio: [
        "Carla Vicente tem mais de 10 anos dedicados à formação de profissionais do chá no Brasil. Cofundadora da Chá Pra Quê, construiu ao lado de Carol uma metodologia única, que integra conhecimento técnico e visão de negócio.",
        "Sua experiência corporativa em empresas como Shell, Petrobras e Equinor moldou sua capacidade de criar ambientes de aprendizado organizados, didáticos e de alto nível levados integralmente para o universo do chá. Professora da Associação Brasileira de Sommeliers de Vinho ABS-RJ, assinou o chá da tarde do Metiers Café no Rio de Janeiro e atua em eventos e experiências sensoriais para marcas de luxo. Pós-graduada em Negócios Gestão de Negócios de Vinho.",
        "Em 2014, Carla e Carol realizaram uma imersão nas sete regiões produtoras de chá do Sri Lanka, uma das experiências formativas mais importantes da trajetória de ambas e que até hoje fundamenta o olhar de mercado e sensorial com que a Tea Mind aborda o chá de origem. São especialistas em chás do Sri Lanka, um dos países mais relevantes da indústria global do chá.",
        "Na Tea Mind, Carla lidera a excelência pedagógica e a construção dos programas, garantindo que cada aluno percorra sua trajetória com profundidade técnica, clareza e confiança para atuar no mercado.",
      ],
      stats: [
        { value: "10+", label: "anos formando profissionais" },
        { value: "7", label: "regiões do Sri Lanka visitadas" },
      ],
      highlight: "Imersão nas 7 regiões produtoras de chá do Sri Lanka (2014)",
    },
    closing: "Mais de uma década construindo o mercado do chá no Brasil. A Tea Mind é o próximo capítulo.",
  },
  en: {
    hero: {
      eyebrow: "Who's behind Tea Mind",
      title: "Technical knowledge, business vision, and a real reading of the tea market.",
      subtitle: "Tea Mind was born from the real experience of those who know the tea market, its complexity, its opportunities, and its economic potential, transforming that knowledge into professional training, strategic direction, and market building for over a decade.",
      subtitle2: "No matter the size of what you want to build in the tea market. From the solo professional to the entrepreneur looking to structure a larger business, what we offer is strategic direction to turn knowledge into real construction.",
      statGrowth: "25%",
      statGrowthLabel: "Growth in national tea consumption (2013–2020)",
      statTrend: "55.8 → 78.1",
      statTrendLabel: "Google Trends for 'tea' in Brazil (2018–2022)",
      closing: "Tea Mind knows exactly how to operate in this new stage. Training prepared professionals, structuring businesses with market vision, and creating real paths for those who wish to work with tea with depth, strategy, and value.",
    },
    origin: {
      title: "From practical experience to the birth of Tea Mind",
      p1: "Tea Mind Business Hub is born from the evolution of a trajectory built in the tea market with depth, consistency, and pioneering vision. Over the years, Carol Tavares and Carla Vicente trained professionals, mentored businesses, developed sensory and gastronomic experiences, sold teas, and opened paths in a sector that grows, diversifies, and increasingly demands intelligence to be organized.",
      p2: "We have always been attentive to this movement. And it was precisely from this reading that a conviction arose: the tea market is not strengthened only with new products, but with serious professional training, business vision, and people capable of understanding, communicating, and elevating the value of this market. This happened in the wine market 30 years ago and is happening now with the tea market in Brazil.",
      closing: "The transition from Chá Pra Quê to Tea Mind does not represent a change in essence, but a more precise alignment between name, positioning, and what has always been at the center of our work: uniting technical intellectual capital, strategic direction, and professional development for those who wish to build something real in the tea market.",
    },
    carol: {
      name: "Carol Tavares",
      roles: ["Co-founder Tea Mind Business Hub", "Tea Sommelier", "Tea Drinks Specialist", "Pairing Master", "Business Strategist"],
      bio: [
        "Carol has been at the intersection of tea and business for over 13 years. Co-founder of Chá Pra Quê, the first online professional tea school with an entrepreneurial focus in Brazil, she has trained hundreds of professionals and mentored over 100 businesses in the tea market.",
        "Specialist in extraordinary pairings, creator of the HARCOR Method, and responsible for the creative conception of sensory experiences that have enchanted clients of brands such as Miu Miu and State of Mind. Professor at ABS-RJ. Post-graduated in Marketing & Business.",
        "Chief Product Manager at Chat Pay Labs, a startup she created, Carol moves naturally between the tea universe and the technology and innovation ecosystem, with hackathon experiences that made her a winner and reference in accelerated solution creation. This vision led to the birth of HackaTEA at Tea Fest in Rio.",
        "At Tea Mind, Carol leads the strategic and technological vision, including the development of the pioneering proprietary AI ecosystem for the tea market, built from intellectual capital accumulated over more than a decade in the sector.",
      ],
      stats: [
        { value: "13+", label: "years in the tea market" },
        { value: "100+", label: "businesses mentored" },
      ],
    },
    carla: {
      name: "Carla Vicente",
      roles: ["Co-founder Tea Mind Business Hub", "Tea Sommelier", "Tea Barista", "Iced Tea Specialist"],
      bio: [
        "Carla Vicente has over 10 years dedicated to training tea professionals in Brazil. Co-founder of Chá Pra Quê, she built alongside Carol a unique methodology that integrates technical knowledge and business vision.",
        "Her corporate experience at companies like Shell, Petrobras, and Equinor shaped her ability to create organized, didactic, high-level learning environments, fully carried into the tea universe. Professor at ABS-RJ, she curated the afternoon tea at Metiers Café in Rio de Janeiro. Post-graduated in Wine Business Management.",
        "In 2014, Carla and Carol undertook an immersion in the seven tea-producing regions of Sri Lanka, one of the most formative experiences of both their careers, which still informs Tea Mind's market and sensory approach to origin teas. They are specialists in Sri Lankan teas.",
        "At Tea Mind, Carla leads pedagogical excellence and program construction, ensuring each student follows their journey with technical depth, clarity, and confidence to operate in the market.",
      ],
      stats: [
        { value: "10+", label: "years training professionals" },
        { value: "7", label: "Sri Lanka regions visited" },
      ],
      highlight: "Immersion in all 7 tea-producing regions of Sri Lanka (2014)",
    },
    closing: "Over a decade building the tea market in Brazil. Tea Mind is the next chapter.",
  },
  es: {
    hero: {
      eyebrow: "Quién está detrás de Tea Mind",
      title: "Conocimiento técnico, visión de negocio y lectura real del mercado del té.",
      subtitle: "Tea Mind nació de la experiencia real de quienes conocen el mercado del té, su complejidad, sus oportunidades y su potencial económico, transformando ese conocimiento en formación profesional, dirección estratégica y construcción de mercado durante más de una década.",
      subtitle2: "No importa el tamaño de lo que deseas construir en el mercado del té. Del profesional que actúa de forma solo al emprendedor que desea estructurar un negocio mayor, lo que ofrecemos es dirección estratégica para transformar conocimiento en construcción real.",
      statGrowth: "25%",
      statGrowthLabel: "Crecimiento del consumo nacional de té (2013–2020)",
      statTrend: "55,8 → 78,1",
      statTrendLabel: "Google Trends para 'té' en Brasil (2018–2022)",
      closing: "Tea Mind sabe exactamente cómo actuar en esta nueva etapa. Formando profesionales preparados, estructurando negocios con visión de mercado y creando caminos reales para quienes desean trabajar con té con profundidad, estrategia y valor.",
    },
    origin: {
      title: "De la experiencia práctica al nacimiento de Tea Mind",
      p1: "Tea Mind Business Hub nace de la evolución de una trayectoria construida en el mercado del té con profundidad, consistencia y visión pionera. A lo largo de los años, Carol Tavares y Carla Vicente formaron profesionales, mentoraron negocios, desarrollaron experiencias sensoriales y gastronómicas, vendieron tés y abrieron caminos en un sector que crece, se diversifica y exige cada vez más inteligencia para ser organizado.",
      p2: "Siempre estuvimos atentas a este movimiento. Y fue justamente de esa lectura que surgió una convicción: el mercado del té no se fortalece solo con nuevos productos, sino con formación profesional seria, visión de negocio y personas capaces de comprender, comunicar y elevar el valor de este mercado. Así fue con el mercado del vino hace 30 años y así está siendo con el mercado del té en Brasil.",
      closing: "La transición de Chá Pra Quê a Tea Mind no representa un cambio de esencia, sino una alineación más precisa entre nombre, posicionamiento y aquello que siempre estuvo en el centro de nuestro trabajo: unir capital intelectual técnico, dirección estratégica y desarrollo profesional para quien desea construir algo real en el mercado del té.",
    },
    carol: {
      name: "Carol Tavares",
      roles: ["Cofundadora Tea Mind Business Hub", "Sommelier de Té", "Especialista en Drinks con Té", "Maestra en Armonizaciones", "Estratega de Negocios"],
      bio: [
        "Carol está en la intersección entre el té y los negocios desde hace más de 13 años. Cofundadora de Chá Pra Quê, la primera escuela online de formación profesional de té con enfoque emprendedor de Brasil, formó cientos de profesionales y mentoreó más de 100 negocios en el mercado del té.",
        "Especialista en armonizaciones extraordinarias, creadora del Método HARCOR y responsable de la concepción creativa de experiencias sensoriales que encantaron a clientes de marcas como Miu Miu y State of Mind. Profesora de ABS-RJ. Posgrado en Marketing & Negocios.",
        "Chief Product Manager de Chat Pay Labs, startup de su creación, Carol transita con naturalidad entre el universo del té y el ecosistema de tecnología e innovación. Esta visión llevó al nacimiento del HackaTEA en Tea Fest in Rio.",
        "En Tea Mind, Carol lidera la visión estratégica y tecnológica, incluyendo el desarrollo del ecosistema pionero de IAs propietarias para el mercado del té.",
      ],
      stats: [
        { value: "13+", label: "años en el mercado del té" },
        { value: "100+", label: "negocios mentoreados" },
      ],
    },
    carla: {
      name: "Carla Vicente",
      roles: ["Cofundadora Tea Mind Business Hub", "Sommelier de Té", "Tea Barista", "Especialista en Tés Helados"],
      bio: [
        "Carla Vicente tiene más de 10 años dedicados a la formación de profesionales del té en Brasil. Cofundadora de Chá Pra Quê, construyó junto a Carol una metodología única que integra conocimiento técnico y visión de negocio.",
        "Su experiencia corporativa en empresas como Shell, Petrobras y Equinor moldeó su capacidad de crear ambientes de aprendizaje organizados, didácticos y de alto nivel. Profesora de ABS-RJ, firmó el té de la tarde del Metiers Café en Río de Janeiro. Posgrado en Gestión de Negocios de Vino.",
        "En 2014, Carla y Carol realizaron una inmersión en las siete regiones productoras de té de Sri Lanka, una de las experiencias formativas más importantes de la trayectoria de ambas. Son especialistas en tés de Sri Lanka.",
        "En Tea Mind, Carla lidera la excelencia pedagógica y la construcción de los programas, garantizando que cada alumno recorra su trayectoria con profundidad técnica, claridad y confianza para actuar en el mercado.",
      ],
      stats: [
        { value: "10+", label: "años formando profesionales" },
        { value: "7", label: "regiones de Sri Lanka visitadas" },
      ],
      highlight: "Inmersión en las 7 regiones productoras de té de Sri Lanka (2014)",
    },
    closing: "Más de una década construyendo el mercado del té en Brasil. Tea Mind es el próximo capítulo.",
  },
} as const;

/* ─── Animated SVG Background ─── */
const HeroBackground = () => (
  <svg className="absolute inset-0 w-full h-full z-[2] pointer-events-none" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" fill="none">
    <path d="M-100 300 Q 200 260, 500 320 T 900 280 T 1300 340 T 1700 300" stroke="hsl(0 0% 100% / 0.06)" strokeWidth="1.5" className="hero-line" />
    <path d="M-50 400 Q 300 360, 600 420 T 1000 380 T 1400 440 T 1800 400" stroke="hsl(0 0% 100% / 0.04)" strokeWidth="1" className="hero-line-reverse" />
    <path d="M-100 200 Q 350 170, 700 220 T 1100 190 T 1500 240" stroke="hsl(0 0% 100% / 0.03)" strokeWidth="1" className="hero-line-slow" />
    <path d="M200 500 Q 450 460, 700 510 T 1100 480 T 1500 520" stroke="hsl(40 45% 57% / 0.12)" strokeWidth="0.8" className="hero-line-slow" />
    <circle cx="350" cy="320" r="2" fill="hsl(0 0% 100% / 0.08)">
      <animate attributeName="opacity" values="0.08;0.2;0.08" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="750" cy="280" r="2.5" fill="hsl(40 45% 57% / 0.15)">
      <animate attributeName="opacity" values="0.15;0.35;0.15" dur="5s" repeatCount="indefinite" />
    </circle>
    <circle cx="1100" cy="350" r="2" fill="hsl(0 0% 100% / 0.06)">
      <animate attributeName="opacity" values="0.06;0.18;0.06" dur="6s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/* ─── Block 1: Hero ─── */
const AboutHero = () => {
  const { lang } = useLang();
  const t = aboutT[lang].hero;

  return (
    <section className="relative min-h-[85vh] flex items-center bg-primary text-primary-foreground pt-32 pb-24 overflow-hidden">
      <HeroBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <Fade>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-8 text-center">{t.eyebrow}</p>
        </Fade>
        <Fade className="delay-100">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight mb-10 text-center max-w-3xl mx-auto">
            {t.title}
          </h1>
        </Fade>
        <Fade className="delay-200">
          <div className="w-16 h-px bg-accent mx-auto mb-10" />
        </Fade>
        <Fade className="delay-300">
          <p className="font-sans text-lg md:text-xl text-primary-foreground/65 leading-relaxed max-w-2xl mx-auto text-center mb-6">
            {t.subtitle}
          </p>
          <p className="font-sans text-base text-primary-foreground/50 leading-relaxed max-w-2xl mx-auto text-center mb-14">
            {t.subtitle2}
          </p>
        </Fade>

        {/* Stats card */}
        <Fade className="delay-500">
          <div className="border border-accent/20 rounded-sm p-8 max-w-2xl mx-auto mb-10">
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <p className="font-serif text-3xl font-medium text-accent mb-2">{t.statGrowth}</p>
                <p className="font-sans text-xs tracking-wider text-primary-foreground/50 uppercase">{t.statGrowthLabel}</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-medium text-accent mb-2">{t.statTrend}</p>
                <p className="font-sans text-xs tracking-wider text-primary-foreground/50 uppercase">{t.statTrendLabel}</p>
              </div>
            </div>
            <div className="w-12 h-px bg-accent/30 mx-auto mb-6" />
            <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed text-center">{t.closing}</p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

/* ─── Block 2: Origin ─── */
const OriginBlock = () => {
  const { lang } = useLang();
  const t = aboutT[lang].origin;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <Fade>
            <div className="aspect-[4/5] bg-muted rounded-sm flex items-center justify-center">
              <span className="font-serif text-4xl text-muted-foreground/30">TM</span>
            </div>
          </Fade>

          {/* Text */}
          <Fade className="delay-100">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8 text-foreground">{t.title}</h2>
              <div className="border-l-2 border-accent pl-6 mb-8">
                <p className="font-sans text-base text-foreground/65 leading-relaxed mb-6">{t.p1}</p>
                <p className="font-sans text-base text-foreground/65 leading-relaxed">{t.p2}</p>
              </div>
              <p className="font-sans text-sm text-foreground/50 leading-relaxed italic">{t.closing}</p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

/* ─── Founder Block (reusable) ─── */
interface FounderData {
  name: string;
  roles: readonly string[];
  bio: readonly string[];
  stats: readonly { value: string; label: string }[];
  highlight?: string;
}

const FounderBlock = ({
  founder,
  isDark,
  imageRight = false,
}: {
  founder: FounderData;
  isDark: boolean;
  imageRight?: boolean;
}) => {
  const bgClass = isDark ? "bg-primary text-primary-foreground" : "bg-background text-foreground";
  const textMuted = isDark ? "text-primary-foreground/60" : "text-foreground/60";
  const textSoft = isDark ? "text-primary-foreground/70" : "text-foreground/70";
  const badgeBg = isDark ? "bg-accent/10 text-accent" : "bg-accent/10 text-accent";

  return (
    <section className={`py-20 lg:py-28 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className={`grid md:grid-cols-5 gap-10 lg:gap-16 items-start ${imageRight ? "md:direction-rtl" : ""}`}>
          {/* Image */}
          <Fade className={`md:col-span-2 ${imageRight ? "md:order-2" : ""}`}>
            <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
              {founderPhotos[founder.name] ? (
                <img
                  src={founderPhotos[founder.name]}
                  alt={founder.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-serif text-5xl text-muted-foreground/30">
                    {founder.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
              )}
            </div>
          </Fade>

          {/* Bio */}
          <Fade className={`md:col-span-3 ${imageRight ? "md:order-1" : ""}`}>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">{founder.name}</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {founder.roles.map((role) => (
                  <span key={role} className={`text-xs font-sans tracking-wider px-3 py-1 rounded-sm ${badgeBg}`}>
                    {role}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-8 mb-10">
                {founder.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-2xl font-medium text-accent">{s.value}</p>
                    <p className={`font-sans text-xs tracking-wider ${textMuted} uppercase`}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-5">
                {founder.bio.map((p, i) => (
                  <p key={i} className={`font-sans text-sm ${textSoft} leading-relaxed`}>{p}</p>
                ))}
              </div>

              {/* Highlight callout */}
              {founder.highlight && (
                <div className="mt-8 border-l-2 border-accent pl-5">
                  <p className={`font-sans text-sm italic ${textMuted}`}>{founder.highlight}</p>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

/* ─── Block 5: Closing ─── */
const ClosingBlock = () => {
  const { lang } = useLang();
  const text = aboutT[lang].closing;

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <Fade>
          <div className="w-16 h-px bg-accent mx-auto mb-10" />
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-snug text-primary-foreground/80">
            {text}
          </p>
        </Fade>
      </div>
    </section>
  );
};

/* ─── Page Content ─── */
const AboutContent = () => {
  const { lang } = useLang();
  const t = aboutT[lang];

  return (
    <>
      <Navbar />
      <AboutHero />
      <OriginBlock />
      <FounderBlock founder={t.carol} isDark={true} />
      <FounderBlock founder={t.carla} isDark={false} imageRight={true} />
      <ClosingBlock />
      <Footer />
    </>
  );
};

const AboutPage = ({ lang = "pt" }: { lang?: Lang }) => (
  <LanguageProvider lang={lang}>
    <AboutContent />
  </LanguageProvider>
);

export default AboutPage;
