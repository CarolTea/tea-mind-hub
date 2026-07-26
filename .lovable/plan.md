## 1. Remover item do Business AI

Excluir da lista "O QUE ELE FAZ" do Business AI o item **"Lê o mercado e posiciona a sua marca..."**, nos três idiomas (PT, EN, ES), em `src/pages/NeuralSystemPage.tsx` e na versão PT de `src/pages/HotmartNeuralSystem.tsx`. A lista fica com quatro itens.

## 2. Renomear Blend AI para Blender AI

Substituir todas as ocorrências de "Blend AI" por "Blender AI" nas páginas do Neural System e nos planos de preço:

- `src/pages/NeuralSystemPage.tsx` (nome do agente, corpo do texto e frase de fechamento, em pt/en/es)
- `src/pages/HotmartNeuralSystem.tsx` (nome, corpo, fechamento e nome do plano)
- `src/components/NeuralPricing.tsx` ("Tea Mind | Blend AI" nos três idiomas)

Os termos "blends" (o produto) permanecem inalterados; só o nome do agente muda.
