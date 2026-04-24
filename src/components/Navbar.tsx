import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import teaMindLogo from "@/assets/tea-mind-logo-transparent.png";

const programsRoutes = { en: "/programs", es: "/es/programas", pt: "/pt/programas" } as const;
const aboutRoutes = { en: "/about", es: "/es/nosotros", pt: "/pt/sobre" } as const;
const innovationsRoutes = { en: "/innovations", es: "/es/innovaciones", pt: "/pt/inovacoes" } as const;
const societyRoutes = { en: "/society", es: "/es/sociedad", pt: "/pt/sociedade" } as const;

const WHATSAPP_NUMBER = "5521981126981";
const eventsMessages = {
  pt: "Olá! Gostaria de saber mais sobre os eventos personalizados, corporativos e temáticos da Tea Mind.",
  en: "Hi! I'd like to know more about Tea Mind's personalized, corporate and themed events.",
  es: "¡Hola! Me gustaría saber más sobre los eventos personalizados, corporativos y temáticos de Tea Mind.",
} as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, t } = useLang();
  const navigate = useNavigate();

  const eventsHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(eventsMessages[lang])}`;

  const navLinks = [
    { label: t.nav.about, href: aboutRoutes[lang], isRoute: true },
    { label: t.nav.programs, href: programsRoutes[lang], isRoute: true },
    { label: t.nav.innovations, href: innovationsRoutes[lang], isRoute: true },
    { label: t.nav.society, href: societyRoutes[lang], isRoute: true },
    { label: t.nav.contact, href: eventsHref, external: true },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const langRoutes = { en: "/", es: "/es", pt: "/pt" } as const;
  const langOrder: Array<"en" | "es" | "pt"> = ["en", "es", "pt"];
  const nextLangs = langOrder.filter((l) => l !== lang);

  const handleNavClick = (link: { href: string; isRoute?: boolean }) => {
    if (link.isRoute) {
      navigate(link.href);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm transition-all duration-500"
      style={{ backgroundColor: "hsl(40, 20%, 94%, 0.95)" }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        <button onClick={() => navigate(lang === "en" ? "/" : `/${lang}`)} className="flex items-center gap-3 cursor-pointer">
          <img src={teaMindLogo} alt="Tea Mind Business Hub" className="h-14 w-auto" />
          <span className="hidden sm:inline font-serif text-lg font-medium text-foreground tracking-wide">Tea Mind Business Hub</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.isRoute ? (
                <button
                  onClick={() => handleNavClick(link)}
                  className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </button>
              ) : link.external ? (
                <a
                  href={link.href}
                  rel="noopener noreferrer"
                  className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <a href={link.href} className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors duration-300">
                  {link.label}
                </a>
              )}
            </li>
          ))}
          {nextLangs.map((l) => (
            <li key={l}>
              <button
                onClick={() => navigate(langRoutes[l])}
                className="text-xs font-sans font-medium tracking-wider uppercase border border-foreground/20 px-3 py-1.5 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors duration-300"
              >
                {l.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="lg:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-sm border-t border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.isRoute ? (
                  <button
                    onClick={() => { setMenuOpen(false); handleNavClick(link); }}
                    className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground"
                  >
                    {link.label}
                  </button>
                ) : link.external ? (
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a href={link.href} className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            {nextLangs.map((l) => (
              <li key={l}>
                <button onClick={() => { setMenuOpen(false); navigate(langRoutes[l]); }} className="text-xs font-sans font-medium tracking-wider uppercase border border-foreground/20 px-3 py-1.5 text-foreground/70 hover:text-foreground">
                  {l.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
