document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(10, 25, 47, 0.95)';
            header.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        } else {
            header.style.padding = '0';
            header.style.background = 'rgba(10, 25, 47, 0.85)';
            header.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for nav links (already handled by CSS scroll-behavior, but good for custom logic)
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                // Optional: add custom logic here if needed
            }
        });
    });
});
