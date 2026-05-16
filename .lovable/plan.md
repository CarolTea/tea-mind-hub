## Página Special Partners

Nova página dedicada às parceiras especiais da Tea Mind (Teresinha Eiko Shimada, Fernanda Rivas, Tatiana Cantu, Gaby Godoy), com versões em português, inglês e espanhol, linkada no Navbar e no Footer.

### Rotas

- `/special-partners` (EN)
- `/pt/parceiras-especiais` (PT)
- `/es/socias-especiales` (ES)

### Estrutura visual da página

1. Navbar fixa (já existente).
2. Hero editorial:
   - Eyebrow: "SPECIAL PARTNERS" / "PARCEIRAS ESPECIAIS" / "SOCIAS ESPECIALES".
   - Título serif: "As mãos e mentes que elevam o chá brasileiro a outro patamar" (e equivalentes).
   - Parágrafo introdutório curto explicando que são profissionais de excelência que colaboram com a Tea Mind em projetos, eventos e formações de alto padrão, ampliando o ecossistema do chá no Brasil.
3. Grid de cards (1 col mobile, 2 cols desktop), seguindo o padrão editorial do site:
   - Foto em aspect ratio 4/5, object-cover (top).
   - Nome em serif.
   - Especialidade em sans uppercase/dourado (eyebrow do accent).
   - Bio em sans, leading-relaxed.
4. Bloco de fechamento com frase ("Um ecossistema de excelência, construído a muitas mãos.") e CTA WhatsApp para conversar sobre colaborações.
5. Footer (já existente).

### Conteúdo das bios

Usar exatamente as bios fornecidas em PT. Traduzir fielmente para EN e ES, mantendo nomes próprios e termos como "Tea Mind", "Tea Blender", "Sommelier", "Tea Barista", "Panorama do Chá", "ABS-Rio", "Fairmont Rio de Janeiro Copacabana", etc. em inglês quando já forem termos consagrados.

### Texto introdutório (PT)

> "Mais do que uma rede, um movimento. Reunimos profissionais que dividem com a Tea Mind a visão de elevar o chá brasileiro ao nível das maiores referências mundiais, contribuindo em projetos, eventos, formações e experiências de alto padrão."

(Versões equivalentes em EN/ES.)

### Imagens

Copiar os 4 arquivos enviados para `src/assets/` e importá-los como ES modules:

- `user-uploads://TerezinhaShimada.png` → `src/assets/special-teresinha-shimada.png`
- `user-uploads://FernandaRivas.png` → `src/assets/special-fernanda-rivas.png`
- `user-uploads://TatianaCantu.png` → `src/assets/special-tatiana-cantu.png`
- `user-uploads://GabrielaGodoy.png` → `src/assets/special-gaby-godoy.png`

### Integração com Navbar

- Adicionar `specialPartners` em `nav` no `translations.ts` (PT: "Special Partners", EN: "Special Partners", ES: "Special Partners" - manter em inglês como termo de marca, ou "Parceiras Especiais"/"Socias Especiales" se preferir; proposta: manter "Special Partners" nos 3 para consistência editorial).
- Em `Navbar.tsx`, adicionar rota em `specialPartnersRoutes` e incluir no array `otherLinks` (entre Society e Contact) tanto no desktop quanto no mobile.

### Integração com Footer

- Em `translations.ts`, adicionar entrada `specialPartners` em `footer.navigation` (na lista de `navLinks` do Footer).
- Em `Footer.tsx`, adicionar `specialPartnersRoutes` e incluir como item de rota no array `navLinks`.

### Indexação / SEO

- Página deve ser indexável (sem noindex).
- `<title>` e `<meta description>` via `useEffect` no componente (padrão usado em `WelcomePage`/outras páginas), com strings traduzidas por idioma.
- Imagens com `alt` no nome de cada parceira e `loading="lazy"`.

### Arquivos a criar/editar

**Criar**
- `src/pages/SpecialPartnersPage.tsx` (recebe `lang: Lang`)
- `src/assets/special-teresinha-shimada.png`
- `src/assets/special-fernanda-rivas.png`
- `src/assets/special-tatiana-cantu.png`
- `src/assets/special-gaby-godoy.png`

**Editar**
- `src/App.tsx` — registrar 3 rotas antes do catch-all.
- `src/components/Navbar.tsx` — link Special Partners (desktop + mobile).
- `src/components/Footer.tsx` — link Special Partners na navegação.
- `src/lib/translations.ts` — adicionar:
  - `nav.specialPartners` (3 idiomas)
  - `footer.specialPartners` label (3 idiomas)
  - bloco `specialPartners` com `eyebrow`, `title`, `intro`, `closing`, `cta`, e array `members` (name, specialty, bio) nos 3 idiomas.

### Detalhes técnicos

- Componente envolto em `<LanguageProvider lang={lang}>` (mesmo padrão das outras páginas).
- Reaproveitar tokens semânticos (`bg-background`, `text-foreground`, `text-accent`, `border-border`, `font-serif`, `font-sans`) — sem cores hardcoded.
- CTA final do bloco de fechamento abre WhatsApp `https://wa.me/5521981126981` com mensagem traduzida.
