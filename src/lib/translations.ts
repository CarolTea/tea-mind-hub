export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      programs: "Programs",
      society: "Society",
      contact: "Contact",
    },
    hero: {
      title1: "We think in markets,",
      title2: "not in cups.",
      subtitle: "Strategic intelligence for professionals shaping the tea industry.",
      cta1: "Explore Programs",
      cta2: "Enter the Society",
    },
    about: {
      title1: "The Intelligence Behind",
      title2: "the Industry",
      description:
        "Tea Mind Business Hub structures professionals, integrates sensory expertise with market application, and builds positioning power within the global tea ecosystem. We operate at the intersection of strategic intelligence and industry authority.",
    },
    programs: {
      heading: "Our Programs",
      items: [
        {
          title: "Tea Programs",
          description:
            "Comprehensive programs covering tea market dynamics, sourcing strategy, sensory analysis, and professional certification pathways for the global tea sector.",
        },
        {
          title: "Neurogastronomy Programs",
          description:
            "Cutting-edge programs exploring the science of flavor perception, multisensory experiences, and how neuroscience reshapes tea tasting and product development.",
        },
      ],
    },
    society: {
      title: "The Inner Circle",
      description:
        "The Tea Mind Society is a selective professional network reserved for those who shape markets, define standards, and influence the future of the global tea industry.",
      cta: "Discover the Society",
    },
    philosophy: {
      quote: "\u201CWe structure what others consume.\u201D",
    },
    footer: {
      tagline: "Strategic intelligence for professionals shaping the global tea industry.",
      navigation: "Navigation",
      contactTitle: "Contact",
      copyright: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Nosotros",
      programs: "Programas",
      society: "Sociedad",
      contact: "Contacto",
    },
    hero: {
      title1: "Pensamos en mercados,",
      title2: "no en tazas.",
      subtitle: "Inteligencia estratégica para profesionales que moldean la industria del té.",
      cta1: "Explorar Programas",
      cta2: "Entrar a la Sociedad",
    },
    about: {
      title1: "La Inteligencia Detrás",
      title2: "de la Industria",
      description:
        "Tea Mind Business Hub estructura profesionales, integra la expertise sensorial con la aplicación de mercado y construye poder de posicionamiento dentro del ecosistema global del té. Operamos en la intersección de la inteligencia estratégica y la autoridad de la industria.",
    },
    programs: {
      heading: "Nuestros Programas",
      items: [
        {
          title: "Programas de Té",
          description:
            "Programas integrales que cubren la dinámica del mercado del té, estrategia de abastecimiento, análisis sensorial y vías de certificación profesional para el sector global del té.",
        },
        {
          title: "Programas de Neurogastronomía",
          description:
            "Programas de vanguardia que exploran la ciencia de la percepción del sabor, experiencias multisensoriales y cómo la neurociencia transforma la degustación de té y el desarrollo de productos.",
        },
      ],
    },
    society: {
      title: "El Círculo Interior",
      description:
        "La Tea Mind Society es una red profesional selectiva reservada para quienes moldean mercados, definen estándares e influyen en el futuro de la industria global del té.",
      cta: "Descubrir la Sociedad",
    },
    philosophy: {
      quote: "\u201CEstructuramos lo que otros consumen.\u201D",
    },
    footer: {
      tagline: "Inteligencia estratégica para profesionales que moldean la industria global del té.",
      navigation: "Navegación",
      contactTitle: "Contacto",
      copyright: "Todos los derechos reservados.",
    },
  },
} as const;
