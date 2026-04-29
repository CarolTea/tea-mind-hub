## Ajuste no cartão da Carla

No arquivo `src/pages/CarlaCard.tsx`, abaixo do nome "Carla Vicente", substituir o texto atual "Sommelier de Chá" pelo novo subtítulo:

**Antes:** Sommelier de Chá
**Depois:** CEO, Sommelier de Chá & Tea Barista

### Detalhes técnicos

- Manter o mesmo bloco visual: dividers gold laterais (`h-px w-8 bg-accent/60`), tipografia `font-sans text-[11px] tracking-[0.35em] uppercase text-accent`.
- Como o texto fica mais longo, ajustar levemente o tracking para `tracking-[0.25em]` e remover os dividers laterais nessa linha (ou reduzir a largura deles para `w-4`) para evitar quebra desalinhada em telas estreitas (375px).
- Seguir a regra do projeto: usar vírgulas, nunca travessões. Manter "CEO" em maiúsculas, "Tea Barista" em inglês conforme padrão do projeto.

Nenhum outro arquivo precisa ser tocado.