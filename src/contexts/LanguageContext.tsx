import { createContext, useContext } from "react";
import { translations, type Lang } from "@/lib/translations";

type Translations = (typeof translations)[Lang];

interface LanguageContextType {
  lang: Lang;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: translations.en,
});

export const LanguageProvider = ({ lang, children }: { lang: Lang; children: React.ReactNode }) => (
  <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
    {children}
  </LanguageContext.Provider>
);

export const useLang = () => useContext(LanguageContext);
