// Markeer dat JS actief is; zonder JS blijven de kaarten gewoon zichtbaar.
document.documentElement.classList.add('js-anim');

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modulesDropdown = document.querySelector('.nav-dropdown');
    const modulesTrigger = document.querySelector('.nav-trigger');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
        cards.forEach((card) => card.classList.add('is-visible'));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries
                .filter((entry) => entry.isIntersecting)
                .forEach((entry, index) => {
                    observer.unobserve(entry.target);
                    setTimeout(() => entry.target.classList.add('is-visible'), index * 60);
                });
        }, { rootMargin: '0px 0px -8% 0px' });
        cards.forEach((card) => observer.observe(card));

        // Vangnet: mocht de observer niet (tijdig) vuren, toon dan alles alsnog.
        setTimeout(() => {
            cards.forEach((card) => card.classList.add('is-visible'));
            observer.disconnect();
        }, 2500);
    }

    if (modulesDropdown && modulesTrigger) {
        modulesTrigger.addEventListener('click', () => {
            const isOpen = modulesDropdown.classList.toggle('is-open');
            modulesTrigger.setAttribute('aria-expanded', String(isOpen));
        });

        document.addEventListener('click', (event) => {
            if (!modulesDropdown.contains(event.target)) {
                modulesDropdown.classList.remove('is-open');
                modulesTrigger.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                modulesDropdown.classList.remove('is-open');
                modulesTrigger.setAttribute('aria-expanded', 'false');
                modulesTrigger.blur();
            }
        });
    }
});
