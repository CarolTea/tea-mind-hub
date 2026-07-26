## Objetivo

Na seção "O QUE ELE FAZ" do agente **Sensory AI**, incluir um novo primeiro item sobre identificação de chás por foto, mantendo o mesmo padrão editorial (frase em negrito + complemento).

## Copy proposta

- PT: **Identifica chás por foto.** Envie uma imagem da folha seca, da infusão ou do líquor e receba tipo, provável origem, grau de oxidação e leitura sensorial do que está na xícara.
- EN: **Identifies teas from a photo.** Send an image of the dry leaf, the infusion or the liquor and get type, likely origin, oxidation level and a sensory reading of what is in the cup.
- ES: **Identifica tés por foto.** Envía una imagen de la hoja seca, la infusión o el licor y recibe tipo, probable origen, grado de oxidación y una lectura sensorial de lo que hay en la taza.

O item entra como **primeiro** da lista, antes de "Traduz percepção em palavra técnica".

## Detalhes técnicos

- `src/pages/NeuralSystemPage.tsx`: adicionar o item no array `capabilities` do agente 01 (Sensory AI) nos três blocos de idioma (pt, en, es).
- `src/pages/HotmartNeuralSystem.tsx`: aplicar a mesma inclusão nos três idiomas, mantendo as páginas sincronizadas.
- Nenhuma mudança de renderização é necessária: o suporte a `**negrito**` já existe.
