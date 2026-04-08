

# Create About / Founders Page

## Overview

Create a new dedicated About page (`/about`, `/pt/sobre`, `/es/nosotros`) with 5 content blocks: Hero, Origin story, Carol profile, Carla profile, and closing statement. The design prioritizes visual experience over dense text, with image placeholders, alternating layouts, and generous spacing. Update navbar to link to this page. Translations for EN/ES included.

## Architecture

```text
New page: src/pages/AboutPage.tsx
  Block 1 — Hero (dark bg, animated SVG lines like ProgramsPage)
  Block 2 — Origin (light bg, split layout: text + image placeholder)
  Block 3 — Carol (dark bg, image left + text right)
  Block 4 — Carla (light bg, image right + text left, mirrored)
  Block 5 — Closing quote (dark bg, large serif centered)
```

## Design Approach

- Alternating dark/light sections for visual rhythm
- Each founder gets a side-by-side layout (image placeholder + bio) instead of stacked text blocks
- Hero text is condensed: eyebrow + title + subtitle + market stats as a highlighted callout card, not inline paragraphs
- Origin block uses a two-column layout with image placeholder on one side
- Founder bios are broken into digestible chunks with subtle accent dividers between roles/achievements
- Closing quote is a full-width dark section with large italic serif text
- Reuses `Fade` component pattern from ProgramsPage for scroll animations
- Image placeholders use `aspect-ratio` containers with initials/icons

## Files Changed

### 1. `src/pages/AboutPage.tsx` — NEW

Self-contained page following ProgramsPage pattern (Fade wrapper, LanguageProvider, Navbar + Footer).

**Block 1 — Hero:** Dark primary bg with animated SVG background (reuse ProgramsHeroBackground pattern). Eyebrow, title, subtitle (condensed to 2 sentences). Below: a subtle accent-bordered card with the market data stats (25% growth, Google Trends) and the closing paragraph about Tea Mind's role.

**Block 2 — Origin:** Light bg, `grid md:grid-cols-2` layout. Left: image placeholder (aspect-4/5). Right: title "Da experiência pratica ao nascimento da Tea Mind", two text blocks with accent left-border styling, closing paragraph about Cha Pra Que transition.

**Block 3 — Carol:** Dark bg. `grid md:grid-cols-5` — image placeholder (col-span-2, aspect-3/4) left, bio right (col-span-3). Name + role tags as small accent badges. Bio split into 3-4 short paragraphs with breathing room. Key highlights (13 years, 100+ businesses, hackathons, AI ecosystem) can be pulled into small accent-colored stat callouts.

**Block 4 — Carla:** Light bg. Mirrored layout — bio left, image right. Same badge/stat treatment. Sri Lanka trip as a highlighted callout.

**Block 5 — Closing:** Dark bg, full-width section. Large italic Playfair Display quote centered: "Mais de uma década construindo o mercado do chá no Brasil. A Tea Mind é o próximo capítulo." Accent divider above.

All copy inlined in a translations object within the file (PT provided, EN/ES translated).

### 2. `src/App.tsx` — Add routes

```
/about → AboutPage lang="en"
/pt/sobre → AboutPage lang="pt"
/es/nosotros → AboutPage lang="es"
```

### 3. `src/components/Navbar.tsx` — Update nav links

Change the "Founders" / "Fundadoras" / "Fundadoras" nav item from `href: "#founders"` anchor to a route link pointing to `/about`, `/pt/sobre`, `/es/nosotros` (same pattern as Programs). Add `aboutRoutes` const and set `isRoute: true`.

### 4. `src/lib/translations.ts` — Minor update

Rename `nav.founders` label if needed (currently "Fundadoras" / "Founders" / "Fundadoras" — keep as-is or change to "Sobre" / "About" / "Nosotros" to match the nav item pointing to the about page). Since the nav already has `nav.about` = "Sobre" / "About" / "Nosotros", use that existing key instead of `nav.founders` for this link.

## Technical Notes

- Follows ProgramsPage pattern exactly: LanguageProvider wrapper, Fade component, Navbar + Footer
- Image placeholders: colored div containers with aspect-ratio and initials, ready for real photos
- No changes to Founders.tsx homepage component (it stays as a summary on the home page)
- The navbar "Sobre"/"About" link currently points to `#about` anchor on homepage; it will become a route to the new page. The "Fundadoras" link can be removed from navbar since the About page covers founders.

