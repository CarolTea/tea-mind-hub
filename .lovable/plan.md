

# Complete Site Redesign — Tea Mind Business Hub

## Overview

Full rebuild of the homepage with 9 content blocks (up from 6), expanded navbar (7 items + lang selector), expanded footer (4 columns), and complete translation updates across PT/EN/ES. Six new sections added; all existing sections get new copy.

## Architecture

```text
Current:                          New:
Hero                              Hero (new copy + eyebrow + social proof)
About                         →   Posicionamento (4 pillars with icons)
Intelligence                  →   Programas (5 cards, not 2)
Programs                      →   Prova Social (NEW - numbers + carousel)
Society                       →   Inovações (NEW - 2 cards: AI + Tea Fest)
Philosophy                    →   Fundadoras (NEW - 2 founder cards)
Footer                            Tea Mind Society (expanded, 4 pillars)
                                  Partners (NEW - 3 placeholder cards)
                                  CTA Final (NEW - fullscreen)
                                  Footer (4 columns, expanded)
```

## Files Changed

### 1. `src/lib/translations.ts` — Major expansion

Rewrite entire translation object. New keys for all 9 blocks + navbar + footer in PT/EN/ES. The PT copy comes directly from the brief; EN/ES are translated equivalents. New nav items: `founders`, `partners`, `innovations`. New sections: `positioning`, `programs` (5 items), `socialProof`, `innovations`, `founders`, `society` (4 pillars), `partners`, `ctaFinal`, expanded `footer`.

### 2. `src/components/Navbar.tsx` — Expanded menu

- Add nav items: Sobre · Programas · Fundadoras · Partners · Inovações · Tea Mind Society · Contato
- Programs dropdown keeps sub-links to Neurogastronomy and Neural System pages
- Mobile menu updated accordingly
- All new items link to `#section-id` anchors

### 3. `src/components/Hero.tsx` — New copy + elements

- Add eyebrow text: "STRATEGIC INTELLIGENCE FOR THE TEA INDUSTRY"
- New subtitle (longer, from brief)
- CTA2 changes to "Fazer o Diagnóstico Gratuito"
- Add social proof line below buttons: "1.400+ profissionais formados · 100+ negócios mentorados · ..."

### 4. `src/components/About.tsx` → Rename to `Positioning.tsx`

- New title: "Onde conhecimento técnico encontra visão de negócio"
- New eyebrow: "A inteligência por trás da indústria"
- 4 pillars in 2x2 grid with emoji icons + bold title + description (from brief)
- Closing phrase centered: "Nosso trabalho não é sobre consumo. É sobre construção."
- Keep 2-column layout with image

### 5. `src/components/Programs.tsx` — 5 cards instead of 2

- New heading/subtitle from brief
- Diagnosis CTA button above cards
- 5 program cards in grid: Atuação com Chá, Laboratório de Marcas, Sprint Smart, Arquitetura de Negócios, Neurogastronomia
- Each card: name + subtitle + "Quero conhecer esse programa →" button
- Footer line: "Ainda explorando? Comece pelo diagnóstico."
- Dark background

### 6. `src/components/SocialProof.tsx` — NEW

- Stats bar: 3.000+ alunos · 1.400+ profissionais · 300+ Sommeliers · etc.
- Eyebrow + title
- 6 testimonial cards in carousel (placeholder content)
- Transition text + CTA button
- Creme/off-white background

### 7. `src/components/Innovations.tsx` — NEW (replaces Intelligence)

- Eyebrow: "Tea Mind Inovações"
- Title + subtitle from brief
- 2 cards side-by-side: Tea Mind AI (with CTA) + Tea Fest in Rio (with CTA)
- Closing phrase + "Explorar todas as inovações" button
- Dark background

### 8. `src/components/Founders.tsx` — NEW

- Eyebrow + title + subtitle from brief
- 2 cards with placeholder photos: Carol Tavares + Carla Vicente
- Titles/credentials listed
- "Conheça nossa história" button
- Creme background

### 9. `src/components/Society.tsx` — Expanded

- Keep dark background with texture
- New copy: "Ninguém constrói um mercado sozinho."
- 4 pillars in 2x2 grid with emoji + title + description
- Closing phrase + CTA button

### 10. `src/components/Partners.tsx` — NEW

- 3 placeholder cards with photo area + name + specialty + bio
- Creme background
- Closing phrase + CTA

### 11. `src/components/CtaFinal.tsx` — NEW (replaces Philosophy)

- Fullscreen dark background
- Eyebrow + title + subtitle
- 2 buttons: Diagnóstico Gratuito + Conheça os Programas

### 12. `src/components/Footer.tsx` — Expanded to 4 columns

- Logo + tagline
- Col 1: About info + locations + contact
- Col 2: Navigation links (all 7 menu items)
- Col 3: Programs list (5 programs)
- Col 4: Inovações (AI, Tea Fest, Society)
- Bottom: copyright + terms + privacy + tagline

### 13. `src/pages/Index.tsx` — Updated section order

```tsx
<Navbar />
<Hero />
<Positioning />
<Programs />
<SocialProof />
<Innovations />
<Founders />
<Society />
<Partners />
<CtaFinal />
<Footer />
```

### 14. Remove `src/components/Intelligence.tsx` and `src/components/Philosophy.tsx`

Replaced by Innovations and CtaFinal respectively.

## Technical Notes

- Carousel for testimonials uses existing embla-carousel setup
- All placeholder images use `/public/placeholder.svg` or colored div placeholders
- Existing assets (hero-bg, society-bg, about-tea, program images) reused where applicable
- Program card images: reuse existing 3 program images + placeholder for remaining 2
- Founder photos: placeholder divs with initials
- All copy provided in PT brief; EN/ES translations created by me

