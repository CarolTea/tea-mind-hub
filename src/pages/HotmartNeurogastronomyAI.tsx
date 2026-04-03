import { useFadeIn } from "@/hooks/useFadeIn";

const Fade = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary to-secondary/95" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
      <Fade>
        <span className="inline-block border border-accent text-accent text-[10px] tracking-[0.3em] uppercase font-sans px-5 py-2 mb-8">
          Neurogastronomy AI
        </span>
        <p className="text-xs tracking-[0.35em] uppercase text-accent mb-8 font-sans">Tea Mind Business Hub</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Tea Mind | Neurogastronomy AI
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mb-8" />
        <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-12 font-sans">
          A única inteligência artificial do mundo dedicada à neurogastronomia do chá , seu braço direito para dominar a ciência por trás das experiências sensoriais.
        </p>
        <p className="text-base md:text-lg text-secondary-foreground/60 max-w-2xl mx-auto leading-relaxed font-sans">
          Desenvolvida para ser o acelerador do método ensinado na Especialização em Neurogastronomia, ela une os pilares de Neurociência, Fitoquímica e Análise Sensorial em uma ferramenta tecnológica sem precedentes.
        </p>
      </Fade>
    </div>
  </section>
);

/* ─── Method Block ─── */
const MethodBlock = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="max-w-3xl mx-auto px-6">
      <Fade>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
          O Cérebro do Método na Palma da sua Mão
        </h2>
        <div className="border-l-2 border-accent pl-8">
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-sans mb-6">
            Diferente de IAs genéricas, esta ferramenta foi rigorosamente treinada com o conteúdo técnico e científico da formação, unindo pilares de Neurociência, Fitoquímica e Análise Sensorial.
          </p>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-sans">
            Ela funciona como um "copiloto" intelectual, disponível 24 horas por dia para ajudar o especialista a aplicar conceitos complexos de forma imediata e prática em seu cotidiano profissional.
          </p>
        </div>
      </Fade>
    </div>
  </section>
);

/* ─── Capabilities ─── */
const capabilities = [
  {
    title: "Criação Intencional",
    body: "Auxilia no desenvolvimento de blends e produtos baseados em fitoquímica sensorial, garantindo que cada ingrediente , de flores a raízes , desperte emoções e memórias específicas no cérebro do cliente.",
  },
  {
    title: "Design de Experiências",
    body: "Suporte na construção de cartas de chás sensoriais, rituais de hospitalidade e menus afetivos, utilizando gatilhos que vão além do paladar, como cor, aroma e narrativa sensorial.",
  },
  {
    title: "Embasamento Científico",
    body: "Traduz a ciência de como o sabor nasce no cérebro antes mesmo do primeiro gole, permitindo que nutricionistas, chefs e terapeutas ofereçam soluções com real intenção emocional e biológica.",
  },
  {
    title: "Consultoria Estratégica",
    body: "Funciona como uma base de conhecimento para diagnósticos rápidos em consultorias para restaurantes, spas e hotéis, elevando o posicionamento do profissional no mercado.",
  },
];

