document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MODO OSCURO/CLARO (Tu código original adaptado) ---
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const htmlEl = document.documentElement;

    function toggleIcons() {
        if (htmlEl.classList.contains('dark')) {
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        } else {
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        }
    }

    themeToggle.addEventListener('click', () => {
        htmlEl.classList.toggle('dark');
        toggleIcons();
    });
    toggleIcons();

    // --- 2. LÓGICA DE PESTAÑAS (TABS) ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Quitar clase active de todos los botones y contenidos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Agregar clase active al botón clickeado
            btn.classList.add('active');

            // Mostrar el contenido correspondiente
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

});

// --- 3. LÓGICA DEL CARRUSEL ---
// Queda fuera del DOMContentLoaded para que los botones HTML lo encuentren fácilmente
let slideIndex = 0;

function moveSlide(direccion) {
    const slides = document.querySelectorAll('.slide');
    
    // Ocultar slide actual
    slides[slideIndex].classList.remove('active-slide');
    
    // Calcular nuevo índice (con lógica circular)
    slideIndex = slideIndex + direccion;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Vuelve al inicio
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Va al final
    }
    
    // Mostrar nuevo slide
    slides[slideIndex].classList.add('active-slide');
}