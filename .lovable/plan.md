

# Create Tea Mind Society Page

## Overview

Create a dedicated Society page (`/society`, `/pt/sociedade`, `/es/sociedad`) with 5 content blocks following the established pattern. Update navbar to route there instead of the `#society` anchor.

## Architecture

```text
src/pages/SocietyPage.tsx
  Block 1 — Hero (dark bg, animated SVG, eyebrow + title + subtitle + bullet list)
  Block 2 — Vision (light bg, centered title + text + italic closing)
  Block 3 — What is the Society (dark bg, title + text + 5 feature items with icons)
  Block 4 — Differentiator (light bg, title + text + accent-border closing quote)
  Block 5 — Closing (dark bg, large serif title + text + CTA button with email/contact link)
```

## Files Changed

### 1. `src/pages/SocietyPage.tsx` — NEW

Follows PartnersPage/InnovationsPage pattern exactly: Fade helper, HeroBackground SVG, LanguageProvider wrapper, Navbar + Footer, inline `societyT` translations for PT/EN/ES.

- **Block 1 — Hero:** Dark primary bg with animated SVG lines. Eyebrow "Tea Mind Society", title "Ninguém constrói um mercado sozinho.", subtitle paragraph. Below subtitle, a styled bullet list (5 items) showing "Este espaço é para quem..." with subtle accent markers.
- **Block 2 — Vision:** Light bg. Title "A xícara não se esvazia quando o programa acaba." Text paragraph. Italic closing with accent left-border.
- **Block 3 — What is the Society:** Dark bg. Title + intro text. Five feature items displayed as a vertical or grid list with icons (MessageCircle, Calendar, BookOpen, TrendingUp, Users from lucide-react) representing: lives mensais, entrevistas/encontros, conteúdos, discussões, acesso contínuo.
- **Block 4 — Differentiator:** Light bg. Title "Uma extensão viva do ecossistema Tea Mind." Text paragraph. Accent-bordered closing callout: "Aqui, o valor está na curadoria, na continuidade e no acesso."
- **Block 5 — Closing:** Dark bg. Large serif title "Continuar perto também é uma forma de crescer." Text paragraph. CTA button "Solicite sua entrada gratuita" linking to email or contact section.

### 2. `src/App.tsx` — Add routes + import

```
/society → SocietyPage lang="en"
/pt/sociedade → SocietyPage lang="pt"
/es/sociedad → SocietyPage lang="es"
```

### 3. `src/components/Navbar.tsx` — Update society link

Add `societyRoutes` const. Change `{ label: t.nav.society, href: "#society" }` to use `societyRoutes[lang]` with `isRoute: true`.

## Technical Notes

- Same visual rhythm as other pages: alternating dark/light sections
- Hero bullet list adds visual interest beyond plain text
- Block 3 icons provide movement and scannability
- Homepage `Society.tsx` component stays unchanged
- All copy translated to EN/ES inline

