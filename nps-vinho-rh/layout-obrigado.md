# Layout — Página de Obrigado (nps-obrigado.html)

---

## Visão Geral

Página única, sem scroll em desktop, com scroll natural em mobile quando necessário.
Design escuro, premium, minimalista. Foco total na gratidão + CTA de aplicação para o palco.

**Fontes:** Fraunces (display, heading, CTA italic) + Outfit (body, eyebrow, button)
**Paleta:** wine-deeper #0d0303 · wine-dark #200808 · wine #4a1010 · gold #c8a857 · white #ffffff

---

## REGRA FUNDAMENTAL DE CSS

Esta página usa APENAS layout de bloco (block flow). ZERO flex ou grid no body ou no container principal.

- `body` → block, `min-height: 100dvh`, `padding` generoso, SEM display flex/grid
- `.page-wrap` → block, `max-width: 560px`, `margin: 0 auto`
- Todos os filhos diretos → elementos de bloco normais, fluem de cima pra baixo
- O centramento horizontal é feito APENAS por `margin: 0 auto` no `.page-wrap`
- ZERO `align-items`, ZERO `justify-content`, ZERO `flex-direction`

**Por quê:** `display: flex` + `align-items: center` no body causa shrink-wrap nos filhos no iOS Safari. `margin: auto` em flex com `flex-direction: column` resolve para largura intrínseca quando não há `align-items` explícito. Block flow com `margin: 0 auto` é universalmente confiável.

---

## REGRA FUNDAMENTAL DE PREFERS-REDUCED-MOTION

O bloco `@media (prefers-reduced-motion: reduce)` NÃO deve aplicar `width` a NENHUM elemento de texto.
Somente `.gold-line` recebe `width: 64px` nesse contexto. Todos os outros elementos recebem apenas `opacity: 1`, `transform: none`, `animation: none`.

**Por quê:** iPhone com "Reduzir Movimento" ativado (Configurações → Acessibilidade → Movimento) aplica este media query. Se `width: 80px !important` estiver num seletor agrupado com `.texto`, o parágrafo fica com 80px de largura, quebrando palavra por palavra.

---

## Seção Única: Obrigado

### Arquétipo e Constraints
- **Arquétipo:** Contained Center — container estreito centralizado, margens generosas dos dois lados
- **Constraints:**
  - Noise Texture — textura granulada sutil `position: fixed` sobre o fundo
  - Fade Up Stagger — cada elemento entra com delay sequencial (JS, não CSS animation)
  - Selective Color — apenas o gold destaca, tudo mais é branco/transparente sobre fundo escuro
  - Dark Mode — fundo wine-dark, texto branco

### Conteúdo (texto exato)
```
[linha gold decorativa]

VINHO COM RH

{Nome}, obrigado pelo seu feedback!
(sem nome: "Obrigado pelo seu feedback!")

Sua avaliação chegou. Cada detalhe que você compartilhou
será levado em conta para tornar a próxima edição
ainda mais especial. Até breve.

[divisor vertical gold 1px]

Gostaria de ser painelista ou palestrante no próximo evento?

[botão] Faça sua aplicação
```

---

### HTML Estrutura

```html
<body>
  <!-- ruído: position: fixed, inset: 0, SVG fractalNoise, pointer-events: none -->
  <div class="page-wrap">
    <div class="gold-line" id="goldLine"></div>
    <span class="eyebrow" id="eyebrow">Vinho com RH</span>
    <h1 class="headline" id="headline">
      Obrigado pelo seu <span class="gold">feedback!</span>
    </h1>
    <p class="texto" id="texto">…</p>
    <div class="divisor" id="divisor"></div>
    <div class="cta" id="cta">
      <p class="cta-texto">Gostaria de ser painelista ou palestrante no próximo evento?</p>
      <a href="https://vinho-rh.netlify.app/" class="cta-btn">Faça sua aplicação</a>
    </div>
  </div>
</body>
```

---

### Layout

