import type { Lang } from "./translations";

export interface ProgramData {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription?: string;
  mainDescription: string;
  bodyText: string;
  forWhoIntro: string;
  forWhoItems: string[];
  includesTitle: string;
  includesItems: string[];
  formationText: string;
  directionTitle: string;
  directionText: string;
  cta: string;
  comingSoon?: boolean;
  contentUrls?: { label: string; url: string }[];
  hotmartUrl?: string;
}

export interface ProgramCategory {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  programs: ProgramData[];
}

export interface ProgramsPageTranslation {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  diagnosis: {
    text: string;
    cta1: string;
    cta2: string;
  };
  forWhoTitle: string;
  includesTitle: string;
  comingSoonLabel: string;
  comingSoonText: string;
  categories: ProgramCategory[];
}

/* ============================================================
 * Helper builders to keep the data file readable.
 * ============================================================ */

const ptCommon = {
  forWhoTitle: "Para quem é",
  includesTitle: "O que inclui",
  forWhoIntro: "Este programa é para quem:",
  includesLabel: "O que inclui",
  cta: "Fazer o Diagnóstico Gratuito",
};

const enCommon = {
  forWhoTitle: "Who is it for",
  includesTitle: "What's included",
  forWhoIntro: "This program is for those who:",
  includesLabel: "What's included",
  cta: "Take the Free Diagnosis",
};

const esCommon = {
  forWhoTitle: "¿Para quién es?",
  includesTitle: "Qué incluye",
  forWhoIntro: "Este programa es para quienes:",
  includesLabel: "Qué incluye",
  cta: "Hacer el Diagnóstico Gratuito",
};

/* ============================================================
 * PT
 * ============================================================ */

