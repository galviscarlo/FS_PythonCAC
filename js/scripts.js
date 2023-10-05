const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 5;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 5) % 5;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Agregar una función para reiniciar el slider al final
function restartSlider() {
    setTimeout(() => {
        currentIndex = 0;
        updateSlider();
    }, 6000);
}

// Llamar a la función para reiniciar el slider
restartSlider();