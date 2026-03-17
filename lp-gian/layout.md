# Especificação de Layout - LP Gian (Infoprodutos)

**Visão Geral Visual:**
*   **Paleta Principal:** Off-White Premium (`#FAFAF9`), Slate Escuro (`#1C1917`), Verde WhatsApp (`#128C7E`), Accent Gold (`#D4AF37`).
*   **Grid Base:** 12 colunas, max-width 1280px, padding horizontal 5% (mobile/tablet) a 2rem (desktop).
*   **Fontes:** 
    *   Heading: `DM Serif Display` (Elegante, Editorial, Alto Contraste).
    *   Body: `DM Sans` (Limpo, Geométrico, Leitura Fácil).
*   **Vibe:** Sofisticada, limpa, focada em números reais, sem enrolação. Usa glassmorphism sutil, bordas arredondadas e sombras luxuosas.

---

## Seção 1: Hero (Criação de Contexto e Impacto)

### Arquétipo e Constraints
*   **Arquétipo:** Split Assimétrico (60/40) com Overlap e foco tipográfico forte.
*   **Constraints:** Glassmorphism Card (Visual Flutuante), Texto com peso misto (Mix Weights para dar foco nas métricas/ganchos), Abstract Shape (Fundo).
*   **Justificativa:** É a vitrine do produto. O formato assimétrico quebra o padrão engessado do mercado (o clássico "tudo centralizado"), permitindo que a promessa brilhe e o visual lateral passe imediatamente uma sensação de "resultado".

### Conteúdo
**Headline:** O seu funil de vendas preparado para *escalar*.
**Subheadline:** Monto o seu funil em **21 dias** — focado em escalar as vendas do seu **infoproduto para R$ 30 mil/mês**. Sua **copy, páginas, VSL e anúncios** feitos por quem já gerou **mais de R$ 2.5 milhões em vendas online** — sem achismo, apenas o que **funciona no mercado digital**.
**CTA:** Quero criar o meu funil de vendas (com ícone do WhatsApp)
**Visual (Glass Card):** Objetivo e Faturamento / R$ 30.000/mês / Barra de Progresso simulada

### Layout
*   **Desktop:** Flexbox com alinhamento vertical; Grid interno `grid-template-columns: 1.2fr 0.8fr` gap de `6rem`. Altura mínima 90vh (para preencher tela sem usar 100vh cravado).
*   **Mobile:** Flex column-reverse (conteúdo de texto por baixo ou acima, dependendo da prioridade, neste caso: Texto > Visual), padding maior `padding: 4rem 1rem`.

### Tipografia
*   **Headline:** `DM Serif Display`, letter-spacing: `-0.02em`, `clamp(3rem, 6vw, 5rem)`, Line-height `1.05`. Palavra "escalar" em itálico e cor muted (`#57534E`).
*   **Subheadline:** `DM Sans`, `clamp(1.125rem, 1.5vw, 1.25rem)`, fonte `300` com tags `<strong>` em peso `500` (preto sólido).
*   **Botão CTA:** `DM Sans`, `1.125rem`, peso `500`, uppercase, letter-spacing `0.05em`.

### Cores
*   Background: `#FAFAF9`
*   Texto Principal: `#1C1917`
*   Texto Muted: `#57534E`
*   Botão Base: `#128C7E` (Verde Premium)
*   Botão Hover: `#075E54`
*   Sombra do botão: `rgba(18, 140, 126, 0.25)` normal / `0.35` em hover.

### Elementos Visuais
*   Shape difuso no fundo (`#D4AF37` a 12% opacidade na origem fading para 0).
*   Card de Glassmorphism com borda fina branca (`rgba(255, 255, 255, 0.8)`) e blur intenso (20px). Pequena rotação (2deg).

