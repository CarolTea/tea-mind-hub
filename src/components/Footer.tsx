import { useLang } from "@/contexts/LanguageContext";
import teaHubLogo from "@/assets/tea-hub-logo-transparent.png";

const Footer = () => {
  const { t } = useLang();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.programs, href: "#programs" },
    { label: t.nav.founders, href: "#founders" },
    { label: t.nav.partners, href: "#partners" },
    { label: t.nav.innovations, href: "#innovations" },
    { label: t.nav.society, href: "#society" },
    { label: t.nav.contact, href: "#footer" },
  ];

  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          {/* Col 1 - About */}
          <div>
            <img src={teaHubLogo} alt="Tea Mind Business Hub" className="h-16 w-auto mb-6" />
            <p className="font-sans text-sm text-primary-foreground/50 leading-relaxed mb-4">
              {t.footer.aboutText}
            </p>
            <p className="font-sans text-xs text-primary-foreground/30 leading-relaxed mb-4">
              {t.footer.locations}
            </p>
            <p className="font-sans text-xs text-primary-foreground/40">
              contact@teamindbusinesshub.com
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
                  <a href={link.href} className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                    {link.label}
                  </a>
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
            <a href="#" className="font-sans text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="font-sans text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors">
              {t.footer.privacy}
            </a>
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
