// script.js
document.addEventListener('DOMContentLoaded', function() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('touchstart', () => {
      card.classList.add('sparkling');
    });

    card.addEventListener('touchend', () => {
      card.classList.remove('sparkling');
    });
  });
});

