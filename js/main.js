const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.8) translate(-50%, -50%) translateX(0)';
    card.style.zIndex = '0';
  });

  const total = cards.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  cards[prevIndex].style.opacity = '1';
  cards[prevIndex].style.transform = 'translate(-50%, -50%) translateX(-300px) scale(0.9)';
  cards[prevIndex].style.zIndex = '1';

  cards[currentIndex].style.opacity = '1';
  cards[currentIndex].style.transform = 'translate(-50%, -50%) translateX(0) scale(1)';
  cards[currentIndex].style.zIndex = '2';

  cards[nextIndex].style.opacity = '1';
  cards[nextIndex].style.transform = 'translate(-50%, -50%) translateX(300px) scale(0.9)';
  cards[nextIndex].style.zIndex = '1';
}

function rotateCarousel(direction) {
  const total = cards.length;
  currentIndex = (currentIndex + direction + total) % total;
  updateCarousel();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') rotateCarousel(1);
  if (e.key === 'ArrowLeft') rotateCarousel(-1);
});

// Touch support
let touchStartX = null;
document.getElementById('carousel').addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.getElementById('carousel').addEventListener('touchend', (e) => {
  if (touchStartX === null) return;
  const deltaX = e.changedTouches[0].screenX - touchStartX;
  if (deltaX > 50) rotateCarousel(-1);
  else if (deltaX < -50) rotateCarousel(1);
  touchStartX = null;
});

updateCarousel();