const ptCategories: ProgramCategory[] = [
  {
    id: "profissionalizantes",
    eyebrow: "01 , Profissionalizantes",
    title: "Programas Profissionalizantes",
    description:
      "Trajetórias completas de formação profissional para quem deseja atuar, criar produtos ou construir um negócio no mercado do chá com profundidade técnica e visão estratégica.",
    programs: [
      {
        id: "atuacao",
        title: "Tea Mind Atuação com Chá",
        subtitle: "Sommelier de Chá",
        shortDescription:
          "Para quem deseja atuar como Sommelier de Chá com mais clareza, direção e visão de mercado.",
        mainDescription:
          "Nosso programa de formação profissional e acompanhamento estratégico para quem deseja atuar com chá com mais clareza, direção e visão de mercado.",
        bodyText:
          "No Tea Mind Atuação com Chá, o aluno ingressa na formação de Sommelier de Chá & Tea Barista empreendedor e desenvolve sua trajetória ao longo de uma jornada acompanhada por onboarding estratégico, Smart Journey e sessões estratégicas aplicadas à sua realidade, para transformar conhecimento em atuação profissional real.",
        forWhoIntro: ptCommon.forWhoIntro,
        forWhoItems: [
          "Deseja trabalhar com chá de forma profissional, séria e bem direcionada",
          "Quer transformar o chá em uma forma de atuação e monetização",
          "Busca integrar o chá à sua profissão atual, ao seu negócio ou à sua expressão autoral",
          "Está aberto a novos caminhos de atuar com chá como experiências, oficinas, workshops, atendimento, curadoria, hospitalidade, representação de marcas, consultorias",
          "Deseja construir uma trajetória com visão empreendedora, mesmo começando de forma gradual",
          "Entende que atuar com chá exige formação robusta, repertório e direcionamento aplicado",
        ],
        includesTitle: ptCommon.includesLabel,
        includesItems: [
          "Formação de Sommelier de Chá & Tea Barista",
          "Tea Box",
          "Onboarding estratégico",
          "Smart Journey | Mapa de atuação Tea Mind",
          "2 sessões estratégicas ao longo da jornada",
          "Acesso estendido ao conteúdo , 24 meses",
          "Certificação após aprovação nas provas intermediárias e finais",
        ],
        formationText:
          "Uma formação profissional robusta, desenvolvida para quem deseja atuar com chá com profundidade, seriedade e visão de mercado , e não apenas ter um contato introdutório com o tema.",
        directionTitle: "Como funciona o nosso direcionamento",
        directionText:
          "O programa parte de uma base técnica e profissional consistente, mas a forma como essa jornada se organiza ganha direção a partir da realidade de cada aluno.\n\nNo onboarding, mapeamos contexto, objetivos, repertório e possibilidades. O Smart Journey organiza esse olhar em um mapa personalizado, e as sessões estratégicas ajudam você a transformar a formação em um caminho aplicável ao tipo de atuação que você deseja construir.",
        cta: ptCommon.cta,
        contentUrls: [{ label: "Conheça o conteúdo programático", url: "https://gamma.app/docs/Programa-Atuacao-com-Chas-lee9e9ao6tgwbxc" }],
        hotmartUrl: "https://pay.hotmart.com/N105799398X",
      },
      {
        id: "laboratorio",
        title: "Tea Mind Laboratório de Marcas de Chá",
        subtitle: "Tea Blender",
        shortDescription:
          "Para quem deseja se tornar um Tea Blender e criar uma linha de chás com assinatura própria, padrão premium e potencial real de mercado.",
        mainDescription:
          "Nosso programa de formação profissional e acompanhamento estratégico para quem deseja criar uma linha de chás com assinatura própria, padrão premium e posicionamento de mercado.",
        bodyText:
          "No Tea Mind Laboratório de Marcas de Chá, o aluno ingressa na formação em Tea Blender empreendedor e percorre uma jornada acompanhada por onboarding estratégico, Smart Journey e sessões estratégicas aplicadas à sua realidade, estruturadas para transformar ideias em produtos com identidade, viabilidade comercial e potencial real de venda.",
        forWhoIntro: ptCommon.forWhoIntro,
        forWhoItems: [
          "Deseja criar uma linha de chás com assinatura própria, visão de mercado e valor percebido",
          "Quer desenvolver blends com o mesmo padrão internacional de marcas conceituadas (Dammann Frères, Palais des Thés), critério técnico e diferenciação real",
          "Busca transformar uma ideia em produto vendável, e não apenas em uma mistura artesanal sem direção",
          "Gosta de unir criatividade, técnica e estratégia na criação de produtos",
          "Entende que desenvolver uma linha de chá exige conhecimento sério sobre formulação, mercado, critérios regulatórios e estrutura de negócio",
        ],
        includesTitle: ptCommon.includesLabel,
        includesItems: [
          "Formação em Tea Blender",
          "Tea Box",
          "Onboarding estratégico",
          "Smart Journey | Mapa de marca e produto",
          "2 sessões estratégicas ao longo da jornada",
          "Acesso estendido ao conteúdo",
          "Certificação após aprovação do seu blend profissional para avaliação",
        ],
        formationText:
          "Uma formação profissional robusta, desenvolvida para quem deseja criar produtos com seriedade, profundidade técnica e visão de mercado , e não apenas aprender a misturar ingredientes.",
        directionTitle: "Como funciona o direcionamento",
        directionText:
          "O programa parte de uma base sólida de formação em tea blending com técnicas avançadas de grandes marcas e a jornada ganha direção a partir da realidade de cada aluno.\n\nNo onboarding, mapeamos objetivos, momento, contexto, capacidade de investimento e o tipo de produto ou marca que a pessoa deseja construir. O Smart Journey organiza esse olhar em um mapa personalizado, e as sessões estratégicas ajudam a transformar a formação em um caminho aplicável à criação da linha, ao posicionamento da marca e à entrada no mercado.",
        cta: ptCommon.cta,
        contentUrls: [{ label: "Conheça o conteúdo programático", url: "https://gamma.app/docs/Programa-Laboratorio-de-Marcas-f2sp39blxam9xy9" }],
        hotmartUrl: "https://pay.hotmart.com/N105798350Q",
      },
      {
        id: "full-experience",
        title: "Tea Mind Full Experience",
        shortDescription:
          "Para quem quer construir algo completo, sólido e de longo prazo no mercado do chá.",
        mainDescription:
          "Nosso programa premium de formação aprofundada e direção estratégica para quem deseja acessar o capital intelectual mais completo da Tea Mind e construir sua trajetória ou negócio no mercado do chá com mais repertório, clareza e consistência.",
        bodyText:
          "No Tea Mind Full Experience, o aluno percorre a jornada mais completa do hub, reunindo formações, especializações e Encontros de Arquitetura Estratégica para transformar conhecimento em construção real, com profundidade técnica, visão de mercado e direção aplicada ao que deseja desenvolver.",
        forWhoIntro: ptCommon.forWhoIntro,
        forWhoItems: [
          "Deseja acessar a jornada mais completa da Tea Mind, com profundidade técnica e visão estratégica",
          "Valoriza estudo sério, repertório amplo e formação consistente no mercado do chá",
          "Quer reunir, em um mesmo programa, diferentes frentes de formação, especialização e direcionamento aplicado",
          "Busca construir uma trajetória profissional ou um negócio com mais estrutura, clareza e maturidade",
          "Entende que resultados mais consistentes exigem aprofundamento, tempo de construção e apoio estratégico em momentos-chave",
          "Deseja ter acesso ao núcleo mais robusto do capital intelectual da Tea Mind",
        ],
        includesTitle: ptCommon.includesLabel,
        includesItems: [
          "Tea Mind Atuação com Chá",
          "Tea Mind Laboratório de Marcas de Chá",
          "Especialização em Eventos e Experiências com Chá",
          "Especialização em Harmonização com Chás",
          "2 Tea Boxes, uma de cada formação principal",
          "Onboarding estratégico",
          "Smart Journey | Mapa estratégico Tea Mind",
          "6 Encontros de Arquitetura Estratégica",
          "36 meses de acesso ao conteúdo incluído no programa",
          "24 meses para utilizar os Encontros de Arquitetura Estratégica",
        ],
        formationText:
          "Uma jornada premium e aprofundada para quem deseja desenvolver repertório técnico, visão de mercado e direção estratégica em um nível mais amplo, consistente e integrado dentro do universo do chá.",
        directionTitle: "Como funciona o direcionamento",
        directionText:
          "O Full Experience parte de uma jornada robusta de formação e especializações, mas ganha direção a partir da realidade de cada aluno.\n\nNo onboarding, mapeamos contexto, objetivos, ambição e possibilidades. O Smart Journey organiza esse olhar em um mapa estratégico personalizado, e os Encontros de Arquitetura Estratégica ajudam a transformar estudo em construção real, apoiando decisões importantes ao longo de até 24 meses, conforme a evolução de cada pessoa.",
        cta: ptCommon.cta,
        contentUrls: [
          { label: "Conteúdo Atuação com Chá", url: "https://gamma.app/docs/Programa-Atuacao-com-Chas-lee9e9ao6tgwbxc" },
          { label: "Conteúdo Laboratório de Marcas", url: "https://gamma.app/docs/Programa-Laboratorio-de-Marcas-f2sp39blxam9xy9" },
        ],
        hotmartUrl: "https://pay.hotmart.com/W105798749J",
      },
    ],
  },
  {
    id: "aprimoramento",
    eyebrow: "02 , Aprimoramento",
    title: "Programas de Aprimoramento",
    description:
      "Especializações para profissionais do chá que desejam aprofundar repertório técnico, ampliar áreas de atuação e diferenciar sua presença no mercado.",
    programs: [
      {
        id: "eventos",
        title: "Especialização em Eventos com Chá",
        subtitle: "Especialização",
        shortDescription:
          "Para quem deseja criar, produzir e conduzir experiências e eventos com chá com padrão profissional, identidade própria e visão de mercado.",
        mainDescription:
          "Especialização para profissionais que desejam estruturar experiências e eventos com chá com padrão profissional, identidade própria e visão de mercado.",
        bodyText:
          "Eventos com chá são uma das frentes mais promissoras do mercado: experiências sensoriais, harmonizações, workshops, eventos corporativos, brunches, jantares temáticos. Esta especialização ensina a criar, estruturar e conduzir essas experiências com padrão profissional, repertório técnico e visão de negócio.",
        forWhoIntro: ptCommon.forWhoIntro,
        forWhoItems: [
          "Deseja atuar com eventos, experiências e degustações de chá",
          "Quer agregar uma frente de receita à sua atuação como Sommelier ou Tea Blender",
          "Busca estruturar experiências com identidade, técnica e padrão profissional",
          "Atua com hospitalidade, gastronomia ou produção de eventos e quer integrar o chá",
        ],
        includesTitle: ptCommon.includesLabel,
        includesItems: [
          "Aulas aplicadas à criação e produção de eventos com chá",
          "Repertório de formatos: experiências, workshops, brunches, eventos corporativos",
          "Material de apoio com estrutura operacional e comercial",
          "Certificação de especialização",
        ],
        formationText: "",
        directionTitle: "Como funciona",
        directionText:
          "Uma especialização prática e aplicada, voltada a quem deseja transformar o chá em experiências comercializáveis, com padrão profissional e repertório próprio.",
        cta: ptCommon.cta,
      },
      {
        id: "harmonizacao",
        title: "Especialização em Harmonização com Chás",
        subtitle: "Especialização",
        shortDescription:
          "Domine a harmonização entre chás, alimentos e bebidas com a técnica HARCOR, criando experiências gastronômicas sofisticadas.",
        mainDescription:
          "Especialização para profissionais que desejam dominar a harmonização entre chás e alimentos, criando experiências gastronômicas sensoriais, sofisticadas e tecnicamente consistentes.",
        bodyText:
          "A harmonização com chás é uma das competências mais relevantes para quem atua com hospitalidade, gastronomia, eventos, consultorias, experiências premium e curadoria sensorial. Nesta especialização, o aluno aprofunda critérios técnicos, culturais e sensoriais para criar combinações com lógica, beleza e diferenciação real.\n\nUm dos diferenciais do nosso programa é a técnica HARCOR, desenvolvida pela professora Carol Tavares, que amplia o olhar tradicional da harmonização para além da semelhança e do contraste. A partir dela, o aluno aprende a construir harmonizações mais profundas, considerando textura, estrutura, intensidade, contexto sensorial e narrativa da experiência.",
        forWhoIntro: ptCommon.forWhoIntro,
        forWhoItems: [
          "Deseja se especializar em harmonização entre chás, alimentos e bebidas",
          "Atua ou pretende atuar em hospitalidade, restaurantes, hotéis, consultorias, eventos ou experiências gastronômicas",
          "Quer ampliar repertório técnico e criar combinações com critério profissional",
          "Busca diferenciar sua atuação com uma camada sensorial mais sofisticada",
          "Deseja aplicar o chá em experiências com queijos, chocolates, vinhos, jantares e menus harmonizados",
        ],
        includesTitle: ptCommon.includesLabel,
        includesItems: [
          "Aulas aplicadas à harmonização entre chás e alimentos",
          "Técnica HARCOR de harmonização desenvolvida pela professora Carol Tavares",
          "Critérios técnicos, sensoriais, culturais e gastronômicos",
          "Estudos de caso e exercícios práticos",
          "Aula prática de jantar harmonizado com chás",
          "Aula prática de harmonização com queijos",
          "Aula prática de harmonização com chocolates",
          "Aula prática de harmonização com vinhos",
          "Certificação de especialização",
        ],
        formationText: "",
        directionTitle: "Como funciona",
        directionText:
          "Nesta especialização sensorial o objetivo é que o aluno saia com mais segurança, repertório técnico e método para criar harmonizações coerentes, memoráveis e estrategicamente pensadas.",
        cta: ptCommon.cta,
      },
      {
        id: "neurogastronomia",
        title: "Especialização em Neurogastronomia de Chás e Ervas",
        subtitle: "Especialização",
        shortDescription:
          "1ª Especialização em Neurogastronomia de Chás e Ervas da América Latina. 8 aulas no Método SENSO, 30 horas, com Raquel Magalhães.",
        mainDescription:
          "1ª Especialização em Neurogastronomia de Chás e Ervas da América Latina, criada para profissionais que desejam unir ciência, sensorialidade e aplicação prática real no mercado de chás e ervas.",
        bodyText:
          "Compreenda como sabor, aroma, contexto, percepção e emoção se articulam na experiência com chás e ervas, e transforme esse conhecimento em repertório prático para sua atuação profissional. A formação amplia sua leitura sobre como experiências sensoriais são construídas no cérebro humano, a partir do Método SENSO criado por Raquel Magalhães.\n\nUma abordagem integrada que une áreas que normalmente não se conversam no mercado do chá: Neurociência, Fitoquímica, Chás e Ervas, Sensorialidade, Emoção e Design de Experiência. Conteúdo estruturado sobre base científica para que você descubra como comunicar melhor, fechar mais contratos e aumentar suas vendas.",
        forWhoIntro: ptCommon.forWhoIntro,
        forWhoItems: [
          "Sommeliers de Chá, Tea Blenders e Tea Baristas",
          "Empreendedores e marcas do universo do chá",
          "Profissionais de eventos, consultorias e experiências",
          "Profissionais da gastronomia e do bem-estar integrativo",
          "Estudiosos e apaixonados pelo universo do chá",
        ],
        includesTitle: ptCommon.includesLabel,
        includesItems: [
          "8 aulas gravadas no Método SENSO, criado por Raquel Magalhães",
          "Aula 0 de nivelamento em chás para quem ainda não é profissional do chá",
          "Encontros ao vivo de perguntas e respostas",
          "30 dias de acesso à IA proprietária da Especialização (bônus da 2ª turma)",
          "Acesso às gravações por 12 meses",
          "Material de apoio em PDF e exercícios",
          "30 horas de conteúdo entre aulas, nivelamento e materiais complementares",
          "Certificado digital como Especialista em Neurogastronomia de Chás e Ervas",
        ],
        formationText: "",
        directionTitle: "Estrutura do programa",
        directionText:
          "Aula 1, Fundamentos da Análise Sensorial. Aula 2, Fundamentos da Neurogastronomia. Aula 3, Os 5 Sentidos e a Neurogastronomia. Aula 4, Comportamento Alimentar. Aula 5, Fitoquímica Sensorial. Aula 6, Camellia sinensis no contexto da Neurogastronomia. Aula 7, Harmonização com base na Neurogastronomia. Aula 8, Design Sensorial e Posicionamento Profissional.\n\nConduzida por Raquel Magalhães (criadora do Método SENSO, professora convidada do Le Cordon Bleu Rio de Janeiro), Carol Tavares e Carla Vicente.",
        cta: ptCommon.cta,
      },
    ],
  },
  {
    id: "aceleracao",
    eyebrow: "03 , Aceleração",
    title: "Programas de Aceleração",
    description:
      "Diagnóstico estratégico e estruturação para empreendedores que já iniciaram, mas precisam reorganizar a base do negócio com mais clareza, segurança e direção.",
    programs: [
      {
        id: "sprint",
        title: "Tea Mind Sprint Smart",
        shortDescription:
          "Para quem já começou mas ainda não tem clareza nem segurança sobre o que está construindo.",
        mainDescription:
          "Nosso programa de diagnóstico estratégico e redirecionamento para quem já começou a investir no seu negócio de chá, mas ainda não tem clareza nem segurança sobre o que está construindo.",
        bodyText:
          "Um dos erros mais comuns de quem começa no mercado do chá é tentar vender antes de entender a fatia do mercado que deseja ocupar.\n\nProduto, embalagem e divulgação podem até dar a sensação de avanço, mas negócios consistentes nascem de outra lógica: mercado, estratégia, produto, posicionamento e só então venda.\n\nO Sprint foi desenhado exatamente para corrigir essa inversão: trazer clareza, reorganizar prioridades e estruturar decisões com mais inteligência, antes que mais tempo, energia e dinheiro sejam investidos no lugar errado.",
        forWhoIntro: ptCommon.forWhoIntro,
        forWhoItems: [
          "Já começou a investir em produto, embalagem, marketing, operação ou imagem, mas ainda não estruturou o negócio com base estratégica",
          "Sente que está fazendo muitas coisas ao mesmo tempo, sem clareza do que realmente precisa priorizar",
          "Entrou em execução antes de compreender mercado, produto, posicionamento e lógica de negócio",
          "Deseja revisar decisões antes de continuar investindo tempo, energia e dinheiro",
          "Precisa de uma leitura estratégica do que já construiu e do que precisa corrigir",
          "Quer sair do improviso e reorganizar o negócio com mais segurança",
        ],
        includesTitle: ptCommon.includesLabel,
        includesItems: [
          "Formulário de análise do negócio",
          "Documento devolutivo com diagnóstico",
          "3 sessões estratégicas",
          "30 dias de suporte via WhatsApp",
          "30 dias de acesso à IA de Negócios",
          "Um curso de chá para quem ainda precisa consolidar a base de conhecimento do setor",
          "Um material digital de apoio à estruturação de negócios de chá",
        ],
        formationText: "",
        directionTitle: "Como funciona o direcionamento",
        directionText:
          "O Sprint começa com uma análise do negócio para entender o que já foi feito, o que foi investido, quais decisões precisam ser revistas e onde estão os principais gargalos.\n\nA partir disso, o aluno recebe um diagnóstico devolutivo e percorre três sessões estratégicas voltadas a reorganizar prioridades, corrigir a base do negócio e orientar próximos passos mais seguros e coerentes com a realidade atual.",
        cta: ptCommon.cta,
      },
      {
        id: "arquitetura-comercial",
        title: "Tea Mind Arquitetura Comercial",
        shortDescription:
          "Programa de aceleração comercial para negócios de chá. Em desenvolvimento.",
        mainDescription:
          "Programa de aceleração comercial para negócios de chá em estágio de estruturação e crescimento.",
        bodyText: "",
        forWhoIntro: "",
        forWhoItems: [],
        includesTitle: ptCommon.includesLabel,
        includesItems: [],
        formationText: "",
        directionTitle: "",
        directionText: "",
        cta: ptCommon.cta,
        comingSoon: true,
      },
    ],
  },
];

