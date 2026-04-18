// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navbar.classList.remove('active');
  });
});

// Mobile dropdown toggle (tap to open/close)
const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
if (dropdownToggle) {
  dropdownToggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdown = this.closest('.nav-dropdown');
      dropdown.classList.toggle('open');
    }
  });
}

console.log("Hakma Brand Consulting website loaded.");
