// script.js

document.addEventListener('DOMContentLoaded', function() {
  const productCards = document.querySelectorAll('.products li');

  productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-5px) scale(1.02)';
      card.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = 'none';
    });
  });
});


