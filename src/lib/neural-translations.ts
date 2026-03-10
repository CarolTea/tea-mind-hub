import type { Lang } from "@/lib/translations";

type AgentItem = {
  number: string;
  name: string;
  tag: string;
  headline: string;
  body: string;
  capabilitiesIntro: string;
  capabilities: string[];
  closing: string;
};

type PricingTier = {
  title: string;
  badge?: string;
  access: string;
  price: string;
  installment?: string;
  description: string;
  cta: string;
};

type NeuralTranslation = {
  hero: { title: string; subtitle: string; intro: string; badge: string };
  layers: { heading: string; subtitle: string; items: AgentItem[] };
  pricing: { heading: string; monthly: PricingTier; annual: PricingTier; combo: PricingTier };
  cta: { statement: string; button: string };
};

export const neuralTranslations: Record<Lang, NeuralTranslation> = {
  pt: {
    hero: {
      title: "Tea Mind | Neural System",
      subtitle: "A primeira infraestrutura de IA para o mercado de chá no mundo.",
      intro: "O Tea Mind Business Hub apresenta uma camada de inteligência proprietária projetada para profissionais que não aceitam o amadorismo. Nossos sistemas não são assistentes genéricos; são redes neurais treinadas exclusivamente na nossa metodologia profissional, transformando décadas de conhecimento em inteligência aplicada 24/7.",
      badge: "Exclusivo para Profissionais e Empreendedores do Chá",
    },
    layers: {
      heading: "Três agentes. Cada um com uma missão.",
      subtitle: "O Neural System é composto por três inteligências especializadas — não assistentes genéricos, mas agentes treinados com conhecimento real do universo do chá.",
      items: [
        {
          number: "01",
          name: "Tea Mind | Sensory AI",
          tag: "Para o olhar, o nariz e o paladar treinado.",
          headline: "A inteligência do sommelier, disponível quando você precisar.",
          body: "O Sensory AI foi desenvolvido para profissionais que trabalham com a experiência sensorial do chá — sommeliers, consultores, professores e criadores de conteúdo especializado.",
          capabilitiesIntro: "Com ele, você pode:",
          capabilities: [
            "Conduzir e documentar análises sensoriais com linguagem técnica e precisa",
            "Construir cartas de chás para restaurantes, hotéis e espaços especializados",
            "Criar harmonizações fundamentadas em perfis aromáticos e estrutura do chá",
            "Redigir propostas de consultoria e apresentações de serviços com autoridade",
            "Produzir aulas, artigos e conteúdos aprofundados sobre cultura do chá, origem, processamento e muito mais",
          ],
          closing: "Não é uma IA que \"sabe sobre chá\". É uma IA que pensa como sommelier.",
        },
        {
          number: "02",
          name: "Tea Mind | Blend AI",
          tag: "Para quem cria produto com intenção.",
          headline: "Do conceito à formulação — sem achismo, sem desperdício.",
          body: "Criar um blend autoral exige muito mais do que inspiração. Exige conhecimento técnico de ingredientes, domínio de proporções, sensibilidade aromática — e ainda conformidade com as normas vigentes.\n\nO Blend AI foi criado para produtores, formuladores e empreendedores que desenvolvem produtos de chá com seriedade.",
          capabilitiesIntro: "Com ele, você pode:",
          capabilities: [
            "Desenvolver blends autorais com suporte técnico em cada etapa",
            "Ajustar proporções e corrigir desequilíbrios sensoriais com precisão",
            "Trabalhar diluição e fixação de aromas de forma estratégica",
            "Tomar decisões de embalagem alinhadas ao produto e ao posicionamento",
            "Navegar com segurança pelas exigências da Anvisa para produtos à base de ervas",
            "Esclarecer dúvidas sobre processos, procedimentos e viabilidade de fabricação",
          ],
          closing: "O Blend AI é o parceiro técnico que faltava entre a ideia e o produto pronto.",
        },
        {
          number: "03",
          name: "Tea Mind | Business AI",
          tag: "Para quem quer crescer com estratégia.",
          headline: "Inteligência de negócio para o mercado de chá.",
          body: "Não basta ter um produto excepcional ou um repertório técnico robusto. Para prosperar no mercado de chá, você precisa de clareza estratégica — e de ferramentas que entendam as particularidades desse setor.\n\nO Business AI foi desenvolvido para empreendedores e profissionais que precisam tomar decisões com mais embasamento.",
          capabilitiesIntro: "Com ele, você pode:",
          capabilities: [
            "Estruturar ou revisar planos de negócio com foco no setor de chá",
            "Precificar produtos e serviços com critérios claros e sustentáveis",
            "Analisar mercado, posicionamento e oportunidades com profundidade",
            "Desenvolver estratégias de crescimento, portfólio e expansão",
            "Obter orientações práticas sobre gestão, operação e desenvolvimento do negócio",
          ],
          closing: "O Business AI não fala de empreendedorismo em geral. Fala do seu mercado.",
        },
      ],
    },
    pricing: {
      heading: "Escolha o plano ideal para o seu momento.",
      monthly: {
        title: "Plano Mensal Individual",
        access: "Acesso a um agente",
        price: "R$ 70 / mês",
        description: "Ideal para quem quer começar com o agente mais alinhado à sua área de atuação e explorar o sistema com flexibilidade.",
        cta: "Assinar mensal",
      },
      annual: {
        title: "Plano Anual Individual",
        badge: "Mais popular",
        access: "Acesso a um agente — com economia de 10%",
        price: "R$ 600 à vista",
        installment: "ou 12x de R$ 63,89",
        description: "A melhor opção para quem já sabe qual agente precisa e quer comprometer com consistência.",
        cta: "Assinar anual",
      },
      combo: {
        title: "Combo Neural System — 3 Agentes",
        badge: "Recomendado",
        access: "Acesso completo ao sistema",
        price: "R$ 1.100 à vista",
        installment: "ou 12x de R$ 117,14",
        description: "Para quem quer o ecossistema completo: sensorial, produto e negócio — integrados e disponíveis o tempo todo.",
        cta: "Quero o sistema completo",
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
      badge: "Exclusive for Tea Professionals & Entrepreneurs",
    },
    layers: {
      heading: "Three agents. Each with a mission.",
      subtitle: "The Neural System is composed of three specialized intelligences — not generic assistants, but agents trained with real knowledge of the tea universe.",
      items: [
        {
          number: "01",
          name: "Tea Mind | Sensory AI",
          tag: "For the trained eye, nose, and palate.",
          headline: "The sommelier's intelligence, available when you need it.",
          body: "Sensory AI was developed for professionals who work with the sensory experience of tea — sommeliers, consultants, educators, and specialized content creators.",
          capabilitiesIntro: "With it, you can:",
          capabilities: [
            "Conduct and document sensory analyses with precise technical language",
            "Build tea menus for restaurants, hotels, and specialized venues",
            "Create pairings grounded in aromatic profiles and tea structure",
            "Write consultancy proposals and service presentations with authority",
            "Produce classes, articles, and in-depth content about tea culture, origin, processing, and more",
          ],
          closing: "It's not an AI that \"knows about tea.\" It's an AI that thinks like a sommelier.",
        },
        {
          number: "02",
          name: "Tea Mind | Blend AI",
          tag: "For those who create products with intention.",
          headline: "From concept to formulation — no guesswork, no waste.",
          body: "Creating a signature blend requires much more than inspiration. It demands technical knowledge of ingredients, mastery of proportions, aromatic sensitivity — and compliance with current regulations.\n\nBlend AI was built for producers, formulators, and entrepreneurs who develop tea products seriously.",
          capabilitiesIntro: "With it, you can:",
          capabilities: [
            "Develop signature blends with technical support at every stage",
            "Adjust proportions and correct sensory imbalances with precision",
            "Work on dilution and aroma fixation strategically",
            "Make packaging decisions aligned with the product and positioning",
            "Navigate regulatory requirements for herbal-based products safely",
            "Clarify questions about processes, procedures, and manufacturing feasibility",
          ],
          closing: "Blend AI is the technical partner that was missing between the idea and the finished product.",
        },
        {
          number: "03",
          name: "Tea Mind | Business AI",
          tag: "For those who want to grow with strategy.",
          headline: "Business intelligence for the tea market.",
          body: "Having an exceptional product or robust technical repertoire is not enough. To thrive in the tea market, you need strategic clarity — and tools that understand the particularities of this sector.\n\nBusiness AI was developed for entrepreneurs and professionals who need to make better-informed decisions.",
          capabilitiesIntro: "With it, you can:",
          capabilities: [
            "Structure or review business plans focused on the tea sector",
            "Price products and services with clear, sustainable criteria",
            "Analyze market, positioning, and opportunities in depth",
            "Develop growth, portfolio, and expansion strategies",
            "Get practical guidance on management, operations, and business development",
          ],
          closing: "Business AI doesn't talk about entrepreneurship in general. It speaks to your market.",
        },
      ],
    },
    pricing: {
      heading: "Choose the plan that fits your moment.",
      monthly: {
        title: "Individual Monthly Plan",
        access: "Access to one agent",
        price: "R$ 70 / month",
        description: "Ideal for those who want to start with the agent most aligned to their field and explore the system with flexibility.",
        cta: "Subscribe monthly",
      },
      annual: {
        title: "Individual Annual Plan",
        badge: "Most popular",
        access: "Access to one agent — save 10%",
        price: "R$ 600 upfront",
        installment: "or 12x R$ 63.89",
        description: "The best option for those who already know which agent they need and want to commit with consistency.",
        cta: "Subscribe annually",
      },
      combo: {
        title: "Neural System Combo — 3 Agents",
        badge: "Recommended",
        access: "Full system access",
        price: "R$ 1,100 upfront",
        installment: "or 12x R$ 117.14",
        description: "For those who want the complete ecosystem: sensory, product, and business — integrated and available all the time.",
        cta: "Get the full system",
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
      badge: "Exclusivo para Profesionales y Emprendedores del Té",
    },
    layers: {
      heading: "Tres agentes. Cada uno con una misión.",
      subtitle: "El Neural System está compuesto por tres inteligencias especializadas — no asistentes genéricos, sino agentes entrenados con conocimiento real del universo del té.",
      items: [
        {
          number: "01",
          name: "Tea Mind | Sensory AI",
          tag: "Para la mirada, el olfato y el paladar entrenado.",
          headline: "La inteligencia del sommelier, disponible cuando la necesites.",
          body: "Sensory AI fue desarrollado para profesionales que trabajan con la experiencia sensorial del té — sommeliers, consultores, profesores y creadores de contenido especializado.",
          capabilitiesIntro: "Con él, puedes:",
          capabilities: [
            "Conducir y documentar análisis sensoriales con lenguaje técnico y preciso",
            "Construir cartas de té para restaurantes, hoteles y espacios especializados",
            "Crear armonizaciones fundamentadas en perfiles aromáticos y estructura del té",
            "Redactar propuestas de consultoría y presentaciones de servicios con autoridad",
            "Producir clases, artículos y contenidos en profundidad sobre cultura del té, origen, procesamiento y más",
          ],
          closing: "No es una IA que \"sabe sobre té\". Es una IA que piensa como sommelier.",
        },
        {
          number: "02",
          name: "Tea Mind | Blend AI",
          tag: "Para quien crea producto con intención.",
          headline: "Del concepto a la formulación — sin suposiciones, sin desperdicio.",
          body: "Crear un blend autoral exige mucho más que inspiración. Exige conocimiento técnico de ingredientes, dominio de proporciones, sensibilidad aromática — y conformidad con las normas vigentes.\n\nBlend AI fue creado para productores, formuladores y emprendedores que desarrollan productos de té con seriedad.",
          capabilitiesIntro: "Con él, puedes:",
          capabilities: [
            "Desarrollar blends autorales con soporte técnico en cada etapa",
            "Ajustar proporciones y corregir desequilibrios sensoriales con precisión",
            "Trabajar dilución y fijación de aromas de forma estratégica",
            "Tomar decisiones de empaque alineadas al producto y al posicionamiento",
            "Navegar con seguridad por las exigencias regulatorias para productos a base de hierbas",
            "Aclarar dudas sobre procesos, procedimientos y viabilidad de fabricación",
          ],
          closing: "Blend AI es el socio técnico que faltaba entre la idea y el producto terminado.",
        },
        {
          number: "03",
          name: "Tea Mind | Business AI",
          tag: "Para quien quiere crecer con estrategia.",
          headline: "Inteligencia de negocio para el mercado del té.",
          body: "No basta tener un producto excepcional o un repertorio técnico robusto. Para prosperar en el mercado del té, necesitas claridad estratégica — y herramientas que entiendan las particularidades de este sector.\n\nBusiness AI fue desarrollado para emprendedores y profesionales que necesitan tomar decisiones con más fundamento.",
          capabilitiesIntro: "Con él, puedes:",
          capabilities: [
            "Estructurar o revisar planes de negocio enfocados en el sector del té",
            "Precificar productos y servicios con criterios claros y sostenibles",
            "Analizar mercado, posicionamiento y oportunidades en profundidad",
            "Desarrollar estrategias de crecimiento, portafolio y expansión",
            "Obtener orientaciones prácticas sobre gestión, operación y desarrollo del negocio",
          ],
          closing: "Business AI no habla de emprendimiento en general. Habla de tu mercado.",
        },
      ],
    },
    pricing: {
      heading: "Elige el plan ideal para tu momento.",
      monthly: {
        title: "Plan Mensual Individual",
        access: "Acceso a un agente",
        price: "R$ 70 / mes",
        description: "Ideal para quien quiere comenzar con el agente más alineado a su área de actuación y explorar el sistema con flexibilidad.",
        cta: "Suscribirse mensual",
      },
      annual: {
        title: "Plan Anual Individual",
        badge: "Más popular",
        access: "Acceso a un agente — con ahorro de 10%",
        price: "R$ 600 al contado",
        installment: "o 12x de R$ 63,89",
        description: "La mejor opción para quien ya sabe qué agente necesita y quiere comprometerse con consistencia.",
        cta: "Suscribirse anual",
      },
      combo: {
        title: "Combo Neural System — 3 Agentes",
        badge: "Recomendado",
        access: "Acceso completo al sistema",
        price: "R$ 1.100 al contado",
        installment: "o 12x de R$ 117,14",
        description: "Para quien quiere el ecosistema completo: sensorial, producto y negocio — integrados y disponibles todo el tiempo.",
        cta: "Quiero el sistema completo",
      },
    },
    cta: {
      statement: "Esto no es el futuro. Es la metodología Tea Mind transformada en tecnología aplicada.",
      button: "Solicitar Acceso a la Red Neural",
    },
  },
};
