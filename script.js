const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
  toggleSwitch.checked = true;
  body.classList.add('dark-mode');
}

toggleSwitch.addEventListener('change', function(event) {
  if (event.target.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
  }
});


}



// script.js
document.addEventListener('DOMContentLoaded', function() {
  const productCard = document.querySelector('.product-card');
  const productImage = productCard.querySelector('.product-image');
  
  const parallaxStrength = 10; // Adjust this value to control parallax effect
  
  productCard.addEventListener('mousemove', (event) => {
    const cardRect = productCard.getBoundingClientRect();
    const mouseX = event.clientX - cardRect.left;
    const mouseY = event.clientY - cardRect.top;

    const offsetX = (mouseX - cardRect.width / 2) / cardRect.width * parallaxStrength;
    const offsetY = (mouseY - cardRect.height / 2) / cardRect.height * parallaxStrength;

    productImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

  productCard.addEventListener('mouseleave', () => {
    productImage.style.transform = 'translate(0, 0)';
  });
});