/* ============================================================
 * EN
 * ============================================================ */

const enCategories: ProgramCategory[] = [
  {
    id: "profissionalizantes",
    eyebrow: "01 , Professional",
    title: "Professional Programs",
    description:
      "Complete training journeys for those who want to work, create products, or build a business in the tea market with technical depth and strategic vision.",
    programs: [
      {
        id: "atuacao",
        title: "Tea Mind Working with Tea",
        subtitle: "Tea Sommelier",
        shortDescription:
          "For those who want to work as a Tea Sommelier with more clarity, direction, and market vision.",
        mainDescription:
          "Our professional training and strategic guidance program for those who want to work with tea with more clarity, direction, and market vision.",
        bodyText:
          "In Tea Mind Working with Tea, the student enters the Tea Sommelier & Entrepreneurial Tea Barista training and develops their trajectory along a journey accompanied by strategic onboarding, Smart Journey, and strategic sessions applied to their reality, to transform knowledge into real professional practice.",
        forWhoIntro: enCommon.forWhoIntro,
        forWhoItems: [
          "Want to work with tea professionally, seriously, and with clear direction",
          "Want to transform tea into a form of practice and monetization",
          "Seek to integrate tea into their current profession, business, or authorial expression",
          "Are open to new ways of working with tea such as experiences, workshops, service, curation, hospitality, brand representation, consulting",
          "Want to build a trajectory with an entrepreneurial vision, even starting gradually",
          "Understand that working with tea requires robust training, repertoire, and applied guidance",
        ],
        includesTitle: enCommon.includesLabel,
        includesItems: [
          "Tea Sommelier & Tea Barista Training",
          "Tea Box",
          "Strategic onboarding",
          "Smart Journey | Tea Mind Practice Map",
          "2 strategic sessions throughout the journey",
          "Extended content access , 24 months",
          "Certification upon passing intermediate and final exams",
        ],
        formationText:
          "A robust professional training developed for those who want to work with tea with depth, seriousness, and market vision , not just have an introductory contact with the subject.",
        directionTitle: "How our guidance works",
        directionText:
          "The program starts from a consistent technical and professional base, but the way this journey is organized gains direction from each student's reality.\n\nDuring onboarding, we map context, goals, repertoire, and possibilities. The Smart Journey organizes this perspective into a personalized map, and strategic sessions help you transform training into an applicable path for the type of practice you want to build.",
        cta: enCommon.cta,
      },
      {
        id: "laboratorio",
        title: "Tea Mind Tea Brand Lab",
        subtitle: "Tea Blender",
        shortDescription:
          "For those who want to become a Tea Blender and create a tea line with their own signature, premium standards, and real market potential.",
        mainDescription:
          "Our professional training and strategic guidance program for those who want to create a tea line with their own signature, premium standards, and market positioning.",
        bodyText:
          "In Tea Mind Tea Brand Lab, the student enters the Entrepreneurial Tea Blender training and follows a journey accompanied by strategic onboarding, Smart Journey, and strategic sessions applied to their reality, structured to transform ideas into products with identity, commercial viability, and real sales potential.",
        forWhoIntro: enCommon.forWhoIntro,
        forWhoItems: [
          "Want to create a tea line with their own signature, market vision, and perceived value",
          "Want to develop blends with the same international standard as renowned brands (Dammann Frères, Palais des Thés), technical criteria, and real differentiation",
          "Seek to transform an idea into a sellable product, not just an artisanal mix without direction",
          "Enjoy combining creativity, technique, and strategy in product creation",
          "Understand that developing a tea line requires serious knowledge about formulation, market, regulatory criteria, and business structure",
        ],
        includesTitle: enCommon.includesLabel,
        includesItems: [
          "Tea Blender Training",
          "Tea Box",
          "Strategic onboarding",
          "Smart Journey | Brand and product map",
          "2 strategic sessions throughout the journey",
          "Extended content access",
          "Certification upon approval of your professional blend for evaluation",
        ],
        formationText:
          "A robust professional training developed for those who want to create products with seriousness, technical depth, and market vision , not just learn to mix ingredients.",
        directionTitle: "How the guidance works",
        directionText:
          "The program starts from a solid foundation of tea blending training with advanced techniques from major brands, and the journey gains direction from each student's reality.\n\nDuring onboarding, we map goals, timing, context, investment capacity, and the type of product or brand the person wants to build. The Smart Journey organizes this perspective into a personalized map, and strategic sessions help transform training into an applicable path for line creation, brand positioning, and market entry.",
        cta: enCommon.cta,
      },
      {
        id: "full-experience",
        title: "Tea Mind Full Experience",
        shortDescription:
          "For those who want to build something complete, solid, and long-term in the tea market.",
        mainDescription:
          "Our premium program of in-depth training and strategic direction for those who want to access Tea Mind's most complete intellectual capital and build their trajectory or business in the tea market with more repertoire, clarity, and consistency.",
        bodyText:
          "In Tea Mind Full Experience, the student follows the hub's most complete journey, combining training, specializations, and Strategic Architecture Meetings to transform knowledge into real construction, with technical depth, market vision, and direction applied to what they want to develop.",
        forWhoIntro: enCommon.forWhoIntro,
        forWhoItems: [
          "Want to access Tea Mind's most complete journey, with technical depth and strategic vision",
          "Value serious study, broad repertoire, and consistent training in the tea market",
          "Want to combine, in one program, different fronts of training, specialization, and applied guidance",
          "Seek to build a professional trajectory or business with more structure, clarity, and maturity",
          "Understand that more consistent results require deepening, construction time, and strategic support at key moments",
          "Want access to the most robust core of Tea Mind's intellectual capital",
        ],
        includesTitle: enCommon.includesLabel,
        includesItems: [
          "Tea Mind Working with Tea",
          "Tea Mind Tea Brand Lab",
          "Specialization in Tea Events and Experiences",
          "Specialization in Pairing MasterChef",
          "2 Tea Boxes, one from each main training",
          "Strategic onboarding",
          "Smart Journey | Tea Mind Strategic Map",
          "6 Strategic Architecture Meetings",
          "36 months of access to program content",
          "24 months to use Strategic Architecture Meetings",
        ],
        formationText:
          "A premium and in-depth journey for those who want to develop technical repertoire, market vision, and strategic direction at a broader, more consistent, and integrated level within the tea universe.",
        directionTitle: "How the guidance works",
        directionText:
          "Full Experience starts from a robust journey of training and specializations, but gains direction from each student's reality.\n\nDuring onboarding, we map context, goals, ambition, and possibilities. The Smart Journey organizes this perspective into a personalized strategic map, and the Strategic Architecture Meetings help transform study into real construction, supporting important decisions over up to 24 months, according to each person's evolution.",
        cta: enCommon.cta,
      },
    ],
  },
  {
    id: "aprimoramento",
    eyebrow: "02 , Enhancement",
    title: "Enhancement Programs",
    description:
      "Specializations for tea professionals who want to deepen technical repertoire, expand areas of practice, and differentiate their presence in the market.",
    programs: [
      {
        id: "eventos",
        title: "Specialization in Tea Events",
        subtitle: "Specialization",
        shortDescription:
          "For those who want to create, produce, and host tea experiences and events with professional standards, distinct identity, and market vision.",
        mainDescription:
          "A specialization for professionals who want to structure tea experiences and events with professional standards, distinct identity, and market vision.",
        bodyText:
          "Tea events are one of the most promising fronts of the market: sensory experiences, pairings, workshops, corporate events, brunches, themed dinners. This specialization teaches how to create, structure, and host these experiences with professional standards, technical repertoire, and business vision.",
        forWhoIntro: enCommon.forWhoIntro,
        forWhoItems: [
          "Want to work with tea events, experiences, and tastings",
          "Want to add a revenue stream to their work as a Sommelier or Tea Blender",
          "Seek to structure experiences with identity, technique, and professional standards",
          "Work in hospitality, gastronomy, or event production and want to integrate tea",
        ],
        includesTitle: enCommon.includesLabel,
        includesItems: [
          "Classes applied to creating and producing tea events",
          "Repertoire of formats: experiences, workshops, brunches, corporate events",
          "Support material with operational and commercial structure",
          "Specialization certification",
        ],
        formationText: "",
        directionTitle: "How it works",
        directionText:
          "A practical and applied specialization for those who want to turn tea into commercializable experiences with professional standards and a personal repertoire.",
        cta: enCommon.cta,
      },
      {
        id: "harmonizacao",
        title: "Specialization in Tea Pairing",
        subtitle: "Specialization",
        shortDescription:
          "Master tea pairing with food and beverages through the HARCOR technique, creating sophisticated gastronomic experiences.",
        mainDescription:
          "A specialization for professionals who want to master the pairing of teas with food, creating sensory, sophisticated, and technically consistent gastronomic experiences.",
        bodyText:
          "Tea pairing is one of the most relevant skills for those working in hospitality, gastronomy, events, consulting, premium experiences, and sensory curation. In this specialization, students deepen technical, cultural, and sensory criteria to craft combinations with logic, beauty, and real differentiation.\n\nOne of our program's differentiators is the HARCOR technique, developed by Professor Carol Tavares, which broadens the traditional view of pairing beyond similarity and contrast. Through it, students learn to build deeper pairings, considering texture, structure, intensity, sensory context, and the narrative of the experience.",
        forWhoIntro: enCommon.forWhoIntro,
        forWhoItems: [
          "Want to specialize in pairing teas with food and beverages",
          "Work or plan to work in hospitality, restaurants, hotels, consulting, events, or gastronomic experiences",
          "Want to expand technical repertoire and create combinations with professional criteria",
          "Seek to differentiate their practice with a more sophisticated sensory layer",
          "Want to apply tea in experiences with cheeses, chocolates, wines, dinners, and paired menus",
        ],
        includesTitle: enCommon.includesLabel,
        includesItems: [
          "Classes applied to pairing teas with food",
          "HARCOR pairing technique developed by Professor Carol Tavares",
          "Technical, sensory, cultural, and gastronomic criteria",
          "Case studies and practical exercises",
          "Hands-on class: tea-paired dinner",
          "Hands-on class: pairing with cheeses",
          "Hands-on class: pairing with chocolates",
          "Hands-on class: pairing with wines",
          "Specialization certification",
        ],
        formationText: "",
        directionTitle: "How it works",
        directionText:
          "In this sensory specialization, the goal is for students to leave with greater confidence, technical repertoire, and method to create coherent, memorable, and strategically conceived pairings.",
        cta: enCommon.cta,
      },
      {
        id: "neurogastronomia",
        title: "Specialization in Neurogastronomy of Teas & Herbs",
        subtitle: "Specialization",
        shortDescription:
          "Latin America's first Specialization in Neurogastronomy of Teas & Herbs. 8 classes within the SENSO Method, 30 hours, with Raquel Magalhães.",
        mainDescription:
          "Latin America's first Specialization in Neurogastronomy of Teas & Herbs, designed for professionals who want to combine science, sensoriality, and real practical application in the tea and herbs market.",
        bodyText:
          "Understand how flavor, aroma, context, perception, and emotion come together in the experience with teas and herbs, and turn that knowledge into practical repertoire for your professional work. The program expands your reading of how sensory experiences are built in the human brain, based on the SENSO Method created by Raquel Magalhães.\n\nAn integrated approach uniting fields that rarely converse in the tea market: Neuroscience, Phytochemistry, Teas & Herbs, Sensoriality, Emotion, and Experience Design. Content structured on a scientific foundation so you can communicate better, close more deals, and grow your sales.",
        forWhoIntro: enCommon.forWhoIntro,
        forWhoItems: [
          "Tea Sommeliers, Tea Blenders, and Tea Baristas",
          "Entrepreneurs and brands in the tea universe",
          "Professionals working in events, consulting, and experiences",
          "Gastronomy and integrative wellness professionals",
          "Scholars and enthusiasts of the tea universe",
        ],
        includesTitle: enCommon.includesLabel,
        includesItems: [
          "8 recorded classes within the SENSO Method, created by Raquel Magalhães",
          "Class 0 — leveling class on tea for those who are not yet tea professionals",
          "Live Q&A sessions",
          "30 days of access to the program's proprietary AI (2nd cohort bonus)",
          "Access to recordings for 12 months",
          "PDF support material and exercises",
          "30 hours of content across classes, leveling, and complementary materials",
          "Digital certificate as a Specialist in Neurogastronomy of Teas & Herbs",
        ],
        formationText: "",
        directionTitle: "Program structure",
        directionText:
          "Class 1, Foundations of Sensory Analysis. Class 2, Foundations of Neurogastronomy. Class 3, The 5 Senses and Neurogastronomy. Class 4, Eating Behavior. Class 5, Sensory Phytochemistry. Class 6, Camellia sinensis in the Context of Neurogastronomy. Class 7, Pairing Based on Neurogastronomy. Class 8, Sensory Design and Professional Positioning.\n\nLed by Raquel Magalhães (creator of the SENSO Method, guest professor at Le Cordon Bleu Rio de Janeiro), Carol Tavares, and Carla Vicente.",
        cta: enCommon.cta,
      },
    ],
  },
  {
    id: "aceleracao",
    eyebrow: "03 , Acceleration",
    title: "Acceleration Programs",
    description:
      "Strategic diagnosis and structuring for entrepreneurs who have already started but need to reorganize the business foundation with more clarity, confidence, and direction.",
    programs: [
      {
        id: "sprint",
        title: "Tea Mind Sprint Smart",
        shortDescription:
          "For those who have already started but still lack clarity or confidence about what they're building.",
        mainDescription:
          "Our strategic diagnosis and redirection program for those who have already started investing in their tea business but still lack clarity or confidence about what they're building.",
        bodyText:
          "One of the most common mistakes for those entering the tea market is trying to sell before understanding which market segment they want to occupy.\n\nProduct, packaging, and promotion may give a sense of progress, but consistent businesses are born from another logic: market, strategy, product, positioning, and only then sales.\n\nThe Sprint was designed exactly to correct this inversion: to bring clarity, reorganize priorities, and structure decisions with more intelligence, before more time, energy, and money are invested in the wrong place.",
        forWhoIntro: enCommon.forWhoIntro,
        forWhoItems: [
          "Have already started investing in product, packaging, marketing, operations, or image, but haven't structured the business with a strategic foundation",
          "Feel they're doing too many things at once, without clarity on what really needs to be prioritized",
          "Went into execution before understanding market, product, positioning, and business logic",
          "Want to review decisions before continuing to invest time, energy, and money",
          "Need a strategic reading of what they've built and what needs to be corrected",
          "Want to leave improvisation behind and reorganize the business with more confidence",
        ],
        includesTitle: enCommon.includesLabel,
        includesItems: [
          "Business analysis form",
          "Diagnostic feedback document",
          "3 strategic sessions",
          "30 days of WhatsApp support",
          "30 days of access to Business AI",
          "A tea course for those who still need to consolidate the sector's knowledge base",
          "A digital support material for structuring tea businesses",
        ],
        formationText: "",
        directionTitle: "How the guidance works",
        directionText:
          "The Sprint begins with a business analysis to understand what has already been done, what has been invested, which decisions need to be revised, and where the main bottlenecks are.\n\nFrom there, the student receives diagnostic feedback and goes through three strategic sessions focused on reorganizing priorities, correcting the business foundation, and guiding safer and more coherent next steps aligned with the current reality.",
        cta: enCommon.cta,
      },
      {
        id: "arquitetura-comercial",
        title: "Tea Mind Commercial Architecture",
        shortDescription:
          "Commercial acceleration program for tea businesses. In development.",
        mainDescription:
          "Commercial acceleration program for tea businesses in structuring and growth stages.",
        bodyText: "",
        forWhoIntro: "",
        forWhoItems: [],
        includesTitle: enCommon.includesLabel,
        includesItems: [],
        formationText: "",
        directionTitle: "",
        directionText: "",
        cta: enCommon.cta,
        comingSoon: true,
      },
    ],
  },
];

