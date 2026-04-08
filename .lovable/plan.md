

# Create Innovations Page

## Overview

Create a new dedicated Innovations page (`/innovations`, `/pt/inovacoes`, `/es/innovaciones`) with 6 content blocks. Follow the same pattern as AboutPage.tsx (Fade helper, inline translations, LanguageProvider wrapper). Update navbar to link to this page instead of the `#innovations` anchor.

## Architecture

```text
New page: src/pages/InnovationsPage.tsx
  Block 1 — Hero (dark bg, animated SVG lines)
  Block 2 — Vision (light bg, centered text)
  Block 3 — Tea Mind AI (dark bg, feature points + button to /hotmart/neural-system)
  Block 4 — Tea Fest in Rio (light bg, image placeholder + text)
  Block 5 — Other Innovation Fronts (dark bg, text + visual)
  Block 6 — Closing (light bg, quote + two CTAs)
```

## Files Changed

### 1. `src/pages/InnovationsPage.tsx` — NEW

Self-contained page following AboutPage pattern (Fade wrapper, LanguageProvider, Navbar + Footer, inline translations object for PT/EN/ES).

**Block 1 — Hero:** Dark primary bg with animated SVG background. Eyebrow "Tea Mind Inovações", title, subtitle. Same visual treatment as AboutPage hero.

**Block 2 — Vision:** Light bg section. Centered title "Inovar, para nós, é construir o que o mercado ainda precisa." Text paragraph + closing line with accent left-border styling.

**Block 3 — Tea Mind AI:** Dark bg. Title with accent badge. Description paragraph. Four feature points displayed as a 2x2 grid of small cards (icon + text). CTA button linking to `/hotmart/neural-system`.

**Block 4 — Tea Fest in Rio:** Light bg. `grid md:grid-cols-2` with image placeholder on one side. Title, two text paragraphs, CTA button for 2025 edition / 2026 waitlist.

**Block 5 — Other Fronts:** Dark bg. Centered title + paragraph about HackaTEA and NFTs. Could include small visual icons.

**Block 6 — Closing:** Dark accent bg or light bg. Large serif italic quote "Não seguimos o mercado do chá. Nós o expandimos." Closing paragraph. Two CTA buttons side by side: "Explorar os Programas" (links to programs route) and "Conhecer a Tea Mind Society" (links to `#society` or society section).

### 2. `src/App.tsx` — Add routes

```
/innovations → InnovationsPage lang="en"
/pt/inovacoes → InnovationsPage lang="pt"
/es/innovaciones → InnovationsPage lang="es"
```

### 3. `src/components/Navbar.tsx` — Update nav link

Change `{ label: t.nav.innovations, href: "#innovations" }` to a route link using `innovationsRoutes` const (same pattern as about/programs). Add `isRoute: true`.

### 4. Home page `Innovations.tsx` component — No changes

Stays as-is on the homepage as a summary section.

## Technical Notes

- All copy provided in PT; EN/ES translated inline
- Tea Mind AI block includes a navigate button to `/hotmart/neural-system`
- Tea Fest CTA can be an external link or placeholder `#`
- Follows exact same code patterns as AboutPage (Fade, HeroBackground SVG, aspect-ratio placeholders)

