# Layout — NPS Vinho com RH

**Fontes:** Fraunces (opsz, wght variável) + Outfit (300/400/600)
**Paleta:** #5c1a1a (wine) · #1f0808 (wine-dark) · #0d0303 (wine-deeper) · #c8a857 (gold) · #f7f4f1 (bg) · #ffffff (white) · #1a1110 (text) · #6b6456 (muted)
**Ritmo visual:** Dark (hero) → Light (identificação) → Light (NPS) → Dark (avaliações) → Light (perguntas) → Light (submit)

---

## Seção 0: Hero

> Já construído no `index.html`. Documentado aqui para referência de linguagem visual.

### Arquétipo e Constraints
- Arquétipo: **Type Hero** — tipografia como protagonista absoluto
- Constraints: **Noise Texture** (Efeitos Especiais) · **Mixed Weights** (Tipografia — 700 bold + 300 italic em contraste extremo)
- Justificativa: A pergunta do evento é pessoal e emocional. Usar o headline como protagonista tipográfico cria uma chegada íntima, não burocrática.

### Conteúdo
- Eyebrow: `Vinho com RH`
- Headline: `Como foi` (bold, branco) + `sua noite?` (light italic, gold — linha separada)
- Subtítulo: `Sua opinião nos ajuda a elevar cada detalhe da próxima edição. Leva menos de 2 minutos.`

### Layout
- `min-height: 60vh` — não domina a tela, convida ao scroll
- `display: flex; align-items: flex-end` — conteúdo ancorado embaixo, cria gravidade
- `padding: clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 9rem)` — assimétrico intencional (mais fundo que sides)
- Conteúdo alinhado à esquerda, max-width 720px

### Tipografia
- Eyebrow: Outfit 600 · 0.72rem · letter-spacing 0.32em · uppercase · cor gold #c8a857
- Linhas decorativas eyebrow: 1.75rem × 1px · gold opacity 0.55 · via flex gap 0.875rem
- Headline "Como foi": Fraunces 700 · clamp(3.25rem, 10vw, 7.5rem) · line-height 1.0 · letter-spacing -0.025em · branco #ffffff
- Headline "sua noite?": Fraunces 300 italic · mesmo tamanho · letter-spacing -0.02em · gold #c8a857 · display block
- Subtítulo: Outfit 300 · clamp(0.9rem, 2vw, 1.05rem) · line-height 1.7 · rgba(255,255,255,0.55) · max-width 440px

### Cores
- Background: `radial-gradient(ellipse at 30% 65%, #4a1010 0%, #200808 45%, #0d0303 100%)`
- Noise overlay: SVG feTurbulence baseFrequency 0.8 numOctaves 4 · opacity 0.045 · mix-blend-mode overlay

### Animações
- Tipo: fade-up pós-carregamento (NÃO no load imediato — delay 150ms)
- `animation: heroReveal 1s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.15s`
- `@keyframes heroReveal { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }`

---

## Seção 1: Identificação

### Arquétipo e Constraints
- Arquétipo: **Sparse** — elementos bem espaçados, muito respiro, sensação de que é mesmo opcional
- Constraints: **Fade Up** (Movimento — stagger nos dois campos) · **Asymmetric Padding** (Layout — padding esquerdo maior para alinhar com o card do NPS)
- Justificativa: Se a identificação parecer pesada visualmente, o usuário abandona. Sparse elimina fricção: parece uma pergunta de passagem, não um formulário.

### Conteúdo
- Label seção: `Identificação` + tag `(opcional)` em peso diferente
- Descrição: `Não é obrigatório, mas nos ajuda a personalizar o acompanhamento.`
- Campo 1: label `Nome` · placeholder `Seu nome`
- Campo 2: label `Empresa` · placeholder `Sua empresa`

### Layout
- Background: #f7f4f1
- `padding: clamp(3rem, 7vw, 5rem) clamp(1.5rem, 6vw, 9rem)`
- Sem card, sem border — campos flutuam diretamente no background
- Container: max-width 680px (alinha com o card NPS)
- Header da seção: margin-bottom 2.5rem
- Grid de campos: `display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem`
- Mobile (< 600px): `grid-template-columns: 1fr`

