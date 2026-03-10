

## Redesign Pricing Section — Vertical Cards

Replace the current pricing layout (one generic "Individual Plan" block + one combo block) with **4 vertical card boxes** in a responsive grid:

### Layout
- **4 columns on desktop** (`md:grid-cols-4`), **2 on tablet** (`sm:grid-cols-2`), **1 on mobile**
- Cards 1–3: Individual AI plans (Sensory AI, Blender AI, Business AI)
- Card 4: Full Access Combo — visually highlighted with gold `border-accent`

### Each individual card contains:
- AI name (e.g. "Sensory AI")
- Short description
- Monthly price placeholder
- Annual price placeholder
- CTA button

### Combo card:
- "💎 Full Access" badge
- Title + subtitle
- Monthly/annual prices
- Highlighted CTA button with accent styling

### Translation changes (`neural-translations.ts`)
- Replace `pricing.individual` (single object) with `pricing.plans` array of 3 items (one per AI), each with `name`, `description`, `monthly`, `annual`
- Keep `pricing.combo` as-is

### Component changes (`NeuralSystem.tsx`)
- Rewrite `PricingSection` to map over the 3 individual plans + render the combo card in a 4-column grid

