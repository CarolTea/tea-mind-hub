## Objetivo

Incluir a Raquel na página Special Partners (`/pt/parceiras-especiais` e equivalentes em EN/ES), mantendo o mesmo padrão editorial dos outros perfis. A segunda pessoa entra depois, quando você enviar foto e texto.

## O que será feito

1. **Foto**: subir a imagem enviada como asset CDN (`raquel.png`) e referenciá-la no card.
2. **Novo perfil no grid**, posicionado após a Tatiana Cantu (mesma lógica de proximidade temática, sensorial/neurogastronomia). Se preferir outra posição, é só dizer.
3. **Copy nos três idiomas**:
   - Especialidade (PT): `Sommelière de Chá · Nutricionista · Fitoterapia, Ayurveda & Neurogastronomia`
   - Bio em dois parágrafos, seguindo o formato dos demais:
     - Parágrafo 1: professora convidada do Le Cordon Bleu Rio de Janeiro, colunista da revista Casa e Jardim, olhar técnico, sensibilidade e repertório botânico em experiências mais profundas com chás e ervas.
     - Parágrafo 2: criadora do método SENSO para Neurogastronomia; na Tea Mind, professora parceira na 1ª Especialização em Neurogastronomia de Chás & Ervas da América Latina.
   - Versões EN e ES com o mesmo conteúdo, mantendo os termos próprios em português quando forem nomes (Casa e Jardim, método SENSO).

## Detalhes técnicos

- Arquivo: `src/pages/SpecialPartnersPage.tsx` (objeto `copy.pt/en/es.members`).
- Asset: `lovable-assets create` a partir de `/mnt/user-uploads/`, pointer em `src/assets/special-raquel.png.asset.json`, importado como os demais.
- O grid é `md:grid-cols-2`; com 5 perfis o último card fica sozinho na última linha, comportamento aceitável e já responsivo.

## Pendência

Confirme o sobrenome da Raquel para o título do card (nas páginas de programas ela aparece como **Raquel Magalhães**, que usarei por padrão).