### Tipografia
- Label seção: Outfit 600 · 0.72rem · uppercase · letter-spacing 0.25em · cor #5c1a1a (wine)
- Tag "(opcional)": Outfit 300 · 0.72rem · lowercase · letter-spacing normal · cor #6b6456 · margin-left 0.5rem
- Descrição: Outfit 300 · 0.88rem · cor rgba(107, 100, 86, 0.85) · line-height 1.6 · margin-top 0.3rem
- Label campo: Outfit 600 · 0.8rem · letter-spacing 0.08em · uppercase · cor #1a1110 · margin-bottom 0.5rem
- Input texto: Outfit 400 · 1rem · cor #1a1110
- Placeholder: Outfit 300 · 1rem · cor rgba(107, 100, 86, 0.5)

### Elementos Visuais — Campos Bottom-Border Only
- Background campo: transparent
- Border: nenhuma exceto `border-bottom: 1.5px solid rgba(0,0,0,0.12)`
- Border-radius: 0
- Padding: `0.75rem 0`
- **Sem box, sem border lateral** — minimalista absoluto

### Animações
- Entrada: IntersectionObserver threshold 0.2
- Campo "Nome": `fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) delay 0ms`
- Campo "Empresa": `fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) delay 120ms`
- `@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`

### Interatividade
- **Focus state dos campos:**
  - `border-bottom-color` transiciona de rgba(0,0,0,0.12) para #5c1a1a (wine) em 250ms
  - Pseudo-elemento `::after` anima a linha: `clip-path: inset(0 100% 0 0)` → `clip-path: inset(0 0% 0 0)` em 350ms ease-out
  - Leve glow abaixo: `box-shadow: 0 4px 12px rgba(92, 26, 26, 0.1)` em 250ms
- Cursor: text (padrão)

### Responsividade
- < 600px: grid 1 coluna, campos empilhados
- < 600px: padding lateral reduzido para 1.5rem

---

## Seção 2: NPS 0-10

> Já construído no `index.html`. Documentado aqui para referência completa.

### Arquétipo e Constraints
- Arquétipo: **Isolated Element** — card central com muito espaço negativo ao redor
- Constraints: **Color Blocking** (3 zonas cromáticas para detratores/neutros/promotores) · **Hover Lift** (botões sobem 4px)
- Justificativa: A pergunta mais importante da pesquisa merece estar isolada, sem distração.

### Conteúdo
- Número decorativo: `01`
- Pergunta: `Em uma escala de 0 a 10, o quanto você recomendaria o Vinho com RH para um amigo ou colega profissional?`
- Label esquerdo: `Não recomendaria`
- Label direito: `Com certeza recomendaria`

### Layout
- Background: #f7f4f1
- `padding: clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 9rem)`
- Card: max-width 680px · border-radius 20px · padding clamp(2rem, 5vw, 4rem)
- Card background: #ffffff · border: 1px solid rgba(0,0,0,0.07)
- Card box-shadow: `0 2px 4px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.06)`

### Tipografia
- Número "01": Fraunces 300 · clamp(2.5rem, 6vw, 4rem) · letter-spacing -0.03em · cor rgba(0,0,0,0.07) · margin-bottom 1rem
- Pergunta: Fraunces 300 · clamp(1.15rem, 2.8vw, 1.55rem) · line-height 1.5 · cor #1a1110
- "Vinho com RH" (strong): Fraunces 700 · mesma escala · cor #5c1a1a
- Labels escala: Outfit 300 · 0.75rem · letter-spacing 0.02em · cor #6b6456

### Cores dos Botões (Color Blocking)
- Detratores (0–6): `--z: #c0392b`
- Neutros (7–8): `--z: #d4860a`
- Promotores (9–10): `--z: #1e8449`
- Estado normal: border 1.5px solid #e8e0d8 · cor #bbb · background #ffffff
- Estado hover: border-color var(--z) · cor var(--z) · translateY(-4px) · box-shadow 0 10px 24px rgba(0,0,0,0.1)
- Estado active/selecionado: background var(--z) · border-color var(--z) · cor #fff · translateY(-4px) · box-shadow 0 10px 24px rgba(0,0,0,0.18)
- Transição: `border-color 0.18s ease, background 0.18s ease, color 0.18s ease, transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s cubic-bezier(0.16, 1, 0.3, 1)`

