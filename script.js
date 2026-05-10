document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modulesDropdown = document.querySelector('.nav-dropdown');
    const modulesTrigger = document.querySelector('.nav-trigger');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('is-visible');
        }, index * 200);
    });

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
