## Objetivo
Reescrever a seção "O QUE ELE FAZ" do **Sensory AI** com copy de verdade, editorial e vendável, não uma lista de funções técnicas. Hoje ela lista tarefas; a nova versão nomeia o resultado profissional de cada capacidade.

## Nova copy (PT)

**O QUE ELE FAZ**

- **Traduz percepção em palavra técnica.** Descrições sensoriais precisas, com vocabulário padronizado, prontas para rótulo, ficha técnica ou apresentação.
- **Constrói cartas de chá que vendem.** Curadoria completa para restaurantes, hotéis e casas de chá, com descrição comercial de cada item.
- **Cria harmonizações e drinks autorais.** Combinações com alimentos e coquetelaria por afinidade aromática, com justificativa sensorial que sustenta o preço.
- **Escreve o seu discurso de venda.** Textos promocionais, storytelling de produto e propostas comerciais que comunicam valor em vez de listar ingredientes.
- **Estrutura experiências, mini eventos e workshops.** Do roteiro sensorial à sequência de degustação, com o conteúdo que sustenta a experiência.
- **Prepara aulas e conteúdos especializados.** Roteiros, materiais e explicações técnicas sobre chá com clareza didática.

Fechamento (mantido): "O Sensory AI transforma percepção em linguagem, e linguagem em valor profissional."

Se você preferir a versão enxuta, sem os títulos em negrito, eu aplico só a primeira frase de cada item.

## Traduções
Mesma estrutura e mesmo tom em EN e ES, mantendo termos de IA em inglês.

## Detalhes técnicos
- Arquivo: `src/pages/NeuralSystemPage.tsx`, objeto `translations`, chave `agents.items[0].capabilities` nos blocos `pt`, `en`, `es`.
- A lista já é renderizada por `map`, suporta 6 itens sem mudança de layout.
- Renderizar `**negrito**` como `<strong>` nos itens da lista (mesmo padrão já usado na página de Programas).
- Verificar `src/pages/HotmartNeuralSystem.tsx`: se a mesma lista existir lá, sincronizar para evitar divergência.
