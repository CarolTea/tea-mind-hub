import { useFadeIn } from "@/hooks/useFadeIn";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeuralPricing from "@/components/NeuralPricing";

const translations = {
  pt: {
    hero: {
      badge: "Neural System",
      hub: "Tea Mind Business Hub",
      title: "Neural System",
      subtitle: "Uma infraestrutura de inteligência artificial treinada para pensar, criar e decidir com você dentro do mercado do chá.",
      intro: "Três agentes especializados — sensorial, produto e negócio — projetados para potencializar sua atuação profissional com repertório técnico, visão estratégica e apoio contínuo.",
    },
    agents: {
      heading: "Os Agentes do Neural System",
      subtitle: "Cada agente foi treinado com o capital intelectual da Tea Mind para atuar como uma extensão da sua capacidade profissional.",
      items: [
        {
          number: "01",
          name: "Sensory AI",
          tag: "Inteligência sensorial aplicada",
          headline: "O olhar treinado que organiza percepção em linguagem técnica.",
          body: "O Sensory AI é o agente especializado em análise sensorial de chás e infusões. Ele foi treinado para descrever aromas, sabores e texturas com precisão técnica, criar cartas de chás para restaurantes e hotéis, propor harmonizações por perfil aromático e apoiar a construção de experiências sensoriais com profundidade.\n\nÉ a ferramenta ideal para quem atua com curadoria, serviço, hospitalidade, eventos e educação sensorial no universo do chá.",
          capabilitiesIntro: "O QUE ELE FAZ",
          capabilities: [
            "**Traduz percepção em palavra técnica.** Descrições sensoriais precisas, com vocabulário padronizado, prontas para rótulo, ficha técnica ou apresentação.",
            "**Constrói cartas de chá que vendem.** Curadoria completa para restaurantes, hotéis e casas de chá, com descrição comercial de cada item.",
            "**Cria harmonizações e drinks autorais.** Combinações com alimentos e coquetelaria por afinidade aromática, com justificativa sensorial que sustenta o preço.",
            "**Escreve o seu discurso de venda.** Textos promocionais, storytelling de produto e propostas comerciais que comunicam valor em vez de listar ingredientes.",
            "**Estrutura experiências, mini eventos e workshops.** Do roteiro sensorial à sequência de degustação, com o conteúdo que sustenta a experiência.",
            "**Prepara aulas e conteúdos especializados.** Roteiros, materiais e explicações técnicas sobre chá com clareza didática.",
          ],
          closing: "O Sensory AI transforma percepção em linguagem — e linguagem em valor profissional.",
        },
        {
          number: "02",
          name: "Blend AI",
          tag: "Inteligência de produto aplicada",
          headline: "O parceiro técnico que transforma ideia em produto real.",
          body: "O Blend AI é o agente especializado em desenvolvimento de blends e produtos à base de chá. Ele foi treinado para auxiliar na formulação de receitas com equilíbrio sensorial, ajustar proporções, sugerir combinações por perfil aromático, orientar processos de diluição e fixação de aromas, e apoiar a construção de linhas de produto com identidade e viabilidade comercial.\n\nÉ a ferramenta ideal para quem deseja criar blends autorais, linhas de chá com assinatura própria ou produtos para venda com padrão premium.",
          capabilitiesIntro: "O QUE ELE FAZ",
          capabilities: [
            "Desenvolvimento de blends autorais com equilíbrio técnico",
            "Ajuste de proporções e perfil sensorial de misturas",
            "Sugestões de combinações por afinidade aromática",
            "Orientação sobre diluição, fixação e estabilidade de aromas",
            "Apoio à conformidade com normas da Anvisa para comercialização",
          ],
          closing: "O Blend AI transforma intenção criativa em produto com critério — e critério em diferenciação real.",
        },
        {
          number: "03",
          name: "Business AI",
          tag: "Inteligência de negócio aplicada",
          headline: "O estrategista que organiza decisões e aponta caminhos.",
          body: "O Business AI é o agente especializado em estratégia e desenvolvimento de negócios no mercado do chá. Ele foi treinado para ajudar na construção de planos de negócio, precificação de produtos e serviços, análise de mercado, posicionamento de marca e definição de estratégias de crescimento.\n\nÉ a ferramenta ideal para quem deseja estruturar, reorganizar ou expandir um negócio no setor de chá com mais clareza, consistência e visão estratégica.",
          capabilitiesIntro: "O QUE ELE FAZ",
          capabilities: [
            "Elaboração de planos de negócio para o setor de chá",
            "Precificação de produtos, serviços e experiências",
            "Análise de mercado, concorrência e posicionamento",
            "Estratégias de crescimento, expansão e diferenciação",
            "Apoio à tomada de decisão com base em dados e cenários",
          ],
          closing: "O Business AI transforma visão em estrutura — e estrutura em negócio com direção.",
        },
      ],
    },
    cta: {
      statement: "O Neural System não substitui o profissional. Ele potencializa quem já decidiu construir com seriedade.",
      button: "Fale conosco",
    },
  },
  en: {
    hero: {
      badge: "Neural System",
      hub: "Tea Mind Business Hub",
      title: "Neural System",
      subtitle: "An artificial intelligence infrastructure trained to think, create, and make decisions with you in the tea market.",
      intro: "Three specialized agents — sensory, product, and business — designed to enhance your professional practice with technical knowledge, strategic vision, and ongoing support.",
    },
    agents: {
      heading: "The Neural System Agents",
      subtitle: "Each agent was trained with Tea Mind's intellectual capital to act as an extension of your professional capability.",
      items: [
        {
          number: "01",
          name: "Sensory AI",
          tag: "Applied sensory intelligence",
          headline: "The trained eye that turns perception into technical language.",
          body: "Sensory AI is the agent specialized in sensory analysis of teas and infusions. It was trained to describe aromas, flavors, and textures with technical precision, create tea menus for restaurants and hotels, propose pairings by aromatic profile, and support the creation of in-depth sensory experiences.\n\nIt is the ideal tool for those working in curation, service, hospitality, events, and sensory education in the tea universe.",
          capabilitiesIntro: "WHAT IT DOES",
          capabilities: [
            "**Turns perception into technical language.** Precise sensory descriptions with standardized vocabulary, ready for labels, tech sheets, or presentations.",
            "**Builds tea menus that sell.** Full curation for restaurants, hotels, and tea houses, with commercial copy for every item.",
            "**Creates pairings and signature drinks.** Food and cocktail combinations by aromatic affinity, with the sensory rationale that justifies the price.",
            "**Writes your sales pitch.** Promotional copy, product storytelling, and commercial proposals that communicate value instead of listing ingredients.",
            "**Structures experiences, small events, and workshops.** From the sensory script to the tasting sequence, with the content that holds it together.",
            "**Prepares specialized classes and content.** Scripts, materials, and technical explanations about tea with teaching clarity.",
          ],
          closing: "Sensory AI transforms perception into language — and language into professional value.",
        },
        {
          number: "02",
          name: "Blend AI",
          tag: "Applied product intelligence",
          headline: "The technical partner that turns ideas into real products.",
          body: "Blend AI is the agent specialized in developing blends and tea-based products. It was trained to assist in recipe formulation with sensory balance, adjust proportions, suggest combinations by aromatic profile, guide dilution and aroma fixation processes, and support the creation of product lines with identity and commercial viability.\n\nIt is the ideal tool for those who want to create signature blends, proprietary tea lines, or premium products for sale.",
          capabilitiesIntro: "WHAT IT DOES",
          capabilities: [
            "Development of signature blends with technical balance",
            "Proportion adjustment and sensory profile of mixtures",
            "Combination suggestions by aromatic affinity",
            "Guidance on dilution, fixation, and aroma stability",
            "Support for compliance with commercialization regulations",
          ],
          closing: "Blend AI transforms creative intention into a product with criteria — and criteria into real differentiation.",
        },
        {
          number: "03",
          name: "Business AI",
          tag: "Applied business intelligence",
          headline: "The strategist that organizes decisions and points the way.",
          body: "Business AI is the agent specialized in strategy and business development in the tea market. It was trained to help build business plans, price products and services, analyze markets, position brands, and define growth strategies.\n\nIt is the ideal tool for those who want to structure, reorganize, or expand a tea business with greater clarity, consistency, and strategic vision.",
          capabilitiesIntro: "WHAT IT DOES",
          capabilities: [
            "Business plan development for the tea sector",
            "Pricing of products, services, and experiences",
            "Market analysis, competition, and positioning",
            "Growth, expansion, and differentiation strategies",
            "Decision-making support based on data and scenarios",
          ],
          closing: "Business AI transforms vision into structure — and structure into a business with direction.",
        },
      ],
    },
    cta: {
      statement: "The Neural System doesn't replace the professional. It empowers those who have already decided to build with seriousness.",
      button: "Contact us",
    },
  },
  es: {
    hero: {
      badge: "Neural System",
      hub: "Tea Mind Business Hub",
      title: "Neural System",
      subtitle: "Una infraestructura de inteligencia artificial entrenada para pensar, crear y decidir contigo dentro del mercado del té.",
      intro: "Tres agentes especializados — sensorial, producto y negocio — diseñados para potenciar tu actuación profesional con repertorio técnico, visión estratégica y apoyo continuo.",
    },
    agents: {
      heading: "Los Agentes del Neural System",
      subtitle: "Cada agente fue entrenado con el capital intelectual de Tea Mind para actuar como una extensión de tu capacidad profesional.",
      items: [
        {
          number: "01",
          name: "Sensory AI",
          tag: "Inteligencia sensorial aplicada",
          headline: "La mirada entrenada que organiza la percepción en lenguaje técnico.",
          body: "Sensory AI es el agente especializado en análisis sensorial de tés e infusiones. Fue entrenado para describir aromas, sabores y texturas con precisión técnica, crear cartas de tés para restaurantes y hoteles, proponer maridajes por perfil aromático y apoyar la creación de experiencias sensoriales con profundidad.\n\nEs la herramienta ideal para quienes trabajan en curaduría, servicio, hospitalidad, eventos y educación sensorial en el universo del té.",
          capabilitiesIntro: "QUÉ HACE",
          capabilities: [
            "**Traduce la percepción en palabra técnica.** Descripciones sensoriales precisas, con vocabulario estandarizado, listas para etiqueta, ficha técnica o presentación.",
            "**Construye cartas de té que venden.** Curaduría completa para restaurantes, hoteles y casas de té, con descripción comercial de cada ítem.",
            "**Crea maridajes y drinks de autor.** Combinaciones con alimentos y coctelería por afinidad aromática, con la justificación sensorial que sostiene el precio.",
            "**Escribe tu discurso de venta.** Textos promocionales, storytelling de producto y propuestas comerciales que comunican valor en lugar de listar ingredientes.",
            "**Estructura experiencias, mini eventos y workshops.** Del guion sensorial a la secuencia de degustación, con el contenido que sostiene la experiencia.",
            "**Prepara clases y contenidos especializados.** Guiones, materiales y explicaciones técnicas sobre té con claridad didáctica.",
          ],
          closing: "Sensory AI transforma percepción en lenguaje — y lenguaje en valor profesional.",
        },
        {
          number: "02",
          name: "Blend AI",
          tag: "Inteligencia de producto aplicada",
          headline: "El socio técnico que transforma ideas en productos reales.",
          body: "Blend AI es el agente especializado en desarrollo de blends y productos a base de té. Fue entrenado para ayudar en la formulación de recetas con equilibrio sensorial, ajustar proporciones, sugerir combinaciones por perfil aromático, orientar procesos de dilución y fijación de aromas, y apoyar la construcción de líneas de producto con identidad y viabilidad comercial.\n\nEs la herramienta ideal para quienes desean crear blends autorales, líneas de té con firma propia o productos para venta con estándar premium.",
          capabilitiesIntro: "QUÉ HACE",
          capabilities: [
            "Desarrollo de blends autorales con equilibrio técnico",
            "Ajuste de proporciones y perfil sensorial de mezclas",
            "Sugerencias de combinaciones por afinidad aromática",
            "Orientación sobre dilución, fijación y estabilidad de aromas",
            "Apoyo al cumplimiento de normas para comercialización",
          ],
          closing: "Blend AI transforma intención creativa en producto con criterio — y criterio en diferenciación real.",
        },
        {
          number: "03",
          name: "Business AI",
          tag: "Inteligencia de negocio aplicada",
          headline: "El estratega que organiza decisiones y señala caminos.",
          body: "Business AI es el agente especializado en estrategia y desarrollo de negocios en el mercado del té. Fue entrenado para ayudar en la construcción de planes de negocio, fijación de precios de productos y servicios, análisis de mercado, posicionamiento de marca y definición de estrategias de crecimiento.\n\nEs la herramienta ideal para quienes desean estructurar, reorganizar o expandir un negocio en el sector del té con más claridad, consistencia y visión estratégica.",
          capabilitiesIntro: "QUÉ HACE",
          capabilities: [
            "Elaboración de planes de negocio para el sector del té",
            "Fijación de precios de productos, servicios y experiencias",
            "Análisis de mercado, competencia y posicionamiento",
            "Estrategias de crecimiento, expansión y diferenciación",
            "Apoyo a la toma de decisiones basada en datos y escenarios",
          ],
          closing: "Business AI transforma visión en estructura — y estructura en negocio con dirección.",
        },
      ],
    },
    cta: {
      statement: "El Neural System no reemplaza al profesional. Potencia a quien ya decidió construir con seriedad.",
      button: "Contáctenos",
    },
  },
};

