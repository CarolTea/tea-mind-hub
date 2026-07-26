import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Switch } from "@/components/ui/switch";

const t = {
  hero: {
    badge: "Neural System",
    title: "Neural System",
    subtitle: "Uma infraestrutura de inteligência artificial treinada para pensar, criar e decidir com você dentro do mercado do chá.",
    intro: "Três agentes especializados , sensorial, produto e negócio , projetados para potencializar sua atuação profissional com repertório técnico, visão estratégica e apoio contínuo.",
  },
  layers: {
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
        closing: "O Sensory AI transforma percepção em linguagem , e linguagem em valor profissional.",
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
        closing: "O Blend AI transforma intenção criativa em produto com critério , e critério em diferenciação real.",
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
        closing: "O Business AI transforma visão em estrutura , e estrutura em negócio com direção.",
      },
    ],
  },
  cta: {
    statement: "O Neural System não substitui o profissional. Ele potencializa quem já decidiu construir com seriedade.",
    button: "Fale conosco",
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

/* ─── Hero ─── */
const HotmartHero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary to-secondary/95" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
      <Fade>
        <span className="inline-block border border-accent text-accent text-[10px] tracking-[0.3em] uppercase font-sans px-5 py-2 mb-8">
          {t.hero.badge}
        </span>
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-8 font-sans">Tea Mind Business Hub</p>
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
);