### Animações
- Card: scroll-triggered reveal via IntersectionObserver threshold 0.2
- `opacity: 0; transform: translateY(24px)` → `opacity: 1; transform: translateY(0)` em 700ms cubic-bezier(0.16, 1, 0.3, 1)

### Elemento Encantador — Wave Hover
- Quando o usuário passa o mouse sobre botões NÃO selecionados, um efeito de onda sutil percorre os botões vizinhos
- Implementação: ao hover no botão `n`, botões `n-1` e `n+1` recebem classe `.neighbor` com `transform: translateY(-2px)` e `opacity: 0.7` em 150ms

---

## Seção 3: Avaliações por Categoria

### Arquétipo e Constraints
- Arquétipo: **Scroll Storytelling** — cada linha de avaliação revela progressivamente com stagger ao scrollar
- Constraints: **Glassmorphism** (Efeitos Especiais — card translúcido sobre fundo escuro) · **Stagger Wave** (Movimento — linhas revelam em cascata) · **Hover Glow** (Interação — estrelas brilham no hover)
- Justificativa: Colocar as avaliações em seção dark cria o "bookend" visual com o hero — o usuário sente a narrativa fechar. O glassmorphism no card dá profundidade sem peso.

### Conteúdo
- Título: `Avalie cada momento do evento`
- Subtítulo: `Selecione de 1 a 5 estrelas.`
- Itens: Palestras · Painelistas · Painel (debate) · Vinho · Buffet · Evento com Bruno Bettini

### Layout
- **Background da seção:** mesmo radial-gradient do hero: `radial-gradient(ellipse at 70% 40%, #4a1010 0%, #200808 45%, #0d0303 100%)`
- Noise overlay idêntico ao hero (SVG feTurbulence) · opacity 0.035
- `padding: clamp(4rem, 9vw, 8rem) clamp(1.5rem, 6vw, 9rem)`
- Header da seção: margin-bottom 3rem
- **Card glassmorphism:** max-width 680px · `background: rgba(255,255,255,0.04)` · `backdrop-filter: blur(16px)` · `-webkit-backdrop-filter: blur(16px)` · `border: 1px solid rgba(200, 168, 87, 0.15)` · `border-radius: 20px` · `padding: clamp(2rem, 5vw, 3.5rem)`
- Lista de ratings: `display: flex; flex-direction: column; gap: 0`
- Cada rating row: `display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.06)`
- Último item sem border-bottom

### Tipografia
- Título: Fraunces 700 · clamp(1.75rem, 4vw, 2.5rem) · cor #ffffff · line-height 1.2 · margin-bottom 0.5rem
- Subtítulo: Outfit 300 · 0.9rem · cor rgba(255,255,255,0.5) · letter-spacing 0.03em
- Label categoria: Outfit 600 · 0.95rem · cor rgba(255,255,255,0.9) · flex: 1

### Elementos Visuais — Estrelas
- Estrela inativa: `★` unicode · font-size 1.8rem · cor rgba(255,255,255,0.2) · cursor pointer · user-select none
- Estrela hover: cor #c8a857 · `filter: drop-shadow(0 0 6px rgba(200, 168, 87, 0.6))` · transform scale(1.2)
- Estrela selecionada: cor #c8a857 · `filter: drop-shadow(0 0 8px rgba(200, 168, 87, 0.5))`
- Gap entre estrelas: 0.25rem
- Transição estrela: `color 0.12s ease, transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), filter 0.12s ease`

