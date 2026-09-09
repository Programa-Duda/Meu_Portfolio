// === ELEMENTOS PRINCIPAIS ===
const navbar = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let previousScroll = window.scrollY;


// === COMPORTAMENTO DO MENU AO ROLAR A PÁGINA ===
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Adiciona uma linha ao menu quando a página não está mais no topo.
    navbar.classList.toggle('scrolled', currentScroll > 12);

    // Esconde o menu apenas quando a pessoa rola para baixo.
    const isScrollingDown = currentScroll > previousScroll && currentScroll > 140;
    navbar.classList.toggle('hidden', isScrollingDown);

    previousScroll = currentScroll;
}, { passive: true });


// === MENU PARA CELULAR ===
menuButton.addEventListener('click', () => {
    const menuIsOpen = menuButton.getAttribute('aria-expanded') === 'true';

    menuButton.setAttribute('aria-expanded', String(!menuIsOpen));
    menuButton.setAttribute('aria-label', menuIsOpen ? 'Abrir menu' : 'Fechar menu');
    navList.classList.toggle('open');
});

// Fecha o menu após escolher uma seção.
navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navList.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
    });
});


// === ANO ATUAL NO RODAPÉ ===
document.querySelector('#year').textContent = new Date().getFullYear();


// === ANIMAÇÃO SUAVE DE ENTRADA DAS SEÇÕES ===
if (reducedMotion) {
    // Mantém todo o conteúdo visível para quem preferir menos movimento.
    document.querySelectorAll('.reveal').forEach((element) => {
        element.classList.add('visible');
    });
} else {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
});

    document.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
    });
}


/* ==== NÍVEL DAS SKILLS ==== */

const skills = document.querySelectorAll('.skill');

skills.forEach((skill) => {
    const progress = skill.querySelector('.skill-progress');
    const percent = skill.dataset.percent;

    skill.addEventListener('mouseenter', () => {
        progress.style.width = `${percent}%`;
    });

    skill.addEventListener('mouseleave', () => {
        progress.style.width = '0%';
    });
});
