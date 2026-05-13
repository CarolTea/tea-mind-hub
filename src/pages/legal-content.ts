import type { Lang } from "@/lib/translations";

export interface LegalSection {
  title: string;
  body: string[];
}

export interface LegalContent {
  badge: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const COMPANY = "Tea Mind Business Hub";
const CONTACT = "hello@teamindhub.com";
const UPDATED_PT = "Última atualização: 13 de maio de 2026";
const UPDATED_EN = "Last updated: May 13, 2026";
const UPDATED_ES = "Última actualización: 13 de mayo de 2026";

export const termsContent: Record<Lang, LegalContent> = {
  pt: {
    badge: "DOCUMENTO LEGAL",
    title: "Termos e Condições de Uso",
    updated: UPDATED_PT,
    intro: `Estes Termos e Condições regulam o uso do site, programas, conteúdos e serviços oferecidos pela ${COMPANY}. Ao acessar ou utilizar nossos serviços, você declara concordar integralmente com este documento.`,
    sections: [
      {
        title: "1. Aceitação dos Termos",
        body: [
          "O acesso e a utilização deste site implicam a aceitação plena e sem reservas destes Termos e Condições. Caso não concorde com qualquer disposição, recomendamos que não utilize os serviços.",
        ],
      },
      {
        title: "2. Descrição dos Serviços",
        body: [
          `A ${COMPANY} é um hub de inteligência estratégica e desenvolvimento profissional para o mercado do chá, oferecendo programas educacionais, mentorias, eventos, conteúdos e ferramentas digitais.`,
          "Os serviços podem ser disponibilizados de forma online, presencial, gratuita ou paga, conforme descrito em cada oferta.",
        ],
      },
      {
        title: "3. Cadastro e Conta do Usuário",
        body: [
          "Para acessar determinadas funcionalidades, o usuário pode ser solicitado a fornecer dados pessoais verdadeiros, completos e atualizados, sendo responsável pela guarda de suas credenciais.",
        ],
      },
      {
        title: "4. Pagamentos e Reembolsos",
        body: [
          "Os pagamentos relativos a programas pagos são processados por plataformas parceiras, como a Hotmart, sujeitos às respectivas políticas e termos.",
          "O direito de arrependimento previsto no art. 49 do Código de Defesa do Consumidor poderá ser exercido em até 7 (sete) dias corridos a partir da data da compra, mediante solicitação por escrito.",
        ],
      },
      {
        title: "5. Propriedade Intelectual",
        body: [
          `Todo o conteúdo disponibilizado, incluindo textos, imagens, marcas, logotipos, materiais didáticos, metodologias e tecnologias, é de propriedade exclusiva da ${COMPANY} ou de seus licenciantes, sendo vedada qualquer reprodução, distribuição ou uso comercial sem autorização prévia e por escrito.`,
        ],
      },
      {
        title: "6. Conduta do Usuário",
        body: [
          "É vedado ao usuário utilizar os serviços para fins ilícitos, ofensivos, fraudulentos ou que violem direitos de terceiros, bem como tentar interferir no funcionamento técnico da plataforma.",
        ],
      },
      {
        title: "7. Limitação de Responsabilidade",
        body: [
          `A ${COMPANY} empenha-se em manter os serviços disponíveis e seguros, mas não garante ausência de interrupções, falhas técnicas ou erros, e não se responsabiliza por danos decorrentes do uso inadequado dos conteúdos.`,
        ],
      },
      {
        title: "8. Alterações",
        body: [
          "Estes Termos podem ser atualizados a qualquer momento. As alterações entram em vigor a partir da publicação no site, sendo recomendada a consulta periódica.",
        ],
      },
      {
        title: "9. Lei Aplicável e Foro",
        body: [
          "Este documento é regido pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.",
        ],
      },
      {
        title: "10. Contato",
        body: [
          `Dúvidas sobre estes Termos podem ser enviadas para ${CONTACT}.`,
        ],
      },
    ],
  },
  en: {
    badge: "LEGAL DOCUMENT",
    title: "Terms & Conditions",
    updated: UPDATED_EN,
    intro: `These Terms & Conditions govern the use of the website, programs, content and services offered by ${COMPANY}. By accessing or using our services, you agree to this document in full.`,
    sections: [
      {
        title: "1. Acceptance of Terms",
        body: [
          "Accessing and using this website implies full and unreserved acceptance of these Terms. If you do not agree, please do not use the services.",
        ],
      },
      {
        title: "2. Services",
        body: [
          `${COMPANY} is a strategic intelligence and professional development hub for the tea market, offering educational programs, mentoring, events, content and digital tools, online or in-person, free or paid.`,
        ],
      },
      {
        title: "3. Account Registration",
        body: [
          "To access certain features, you may be required to provide accurate, complete and up-to-date personal data and to keep your credentials confidential.",
        ],
      },
      {
        title: "4. Payments and Refunds",
        body: [
          "Payments for paid programs are processed by partner platforms such as Hotmart, subject to their respective policies and terms.",
          "Where applicable consumer law allows, requests for refund may be submitted in writing within 7 (seven) calendar days of purchase.",
        ],
      },
      {
        title: "5. Intellectual Property",
        body: [
          `All content, including texts, images, brands, logos, training materials, methodologies and technologies, is the exclusive property of ${COMPANY} or its licensors. Reproduction, distribution or commercial use is prohibited without prior written authorization.`,
        ],
      },
      {
        title: "6. User Conduct",
        body: [
          "Users may not use the services for unlawful, offensive or fraudulent purposes, nor interfere with the platform's technical operation.",
        ],
      },
      {
        title: "7. Limitation of Liability",
        body: [
          `${COMPANY} makes reasonable efforts to keep the services available and secure but does not warrant uninterrupted operation and is not liable for damages arising from improper use.`,
        ],
      },
      {
        title: "8. Changes",
        body: [
          "These Terms may be updated at any time. Changes take effect upon publication on the site.",
        ],
      },
      {
        title: "9. Governing Law and Venue",
        body: [
          "This document is governed by the laws of the Federative Republic of Brazil. The Court of São Paulo/SP is elected to resolve any disputes, waiving any other.",
        ],
      },
      {
        title: "10. Contact",
        body: [`Questions about these Terms can be sent to ${CONTACT}.`],
      },
    ],
  },
  es: {
    badge: "DOCUMENTO LEGAL",
    title: "Términos y Condiciones de Uso",
    updated: UPDATED_ES,
    intro: `Estos Términos y Condiciones regulan el uso del sitio web, programas, contenidos y servicios ofrecidos por ${COMPANY}. Al acceder o utilizar nuestros servicios, declaras estar de acuerdo con este documento en su totalidad.`,
    sections: [
      {
        title: "1. Aceptación de los Términos",
        body: [
          "El acceso y uso de este sitio implica la aceptación plena y sin reservas de estos Términos. Si no estás de acuerdo, te recomendamos no utilizar los servicios.",
        ],
      },
      {
        title: "2. Descripción de los Servicios",
        body: [
          `${COMPANY} es un hub de inteligencia estratégica y desarrollo profesional para el mercado del té, que ofrece programas educativos, mentorías, eventos, contenidos y herramientas digitales, en formato online o presencial, gratuito o de pago.`,
        ],
      },
      {
        title: "3. Registro y Cuenta del Usuario",
        body: [
          "Para acceder a determinadas funcionalidades, podrá solicitarse al usuario proporcionar datos personales verdaderos, completos y actualizados, siendo responsable de la custodia de sus credenciales.",
        ],
      },
      {
        title: "4. Pagos y Reembolsos",
        body: [
          "Los pagos por programas de pago son procesados por plataformas asociadas, como Hotmart, sujetas a sus respectivas políticas y términos.",
          "Cuando la legislación aplicable lo permita, las solicitudes de reembolso pueden realizarse por escrito dentro de los 7 (siete) días naturales posteriores a la compra.",
        ],
      },
      {
        title: "5. Propiedad Intelectual",
        body: [
          `Todo el contenido disponible, incluidos textos, imágenes, marcas, logotipos, materiales didácticos, metodologías y tecnologías, es propiedad exclusiva de ${COMPANY} o de sus licenciantes. Queda prohibida cualquier reproducción, distribución o uso comercial sin autorización previa por escrito.`,
        ],
      },
      {
        title: "6. Conducta del Usuario",
        body: [
          "Queda prohibido utilizar los servicios para fines ilícitos, ofensivos o fraudulentos, así como intentar interferir en el funcionamiento técnico de la plataforma.",
        ],
      },
      {
        title: "7. Limitación de Responsabilidad",
        body: [
          `${COMPANY} se esfuerza por mantener los servicios disponibles y seguros, pero no garantiza la ausencia de interrupciones o fallos técnicos y no se responsabiliza por daños derivados del uso inadecuado de los contenidos.`,
        ],
      },
      {
        title: "8. Modificaciones",
        body: [
          "Estos Términos pueden ser actualizados en cualquier momento. Los cambios entran en vigor a partir de su publicación en el sitio.",
        ],
      },
      {
        title: "9. Legislación Aplicable y Foro",
        body: [
          "Este documento se rige por las leyes de la República Federativa de Brasil. Se elige el foro de São Paulo/SP para resolver cualquier controversia, con renuncia a cualquier otro.",
        ],
      },
      {
        title: "10. Contacto",
        body: [`Las dudas sobre estos Términos pueden enviarse a ${CONTACT}.`],
      },
    ],
  },
};

export const privacyContent: Record<Lang, LegalContent> = {
  pt: {
    badge: "PRIVACIDADE",
    title: "Política de Privacidade",
    updated: UPDATED_PT,
    intro: `Esta Política de Privacidade descreve como a ${COMPANY} coleta, utiliza, armazena e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).`,
    sections: [
      {
        title: "1. Controlador dos Dados",
        body: [
          `${COMPANY} é o controlador dos dados pessoais coletados por meio deste site e dos seus serviços. Contato: ${CONTACT}.`,
        ],
      },
      {
        title: "2. Dados Coletados",
        body: [
          "Coletamos dados de identificação (nome, e-mail, telefone), dados profissionais (empresa, cargo, país), dados de navegação (endereço IP, tipo de dispositivo, páginas acessadas) e dados fornecidos voluntariamente em formulários, inscrições e contatos.",
        ],
      },
      {
        title: "3. Finalidades do Tratamento",
        body: [
          "Utilizamos seus dados para prestação dos serviços e atendimento, comunicação sobre programas, eventos e conteúdos, atendimento a obrigações legais e regulatórias, melhoria da experiência do usuário e ações de marketing, sempre respeitando as bases legais aplicáveis.",
        ],
      },
      {
        title: "4. Bases Legais",
        body: [
          "O tratamento ocorre com fundamento em consentimento, execução de contrato, cumprimento de obrigação legal e legítimo interesse, conforme o caso, nos termos do art. 7º da LGPD.",
        ],
      },
      {
        title: "5. Compartilhamento",
        body: [
          "Seus dados podem ser compartilhados com prestadores de serviço estritamente necessários à operação, como plataformas de pagamento (Hotmart), e-mail marketing, ferramentas de análise e hospedagem, sob obrigação contratual de confidencialidade e segurança.",
        ],
      },
      {
        title: "6. Cookies",
        body: [
          "Utilizamos cookies para garantir o funcionamento do site, medir desempenho e personalizar conteúdos. Você pode gerenciar suas preferências a qualquer momento por meio do banner de cookies disponível no rodapé.",
        ],
      },
      {
        title: "7. Direitos do Titular",
        body: [
          "Conforme o art. 18 da LGPD, você pode solicitar: confirmação da existência de tratamento, acesso aos dados, correção, anonimização, bloqueio ou eliminação, portabilidade, informação sobre compartilhamentos, revogação do consentimento e oposição ao tratamento. Para exercer seus direitos, contate-nos em " + CONTACT + ".",
        ],
      },
      {
        title: "8. Retenção e Segurança",
        body: [
          "Os dados são mantidos pelo tempo necessário ao cumprimento das finalidades ou de obrigações legais. Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acessos não autorizados, perda, alteração ou destruição.",
        ],
      },
      {
        title: "9. Transferência Internacional",
        body: [
          "Quando aplicável, dados poderão ser transferidos para outros países, sempre observando garantias adequadas de proteção previstas pela LGPD.",
        ],
      },
      {
        title: "10. Encarregado e Contato",
        body: [
          `Para questões relativas à proteção de dados, fale com nosso Encarregado (DPO) pelo e-mail ${CONTACT}.`,
        ],
      },
      {
        title: "11. Atualizações",
        body: [
          "Esta Política pode ser atualizada periodicamente. Recomendamos revisão regular. Mudanças relevantes serão comunicadas pelos canais oficiais.",
        ],
      },
    ],
  },
  en: {
    badge: "PRIVACY",
    title: "Privacy Policy",
    updated: UPDATED_EN,
    intro: `This Privacy Policy describes how ${COMPANY} collects, uses, stores and protects your personal data, in line with the Brazilian General Data Protection Law (LGPD, Law No. 13,709/2018) and applicable international principles.`,
    sections: [
      {
        title: "1. Data Controller",
        body: [`${COMPANY} is the controller of personal data collected through this site and its services. Contact: ${CONTACT}.`],
      },
      {
        title: "2. Data We Collect",
        body: [
          "Identification data (name, email, phone), professional data (company, role, country), browsing data (IP address, device type, pages visited) and data voluntarily provided through forms, sign-ups and contacts.",
        ],
      },
      {
        title: "3. Purposes",
        body: [
          "We use your data to deliver our services, communicate about programs, events and content, comply with legal and regulatory obligations, improve user experience and run marketing actions, always respecting the applicable legal bases.",
        ],
      },
      {
        title: "4. Legal Bases",
        body: [
          "Processing is based on consent, contract performance, legal compliance and legitimate interest, as applicable.",
        ],
      },
      {
        title: "5. Sharing",
        body: [
          "Data may be shared with strictly necessary service providers, such as payment platforms (Hotmart), email marketing, analytics and hosting tools, under contractual confidentiality and security obligations.",
        ],
      },
      {
        title: "6. Cookies",
        body: [
          "We use cookies to enable site functionality, measure performance and personalize content. You can manage your preferences at any time via the cookie banner available in the footer.",
        ],
      },
      {
        title: "7. Your Rights",
        body: [
          "You may request: confirmation of processing, access, correction, anonymization, blocking or deletion, portability, information about sharing, withdrawal of consent and objection to processing. To exercise these rights, contact us at " + CONTACT + ".",
        ],
      },
      {
        title: "8. Retention and Security",
        body: [
          "Data is retained as long as necessary to fulfill purposes or legal obligations. We adopt reasonable technical and organizational measures to protect your data.",
        ],
      },
      {
        title: "9. International Transfers",
        body: [
          "When applicable, data may be transferred to other countries with adequate protection safeguards.",
        ],
      },
      {
        title: "10. Data Protection Officer and Contact",
        body: [`For data protection matters, contact our DPO at ${CONTACT}.`],
      },
      {
        title: "11. Updates",
        body: [
          "This Policy may be updated from time to time. Relevant changes will be communicated through official channels.",
        ],
      },
    ],
  },
  es: {
    badge: "PRIVACIDAD",
    title: "Política de Privacidad",
    updated: UPDATED_ES,
    intro: `Esta Política de Privacidad describe cómo ${COMPANY} recopila, utiliza, almacena y protege tus datos personales, en cumplimiento de la Ley General de Protección de Datos brasileña (LGPD, Ley nº 13.709/2018) y los principios internacionales aplicables (RGPD).`,
    sections: [
      {
        title: "1. Responsable del Tratamiento",
        body: [`${COMPANY} es el responsable del tratamiento de los datos personales recopilados a través de este sitio y sus servicios. Contacto: ${CONTACT}.`],
      },
      {
        title: "2. Datos que Recopilamos",
        body: [
          "Datos de identificación (nombre, correo electrónico, teléfono), datos profesionales (empresa, cargo, país), datos de navegación (dirección IP, tipo de dispositivo, páginas visitadas) y datos proporcionados voluntariamente en formularios, inscripciones y contactos.",
        ],
      },
      {
        title: "3. Finalidades",
        body: [
          "Utilizamos tus datos para prestar nuestros servicios, comunicar sobre programas, eventos y contenidos, cumplir obligaciones legales y regulatorias, mejorar la experiencia del usuario y realizar acciones de marketing, siempre respetando las bases legales aplicables.",
        ],
      },
      {
        title: "4. Bases Legales",
        body: [
          "El tratamiento se basa en el consentimiento, la ejecución de un contrato, el cumplimiento de obligaciones legales y el interés legítimo, según corresponda.",
        ],
      },
      {
        title: "5. Compartir Datos",
        body: [
          "Los datos pueden compartirse con proveedores estrictamente necesarios para la operación, como plataformas de pago (Hotmart), email marketing, herramientas de análisis y hospedaje, bajo obligaciones contractuales de confidencialidad y seguridad.",
        ],
      },
      {
        title: "6. Cookies",
        body: [
          "Usamos cookies para el funcionamiento del sitio, medir rendimiento y personalizar contenidos. Puedes gestionar tus preferencias en cualquier momento desde el banner de cookies disponible en el pie de página.",
        ],
      },
      {
        title: "7. Derechos del Titular",
        body: [
          "Puedes solicitar: confirmación del tratamiento, acceso, corrección, anonimización, bloqueo o eliminación, portabilidad, información sobre el intercambio, revocación del consentimiento y oposición al tratamiento. Para ejercer tus derechos, contáctanos en " + CONTACT + ".",
        ],
      },
      {
        title: "8. Retención y Seguridad",
        body: [
          "Conservamos los datos durante el tiempo necesario para cumplir las finalidades o las obligaciones legales. Adoptamos medidas técnicas y organizativas razonables para proteger tus datos.",
        ],
      },
      {
        title: "9. Transferencia Internacional",
        body: [
          "Cuando corresponda, los datos podrán transferirse a otros países, siempre con garantías adecuadas de protección.",
        ],
      },
      {
        title: "10. Delegado de Protección de Datos",
        body: [`Para asuntos de protección de datos, contacta a nuestro DPO en ${CONTACT}.`],
      },
      {
        title: "11. Actualizaciones",
        body: [
          "Esta Política puede actualizarse periódicamente. Los cambios relevantes se comunicarán por los canales oficiales.",
        ],
      },
    ],
  },
};