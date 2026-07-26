import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Switch } from "@/components/ui/switch";
import type { Lang } from "@/lib/translations";

const Fade = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

const copy: Record<Lang, {
  heading: string;
  monthly: string;
  annual: string;
  or: string;
  subscribeAnnual: string;
  subscribeMonthly: string;
  comboOnlyAnnual: string;
  comboCta: string;
  recommended: string;
  plans: { name: string; description: string; features: string[] }[];
  combo: { name: string; description: string; features: string[] };
}> = {
  pt: {
    heading: "Escolha o plano ideal para o seu momento.",
    monthly: "Mensal",
    annual: "Anual",
    or: "ou",
    subscribeAnnual: "Assinar anual",
    subscribeMonthly: "Assinar mensal",
    comboOnlyAnnual: "* Combo disponível somente no plano anual",
    comboCta: "Quero o sistema completo",
    recommended: "Recomendado",
    plans: [
      {
        name: "Tea Mind | Sensory AI",
        description: "Para o olhar, o nariz e o paladar treinado.",
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
        features: [
          "Planos de negócio para o setor de chá",
          "Precificação de produtos e serviços",
          "Análise de mercado e posicionamento",
          "Estratégias de crescimento e expansão",
        ],
      },
    ],
    combo: {
      name: "Combo Neural System , 3 Agentes",
      description: "Acesso completo: sensorial, produto e negócio , integrados e disponíveis o tempo todo.",
      features: [
        "Acesso aos 3 agentes especializados",
        "Sensorial + Produto + Negócio integrados",
        "Economia vs. planos avulsos",
        "Suporte completo para todas as áreas",
      ],
    },
  },
  en: {
    heading: "Choose the plan that fits your moment.",
    monthly: "Monthly",
    annual: "Annual",
    or: "or",
    subscribeAnnual: "Subscribe annually",
    subscribeMonthly: "Subscribe monthly",
    comboOnlyAnnual: "* Bundle available on the annual plan only",
    comboCta: "I want the full system",
    recommended: "Recommended",
    plans: [
      {
        name: "Tea Mind | Sensory AI",
        description: "For the trained eye, nose and palate.",
        features: [
          "Sensory analysis with technical language",
          "Tea menus for restaurants and hotels",
          "Pairings by aromatic profile",
          "Specialized content and lessons",
        ],
      },
      {
        name: "Tea Mind | Blend AI",
        description: "For those who create products with intention.",
        features: [
          "Development of signature blends",
          "Proportion adjustment and sensory balance",
          "Dilution and aroma fixation",
          "Compliance with regulatory standards",
        ],
      },
      {
        name: "Tea Mind | Business AI",
        description: "For those who want to grow with strategy.",
        features: [
          "Business plans for the tea sector",
          "Pricing of products and services",
          "Market analysis and positioning",
          "Growth and expansion strategies",
        ],
      },
    ],
    combo: {
      name: "Neural System Bundle , 3 Agents",
      description: "Full access: sensory, product and business , integrated and available at all times.",
      features: [
        "Access to all 3 specialized agents",
        "Sensory + Product + Business integrated",
        "Savings vs. individual plans",
        "Complete support for every area",
      ],
    },
  },
  es: {
    heading: "Elige el plan ideal para tu momento.",
    monthly: "Mensual",
    annual: "Anual",
    or: "o",
    subscribeAnnual: "Suscribirse anual",
    subscribeMonthly: "Suscribirse mensual",
    comboOnlyAnnual: "* Combo disponible solo en el plan anual",
    comboCta: "Quiero el sistema completo",
    recommended: "Recomendado",
    plans: [
      {
        name: "Tea Mind | Sensory AI",
        description: "Para la mirada, la nariz y el paladar entrenado.",
        features: [
          "Análisis sensoriales con lenguaje técnico",
          "Cartas de tés para restaurantes y hoteles",
          "Maridajes por perfil aromático",
          "Contenidos y clases especializadas",
        ],
      },
      {
        name: "Tea Mind | Blend AI",
        description: "Para quien crea producto con intención.",
        features: [
          "Desarrollo de blends de autor",
          "Ajuste de proporciones y equilibrio sensorial",
          "Dilución y fijación de aromas",
          "Conformidad con normas regulatorias",
        ],
      },
      {
        name: "Tea Mind | Business AI",
        description: "Para quien quiere crecer con estrategia.",
        features: [
          "Planes de negocio para el sector del té",
          "Precificación de productos y servicios",
          "Análisis de mercado y posicionamiento",
          "Estrategias de crecimiento y expansión",
        ],
      },
    ],
    combo: {
      name: "Combo Neural System , 3 Agentes",
      description: "Acceso completo: sensorial, producto y negocio , integrados y disponibles todo el tiempo.",
      features: [
        "Acceso a los 3 agentes especializados",
        "Sensorial + Producto + Negocio integrados",
        "Ahorro vs. planes individuales",
        "Soporte completo para todas las áreas",
      ],
    },
  },
};