const Fade = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

const NeuralSystemContent = () => {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary to-secondary/95" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
            <Fade>
              <span className="inline-block border border-accent text-accent text-[10px] tracking-[0.3em] uppercase font-sans px-5 py-2 mb-8">
                {t.hero.badge}
              </span>
              <p className="text-xs tracking-[0.35em] uppercase text-accent mb-8 font-sans">{t.hero.hub}</p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                {t.hero.title}
              </h1>
              <div className="w-16 h-px bg-accent mx-auto mb-8" />
              <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-12 font-sans">
                {t.hero.subtitle}
              </p>
              <p className="text-base md:text-lg text-secondary-foreground/60 max-w-2xl mx-auto leading-relaxed font-sans">
                {t.hero.intro}
              </p>
            </Fade>
          </div>
        </section>

        {/* Agents */}
        <section className="bg-background py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <Fade>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">{t.agents.heading}</h2>
              <p className="text-base md:text-lg text-foreground/60 text-center max-w-3xl mx-auto mb-20 font-sans leading-relaxed">
                {t.agents.subtitle}
              </p>
            </Fade>

            <div className="space-y-16 md:space-y-24">
              {t.agents.items.map((agent) => (
                <Fade key={agent.number}>
                  <article className="border border-border/60 p-8 md:p-12">
                    <div className="mb-8">
                      <span className="font-serif text-5xl text-accent/30 block mb-4">{agent.number}</span>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{agent.name}</h3>
                      <p className="text-sm tracking-wider uppercase text-accent font-sans italic">{agent.tag}</p>
                    </div>
                    <div className="w-12 h-px bg-accent/40 mb-8" />
                    <p className="font-serif text-xl md:text-2xl text-foreground/90 mb-6 leading-snug">{agent.headline}</p>
                    {agent.body.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-base text-foreground/70 leading-relaxed font-sans mb-4">{paragraph}</p>
                    ))}
                    <p className="text-sm tracking-wider uppercase text-foreground/50 font-sans mt-8 mb-4">{agent.capabilitiesIntro}</p>
                    <ul className="space-y-3 mb-8">
                      {agent.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3 text-base text-foreground/75 font-sans leading-relaxed">
                          <span className="text-accent mt-1.5 text-xs">◆</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border/40 pt-6">
                      <p className="text-base text-foreground/80 font-sans italic">{agent.closing}</p>
                    </div>
                  </article>
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <NeuralPricing lang={lang} />
      </main>
      <Footer />
    </div>
  );
};

const NeuralSystemPage = ({ lang }: { lang: Lang }) => (
  <LanguageProvider lang={lang}>
    <NeuralSystemContent />
  </LanguageProvider>
);

export default NeuralSystemPage;
