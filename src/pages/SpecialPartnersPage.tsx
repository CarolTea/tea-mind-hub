import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import teresinha from "@/assets/special-teresinha-shimada.png";
import fernanda from "@/assets/special-fernanda-rivas.png";
import tatiana from "@/assets/special-tatiana-cantu.png";
import raquel from "@/assets/special-raquel-magalhaes.png";
import gaby from "@/assets/special-gaby-godoy.png";

const WHATSAPP = "5521981126981";

const copy = {
  pt: {
    eyebrow: "Special Partners",
    title: "As mãos e mentes que elevam o chá brasileiro a outro patamar.",
    intro:
      "Mais do que uma rede, um movimento. Reunimos profissionais que dividem com a Tea Mind a visão de elevar o chá brasileiro ao nível das maiores referências mundiais, contribuindo em projetos, eventos, formações e experiências de alto padrão.",
    closing: "Um ecossistema de excelência, construído a muitas mãos.",
    cta: "Falar sobre colaborações no WhatsApp",
    whatsappMsg: "Olá! Gostaria de conversar sobre parcerias e colaborações com a Tea Mind.",
    metaTitle: "Special Partners | Tea Mind Business Hub",
    metaDesc:
      "Conheça as Special Partners da Tea Mind, profissionais de excelência que elevam o chá brasileiro em projetos, eventos e experiências de alto padrão.",
    members: [
      {
        name: "Teresinha Eiko Shimada",
        specialty: "Mestra de Chá · Sítio Shimada",
        img: teresinha,
        bio: [
          "Mestra de Chá e produtora à frente do Sítio Shimada, no Vale do Ribeira. Sua trajetória representa o renascimento dos chás brasileiros de alta gama, com foco em microlotes, excelência produtiva e valorização do terroir nacional.",
          "Parceira da Tea Mind em experiências exclusivas, já participou de projetos ao lado da Chef Roberta Sudbrack e da comunidade ABS-Rio, ampliando o reconhecimento do chá brasileiro em ambientes de excelência.",
        ],
      },
      {
        name: "Fernanda Rivas",
        specialty: "Tea Blender · Sommelier · Condessa Rivas Fine Teas",
        img: fernanda,
        bio: [
          "Tea Blender, Sommelier de Chá e fundadora da Condessa Rivas Fine Teas, marca dedicada à criação de blends autorais de alta gama. Com atuação em projetos para marcas, cafés, restaurantes, hotéis e experiências especiais, une técnica, sensibilidade e visão comercial.",
          "Na Tea Mind, é professora parceira no Laboratório de Marcas de Chá, contribuindo com sua experiência prática na criação, posicionamento e comercialização de blends de alto padrão.",
        ],
      },
      {
        name: "Tatiana Cantu",
        specialty: "Sommelier · Tea Barista · Tea Blender · Tatea",
        img: tatiana,
        bio: [
          "Sommelier de Chá, Tea Barista e Tea Blender formada pela metodologia Tea Mind, é criadora da Tatea e uma das profissionais mais refinadas da nova geração do chá brasileiro. Duas vezes vice-campeã no Concurso Nacional de Sommelier de Chá, atua com curadoria, degustação, serviço de chá e criação de blends para marcas, restaurantes e experiências especiais.",
          "Como integrante do Panorama do Chá, desenvolve projetos ligados à origem, produção e microlotes brasileiros, incluindo criações em parceria com a Mestra Teresinha Eiko Shimada. Na Tea Mind, é uma parceira de confiança em eventos, consultorias e projetos sensoriais de alta exigência.",
        ],
      },
      {
        name: "Raquel Magalhães",
        specialty: "Sommelière de Chá · Nutricionista · Fitoterapia, Ayurveda & Neurogastronomia",
        img: raquel,
        bio: [
          "Professora convidada do Le Cordon Bleu Rio de Janeiro, é também colunista da revista Casa e Jardim. Sua atuação une olhar técnico, sensibilidade e repertório botânico na construção de experiências mais profundas com chás e ervas.",
          "Criadora do método SENSO para Neurogastronomia, na Tea Mind é professora parceira na 1ª Especialização em Neurogastronomia de Chás & Ervas da América Latina.",
        ],
      },
      {
        name: "Gaby Godoy",
        specialty: "Empresária · Experiências com Chá",
        img: gaby,
        bio: [
          "Empresária e especialista em experiências com chá, possui uma trajetória sólida como franqueada da Tea Shop no Rio de Janeiro, unindo gestão, vendas, hospitalidade e o encantamento do cliente.",
          "Parceira da Tea Mind em eventos gastronômicos, treinamentos e experiências premium, incluindo projetos para o Fairmont Rio de Janeiro Copacabana, Métiers Café na Casa Roberto Marinho, Pâtisserie Le Witt e Peixoto Sushi, integra o programa de aprimoramento Eventos e Experiências com Chá, trazendo sua expertise em atendimento, captação de parceiros e operação real de mercado.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Special Partners",
    title: "The hands and minds elevating Brazilian tea to another level.",
    intro:
      "More than a network, a movement. We bring together professionals who share with Tea Mind the vision of elevating Brazilian tea to the level of the world's greatest references, contributing to projects, events, programs and high-end experiences.",
    closing: "An ecosystem of excellence, built by many hands.",
    cta: "Talk about collaborations on WhatsApp",
    whatsappMsg: "Hi! I'd like to talk about partnerships and collaborations with Tea Mind.",
    metaTitle: "Special Partners | Tea Mind Business Hub",
    metaDesc:
      "Meet Tea Mind's Special Partners, leading professionals elevating Brazilian tea through high-end projects, events and experiences.",
    members: [
      {
        name: "Teresinha Eiko Shimada",
        specialty: "Tea Master · Sítio Shimada",
        img: teresinha,
        bio: [
          "Tea Master and producer behind Sítio Shimada, in the Ribeira Valley. Her trajectory represents the rebirth of premium Brazilian teas, focused on microlots, production excellence and the appreciation of the national terroir.",
          "A Tea Mind partner in exclusive experiences, she has taken part in projects alongside Chef Roberta Sudbrack and the ABS-Rio community, expanding the recognition of Brazilian tea in spaces of excellence.",
        ],
      },
      {
        name: "Fernanda Rivas",
        specialty: "Tea Blender · Sommelier · Condessa Rivas Fine Teas",
        img: fernanda,
        bio: [
          "Tea Blender, Tea Sommelier and founder of Condessa Rivas Fine Teas, a brand dedicated to creating signature high-end blends. Working on projects for brands, coffee shops, restaurants, hotels and special experiences, she combines technique, sensitivity and commercial vision.",
          "At Tea Mind, she is a guest teacher at the Tea Brand Lab, contributing her hands-on experience in the creation, positioning and commercialization of high-end blends.",
        ],
      },
      {
        name: "Tatiana Cantu",
        specialty: "Sommelier · Tea Barista · Tea Blender · Tatea",
        img: tatiana,
        bio: [
          "Tea Sommelier, Tea Barista and Tea Blender trained through the Tea Mind methodology, she is the creator of Tatea and one of the most refined professionals of the new generation of Brazilian tea. Twice runner-up in the National Tea Sommelier Contest, she works with curation, tasting, tea service and blend creation for brands, restaurants and special experiences.",
          "As a member of Panorama do Chá, she develops projects connected to origin, production and Brazilian microlots, including creations in partnership with Tea Master Teresinha Eiko Shimada. At Tea Mind, she is a trusted partner in events, consulting and high-demand sensory projects.",
        ],
      },
      {
        name: "Raquel Magalhães",
        specialty: "Tea Sommelier · Nutritionist · Phytotherapy, Ayurveda & Neurogastronomy",
        img: raquel,
        bio: [
          "Guest professor at Le Cordon Bleu Rio de Janeiro, she is also a columnist for Casa e Jardim magazine. Her work combines technical insight, sensitivity and botanical repertoire in building deeper experiences with teas and herbs.",
          "Creator of the SENSO method for Neurogastronomy, at Tea Mind she is a guest teacher in Latin America's first Specialization in Neurogastronomy of Teas & Herbs.",
        ],
      },
      {
        name: "Gaby Godoy",
        specialty: "Entrepreneur · Tea Experiences",
        img: gaby,
        bio: [
          "Entrepreneur and specialist in tea experiences, she has a solid trajectory as a Tea Shop franchisee in Rio de Janeiro, bringing together management, sales, hospitality and customer enchantment.",
          "A Tea Mind partner in gastronomic events, training and premium experiences, including projects for the Fairmont Rio de Janeiro Copacabana, Métiers Café at Casa Roberto Marinho, Pâtisserie Le Witt and Peixoto Sushi, she is part of the Tea Events and Experiences enhancement program, contributing her expertise in service, partner sourcing and real market operations.",
        ],
      },
    ],
  },
  es: {
    eyebrow: "Special Partners",
    title: "Las manos y las mentes que elevan el té brasileño a otro nivel.",
    intro:
      "Más que una red, un movimiento. Reunimos a profesionales que comparten con Tea Mind la visión de elevar el té brasileño al nivel de las mayores referencias mundiales, contribuyendo a proyectos, eventos, formaciones y experiencias de alta gama.",
    closing: "Un ecosistema de excelencia, construido a muchas manos.",
    cta: "Hablar sobre colaboraciones por WhatsApp",
    whatsappMsg: "¡Hola! Me gustaría hablar sobre alianzas y colaboraciones con Tea Mind.",
    metaTitle: "Special Partners | Tea Mind Business Hub",
    metaDesc:
      "Conoce a las Special Partners de Tea Mind, profesionales de excelencia que elevan el té brasileño en proyectos, eventos y experiencias de alta gama.",
    members: [
      {
        name: "Teresinha Eiko Shimada",
        specialty: "Maestra del Té · Sítio Shimada",
        img: teresinha,
        bio: [
          "Maestra del Té y productora al frente del Sítio Shimada, en el Valle del Ribeira. Su trayectoria representa el renacimiento de los tés brasileños de alta gama, con foco en microlotes, excelencia productiva y valorización del terroir nacional.",
          "Partner de Tea Mind en experiencias exclusivas, ha participado en proyectos junto a la Chef Roberta Sudbrack y la comunidad ABS-Rio, ampliando el reconocimiento del té brasileño en entornos de excelencia.",
        ],
      },
      {
        name: "Fernanda Rivas",
        specialty: "Tea Blender · Sommelier · Condessa Rivas Fine Teas",
        img: fernanda,
        bio: [
          "Tea Blender, Sommelier de Té y fundadora de Condessa Rivas Fine Teas, marca dedicada a la creación de blends de autor de alta gama. Con actuación en proyectos para marcas, cafés, restaurantes, hoteles y experiencias especiales, une técnica, sensibilidad y visión comercial.",
          "En Tea Mind es profesora partner en el Laboratorio de Marcas de Té, aportando su experiencia práctica en creación, posicionamiento y comercialización de blends de alto nivel.",
        ],
      },
      {
        name: "Tatiana Cantu",
        specialty: "Sommelier · Tea Barista · Tea Blender · Tatea",
        img: tatiana,
        bio: [
          "Sommelier de Té, Tea Barista y Tea Blender formada por la metodología Tea Mind, es la creadora de Tatea y una de las profesionales más refinadas de la nueva generación del té brasileño. Dos veces subcampeona en el Concurso Nacional de Sommelier de Té, trabaja con curaduría, cata, servicio de té y creación de blends para marcas, restaurantes y experiencias especiales.",
          "Como integrante de Panorama do Chá, desarrolla proyectos vinculados al origen, producción y microlotes brasileños, incluyendo creaciones en alianza con la Maestra Teresinha Eiko Shimada. En Tea Mind es partner de confianza en eventos, consultorías y proyectos sensoriales de alta exigencia.",
        ],
      },
      {
        name: "Raquel Magalhães",
        specialty: "Sommelière de Té · Nutricionista · Fitoterapia, Ayurveda & Neurogastronomía",
        img: raquel,
        bio: [
          "Profesora invitada de Le Cordon Bleu Rio de Janeiro, es también columnista de la revista Casa e Jardim. Su actuación une mirada técnica, sensibilidad y repertorio botánico en la construcción de experiencias más profundas con tés y hierbas.",
          "Creadora del método SENSO para Neurogastronomía, en Tea Mind es profesora partner en la 1ª Especialización en Neurogastronomía de Tés & Hierbas de América Latina.",
        ],
      },
      {
        name: "Gaby Godoy",
        specialty: "Empresaria · Experiencias con Té",
        img: gaby,
        bio: [
          "Empresaria y especialista en experiencias con té, cuenta con una sólida trayectoria como franquiciada de Tea Shop en Rio de Janeiro, uniendo gestión, ventas, hospitalidad y el encantamiento del cliente.",
          "Partner de Tea Mind en eventos gastronómicos, formaciones y experiencias premium, incluyendo proyectos para el Fairmont Rio de Janeiro Copacabana, Métiers Café en la Casa Roberto Marinho, Pâtisserie Le Witt y Peixoto Sushi, integra el programa de perfeccionamiento Eventos y Experiencias con Té, aportando su expertise en atención, captación de partners y operación real de mercado.",
        ],
      },
    ],
  },
} as const;

const SpecialPartnersPage = ({ lang }: { lang: Lang }) => {
  const c = copy[lang];

  useEffect(() => {
    document.title = c.metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", c.metaDesc);
  }, [c.metaTitle, c.metaDesc]);

  const whatsappHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(c.whatsappMsg)}`;

  return (
    <LanguageProvider lang={lang}>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-40 pb-20 lg:pt-48 lg:pb-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-6">
              {c.eyebrow}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-8">
              {c.title}
            </h1>
            <div className="w-16 h-px bg-accent mx-auto mb-8" />
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {c.intro}
            </p>
          </div>
        </section>

        {/* Members grid */}
        <section className="pb-32 lg:pb-40 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
              {c.members.map((m) => (
                <article
                  key={m.name}
                  className="border border-border/60 overflow-hidden transition-all duration-500 hover:border-foreground/20 bg-background"
                >
                  <div className="aspect-[4/5] bg-muted overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                      {m.name}
                    </h2>
                    <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-accent mb-5">
                      {m.specialty}
                    </p>
                    <div className="w-10 h-px bg-accent/60 mb-5" />
                    <div className="space-y-4">
                      {m.bio.map((p, i) => (
                        <p key={i} className="font-sans text-sm text-muted-foreground leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight mb-10">
              {c.closing}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-primary px-7 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300"
            >
              {c.cta}
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default SpecialPartnersPage;
