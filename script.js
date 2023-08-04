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





const slider = document.querySelector('.slider');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchmove', touchMove);
slider.addEventListener('touchend', touchEnd);
slider.addEventListener('touchcancel', touchEnd);

function touchStart(event) {
  startPos = event.touches[0].clientX;
  isDragging = true;
  animationID = requestAnimationFrame(animation);
  slider.style.transition = 'none';
}

function touchMove(event) {
  if (!isDragging) return;
  const currentPosition = event.touches[0].clientX;
  const moveAmount = currentPosition - startPos;
  currentTranslate = prevTranslate + moveAmount;
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const threshold = window.innerWidth / 4;
  if (Math.abs(currentTranslate) > threshold) {
    if (currentTranslate > 0) {
      prevTranslate += window.innerWidth;
    } else {
      prevTranslate -= window.innerWidth;
    }
  }

  slider.style.transition = 'transform 0.3s ease-out';
  slider.style.transform = `translateX(${prevTranslate}px)`;
}

function animation() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
  animationID = requestAnimationFrame(animation);
}




