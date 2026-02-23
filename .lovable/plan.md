

# Substituir logos do Navbar e Footer com as imagens transparentes

## O que sera feito

1. **Copiar as duas imagens** enviadas para `src/assets/`:
   - `Tea_Hub_Logo_header_favicon.png` → `src/assets/tea-mind-logo-transparent.png` (substitui a logo atual do navbar)
   - `Tea_Hub_Logo_footer.png` → `src/assets/tea-hub-logo-transparent.png` (substitui a logo atual do footer)

2. **Navbar (`src/components/Navbar.tsx`)**: Garantir que a tag `<img>` NAO tenha `mix-blend-multiply` — a imagem ja vem com fundo transparente.

3. **Footer (`src/components/Footer.tsx`)**: Garantir que a tag `<img>` NAO tenha `mix-blend-multiply`.

## Detalhes tecnicos

- As imagens serao copiadas sobrescrevendo os arquivos existentes em `src/assets/`, mantendo os mesmos nomes de arquivo ja importados nos componentes.
- Nenhuma mudanca de import necessaria — os nomes dos arquivos permanecem iguais.
- Remover qualquer classe `mix-blend-multiply` residual das tags `<img>`.

