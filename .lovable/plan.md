## Reestruturação dos Programas em 3 Categorias

Vou reorganizar os programas em três grupos claros, tanto na Home (`Programs.tsx`), quanto na página `/programs`, e adicionar submenu na Navbar.

### Estrutura aprovada (3 categorias)

**1. Programas Profissionalizantes**
- Tea Mind Atuação com Chá
- Tea Mind Laboratório de Marcas de Chá
- Tea Mind Full Experience

**2. Programas de Aprimoramento (para Profissionais do Chá)**
- Especialização em Neurogastronomia de Chás e Ervas
- Especialização em Eventos com Chá
- Especialização em Harmonização com Chás

**3. Programas de Aceleração**
- Tea Mind Sprint Smart
- Tea Mind Arquitetura Comercial *(badge "Lançamento em Breve")*

---

### 1. `src/lib/translations.ts` — refatorar `programs.items`

Substituir o array plano `items` por uma estrutura agrupada nos 3 idiomas (PT/EN/ES):

```ts
programs: {
  eyebrow, heading, subtitle, diagnosisCta, cardCta, footerNote, footerCta,
  categories: [
    {
      id: "profissionalizantes",
      label: "Programas Profissionalizantes",
      description: "Trajetórias completas de formação para quem deseja atuar profissionalmente no mercado do chá.",
      items: [ Atuação, Laboratório, Full Experience ]
    },
    {
      id: "aprimoramento",
      label: "Programas de Aprimoramento",
      description: "Especializações para profissionais do chá que desejam aprofundar repertório técnico e visão de mercado.",
      items: [ Neurogastronomia, Eventos, Harmonização ]
    },
    {
      id: "aceleracao",
      label: "Programas de Aceleração",
      description: "Diagnóstico estratégico e estruturação para empreendedores que já iniciaram e precisam reorganizar a base do negócio.",
      items: [ Sprint Smart, Arquitetura Comercial (comingSoon: true) ]
    }
  ]
}
```

Cada item: `{ id, title, description, comingSoon? }`. Traduções equivalentes em EN/ES (ex.: "Professional Programs" / "Programas Profesionales", "Enhancement Programs" / "Programas de Perfeccionamiento", "Acceleration Programs" / "Programas de Aceleración").

Adicionar nova key `nav.programsGroups` em PT/EN/ES com os mesmos labels para uso no submenu da Navbar.

Adicionar copy "Lançamento em Breve" / "Coming Soon" / "Próximamente" em `programs.comingSoon`.

### 2. `src/components/Programs.tsx` — Home, segunda dobra de Programas

- Substituir o grid único atual por **3 blocos agrupados verticalmente**, cada um com:
  - Header da categoria: eyebrow dourado + título serif + descrição curta.
  - Grid de cards (3 colunas em desktop, 1 em mobile) com os programas daquela categoria.
- Cards mantêm o mesmo estilo atual (border `primary-foreground/10`, hover dourado, CTA "Quero conhecer esse programa →").
- Card "Arquitetura Comercial": substituir o CTA pelo selo dourado **"Lançamento em Breve"** (sem link de navegação) e reduzir a opacidade do card para indicar estado.
- Manter o bloco superior (eyebrow, heading, subtitle, CTA Diagnóstico Gratuito) e o `footerNote` final.
- Cada card continua linkando para `/pt/programas#<id-do-programa>` (anchor) na ProgramsPage, exceto Arquitetura Comercial.

### 3. `src/pages/ProgramsPage.tsx` + `src/lib/programs-translations.ts`

- Em `programs-translations.ts`, agrupar o array `programs` em `categories` (mesma estrutura), mantendo todo o conteúdo detalhado existente para Atuação, Laboratório, Full Experience e Sprint Smart.
- Adicionar entry **"Arquitetura Comercial"** apenas com `id`, `title`, `comingSoon: true` e uma descrição curta (1 parágrafo) , sem `forWho`, `includes`, `formationText`, `directionText`.
- Em `ProgramsPage.tsx`:
  - Antes de cada grupo de `ProgramSection`, renderizar um **divisor de categoria** (eyebrow dourado + título serif centralizado + linha) com fundo alternado consistente com o esquema dark/light atual.
  - Para o item `comingSoon`, renderizar uma **`ProgramSectionComingSoon`** simplificada: título, badge dourado "Lançamento em Breve", descrição curta, sem CTA.
  - Manter todos os anchors `id={program.id}` para deep-link a partir da Home e da Navbar.

### 4. `src/components/Navbar.tsx` — submenu "Programas"

- Substituir o link simples "Programas" por um **dropdown com submenus** (desktop) usando o componente `NavigationMenu` já disponível em `src/components/ui/navigation-menu.tsx`.
- Estrutura:
  - **Programas** (trigger)
    - Programas Profissionalizantes → `/pt/programas#profissionalizantes`
      - Tea Mind Atuação com Chá
      - Tea Mind Laboratório de Marcas de Chá
      - Tea Mind Full Experience
    - Programas de Aprimoramento → `/pt/programas#aprimoramento`
      - Neurogastronomia de Chás e Ervas
      - Eventos com Chá
      - Harmonização com Chás
    - Programas de Aceleração → `/pt/programas#aceleracao`
      - Sprint Smart
      - Arquitetura Comercial *(rótulo "em breve")*
- Painel do dropdown: fundo creme (`hsl(40, 20%, 94%)`) consistente com a Navbar, tipografia serif para títulos de categoria, sans uppercase para itens, separador dourado entre categorias.
- Versão **mobile**: expandir o item "Programas" em accordion com os 3 grupos e seus itens (mantendo o estilo do menu mobile atual).
- Manter todos os outros itens (Sobre, Inovações, Society, Eventos) inalterados, assim como o seletor de idioma.

### 5. Considerações finais

- IDs de âncora consistentes: `profissionalizantes`, `aprimoramento`, `aceleracao`, e os IDs já existentes de cada programa (`atuacao`, `laboratorio`, `full-experience`, `sprint`, `neurogastronomia`, `eventos`, `harmonizacao`, `arquitetura-comercial`).
- Sem mudanças na rota da página de Programas , apenas reorganização do conteúdo.
- Sem alteração nas demais páginas (About, Society, Innovations, Partners).
- Build TypeScript validado após as mudanças para garantir que todos os consumidores de `t.programs.items` foram migrados para `t.programs.categories`.

**Arquivos a editar:**
- `src/lib/translations.ts`
- `src/lib/programs-translations.ts`
- `src/components/Programs.tsx`
- `src/pages/ProgramsPage.tsx`
- `src/components/Navbar.tsx`