const pricing = [
  {
    monthly: { price: "R$ 70 / mês", link: "https://pay.hotmart.com/R104714810A?off=tccxvcz3" },
    annual: { price: "R$ 600 à vista", installment: "12x de R$ 63,89", link: "https://pay.hotmart.com/R104714810A?off=91wp1pwp" },
  },
  {
    monthly: { price: "R$ 70 / mês", link: "https://pay.hotmart.com/Q104723929R?off=x5mb43ov" },
    annual: { price: "R$ 600 à vista", installment: "12x de R$ 63,89", link: "https://pay.hotmart.com/Q104723929R?off=57g1hghd" },
  },
  {
    monthly: { price: "R$ 75 / mês", link: "https://pay.hotmart.com/A104733041Q?off=pp3v8i9h" },
    annual: { price: "R$ 600 à vista", installment: "12x de R$ 63,89", link: "https://pay.hotmart.com/A104733041Q?off=4qcpbc0v" },
  },
];

const comboPricing = {
  price: "R$ 1.100 à vista",
  installment: "12x de R$ 117,14",
  link: "https://pay.hotmart.com/H104735466M?off=l9avfqe7",
};

const NeuralPricing = ({ lang }: { lang: Lang }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const c = copy[lang];

  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">{c.heading}</h2>

          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-sans tracking-wider uppercase transition-colors ${!isAnnual ? "text-accent" : "text-primary-foreground/50"}`}>
              {c.monthly}
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm font-sans tracking-wider uppercase transition-colors ${isAnnual ? "text-accent" : "text-primary-foreground/50"}`}>
              {c.annual}
            </span>
          </div>
        </Fade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.plans.map((plan, i) => {
            const p = pricing[i];
            const tier = isAnnual ? p.annual : p.monthly;
            return (
              <Fade key={i}>
                <div className="relative border border-primary-foreground/20 p-6 md:p-8 flex flex-col h-full">
                  <h3 className="font-serif text-lg md:text-xl mb-2">{plan.name}</h3>
                  <p className="text-xs tracking-wider uppercase text-primary-foreground/50 font-sans mb-6">
                    {plan.description}
                  </p>

                  {isAnnual ? (
                    <div className="mb-6">
                      <p className="font-serif text-2xl md:text-3xl">{p.annual.installment}</p>
                      <p className="text-sm text-primary-foreground/50 font-sans mt-2">{c.or} {p.annual.price}</p>
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
                      {isAnnual ? c.subscribeAnnual : c.subscribeMonthly}
                    </a>
                  </div>
                </div>
              </Fade>
            );
          })}

          <Fade>
            <div className="relative border-2 border-accent p-6 md:p-8 flex flex-col h-full">
              <div className="absolute -top-3.5 left-6 bg-accent px-4 py-1">
                <span className="text-[10px] tracking-wider uppercase font-sans text-secondary font-medium">
                  {c.recommended}
                </span>
              </div>

              <h3 className="font-serif text-lg md:text-xl mb-2 mt-2 text-accent">{c.combo.name}</h3>
              <p className="text-xs tracking-wider uppercase text-primary-foreground/50 font-sans mb-6">
                {c.combo.description}
              </p>

              <div className="mb-6">
                <p className="font-serif text-2xl md:text-3xl text-accent">{comboPricing.installment}</p>
                <p className="text-sm text-primary-foreground/50 font-sans mt-2">{c.or} {comboPricing.price}</p>
              </div>

              {!isAnnual && (
                <p className="text-xs text-accent/70 font-sans italic mb-4">{c.comboOnlyAnnual}</p>
              )}

              <ul className="space-y-2 mb-6">
                {c.combo.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-primary-foreground/70 font-sans">
                    <span className="text-accent mt-0.5 text-xs">◆</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={comboPricing.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-3 text-sm tracking-[0.15em] uppercase font-sans bg-accent text-secondary hover:bg-accent/90 font-medium transition-colors duration-300"
                >
                  {c.comboCta}
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default NeuralPricing;
