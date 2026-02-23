import { useLang } from "@/contexts/LanguageContext";
import teaHubLogo from "@/assets/tea-hub-logo-transparent.png";

const Footer = () => {
  const { t } = useLang();

  const footerLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.programs, href: "#programs" },
    { label: t.nav.society, href: "#society" },
  ];

  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div>
            <img src={teaHubLogo} alt="Tea Mind Business Hub" className="h-16 w-auto mb-6" />
            <p className="font-sans text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-primary-foreground/40 mb-6">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-primary-foreground/40 mb-6">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 font-sans text-sm text-primary-foreground/60">
              <li>contact@teamindbusinesshub.com</li>
              <li>São Paulo · London · Shanghai</li>
            </ul>
            <div className="flex gap-4 mt-8">
              {["LinkedIn", "Instagram"].map((name) => (
                <a key={name} href="#" className="text-xs font-sans tracking-wider uppercase text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors duration-300" aria-label={name}>
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="font-sans text-xs text-primary-foreground/30 text-center">
            © {new Date().getFullYear()} Tea Mind Business Hub. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
