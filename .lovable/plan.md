## Ajustes solicitados

### 1. Links do Diagnóstico → URL externa
Apontar todas as CTAs de diagnóstico para `https://teamindquest.netlify.app/` (abrindo em nova aba):
- `src/components/Programs.tsx` linha 28: trocar `<a href="#">` pelo link externo.
- `src/pages/ProgramsPage.tsx` linha 113-118: trocar `href="#"` da CTA principal pelo link externo (manter `cta2` rolando para `#programs-list`).

### 2. Navbar com "Sobre" duplicado
Em `src/components/Navbar.tsx`, o link "Sobre" é renderizado duas vezes: uma como item fixo (linhas 55-59 desktop / 153-157 mobile) e outra dentro do array `otherLinks` (linha 25). Remover a entrada `about` do `otherLinks` para que apareça apenas uma vez (mantendo a posição fixa antes de "Programas" no desktop e mobile).

### 3. Eyebrow do hero/positioning
Em `src/lib/translations.ts` (PT, linha 43), trocar:
- `"INTELIGÊNCIA ESTRATÉGICA PARA A INDÚSTRIA DO CHÁ"` → `"INTELIGÊNCIA ESTRATÉGICA PARA O MERCADO DO CHÁ"`

### 4. Tea Mind Full Experience — programa
Em `src/lib/programs-translations.ts` linha 181, dentro do bloco do "Tea Mind Full Experience", trocar:
- `"Especialização em MasterChef de Harmonização"` → `"Especialização em Harmonização com Chás"`

### 5. Páginas de Termos e Política de Privacidade (LGPD)
Criar páginas legais nos três idiomas, com conteúdo padrão alinhado à LGPD (Brasil), GDPR (EU/ES) e princípios gerais (EN):

**Rotas novas em `src/App.tsx`:**
- `/terms`, `/pt/termos`, `/es/terminos` → `TermsPage`
- `/privacy`, `/pt/privacidade`, `/es/privacidad` → `PrivacyPage`

**Arquivos novos:**
- `src/pages/TermsPage.tsx`
- `src/pages/PrivacyPage.tsx`

Conteúdo padrão por idioma cobrindo:
- **Termos**: aceitação dos termos, descrição dos serviços (programas, conteúdos, eventos), propriedade intelectual, condutas do usuário, pagamentos e reembolsos (Hotmart), limitação de responsabilidade, alterações, foro (São Paulo/Brasil).
- **Privacidade (LGPD)**: controlador (Tea Mind Business Hub), dados coletados (nome, e-mail, telefone, navegação, cookies), finalidades, base legal (consentimento, execução de contrato, legítimo interesse), compartilhamento (Hotmart, e-mail marketing, analytics), direitos do titular (art. 18 LGPD), retenção, segurança, transferência internacional, contato do encarregado (DPO) via e-mail da equipe, atualizações da política.

Layout segue padrão das demais páginas (Navbar + conteúdo editorial sóbrio em serif/sans + Footer). Os links no `Footer.tsx` (já existentes em `t.footer.terms` / `t.footer.privacy`) passam a apontar para essas rotas conforme idioma.

### 6. Aviso de cookies (opt-in)
Criar componente `src/components/CookieConsent.tsx` montado no `App.tsx` (uma vez, fora das rotas):
- Banner fixo na parte inferior, estilo editorial (fundo `bg-primary text-primary-foreground`, tipografia serif/sans em linha com a marca).
- Texto multilíngue (detectado via path: `/pt`, `/es`, demais → `en`).
- Botões: **Aceitar**, **Rejeitar**, **Personalizar** (modal com toggles para "Necessários" sempre ativo, "Análise/Estatísticas", "Marketing").
- Estado salvo em `localStorage` (`tmbh_cookie_consent_v1`) com objeto `{ necessary: true, analytics: bool, marketing: bool, ts }`.
- **Opt-in real**: nenhum script de analytics/marketing carrega antes do consentimento. Por enquanto não há scripts de tracking no projeto; o banner expõe o gate para quando forem adicionados.
- Link "Saiba mais" para a Política de Privacidade do idioma corrente.
- Reabrir preferências via link no Footer ("Preferências de cookies").

### Detalhes técnicos
- Strings novas adicionadas a `translations.ts` em `pt`, `en`, `es` (banner de cookies + rótulos do footer adicionais).
- `Navbar.tsx`: apenas remover duplicidade — não mexer em estilos.
- `App.tsx`: importar `CookieConsent`, `TermsPage`, `PrivacyPage` e registrar 6 novas rotas antes do catch-all.
- `Footer.tsx`: trocar âncoras `#` dos links Termos/Privacidade pelos `Link` do react-router conforme idioma; adicionar botão "Preferências de cookies".
- Sem alterações de backend; sem dependências novas.
