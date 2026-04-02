

# Create Programs Page

## Overview

Create a new dedicated Programs page (`/programs`, `/pt/programas`, `/es/programas`) with the full copy provided. Delete the Neurogastronomy and NeuralSystem pages (keep HotmartNeuralSystem). Update navbar Programs dropdown to link to the new page. Add translations in all 3 languages.

## Architecture

```text
New page: src/pages/ProgramsPage.tsx
  - Hero section (eyebrow + title + subtitle + long intro text)
  - Diagnosis block (text + 2 CTAs)
  - 4 program detail sections (Atuação, Laboratório, Sprint, Arquitetura)
    Each with: title, subtitle, body text, "Para quem é" bullets, "O que inclui" list, "Como funciona" text, CTA
  - Alternating light/dark backgrounds for visual rhythm
```

## Files Changed

### 1. `src/lib/programs-translations.ts` — NEW

Dedicated translation file for the Programs page content in PT/EN/ES. Contains:
- Hero section (eyebrow, title, subtitle, intro paragraphs)
- Diagnosis block (text + CTAs)
- 4 program objects, each with: title, mainDescription, bodyText, forWho items, includes items, formation text, direction text

### 2. `src/pages/ProgramsPage.tsx` — NEW

Self-contained page component (similar pattern to Neurogastronomy.tsx):
- `Fade` wrapper for scroll animations
- **ProgramsHero**: fullscreen dark bg, eyebrow "Tea Mind Programas", title, subtitle, multi-paragraph intro text
- **DiagnosisBlock**: light bg, diagnosis text + 2 CTA buttons (Diagnóstico + Conhecer Programas abaixo with anchor scroll)
- **ProgramSection** (reusable component): renders each program with title, subtitle, body, "Para quem é" bullet list, "O que inclui" list, direction text, CTA. Alternates dark/light backgrounds.
- 4 program sections rendered: Atuação com Chá, Laboratório de Marcas, Sprint Smart, Arquitetura do Negócio
- Wrapped with `<Navbar />` and `<Footer />`

### 3. `src/App.tsx` — Add routes

- Add `/programs` (en), `/pt/programas` (pt), `/es/programas` (es) routes
- Remove Neurogastronomy routes (`/neurogastronomy`, `/es/neurogastronomia`, `/pt/neurogastronomia`)
- Remove NeuralSystem routes (`/neural-system`, `/es/sistema-neural`, `/pt/sistema-neural`)
- Keep `/hotmart/neural-system` route

### 4. `src/components/Navbar.tsx` — Update Programs dropdown

- Remove `neuroRoutes` and `neuralRoutes` constants
- Programs nav item links to the new programs page instead of `#programs`
- Remove dropdown sub-items (Neurogastronomy, Neural System) — Programs now goes directly to the programs page
- Add `programsRoutes` constant: `{ en: "/programs", es: "/es/programas", pt: "/pt/programas" }`

### 5. Delete files

- `src/pages/Neurogastronomy.tsx`
- `src/pages/NeuralSystem.tsx`
- `src/lib/neuro-translations.ts`
- `src/lib/neural-translations.ts`

### 6. `src/lib/translations.ts` — Minor update

- Update `nav.neurogastronomy` references if used elsewhere (navbar no longer needs them)

## Design Details

- Each program section: dark card-style layout on alternating backgrounds
- "Para quem é" rendered as bullet list with `◆` accent markers
- "O que inclui" rendered as check-style list
- "Como funciona" as a styled paragraph block with accent border-left
- CTAs use the existing gold accent button style
- Responsive: single column on mobile, comfortable reading width (max-w-3xl) for text content

## Technical Notes

- Follow existing Neurogastronomy page pattern (Fade wrapper, LanguageProvider, inline sections)
- PT copy is provided verbatim; EN/ES will be translated equivalents
- The Neurogastronomia program from the home page Programs section card still references the specialization — on the new Programs page, only the 4 main programs are detailed (Neurogastronomia is mentioned inside Arquitetura's includes)
- Home page Programs section cards should link to anchors on the new Programs page

