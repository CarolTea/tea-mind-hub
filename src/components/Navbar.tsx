import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import teaMindLogo from "@/assets/tea-mind-logo-transparent.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, t } = useLang();
  const navigate = useNavigate();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.programs, href: "#programs" },
    { label: t.nav.society, href: "#society" },
    { label: t.nav.contact, href: "#footer" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    navigate(lang === "en" ? "/es" : "/");
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm transition-all duration-500"
      style={{ backgroundColor: "hsl(40, 20%, 94%, 0.95)" }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        <a href={lang === "en" ? "/" : "/es"} className="flex items-center gap-3">
          <img src={teaMindLogo} alt="Tea Mind Business Hub" className="h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLang}
              className="text-xs font-sans font-medium tracking-wider uppercase border border-foreground/20 px-3 py-1.5 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors duration-300"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-sm border-t border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-sans tracking-wider uppercase text-foreground/80 hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => { setMenuOpen(false); toggleLang(); }}
                className="text-xs font-sans font-medium tracking-wider uppercase border border-foreground/20 px-3 py-1.5 text-foreground/70 hover:text-foreground"
              >
                {lang === "en" ? "ES" : "EN"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
