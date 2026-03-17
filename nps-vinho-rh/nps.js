/* ================================================
   NPS VINHO COM RH — Script Principal
   ================================================ */

const SUPABASE_URL = 'https://woebteyuqzndvchruxhw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZWJ0ZXl1cXpuZHZjaHJ1eGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3OTAyMDYsImV4cCI6MjA4NzM2NjIwNn0.N2KgxsYE-NEnM6dz9cjGRKY1WVXoLBW1qpoNTo0oCcs';

document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initNpsScale();
    initStarRatings();
    initRevealAnimations();
    initForm();
});

/* ─────────────────────────────────────────────
   SCROLL PROGRESS — linha gold borda esquerda
───────────────────────────────────────────── */
function initScrollProgress() {
    const fill = document.getElementById('scrollFill');
    if (!fill) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                const total = document.documentElement.scrollHeight - window.innerHeight;
                const pct = total > 0 ? (scrolled / total) * 100 : 0;
                fill.style.height = `${Math.min(pct, 100)}%`;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ─────────────────────────────────────────────
   NPS SCALE — gera botões 0-10 com wave effect
───────────────────────────────────────────── */
function initNpsScale() {
    const container = document.getElementById('nps-scale');
    const hidden = document.getElementById('nps-value');
    if (!container || !hidden) return;

    for (let i = 0; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'nps-btn';
        btn.textContent = i;
        btn.dataset.v = i;
        btn.setAttribute('aria-label', `Nota ${i}`);
        btn.dataset.zone = i <= 6 ? 'detrator' : i <= 8 ? 'neutro' : 'promotor';

        btn.addEventListener('click', () => {
            container.querySelectorAll('.nps-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            hidden.value = i;
        });

        // Wave hover: botões vizinhos ganham classe .neighbor
        btn.addEventListener('mouseenter', () => {
            const allBtns = [...container.querySelectorAll('.nps-btn')];
            const idx = allBtns.indexOf(btn);
            allBtns.forEach((b, j) => {
                b.classList.remove('neighbor');
                if ((j === idx - 1 || j === idx + 1) && !b.classList.contains('active')) {
                    b.classList.add('neighbor');
                }
            });
        });

        btn.addEventListener('mouseleave', () => {
            container.querySelectorAll('.nps-btn').forEach(b => b.classList.remove('neighbor'));
        });

        container.appendChild(btn);
    }
}

/* ─────────────────────────────────────────────
   STAR RATINGS — hover, select, 5-star glow
───────────────────────────────────────────── */
function initStarRatings() {
    document.querySelectorAll('.star-rating').forEach(container => {
        const field = container.dataset.field;
        const hidden = document.querySelector(`input[name="${field}"]`);
        const row = container.closest('.rating-row');

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.textContent = '★';
            star.dataset.value = i;
            star.setAttribute('role', 'button');
            star.setAttribute('tabindex', '0');
            star.setAttribute('aria-label', `${i} estrela${i > 1 ? 's' : ''}`);

            // Hover: preenche até star i
            star.addEventListener('mouseenter', () => {
                const stars = [...container.querySelectorAll('.star')];
                stars.forEach((s, idx) => s.classList.toggle('hover', idx < i));
            });

            star.addEventListener('mouseleave', () => {
                container.querySelectorAll('.star').forEach(s => s.classList.remove('hover'));
            });

            // Click: seleciona nota + micro-bounce + 5-star glow
            star.addEventListener('click', () => selectStar(container, hidden, row, i));

            // Teclado: Enter/Space para selecionar
            star.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectStar(container, hidden, row, i);
                }
            });

            container.appendChild(star);
        }
    });
}

function selectStar(container, hidden, row, value) {
    const stars = [...container.querySelectorAll('.star')];

    stars.forEach((s, idx) => {
        s.classList.toggle('selected', idx < value);
        s.classList.remove('hover');
    });

    // Micro-bounce na estrela clicada
    const clicked = stars[value - 1];
    clicked.classList.remove('bounce');
    void clicked.offsetWidth; // reflow para reiniciar animação
    clicked.classList.add('bounce');
    setTimeout(() => clicked.classList.remove('bounce'), 250);

    hidden.value = value;

    // 5 estrelas: glow na linha
    if (value === 5 && row) {
        row.classList.remove('five-stars');
        void row.offsetWidth;
        row.classList.add('five-stars');
    }
}

