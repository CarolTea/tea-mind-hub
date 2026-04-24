## Mudanças aprovadas

### 1. `src/lib/translations.ts`
- **Typo PT (Positioning)**: remover o espaço antes da vírgula em "mercado do chá , com método" → "mercado do chá, com método".
- **Renomear `footer.events` → `footer.contact`** nos três idiomas (PT/EN/ES) com copy mais genérica focada em contato:
  - PT: eyebrow "Contato", título "Vamos conversar.", texto sobre eventos/parcerias/imprensa, CTA "Falar no WhatsApp →".
  - EN/ES: equivalentes traduzidos.

### 2. `src/components/Footer.tsx`
- Trocar `t.footer.events` por `t.footer.contact`.
- Renomear constantes `eventsMessages` → `contactMessages` com mensagem genérica de contato no WhatsApp (mesmo número `5521981126981`).
- Manter o botão WhatsApp, o layout em duas colunas e o estilo dourado.
- **Manter intacto**: link "Eventos" no Navbar, página `/events` (`/pt/eventos`, `/es/eventos`) e o array `navLinks` que já aponta para a rota da página.

### Escopo
- Sem alterações em rotas, navbar ou página de Eventos.
- Apenas o bloco promocional do rodapé vira "Contato" e o typo PT é corrigido.