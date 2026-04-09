

# Create Partners Page

## Overview

Create a new dedicated Partners page (`/partners`, `/pt/parceiros`, `/es/socios`) with 6 content blocks following the same pattern as AboutPage and InnovationsPage. Update navbar to route to this page instead of the `#partners` anchor.

## Architecture

```text
New page: src/pages/PartnersPage.tsx
  Block 1 — Hero (dark bg, animated SVG lines)
  Block 2 — Vision (light bg, centered text with accent border)
  Block 3 — Partner Cards (dark bg, grid of cards with photo placeholders)
  Block 4 — How Partners Participate (light bg, icon list of contribution types)
  Block 5 — What It Means for Students (dark bg, text + accent callout)
  Block 6 — Closing (light bg, large quote + dual CTAs)
```

## Files Changed

### 1. `src/pages/PartnersPage.tsx` — NEW

Self-contained page following AboutPage pattern (Fade wrapper, LanguageProvider, Navbar + Footer, inline translations for PT/EN/ES).

**Block 1 — Hero:** Dark primary bg with animated SVG background (reuse HeroBackground pattern). Eyebrow "Tea Mind Special Partners", title, subtitle.

**Block 2 — Vision:** Light bg. Centered title with accent left-border styling for the text paragraph. Closing line in italic.

**Block 3 — Partner Cards:** Dark bg. Grid of partner cards (`grid md:grid-cols-3`). Each card: aspect-ratio photo placeholder with hover effect, name, specialty badge, mini bio (2-4 lines). Uses placeholder data (3-6 cards) ready for real content. Cards have subtle border animation on hover.

**Block 4 — How Partners Participate:** Light bg. Title + intro text. Five participation formats displayed as a horizontal/grid layout of small cards with icons (especializações, aulas especiais, lives, experiências/eventos, projetos de inovação). Clean icon + label design.

**Block 5 — Student Value:** Dark bg. Title + text. Closing line as an accent-bordered callout quote: "É assim que um hub se diferencia: pela qualidade das conexões que é capaz de reunir."

**Block 6 — Closing:** Light bg. Large serif italic quote. Two CTA buttons: "Conheça os Programas" (links to programs route) and "Explorar o ecossistema Tea Mind" (links to homepage).

All copy inlined in translations object (PT provided, EN/ES translated).

### 2. `src/App.tsx` — Add routes

```
/partners → PartnersPage lang="en"
/pt/parceiros → PartnersPage lang="pt"
/es/socios → PartnersPage lang="es"
```

### 3. `src/components/Navbar.tsx` — Update nav link

Change `{ label: t.nav.partners, href: "#partners" }` to a route link using `partnersRoutes` const with `isRoute: true`.

## Technical Notes

- Follows exact same code patterns as AboutPage/InnovationsPage (Fade, HeroBackground SVG, LanguageProvider)
- Partner cards use placeholder data with aspect-ratio containers ready for real photos
- Homepage `Partners.tsx` component stays unchanged (summary on home page)
- Alternating dark/light sections for visual rhythm