### Animações
- **Stagger Wave reveal:** Cada rating row revela com IntersectionObserver na seção inteira
  - Row 1 (Palestras): fade-up delay 0ms
  - Row 2 (Painelistas): fade-up delay 80ms
  - Row 3 (Painel): fade-up delay 160ms
  - Row 4 (Vinho): fade-up delay 240ms
  - Row 5 (Buffet): fade-up delay 320ms
  - Row 6 (Bruno Bettini): fade-up delay 400ms
  - Cada: `opacity: 0; transform: translateX(16px)` → `opacity: 1; transform: translateX(0)` em 600ms cubic-bezier(0.16, 1, 0.3, 1)
- Header da seção: fade-up 700ms delay 0ms, separado das rows

### Interatividade
- **Hover nas estrelas:** ao entrar no star N, stars 1..N ficam gold, stars N+1..5 ficam rgba(255,255,255,0.2)
- **mouseleave:** volta ao estado selecionado atual (sem flickering)
- **Click:** confirma seleção com micro-bounce: `transform: scale(1.3)` → `scale(1.0)` em 200ms spring
- **Elemento encantador — 5 estrelas:** quando o usuário seleciona 5 estrelas numa categoria, a linha inteira pulsa uma vez com um sutil gold glow: `box-shadow: 0 0 30px rgba(200, 168, 87, 0.15)` → remove em 800ms fade-out

### Responsividade
- < 600px: label categoria width 100%, estrelas menores (font-size 1.6rem)
- < 600px: rating row flex-direction column, align-items flex-start, gap 0.5rem

---

## Seção 4: Perguntas Abertas

### Arquétipo e Constraints
- Arquétipo: **Split Assimetrico** — número decorativo à esquerda (20%) + textarea à direita (80%)
- Constraints: **Fade Left** (Movimento — elemento entra da direita) · **Focus Glow** (Interação — linha animada no focus)
- Justificativa: O número grande e decorativo à esquerda cria estrutura editorial sem parecer formulário. O split assimétrico dá ritmo visual diferente do card NPS.

### Conteúdo
- Pergunta 1: label `O que mais marcou sua experiência?` · placeholder `Compartilhe o que mais te surpreendeu ou encantou...`
- Pergunta 2: label `O que poderíamos fazer melhor na próxima edição?` · placeholder `Qualquer detalhe conta — ambiente, conteúdo, logística...`

### Layout
- Background: #f7f4f1
- `padding: clamp(4rem, 9vw, 8rem) clamp(1.5rem, 6vw, 9rem)`
- Container: max-width 680px
- Duas perguntas empilhadas: `display: flex; flex-direction: column; gap: 4rem`
- Cada pergunta: `display: grid; grid-template-columns: 80px 1fr; gap: 2rem; align-items: start`
- Mobile (< 600px): grid-template-columns 1fr, número some (display none) ou fica acima
- Textarea: width 100% · background transparent · border: none · border-bottom: 1.5px solid rgba(0,0,0,0.1) · padding: 0.75rem 0 · border-radius: 0 · min-height: 100px · resize: vertical

### Tipografia
- Número decorativo ("01", "02"): Fraunces 300 · clamp(3rem, 7vw, 5rem) · letter-spacing -0.03em · cor rgba(0,0,0,0.06) · line-height 1 · padding-top 0.25rem
- Label pergunta: Fraunces 300 · clamp(1.1rem, 2.5vw, 1.4rem) · line-height 1.45 · cor #1a1110 · margin-bottom 1.25rem
- Textarea texto: Outfit 400 · 1rem · cor #1a1110 · line-height 1.7
- Placeholder: Outfit 300 · 1rem · cor rgba(107, 100, 86, 0.45)

### Elementos Visuais
- **Linha de foco animada:** pseudo-elemento `::after` no wrapper do textarea
  - Estado normal: `content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1.5px; background: #5c1a1a; transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1)`
  - Estado focus (via JS adiciona classe ao wrapper): `width: 100%`
  - O efeito é uma linha vinho que "desenha" da esquerda para direita ao focar

### Animações
- Cada bloco de pergunta revela via IntersectionObserver threshold 0.15
- Pergunta 1: `opacity: 0; transform: translateX(20px)` → `opacity: 1; transform: translateX(0)` 700ms cubic-bezier(0.16, 1, 0.3, 1) delay 0ms
- Pergunta 2: mesmo, delay 150ms
- O número decorativo e o textarea revelam juntos (não há stagger interno)