### Animações e Interatividade
*   O hero em si **NÃO usa animação de entrada**. Ele carrega seco para o menor LCP possível.
*   **CTA Hover:** Lift de `-4px` (`translateY`), e aumento da sombra suave. Transição `0.3s cubic-bezier(0.165, 0.84, 0.44, 1)`.

---

## Seção 2: "Exemplos Reais" - Prova de Resultado Rápida

### Arquétipo e Constraints
*   **Arquétipo:** Masonry Look / Broken Grid Editorial.
*   **Constraints:** Color Blocking (Cards intercalando Dark Mode com Light Mode), Hover Lift em Cards, Typographic Hierarchy (>3rem para valores de faturamento).
*   **Justificativa:** Quebra a monotonia. Como trata de dados financeiros pesados, o visual de bloco de construção "Bento" em tamanhos diferenciados causa o gatilho de "vários resultados de várias formas".

### Conteúdo
**Título:** Gian — Copywriter especialista. Com a estratégia certa, qualquer infoproduto vende.
**Subtítulo:** Aqui estão 4 exemplos reais de faturamento consistente na Hotmart e outras plataformas.
**Card 1:** 01 | + R$ 306.000 | Gerados como Co-produtor e Copywriter.
**Card 2:** 02 | Do Zero | Em apenas 4 meses com um funil validado focado em ticket baixo.
**Card 3:** 03 | R$ 302.281 | Perpétuo combinado com Pico de vendas
**Card 4:** 04 | R$ 1.804.309 | Receita líquida total (Hotmart Black)

### Layout
*   Um Grid container dividido em colunas com propriedades de `span`.
*   O Card "Tall" (Card 1) abriga 2 linhas do Grid verticalmente. A seção do meio tem duas caixas verticais. A base hospeda um card horizontal espaçoso (Wide Card).
*   Gap de `2rem` entre os grids. `padding: 3rem` em cada bloco individual.
*   **Mobile:** Troca o grid para Flex-column (um card empilhado sobre o outro).

### Tipografia
*   **Números de faturamento:** `DM Serif Display`, `clamp(2.5rem, 4vw, 4rem)`, line-height extretamente justo `1.1`.
*   **Textos Contextuais:** `DM Sans`, `1.125rem`.

### Cores
*   Seção Background: Branca `#FFFFFF` com uma fina linha decorativa superior.
*   Cards Padrões: Fundo `#FAFAF9` (Off-white).
*   Card High-Contraste (Dark Cards): Fundo `#1C1917`, Tipografia Branca e cinza claro.
*   Valor Premium (como Hotmart Black): Acento dourado `#D4AF37`.

### Animações e Interatividade
*   A cada card, CSS transition básica para elevação: `transform: translateY(-5px) e shadow de leve` no hover, criando uma interface viva.

---

## Seção 3: Para quem é este funil

### Arquétipo e Constraints
*   **Arquétipo:** Split Horizontal (Divisão Limpa e Focada) + Rule of Thirds para posicionar os checklists.
*   **Constraints:** Ícones Customizados / SVG Draw minimalistas, Dark Mode Invertido.
*   **Justificativa:** Transmitir clareza institucional, mudar o clima da página para o tom "escuro" para reter a leitura prolongada e contrastar violentamente com a faixa verde clara do CTA posterior.

### Conteúdo
**Título:** Um funil de vendas é para você, infoprodutor, se...
**Ponto 1:** Já tem um infoproduto validado ou funil rodando, mas quer aumentar a conversão, escalar os resultados e vender com mais lucro.
**Ponto 2:** Tem uma audiência ou ideia validada e precisa de uma estrutura de vendas pronta e profissional para começar a vender seu curso ou mentoria.
**Frase:** Dê o próximo passo rumo ao seu funil de vendas gerando lucro recorrente.
**CTA:** Quero escalar meu infoproduto

### Layout
*   Container Centralizado. Duas colunas em desktop (cada coluna abriga um ponto de benefício).
*   Box central isolado abaixo do Split contendo o texto e CTA.
*   Padding colossal: `120px 0` para criar ar.