/* ─────────────────────────────────────────────
   REVEAL ANIMATIONS — IntersectionObserver
───────────────────────────────────────────── */
function initRevealAnimations() {
    // NPS card
    revealOnce('.nps-card', { threshold: 0.2 });

    // Header das avaliações
    revealOnce('.avaliacoes-header', { threshold: 0.2 }, 'revealed');

    // Linhas de avaliação — stagger
    document.querySelectorAll('.js-rating-row').forEach(row => {
        const delay = parseInt(row.dataset.delay || 0);
        observeReveal(row, { threshold: 0.15 }, delay);
    });

    // Campos de identificação — fade-up
    document.querySelectorAll('.js-fade-up').forEach(el => {
        const delay = parseInt(el.dataset.delay || 0);
        observeReveal(el, { threshold: 0.2 }, delay);
    });

    // Blocos de perguntas — fade-left
    document.querySelectorAll('.js-fade-left').forEach(el => {
        const delay = parseInt(el.dataset.delay || 0);
        observeReveal(el, { threshold: 0.15 }, delay);
    });
}

function revealOnce(selector, options, className = 'revealed') {
    const el = document.querySelector(selector);
    if (!el) return;
    observeReveal(el, options, 0, className);
}

function observeReveal(el, options, delay = 0, className = 'revealed') {
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setTimeout(() => el.classList.add(className), delay);
                obs.disconnect();
            }
        }, options);
        obs.observe(el);
    } else {
        el.classList.add(className);
    }
}

/* ─────────────────────────────────────────────
   FORM — validação + envio Supabase
───────────────────────────────────────────── */
function initForm() {
    const form = document.getElementById('nps-form');
    const btn = document.getElementById('btn-submit');
    const feedback = document.getElementById('form-feedback');
    if (!form || !btn) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (btn.disabled) return;

        feedback.textContent = '';
        feedback.className = 'form-feedback';

        // Valida NPS — único campo obrigatório
        const npsValue = document.getElementById('nps-value').value;
        if (npsValue === '') {
            showError('Por favor, selecione uma nota de 0 a 10 antes de continuar.');
            document.getElementById('sec-nps').scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        // Coleta dados
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Converte campos numéricos; remove vazios
        ['nps_score', 'nota_palestras', 'nota_painelistas', 'nota_painel',
         'nota_vinho', 'nota_buffet', 'nota_evento_geral'].forEach(f => {
            if (data[f] !== '') data[f] = parseInt(data[f]);
            else delete data[f];
        });

        // Remove campos de texto vazios
        ['nome', 'empresa', 'ponto_positivo', 'ponto_melhoria'].forEach(f => {
            if (!data[f] || !data[f].trim()) delete data[f];
        });

        data.page_url = window.location.href;

        // Loading state
        setLoading(true);

        try {
            const res = await fetch(`${SUPABASE_URL}/rest/v1/nps_vinho_rh`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_KEY,
                    'Authorization': `Bearer ${SUPABASE_KEY}`,
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                const err = await res.text();
                throw new Error(`Supabase ${res.status}: ${err}`);
            }

            // Redireciona para obrigado com nome (se fornecido)
            const nome = data.nome ? encodeURIComponent(data.nome) : '';
            window.location.href = `nps-obrigado.html${nome ? '?nome=' + nome : ''}`;

        } catch (err) {
            console.error('NPS submission error:', err);
            showError('Ocorreu um erro ao enviar. Por favor, tente novamente.');
            setLoading(false);
        }
    });

    function setLoading(state) {
        btn.disabled = state;
        btn.classList.toggle('loading', state);
        const text = btn.querySelector('.btn-text');
        if (text) text.textContent = state ? 'Enviando...' : 'Enviar avaliação';
    }

    function showError(msg) {
        feedback.textContent = msg;
        feedback.className = 'form-feedback error';
    }
}
