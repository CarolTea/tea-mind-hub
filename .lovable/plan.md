

# Neural System Page — Major Content & Pricing Overhaul

## Summary

Three major changes: (1) completely rewrite the AI agents section with richer, utility-focused descriptions and bullet lists, (2) add a "professionals & entrepreneurs" badge to the Hero, (3) redesign pricing from 4 individual AI cards to 3 plan tiers (Monthly, Annual, Combo).

---

## 1. Hero — Add exclusivity badge

Add a styled badge/tag above the "Tea Mind Business Hub" label saying "Exclusivo para Profissionais e Empreendedores do Chá" (translated per locale). Small pill/tag with border-accent styling.

## 2. Agents Section — Full rewrite

**New structure per agent card:**
- Agent number + name (keep English technical names)
- **Tag** line (short italic/uppercase tagline)
- **Headline** (bold serif statement)
- **Body** paragraph explaining who it's for
- **Bullet list** of capabilities ("Com ele, você pode:")
- **Closing line** (italic, punchy)

Cards change from compact 3-column grid to **full-width stacked cards** (or 1-column with generous spacing) to accommodate the longer content. Each card gets more vertical space.

**Section heading** changes from "The Intelligence Layers" to "Três agentes. Cada um com uma missão." with a subtitle below.

**Translation updates** in `neural-translations.ts`:
- New type: each agent item gets `tag`, `headline`, `body`, `capabilities` (string[]), `closing` fields (replacing `subtitle`, `description`, `why`)
- Section gets `heading` + `subtitle`
- All 3 languages with the full new copy (PT as provided, EN/ES translated equivalents)

## 3. Pricing Section — Redesign to 3 plan tiers

Replace the current 4-card grid (3 individual AIs + combo) with **3 vertical cards**:

| Card 1 | Card 2 | Card 3 |
|--------|--------|--------|
| Plano Mensal Individual | Plano Anual Individual (badge: "Mais popular") | Combo Neural System (badge: "Recomendado") |
| R$ 70/mês | R$ 600 à vista ou 12x R$ 63,89 | R$ 1.100 à vista ou 12x R$ 117,14 |
| "Acesso a um agente" | "Acesso a um agente — economia de 10%" | "Acesso completo ao sistema" |
| Description text | Description text | Description text |
| CTA: "Assinar mensal" | CTA: "Assinar anual" | CTA: "Quero o sistema completo" |

Grid: `md:grid-cols-3`. Combo card gets gold border highlight.

**Translation updates**: New pricing type with `monthly`, `annual`, `combo` objects each containing `title`, `badge?`, `access`, `price`, `installment?`, `description`, `cta`.

---

## Files Changed

### `src/lib/neural-translations.ts`
- Rewrite TypeScript type to match new agent structure (tag, headline, body, capabilities[], closing) and new pricing structure (3 tiers instead of per-AI plans)
- Full copy in PT (as provided), EN and ES (translated equivalents)

### `src/pages/NeuralSystem.tsx`
- **NeuralHero**: Add exclusivity badge element
- **IntelligenceLayers**: Rewrite to full-width stacked agent cards with bullet lists, new heading/subtitle
- **PricingSection**: Rewrite to 3-tier card layout with real prices and new structure