/* ─── Agents ─── */
const AgentsSection = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="max-w-4xl mx-auto px-6">
      <Fade>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">{t.layers.heading}</h2>
        <p className="text-base md:text-lg text-foreground/60 text-center max-w-3xl mx-auto mb-20 font-sans leading-relaxed">
          {t.layers.subtitle}
        </p>
      </Fade>

      <div className="space-y-16 md:space-y-24">
        {t.layers.items.map((agent) => (
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
);

/* ─── Pricing Data ─── */
const plans = [
  {
    name: "Tea Mind | Sensory AI",
    description: "Para o olhar, o nariz e o paladar treinado.",
    monthly: { price: "R$ 70 / mês", link: "https://pay.hotmart.com/R104714810A?off=tccxvcz3" },
    annual: { price: "R$ 600 à vista", installment: "ou até 12x de R$ 63,89", link: "https://pay.hotmart.com/R104714810A?off=91wp1pwp" },
    features: [
      "Análises sensoriais com linguagem técnica",
      "Cartas de chás para restaurantes e hotéis",
      "Harmonizações por perfil aromático",
      "Conteúdos e aulas especializadas",
    ],
  },
  {
    name: "Tea Mind | Blend AI",
    description: "Para quem cria produto com intenção.",
    monthly: { price: "R$ 70 / mês", link: "https://pay.hotmart.com/Q104723929R?off=x5mb43ov" },
    annual: { price: "R$ 600 à vista", installment: "ou até 12x de R$ 63,89", link: "https://pay.hotmart.com/Q104723929R?off=57g1hghd" },
    features: [
      "Desenvolvimento de blends autorais",
      "Ajuste de proporções e equilíbrio sensorial",
      "Diluição e fixação de aromas",
      "Conformidade com normas da Anvisa",
    ],
  },
  {
    name: "Tea Mind | Business AI",
    description: "Para quem quer crescer com estratégia.",
    monthly: { price: "R$ 75 / mês", link: "https://pay.hotmart.com/A104733041Q?off=pp3v8i9h" },
    annual: { price: "R$ 600 à vista", installment: "ou até 12x de R$ 63,89", link: "https://pay.hotmart.com/A104733041Q?off=4qcpbc0v" },
    features: [
      "Planos de negócio para o setor de chá",
      "Precificação de produtos e serviços",
      "Análise de mercado e posicionamento",
      "Estratégias de crescimento e expansão",
    ],
  },
];

const combo = {
  name: "Combo Neural System , 3 Agentes",
  description: "Acesso completo: sensorial, produto e negócio , integrados e disponíveis o tempo todo.",
  annual: { price: "R$ 1.100 à vista", installment: "ou até 12x de R$ 117,14", link: "https://pay.hotmart.com/H104735466M?off=l9avfqe7" },
  features: [
    "Acesso aos 3 agentes especializados",
    "Sensorial + Produto + Negócio integrados",
    "Economia vs. planos avulsos",
    "Suporte completo para todas as áreas",
  ],
};

/* ─── Pricing Section ─── */
const HotmartPricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">
            Escolha o plano ideal para o seu momento.
          </h2>

          {/* Coupon Banner */}
          <div className="border-2 border-accent/60 bg-accent/10 px-6 py-4 text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm md:text-base font-sans text-primary-foreground/90">
              🎁 Use o cupom <span className="font-bold text-accent tracking-wider">ALUNOS10</span> e ganhe{" "}
              <span className="font-bold text-accent">10% de desconto</span> em todos os planos.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-sans tracking-wider uppercase transition-colors ${!isAnnual ? "text-accent" : "text-primary-foreground/50"}`}>
              Mensal
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm font-sans tracking-wider uppercase transition-colors ${isAnnual ? "text-accent" : "text-primary-foreground/50"}`}>
              Anual
            </span>
          </div>
        </Fade>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => {
            const tier = isAnnual ? plan.annual : plan.monthly;
            return (
              <Fade key={i}>
                <div className="relative border border-primary-foreground/20 p-6 md:p-8 flex flex-col h-full">
                  <h3 className="font-serif text-lg md:text-xl mb-2">{plan.name}</h3>
                  <p className="text-xs tracking-wider uppercase text-primary-foreground/50 font-sans mb-6">
                    {plan.description}
                  </p>

                  {isAnnual ? (
                    <div className="mb-6">
                      <p className="font-serif text-2xl md:text-3xl">{plan.annual.installment?.replace("ou até ", "")}</p>
                      <p className="text-sm text-primary-foreground/50 font-sans mt-2">ou {plan.annual.price}</p>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <p className="font-serif text-2xl md:text-3xl">{tier.price}</p>
                    </div>
                  )}

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-primary-foreground/70 font-sans">
                        <span className="text-accent mt-0.5 text-xs">◆</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <a
                      href={tier.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-4 py-3 text-sm tracking-[0.15em] uppercase font-sans border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-300"
                    >
                      {isAnnual ? "Assinar anual" : "Assinar mensal"}
                    </a>
                  </div>
                </div>
              </Fade>
            );
          })}

          {/* Combo Card */}
          <Fade>
            <div className="relative border-2 border-accent p-6 md:p-8 flex flex-col h-full">
              <div className="absolute -top-3.5 left-6 bg-accent px-4 py-1">
                <span className="text-[10px] tracking-wider uppercase font-sans text-secondary font-medium">
                  Recomendado
                </span>
              </div>

              <h3 className="font-serif text-lg md:text-xl mb-2 mt-2 text-accent">{combo.name}</h3>
              <p className="text-xs tracking-wider uppercase text-primary-foreground/50 font-sans mb-6">
                {combo.description}
              </p>

              <div className="mb-6">
                <p className="font-serif text-2xl md:text-3xl text-accent">{combo.annual.installment?.replace("ou até ", "")}</p>
                <p className="text-sm text-primary-foreground/50 font-sans mt-2">ou {combo.annual.price}</p>
              </div>

              {!isAnnual && (
                <p className="text-xs text-accent/70 font-sans italic mb-4">* Combo disponível somente no plano anual</p>
              )}

              <ul className="space-y-2 mb-6">
                {combo.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-primary-foreground/70 font-sans">
                    <span className="text-accent mt-0.5 text-xs">◆</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={combo.annual.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-3 text-sm tracking-[0.15em] uppercase font-sans bg-accent text-secondary hover:bg-accent/90 font-medium transition-colors duration-300"
                >
                  Quero o sistema completo
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const HotmartCta = () => (
  <section className="bg-secondary text-secondary-foreground py-24 md:py-32">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <Fade>
        <div className="w-16 h-px bg-accent mx-auto mb-10" />
        <p className="font-serif text-2xl md:text-3xl text-secondary-foreground/90 mb-12 leading-relaxed">
          {t.cta.statement}
        </p>
        <a
          href="mailto:contato@teamindbusinesshub.com"
          className="inline-block border-2 border-accent text-accent px-10 py-4 text-sm tracking-[0.2em] uppercase font-sans hover:bg-accent hover:text-secondary transition-colors duration-300"
        >
          {t.cta.button}
        </a>
        <div className="w-16 h-px bg-accent mx-auto mt-10" />
      </Fade>
    </div>
  </section>
);

/* ─── Page ─── */
const HotmartNeuralSystem = () => (
  <div className="min-h-screen bg-background">
    <main>
      <HotmartHero />
      <AgentsSection />
      <HotmartPricingSection />
      <HotmartCta />
    </main>
  </div>
);

export default HotmartNeuralSystem;
