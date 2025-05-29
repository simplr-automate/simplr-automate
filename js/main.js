const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.8) translateX(0) translateZ(0)';
    card.style.zIndex = '0';
  });

  const total = cards.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  cards[prevIndex].style.opacity = '1';
  cards[prevIndex].style.transform = 'translateX(-300px) scale(0.9)';
  cards[prevIndex].style.zIndex = '1';

  cards[currentIndex].style.opacity = '1';
  cards[currentIndex].style.transform = 'translateX(0) scale(1)';
  cards[currentIndex].style.zIndex = '2';

  cards[nextIndex].style.opacity = '1';
  cards[nextIndex].style.transform = 'translateX(300px) scale(0.9)';
  cards[nextIndex].style.zIndex = '1';
}

function rotateCarousel(direction) {
  const total = cards.length;
  currentIndex = (currentIndex + direction + total) % total;
  updateCarousel();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') rotateCarousel(1);
  if (e.key === 'ArrowLeft') rotateCarousel(-1);
});

updateCarousel();