### Tipografia
*   **Título Principal:** `DM Serif Display`, Branco, `3.5rem`.
*   **Texto Corrido/Bullet:** `DM Sans`, Cinza claro (`rgba(255,255,255,0.8)`), `1.25rem`, line-height `1.6`.

### Cores
*   Espaço inteiro escuro: Background `#1C1917`.
*   Texto base: `#FAFAF9` / `#A8A29E`.
*   Botão igual ao do Hero (Verde WhatsApp com gradiente).

### Elementos Visuais
*   Sem fotos. Um grande "X" ou checkmark vetorial com opacidade ultra baixa (5%) de fundo (Watermark effect).
*   Listas não são bolinhas, são linhas elegantes (bordas) ou SVGs customizados e minimalistas estilo wireframe.

### Animacoes e Interações
*   `Fade-up` suave nos itens da lista desencadeado apenas quando eles passarem do Threshold (Intersection Observer com GSAP para sequenciamento rápido de +100ms de stagger entre um texto e outro).

---

## Seção 4: "Quem Sou Eu" (Autoridade)

### Arquétipo e Constraints
*   **Arquétipo:** Single Focus (Spotlight Photo Essay) ou Split Diagonal.
*   **Constraints:** Imagem Recortada com Efeito Grain Overlay (Textura analógica editorial), Lista "Staggered", Emblema rotacionado contínuo.
*   **Justificativa:** Transmitir credibilidade e autoridade absoluta sem a estética "guru marqueteiro". Um portrait minimalista + dados técnicos diretos.

### Conteúdo
**Título:** Quem sou eu: Gian - Copywriter especialista.
**Bullet 1:** Mais de R$ 2,5 milhões em vendas com funis construídos.
**Bullet 2:** Hotmart Black.
**Bullet 3:** Já passei de R$ 250 mil faturados em apenas 4 especialistas, começando do zero.
**Bullet 4:** Copywriter AAA pela AWAI, com formações pela Empiricus, Leandro Ladeira e Ícaro de Carvalho.
**Bullet 5:** 5 anos de experiência construindo funis de vendas e lançamentos.
**Promessa:** Não quero te vender cursos ou mentorias. Meu compromisso é simples: entregar um funil pronto, estruturado e capaz de gerar R$ 30 mil/mês ou mais.
**Badge:** Certificado Copywriter AAA

### Layout
*   Grid 50/50. Lado esquerdo: Uma grande moldura fotográfica simulando revelação em câmara escura (ou layout de encarte).
*   Lado Direito: Os dados estruturados não como bulleys padrão, mas como parágrafos justificados com números soltos na lateral (estilo linha do tempo).

### Tipografia
*   Usa as mesmas proporções. O selo rotacionado e em "loop" de leitura usando fonte corpo (`DM Sans`) all-caps.
*   O fecho de compromisso em itálico usando `DM Sans` (`font-size: 1.5rem`).

### Cores
*   Background: Cinza ultra-claro para descanso de olho `#F5F5F4`.
*   Tipografia: `#1C1917`

### Interações Escondidas & Surpresas (Micro-Interactions)
*   **Badge animada:** Um emblema circular CSS ("Copywriter Certificado * Hotmart Black *") ancorado sobre a junção da foto, rodando em loop infinito continuo via `keyframes rotate 20s linear infinite`.
*   O Hover na foto em si gera um leve zoom out em escala e desaturacao sutil (efeito de transição revelatório elegante em grayscale para colorido).

### Responsividade Global
*   O uso sistemático de `clamp()` evitará tamanhos forçados. Abaixo de 768px as sessões passam a preencher `100vw` de forma vertical. 
*   Order reverse via Flexbox na sessão de foto para a imagem subir sob o nome e qualificações. O botão WhatsApp do Hero passa a ganhar `width: 100%`.