### Interatividade
- Focus: linha animada + `color: #1a1110` no placeholder some gradualmente
- Blur: linha retrai? Não — mantém se há texto. Retrai apenas se textarea vazio ao blur.
- Textarea: cursor text, sem resize horizontal

### Responsividade
- < 600px: grid 1 coluna, número escondido (display none), label e textarea empilhados
- < 600px: gap entre perguntas reduzido para 2.5rem

---

## Seção 5: Submit / CTA

### Arquétipo e Constraints
- Arquétipo: **Isolated Element** — botão absolutamente solo, cercado por espaço negativo generoso
- Constraints: **Hover Fill** (Interação — linha dourada anima abaixo do botão no hover) · **Container Narrow** (Layout — max-width 400px, centralizado)
- Justificativa: Após seções ricas em conteúdo, a tela "respira" antes da ação final. O botão isolado comunica confiança.

### Conteúdo
- Botão: `Enviar avaliação`
- Microtexto: `Seus dados são utilizados apenas para melhorar o evento.`
- Estado loading: `Enviando...` + spinner inline
- Estado erro: texto de erro abaixo do botão

### Layout
- Background: `linear-gradient(to bottom, #f7f4f1 0%, #ede9e5 100%)` — cria senso de conclusão
- `padding: clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 9rem) clamp(5rem, 10vw, 9rem)`
- Conteúdo: `display: flex; flex-direction: column; align-items: center; text-align: center`
- Botão: max-width 380px · width 100% · `padding: 1.25rem 3rem`
- Wrapper botão: `position: relative; display: inline-block` (para a linha dourada)
- Microtexto: margin-top 1.25rem

### Tipografia
- Botão: Outfit 600 · 0.95rem · uppercase · letter-spacing 0.18em · cor #ffffff
- Botão background: `linear-gradient(135deg, #5c1a1a 0%, #3a0f0f 100%)`
- Botão border-radius: 6px
- Loading "Enviando...": Outfit 400 · 0.95rem · uppercase · letter-spacing 0.18em
- Microtexto: Outfit 300 · 0.78rem · cor rgba(107, 100, 86, 0.7) · letter-spacing 0.02em

### Interatividade — Hover Fill (linha dourada)
- Pseudo-elemento `::after` no wrapper do botão:
  - Estado normal: `content: ''; position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); width: 0; height: 2px; background: #c8a857; transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1)`
  - Estado hover: `width: 100%`
- Botão hover: `transform: scale(1.03)` · `box-shadow: 0 16px 40px rgba(92, 26, 26, 0.35)` · transição 300ms cubic-bezier(0.16, 1, 0.3, 1)
- Botão active (click): `transform: scale(0.99)` · `box-shadow: 0 8px 20px rgba(92, 26, 26, 0.2)` · 100ms ease
- Botão disabled (loading): `opacity: 0.7; cursor: not-allowed; transform: none`

### Animações
- **Loading spinner:** SVG inline 16×16px · `stroke: #ffffff` · `stroke-width: 2` · `stroke-dasharray: 44; stroke-dashoffset: 44` · animação `spin 0.8s linear infinite`
- Spinner aparece à esquerda do texto com `gap: 0.5rem`
- **Erro:** div de erro aparece com `opacity: 0; transform: translateY(8px)` → `opacity: 1; transform: translateY(0)` em 400ms, cor #c0392b · Outfit 400 · 0.88rem

### Responsividade
- Botão: width 100% em telas < 400px
- Padding lateral mínimo 1.5rem

---

## Página: Obrigado (`nps-obrigado.html`)

### Arquétipo e Constraints
- Arquétipo: **Hero Dominante** — fullscreen, tudo centrado, nada compete
- Constraints: **Noise Texture** (Efeitos Especiais — mesmo que o hero) · **Gradiente Radial** (Cor — espelha o hero, cria simetria narrativa) · **Fade Up Stagger** (Movimento — elementos revelam em sequência)
- Justificativa: A página de obrigado espelha o hero, encerrando a narrativa visual. O usuário "voltou" ao ambiente do evento.

