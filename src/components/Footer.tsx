import { useLang } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import teaHubLogo from "@/assets/tea-hub-logo-transparent.png";

const WHATSAPP_NUMBER = "5521981126981";
const contactMessages = {
  pt: "Olá! Gostaria de entrar em contato com a equipe da Tea Mind.",
  en: "Hi! I'd like to get in touch with the Tea Mind team.",
  es: "¡Hola! Me gustaría ponerme en contacto con el equipo de Tea Mind.",
} as const;

const eventsRoutes = { en: "/events", es: "/es/eventos", pt: "/pt/eventos" } as const;
const termsRoutes = { en: "/terms", es: "/es/terminos", pt: "/pt/termos" } as const;
const privacyRoutes = { en: "/privacy", es: "/es/privacidad", pt: "/pt/privacidade" } as const;
const specialPartnersRoutes = { en: "/special-partners", es: "/es/socias-especiales", pt: "/pt/parceiras-especiais" } as const;

const Footer = () => {
  const { t, lang } = useLang();

  const contactHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(contactMessages[lang])}`;

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.programs, href: "#programs" },
    { label: t.nav.founders, href: "#founders" },
    { label: t.nav.innovations, href: "#innovations" },
    { label: t.nav.society, href: "#society" },
    { label: t.nav.specialPartners, href: specialPartnersRoutes[lang], isRoute: true },
    { label: t.nav.contact, href: eventsRoutes[lang], isRoute: true },
  ];

  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Contato band */}
        <div className="mb-16 pb-16 border-b border-primary-foreground/10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
                {t.footer.contact.eyebrow}
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground leading-tight mb-5">
                {t.footer.contact.title}
              </h3>
              <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed max-w-xl">
                {t.footer.contact.text}
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href={contactHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-primary px-7 py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300"
              >
                {t.footer.contact.cta}
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          {/* Col 1 - About */}
          <div>
            <img src={teaHubLogo} alt="Tea Mind Business Hub" className="h-16 w-auto mb-6" />
            <p className="font-sans text-sm text-primary-foreground/50 leading-relaxed mb-4">
              {t.footer.aboutText}
            </p>
            <p className="font-sans text-xs text-primary-foreground/40">
              hello@teamindhub.com
            </p>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-primary-foreground/40 mb-6">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Programs */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-primary-foreground/40 mb-6">
              {t.footer.programsTitle}
            </h4>
            <ul className="space-y-3">
              {t.footer.programsList.map((program) => (
                <li key={program}>
                  <a href="#programs" className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Innovations */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-primary-foreground/40 mb-6">
              {t.footer.innovationsTitle}
            </h4>
            <ul className="space-y-3">
              {t.footer.innovationsList.map((item) => (
                <li key={item}>
                  <a href="#innovations" className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Tea Mind Business Hub. {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <Link to={termsRoutes[lang]} className="font-sans text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors">
              {t.footer.terms}
            </Link>
            <Link to={privacyRoutes[lang]} className="font-sans text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors">
              {t.footer.privacy}
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("tmbh:open-cookies"))}
              className="font-sans text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors"
            >
              {t.footer.cookiePrefs}
            </button>
          </div>
          <p className="font-sans text-xs text-primary-foreground/20 italic">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
