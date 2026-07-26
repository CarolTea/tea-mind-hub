## 1. Remover todos os travessões

Nas páginas do Neural System (`src/pages/NeuralSystemPage.tsx` e `src/pages/HotmartNeuralSystem.tsx`), substituir os travessões (—) por vírgulas, nos três idiomas. Ocorrências: as três frases de `intro` (hero) e as frases de `closing` dos três agentes em PT, EN e ES.

Exemplos:
- "Três agentes especializados, sensorial, produto e negócio, projetados para..."
- "O Sensory AI transforma percepção em linguagem, e linguagem em valor profissional."

## 2. Nova copy do Blend AI (O QUE ELE FAZ)

Mesmo padrão editorial do Sensory AI (frase em negrito + complemento), incorporando montagem de ambiente de preparo, técnicas e utensílios, e testes de qualidade/durabilidade:

- **Cria blends autorais com equilíbrio técnico.** Formulação de receitas com proporções calculadas, camadas aromáticas e assinatura própria, do primeiro rascunho à versão final.
- **Ajusta proporções e corrige o perfil sensorial.** Diagnóstico do que está desequilibrado na mistura e o caminho técnico para acertar corpo, aroma e persistência.
- **Sugere combinações por afinidade aromática.** Bases, ervas, especiarias, frutas e flores compatíveis, com a justificativa sensorial de cada escolha.
- **Orienta diluição, fixação e estabilidade de aromas.** Como manter o perfil íntegro ao longo do tempo, do envase ao consumo.
- **Estrutura o seu ambiente de preparo.** Montagem do espaço de blendagem, fluxo de trabalho, técnicas de manipulação e utensílios adequados a cada escala de produção.
- **Conduz testes de qualidade e durabilidade.** Protocolos de prova, controle de lote, avaliação de shelf life e registro dos resultados.
- **Apoia a conformidade para comercialização.** Orientação sobre normas da Anvisa, rotulagem e requisitos para colocar o produto no mercado.

Traduções equivalentes em EN e ES, com o mesmo destaque em negrito.

## Detalhes técnicos

- `src/pages/NeuralSystemPage.tsx`: atualizar `capabilities` do agente 02 nos blocos pt, en e es; limpar travessões em `intro` e `closing`.
- `src/pages/HotmartNeuralSystem.tsx`: aplicar a mesma lista (PT) e remover travessões, mantendo as páginas sincronizadas.
- A renderização já suporta `**negrito**`, sem mudanças de componente.
