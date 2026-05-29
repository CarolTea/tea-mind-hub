## Atualização do CTA do Tea Fest in Rio

Em `src/pages/InnovationsPage.tsx`:

1. Substituir o texto do CTA nos três idiomas:
   - PT (linha 57): `"Lista de espera para 2026"` → `"Inscrições abertas Lote 01"`
   - EN (linha 98): `"Waitlist for 2026"` → `"Registrations open Batch 01"`
   - ES (linha 139): `"Lista de espera para 2026"` → `"Inscripciones abiertas Lote 01"`

2. Tornar o botão clicável apontando para `https://tea-fest-in-rio-2026-eds0kfz.gamma.site/2026`:
   - Alterar o `<a href="#">` (linha 303) para `href="https://tea-fest-in-rio-2026-eds0kfz.gamma.site/2026"` com `target="_blank"` e `rel="noopener noreferrer"`.