const track = document.querySelector('#mainCard');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const items = document.querySelectorAll('.card');
const itemWidth = items[0].getBoundingClientRect().width + 20; // Account for gap

let currentIndex = 0;

function updateCarousel() {
    const translateX = -currentIndex * itemWidth;
    track.style.transform = `translateX(${translateX}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex--;
        updateCarousel();
    }
});

// Optional Autoplay
// setInterval(() => {
//     if (currentIndex < items.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     updateCarousel();
// }, 2000); // Adjust time as needed
