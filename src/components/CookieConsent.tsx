import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { translations, type Lang } from "@/lib/translations";

const STORAGE_KEY = "tmbh_cookie_consent_v1";

interface Consent {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
}

const privacyRoutes: Record<Lang, string> = {
  en: "/privacy",
  pt: "/pt/privacidade",
  es: "/es/privacidad",
};

const detectLang = (pathname: string): Lang => {
  if (pathname.startsWith("/pt")) return "pt";
  if (pathname.startsWith("/es")) return "es";
  return "en";
};

const readConsent = (): Consent | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
};

const writeConsent = (c: Consent) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    window.dispatchEvent(new CustomEvent("tmbh:consent", { detail: c }));
  } catch {
    /* ignore */
  }
};

const CookieConsent = () => {
  const location = useLocation();
  const lang = detectLang(location.pathname);
  const t = translations[lang].cookies;

  const [open, setOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) setOpen(true);
    else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }
    const reopen = () => {
      const cur = readConsent();
      if (cur) {
        setAnalytics(cur.analytics);
        setMarketing(cur.marketing);
      }
      setCustomizing(true);
      setOpen(true);
    };
    window.addEventListener("tmbh:open-cookies", reopen);
    return () => window.removeEventListener("tmbh:open-cookies", reopen);
  }, []);

  if (!open) return null;

  const save = (a: boolean, m: boolean) => {
    writeConsent({ necessary: true, analytics: a, marketing: m, ts: Date.now() });
    setOpen(false);
    setCustomizing(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-6 pointer-events-none">
      <div
        role="dialog"
        aria-live="polite"
        aria-label={t.title}
        className="pointer-events-auto max-w-5xl mx-auto bg-primary text-primary-foreground shadow-2xl border border-accent/20"
      >
        <div className="p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-start lg:justify-between">
            <div className="flex-1">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
                {t.title}
              </p>
              <p className="font-sans text-sm md:text-base text-primary-foreground/80 leading-relaxed">
                {t.message}{" "}
                <Link
                  to={privacyRoutes[lang]}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {t.privacyLink}
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
              <button
                onClick={() => save(false, false)}
                className="px-5 py-3 border border-primary-foreground/30 text-primary-foreground/80 text-xs font-sans tracking-widest uppercase hover:border-primary-foreground/60 transition-colors"
              >
                {t.reject}
              </button>
              <button
                onClick={() => setCustomizing((v) => !v)}
                className="px-5 py-3 border border-accent/60 text-accent text-xs font-sans tracking-widest uppercase hover:border-accent transition-colors"
              >
                {t.customize}
              </button>
              <button
                onClick={() => save(true, true)}
                className="px-5 py-3 bg-accent text-accent-foreground text-xs font-sans font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                {t.accept}
              </button>
            </div>
          </div>

          {customizing && (
            <div className="mt-8 pt-6 border-t border-primary-foreground/15">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent mb-5">
                {t.categoriesTitle}
              </p>
              <div className="space-y-4">
                <CookieRow
                  title={t.necessary}
                  desc={t.necessaryDesc}
                  checked
                  disabled
                  onChange={() => undefined}
                />
                <CookieRow
                  title={t.analytics}
                  desc={t.analyticsDesc}
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <CookieRow
                  title={t.marketing}
                  desc={t.marketingDesc}
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => save(analytics, marketing)}
                  className="px-5 py-3 bg-accent text-accent-foreground text-xs font-sans font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
                >
                  {t.save}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CookieRow = ({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) => (
  <div className="flex items-start justify-between gap-6">
    <div className="flex-1">
      <p className="font-serif text-base text-primary-foreground mb-1">{title}</p>
      <p className="font-sans text-xs text-primary-foreground/55 leading-relaxed">{desc}</p>
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative w-11 h-6 shrink-0 rounded-full transition-colors ${
        checked ? "bg-accent" : "bg-primary-foreground/20"
      } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-primary-foreground transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  </div>
);

export default CookieConsent;