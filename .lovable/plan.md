## Página de Boas-vindas (/bem_vindo)

### Objetivo
Criar uma página de recepção para novos alunos que não deve ser indexada por motores de busca.

### Mudanças

1. **Nova página** `src/pages/WelcomePage.tsx`:
   - Layout padrão do projeto (Navbar + conteúdo editorial + Footer).
   - Título impactante: "Bem vindo (a) Tea Mind Business Hub" com uma frase inspiradora.
   - Instruções claras: verificar e-mail da Hotmart (incluindo pasta de spam) e entrar em contato com suporte via WhatsApp `https://wa.me/5521981126981`.
   - Estilo visual consistente com o restante do site (tipografia serif/sans, cores do design system).
   - Meta tag `noindex, nofollow` injetado via `useEffect` para evitar indexação sem necessidade de react-helmet-async.

2. **Rota** em `src/App.tsx`:
   - Adicionar `<Route path="/bem_vindo" element={<WelcomePage />} />` antes do catch-all.

3. **robots.txt** em `public/robots.txt`:
   - Adicionar `Disallow: /bem_vindo` sob `User-agent: *`.

### Arquivos
- `src/pages/WelcomePage.tsx` (novo)
- `src/App.tsx` (rota)
- `public/robots.txt` (noindex via robots)