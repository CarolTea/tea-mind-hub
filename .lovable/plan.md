

# Tea Mind Neural System — New Landing Page & Navigation Updates

## Overview

Create a dedicated high-conversion landing page for the Tea Mind Neural System (AI infrastructure product), add navigation links from the existing Intelligence section and the Navbar, and provide full EN/ES/PT translations.

---

## New Files

### 1. `src/lib/neural-translations.ts`
A dedicated translations file (same pattern as `neuro-translations.ts`) with all copy for the Neural System page in EN, ES, PT. Sections:

- **Hero**: "Tea Mind | Neural System" title, subtitle about first AI infrastructure, intro paragraph
- **Intelligence Layers**: 3 AI cards — Sensory AI, Blender AI, Business AI — each with subtitle, description, and "why you need this" block
- **Pricing**: Individual plan (monthly/annual), Full Access combo, CTA
- **Footer CTA**: Closing statement + "Request Neural Network Access" button

Technical terms like "Neural System", "Sensory AI", "Blender AI", "Business AI" stay in English across all locales. The rest is translated.

Pricing values will use placeholder `[Valor]` / `[Value]` since no real prices were provided for the subscription plans.

### 2. `src/pages/NeuralSystem.tsx`
The page component, following the same architecture as `Neurogastronomy.tsx`:

- Uses `LanguageProvider`, `Navbar`, `Footer`
- **Hero section**: Dark (`bg-secondary`) with "Tea Mind | Neural System" as large serif heading, gold accent line, intro paragraph
- **3 AI Cards section**: Light background, 3 elegant cards in a responsive grid (1 col mobile, 3 col desktop). Each card has: number (01/02/03), name, subtitle, description, "why you need this" rationale. Styled with border, hover effects, accent details
- **Pricing section**: Dark (`bg-primary`) background. Individual plan options in a clean layout, then a highlighted "Full Access" combo with gold accent styling. Monthly/annual toggle or side-by-side display
- **CTA section**: "Request Neural Network Access" button, closing statement

---

## Modified Files

### 3. `src/App.tsx`
Add 3 new routes:
- `/neural-system` (EN)
- `/es/sistema-neural` (ES)  
- `/pt/sistema-neural` (PT)

### 4. `src/components/Intelligence.tsx`
Add a CTA button below the intro paragraph linking to the Neural System page (using `useNavigate` + language-aware routes, same pattern as Programs).

### 5. `src/components/Navbar.tsx`
Add "Neural System" as a second item in the Programs dropdown (desktop) and mobile menu, linking to the language-appropriate route. Add a translation key for this nav item.

### 6. `src/lib/translations.ts`
Add `nav.neuralSystem` key in all 3 languages and an `intelligence.cta` key for the button text.

---

## Design Notes

- Same color system: `bg-background` (cream), `bg-primary` (deep green), `bg-secondary` (navy), `accent` (gold)
- AI card design: clean bordered cards with number indicators, serif headings, sans-serif body, gold accent lines
- Pricing: large serif price values, gold accents on the "Full Access" combo highlight
- All fade-in animations via `useFadeIn`

