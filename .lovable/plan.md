# Cartão de Visitas Digital — Carla Vicente

Criar uma página dedicada, otimizada para mobile, que funciona como cartão de visitas digital e pode ser instalada como app no celular da Carla (PWA simples, apenas para "Adicionar à tela inicial").

## Rota

- `/carla` — página pública do cartão (qualquer pessoa pode ver e compartilhar)

A instalação como app é uma ação manual feita pela própria Carla no navegador do celular ("Adicionar à tela inicial"). Não há autenticação nem restrição — apenas a Carla saberá fazer isso. Visitantes verão o cartão normalmente como uma página web.

## Layout (mobile-first)

```text
┌────────────────────────┐
│   [foto circular]      │
│                        │
│     Carla Vicente      │
│   ─ sommelier de chá ─ │
│                        │
│  ┌──────────────────┐  │
│  │  💬 WhatsApp     │  │  → wa.me/5521988340783
│  └──────────────────┘  │
│  ┌──────────────────┐  │
│  │  🌐 Site         │  │  → /pt
│  └──────────────────┘  │
│                        │
│   [ QR Code 180x180 ]  │  → URL atual da página
│   aponte para salvar   │
│                        │
│  ┌──────────────────┐  │
│  │  ↗ Compartilhar  │  │  → navigator.share / copiar link
│  └──────────────────┘  │
│                        │
│   Tea Mind Business    │
└────────────────────────┘
```

Estética seguindo a identidade do site: fundo off-white `#F5F0E8`, verde escuro `#1A2E1A`, dourado `#C9A84C`, Playfair (título) e Inter (corpo). Sem emojis decorativos — usar ícones do `lucide-react` (MessageCircle, Globe, Share2). Usa vírgulas, sem traços.

## Funcionalidades

1. **Foto** — `src/assets/carla-vicente.png`, recorte circular com borda dourada fina.
2. **Título** — "Carla Vicente" + label "Sommelier de Chá" (uppercase, espaçado).
3. **Botão WhatsApp** — abre `https://wa.me/5521988340783` em nova aba, com mensagem inicial pré-preenchida ("Olá Carla, vim pelo seu cartão digital.").
4. **Botão Site** — link interno para `/pt` (versão portuguesa do site Tea Mind).
5. **QR Code** — gerado client-side apontando para a URL atual (`window.location.href`), de modo que ao escanear abre o mesmo cartão. Usaremos a biblioteca `qrcode` (gera SVG/Canvas, sem dependência de rede).
6. **Compartilhar** — botão usa `navigator.share({ title, text, url })` quando disponível; fallback copia o link para o clipboard e mostra toast (sonner já instalado).

## PWA (instalação leve)

Sem service worker, sem `vite-plugin-pwa`. Apenas o necessário para "Adicionar à tela inicial":

- `public/manifest.webmanifest` com:
  - `name`: "Carla Vicente, Sommelier de Chá"
  - `short_name`: "Carla Vicente"
  - `start_url`: "/carla"
  - `scope`: "/carla"
  - `display`: "standalone"
  - `theme_color`: "#1A2E1A"
  - `background_color`: "#F5F0E8"
  - `icons`: 192x192 e 512x512 (foto da Carla recortada em quadrado com fundo bege)
- Tags `<link rel="manifest">`, `<meta name="theme-color">` e `<link rel="apple-touch-icon">` injetadas dinamicamente pela página `/carla` ao montar (via `useEffect`), para não afetar o resto do site.
- Ícones PWA gerados a partir da foto existente, salvos em `public/carla-icon-192.png` e `public/carla-icon-512.png`.

Isso atende ao requisito: a Carla abre `/carla` no celular, usa "Adicionar à tela inicial" no Safari/Chrome, e o atalho aparece como app standalone com ícone próprio. Ninguém é forçado a instalar.

## Dependências

- `qrcode` (e `@types/qrcode`) — geração local de QR code, ~20KB.

## Arquivos a criar / editar

- `src/pages/CarlaCard.tsx` (novo) — página do cartão.
- `src/App.tsx` — adicionar rota `/carla`.
- `public/manifest.webmanifest` (novo).
- `public/carla-icon-192.png`, `public/carla-icon-512.png` (novos, gerados via script a partir de `src/assets/carla-vicente.png`).

## Notas técnicas

- A página será totalmente client-side; o QR code lê `window.location.href` no `useEffect` para refletir o domínio real (preview, lovable.app ou domínio customizado futuro).
- Layout `min-h-dvh`, `max-w-sm mx-auto`, padding generoso, botões `h-12` para toque confortável.
- Sem alteração no Navbar/Footer globais — a página `/carla` é standalone (sem navbar do site), para parecer um app quando aberta instalada.
