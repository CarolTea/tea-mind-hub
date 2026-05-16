import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import teaMindLogo from "@/assets/tea-mind-logo-transparent.png";

const programsRoutes = { en: "/programs", es: "/es/programas", pt: "/pt/programas" } as const;
const aboutRoutes = { en: "/about", es: "/es/nosotros", pt: "/pt/sobre" } as const;
const innovationsRoutes = { en: "/innovations", es: "/es/innovaciones", pt: "/pt/inovacoes" } as const;
const societyRoutes = { en: "/society", es: "/es/sociedad", pt: "/pt/sociedade" } as const;
const eventsRoutes = { en: "/events", es: "/es/eventos", pt: "/pt/eventos" } as const;
const specialPartnersRoutes = { en: "/special-partners", es: "/es/socias-especiales", pt: "/pt/parceiras-especiais" } as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const { lang, t } = useLang();
  const navigate = useNavigate();

  const programsRoute = programsRoutes[lang];
  const programsGroups = t.nav.programsGroups;
  const groupKeys = ["profissionalizantes", "aprimoramento", "aceleracao"] as const;

  const otherLinks = [
    { label: t.nav.innovations, href: innovationsRoutes[lang] },
    { label: t.nav.specialPartners, href: specialPartnersRoutes[lang] },
    { label: t.nav.contact, href: eventsRoutes[lang] },
    { label: t.nav.society, href: societyRoutes[lang] },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const langRoutes = { en: "/", es: "/es", pt: "/pt" } as const;
  const langOrder: Array<"en" | "es" | "pt"> = ["en", "es", "pt"];
  const nextLangs = langOrder.filter((l) => l !== lang);

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
          {/* About */}
          <li>
            <Link to={aboutRoutes[lang]} className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors duration-300">
              {t.nav.about}
            </Link>
          </li>

          {/* Programs (with submenu) */}
          <li
            className="relative"
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}
          >
            <Link
              to={programsRoute}
              className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1"
            >
              {t.nav.programs}
              <svg className={`w-3 h-3 transition-transform duration-300 ${programsOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {programsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div
                  className="grid grid-cols-3 gap-8 px-8 py-8 shadow-xl border border-foreground/10 min-w-[820px]"
                  style={{ backgroundColor: "hsl(40, 20%, 94%)" }}
                >
                  {groupKeys.map((key) => {
                    const group = programsGroups[key];
                    return (
                      <div key={key}>
                        <Link
                          to={`${programsRoute}#${key}`}
                          onClick={() => setProgramsOpen(false)}
                          className="block font-serif text-sm font-medium text-foreground mb-3 hover:text-accent transition-colors"
                        >
                          {group.label}
                        </Link>
                        <div className="w-8 h-px bg-accent mb-4" />
                        <ul className="space-y-2.5">
                          {group.items.map((item) => (
                            <li key={item.anchor}>
                              <Link
                                to={`${programsRoute}#${item.anchor}`}
                                onClick={() => setProgramsOpen(false)}
                                className="font-sans text-xs tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 leading-relaxed block"
                              >
                                {item.label}
                                {"comingSoon" in item && item.comingSoon && (
                                  <span className="ml-1.5 text-[9px] tracking-[0.15em] uppercase text-accent">
                                    ({programsGroups.comingSoonLabel})
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </li>

          {otherLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.href} className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors duration-300">
                {link.label}
              </Link>
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
          <ul className="flex flex-col items-center gap-5 py-8">
            <li>
              <Link to={aboutRoutes[lang]} onClick={() => setMenuOpen(false)} className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground">
                {t.nav.about}
              </Link>
            </li>

            {/* Programs accordion */}
            <li className="w-full px-8">
              <button
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="w-full flex items-center justify-center gap-2 text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground"
              >
                {t.nav.programs}
                <svg className={`w-3 h-3 transition-transform ${mobileProgramsOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileProgramsOpen && (
                <div className="mt-4 space-y-5 text-center">
                  {groupKeys.map((key) => {
                    const group = programsGroups[key];
                    return (
                      <div key={key}>
                        <Link
                          to={`${programsRoute}#${key}`}
                          onClick={() => { setMenuOpen(false); setMobileProgramsOpen(false); }}
                          className="block font-serif text-sm font-medium text-foreground mb-2"
                        >
                          {group.label}
                        </Link>
                        <ul className="space-y-1.5">
                          {group.items.map((item) => (
                            <li key={item.anchor}>
                              <Link
                                to={`${programsRoute}#${item.anchor}`}
                                onClick={() => { setMenuOpen(false); setMobileProgramsOpen(false); }}
                                className="font-sans text-xs tracking-wide text-foreground/60 hover:text-foreground"
                              >
                                {item.label}
                                {"comingSoon" in item && item.comingSoon && (
                                  <span className="ml-1 text-[9px] uppercase tracking-[0.15em] text-accent">
                                    ({programsGroups.comingSoonLabel})
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </li>

            {otherLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href} onClick={() => setMenuOpen(false)} className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground">
                  {link.label}
                </Link>
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
