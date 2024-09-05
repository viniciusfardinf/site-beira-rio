let currentIndex = 0;

function moveCarousel(step) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    const indicators = document.querySelectorAll('.carousel-indicators span');

    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

    // Atualiza os indicadores
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const totalImages = document.querySelectorAll('.carousel-images img').length;
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    for (let i = 0; i < totalImages; i++) {
        const span = document.createElement('span');
        span.addEventListener('click', () => {
            currentIndex = i;
            moveCarousel(0);
        });
        indicatorsContainer.appendChild(span);
    }

    // Ativa o primeiro indicador
    if (totalImages > 0) {
        document.querySelector('.carousel-indicators span').classList.add('active');
    }
});