/* ============================================================
 * ES
 * ============================================================ */

const esCategories: ProgramCategory[] = [
  {
    id: "profissionalizantes",
    eyebrow: "01 , Profesionales",
    title: "Programas Profesionales",
    description:
      "Trayectorias completas de formación para quienes desean actuar, crear productos o construir un negocio en el mercado del té con profundidad técnica y visión estratégica.",
    programs: [
      {
        id: "atuacao",
        title: "Tea Mind Actuación con Té",
        subtitle: "Sommelier de Té",
        shortDescription:
          "Para quienes desean actuar como Sommelier de Té con más claridad, dirección y visión de mercado.",
        mainDescription:
          "Nuestro programa de formación profesional y acompañamiento estratégico para quienes desean actuar con té con más claridad, dirección y visión de mercado.",
        bodyText:
          "En Tea Mind Actuación con Té, el alumno ingresa a la formación de Sommelier de Té & Tea Barista emprendedor y desarrolla su trayectoria a lo largo de una jornada acompañada por onboarding estratégico, Smart Journey y sesiones estratégicas aplicadas a su realidad, para transformar conocimiento en actuación profesional real.",
        forWhoIntro: esCommon.forWhoIntro,
        forWhoItems: [
          "Desean trabajar con té de forma profesional, seria y bien direccionada",
          "Quieren transformar el té en una forma de actuación y monetización",
          "Buscan integrar el té a su profesión actual, su negocio o su expresión autoral",
          "Están abiertos a nuevos caminos de actuar con té como experiencias, talleres, workshops, atención, curaduría, hospitalidad, representación de marcas, consultorías",
          "Desean construir una trayectoria con visión emprendedora, incluso comenzando de forma gradual",
          "Entienden que actuar con té exige formación robusta, repertorio y direccionamiento aplicado",
        ],
        includesTitle: esCommon.includesLabel,
        includesItems: [
          "Formación de Sommelier de Té & Tea Barista",
          "Tea Box",
          "Onboarding estratégico",
          "Smart Journey | Mapa de actuación Tea Mind",
          "2 sesiones estratégicas a lo largo de la jornada",
          "Acceso extendido al contenido , 24 meses",
          "Certificación tras aprobación en exámenes intermedios y finales",
        ],
        formationText:
          "Una formación profesional robusta, desarrollada para quienes desean actuar con té con profundidad, seriedad y visión de mercado , y no solo tener un contacto introductorio con el tema.",
        directionTitle: "Cómo funciona nuestro direccionamiento",
        directionText:
          "El programa parte de una base técnica y profesional consistente, pero la forma en que esta jornada se organiza gana dirección a partir de la realidad de cada alumno.\n\nEn el onboarding, mapeamos contexto, objetivos, repertorio y posibilidades. El Smart Journey organiza esa mirada en un mapa personalizado, y las sesiones estratégicas te ayudan a transformar la formación en un camino aplicable al tipo de actuación que deseas construir.",
        cta: esCommon.cta,
      },
      {
        id: "laboratorio",
        title: "Tea Mind Laboratorio de Marcas de Té",
        subtitle: "Tea Blender",
        shortDescription:
          "Para quienes desean convertirse en Tea Blender y crear una línea de tés con firma propia, estándar premium y potencial real de mercado.",
        mainDescription:
          "Nuestro programa de formación profesional y acompañamiento estratégico para quienes desean crear una línea de tés con firma propia, estándar premium y posicionamiento de mercado.",
        bodyText:
          "En Tea Mind Laboratorio de Marcas de Té, el alumno ingresa a la formación en Tea Blender emprendedor y recorre una jornada acompañada por onboarding estratégico, Smart Journey y sesiones estratégicas aplicadas a su realidad, estructuradas para transformar ideas en productos con identidad, viabilidad comercial y potencial real de venta.",
        forWhoIntro: esCommon.forWhoIntro,
        forWhoItems: [
          "Desean crear una línea de tés con firma propia, visión de mercado y valor percibido",
          "Quieren desarrollar blends con el mismo estándar internacional de marcas reconocidas (Dammann Frères, Palais des Thés), criterio técnico y diferenciación real",
          "Buscan transformar una idea en producto vendible, y no solo en una mezcla artesanal sin dirección",
          "Les gusta unir creatividad, técnica y estrategia en la creación de productos",
          "Entienden que desarrollar una línea de té exige conocimiento serio sobre formulación, mercado, criterios regulatorios y estructura de negocio",
        ],
        includesTitle: esCommon.includesLabel,
        includesItems: [
          "Formación en Tea Blender",
          "Tea Box",
          "Onboarding estratégico",
          "Smart Journey | Mapa de marca y producto",
          "2 sesiones estratégicas a lo largo de la jornada",
          "Acceso extendido al contenido",
          "Certificación tras aprobación de tu blend profesional para evaluación",
        ],
        formationText:
          "Una formación profesional robusta, desarrollada para quienes desean crear productos con seriedad, profundidad técnica y visión de mercado , y no solo aprender a mezclar ingredientes.",
        directionTitle: "Cómo funciona el direccionamiento",
        directionText:
          "El programa parte de una base sólida de formación en tea blending con técnicas avanzadas de grandes marcas y la jornada gana dirección a partir de la realidad de cada alumno.\n\nEn el onboarding, mapeamos objetivos, momento, contexto, capacidad de inversión y el tipo de producto o marca que la persona desea construir. El Smart Journey organiza esa mirada en un mapa personalizado, y las sesiones estratégicas ayudan a transformar la formación en un camino aplicable a la creación de la línea, al posicionamiento de la marca y a la entrada al mercado.",
        cta: esCommon.cta,
      },
      {
        id: "full-experience",
        title: "Tea Mind Full Experience",
        shortDescription:
          "Para quienes quieren construir algo completo, sólido y a largo plazo en el mercado del té.",
        mainDescription:
          "Nuestro programa premium de formación profunda y dirección estratégica para quienes desean acceder al capital intelectual más completo de Tea Mind y construir su trayectoria o negocio en el mercado del té con más repertorio, claridad y consistencia.",
        bodyText:
          "En Tea Mind Full Experience, el alumno recorre la jornada más completa del hub, reuniendo formaciones, especializaciones y Encuentros de Arquitectura Estratégica para transformar conocimiento en construcción real, con profundidad técnica, visión de mercado y dirección aplicada a lo que desea desarrollar.",
        forWhoIntro: esCommon.forWhoIntro,
        forWhoItems: [
          "Desean acceder a la jornada más completa de Tea Mind, con profundidad técnica y visión estratégica",
          "Valoran el estudio serio, repertorio amplio y formación consistente en el mercado del té",
          "Quieren reunir, en un mismo programa, diferentes frentes de formación, especialización y direccionamiento aplicado",
          "Buscan construir una trayectoria profesional o un negocio con más estructura, claridad y madurez",
          "Entienden que resultados más consistentes exigen profundización, tiempo de construcción y apoyo estratégico en momentos clave",
          "Desean tener acceso al núcleo más robusto del capital intelectual de Tea Mind",
        ],
        includesTitle: esCommon.includesLabel,
        includesItems: [
          "Tea Mind Actuación con Té",
          "Tea Mind Laboratorio de Marcas de Té",
          "Especialización en Eventos y Experiencias con Té",
          "Especialización en MasterChef de Armonización",
          "2 Tea Boxes, una de cada formación principal",
          "Onboarding estratégico",
          "Smart Journey | Mapa estratégico Tea Mind",
          "6 Encuentros de Arquitectura Estratégica",
          "36 meses de acceso al contenido incluido en el programa",
          "24 meses para utilizar los Encuentros de Arquitectura Estratégica",
        ],
        formationText:
          "Una jornada premium y profunda para quienes desean desarrollar repertorio técnico, visión de mercado y dirección estratégica en un nivel más amplio, consistente e integrado dentro del universo del té.",
        directionTitle: "Cómo funciona el direccionamiento",
        directionText:
          "El Full Experience parte de una jornada robusta de formación y especializaciones, pero gana dirección a partir de la realidad de cada alumno.\n\nEn el onboarding, mapeamos contexto, objetivos, ambición y posibilidades. El Smart Journey organiza esa mirada en un mapa estratégico personalizado, y los Encuentros de Arquitectura Estratégica ayudan a transformar estudio en construcción real, apoyando decisiones importantes a lo largo de hasta 24 meses, según la evolución de cada persona.",
        cta: esCommon.cta,
      },
    ],
  },
  {
    id: "aprimoramento",
    eyebrow: "02 , Perfeccionamiento",
    title: "Programas de Perfeccionamiento",
    description:
      "Especializaciones para profesionales del té que desean profundizar repertorio técnico, ampliar áreas de actuación y diferenciar su presencia en el mercado.",
    programs: [
      {
        id: "eventos",
        title: "Especialización en Eventos con Té",
        subtitle: "Especialización",
        shortDescription:
          "Para quienes desean crear, producir y conducir experiencias y eventos con té con estándar profesional, identidad propia y visión de mercado.",
        mainDescription:
          "Especialización para profesionales que desean estructurar experiencias y eventos con té con estándar profesional, identidad propia y visión de mercado.",
        bodyText:
          "Los eventos con té son uno de los frentes más prometedores del mercado: experiencias sensoriales, maridajes, talleres, eventos corporativos, brunchs, cenas temáticas. Esta especialización enseña a crear, estructurar y conducir esas experiencias con estándar profesional, repertorio técnico y visión de negocio.",
        forWhoIntro: esCommon.forWhoIntro,
        forWhoItems: [
          "Desean actuar con eventos, experiencias y degustaciones de té",
          "Quieren agregar un frente de ingresos a su actuación como Sommelier o Tea Blender",
          "Buscan estructurar experiencias con identidad, técnica y estándar profesional",
          "Trabajan con hospitalidad, gastronomía o producción de eventos y quieren integrar el té",
        ],
        includesTitle: esCommon.includesLabel,
        includesItems: [
          "Clases aplicadas a la creación y producción de eventos con té",
          "Repertorio de formatos: experiencias, talleres, brunchs, eventos corporativos",
          "Material de apoyo con estructura operativa y comercial",
          "Certificación de especialización",
        ],
        formationText: "",
        directionTitle: "Cómo funciona",
        directionText:
          "Una especialización práctica y aplicada, dirigida a quienes desean transformar el té en experiencias comercializables, con estándar profesional y repertorio propio.",
        cta: esCommon.cta,
      },
      {
        id: "harmonizacao",
        title: "Especialización en Maridaje con Tés",
        subtitle: "Especialización",
        shortDescription:
          "Domina el maridaje entre tés, alimentos y bebidas con la técnica HARCOR, creando experiencias gastronómicas sofisticadas.",
        mainDescription:
          "Especialización para profesionales que desean dominar el maridaje entre tés y alimentos, creando experiencias gastronómicas sensoriales, sofisticadas y técnicamente consistentes.",
        bodyText:
          "El maridaje con tés es una de las competencias más relevantes para quienes trabajan en hospitalidad, gastronomía, eventos, consultorías, experiencias premium y curaduría sensorial. En esta especialización el alumno profundiza criterios técnicos, culturales y sensoriales para crear combinaciones con lógica, belleza y diferenciación real.\n\nUno de los diferenciales de nuestro programa es la técnica HARCOR, desarrollada por la profesora Carol Tavares, que amplía la mirada tradicional del maridaje más allá de la semejanza y el contraste. A partir de ella, el alumno aprende a construir maridajes más profundos, considerando textura, estructura, intensidad, contexto sensorial y narrativa de la experiencia.",
        forWhoIntro: esCommon.forWhoIntro,
        forWhoItems: [
          "Desean especializarse en maridaje entre tés, alimentos y bebidas",
          "Actúan o pretenden actuar en hospitalidad, restaurantes, hoteles, consultorías, eventos o experiencias gastronómicas",
          "Quieren ampliar repertorio técnico y crear combinaciones con criterio profesional",
          "Buscan diferenciar su actuación con una capa sensorial más sofisticada",
          "Desean aplicar el té en experiencias con quesos, chocolates, vinos, cenas y menús maridados",
        ],
        includesTitle: esCommon.includesLabel,
        includesItems: [
          "Clases aplicadas al maridaje entre tés y alimentos",
          "Técnica HARCOR de maridaje desarrollada por la profesora Carol Tavares",
          "Criterios técnicos, sensoriales, culturales y gastronómicos",
          "Estudios de caso y ejercicios prácticos",
          "Clase práctica de cena maridada con tés",
          "Clase práctica de maridaje con quesos",
          "Clase práctica de maridaje con chocolates",
          "Clase práctica de maridaje con vinos",
          "Certificación de especialización",
        ],
        formationText: "",
        directionTitle: "Cómo funciona",
        directionText:
          "En esta especialización sensorial el objetivo es que el alumno salga con más seguridad, repertorio técnico y método para crear maridajes coherentes, memorables y estratégicamente pensados.",
        cta: esCommon.cta,
      },
      {
        id: "neurogastronomia",
        title: "Especialización en Neurogastronomía de Tés y Hierbas",
        subtitle: "Especialización",
        shortDescription:
          "1ª Especialización en Neurogastronomía de Tés y Hierbas de América Latina. 8 clases del Método SENSO, 30 horas, con Raquel Magalhães.",
        mainDescription:
          "1ª Especialización en Neurogastronomía de Tés y Hierbas de América Latina, creada para profesionales que desean unir ciencia, sensorialidad y aplicación práctica real en el mercado de tés y hierbas.",
        bodyText:
          "Comprende cómo sabor, aroma, contexto, percepción y emoción se articulan en la experiencia con tés y hierbas, y transforma ese conocimiento en repertorio práctico para tu actuación profesional. La formación amplía tu lectura sobre cómo se construyen las experiencias sensoriales en el cerebro humano, a partir del Método SENSO creado por Raquel Magalhães.\n\nUn enfoque integrado que une áreas que normalmente no dialogan en el mercado del té: Neurociencia, Fitoquímica, Tés y Hierbas, Sensorialidad, Emoción y Diseño de Experiencia. Contenido estructurado sobre base científica para que descubras cómo comunicar mejor, cerrar más contratos y aumentar tus ventas.",
        forWhoIntro: esCommon.forWhoIntro,
        forWhoItems: [
          "Sommeliers de Té, Tea Blenders y Tea Baristas",
          "Emprendedores y marcas del universo del té",
          "Profesionales de eventos, consultorías y experiencias",
          "Profesionales de la gastronomía y del bienestar integrativo",
          "Estudiosos y apasionados por el universo del té",
        ],
        includesTitle: esCommon.includesLabel,
        includesItems: [
          "8 clases grabadas del Método SENSO, creado por Raquel Magalhães",
          "Clase 0 de nivelación en tés para quienes aún no son profesionales del té",
          "Encuentros en vivo de preguntas y respuestas",
          "30 días de acceso a la IA propia de la Especialización (bono de la 2ª promoción)",
          "Acceso a las grabaciones por 12 meses",
          "Material de apoyo en PDF y ejercicios",
          "30 horas de contenido entre clases, nivelación y materiales complementarios",
          "Certificado digital como Especialista en Neurogastronomía de Tés y Hierbas",
        ],
        formationText: "",
        directionTitle: "Estructura del programa",
        directionText:
          "Clase 1, Fundamentos del Análisis Sensorial. Clase 2, Fundamentos de la Neurogastronomía. Clase 3, Los 5 Sentidos y la Neurogastronomía. Clase 4, Comportamiento Alimentario. Clase 5, Fitoquímica Sensorial. Clase 6, Camellia sinensis en el contexto de la Neurogastronomía. Clase 7, Maridaje basado en Neurogastronomía. Clase 8, Diseño Sensorial y Posicionamiento Profesional.\n\nConducida por Raquel Magalhães (creadora del Método SENSO, profesora invitada del Le Cordon Bleu Río de Janeiro), Carol Tavares y Carla Vicente.",
        cta: esCommon.cta,
      },
    ],
  },
  {
    id: "aceleracao",
    eyebrow: "03 , Aceleración",
    title: "Programas de Aceleración",
    description:
      "Diagnóstico estratégico y estructuración para emprendedores que ya iniciaron, pero necesitan reorganizar la base del negocio con más claridad, seguridad y dirección.",
    programs: [
      {
        id: "sprint",
        title: "Tea Mind Sprint Smart",
        shortDescription:
          "Para quienes ya comenzaron pero aún no tienen claridad ni seguridad sobre lo que están construyendo.",
        mainDescription:
          "Nuestro programa de diagnóstico estratégico y redireccionamiento para quienes ya comenzaron a invertir en su negocio de té, pero aún no tienen claridad ni seguridad sobre lo que están construyendo.",
        bodyText:
          "Uno de los errores más comunes de quienes comienzan en el mercado del té es intentar vender antes de entender qué segmento del mercado desean ocupar.\n\nProducto, empaque y divulgación pueden dar la sensación de avance, pero los negocios consistentes nacen de otra lógica: mercado, estrategia, producto, posicionamiento y solo entonces venta.\n\nEl Sprint fue diseñado exactamente para corregir esa inversión: traer claridad, reorganizar prioridades y estructurar decisiones con más inteligencia, antes de que más tiempo, energía y dinero se inviertan en el lugar equivocado.",
        forWhoIntro: esCommon.forWhoIntro,
        forWhoItems: [
          "Ya comenzaron a invertir en producto, empaque, marketing, operación o imagen, pero no estructuraron el negocio con base estratégica",
          "Sienten que están haciendo muchas cosas al mismo tiempo, sin claridad de lo que realmente necesitan priorizar",
          "Entraron en ejecución antes de comprender mercado, producto, posicionamiento y lógica de negocio",
          "Desean revisar decisiones antes de continuar invirtiendo tiempo, energía y dinero",
          "Necesitan una lectura estratégica de lo que ya construyeron y lo que necesita corregirse",
          "Quieren salir de la improvisación y reorganizar el negocio con más seguridad",
        ],
        includesTitle: esCommon.includesLabel,
        includesItems: [
          "Formulario de análisis del negocio",
          "Documento devolutivo con diagnóstico",
          "3 sesiones estratégicas",
          "30 días de soporte vía WhatsApp",
          "30 días de acceso a Business AI",
          "Un curso de té para quienes aún necesitan consolidar la base de conocimiento del sector",
          "Un material digital de apoyo a la estructuración de negocios de té",
        ],
        formationText: "",
        directionTitle: "Cómo funciona el direccionamiento",
        directionText:
          "El Sprint comienza con un análisis del negocio para entender lo que ya se hizo, lo que se invirtió, cuáles decisiones necesitan revisarse y dónde están los principales cuellos de botella.\n\nA partir de eso, el alumno recibe un diagnóstico devolutivo y recorre tres sesiones estratégicas enfocadas en reorganizar prioridades, corregir la base del negocio y orientar próximos pasos más seguros y coherentes con la realidad actual.",
        cta: esCommon.cta,
      },
      {
        id: "arquitetura-comercial",
        title: "Tea Mind Arquitectura Comercial",
        shortDescription:
          "Programa de aceleración comercial para negocios de té. En desarrollo.",
        mainDescription:
          "Programa de aceleración comercial para negocios de té en etapa de estructuración y crecimiento.",
        bodyText: "",
        forWhoIntro: "",
        forWhoItems: [],
        includesTitle: esCommon.includesLabel,
        includesItems: [],
        formationText: "",
        directionTitle: "",
        directionText: "",
        cta: esCommon.cta,
        comingSoon: true,
      },
    ],
  },
];

