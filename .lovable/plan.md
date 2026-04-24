
# Renomear "Contato" para "Eventos" → WhatsApp

## Visão Geral

Substituir o item de menu "Contato" por **"Eventos"** na Navbar e no Footer. O link abrirá o WhatsApp (+55 21 98112-6981) com uma mensagem pré-preenchida em português, falando sobre eventos personalizados, corporativos e temáticos. A copy aparecerá também numa pequena seção dentro do Footer (rodapé) para dar contexto visível antes do clique.

## Arquivos Alterados

### 1. `src/lib/translations.ts`

Renomear a chave de label de menu (`nav.contact`) para "Eventos" / "Events" / "Eventos" nos três idiomas:

- **PT**: `contact: "Eventos"`
- **EN**: `contact: "Events"`
- **ES**: `contact: "Eventos"`

Adicionar um novo bloco `events` dentro de `footer` (ou seção própria) com a copy curta para o rodapé:

- **PT**: 
  - Título: "Eventos com Chá"
  - Texto: "Eventos personalizados, corporativos e temáticos com curadoria sensorial e narrativa autoral. Da concepção à experiência final, criamos encontros que transformam o chá em linguagem de marca, conexão e memória."
  - CTA: "Falar no WhatsApp →"
- **EN**:
  - Título: "Tea Events"
  - Texto: "Personalized, corporate and themed events with sensory curation and signature narrative. From concept to execution, we craft gatherings that turn tea into a language of brand, connection and memory."
  - CTA: "Chat on WhatsApp →"
- **ES**:
  - Título: "Eventos con Té"
  - Texto: "Eventos personalizados, corporativos y temáticos con curaduría sensorial y narrativa de autor. De la concepción a la experiencia final, creamos encuentros que transforman el té en lenguaje de marca, conexión y memoria."
  - CTA: "Hablar por WhatsApp →"

### 2. `src/components/Navbar.tsx`

- Trocar o link `{ label: t.nav.contact, href: "#footer" }` por um link externo para WhatsApp:
  ```ts
  { label: t.nav.contact, href: "https://wa.me/5521981126981?text=...", external: true }
  ```
- Mensagem pré-preenchida (PT, EN, ES conforme `lang`):
  - PT: "Olá! Gostaria de saber mais sobre os eventos personalizados, corporativos e temáticos da Tea Mind."
  - EN: "Hi! I'd like to know more about Tea Mind's personalized, corporate and themed events."
  - ES: "¡Hola! Me gustaría saber más sobre los eventos personalizados, corporativos y temáticos de Tea Mind."
- Renderizar como `<a target="_blank" rel="noopener noreferrer">` (desktop e mobile).

### 3. `src/components/Footer.tsx`

- Substituir o link "Contato" do array `navLinks` por um link WhatsApp (mesma URL com mensagem pré-preenchida).
- Adicionar uma faixa nova **acima da grid de 4 colunas**, com fundo levemente diferenciado (border-top em accent), contendo:
  - Eyebrow "01 — Eventos" em serif/dourado
  - Título da seção (`t.footer.events.title`)
  - Texto curto (`t.footer.events.text`)
  - Botão CTA dourado linkando para o WhatsApp (`t.footer.events.cta`)
- Layout: `grid md:grid-cols-2 gap-8 items-center` para que título/texto fiquem à esquerda e o CTA à direita, mantendo o ar editorial do site.

## Notas Técnicas

- **Número WhatsApp**: `+55 21 98112-6981` → URL `https://wa.me/5521981126981`
- **Mensagem pré-preenchida**: codificada via `encodeURIComponent` no momento de montar a URL.
- O item de menu continua usando a chave `nav.contact` por trás (sem refator de chaves), apenas o **valor** muda para "Eventos". Isso minimiza diff e mantém a estabilidade do código.
- Não cria nova rota nem nova página — clique sai direto para o WhatsApp.
- Mantém o `id="footer"` no rodapé (outras âncoras do app ainda funcionam).