**body:**
```
display: block (default — sem flex, sem grid)
min-height: 100dvh
padding: clamp(3.5rem, 10vw, 6rem) clamp(1.5rem, 5vw, 3rem)
  → mobile 390px: 56px top/bottom, 24px left/right → content width = 342px ✓
  → desktop 1200px: 6rem top/bottom, 3rem left/right
position: relative
background: radial-gradient(ellipse at 30% 65%, #4a1010 0%, #200808 45%, #0d0303 100%)
```

**body::before (noise):**
```
position: fixed
inset: 0
background-image: SVG fractalNoise 512×512
background-size: 256px 256px
opacity: 0.045
pointer-events: none
mix-blend-mode: overlay
z-index: 0
```

**.page-wrap:**
```
display: block
max-width: 560px
margin: 0 auto
text-align: center
position: relative
z-index: 1
```

---

### Linha Gold (.gold-line)

```
width: 0 (inicial, animado por JS → 64px)
height: 1.5px
background: #c8a857
margin: 0 auto 2.5rem
display: block
opacity: 0 (inicial)
```

**Animação (JS):**
- opacity: 0 → 1, 400ms ease, delay: 0ms
- width: 0 → 64px, 700ms ease-out, delay: 0ms

---

### Eyebrow (.eyebrow)

```
display: block (não inline-flex — evita comportamento de shrink-wrap)
font-family: Outfit, sans-serif
font-size: 0.7rem
font-weight: 600
letter-spacing: 0.18em (mobile) / 0.28em (desktop ≥ 640px)
text-transform: uppercase
color: #c8a857
margin-bottom: 1.75rem
opacity: 0 (inicial, animado por JS → 1)
transform: translateY(12px) (inicial)
white-space: nowrap
```

**Animação (JS):** opacity 0→1 + translateY(12→0), 600ms cubic-bezier(0.16,1,0.3,1), delay 300ms

**Nota:** Sem `::before` e `::after` com linhas decorativas — elas aumentam a largura e causam quebra de linha no mobile. O espaçamento de letras já cria o ritmo visual suficiente.

---

### Headline (.headline)

```
font-family: Fraunces, serif
font-size: clamp(2rem, 7vw, 3.5rem)
  → mobile 390px: clamp → 2rem = 32px
  → desktop 1200px: 7vw = 84px, máximo 3.5rem = 56px → 56px
font-weight: 700
font-optical-sizing: auto
color: #ffffff
line-height: 1.1
letter-spacing: -0.02em
margin-bottom: 1.5rem
opacity: 0 (inicial)
transform: translateY(16px) (inicial)
```

**.headline .gold:**
```
color: #c8a857
```

**Animação (JS):** opacity 0→1 + translateY(16→0), 700ms cubic-bezier(0.16,1,0.3,1), delay 500ms

---

### Parágrafo (.texto)

```
font-family: Outfit, sans-serif
font-size: clamp(0.95rem, 3vw, 1.05rem)
  → mobile 390px: 3vw = 11.7px → mínimo 0.95rem = 15.2px → 15.2px
  → desktop 800px: 3vw = 24px → máximo 1.05rem = 16.8px → 16.8px
font-weight: 300
color: rgba(255, 255, 255, 0.62)
line-height: 1.85
margin: 0 auto
  → block element dentro de .page-wrap (block) → largura = 100% do .page-wrap = 342px mobile ✓
opacity: 0 (inicial)
transform: translateY(12px) (inicial)
```

**Nota crítica:** SEM `max-width` no `.texto`. O `.page-wrap` já limita a largura com `max-width: 560px`. Adicionar `max-width` no filho com `margin: auto` num container block já limitado é redundante e pode causar problemas de cálculo em alguns browsers.

**Animação (JS):** opacity 0→1 + translateY(12→0), 600ms cubic-bezier(0.16,1,0.3,1), delay 700ms

---

### Divisor (.divisor)

```
width: 1px
height: 48px
background: rgba(200, 168, 87, 0.3)
margin: 2.25rem auto
display: block
opacity: 0 (inicial)
transform: scaleY(0) (inicial)
transform-origin: top
```

**Animação (JS):** opacity 0→1 + scaleY(0→1), 500ms cubic-bezier(0.16,1,0.3,1), delay 1000ms

