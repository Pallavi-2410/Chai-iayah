// const track = document.querySelector('.mainCard');
// const prevButton = document.querySelector('.prev-btn');
// const nextButton = document.querySelector('.next-btn');
// const items = document.querySelectorAll('.card');
// const itemWidth = items[0].getBoundingClientRect().width + 20; // Account for gap

// let currentIndex = 0;

// function updateCarousel() {
//     const translateX = -currentIndex * itemWidth;
//     track.style.transform = `translateX(${translateX}px)`;
// }

// nextButton.addEventListener('click', () => {
//     if (currentIndex < 2) {
//         currentIndex++;
//         updateCarousel();
//     }
//     console.log(currentIndex, items.length)
// });


// prevButton.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateCarousel();
//     }
// });

// Optional Autoplay
// setInterval(() => {
//     if (currentIndex < items.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     updateCarousel();
// }, 2000); // Adjust time as needed

// Select all carousel containers and buttons
// const carousels = [
//     { container: '.mainCard', prevBtn: '.prev-btn', nextBtn: '.next-btn' },
//     { container: '.mainCard1', prevBtn: '.prev-btn1', nextBtn: '.next-btn1' },
//     { container: '.mainCard2', prevBtn: '.prev-btn2', nextBtn: '.next-btn2' }
// ];

// carousels.forEach(({ container, prevBtn, nextBtn }) => {
//     const carouselContainer = document.querySelector(container);
//     const prevButton = document.querySelector(prevBtn);
//     const nextButton = document.querySelector(nextBtn);

//     let scrollAmount = 0;
//     const scrollStep = carouselContainer.querySelector('.card').offsetWidth + 16; // Card width + margin

//     // Event listeners for buttons
//     prevButton.addEventListener('click', () => {
//         scrollAmount -= scrollStep;
//         if (scrollAmount < 0) {
//             scrollAmount = carouselContainer.scrollWidth - carouselContainer.clientWidth;
//         }
//         carouselContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
//     });

//     nextButton.addEventListener('click', () => {
//         scrollAmount += scrollStep;
//         if (scrollAmount > carouselContainer.scrollWidth - carouselContainer.clientWidth) {
//             scrollAmount = 0;
//         }
//         carouselContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
//     });
// });



// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", () => {
    // Initialize all carousels
    initCarousel("carousel-container", "prev-btn", "next-btn", "mainCard");
    initCarousel("carousel-container1", "prev-btn1", "next-btn1", "mainCard1");
    initCarousel("carousel-container2", "prev-btn2", "next-btn2", "mainCard2");
});

// Function to initialize carousel
function initCarousel(containerClass, prevBtnClass, nextBtnClass, mainCardClass) {
    const container = document.querySelector(`.${containerClass}`);
    const mainCard = container.querySelector(`.${mainCardClass}`);
    const prevBtn = container.querySelector(`.${prevBtnClass}`);
    const nextBtn = container.querySelector(`.${nextBtnClass}`);

    let scrollAmount = 0;

    // Event listener for the previous button
    prevBtn.addEventListener("click", () => {
        scrollAmount -= mainCard.clientWidth;
        if (scrollAmount < 0) scrollAmount = 0; // Prevent scrolling beyond the start
        mainCard.scrollTo({ left: scrollAmount, behavior: "smooth" });
    });

    // Event listener for the next button
    nextBtn.addEventListener("click", () => {
        scrollAmount += mainCard.clientWidth;
        if (scrollAmount > mainCard.scrollWidth - mainCard.clientWidth) {
            scrollAmount = mainCard.scrollWidth - mainCard.clientWidth; // Prevent scrolling beyond the end
        }
        mainCard.scrollTo({ left: scrollAmount, behavior: "smooth" });
    });
}
