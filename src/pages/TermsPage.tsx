import LegalPage from "./LegalPage";
import { termsContent } from "./legal-content";
import type { Lang } from "@/lib/translations";

const TermsPage = ({ lang }: { lang: Lang }) => (
  <LegalPage lang={lang} content={termsContent[lang]} />
);

export default TermsPage;