import type { Lang } from "./translations";

export const neuroTranslations: Record<Lang, {
  hero: { title: string; subtitle: string; statement1: string; statement2: string };
  science: { p1: string; p2: string; p3: string; p4: string; closing1: string; closing2: string };
  experience: { title: string; intro: string; bullets: string[]; closing: string };
  product: { title: string; intro: string; bullets: string[]; closing: string };
  sector: { title: string; p1: string; p2: string; p3: string; p4: string };
  academic: { title: string; bullets: string[]; closing1: string; closing2: string };
  pricing: { price: string; subtitle: string; cta: string };
  direction: {
    title: string;
    closing: string;
    profiles: Array<{ name: string; title: string; bio: string }>;
  };
}> = {
  pt: {
    hero: {
      title: "Neurogastronomia de Chás & Botânicos",
      subtitle: "Arquitetura científica da experiência sensorial aplicada ao mercado contemporâneo",
      statement1: "A experiência não acontece na xícara.",
      statement2: "Ela acontece no cérebro.",
    },
    science: {
      p1: "A percepção de sabor é uma construção neurocognitiva que integra aroma, memória, contexto, expectativa, textura, temperatura e significado cultural. O que chamamos de \"gosto\" é, na verdade, um processo de interpretação.",
      p2: "A neurogastronomia fornece o modelo científico para compreender essa construção.",
      p3: "Aplicada a chás e botânicos, ela se torna um instrumento estratégico.",
      p4: "Complexidade aromática, diversidade fitoquímica e camadas culturais transformam o chá em um sistema sofisticado de criação de experiência — capaz de gerar valor mesmo em cenários de menor consumo volumétrico.",
      closing1: "O profissional que entende essa arquitetura não apenas prepara.",
      closing2: "Ele projeta.",
    },
    experience: {
      title: "Experiência como Competência",
      intro: "Em um mercado saturado de oferta, o diferencial não está na variedade de insumos, mas na capacidade de estruturar percepção. Neurogastronomia aplicada permite:",
      bullets: [
        "Construir experiências multissensoriais com intenção",
        "Desenvolver produtos com coerência sensorial",
        "Criar harmonizações com base neurocientífica",
        "Estruturar cartas e menus com lógica cognitiva",
        "Refinar atendimento e hospitalidade",
        "Elevar a experiência pessoal com o chá para além do hábito",
      ],
      closing: "Trata-se de transformar sensorialidade em método.",
    },
    product: {
      title: "Desenvolvimento de Produto e Posicionamento",
      intro: "Chás e ervas oferecem uma plataforma privilegiada para inovação:",
      bullets: [
        "Criação de blends com arquitetura aromática consciente",
        "Experiências de harmonização de alta precisão",
        "Design sensorial aplicado a hospitalidade",
        "Desenvolvimento de linhas botânicas com identidade clara",
        "Posicionamento premium baseado em complexidade e coerência",
      ],
      closing: "Compreender como o cérebro organiza percepção permite desenhar produtos que comunicam intenção — não apenas sabor.",
    },
    sector: {
      title: "Contexto Setorial",
      p1: "Mudanças no comportamento alimentar — incluindo intervenções metabólicas como os agonistas de GLP-1 — reforçam uma tendência já em curso: a migração do valor da quantidade para a qualidade experiencial.",
      p2: "Menos consumo não significa menos relevância.",
      p3: "Significa maior exigência de impacto sensorial e significado.",
      p4: "Chás e botânicos ocupam posição estratégica nesse cenário por sua capacidade de oferecer profundidade aromática, ritual estruturado e experiência de alto valor cognitivo.",
    },
    academic: {
      title: "Estrutura Acadêmica",
      bullets: [
        "Fundamentos de neurogastronomia e construção neural do sabor",
        "Processamento olfativo e integração retronasal",
        "Emoção, memória e expectativa na percepção",
        "Fitoquímica sensorial aplicada",
        "Camellia sinensis sob lente neurocientífica",
        "Botânicos brasileiros e repertório sensorial",
        "Harmonização orientada por arquitetura cognitiva",
        "Design sensorial e posicionamento profissional",
      ],
      closing1: "O foco não é teoria isolada.",
      closing2: "É aplicação estruturada.",
    },
    pricing: {
      price: "U$350",
      subtitle: "Aulas + IA treinada em Neurogastronomia",
      cta: "Inscreva-se",
    },
    direction: {
      title: "Direção Acadêmica",
      closing: "A convergência dessas três expertises sustenta o rigor e a aplicabilidade do programa.",
      profiles: [
        {
          name: "Raquel Magalhães",
          title: "Sommelière de Chá · Nutricionista · Especialista em Fitoterapia e Ayurveda",
          bio: "Professora convidada da Le Cordon Bleu Rio de Janeiro e colunista da Casa e Jardim. Integra ciência da nutrição, tradição botânica e análise sensorial com abordagem estruturada.",
        },
        {
          name: "Carol Tavares",
          title: "Sommelière de Chá · Mestra em Harmonização · Especialista em Drinks com Chá",
          bio: "Professora na ABS-RJ e responsável por experiências sensoriais na Chá Pra Quê!. Atua na interseção entre gastronomia, harmonização e aplicação prática.",
        },
        {
          name: "Carla Vicente",
          title: "Sommelière de Chá · Tea Barista · Especialista em Chás Gelados",
          bio: "Responsável pela dimensão operacional e pela tradução da arquitetura sensorial em experiência real. Especialista em execução técnica de serviço.",
        },
      ],
    },
  },
  en: {
    hero: {
      title: "Tea & Botanical Neurogastronomy",
      subtitle: "The scientific architecture of sensory experience applied to the contemporary market",
      statement1: "The experience does not happen in the cup.",
      statement2: "It happens in the brain.",
    },
    science: {
      p1: "Flavor perception is a neurocognitive construction that integrates aroma, memory, context, expectation, texture, temperature, and cultural meaning. What we call \"taste\" is, in reality, an interpretive process.",
      p2: "Neurogastronomy provides the scientific model to understand this construction.",
      p3: "Applied to teas and botanicals, it becomes a strategic instrument.",
      p4: "Aromatic complexity, phytochemical diversity, and cultural layers transform tea into a sophisticated experience-creation system — capable of generating value even in scenarios of reduced volumetric consumption.",
      closing1: "The professional who understands this architecture does not just prepare.",
      closing2: "They design.",
    },
    experience: {
      title: "Experience as Competence",
      intro: "In a market saturated with offerings, the differentiator lies not in the variety of ingredients, but in the ability to structure perception. Applied neurogastronomy enables:",
      bullets: [
        "Building multisensory experiences with intention",
        "Developing products with sensory coherence",
        "Creating pairings grounded in neuroscience",
        "Structuring menus with cognitive logic",
        "Refining service and hospitality",
        "Elevating the personal tea experience beyond habit",
      ],
      closing: "It is about transforming sensoriality into method.",
    },
    product: {
      title: "Product Development & Positioning",
      intro: "Teas and botanicals offer a privileged platform for innovation:",
      bullets: [
        "Blend creation with conscious aromatic architecture",
        "High-precision pairing experiences",
        "Sensory design applied to hospitality",
        "Botanical line development with clear identity",
        "Premium positioning based on complexity and coherence",
      ],
      closing: "Understanding how the brain organizes perception allows you to design products that communicate intention — not just flavor.",
    },
    sector: {
      title: "Sector Context",
      p1: "Shifts in dietary behavior — including metabolic interventions such as GLP-1 agonists — reinforce a trend already underway: the migration of value from quantity to experiential quality.",
      p2: "Less consumption does not mean less relevance.",
      p3: "It means greater demand for sensory impact and meaning.",
      p4: "Teas and botanicals occupy a strategic position in this landscape through their capacity to offer aromatic depth, structured ritual, and high cognitive-value experience.",
    },
    academic: {
      title: "Academic Structure",
      bullets: [
        "Fundamentals of neurogastronomy and neural flavor construction",
        "Olfactory processing and retronasal integration",
        "Emotion, memory, and expectation in perception",
        "Applied sensory phytochemistry",
        "Camellia sinensis through a neuroscientific lens",
        "Brazilian botanicals and sensory repertoire",
        "Pairing guided by cognitive architecture",
        "Sensory design and professional positioning",
      ],
      closing1: "The focus is not isolated theory.",
      closing2: "It is structured application.",
    },
    pricing: {
      price: "U$350",
      subtitle: "Classes + AI trained in Neurogastronomy",
      cta: "Enroll Now",
    },
    direction: {
      title: "Academic Direction",
      closing: "The convergence of these three areas of expertise sustains the rigor and applicability of the program.",
      profiles: [
        {
          name: "Raquel Magalhães",
          title: "Tea Sommelier · Nutritionist · Phytotherapy & Ayurveda Specialist",
          bio: "Guest lecturer at Le Cordon Bleu Rio de Janeiro and columnist for Casa e Jardim. Integrates nutrition science, botanical tradition, and sensory analysis with a structured approach.",
        },
        {
          name: "Carol Tavares",
          title: "Tea Sommelier · Pairing Master · Tea Cocktail Specialist",
          bio: "Instructor at ABS-RJ and responsible for sensory experiences at Chá Pra Quê!. Works at the intersection of gastronomy, pairing, and practical application.",
        },
        {
          name: "Carla Vicente",
          title: "Tea Sommelier · Tea Barista · Iced Tea Specialist",
          bio: "Responsible for the operational dimension and the translation of sensory architecture into real experience. Specialist in technical service execution.",
        },
      ],
    },
  },
  es: {
    hero: {
      title: "Neurogastronomía de Tés & Botánicos",
      subtitle: "Arquitectura científica de la experiencia sensorial aplicada al mercado contemporáneo",
      statement1: "La experiencia no ocurre en la taza.",
      statement2: "Ocurre en el cerebro.",
    },
    science: {
      p1: "La percepción del sabor es una construcción neurocognitiva que integra aroma, memoria, contexto, expectativa, textura, temperatura y significado cultural. Lo que llamamos \"gusto\" es, en realidad, un proceso de interpretación.",
      p2: "La neurogastronomía proporciona el modelo científico para comprender esta construcción.",
      p3: "Aplicada a tés y botánicos, se convierte en un instrumento estratégico.",
      p4: "Complejidad aromática, diversidad fitoquímica y capas culturales transforman el té en un sistema sofisticado de creación de experiencia — capaz de generar valor incluso en escenarios de menor consumo volumétrico.",
      closing1: "El profesional que entiende esta arquitectura no solo prepara.",
      closing2: "Diseña.",
    },
    experience: {
      title: "Experiencia como Competencia",
      intro: "En un mercado saturado de oferta, el diferencial no está en la variedad de insumos, sino en la capacidad de estructurar percepción. La neurogastronomía aplicada permite:",
      bullets: [
        "Construir experiencias multisensoriales con intención",
        "Desarrollar productos con coherencia sensorial",
        "Crear maridajes con base neurocientífica",
        "Estructurar cartas y menús con lógica cognitiva",
        "Refinar la atención y la hospitalidad",
        "Elevar la experiencia personal con el té más allá del hábito",
      ],
      closing: "Se trata de transformar sensorialidad en método.",
    },
    product: {
      title: "Desarrollo de Producto y Posicionamiento",
      intro: "Tés y hierbas ofrecen una plataforma privilegiada para la innovación:",
      bullets: [
        "Creación de blends con arquitectura aromática consciente",
        "Experiencias de maridaje de alta precisión",
        "Diseño sensorial aplicado a la hospitalidad",
        "Desarrollo de líneas botánicas con identidad clara",
        "Posicionamiento premium basado en complejidad y coherencia",
      ],
      closing: "Comprender cómo el cerebro organiza la percepción permite diseñar productos que comunican intención — no solo sabor.",
    },
    sector: {
      title: "Contexto Sectorial",
      p1: "Cambios en el comportamiento alimentario — incluyendo intervenciones metabólicas como los agonistas de GLP-1 — refuerzan una tendencia ya en curso: la migración del valor de la cantidad hacia la calidad experiencial.",
      p2: "Menos consumo no significa menos relevancia.",
      p3: "Significa mayor exigencia de impacto sensorial y significado.",
      p4: "Tés y botánicos ocupan una posición estratégica en este escenario por su capacidad de ofrecer profundidad aromática, ritual estructurado y experiencia de alto valor cognitivo.",
    },
    academic: {
      title: "Estructura Académica",
      bullets: [
        "Fundamentos de neurogastronomía y construcción neural del sabor",
        "Procesamiento olfativo e integración retronasal",
        "Emoción, memoria y expectativa en la percepción",
        "Fitoquímica sensorial aplicada",
        "Camellia sinensis bajo la lente neurocientífica",
        "Botánicos brasileños y repertorio sensorial",
        "Maridaje orientado por arquitectura cognitiva",
        "Diseño sensorial y posicionamiento profesional",
      ],
      closing1: "El enfoque no es teoría aislada.",
      closing2: "Es aplicación estructurada.",
    },
    pricing: {
      price: "U$350",
      subtitle: "Clases + IA entrenada en Neurogastronomía",
      cta: "Inscríbete",
    },
    direction: {
      title: "Dirección Académica",
      closing: "La convergencia de estas tres áreas de expertise sustenta el rigor y la aplicabilidad del programa.",
      profiles: [
        {
          name: "Raquel Magalhães",
          title: "Sommelier de Té · Nutricionista · Especialista en Fitoterapia y Ayurveda",
          bio: "Profesora invitada en Le Cordon Bleu Río de Janeiro y columnista de Casa e Jardim. Integra ciencia de la nutrición, tradición botánica y análisis sensorial con un enfoque estructurado.",
        },
        {
          name: "Carol Tavares",
          title: "Sommelier de Té · Maestra en Maridaje · Especialista en Drinks con Té",
          bio: "Profesora en ABS-RJ y responsable de experiencias sensoriales en Chá Pra Quê!. Actúa en la intersección entre gastronomía, maridaje y aplicación práctica.",
        },
        {
          name: "Carla Vicente",
          title: "Sommelier de Té · Tea Barista · Especialista en Tés Helados",
          bio: "Responsable de la dimensión operativa y de la traducción de la arquitectura sensorial en experiencia real. Especialista en ejecución técnica de servicio.",
        },
      ],
    },
  },
};
