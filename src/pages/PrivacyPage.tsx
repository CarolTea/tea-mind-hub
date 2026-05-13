import LegalPage from "./LegalPage";
import { privacyContent } from "./legal-content";
import type { Lang } from "@/lib/translations";

const PrivacyPage = ({ lang }: { lang: Lang }) => (
  <LegalPage lang={lang} content={privacyContent[lang]} />
);

export default PrivacyPage;