const CapabilitiesSection = () => (
  <section className="bg-secondary text-secondary-foreground py-24 md:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <Fade>
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">Funcionalidades e Diferenciais</h2>
        <p className="text-base text-secondary-foreground/60 text-center max-w-2xl mx-auto mb-16 font-sans">
          Quatro pilares que transformam conhecimento em aplicação prática e diferenciação profissional.
        </p>
      </Fade>
      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
        {capabilities.map((cap, i) => (
          <Fade key={i}>
            <div className="border border-secondary-foreground/20 p-8 md:p-10 h-full">
              <span className="font-serif text-4xl text-accent/30 block mb-4">0{i + 1}</span>
              <h3 className="font-serif text-xl md:text-2xl mb-4">{cap.title}</h3>
              <div className="w-10 h-px bg-accent/40 mb-6" />
              <p className="text-base text-secondary-foreground/70 leading-relaxed font-sans">{cap.body}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Closing ─── */
const ClosingBlock = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <Fade>
        <div className="w-16 h-px bg-accent mx-auto mb-10" />
        <p className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed italic">
          "Esta IA não substitui o conhecimento do especialista, mas potencializa sua criatividade e precisão técnica, permitindo que a teoria se transforme em experiência memorável com um clique."
        </p>
        <p className="text-base text-foreground/60 font-sans mt-8">
          É a tecnologia servindo à consciência sensorial.
        </p>
        <div className="w-16 h-px bg-accent mx-auto mt-10" />
      </Fade>
    </div>
  </section>
);

/* ─── Pricing ─── */
const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Plano Anual",
      description: "Acesso completo com o melhor custo-benefício.",
      monthly: null,
      annual: {
        installment: "12x de R$ 107",
        price: "R$ 1.000 à vista",
        link: "https://pay.hotmart.com/A105211518D?off=vig97m2v&checkoutMode=6",
      },
      features: [
        "Acesso ilimitado à Neurogastronomy AI",
        "Criação de blends com fitoquímica sensorial",
        "Design de experiências e cartas sensoriais",
        "Embasamento científico sob demanda",
        "Consultoria estratégica para negócios",
      ],
    },
    {
      name: "Plano Mensal",
      description: "Flexibilidade para começar agora.",
      monthly: {
        price: "R$ 150 / mês",
        link: "https://pay.hotmart.com/A105211518D?off=byzkffdp&checkoutMode=6",
      },
      annual: null,
      features: [
        "Acesso ilimitado à Neurogastronomy AI",
        "Criação de blends com fitoquímica sensorial",
        "Design de experiências e cartas sensoriais",
        "Embasamento científico sob demanda",
        "Consultoria estratégica para negócios",
      ],
    },
  ];

  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Fade>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">
            Escolha o plano ideal para você.
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

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Annual Card */}
          <Fade>
            <div className={`relative border-2 ${isAnnual ? "border-accent" : "border-primary-foreground/20"} p-6 md:p-8 flex flex-col h-full transition-colors`}>
              {isAnnual && (
                <div className="absolute -top-3.5 left-6 bg-accent px-4 py-1">
                  <span className="text-[10px] tracking-wider uppercase font-sans text-secondary font-medium">
                    Recomendado
                  </span>
                </div>
              )}
              <h3 className={`font-serif text-lg md:text-xl mb-2 ${isAnnual ? "mt-2 text-accent" : ""}`}>{plans[0].name}</h3>
              <p className="text-xs tracking-wider uppercase text-primary-foreground/50 font-sans mb-6">
                {plans[0].description}
              </p>
              <div className="mb-6">
                <p className={`font-serif text-2xl md:text-3xl ${isAnnual ? "text-accent" : ""}`}>{plans[0].annual!.installment}</p>
                <p className="text-sm text-primary-foreground/50 font-sans mt-2">ou {plans[0].annual!.price}</p>
              </div>
              <ul className="space-y-2 mb-6">
                {plans[0].features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-primary-foreground/70 font-sans">
                    <span className="text-accent mt-0.5 text-xs">◆</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href={plans[0].annual!.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-4 py-3 text-sm tracking-[0.15em] uppercase font-sans font-medium transition-colors duration-300 ${
                    isAnnual
                      ? "bg-accent text-secondary hover:bg-accent/90"
                      : "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  Assinar anual
                </a>
              </div>
            </div>
          </Fade>

          {/* Monthly Card */}
          <Fade>
            <div className={`relative border-2 ${!isAnnual ? "border-accent" : "border-primary-foreground/20"} p-6 md:p-8 flex flex-col h-full transition-colors`}>
              {!isAnnual && (
                <div className="absolute -top-3.5 left-6 bg-accent px-4 py-1">
                  <span className="text-[10px] tracking-wider uppercase font-sans text-secondary font-medium">
                    Flexível
                  </span>
                </div>
              )}
              <h3 className={`font-serif text-lg md:text-xl mb-2 ${!isAnnual ? "mt-2 text-accent" : ""}`}>{plans[1].name}</h3>
              <p className="text-xs tracking-wider uppercase text-primary-foreground/50 font-sans mb-6">
                {plans[1].description}
              </p>
              <div className="mb-6">
                <p className={`font-serif text-2xl md:text-3xl ${!isAnnual ? "text-accent" : ""}`}>{plans[1].monthly!.price}</p>
                <p className="text-sm text-primary-foreground/50 font-sans mt-2">sem compromisso de permanência</p>
              </div>
              <ul className="space-y-2 mb-6">
                {plans[1].features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-primary-foreground/70 font-sans">
                    <span className="text-accent mt-0.5 text-xs">◆</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href={plans[1].monthly!.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-4 py-3 text-sm tracking-[0.15em] uppercase font-sans font-medium transition-colors duration-300 ${
                    !isAnnual
                      ? "bg-accent text-secondary hover:bg-accent/90"
                      : "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  Assinar mensal
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
const CtaSection = () => (
  <section className="bg-secondary text-secondary-foreground py-24 md:py-32">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <Fade>
        <div className="w-16 h-px bg-accent mx-auto mb-10" />
        <p className="font-serif text-2xl md:text-3xl text-secondary-foreground/90 mb-12 leading-relaxed">
          A Neurogastronomy AI não substitui o profissional. Ela potencializa quem já decidiu construir com ciência e consciência sensorial.
        </p>
        <a
          href="mailto:contato@teamindbusinesshub.com"
          className="inline-block border-2 border-accent text-accent px-10 py-4 text-sm tracking-[0.2em] uppercase font-sans hover:bg-accent hover:text-secondary transition-colors duration-300"
        >
          Fale conosco
        </a>
        <div className="w-16 h-px bg-accent mx-auto mt-10" />
      </Fade>
    </div>
  </section>
);

/* ─── Page ─── */
const HotmartNeurogastronomyAI = () => (
  <div className="min-h-screen bg-background">
    <main>
      <Hero />
      <MethodBlock />
      <CapabilitiesSection />
      <ClosingBlock />
      <PricingSection />
      <CtaSection />
    </main>
  </div>
);

export default HotmartNeurogastronomyAI;
