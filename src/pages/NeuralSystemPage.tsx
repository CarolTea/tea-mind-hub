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
      intro: "Três agentes especializados, sensorial, produto e negócio, projetados para potencializar sua atuação profissional com repertório técnico, visão estratégica e apoio contínuo.",
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
            "**Identifica chás por foto.** Envie uma imagem da folha seca, da infusão ou do líquor e receba tipo, provável origem, grau de oxidação e leitura sensorial do que está na xícara.",
            "**Traduz percepção em palavra técnica.** Descrições sensoriais precisas, com vocabulário padronizado, prontas para rótulo, ficha técnica ou apresentação.",
            "**Constrói cartas de chá que vendem.** Curadoria completa para restaurantes, hotéis e casas de chá, com descrição comercial de cada item.",
            "**Cria harmonizações e drinks autorais.** Combinações com alimentos e coquetelaria por afinidade aromática, com justificativa sensorial que sustenta o preço.",
            "**Escreve o seu discurso de venda.** Textos promocionais, storytelling de produto e propostas comerciais que comunicam valor em vez de listar ingredientes.",
            "**Estrutura experiências, mini eventos e workshops.** Do roteiro sensorial à sequência de degustação, com o conteúdo que sustenta a experiência.",
            "**Prepara aulas e conteúdos especializados.** Roteiros, materiais e explicações técnicas sobre chá com clareza didática.",
          ],
          closing: "O Sensory AI transforma percepção em linguagem, e linguagem em valor profissional.",
        },
        {
          number: "02",
          name: "Blend AI",
          tag: "Inteligência de produto aplicada",
          headline: "O parceiro técnico que transforma ideia em produto real.",
          body: "O Blend AI é o agente especializado em desenvolvimento de blends e produtos à base de chá. Ele foi treinado para auxiliar na formulação de receitas com equilíbrio sensorial, ajustar proporções, sugerir combinações por perfil aromático, orientar processos de diluição e fixação de aromas, e apoiar a construção de linhas de produto com identidade e viabilidade comercial.\n\nÉ a ferramenta ideal para quem deseja criar blends autorais, linhas de chá com assinatura própria ou produtos para venda com padrão premium.",
          capabilitiesIntro: "O QUE ELE FAZ",
          capabilities: [
            "**Cria blends autorais com equilíbrio técnico.** Formulação de receitas com proporções calculadas, camadas aromáticas e assinatura própria, do primeiro rascunho à versão final.",
            "**Ajusta proporções e corrige o perfil sensorial.** Diagnóstico do que está desequilibrado na mistura e o caminho técnico para acertar corpo, aroma e persistência.",
            "**Sugere combinações por afinidade aromática.** Bases, ervas, especiarias, frutas e flores compatíveis, com a justificativa sensorial de cada escolha.",
            "**Orienta diluição, fixação e estabilidade de aromas.** Como manter o perfil íntegro ao longo do tempo, do envase ao consumo.",
            "**Estrutura o seu ambiente de preparo.** Montagem do espaço de blendagem, fluxo de trabalho, técnicas de manipulação e utensílios adequados a cada escala de produção.",
            "**Conduz testes de qualidade e durabilidade.** Protocolos de prova, controle de lote, avaliação de shelf life e registro dos resultados.",
            "**Apoia a conformidade para comercialização.** Orientação sobre normas da Anvisa, rotulagem e requisitos para colocar o produto no mercado.",
          ],
          closing: "O Blend AI transforma intenção criativa em produto com critério, e critério em diferenciação real.",
        },
        {
          number: "03",
          name: "Business AI",
          tag: "Inteligência de negócio aplicada",
          headline: "O estrategista que organiza decisões e aponta caminhos.",
          body: "O Business AI é o agente especializado em estratégia e desenvolvimento de negócios no mercado do chá. Ele foi treinado para ajudar na construção de planos de negócio, precificação de produtos e serviços, análise de mercado, posicionamento de marca e definição de estratégias de crescimento.\n\nÉ a ferramenta ideal para quem deseja estruturar, reorganizar ou expandir um negócio no setor de chá com mais clareza, consistência e visão estratégica.",
          capabilitiesIntro: "O QUE ELE FAZ",
          capabilities: [
            "**Constrói o plano de negócio do seu projeto.** Da definição de modelo e público à estrutura de custos, metas e projeção de receita, com linguagem pronta para apresentar a sócios, bancos ou investidores.",
            "**Define preços que sustentam o negócio.** Precificação de produtos, serviços e experiências com margem calculada, comparação de cenários e justificativa de valor para o cliente.",
            "**Lê o mercado e posiciona a sua marca.** Análise de concorrência, oportunidades pouco exploradas e o território de discurso onde a sua marca compete sem disputar preço.",
            "**Desenha caminhos de crescimento.** Estratégias de expansão, novos canais, parcerias e diferenciação, com prioridade de execução em vez de lista de ideias.",
            "**Organiza a decisão difícil.** Cenários comparados, riscos, trade offs e recomendação clara quando é preciso escolher um caminho.",
          ],
          closing: "O Business AI transforma visão em estrutura, e estrutura em negócio com direção.",
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
      intro: "Three specialized agents, sensory, product, and business, designed to enhance your professional practice with technical knowledge, strategic vision, and ongoing support.",
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
            "**Identifies teas from a photo.** Send an image of the dry leaf, the infusion, or the liquor and get type, likely origin, oxidation level, and a sensory reading of what is in the cup.",
            "**Turns perception into technical language.** Precise sensory descriptions with standardized vocabulary, ready for labels, tech sheets, or presentations.",
            "**Builds tea menus that sell.** Full curation for restaurants, hotels, and tea houses, with commercial copy for every item.",
            "**Creates pairings and signature drinks.** Food and cocktail combinations by aromatic affinity, with the sensory rationale that justifies the price.",
            "**Writes your sales pitch.** Promotional copy, product storytelling, and commercial proposals that communicate value instead of listing ingredients.",
            "**Structures experiences, small events, and workshops.** From the sensory script to the tasting sequence, with the content that holds it together.",
            "**Prepares specialized classes and content.** Scripts, materials, and technical explanations about tea with teaching clarity.",
          ],
          closing: "Sensory AI transforms perception into language, and language into professional value.",
        },
        {
          number: "02",
          name: "Blend AI",
          tag: "Applied product intelligence",
          headline: "The technical partner that turns ideas into real products.",
          body: "Blend AI is the agent specialized in developing blends and tea-based products. It was trained to assist in recipe formulation with sensory balance, adjust proportions, suggest combinations by aromatic profile, guide dilution and aroma fixation processes, and support the creation of product lines with identity and commercial viability.\n\nIt is the ideal tool for those who want to create signature blends, proprietary tea lines, or premium products for sale.",
          capabilitiesIntro: "WHAT IT DOES",
          capabilities: [
            "**Creates signature blends with technical balance.** Recipe formulation with calculated proportions, aromatic layering, and a signature of your own, from first draft to final version.",
            "**Adjusts proportions and corrects the sensory profile.** A diagnosis of what is out of balance in the mixture and the technical path to fix body, aroma, and length.",
            "**Suggests combinations by aromatic affinity.** Compatible bases, herbs, spices, fruits, and flowers, with the sensory rationale behind each choice.",
            "**Guides dilution, fixation, and aroma stability.** How to keep the profile intact over time, from packaging to consumption.",
            "**Sets up your blending workspace.** Layout of the preparation area, workflow, handling techniques, and the right tools for each production scale.",
            "**Runs quality and shelf life testing.** Tasting protocols, batch control, durability assessment, and result logging.",
            "**Supports compliance for commercialization.** Guidance on food safety regulations, labeling, and the requirements to bring the product to market.",
          ],
          closing: "Blend AI transforms creative intention into a product with criteria, and criteria into real differentiation.",
        },
        {
          number: "03",
          name: "Business AI",
          tag: "Applied business intelligence",
          headline: "The strategist that organizes decisions and points the way.",
          body: "Business AI is the agent specialized in strategy and business development in the tea market. It was trained to help build business plans, price products and services, analyze markets, position brands, and define growth strategies.\n\nIt is the ideal tool for those who want to structure, reorganize, or expand a tea business with greater clarity, consistency, and strategic vision.",
          capabilitiesIntro: "WHAT IT DOES",
          capabilities: [
            "**Builds the business plan for your project.** From model and audience definition to cost structure, targets, and revenue projection, in language ready to present to partners, banks, or investors.",
            "**Sets prices that sustain the business.** Pricing for products, services, and experiences with calculated margin, scenario comparison, and a value rationale for the client.",
            "**Reads the market and positions your brand.** Competitive analysis, underexplored opportunities, and the narrative territory where your brand competes without fighting on price.",
            "**Designs growth paths.** Expansion strategies, new channels, partnerships, and differentiation, with execution priorities instead of a list of ideas.",
            "**Organizes the hard decision.** Compared scenarios, risks, trade offs, and a clear recommendation when a path has to be chosen.",
          ],
          closing: "Business AI transforms vision into structure, and structure into a business with direction.",
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
      intro: "Tres agentes especializados, sensorial, producto y negocio, diseñados para potenciar tu actuación profesional con repertorio técnico, visión estratégica y apoyo continuo.",
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
            "**Identifica tés por foto.** Envía una imagen de la hoja seca, la infusión o el licor y recibe tipo, probable origen, grado de oxidación y una lectura sensorial de lo que hay en la taza.",
            "**Traduce la percepción en palabra técnica.** Descripciones sensoriales precisas, con vocabulario estandarizado, listas para etiqueta, ficha técnica o presentación.",
            "**Construye cartas de té que venden.** Curaduría completa para restaurantes, hoteles y casas de té, con descripción comercial de cada ítem.",
            "**Crea maridajes y drinks de autor.** Combinaciones con alimentos y coctelería por afinidad aromática, con la justificación sensorial que sostiene el precio.",
            "**Escribe tu discurso de venta.** Textos promocionales, storytelling de producto y propuestas comerciales que comunican valor en lugar de listar ingredientes.",
            "**Estructura experiencias, mini eventos y workshops.** Del guion sensorial a la secuencia de degustación, con el contenido que sostiene la experiencia.",
            "**Prepara clases y contenidos especializados.** Guiones, materiales y explicaciones técnicas sobre té con claridad didáctica.",
          ],
          closing: "Sensory AI transforma percepción en lenguaje, y lenguaje en valor profesional.",
        },
        {
          number: "02",
          name: "Blend AI",
          tag: "Inteligencia de producto aplicada",
          headline: "El socio técnico que transforma ideas en productos reales.",
          body: "Blend AI es el agente especializado en desarrollo de blends y productos a base de té. Fue entrenado para ayudar en la formulación de recetas con equilibrio sensorial, ajustar proporciones, sugerir combinaciones por perfil aromático, orientar procesos de dilución y fijación de aromas, y apoyar la construcción de líneas de producto con identidad y viabilidad comercial.\n\nEs la herramienta ideal para quienes desean crear blends autorales, líneas de té con firma propia o productos para venta con estándar premium.",
          capabilitiesIntro: "QUÉ HACE",
          capabilities: [
            "**Crea blends autorales con equilibrio técnico.** Formulación de recetas con proporciones calculadas, capas aromáticas y firma propia, del primer borrador a la versión final.",
            "**Ajusta proporciones y corrige el perfil sensorial.** Diagnóstico de lo que está desequilibrado en la mezcla y el camino técnico para acertar cuerpo, aroma y persistencia.",
            "**Sugiere combinaciones por afinidad aromática.** Bases, hierbas, especias, frutas y flores compatibles, con la justificación sensorial de cada elección.",
            "**Orienta dilución, fijación y estabilidad de aromas.** Cómo mantener el perfil íntegro a lo largo del tiempo, del envasado al consumo.",
            "**Estructura tu ambiente de preparación.** Montaje del espacio de blending, flujo de trabajo, técnicas de manipulación y utensilios adecuados a cada escala de producción.",
            "**Conduce pruebas de calidad y durabilidad.** Protocolos de cata, control de lote, evaluación de vida útil y registro de resultados.",
            "**Apoya el cumplimiento para la comercialización.** Orientación sobre normas sanitarias, etiquetado y requisitos para llevar el producto al mercado.",
          ],
          closing: "Blend AI transforma intención creativa en producto con criterio, y criterio en diferenciación real.",
        },
        {
          number: "03",
          name: "Business AI",
          tag: "Inteligencia de negocio aplicada",
          headline: "El estratega que organiza decisiones y señala caminos.",
          body: "Business AI es el agente especializado en estrategia y desarrollo de negocios en el mercado del té. Fue entrenado para ayudar en la construcción de planes de negocio, fijación de precios de productos y servicios, análisis de mercado, posicionamiento de marca y definición de estrategias de crecimiento.\n\nEs la herramienta ideal para quienes desean estructurar, reorganizar o expandir un negocio en el sector del té con más claridad, consistencia y visión estratégica.",
          capabilitiesIntro: "QUÉ HACE",
          capabilities: [
            "**Construye el plan de negocio de tu proyecto.** De la definición de modelo y público a la estructura de costos, metas y proyección de ingresos, con lenguaje listo para presentar a socios, bancos o inversores.",
            "**Define precios que sostienen el negocio.** Fijación de precios de productos, servicios y experiencias con margen calculado, comparación de escenarios y justificación de valor para el cliente.",
            "**Lee el mercado y posiciona tu marca.** Análisis de competencia, oportunidades poco exploradas y el territorio de discurso donde tu marca compite sin disputar precio.",
            "**Diseña caminos de crecimiento.** Estrategias de expansión, nuevos canales, alianzas y diferenciación, con prioridad de ejecución en lugar de una lista de ideas.",
            "**Organiza la decisión difícil.** Escenarios comparados, riesgos, trade offs y una recomendación clara cuando hay que elegir un camino.",
          ],
          closing: "Business AI transforma visión en estructura, y estructura en negocio con dirección.",
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
                          <span>
                            {cap.split("**").map((part, j) =>
                              j % 2 === 1 ? <strong key={j} className="text-foreground font-medium">{part}</strong> : part
                            )}
                          </span>
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
