import type { Lang } from "@/lib/translations";

export const neuralTranslations: Record<Lang, {
  hero: { title: string; subtitle: string; intro: string };
  layers: { heading: string; items: Array<{ number: string; name: string; subtitle: string; description: string; why: string }> };
  pricing: { heading: string; plans: Array<{ name: string; description: string; monthly: string; annual: string }>; combo: { title: string; subtitle: string; monthly: string; annual: string; annualNote: string }; cta: string; monthlyLabel: string; annualLabel: string };
  cta: { statement: string; button: string };
}> = {
  pt: {
    hero: {
      title: "Tea Mind | Neural System",
      subtitle: "A primeira infraestrutura de IA para o mercado de chá no mundo.",
      intro: "O Tea Mind Business Hub apresenta uma camada de inteligência proprietária projetada para profissionais que não aceitam o amadorismo. Nossos sistemas não são assistentes genéricos; são redes neurais treinadas exclusivamente na nossa metodologia profissional, transformando décadas de conhecimento em inteligência aplicada 24/7.",
    },
    layers: {
      heading: "The Intelligence Layers",
      items: [
        {
          number: "01",
          name: "Tea Mind | Sensory AI",
          subtitle: "O Cérebro Digital para Sommeliers de Chá.",
          description: "Elimine a subjetividade e domine a precisão sensorial. Esta IA foi treinada para diagnosticar terroirs, decifrar perfis organolépticos complexos e estruturar harmonizações de alto nível em segundos.",
          why: "Para validar amostras com rigor técnico, educar seu paladar com suporte especializado e nunca mais ter dúvidas sobre a qualidade de um lote.",
        },
        {
          number: "02",
          name: "Tea Mind | Blender AI",
          subtitle: "Inteligência de Bancada para o Desenvolvimento de Produtos.",
          description: "A alquimia encontra a engenharia de dados. Um sistema programado com algoritmos botânicos para garantir equilíbrio, estabilidade e viabilidade comercial em cada criação.",
          why: "Para criar fórmulas de blends autorais sem desperdiçar matéria-prima, garantindo que sua receita seja inovadora e lucrativa desde o primeiro teste.",
        },
        {
          number: "03",
          name: "Tea Mind | Business AI",
          subtitle: "Estratégia de Mercado transformada em Infraestrutura Neural.",
          description: "O seu copiloto executivo para a gestão e escala de negócios. Da precificação estratégica à conformidade regulatória (MAPA/ANVISA), esta IA traduz dados em lucro.",
          why: "Para tomar decisões de negócio seguras, validar seu ROI e acelerar o crescimento da sua empresa com a precisão de um algoritmo de business dedicado.",
        },
      ],
    },
    pricing: {
      heading: "Escolha o nível de inteligência necessário para o seu momento profissional.",
      monthlyLabel: "Mensal",
      annualLabel: "Anual",
      cta: "Solicitar Acesso",
      plans: [
        { name: "Sensory AI", description: "Precisão sensorial e diagnóstico de terroirs com IA dedicada.", monthly: "R$ [Valor] /mês", annual: "R$ [Valor] /ano" },
        { name: "Blender AI", description: "Desenvolvimento de blends autorais com inteligência de bancada.", monthly: "R$ [Valor] /mês", annual: "R$ [Valor] /ano" },
        { name: "Business AI", description: "Gestão estratégica e escala de negócios com copiloto executivo.", monthly: "R$ [Valor] /mês", annual: "R$ [Valor] /ano" },
      ],
      combo: {
        title: "Tea Mind Neural Full Access",
        subtitle: "Acesso total às 3 IAs (Sensory, Blender e Business) operando em sinergia absoluta.",
        monthly: "R$ [Valor] /mês",
        annual: "R$ [Valor] /ano",
        annualNote: "O melhor investimento para quem lidera o mercado.",
      },
    },
    cta: {
      statement: "Este não é o futuro. É a metodologia Tea Mind transformada em tecnologia aplicada.",
      button: "Solicitar Acesso à Rede Neural",
    },
  },
  en: {
    hero: {
      title: "Tea Mind | Neural System",
      subtitle: "The world's first AI infrastructure for the tea market.",
      intro: "Tea Mind Business Hub introduces a proprietary intelligence layer designed for professionals who refuse amateurism. Our systems are not generic assistants; they are neural networks trained exclusively on our professional methodology, transforming decades of knowledge into applied intelligence 24/7.",
    },
    layers: {
      heading: "The Intelligence Layers",
      items: [
        {
          number: "01",
          name: "Tea Mind | Sensory AI",
          subtitle: "The Digital Brain for Tea Sommeliers.",
          description: "Eliminate subjectivity and master sensory precision. This AI was trained to diagnose terroirs, decipher complex organoleptic profiles, and structure high-level pairings in seconds.",
          why: "To validate samples with technical rigor, educate your palate with specialized support, and never again doubt the quality of a lot.",
        },
        {
          number: "02",
          name: "Tea Mind | Blender AI",
          subtitle: "Bench Intelligence for Product Development.",
          description: "Alchemy meets data engineering. A system programmed with botanical algorithms to ensure balance, stability, and commercial viability in every creation.",
          why: "To create signature blend formulas without wasting raw materials, ensuring your recipe is innovative and profitable from the very first test.",
        },
        {
          number: "03",
          name: "Tea Mind | Business AI",
          subtitle: "Market Strategy Transformed into Neural Infrastructure.",
          description: "Your executive copilot for business management and scaling. From strategic pricing to regulatory compliance, this AI translates data into profit.",
          why: "To make safe business decisions, validate your ROI, and accelerate your company's growth with the precision of a dedicated business algorithm.",
        },
      ],
    },
    pricing: {
      heading: "Choose the level of intelligence your professional moment demands.",
      monthlyLabel: "Monthly",
      annualLabel: "Annual",
      cta: "Request Access",
      plans: [
        { name: "Sensory AI", description: "Sensory precision and terroir diagnostics with dedicated AI.", monthly: "[Value] /month", annual: "[Value] /year" },
        { name: "Blender AI", description: "Signature blend development with bench intelligence.", monthly: "[Value] /month", annual: "[Value] /year" },
        { name: "Business AI", description: "Strategic management and business scaling with executive copilot.", monthly: "[Value] /month", annual: "[Value] /year" },
      ],
      combo: {
        title: "Tea Mind Neural Full Access",
        subtitle: "Full access to all 3 AIs (Sensory, Blender, and Business) operating in absolute synergy.",
        monthly: "[Value] /month",
        annual: "[Value] /year",
        annualNote: "The best investment for those who lead the market.",
      },
    },
    cta: {
      statement: "This is not the future. It is the Tea Mind methodology transformed into applied technology.",
      button: "Request Neural Network Access",
    },
  },
  es: {
    hero: {
      title: "Tea Mind | Neural System",
      subtitle: "La primera infraestructura de IA para el mercado del té en el mundo.",
      intro: "Tea Mind Business Hub presenta una capa de inteligencia propietaria diseñada para profesionales que no aceptan el amateurismo. Nuestros sistemas no son asistentes genéricos; son redes neuronales entrenadas exclusivamente en nuestra metodología profesional, transformando décadas de conocimiento en inteligencia aplicada 24/7.",
    },
    layers: {
      heading: "The Intelligence Layers",
      items: [
        {
          number: "01",
          name: "Tea Mind | Sensory AI",
          subtitle: "El Cerebro Digital para Sommeliers de Té.",
          description: "Elimine la subjetividad y domine la precisión sensorial. Esta IA fue entrenada para diagnosticar terroirs, descifrar perfiles organolépticos complejos y estructurar armonizaciones de alto nivel en segundos.",
          why: "Para validar muestras con rigor técnico, educar su paladar con soporte especializado y nunca más tener dudas sobre la calidad de un lote.",
        },
        {
          number: "02",
          name: "Tea Mind | Blender AI",
          subtitle: "Inteligencia de Laboratorio para el Desarrollo de Productos.",
          description: "La alquimia encuentra la ingeniería de datos. Un sistema programado con algoritmos botánicos para garantizar equilibrio, estabilidad y viabilidad comercial en cada creación.",
          why: "Para crear fórmulas de blends autorales sin desperdiciar materia prima, garantizando que su receta sea innovadora y rentable desde la primera prueba.",
        },
        {
          number: "03",
          name: "Tea Mind | Business AI",
          subtitle: "Estrategia de Mercado transformada en Infraestructura Neural.",
          description: "Su copiloto ejecutivo para la gestión y escalabilidad de negocios. Desde la precificación estratégica hasta la conformidad regulatoria, esta IA traduce datos en ganancia.",
          why: "Para tomar decisiones de negocio seguras, validar su ROI y acelerar el crecimiento de su empresa con la precisión de un algoritmo de business dedicado.",
        },
      ],
    },
    pricing: {
      heading: "Elija el nivel de inteligencia necesario para su momento profesional.",
      monthlyLabel: "Mensual",
      annualLabel: "Anual",
      cta: "Solicitar Acceso",
      plans: [
        { name: "Sensory AI", description: "Precisión sensorial y diagnóstico de terroirs con IA dedicada.", monthly: "[Valor] /mes", annual: "[Valor] /año" },
        { name: "Blender AI", description: "Desarrollo de blends autorales con inteligencia de laboratorio.", monthly: "[Valor] /mes", annual: "[Valor] /año" },
        { name: "Business AI", description: "Gestión estratégica y escalabilidad de negocios con copiloto ejecutivo.", monthly: "[Valor] /mes", annual: "[Valor] /año" },
      ],
      combo: {
        title: "Tea Mind Neural Full Access",
        subtitle: "Acceso total a las 3 IAs (Sensory, Blender y Business) operando en sinergia absoluta.",
        monthly: "[Valor] /mes",
        annual: "[Valor] /año",
        annualNote: "La mejor inversión para quienes lideran el mercado.",
      },
    },
    cta: {
      statement: "Esto no es el futuro. Es la metodología Tea Mind transformada en tecnología aplicada.",
      button: "Solicitar Acceso a la Red Neural",
    },
  },
};