---

### CTA (.cta)

```
display: block
opacity: 0 (inicial)
transform: translateY(12px) (inicial)
```

**Animação (JS):** opacity 0→1 + translateY(12→0), 600ms cubic-bezier(0.16,1,0.3,1), delay 1200ms

#### Texto CTA (.cta-texto)

```
font-family: Fraunces, serif
font-size: clamp(1.1rem, 4vw, 1.6rem)
  → mobile 390px: 4vw = 15.6px → mínimo 1.1rem = 17.6px → 17.6px
  → desktop 800px: 4vw = 32px → máximo 1.6rem = 25.6px → 25.6px
font-weight: 300
font-style: italic
font-optical-sizing: auto
color: rgba(255, 255, 255, 0.9)
line-height: 1.45
margin-bottom: 1.5rem
```

#### Botão CTA (.cta-btn)

```
display: inline-block
font-family: Outfit, sans-serif
font-size: 0.78rem
font-weight: 600
letter-spacing: 0.2em
text-transform: uppercase
color: #c8a857
text-decoration: none
border: 1px solid rgba(200, 168, 87, 0.4)
border-radius: 3px
padding: 0.75rem 1.75rem
transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s cubic-bezier(0.16,1,0.3,1)
```

**Hover:**
```
background: rgba(200, 168, 87, 0.1)
border-color: #c8a857
transform: translateY(-2px)
```

---

### Tipografia — Responsividade

```
Mobile (< 640px):
  .eyebrow: letter-spacing: 0.18em, white-space: nowrap
  (sem outras mudanças — clamp() já lida com font-sizes)

Desktop (≥ 640px):
  .eyebrow: letter-spacing: 0.28em
```

---

### Prefers-Reduced-Motion

```css
@media (prefers-reduced-motion: reduce) {
  /* CRÍTICO: .texto, .headline, etc. NÃO recebem width aqui */
  .eyebrow, .headline, .texto, .divisor, .cta {
    opacity: 1 !important;
    transform: none !important;
  }
  /* Apenas gold-line recebe width */
  .gold-line {
    opacity: 1 !important;
    transform: none !important;
    width: 64px !important;
  }
}
```

---

### JavaScript

Stagger reveal puro via `setTimeout` + `el.style.transition` + `el.style.opacity/transform`.
SEM Web Animations API, SEM requestAnimationFrame, SEM GSAP.

Sequência:
1. goldLine: width 0→64px + opacity 0→1, 700ms ease-out, delay 0ms
2. eyebrow: opacity+translateY, 600ms, delay 300ms
3. headline: opacity+translateY, 700ms, delay 500ms
4. texto: opacity+translateY, 600ms, delay 700ms
5. divisor: opacity+scaleY, 500ms, delay 1000ms
6. cta: opacity+translateY, 600ms, delay 1200ms

Personalização com nome via URLSearchParams:
```js
const nome = new URLSearchParams(location.search).get('nome');
if (nome) {
  document.querySelector('.headline').innerHTML =
    `<span class="gold">${nome}</span>, obrigado pelo seu <span class="gold">feedback!</span>`;
}
```

---

### Background

Body tem `min-height: 100dvh` com o radial-gradient. O noise é `position: fixed` com `inset: 0` cobrindo toda a viewport sempre, mesmo com scroll.

---

### Checklist de Confiabilidade Mobile

- [ ] `body` sem `display: flex/grid` → block flow nativo
- [ ] `.page-wrap` com `margin: 0 auto` → centra horizontalmente em qualquer largura
- [ ] `.texto` sem `max-width` ou `margin: auto` → preenche 100% do `.page-wrap`
- [ ] `.eyebrow` com `display: block` (não inline-flex) → sem shrink-wrap
- [ ] `white-space: nowrap` no eyebrow mobile
- [ ] `prefers-reduced-motion` sem `width` em elementos de texto
- [ ] `min-height: 100dvh` (não vh) → resolve barra de endereço do Safari
- [ ] Sem `overflow: hidden` em qualquer elemento pai → scroll liberado