/* ============================================================
 * Translations export
 * ============================================================ */

export const programsTranslations: Record<Lang, ProgramsPageTranslation> = {
  pt: {
    hero: {
      eyebrow: "Tea Mind Programas",
      title:
        "Programas desenhados para diferentes momentos, perfis e realidades no mercado do chá",
      subtitle:
        "Na Tea Mind, cada programa parte de uma estrutura sólida de formação e direcionamento estratégico, mas ganha forma a partir de quem entra: seus objetivos, seu momento, sua capacidade de investimento, seu contexto local e aquilo que você deseja criar no mundo do chá.",
    },
    diagnosis: {
      text: "Nem sempre é fácil saber sozinho qual programa se adequa melhor ao seu momento.\n\nPor isso, recomendamos começar pelo diagnóstico gratuito: uma leitura inicial que ajuda a compreender qual trajetória faz mais sentido para o seu perfil, sua realidade e o que você deseja construir no mercado do chá.",
      cta1: "Fazer o Diagnóstico Gratuito",
      cta2: "Conhecer os Programas Abaixo",
    },
    forWhoTitle: ptCommon.forWhoTitle,
    includesTitle: ptCommon.includesTitle,
    comingSoonLabel: "Lançamento em Breve",
    comingSoonText:
      "Em breve abriremos as inscrições. Para ser avisado em primeira mão, fale com a nossa equipe.",
    categories: ptCategories,
  },
  en: {
    hero: {
      eyebrow: "Tea Mind Programs",
      title:
        "Programs designed for different moments, profiles, and realities in the tea market",
      subtitle:
        "At Tea Mind, each program is built on a solid foundation of training and strategic guidance, but takes shape based on who enters: your goals, your stage, your investment capacity, your local context, and what you want to create in the world of tea.",
    },
    diagnosis: {
      text: "It's not always easy to know on your own which program best suits your current moment.\n\nThat's why we recommend starting with the free diagnosis: an initial reading that helps you understand which trajectory makes the most sense for your profile, your reality, and what you want to build in the tea market.",
      cta1: "Take the Free Diagnosis",
      cta2: "Explore the Programs Below",
    },
    forWhoTitle: enCommon.forWhoTitle,
    includesTitle: enCommon.includesTitle,
    comingSoonLabel: "Coming Soon",
    comingSoonText:
      "Enrollment will open soon. To be notified first, get in touch with our team.",
    categories: enCategories,
  },
  es: {
    hero: {
      eyebrow: "Tea Mind Programas",
      title:
        "Programas diseñados para diferentes momentos, perfiles y realidades en el mercado del té",
      subtitle:
        "En Tea Mind, cada programa parte de una estructura sólida de formación y dirección estratégica, pero toma forma a partir de quien ingresa: sus objetivos, su momento, su capacidad de inversión, su contexto local y lo que desea crear en el mundo del té.",
    },
    diagnosis: {
      text: "No siempre es fácil saber por cuenta propia cuál programa se adecua mejor a tu momento.\n\nPor eso, recomendamos comenzar por el diagnóstico gratuito: una lectura inicial que ayuda a comprender cuál trayectoria tiene más sentido para tu perfil, tu realidad y lo que deseas construir en el mercado del té.",
      cta1: "Hacer el Diagnóstico Gratuito",
      cta2: "Conocer los Programas Abajo",
    },
    forWhoTitle: esCommon.forWhoTitle,
    includesTitle: esCommon.includesTitle,
    comingSoonLabel: "Próximamente",
    comingSoonText:
      "Pronto abriremos las inscripciones. Para ser avisado en primera mano, habla con nuestro equipo.",
    categories: esCategories,
  },
};