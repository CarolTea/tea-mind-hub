

# Remover Fundo Branco da Logo via CSS

## Problema
A imagem da logo (PNG) possui fundo branco embutido no arquivo. Mesmo com varias tentativas de substituicao, o fundo branco persiste porque esta na propria imagem.

## Solucao
Usar a propriedade CSS `mix-blend-mode: multiply` na tag `<img>` da logo. Essa tecnica torna pixels brancos invisíveis, fazendo o logo se integrar perfeitamente com qualquer fundo (escuro ou claro).

## Arquivos Modificados

### 1. `src/components/Navbar.tsx`
- Adicionar `mix-blend-mode: multiply` na classe da imagem do logo
- Mudar de `className="h-14 w-auto"` para `className="h-14 w-auto mix-blend-multiply"`

### 2. `src/components/Footer.tsx`
- Adicionar `mix-blend-mode: multiply` na classe da imagem do logo
- Mudar de `className="h-16 w-auto mb-6"` para `className="h-16 w-auto mb-6 mix-blend-multiply"`

## Como funciona
O `mix-blend-mode: multiply` faz com que pixels brancos (255,255,255) se tornem transparentes ao se misturar com o fundo. As cores do logo (verde e dourado) permanecem intactas. Funciona em todos os navegadores modernos.

## Resultado esperado
- Logo no navbar: sem fundo branco, integrada com o hero escuro
- Logo no footer: sem fundo branco, integrada com o fundo escuro do footer
- Sem necessidade de editar o arquivo de imagem

