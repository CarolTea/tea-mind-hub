

# Página Hotmart — Neural System (PT only)

## O que será criado

Uma nova página exclusiva em português, acessível via rota `/hotmart/neural-system`, sem links nos menus. Reutiliza a mesma copy dos agentes e hero do Neural System existente (versão PT), mas com uma seção de pricing completamente diferente.

## Pricing — Layout

- **Toggle mensal/anual** no topo da seção (switch estilizado)
- **4 cards verticais** em grid (`md:grid-cols-4`, `sm:grid-cols-2`, 1 col mobile):
  - Sensory AI
  - Blend AI
  - Business AI
  - Combo Neural System (destaque com borda gold)
- Quando **mensal** selecionado: mostra R$ 70/mês para os avulsos; combo fica desabilitado ou mostra "Somente anual"
- Quando **anual** selecionado: mostra R$ 600 à vista (até 12x R$ 50,00) para avulsos; R$ 1.100 (até 12x R$ 117,14) para combo
- Cada card tem botão CTA que abre o link Hotmart correspondente (mensal ou anual)
- **Banner de cupom** acima ou abaixo do toggle: destaque visual informando "Use o cupom **ALUNOS10** e ganhe 10% de desconto em todos os planos"

## Links Hotmart

| Agente | Mensal | Anual |
|--------|--------|-------|
| Sensory AI | `https://pay.hotmart.com/R104714810A?off=tccxvcz3` | `https://pay.hotmart.com/R104714810A?off=xpmd66ta` |
| Blend AI | `https://pay.hotmart.com/Q104723929R?off=x5mb43ov` | `https://pay.hotmart.com/Q104723929R?off=57g1hghd` |
| Business AI | `https://pay.hotmart.com/A104733041Q?off=pp3v8i9h` | `https://pay.hotmart.com/A104733041Q?off=4qcpbc0v` |
| Combo | — | `https://pay.hotmart.com/H104735466M?off=l9avfqe7` |

## Arquivos

### Novo: `src/pages/HotmartNeuralSystem.tsx`
- Importa as traduções PT de `neural-translations.ts` diretamente (hardcoded `lang="pt"`)
- Hero + AgentsSection reutilizados (mesma copy PT)
- Nova `HotmartPricingSection`:
  - Estado `isAnnual` com toggle (switch component)
  - 4 cards com dados hardcoded (links, preços, nomes)
  - Banner do cupom ALUNOS10 com estilo de destaque
- Sem Navbar/Footer (ou versão simplificada, sem menu) — página standalone para Hotmart

### Editado: `src/App.tsx`
- Adicionar rota `/hotmart/neural-system` apontando para o novo componente

