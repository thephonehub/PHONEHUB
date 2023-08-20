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


