

# Create Hotmart Neurogastronomy AI Page with Pricing

## Overview

Create the new page `src/pages/HotmartNeurogastronomyAI.tsx` at route `/hotmart/neurogastronomy-ai` — Portuguese only, not in menus. Includes all product copy from the previously approved plan plus a pricing section with monthly/annual toggle.

## Files Changed

### 1. `src/pages/HotmartNeurogastronomyAI.tsx` — NEW

Self-contained page following `HotmartNeuralSystem.tsx` pattern. All copy inlined. Sections:

- **Hero** (dark bg): Badge "Neurogastronomy AI", title "Tea Mind | Neurogastronomy AI", subtitle about the AI being the only one dedicated to this niche, intro paragraph about the three pillars (Neurociência, Fitoquímica, Análise Sensorial).
- **Method Block** (light bg): "O Cérebro do Método na Palma da sua Mão" — paragraph about trained content, styled with accent left border.
- **Capabilities Section** (dark bg): "Funcionalidades e Diferenciais", 4 cards in 2x2 grid:
  1. Criação Intencional
  2. Design de Experiências
  3. Embasamento Científico
  4. Consultoria Estratégica
- **Closing Block** (light bg): "Esta IA não substitui o conhecimento..." as elegant centered quote.
- **Pricing Section** (dark bg): Monthly/Annual toggle (same pattern as Neural System page):
  - **Anual**: 12x R$ 107 (highlighted) / R$ 1.000 à vista — link: `https://pay.hotmart.com/A105211518D?off=vig97m2v&checkoutMode=6`
  - **Mensal**: R$ 150/mês — link: `https://pay.hotmart.com/A105211518D?off=byzkffdp&checkoutMode=6`
  - Coupon banner with ALUNOS10 (10% discount)
  - Two side-by-side cards with features
- **CTA** (dark bg): Contact/closing statement with accent dividers.

### 2. `src/App.tsx` — Add route

Add: `<Route path="/hotmart/neurogastronomy-ai" element={<HotmartNeurogastronomyAI />} />`

No navbar or other file changes.

