## Atualização dos Programas de Aprimoramento

Vou aplicar três mudanças nos arquivos de tradução, em PT/EN/ES, mantendo todos os IDs existentes (anchors da Navbar e Home continuam funcionando).

### 1. Reordenação dentro de "Programas de Aprimoramento"

Nova ordem (em `src/lib/programs-translations.ts` e `src/lib/translations.ts`, categoria `aprimoramento`):

1. Especialização em **Eventos com Chá** (id: `eventos`)
2. Especialização em **Harmonização com Chás** (id: `harmonizacao`) — **copy reescrita**
3. Especialização em **Neurogastronomia de Chás e Ervas** (id: `neurogastronomia`) — **copy reescrita conforme PDF**

Aplica-se à Navbar (submenu desktop + accordion mobile), aos cards da Home (`Programs.tsx`) e à `ProgramsPage`.

### 2. Harmonização com Chás — nova copy (PT/EN/ES)

**PT** (referência; EN/ES traduzidos com mesmo conteúdo):

- **subtitle**: "Especialização"
- **mainDescription**: "Especialização para profissionais que desejam dominar a harmonização entre chás e alimentos, criando experiências gastronômicas sensoriais, sofisticadas e tecnicamente consistentes."
- **bodyText** (2 parágrafos):
  - "A harmonização com chás é uma das competências mais relevantes para quem atua com hospitalidade, gastronomia, eventos, consultorias, experiências premium e curadoria sensorial. Nesta especialização, o aluno aprofunda critérios técnicos, culturais e sensoriais para criar combinações com lógica, beleza e diferenciação real."
  - "Um dos diferenciais do nosso programa é a técnica HARCOR, desenvolvida pela professora Carol Tavares, que amplia o olhar tradicional da harmonização para além da semelhança e do contraste. A partir dela, o aluno aprende a construir harmonizações mais profundas, considerando textura, estrutura, intensidade, contexto sensorial e narrativa da experiência."
- **forWhoItems**:
  - "Deseja se especializar em harmonização entre chás, alimentos e bebidas"
  - "Atua ou pretende atuar em hospitalidade, restaurantes, hotéis, consultorias, eventos ou experiências gastronômicas"
  - "Quer ampliar repertório técnico e criar combinações com critério profissional"
  - "Busca diferenciar sua atuação com uma camada sensorial mais sofisticada"
  - "Deseja aplicar o chá em experiências com queijos, chocolates, vinhos, jantares e menus harmonizados"
- **includesItems**:
  - "Aulas aplicadas à harmonização entre chás e alimentos"
  - "Técnica HARCOR de harmonização desenvolvida pela professora Carol Tavares"
  - "Critérios técnicos, sensoriais, culturais e gastronômicos"
  - "Estudos de caso e exercícios práticos"
  - "Aula prática de jantar harmonizado com chás"
  - "Aula prática de harmonização com queijos"
  - "Aula prática de harmonização com chocolates"
  - "Aula prática de harmonização com vinhos"
  - "Certificação de especialização"
- **directionTitle**: "Como funciona"
- **directionText**: "Nesta especialização sensorial o objetivo é que o aluno saia com mais segurança, repertório técnico e método para criar harmonizações coerentes, memoráveis e estrategicamente pensadas."
- **shortDescription** (card da Home): "Domine a harmonização entre chás, alimentos e bebidas com a técnica HARCOR, criando experiências gastronômicas sofisticadas."

EN/ES espelham o conteúdo (HARCOR mantido como nome técnico).

### 3. Neurogastronomia de Chás e Ervas — nova copy (com base no PDF)

**PT** (referência; EN/ES traduzidos):

- **subtitle**: "Especialização"
- **mainDescription**: "1ª Especialização em Neurogastronomia de Chás e Ervas da América Latina, criada para profissionais que desejam unir ciência, sensorialidade e aplicação prática real no mercado de chás e ervas."
- **bodyText** (2 parágrafos):
  - "Compreenda como sabor, aroma, contexto, percepção e emoção se articulam na experiência com chás e ervas, e transforme esse conhecimento em repertório prático para sua atuação profissional. A formação amplia sua leitura sobre como experiências sensoriais são construídas no cérebro humano, a partir do Método SENSO criado por Raquel Magalhães."
  - "Uma abordagem integrada que une áreas que normalmente não se conversam no mercado do chá: Neurociência, Fitoquímica, Chás e Ervas, Sensorialidade, Emoção e Design de Experiência. Conteúdo estruturado sobre base científica para que você descubra como comunicar melhor, fechar mais contratos e aumentar suas vendas."
- **forWhoItems**:
  - "Sommeliers de Chá, Tea Blenders e Tea Baristas"
  - "Empreendedores e marcas do universo do chá"
  - "Profissionais de eventos, consultorias e experiências"
  - "Profissionais da gastronomia e do bem-estar integrativo"
  - "Estudiosos e apaixonados pelo universo do chá"
- **includesItems**:
  - "8 aulas gravadas no Método SENSO, criado por Raquel Magalhães"
  - "Aula 0 de nivelamento em chás para quem ainda não é profissional do chá"
  - "Encontros ao vivo de perguntas e respostas"
  - "30 dias de acesso à IA proprietária da Especialização (bônus da 2ª turma)"
  - "Acesso às gravações por 12 meses"
  - "Material de apoio em PDF e exercícios"
  - "30 horas de conteúdo entre aulas, nivelamento e materiais complementares"
  - "Certificado digital como Especialista em Neurogastronomia de Chás e Ervas"
- **directionTitle**: "Estrutura do programa"
- **directionText** (lista das 8 aulas em texto corrido): "Aula 1, Fundamentos da Análise Sensorial. Aula 2, Fundamentos da Neurogastronomia. Aula 3, Os 5 Sentidos e a Neurogastronomia. Aula 4, Comportamento Alimentar. Aula 5, Fitoquímica Sensorial. Aula 6, Camellia sinensis no contexto da Neurogastronomia. Aula 7, Harmonização com base na Neurogastronomia. Aula 8, Design Sensorial e Posicionamento Profissional. Conduzida por Raquel Magalhães (criadora do Método SENSO, professora convidada do Le Cordon Bleu Rio de Janeiro), Carol Tavares e Carla Vicente."
- **shortDescription** (card da Home): "1ª Especialização em Neurogastronomia de Chás e Ervas da América Latina. 8 aulas no Método SENSO, 30 horas, com Raquel Magalhães."

EN/ES espelham o conteúdo (Método SENSO e nomes próprios mantidos).

### Arquivos a editar

- `src/lib/programs-translations.ts` — reordenar `aprimoramento.programs` nos 3 idiomas + reescrever `harmonizacao` e `neurogastronomia`.
- `src/lib/translations.ts` — reordenar `programs.categories[aprimoramento].items` nos 3 idiomas + atualizar `shortDescription`/descrição curta dos dois programas para refletir a nova copy nos cards da Home.

### O que NÃO muda

- IDs (`eventos`, `harmonizacao`, `neurogastronomia`) — anchors da Navbar e da Home continuam válidos.
- Estrutura visual de `Programs.tsx` e `ProgramsPage.tsx` (sem alterações de componente).
- Demais categorias (Profissionalizantes, Aceleração) e demais páginas.
