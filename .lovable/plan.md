

# Add Bullet Points + Fix Prices on Hotmart Pricing Cards

## File: `src/pages/HotmartNeuralSystem.tsx`

### 1. Price corrections in `plans` array
- **Business AI**: monthly price changes from `R$ 70 / mês` → `R$ 75 / mês`
- **Business AI**: annual installment changes to `ou até 12x de R$ 63,89`
- **Combo**: installment stays `ou até 12x de R$ 117,14` (already correct)

### 2. Add `features` arrays to plan data

Each plan and combo gets a `features: string[]` property:

- **Sensory AI**: Análises sensoriais com linguagem técnica · Cartas de chás para restaurantes e hotéis · Harmonizações por perfil aromático · Conteúdos e aulas especializadas
- **Blend AI**: Desenvolvimento de blends autorais · Ajuste de proporções e equilíbrio sensorial · Diluição e fixação de aromas · Conformidade com normas da Anvisa
- **Business AI**: Planos de negócio para o setor de chá · Precificação de produtos e serviços · Análise de mercado e posicionamento · Estratégias de crescimento e expansão
- **Combo**: Acesso aos 3 agentes especializados · Sensorial + Produto + Negócio integrados · Economia vs. planos avulsos · Suporte completo para todas as áreas

### 3. Render bullet list in each card

Between the price/installment block and the CTA button, render:
```tsx
<ul className="space-y-2 mb-6">
  {features.map((f, j) => (
    <li key={j} className="flex items-start gap-2 text-sm text-primary-foreground/70 font-sans">
      <span className="text-accent mt-0.5 text-xs">◆</span>
      <span>{f}</span>
    </li>
  ))}
</ul>
```

