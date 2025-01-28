// Get the navbar element
const navbar = document.getElementById('navbar');

// Detect scroll and apply the class to change navbar style
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navbar.classList.add('pill-navbar');
  } else {
    navbar.classList.remove('pill-navbar');
  }
});
