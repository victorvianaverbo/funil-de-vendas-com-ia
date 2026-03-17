document.addEventListener("DOMContentLoaded", () => {

    // Função utilitária para observar elementos entrando na tela e adicionar classe animada
    const setupScrollAnimation = () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Dispara quando 15% do bloco está em tela
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Anima apenas uma vez
                }
            });
        }, observerOptions);

        // Alvos da animação Stagger (Lista do pra quem é)
        const staggerItems = document.querySelectorAll('.stagger-item');
        staggerItems.forEach((item, index) => {
            // Adiciona delay inline baseado no index para efeito cascata (stagger)
            item.style.transitionDelay = `${index * 150}ms`;
            observer.observe(item);
        });
    };

    // Inicialização
    setupScrollAnimation();
});
