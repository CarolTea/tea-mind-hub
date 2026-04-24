## Plano para corrigir a aba Events

### Objetivo
Criar uma página própria de Events e fazer a Navbar apontar para essa página, em vez de abrir o WhatsApp diretamente. O WhatsApp continuará existindo como CTA dentro da página e no rodapé.

### O que será implementado

1. Criar a página de Events
- Adicionar uma nova página seguindo o padrão visual editorial já usado em Society e Innovations.
- Estruturar a página com hero, bloco de proposta de valor, tipos de eventos e CTA final para WhatsApp.
- Usar copy focada em:
  - eventos personalizados
  - eventos corporativos
  - eventos temáticos
  - curadoria sensorial
  - experiência de marca e memória

2. Adicionar rotas da nova página
- Incluir novas rotas no `App.tsx`:
  - `/events`
  - `/pt/eventos`
  - `/es/eventos`
- Manter o padrão de idioma já usado no restante do site.

3. Corrigir a Navbar
- Alterar o item “Events/Eventos” para usar rota interna em vez de link externo do WhatsApp.
- Ajustar desktop e mobile para o mesmo comportamento.
- Preservar o restante da lógica de idiomas e navegação já existente.

4. Ajustar o rodapé
- Trocar o link de navegação “Events/Eventos” para a nova rota interna.
- Manter o botão de WhatsApp da faixa de eventos como CTA direto.
- Se necessário, transformar os links internos do rodapé em rotas coerentes para não depender de âncoras quando o usuário estiver fora da home.

5. Organizar traduções
- Adicionar o conteúdo textual da nova página em PT, EN e ES.
- Reaproveitar a copy institucional já criada para eventos, expandindo para blocos de página completos.

### Estrutura sugerida da página
```text
Hero
  título + subtítulo + CTA WhatsApp

Bloco 1
  O que são os eventos da Tea Mind

Bloco 2
  Tipos de eventos
    - personalizados
    - corporativos
    - temáticos

Bloco 3
  Diferenciais
    - curadoria sensorial
    - narrativa autoral
    - experiência premium
    - conexão com marca/memória

Closing CTA
  botão para WhatsApp
```

### Arquivos que devem ser alterados
- `src/App.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/lib/translations.ts`
- novo arquivo de página, por exemplo: `src/pages/EventsPage.tsx`

### Detalhes técnicos
- O problema atual é estrutural: hoje não existe rota nem página de Events; a Navbar foi configurada para abrir `wa.me` diretamente.
- A correção deve substituir esse comportamento por navegação client-side com `Link`.
- O WhatsApp continuará usando `encodeURIComponent` para mensagem pré-preenchida, mas dentro dos CTAs da página/rodapé.
- A implementação deve seguir o design system atual: Playfair Display, Inter, fundo escuro premium, acentos dourados e blocos editoriais.

### Resultado esperado
Ao clicar em “Events/Eventos” na Navbar, o usuário abrirá a página de Events. Dentro dela, encontrará a apresentação da oferta e os botões para falar no WhatsApp.