### Conteúdo
- Elemento decorativo: linha dourada horizontal animada (Draw SVG / CSS)
- Eyebrow: `Vinho com RH`
- Headline (com nome): `[Nome], obrigado pelo seu feedback!`
- Headline (sem nome): `Obrigado pelo seu feedback!`
- Texto: `Sua avaliação chegou. Cada detalhe que você compartilhou será levado em conta para tornar a próxima edição ainda mais especial. Até breve.`

### Layout
- `min-height: 100vh`
- Background: `radial-gradient(ellipse at 30% 65%, #4a1010 0%, #200808 45%, #0d0303 100%)` (idêntico ao hero)
- Noise overlay: idêntico ao hero (SVG feTurbulence) · opacity 0.045
- `display: flex; align-items: center; justify-content: center`
- `padding: 4rem clamp(1.5rem, 6vw, 9rem)`
- Container central: max-width 620px · text-align center

### Elemento Decorativo — Linha Dourada Animada
- Um `<div class="gold-line">` ou `<svg>` centralizado, acima do eyebrow
- Implementação CSS: `width: 0; height: 1.5px; background: #c8a857; margin: 0 auto 3rem` → anima para `width: 80px` em 800ms ease-out delay 0ms
- Representa a "conclusão" — a linha que fecha o evento

### Tipografia
- Eyebrow: idêntico ao hero (Outfit 600, 0.72rem, uppercase, letter-spacing 0.32em, gold)
- Com linhas laterais idênticas ao hero
- Headline: Fraunces 700 · clamp(2.25rem, 6vw, 4rem) · cor #ffffff · line-height 1.1 · letter-spacing -0.02em
- Nome personalizado: mesma fonte, cor #c8a857 (gold)
- Texto: Outfit 300 · clamp(1rem, 2vw, 1.1rem) · cor rgba(255,255,255,0.65) · line-height 1.8 · max-width 480px · margin 0 auto

### Animações — Stagger
1. Linha dourada: `width: 0 → 80px` em 800ms ease-out · delay 0ms
2. Eyebrow: fade-up 600ms · delay 400ms
3. Headline: fade-up 700ms · delay 600ms
4. Texto: fade-up 600ms · delay 800ms
- Todos via JS com setTimeout (não IntersectionObserver — a página já está no topo)

### JavaScript — Personalização
```js
const nome = new URLSearchParams(location.search).get('nome');
if (nome) {
  const h1 = document.getElementById('obrigado-title');
  // Wrap nome em span gold, resto em branco
  h1.innerHTML = `<span class="gold">${nome}</span>, obrigado pelo seu feedback!`;
}
```

### Responsividade
- < 600px: headline clamp mínimo 2rem · padding 3rem 1.5rem
- Linha dourada: max 60px em telas pequenas

---

## Sistema de Navegação entre Seções (Scroll Progress Indicator)

### Descrição
- Uma linha fina (2px de largura) na borda esquerda da página
- Cor: gold #c8a857, fundo: rgba(200, 168, 87, 0.15)
- `position: fixed; left: 0; top: 0; bottom: 0; width: 2px`
- Elemento fill: `height: 0%` → animado via scroll event para `height: ${scrollPercent}%`
- Visível apenas em viewport ≥ 768px (hidden no mobile)
- Subtil: o usuário pode não notar conscientemente, mas sente o progresso

---

## Resumo de Arquetipos por Seção

| Seção | Arquétipo | Constraints |
|-------|-----------|-------------|
| Hero | Type Hero | Noise Texture · Mixed Weights |
| Identificação | Sparse | Fade Up Stagger · Asymmetric Padding |
| NPS 0-10 | Isolated Element | Color Blocking · Hover Lift |
| Avaliações | Scroll Storytelling | Glassmorphism · Stagger Wave · Hover Glow |
| Perguntas Abertas | Split Assimetrico | Fade Left · Focus Glow |
| Submit | Isolated Element + Container Narrow | Hover Fill · Gradiente Linear |
| Obrigado | Hero Dominante | Noise Texture · Gradiente Radial · Fade Up Stagger |
